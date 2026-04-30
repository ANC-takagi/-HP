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
import { HeroCarousel } from "@/components/HeroCarousel";
import { Section, SectionTitle } from "@/components/Section";
import { company } from "@/lib/company";
import { works } from "@/lib/works";

export default function HomePage() {
  const featuredWorks = works.slice(0, 4);

  return (
    <>
      <section className="relative isolate min-h-[88vh] w-full overflow-hidden">
        <HeroCarousel />
        <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-br from-brand-900/85 via-brand-800/65 to-steel-900/70" />
        <div className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,255,255,0.12),_transparent_60%)]" />

        <div className="relative z-20 flex min-h-[88vh] items-center">
          <div className="container-x w-full pt-20 pb-16">
            <p className="font-display text-xs font-bold uppercase tracking-[0.4em] text-brand-200 animate-fadeUp">
              KIKUCHI KOGYO — Thermal Insulation
            </p>
            <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-[1.1] text-white text-balance sm:text-6xl lg:text-7xl">
              <span className="block animate-fadeUp [animation-delay:120ms] opacity-0 [animation-fill-mode:forwards]">
                みんなの
              </span>
              <span className="block animate-fadeUp [animation-delay:240ms] opacity-0 [animation-fill-mode:forwards]">
                <span className="bg-gradient-to-r from-brand-200 to-white bg-clip-text text-transparent">
                  ライフライン
                </span>
                を支える。
              </span>
            </h1>
            <p className="mt-7 max-w-2xl text-pretty text-base leading-relaxed text-brand-100 sm:text-lg animate-fadeUp [animation-delay:360ms] opacity-0 [animation-fill-mode:forwards]">
              工場・プラント・空調ダクト・
              <br className="sm:hidden" />
              配管・ボイラー・タンクなど。
              <br className="hidden sm:block" />
              熱を逃さず、設備を守る。
              <br className="sm:hidden" />
              {company.name}は、千葉県市原市から
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

      <Section className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 -z-0 bg-grid-soft opacity-50" />
        <div className="relative">
          <SectionTitle
            eyebrow="About Us"
            title={
              <>
                若さと勢いで、
                <br className="sm:hidden" />
                確かな技術を。
              </>
            }
            description={`${company.name}は、令和元年創業の熱絶縁工事(保温板金)会社です。プラントから工場、空調まで、熱を扱うあらゆる設備の保温・断熱を支える縁の下の力持ちとして、千葉・神奈川・茨城を中心に活動しています。`}
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {company.strengths.map((s, i) => (
              <div key={s.title} className="card-modern group p-7">
                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-brand-50/60 blur-xl transition-all duration-500 group-hover:scale-150" />
                <span className="icon-glow">
                  <Sparkles className="relative z-10 h-6 w-6" />
                </span>
                <span className="absolute right-6 top-6 font-display text-xs font-bold tracking-[0.3em] text-brand-300">
                  0{i + 1}
                </span>
                <h3 className="relative mt-5 text-lg font-bold text-steel-900">
                  {s.title}
                </h3>
                <p className="relative mt-3 text-sm leading-relaxed text-steel-600">
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="relative overflow-hidden bg-steel-50">
        <div className="pointer-events-none absolute -left-20 top-1/3 h-72 w-72 rounded-full bg-brand-100/40 blur-3xl" />
        <div className="pointer-events-none absolute right-0 bottom-10 h-72 w-72 rounded-full bg-brand-200/30 blur-3xl" />
        <div className="relative">
          <SectionTitle
            eyebrow="Services"
            title={
              <>
                幅広い設備に対応する、
                <br className="sm:hidden" />
                保温板金。
              </>
            }
            description="熱絶縁工事(保温板金)は、配管やダクトを保温材で覆い、その上に板金を施工することで熱の損失を防ぎ、結露・凍結を防止する重要な工事です。"
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {company.facilities.map((f) => (
              <div
                key={f}
                className="group flex items-center gap-3 rounded-2xl border border-steel-200/70 bg-white/90 px-5 py-4 backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-[0_12px_28px_-12px_rgba(15,76,129,0.18)]"
              >
                <span className="relative inline-flex h-2.5 w-2.5 shrink-0 items-center justify-center">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-50 transition-transform duration-300 group-hover:scale-150" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-600" />
                </span>
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
              className="group relative block aspect-[4/5] overflow-hidden rounded-2xl bg-steel-100"
            >
              <Image
                src={w.src}
                alt={w.alt}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-steel-900/90 via-steel-900/15 to-transparent" />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 transition-all duration-300 group-hover:ring-white/30" />
              <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                <span className="inline-flex items-center gap-2 rounded-full border border-brand-300 bg-brand-500/20 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-100 backdrop-blur">
                  Case
                </span>
                <p className="mt-3 text-sm font-semibold">{w.title}</p>
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

      <section className="relative overflow-hidden py-20 text-white sm:py-24">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/works/duct-02.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-900/95 via-brand-800/85 to-brand-700/70" />
          <div className="absolute inset-0 bg-grid-soft opacity-20" />
        </div>
        <div className="container-x relative grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="eyebrow text-brand-200">Recruit</p>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              一緒に、未来のライフラインを支えませんか？
            </h2>
            <p className="mt-5 text-pretty text-base leading-relaxed text-brand-100">
              {company.name}では保温板金職人を募集中です。
              <br className="sm:hidden" />
              未経験の方も歓迎。若いチームで、
              <br className="sm:hidden" />
              確かな技術を一から身につけられる環境です。
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
            <div className="glass-card col-span-3 flex flex-col gap-1 p-5">
              <span className="text-xs uppercase tracking-widest text-brand-200">
                Job
              </span>
              <span className="text-lg font-bold">
                {company.recruit.job} 職人
              </span>
            </div>
            <div className="glass-card flex flex-col gap-1 p-5">
              <Briefcase className="h-4 w-4 text-brand-200" />
              <span className="mt-2 text-[10px] uppercase tracking-widest text-brand-200">
                Salary
              </span>
              <span className="text-sm font-bold">
                {company.recruit.salary}
              </span>
            </div>
            <div className="glass-card flex flex-col gap-1 p-5">
              <Building2 className="h-4 w-4 text-brand-200" />
              <span className="mt-2 text-[10px] uppercase tracking-widest text-brand-200">
                Place
              </span>
              <span className="text-sm font-bold">市原市</span>
            </div>
            <div className="glass-card flex flex-col gap-1 p-5">
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
        <div className="card-modern p-8 lg:p-14">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="eyebrow text-brand-600">Contact</p>
              <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
                お見積り・ご相談は
                <br />
                お気軽にお問い合わせ
                <br className="sm:hidden" />
                ください。
              </h2>
              <p className="mt-5 text-pretty text-base leading-relaxed text-steel-600">
                工事のご依頼・採用に関するお問い合わせ、
                <br className="sm:hidden" />
                その他ご質問など、
                <br className="hidden sm:block" />
                お電話・メール・フォームから受け付けております。
              </p>
            </div>
            <div className="space-y-4">
              <a
                href={`tel:${company.contact.telDigits}`}
                className="group flex items-center justify-between rounded-2xl border border-brand-100 bg-gradient-to-br from-white to-brand-50/50 p-6 transition-all hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-[0_12px_28px_-12px_rgba(15,76,129,0.25)]"
              >
                <div className="flex items-center gap-4">
                  <span className="icon-ring">
                    <Phone className="h-5 w-5" />
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
                <ArrowRight className="h-5 w-5 text-brand-600 transition-transform group-hover:translate-x-1" />
              </a>
              <Link
                href="/contact"
                className="group flex items-center justify-between rounded-2xl p-6 text-white transition-all hover:-translate-y-0.5"
                style={{
                  background:
                    "linear-gradient(135deg, #1B5DA0 0%, #0F4C81 60%, #0C3D67 100%)",
                  boxShadow:
                    "0 16px 40px -12px rgba(15,76,129,0.45), inset 0 1px 0 rgba(255,255,255,0.18)",
                }}
              >
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-brand-200">
                    Contact Form
                  </p>
                  <p className="mt-1 text-lg font-bold">
                    お問い合わせフォーム
                  </p>
                </div>
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
