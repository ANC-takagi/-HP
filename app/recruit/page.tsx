import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Briefcase,
  Calendar,
  CheckCircle2,
  Clock,
  HeartHandshake,
  MapPin,
  ShieldCheck,
  Sparkles,
  Users,
  Wallet,
} from "lucide-react";
import { PageHero, Section, SectionTitle } from "@/components/Section";
import { company } from "@/lib/company";

export const metadata: Metadata = {
  title: "採用情報",
  description: `${company.name}の採用情報。保温板金職人を募集中。未経験者歓迎・18歳以上・免許不要。社会保険完備・家族手当・交通費支給。`,
};

type RecruitRow = {
  icon: React.ElementType;
  label: string;
  value: React.ReactNode;
};

const rows: RecruitRow[] = [
  {
    icon: Briefcase,
    label: "募集職種",
    value: `${company.recruit.job} 職人`,
  },
  {
    icon: Users,
    label: "雇用形態",
    value: company.recruit.employmentTypes.join(" / "),
  },
  {
    icon: Wallet,
    label: "給与",
    value: (
      <>
        <span className="font-display text-lg font-bold text-brand-700">
          {company.recruit.salary}
        </span>
        <span className="ml-2 text-xs text-steel-600">
          ({company.recruit.salaryNote})
        </span>
      </>
    ),
  },
  {
    icon: MapPin,
    label: "勤務地",
    value: company.recruit.workLocation,
  },
  {
    icon: Clock,
    label: "勤務時間",
    value: company.recruit.workHours,
  },
  {
    icon: Calendar,
    label: "休日",
    value: company.recruit.holidays,
  },
];

