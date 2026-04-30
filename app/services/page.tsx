import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Flame,
  Layers,
  MapPin,
  ShieldCheck,
  Sparkles,
  Wrench,
} from "lucide-react";
import { PageHero, Section, SectionTitle } from "@/components/Section";
import { company } from "@/lib/company";

export const metadata: Metadata = {
  title: "事業内容",
  description: `${company.name}の事業内容。工場・プラント・空調ダクト・配管・ボイラー・タンク等の熱絶縁工事(保温板金)を行っています。対応エリアは千葉・神奈川・茨城。`,
};

const flow = [
  {
    step: "01",
    title: "ヒアリング・現地調査",
    description:
      "現場の規模、設備の種類、既存設備の状況を確認し、最適な施工プランをご提案します。",
  },
  {
    step: "02",
    title: "お見積り・ご提案",
    description:
      "材料・工法・工期を明示したお見積書をご提出。ご納得いただいたうえで進行します。",
  },
  {
    step: "03",
    title: "保温施工",
    description:
      "配管・ダクト・機器を保温材で覆い、熱の損失や結露を抑える下地工事を行います。",
  },
  {
    step: "04",
    title: "板金仕上げ",
    description:
      "保温材の上から板金カバーを施工。耐候性と美観を両立させ、長期にわたり性能を維持します。",
  },
  {
    step: "05",
    title: "検査・引き渡し",
    description:
      "仕上がり・寸法・気密性をチェックし、お客様の最終確認を経て引き渡しとなります。",
  },
];

const purposeIcons = [Flame, Layers, ShieldCheck];
const purposes = [
  {
    title: "熱の損失を防ぐ",
    description:
      "高温配管やダクトを保温し、エネルギー効率を高めます。光熱費削減と環境負荷低減に貢献。",
  },
  {
    title: "結露・凍結を防ぐ",
    description:
      "冷温水配管や低温機器の表面結露・凍結を防止し、建屋や設備の劣化を防ぎます。",
  },
  {
    title: "設備を保護する",
    description:
      "雨風や紫外線から設備を守り、火傷防止・防音効果ももたらす重要な仕上げ工事です。",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="熱絶縁工事(保温板金)"
        description={
          <>
            保温板金は、エネルギーロスを抑え、
            <br className="sm:hidden" />
            設備を守り、安全な現場をつくる、
            <br className="hidden sm:block" />
            縁の下のスペシャリスト工事です。
          </>
        }
      />

      <Section className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 -z-0 bg-grid-soft opacity-40" />
        <div className="relative">
          <SectionTitle
            eyebrow="What We Do"
            title="保温板金とは。"
            description="保温材で配管やダクトを覆い、その上にステンレス・ガルバ等の板金を施工することで、熱の損失と結露を防ぎ、設備の長寿命化と省エネルギーを実現する工事です。"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {purposes.map((p, i) => {
              const Icon = purposeIcons[i] ?? Sparkles;
              return (
                <div key={p.title} className="card-modern p-7">
                  <span className="icon-glow">
                    <Icon className="relative z-10 h-6 w-6" />
                  </span>
                  <h3 className="mt-5 text-lg font-bold">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-steel-600">
                    {p.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </Section>

      <Section className="relative overflow-hidden bg-steel-50">
        <div className="pointer-events-none absolute -left-20 top-0 h-72 w-72 rounded-full bg-brand-100/50 blur-3xl" />
        <div className="pointer-events-none absolute right-0 bottom-10 h-80 w-80 rounded-full bg-brand-200/30 blur-3xl" />
        <div className="relative">
          <SectionTitle
            eyebrow="Coverage"
            title="対応設備・対応エリア"
            description="プラントから工場、空調設備まで。設備の種類・規模を問わず、現場ごとに最適な保温板金をお届けします。"
          />
          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <div className="card-modern p-8">
              <div className="flex items-center gap-3">
                <span className="icon-ring h-10 w-10">
                  <Wrench className="h-5 w-5" />
                </span>
                <h3 className="text-lg font-bold">対応設備</h3>
              </div>
              <ul className="mt-6 space-y-3 text-sm">
                {company.facilities.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-steel-800">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="card-modern p-8">
              <div className="flex items-center gap-3">
                <span className="icon-ring h-10 w-10">
                  <MapPin className="h-5 w-5" />
                </span>
                <h3 className="text-lg font-bold">対応エリア</h3>
              </div>
              <ul className="mt-6 space-y-3 text-sm">
                {company.serviceAreas.map((area) => (
                  <li
                    key={area}
                    className="flex items-start gap-3 text-steel-800"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                    <span>{area}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-xs leading-relaxed text-steel-600">
                ※上記以外の地域も応相談。お気軽にお問い合わせください。
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-white">
        <SectionTitle
          eyebrow="Strengths"
          title="当社の強み"
          description="若さと勢い、そして確かな技術。3つのキーワードで、お客様に選ばれる理由をお伝えします。"
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {company.strengths.map((s, i) => (
            <div key={s.title} className="card-modern p-8">
              <span className="absolute right-6 top-6 font-display text-5xl font-bold text-brand-100">
                0{i + 1}
              </span>
              <span className="icon-glow">
                <Sparkles className="relative z-10 h-6 w-6" />
              </span>
              <h3 className="mt-5 text-xl font-bold">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-steel-600">
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="relative overflow-hidden bg-steel-50">
        <div className="pointer-events-none absolute inset-0 bg-grid-soft opacity-30" />
        <div className="relative">
          <SectionTitle
            eyebrow="Flow"
            title="施工の流れ"
            description="お問い合わせから引き渡しまで、5つのステップで丁寧に対応いたします。"
          />
          <div className="mx-auto mt-12 max-w-4xl">
            <ol className="space-y-4">
              {flow.map((f) => (
                <li key={f.step} className="card-modern flex gap-5 p-6 sm:p-7">
                  <span
                    className="font-display text-3xl font-bold sm:text-4xl"
                    style={{
                      background:
                        "linear-gradient(135deg, #3B7DBE, #0F4C81)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {f.step}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-steel-900">
                      {f.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-steel-600">
                      {f.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Section>

      <section className="relative overflow-hidden py-20 text-white">
        <Image
          src="/images/works/duct-03.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-900/95 via-brand-800/85 to-brand-700/70" />
        <div className="absolute inset-0 bg-grid-soft opacity-20" />
        <div className="container-x relative text-center">
          <h2 className="text-2xl font-bold sm:text-3xl">
            まずはお気軽にご相談ください。
          </h2>
          <p className="mt-3 text-sm text-brand-100 sm:text-base">
            現場確認・お見積りは無料です。
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/contact" className="btn-light">
              お問い合わせフォーム
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/works" className="btn-light">
              施工事例を見る
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
