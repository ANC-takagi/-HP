import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { PageHero, Section } from "@/components/Section";
import { WorksGallery } from "@/components/WorksGallery";
import { company } from "@/lib/company";
import { works } from "@/lib/works";

export const metadata: Metadata = {
  title: "施工事例",
  description: `${company.name}の施工事例。屋内外のダクト保温板金、配管エルボ加工、機器・ダンパー板金など幅広い保温板金事例を一覧で掲載しています。`,
};

const categoryCounts = {
  duct: works.filter((w) => w.category === "duct").length,
  pipe: works.filter((w) => w.category === "pipe").length,
  damper: works.filter((w) => w.category === "damper").length,
};

export default function WorksPage() {
  return (
    <>
      <PageHero
        eyebrow="Works"
        title="施工事例"
        description={
          <>
            工場・プラント・配管・機器など、
            <br className="sm:hidden" />
            当社が手がけた保温板金の
            <br className="hidden sm:block" />
            施工事例をカテゴリごとに
            <br className="sm:hidden" />
            まとめてご覧いただけます。
          </>
        }
      />

      <Section className="relative overflow-hidden bg-white">
        <div className="pointer-events-none absolute -left-24 top-1/4 h-72 w-72 rounded-full bg-brand-100/40 blur-3xl" />
        <div className="pointer-events-none absolute right-0 bottom-10 h-80 w-80 rounded-full bg-brand-200/30 blur-3xl" />
        <div className="pointer-events-none absolute inset-0 bg-grid-soft opacity-30" />

        <div className="relative">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow justify-center text-brand-600">
              Project Archive
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-steel-900 sm:text-4xl">
              施工事例 一覧
            </h2>
            <span className="mx-auto mt-5 block h-1 w-12 rounded-full bg-gradient-to-r from-brand-500 to-brand-700" />

            <div className="mx-auto mt-10 inline-flex flex-wrap items-center justify-center gap-x-6 gap-y-3 rounded-2xl border border-steel-200 bg-white/80 px-6 py-4 backdrop-blur-sm">
              <Stat label="掲載件数" value={String(works.length)} unit="件" />
              <Divider />
              <Stat
                label="ダクト"
                value={String(categoryCounts.duct)}
                unit="件"
              />
              <Divider />
              <Stat
                label="配管"
                value={String(categoryCounts.pipe)}
                unit="件"
              />
              <Divider />
              <Stat
                label="機器"
                value={String(categoryCounts.damper)}
                unit="件"
              />
            </div>
            <p className="mt-6 text-sm leading-relaxed text-steel-600">
              下のカテゴリボタンから興味のあるジャンルへジャンプ。
              <br className="hidden sm:block" />
              画像をクリックすると拡大表示と詳細をご覧いただけます。
            </p>
          </div>

          <div className="mt-12">
            <WorksGallery />
          </div>
        </div>
      </Section>

      <Section className="bg-steel-50">
        <div
          className="relative overflow-hidden rounded-3xl p-8 text-white sm:p-12"
          style={{
            background:
              "linear-gradient(135deg, #082C4B 0%, #0F4C81 50%, #1B5DA0 100%)",
          }}
        >
          <div className="pointer-events-none absolute inset-0 bg-grid-soft opacity-20" />
          <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-brand-300/20 blur-3xl" />
          <div className="pointer-events-none absolute -left-24 -bottom-24 h-80 w-80 rounded-full bg-brand-400/20 blur-3xl" />

          <div className="relative grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:items-center">
            <div>
              <p className="eyebrow text-brand-200">More</p>
              <h2 className="mt-4 text-2xl font-bold leading-tight sm:text-3xl">
                掲載のない設備でも、
                <br className="hidden sm:block" />
                ぜひご相談ください。
              </h2>
              <p className="mt-4 text-pretty text-sm leading-relaxed text-brand-100 sm:text-base">
                プラント・工場・空調ダクト・配管・ボイラー・タンクなど、幅広い設備の保温板金に対応しています。
                <br className="hidden sm:block" />
                お見積り・現場確認は無料です。
              </p>
            </div>
            <div className="space-y-3">
              <Link
                href="/contact"
                className="group flex items-center justify-between rounded-2xl border border-white/30 bg-white/10 p-5 backdrop-blur-md transition-all hover:-translate-y-0.5 hover:bg-white hover:text-brand-700"
              >
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-200 group-hover:text-brand-600">
                    Contact Form
                  </p>
                  <p className="mt-1 text-base font-bold">
                    お問い合わせフォーム
                  </p>
                </div>
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href={`tel:${company.contact.telDigits}`}
                className="group flex items-center justify-between rounded-2xl border border-white/30 bg-white/10 p-5 backdrop-blur-md transition-all hover:-translate-y-0.5 hover:bg-white hover:text-brand-700"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/20 text-white group-hover:bg-brand-50 group-hover:text-brand-700">
                    <Phone className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-200 group-hover:text-brand-600">
                      Tel
                    </p>
                    <p className="mt-1 font-display text-lg font-bold">
                      {company.contact.tel}
                    </p>
                  </div>
                </div>
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

function Stat({
  label,
  value,
  unit,
}: {
  label: string;
  value: string;
  unit: string;
}) {
  return (
    <div className="text-left">
      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-steel-500">
        {label}
      </p>
      <p className="mt-1 flex items-baseline gap-1">
        <span
          className="font-display text-2xl font-bold leading-none"
          style={{
            background: "linear-gradient(135deg, #3B7DBE, #0F4C81)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          {value}
        </span>
        <span className="text-xs font-bold text-steel-700">{unit}</span>
      </p>
    </div>
  );
}

function Divider() {
  return (
    <span className="h-8 w-px bg-gradient-to-b from-transparent via-steel-300 to-transparent" />
  );
}