export default function RecruitPage() {
  return (
    <>
      <PageHero
        eyebrow="Recruit"
        title="一緒に、ライフラインを支える仲間へ。"
        description={
          <>
            若いチームで、確かな技術を一から身につけられる。
            <br className="sm:hidden" />
            経験の有無は問いません。
            <br className="hidden sm:block" />
            やる気と素直さがあれば、しっかりと育てます。
          </>
        }
      />

      <Section className="bg-white">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative aspect-[5/4] overflow-hidden rounded-3xl bg-steel-100 shadow-[0_30px_80px_-30px_rgba(15,76,129,0.4)]">
            <Image
              src="/images/works/duct-01.jpg"
              alt="現場で働く保温板金職人"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />
          </div>
          <div>
            <p className="eyebrow text-brand-600">Why us?</p>
            <div className="w-fit">
              <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
                手に職をつけて、
                <br />
                長く活躍できる現場へ。
              </h2>
              <span className="mt-5 block h-1 w-full rounded-full bg-gradient-to-r from-brand-500 to-brand-700" />
            </div>
            <p className="mt-7 text-pretty text-base leading-relaxed text-steel-700">
              保温板金は、工場・プラントの稼働を支える専門職です。一度身につけた技術は、長く活かせます。当社では、
              <strong className="text-steel-900">未経験から</strong>
              スタートし、現場で着実に技術を磨ける環境を整えています。
            </p>
            <ul className="mt-7 space-y-3 text-sm">
              {[
                "若いチームで、相談しやすい雰囲気",
                "プラント・工場・配管・機器と幅広い案件で技術が身につく",
                "正社員のほか、下請け・個人事業主としての協力も歓迎",
                "がんばりは家族手当・交通費等の制度でしっかり還元",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3 text-steel-800">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section className="relative overflow-hidden bg-steel-50">
        <div className="pointer-events-none absolute -left-32 top-1/4 h-72 w-72 rounded-full bg-brand-100/50 blur-3xl" />
        <div className="pointer-events-none absolute right-0 bottom-0 h-72 w-72 rounded-full bg-brand-200/30 blur-3xl" />
        <div className="relative">
          <SectionTitle eyebrow="Requirements" title="募集要項" />
          <div className="mx-auto mt-12 max-w-4xl">
            <div className="card-modern overflow-hidden p-0">
              <ul className="divide-y divide-steel-100/80">
                {rows.map((row) => {
                  const Icon = row.icon;
                  return (
                    <li
                      key={row.label}
                      className="grid grid-cols-[7rem_1fr] items-center gap-4 px-5 py-5 transition-colors hover:bg-brand-50/40 sm:grid-cols-[12rem_1fr] sm:px-7"
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-50 to-white text-brand-600 shadow-[inset_0_0_0_1px_rgba(15,76,129,0.08),0_4px_10px_-6px_rgba(15,76,129,0.2)]">
                          <Icon className="h-4 w-4" />
                        </span>
                        <span className="text-xs font-semibold uppercase tracking-wider text-steel-600 sm:text-sm">
                          {row.label}
                        </span>
                      </div>
                      <div className="text-sm text-steel-800 sm:text-base">
                        {row.value}
                      </div>
                    </li>
                  );
                })}
                <li className="grid grid-cols-[7rem_1fr] items-start gap-4 px-5 py-5 transition-colors hover:bg-brand-50/40 sm:grid-cols-[12rem_1fr] sm:px-7">
                  <div className="flex items-center gap-2.5">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-50 to-white text-brand-600 shadow-[inset_0_0_0_1px_rgba(15,76,129,0.08),0_4px_10px_-6px_rgba(15,76,129,0.2)]">
                      <HeartHandshake className="h-4 w-4" />
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-wider text-steel-600 sm:text-sm">
                      福利厚生
                    </span>
                  </div>
                  <ul className="space-y-2 text-sm text-steel-800 sm:text-base">
                    {company.recruit.benefits.map((b) => (
                      <li key={b} className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="grid grid-cols-[7rem_1fr] items-start gap-4 px-5 py-5 transition-colors hover:bg-brand-50/40 sm:grid-cols-[12rem_1fr] sm:px-7">
                  <div className="flex items-center gap-2.5">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-50 to-white text-brand-600 shadow-[inset_0_0_0_1px_rgba(15,76,129,0.08),0_4px_10px_-6px_rgba(15,76,129,0.2)]">
                      <ShieldCheck className="h-4 w-4" />
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-wider text-steel-600 sm:text-sm">
                      応募資格
                    </span>
                  </div>
                  <ul className="space-y-2 text-sm text-steel-800 sm:text-base">
                    {company.recruit.requirements.map((r) => (
                      <li key={r} className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-white">
        <SectionTitle
          eyebrow="Message"
          title="未経験から、確かな技術へ。"
          description="最初は誰でも未経験です。先輩と一緒に現場で学びながら、少しずつできることを増やしていく。そんな働き方を当社は大切にしています。"
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            {
              icon: Sparkles,
              title: "若さと勢い",
              description: "勢いのあるチームで、毎日の現場が刺激になります。",
            },
            {
              icon: ShieldCheck,
              title: "安心の制度",
              description: "社保・厚生年金・雇用保険完備。家族手当・交通費も支給。",
            },
            {
              icon: HeartHandshake,
              title: "多様な働き方",
              description: "正社員・下請け業者・個人事業主、いずれの形態も歓迎します。",
            },
          ].map((m) => {
            const Icon = m.icon;
            return (
              <div key={m.title} className="card-modern p-7 text-center">
                <span className="icon-glow mx-auto">
                  <Icon className="relative z-10 h-6 w-6" />
                </span>
                <h3 className="mt-5 text-base font-bold">{m.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-steel-600">
                  {m.description}
                </p>
              </div>
            );
          })}
        </div>
      </Section>

      <section className="relative overflow-hidden py-20 text-white">
        <Image
          src="/images/works/pipe-02.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-900/95 via-brand-800/85 to-brand-700/70" />
        <div className="absolute inset-0 bg-grid-soft opacity-20" />
        <div className="container-x relative text-center">
          <p className="eyebrow text-brand-200">Apply</p>
          <h2 className="mt-4 text-2xl font-bold sm:text-3xl">
            応募・お問い合わせ
          </h2>
          <p className="mt-3 text-sm text-brand-100 sm:text-base">
            お電話・メール・フォームから受け付けております。お気軽にどうぞ。
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/contact?type=recruit" className="btn-light">
              採用に応募する
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={`tel:${company.contact.telDigits}`}
              className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-brand-200"
            >
              {company.contact.tel}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
