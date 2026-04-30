import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactSchema, contactTypeOptions } from "@/lib/contactSchema";
import { company } from "@/lib/company";

export const runtime = "nodejs";

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: Request) {
  try {
    const json = await request.json().catch(() => null);
    const parsed = contactSchema.safeParse(json);
    if (!parsed.success) {
      return NextResponse.json(
        {
          ok: false,
          error: "入力内容に誤りがあります。フォームをご確認ください。",
        },
        { status: 400 },
      );
    }

    const data = parsed.data;
    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL ?? company.contact.email;
    const fromEmail = process.env.CONTACT_FROM_EMAIL ?? "onboarding@resend.dev";

    if (!apiKey) {
      console.error(
        "[contact] RESEND_API_KEY が未設定です。Vercel等の環境変数に設定してください。",
      );
      return NextResponse.json(
        {
          ok: false,
          error:
            "現在メール送信機能の準備中です。お手数ですが、お電話または直接メールでお問い合わせください。",
        },
        { status: 503 },
      );
    }

    const typeLabel =
      contactTypeOptions.find((o) => o.value === data.type)?.label ?? data.type;

    const subject = `【${company.name} HP】${typeLabel} - ${data.subject}`;
    const lines = [
      `お問い合わせ種別: ${typeLabel}`,
      `お名前: ${data.name}`,
      `会社名: ${data.company || "(未入力)"}`,
      `メール: ${data.email}`,
      `電話: ${data.phone || "(未入力)"}`,
      `件名: ${data.subject}`,
      "",
      "■ お問い合わせ内容",
      data.message,
      "",
      "------",
      `送信日時: ${new Date().toLocaleString("ja-JP", {
        timeZone: "Asia/Tokyo",
      })}`,
    ];
    const text = lines.join("\n");
    const html = `
      <div style="font-family: -apple-system, 'Helvetica Neue', sans-serif; color: #1A1A1A; line-height: 1.7;">
        <h2 style="color: #0F4C81; border-bottom: 3px solid #0F4C81; padding-bottom: 8px;">${escapeHtml(company.name)} - お問い合わせ</h2>
        <table style="border-collapse: collapse; width: 100%; margin-top: 16px;">
          <tr><th style="text-align: left; background:#F4F6F8; padding:8px 12px; width:140px;">種別</th><td style="padding:8px 12px; border-bottom: 1px solid #E5E9ED;">${escapeHtml(typeLabel)}</td></tr>
          <tr><th style="text-align: left; background:#F4F6F8; padding:8px 12px;">お名前</th><td style="padding:8px 12px; border-bottom: 1px solid #E5E9ED;">${escapeHtml(data.name)}</td></tr>
          <tr><th style="text-align: left; background:#F4F6F8; padding:8px 12px;">会社名</th><td style="padding:8px 12px; border-bottom: 1px solid #E5E9ED;">${escapeHtml(data.company || "(未入力)")}</td></tr>
          <tr><th style="text-align: left; background:#F4F6F8; padding:8px 12px;">メール</th><td style="padding:8px 12px; border-bottom: 1px solid #E5E9ED;"><a href="mailto:${escapeHtml(data.email)}">${escapeHtml(data.email)}</a></td></tr>
          <tr><th style="text-align: left; background:#F4F6F8; padding:8px 12px;">電話</th><td style="padding:8px 12px; border-bottom: 1px solid #E5E9ED;">${escapeHtml(data.phone || "(未入力)")}</td></tr>
          <tr><th style="text-align: left; background:#F4F6F8; padding:8px 12px;">件名</th><td style="padding:8px 12px; border-bottom: 1px solid #E5E9ED;">${escapeHtml(data.subject)}</td></tr>
        </table>
        <h3 style="color: #0F4C81; margin-top: 24px;">お問い合わせ内容</h3>
        <div style="white-space: pre-wrap; padding: 16px; background:#F4F6F8; border-left: 4px solid #0F4C81;">${escapeHtml(data.message)}</div>
        <p style="color:#727A82; font-size:12px; margin-top:24px;">送信日時: ${new Date().toLocaleString("ja-JP", { timeZone: "Asia/Tokyo" })}</p>
      </div>
    `;

    const resend = new Resend(apiKey);
    const result = await resend.emails.send({
      from: `${company.name} HP <${fromEmail}>`,
      to: [toEmail],
      replyTo: data.email,
      subject,
      text,
      html,
    });

    if (result.error) {
      console.error("[contact] Resend error:", result.error);
      return NextResponse.json(
        {
          ok: false,
          error:
            "メール送信に失敗しました。お手数ですが、お電話または直接メールでお問い合わせください。",
        },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("[contact] unexpected error:", e);
    return NextResponse.json(
      {
        ok: false,
        error:
          "送信処理中にエラーが発生しました。お手数ですが少し時間をおいて再度お試しください。",
      },
      { status: 500 },
    );
  }
}
