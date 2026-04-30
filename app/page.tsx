import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Briefcase,
  Building2,
  ImageIcon,
  Phone,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import { Section, SectionTitle } from "@/components/Section";
import { company } from "@/lib/company";
import { works } from "@/lib/works";

export default function HomePage() {
  const featuredWorks = works.slice(0, 4);

  return (
    <>
      <section className="relative isolate min-h-[88vh] w-full overflow-hidden">
        <Image
          src="/images/hero.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-900/85 via-brand-800/70 to-steel-900/70" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,255,255,0.12),_transparent_60%)]" />

        <div className="relative z-10 flex min-h-[88vh] items-center">
          <div className="container-x w-full pt-20 pb-12">
            <p className="font-display text-xs font-bold uppercase tracking-[0.4em] text-brand-200 animate-fadeUp">
              KIKUCHI KOGYO — Thermal Insulation
            </p>
            <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-[1.1] text-white text-balance sm:text-6xl lg:text-7xl">
              <span className="block animate-fadeUp [animation-delay:120ms] opacity-0 [animation-fill-mode:forwards]">
                みんなの
              </span>
              <span className="block animate-fadeUp [animation-delay:240ms] opacity-0 [animation-fill-mode:forwards]">
                <span className="text-brand-200">ライフライン</span>を支える。
              </span>
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-relaxed text-brand-100 sm:text-lg animate-fadeUp [animation-delay:360ms] opacity-0 [animation-fill-mode:forwards]">
              工場・プラント・空調ダクト・配管・ボイラー・タンクなど。
              <br className="hidden sm:block" />
              熱を逃さず、設備を守る。{company.name}は、千葉県市原市から
              <strong className="text-white">確かな保温板金</strong>
              をお届けします。
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4 animate-fadeUp [animation-delay:480ms] opacity-0 [animation-fill-mode:forwards]">
              <Link href="/contact" className="btn-primary">
                お問い合わせ
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/works" className="btn-light">
                施工事例を見る
                <ImageIcon className="h-4 w-4" />
              </Link>
              <a
                href={`tel:${company.contact.telDigits}`}
                className="ml-1 inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-brand-200"
              >
                <Phone className="h-4 w-4" />
                <span className="font-display tracking-wide">
                  {company.contact.tel}
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Section className="bg-white">
        <SectionTitle
          eyebrow="About Us"
          title="若さと勢いで、確かな技術を。"
          description={`${company.name}は、令和元年創業の熱絶縁工事(保温板金)会社です。プラントから工場、空調まで、熱を扱うあらゆる設備の保温・断熱を支える縁の下の力持ちとして、千葉・神奈川・茨城を中心に活動しています。`}
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {company.strengths.map((s) => (
            <div
              key={s.title}
              className="group relative overflow-hidden rounded-sm border border-steel-200 bg-white p-7 transition-all hover:-translate-y-1 hover:border-brand-300 hover:shadow-lg"
            >
              <div className="absolute -right-4 -top-4 h-20 w-20 rounded-full bg-brand-50 transition-transform group-hover:scale-150" />
              <Sparkles className="relative h-8 w-8 text-brand-600" />
              <h3 className="relative mt-5 text-lg font-bold text-steel-900">
                {s.title}
              </h3>
              <p className="relative mt-3 text-sm leading-relaxed text-steel-600">
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-steel-50">
        <SectionTitle
          eyebrow="Services"
          title="幅広い設備に対応する、保温板金。"
          description="熱絶縁工事(保温板金)は、配管やダクトを保温材で覆い、その上に板金を施工することで熱の損失を防ぎ、結露・凍結を防止する重要な工事です。"
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {company.facilities.map((f) => (
            <div
              key={f}
              className="flex items-start gap-3 rounded-sm border border-steel-200 bg-white p-5"
            >
              <span className="mt-1 inline-flex h-2 w-2 shrink-0 rounded-full bg-brand-600" />
              <span className="text-sm font-medium text-steel-800">{f}</span>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link href="/services" className="btn-outline">
            事業内容を詳しく見る
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>

      <Section className="bg-white">
        <SectionTitle
          eyebrow="Works"
          title="施工事例"
          description="プラント・工場・配管・機器など、当社が手がけた保温板金の事例の一部をご紹介します。"
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featuredWorks.map((w) => (
            <Link
              key={w.id}
              href="/works"
              className="group relative block aspect-[4/5] overflow-hidden rounded-sm bg-steel-100"
            >
              <Image
                src={w.src}
                alt={w.alt}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-steel-900/85 via-steel-900/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                <p className="text-xs uppercase tracking-widest text-brand-200">
                  Case
                </p>
                <p className="mt-1 text-sm font-semibold">{w.title}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link href="/works" className="btn-outline">
            すべての施工事例を見る
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>

      <section className="relative overflow-hidden bg-brand-700 py-20 text-white sm:py-24">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/images/works/duct-02.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-brand-900/95 via-brand-800/85 to-brand-700/70" />
        <div className="container-x relative grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="font-display text-xs font-bold uppercase tracking-[0.3em] text-brand-200">
              Recruit
            </p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              一緒に、未来のライフラインを支えませんか？
            </h2>
            <p className="mt-5 text-base leading-relaxed text-brand-100">
              {company.name}では保温板金職人を募集中です。未経験の方も歓迎。
              若いチームで、確かな技術を一から身につけられる環境です。
            </p>
            <ul className="mt-7 space-y-2 text-sm">
              {company.recruit.requirements.map((r) => (
                <li key={r} className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-brand-200" />
                  {r}
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-3 gap-3">
            <div className="col-span-3 flex flex-col gap-1 rounded-sm bg-white/10 p-5 backdrop-blur">
              <span className="text-xs uppercase tracking-widest text-brand-200">
                Job
              </span>
              <span className="text-lg font-bold">
                {company.recruit.job} 職人
              </span>
            </div>
            <div className="flex flex-col gap-1 rounded-sm bg-white/10 p-5 backdrop-blur">
              <Briefcase className="h-4 w-4 text-brand-200" />
              <span className="mt-2 text-[10px] uppercase tracking-widest text-brand-200">
                Salary
              </span>
              <span className="text-sm font-bold">
                {company.recruit.salary}
              </span>
            </div>
            <div className="flex flex-col gap-1 rounded-sm bg-white/10 p-5 backdrop-blur">
              <Building2 className="h-4 w-4 text-brand-200" />
              <span className="mt-2 text-[10px] uppercase tracking-widest text-brand-200">
                Place
              </span>
              <span className="text-sm font-bold">市原市</span>
            </div>
            <div className="flex flex-col gap-1 rounded-sm bg-white/10 p-5 backdrop-blur">
              <Users className="h-4 w-4 text-brand-200" />
              <span className="mt-2 text-[10px] uppercase tracking-widest text-brand-200">
                Welcome
              </span>
              <span className="text-sm font-bold">未経験OK</span>
            </div>
            <div className="col-span-3 mt-2">
              <Link href="/recruit" className="btn-light w-full sm:w-auto">
                採用情報を見る
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Section className="bg-white">
        <div className="rounded-sm border border-steel-200 bg-gradient-to-br from-white to-steel-50 p-8 lg:p-14">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="font-display text-xs font-bold uppercase tracking-[0.3em] text-brand-600">
                Contact
              </p>
              <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">
                お見積り・ご相談は
                <br className="hidden sm:block" />
                お気軽にお問い合わせください。
              </h2>
              <p className="mt-5 text-base leading-relaxed text-steel-600">
                工事のご依頼・採用に関するお問い合わせ、その他ご質問など、
                <br className="hidden sm:block" />
                お電話・メール・フォームから受け付けております。
              </p>
            </div>
            <div className="space-y-4">
              <a
                href={`tel:${company.contact.telDigits}`}
                className="flex items-center justify-between rounded-sm border border-brand-200 bg-white p-6 transition-all hover:border-brand-600 hover:shadow"
              >
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-50">
                    <Phone className="h-5 w-5 text-brand-600" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-steel-500">
                      Tel
                    </p>
                    <p className="font-display text-2xl font-bold text-brand-700">
                      {company.contact.tel}
                    </p>
                  </div>
                </div>
                <ArrowRight className="h-5 w-5 text-brand-600" />
              </a>
              <Link
                href="/contact"
                className="flex items-center justify-between rounded-sm bg-brand-700 p-6 text-white transition-all hover:bg-brand-800"
              >
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-brand-200">
                    Contact Form
                  </p>
                  <p className="mt-1 text-lg font-bold">
                    お問い合わせフォーム
                  </p>
                </div>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
