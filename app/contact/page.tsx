import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { PageHero, Section } from "@/components/Section";
import { company } from "@/lib/company";

export const metadata: Metadata = {
  title: "お問い合わせ",
  description: `${company.name}へのお問い合わせ。電話・メール・フォームから受け付けております。`,
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="お問い合わせ"
        description={
          <>
            工事のご依頼・採用に関するお問い合わせ・
            <br className="sm:hidden" />
            その他ご質問など、お気軽にどうぞ。
          </>
        }
      />

      <Section className="relative overflow-hidden bg-white">
        <div className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-brand-100/40 blur-3xl" />
        <div className="pointer-events-none absolute right-0 bottom-10 h-80 w-80 rounded-full bg-brand-200/30 blur-3xl" />
        <div className="relative grid gap-10 lg:grid-cols-[360px_1fr]">
          <div className="space-y-4">
            <div className="card-modern p-6">
              <span className="icon-glow-sm">
                <Phone className="relative z-10 h-5 w-5" />
              </span>
              <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-steel-500">
                Tel
              </p>
              <a
                href={`tel:${company.contact.telDigits}`}
                className="mt-1 block font-display text-2xl font-bold text-brand-700 hover:text-brand-600"
              >
                {company.contact.tel}
              </a>
              <p className="mt-2 text-xs text-steel-600">受付時間 8:00〜17:00</p>
            </div>
            <div className="card-modern p-6">
              <span className="icon-glow-sm">
                <Mail className="relative z-10 h-5 w-5" />
              </span>
              <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-steel-500">
                Email
              </p>
              <a
                href={`mailto:${company.contact.email}`}
                className="mt-1 block break-all text-base font-bold text-brand-700 hover:text-brand-600"
              >
                {company.contact.email}
              </a>
            </div>
            <div className="card-modern p-6">
              <span className="icon-glow-sm">
                <MapPin className="relative z-10 h-5 w-5" />
              </span>
              <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-steel-500">
                Address
              </p>
              <p className="mt-1 text-sm font-bold text-steel-900">
                {company.address.full}
              </p>
            </div>
          </div>
          <div>
            <p className="eyebrow text-brand-600">Form</p>
            <h2 className="mt-4 text-2xl font-bold sm:text-3xl">
              お問い合わせフォーム
            </h2>
            <p className="mt-3 text-pretty text-sm leading-relaxed text-steel-600">
              下記フォームに必要事項をご入力の上、送信してください。
              <br className="hidden sm:block" />
              内容を確認の上、担当者よりご連絡いたします。
            </p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
