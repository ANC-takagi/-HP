import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Mail, Phone } from "lucide-react";
import { PageHero, Section, SectionTitle } from "@/components/Section";
import { company } from "@/lib/company";

export const metadata: Metadata = {
  title: "会社案内",
  description: `${company.name}の会社概要・代表挨拶。代表は${company.representative}。${company.address.full}にて熱絶縁工事(保温板金)を行っています。`,
};

const profile: { label: string; value: string | React.ReactNode }[] = [
  { label: "会社名", value: company.name },
  { label: "代表者", value: company.representative },
  { label: "所在地", value: company.address.full },
  {
    label: "設立",
    value: `${company.founded} (${company.foundedNote})`,
  },
  { label: "事業内容", value: company.business },
  {
    label: "対応エリア",
    value: company.serviceAreas.join(" / "),
  },
  {
    label: "電話番号",
    value: (
      <a
        href={`tel:${company.contact.telDigits}`}
        className="font-display text-brand-700 hover:text-brand-600"
      >
        {company.contact.tel}
      </a>
    ),
  },
  {
    label: "メール",
    value: (
      <a
        href={`mailto:${company.contact.email}`}
        className="break-all text-brand-700 hover:text-brand-600"
      >
        {company.contact.email}
      </a>
    ),
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="会社案内"
        description={
          <>
            {company.name}は、令和元年に千葉県市原市で創業した
            <br className="sm:hidden" />
            熱絶縁工事(保温板金)会社です。
          </>
        }
      />

      <Section className="bg-white">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-start">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-steel-100 shadow-[0_30px_80px_-30px_rgba(15,76,129,0.4)]">
            <Image
              src="/images/hero.jpg"
              alt="屋外の大型配管 保温板金施工"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />
          </div>
          <div>
            <p className="eyebrow text-brand-600">Message</p>
            <div className="w-fit">
              <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
                みんなのライフラインを、
                <br />
                静かに、確かに支える。
              </h2>
              <span className="mt-5 block h-1 w-full rounded-full bg-gradient-to-r from-brand-500 to-brand-700" />
            </div>
            <div className="prose prose-steel mt-7 max-w-none space-y-5 text-pretty text-base leading-relaxed text-steel-700">
              <p>
                工場やプラント、ビルの空調設備など、私たちの暮らしを支える「ライフライン」は、目に見えない多くの設備によって成り立っています。その設備の熱を逃さず、結露や凍結から守る——それが私たち保温板金職人の仕事です。
              </p>
              <p>
                {company.name}は、令和元年に千葉県市原市で創業しました。若いチームで、勢いと柔軟さを武器に、現場ごとに最適な施工をご提供しています。小さな配管から大型のプラント設備まで、一つひとつの仕事に丁寧に向き合うことで、お客様の信頼を積み重ねてきました。
              </p>
              <p>
                これから入社する仲間にも、お取引先様にも、「この会社と一緒にやってよかった」と思っていただけるような会社であり続けたい。そのために、技術と人を磨き、未来のライフラインを支え続けてまいります。
              </p>
              <p className="pt-2 text-right">
                代表取締役{" "}
                <span className="text-lg font-bold text-steel-900">
                  {company.representative}
                </span>
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section className="relative overflow-hidden bg-steel-50">
        <div className="pointer-events-none absolute -left-32 top-1/4 h-72 w-72 rounded-full bg-brand-100/50 blur-3xl" />
        <div className="pointer-events-none absolute right-0 bottom-0 h-72 w-72 rounded-full bg-brand-200/30 blur-3xl" />
        <div className="relative">
          <SectionTitle eyebrow="Profile" title="会社概要" align="center" />
          <div className="mx-auto mt-12 max-w-3xl">
            <div className="card-modern overflow-hidden p-0 !border-2 !border-brand-600">
              <ul className="divide-y divide-brand-600/15">
                {profile.map((row) => (
                  <li
                    key={row.label}
                    className="grid grid-cols-[6.5rem_1fr] items-center gap-4 px-5 py-5 transition-colors hover:bg-brand-50/40 sm:grid-cols-[10rem_1fr] sm:px-7"
                  >
                    <div className="flex items-center gap-2">
                      <span className="h-3 w-1 rounded-full bg-gradient-to-b from-brand-400 to-brand-700" />
                      <span className="text-xs font-semibold uppercase tracking-wider text-steel-600 sm:text-sm">
                        {row.label}
                      </span>
                    </div>
                    <div className="text-sm text-steel-800 sm:text-base">
                      {row.value}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-white">
        <div
          className="relative overflow-hidden rounded-3xl p-8 text-center text-white sm:p-12"
          style={{
            background:
              "linear-gradient(135deg, #1B5DA0 0%, #0F4C81 50%, #082C4B 100%)",
          }}
        >
          <div className="pointer-events-none absolute inset-0 bg-grid-soft opacity-20" />
          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-brand-300/20 blur-3xl" />
          <div className="pointer-events-none absolute -left-20 -bottom-20 h-72 w-72 rounded-full bg-brand-400/20 blur-3xl" />
          <div className="relative">
            <h2 className="text-2xl font-bold sm:text-3xl">
              お問い合わせ・ご相談はこちら
            </h2>
            <p className="mt-3 text-pretty text-brand-100">
              工事のお見積り、採用に関するご質問など、
              <br className="sm:hidden" />
              お気軽にどうぞ。
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <a
                href={`tel:${company.contact.telDigits}`}
                className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-bold text-brand-700 shadow-lg shadow-black/10 transition-all hover:-translate-y-0.5 hover:shadow-xl"
              >
                <Phone className="h-4 w-4" />
                {company.contact.tel}
              </a>
              <Link href="/contact" className="btn-light">
                <Mail className="h-4 w-4" />
                お問い合わせフォーム
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
