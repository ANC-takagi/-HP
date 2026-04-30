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
        description="若いチームで、確かな技術を一から身につけられる。経験の有無は問いません。やる気と素直さがあれば、しっかりと育てます。"
      />

      <Section className="bg-white">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative aspect-[5/4] overflow-hidden rounded-sm bg-steel-100">
            <Image
              src="/images/works/duct-01.jpg"
              alt="現場で働く保温板金職人"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <p className="font-display text-xs font-bold uppercase tracking-[0.3em] text-brand-600">
              Why us?
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">
              手に職をつけて、
              <br />
              長く活躍できる現場へ。
            </h2>
            <span className="mt-5 block h-1 w-12 rounded-full bg-brand-600" />
            <p className="mt-7 text-base leading-relaxed text-steel-700">
              保温板金は、工場・プラントの稼働を支える専門職です。
              一度身につけた技術は、長く活かせます。当社では、
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
                <li
                  key={t}
                  className="flex items-start gap-3 text-steel-800"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section className="bg-steel-50">
        <SectionTitle eyebrow="Requirements" title="募集要項" />
        <div className="mx-auto mt-12 max-w-4xl overflow-hidden rounded-sm border border-steel-200 bg-white">
          <table className="w-full text-left text-sm">
            <tbody>
              {rows.map((row, idx) => {
                const Icon = row.icon;
                return (
                  <tr
                    key={row.label}
                    className={
                      idx !== rows.length - 1
                        ? "border-b border-steel-100"
                        : ""
                    }
                  >
                    <th className="w-32 bg-steel-50 px-5 py-4 align-top sm:w-48">
                      <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-steel-600 sm:text-sm">
                        <Icon className="h-4 w-4 text-brand-600" />
                        {row.label}
                      </span>
                    </th>
                    <td className="px-5 py-4 text-steel-800">{row.value}</td>
                  </tr>
                );
              })}
              <tr className="border-t border-steel-100">
                <th className="w-32 bg-steel-50 px-5 py-4 align-top sm:w-48">
                  <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-steel-600 sm:text-sm">
                    <HeartHandshake className="h-4 w-4 text-brand-600" />
                    福利厚生
                  </span>
                </th>
                <td className="px-5 py-4 text-steel-800">
                  <ul className="space-y-2">
                    {company.recruit.benefits.map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-2"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </td>
              </tr>
              <tr className="border-t border-steel-100">
                <th className="w-32 bg-steel-50 px-5 py-4 align-top sm:w-48">
                  <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-steel-600 sm:text-sm">
                    <ShieldCheck className="h-4 w-4 text-brand-600" />
                    応募資格
                  </span>
                </th>
                <td className="px-5 py-4 text-steel-800">
                  <ul className="space-y-2">
                    {company.recruit.requirements.map((r) => (
                      <li
                        key={r}
                        className="flex items-start gap-2"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
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
              <div
                key={m.title}
                className="rounded-sm border border-steel-200 bg-white p-7 text-center"
              >
                <Icon className="mx-auto h-8 w-8 text-brand-600" />
                <h3 className="mt-4 text-base font-bold">{m.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-steel-600">
                  {m.description}
                </p>
              </div>
            );
          })}
        </div>
      </Section>

      <section className="relative overflow-hidden bg-brand-700 py-20 text-white">
        <Image
          src="/images/works/pipe-02.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-900/95 via-brand-800/85 to-brand-700/70" />
        <div className="container-x relative text-center">
          <p className="font-display text-xs font-bold uppercase tracking-[0.3em] text-brand-200">
            Apply
          </p>
          <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
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
