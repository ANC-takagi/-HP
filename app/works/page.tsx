import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero, Section } from "@/components/Section";
import { WorksGallery } from "@/components/WorksGallery";
import { company } from "@/lib/company";

export const metadata: Metadata = {
  title: "施工事例",
  description: `${company.name}の施工事例。屋内外のダクト保温板金、配管エルボ加工、機器・ダンパー板金など幅広い保温板金事例を掲載しています。`,
};

export default function WorksPage() {
  return (
    <>
      <PageHero
        eyebrow="Works"
        title="施工事例"
        description="工場・プラント・配管・機器など、当社が手がけた保温板金の施工事例をご紹介します。カテゴリで絞り込んでご覧いただけます。"
      />

      <Section className="bg-white">
        <WorksGallery />
      </Section>

      <Section className="bg-steel-50">
        <div className="rounded-sm border border-steel-200 bg-white p-8 text-center sm:p-12">
          <p className="font-display text-xs font-bold uppercase tracking-[0.3em] text-brand-600">
            More
          </p>
          <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
            事例にない設備でも、ぜひご相談ください。
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-steel-600 sm:text-base">
            掲載は施工事例の一部です。プラント・工場・空調ダクト・配管・ボイラー・タンクなど、
            <br className="hidden sm:block" />
            幅広い設備の保温板金に対応しています。
          </p>
          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/contact" className="btn-primary">
              お問い合わせ
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/services" className="btn-outline">
              事業内容を詳しく見る
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
