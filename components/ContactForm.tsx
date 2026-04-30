"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { AlertCircle, CheckCircle2, Loader2, Send } from "lucide-react";
import {
  contactSchema,
  contactTypeOptions,
  type ContactInput,
} from "@/lib/contactSchema";
import { cn } from "@/lib/utils";

type SendState =
  | { status: "idle" }
  | { status: "submitting" }
  | { status: "success" }
  | { status: "error"; message: string };

function ContactFormInner() {
  const searchParams = useSearchParams();
  const initialType =
    (searchParams.get("type") as ContactInput["type"] | null) ?? "general";

  const [send, setSend] = useState<SendState>({ status: "idle" });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      type: initialType,
      name: "",
      company: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  useEffect(() => {
    if (initialType) setValue("type", initialType);
  }, [initialType, setValue]);

  const onSubmit = async (data: ContactInput) => {
    setSend({ status: "submitting" });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = (await res.json()) as { ok?: boolean; error?: string };
      if (!res.ok || !json.ok) {
        throw new Error(
          json.error ?? "送信に失敗しました。お手数ですが少し時間をおいて再度お試しください。",
        );
      }
      setSend({ status: "success" });
      reset({
        type: "general",
        name: "",
        company: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (e) {
      setSend({
        status: "error",
        message:
          e instanceof Error
            ? e.message
            : "送信に失敗しました。お手数ですが少し時間をおいて再度お試しください。",
      });
    }
  };

  if (send.status === "success") {
    return (
      <div className="rounded-sm border border-brand-200 bg-brand-50 p-8 text-center">
        <CheckCircle2 className="mx-auto h-12 w-12 text-brand-600" />
        <h3 className="mt-4 text-xl font-bold text-brand-700">
          お問い合わせありがとうございます。
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-steel-700">
          内容を確認の上、担当者よりご連絡いたします。
          <br />
          数日経っても返信がない場合は、メール不達の可能性がございます。
          <br />
          お手数ですがお電話にてお問い合わせください。
        </p>
        <button
          type="button"
          onClick={() => setSend({ status: "idle" })}
          className="mt-6 text-sm font-semibold text-brand-700 underline hover:text-brand-600"
        >
          もう一度送信する
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="space-y-6 rounded-sm border border-steel-200 bg-white p-6 sm:p-8"
    >
      <Field
        label="お問い合わせ種別"
        required
        error={errors.type?.message}
      >
        <select
          {...register("type")}
          className={inputBase(errors.type)}
        >
          {contactTypeOptions.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
      </Field>

      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="お名前" required error={errors.name?.message}>
          <input
            type="text"
            autoComplete="name"
            placeholder="山田 太郎"
            {...register("name")}
            className={inputBase(errors.name)}
          />
        </Field>
        <Field label="会社名(任意)" error={errors.company?.message}>
          <input
            type="text"
            autoComplete="organization"
            placeholder="株式会社○○"
            {...register("company")}
            className={inputBase(errors.company)}
          />
        </Field>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="メールアドレス" required error={errors.email?.message}>
          <input
            type="email"
            autoComplete="email"
            placeholder="example@mail.com"
            {...register("email")}
            className={inputBase(errors.email)}
          />
        </Field>
        <Field label="電話番号(任意)" error={errors.phone?.message}>
          <input
            type="tel"
            autoComplete="tel"
            placeholder="000-0000-0000"
            {...register("phone")}
            className={inputBase(errors.phone)}
          />
        </Field>
      </div>

      <Field label="件名" required error={errors.subject?.message}>
        <input
          type="text"
          placeholder="例) 工場の保温板金についてお見積り依頼"
          {...register("subject")}
          className={inputBase(errors.subject)}
        />
      </Field>

      <Field label="お問い合わせ内容" required error={errors.message?.message}>
        <textarea
          rows={7}
          placeholder="ご相談内容や、現場の概要、希望時期などをご記入ください。"
          {...register("message")}
          className={inputBase(errors.message)}
        />
      </Field>

      <div>
        <label className="flex items-start gap-3 text-sm text-steel-700">
          <input
            type="checkbox"
            {...register("privacy")}
            className="mt-1 h-4 w-4 shrink-0 accent-brand-600"
          />
          <span>
            ご入力いただいた個人情報は、お問い合わせへの対応のみに利用し、
            ご本人の同意なく第三者へ提供することはありません。同意の上、送信します。
          </span>
        </label>
        {errors.privacy?.message && (
          <p className="mt-2 flex items-center gap-1 text-xs text-red-600">
            <AlertCircle className="h-4 w-4" />
            {errors.privacy.message}
          </p>
        )}
      </div>

      {send.status === "error" && (
        <div className="flex items-start gap-3 rounded-sm border border-red-200 bg-red-50 p-4 text-sm text-red-700">
          <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" />
          <span>{send.message}</span>
        </div>
      )}

      <div>
        <button
          type="submit"
          disabled={send.status === "submitting"}
          className="btn-primary w-full sm:w-auto"
        >
          {send.status === "submitting" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              送信中...
            </>
          ) : (
            <>
              <Send className="h-4 w-4" />
              この内容で送信する
            </>
          )}
        </button>
      </div>
    </form>
  );
}

export function ContactForm() {
  return (
    <Suspense
      fallback={
        <div className="rounded-sm border border-steel-200 bg-white p-8 text-center text-sm text-steel-600">
          読み込み中...
        </div>
      }
    >
      <ContactFormInner />
    </Suspense>
  );
}

function Field({
  label,
  required,
  error,
  children,
}: {
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-steel-800">
        {label}
        {required && (
          <span className="rounded bg-brand-600 px-1.5 py-0.5 text-[10px] font-bold tracking-wider text-white">
            必須
          </span>
        )}
      </label>
      {children}
      {error && (
        <p className="mt-2 flex items-center gap-1 text-xs text-red-600">
          <AlertCircle className="h-4 w-4" />
          {error}
        </p>
      )}
    </div>
  );
}

function inputBase(error: unknown) {
  return cn(
    "w-full rounded-sm border bg-white px-4 py-2.5 text-sm text-steel-900 placeholder:text-steel-400 focus:outline-none focus:ring-2 focus:ring-brand-300",
    error
      ? "border-red-300 focus:border-red-400 focus:ring-red-200"
      : "border-steel-300 focus:border-brand-500",
  );
}
