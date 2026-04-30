"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useState } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight, X } from "lucide-react";
import { works, workCategories, type WorkCategory } from "@/lib/works";
import { cn } from "@/lib/utils";

const categoryMeta: Record<
  WorkCategory,
  { eyebrow: string; description: string }
> = {
  duct: {
    eyebrow: "Duct Insulation",
    description:
      "工場・プラントの大口径ダクトを、保温材と板金で美しく機能的に仕上げます。",
  },
  pipe: {
    eyebrow: "Pipe Insulation",
    description:
      "配管のエルボ・ストレート部の保温板金。耐候性と美観を両立した仕上げです。",
  },
  damper: {
    eyebrow: "Equipment & Damper",
    description:
      "可動部やダンパー機器の特殊形状にも、オーダーメイドで板金カバーを製作します。",
  },
};

export function WorksGallery() {
  const [openId, setOpenId] = useState<string | null>(null);

  const grouped = useMemo(() => {
    return workCategories
      .filter((c) => c.value !== "all")
      .map((c) => ({
        ...c,
        items: works.filter((w) => w.category === c.value),
      }))
      .filter((g) => g.items.length > 0);
  }, []);

  const flatList = useMemo(
    () => grouped.flatMap((g) => g.items),
    [grouped],
  );
  const openIndex = openId
    ? flatList.findIndex((w) => w.id === openId)
    : -1;
  const openWork = openIndex >= 0 ? flatList[openIndex] : null;

  const close = useCallback(() => setOpenId(null), []);
  const next = useCallback(() => {
    if (openIndex < 0 || flatList.length === 0) return;
    const i = (openIndex + 1) % flatList.length;
    setOpenId(flatList[i].id);
  }, [openIndex, flatList]);
  const prev = useCallback(() => {
    if (openIndex < 0 || flatList.length === 0) return;
    const i = (openIndex - 1 + flatList.length) % flatList.length;
    setOpenId(flatList[i].id);
  }, [openIndex, flatList]);

  useEffect(() => {
    if (openId === null) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [openId, close, prev, next]);

  return (
    <div>
      <nav
        aria-label="カテゴリ"
        className="flex flex-wrap items-center justify-center gap-2 sm:gap-3"
      >
        <a
          href="#works-top"
          className="inline-flex items-center gap-2 rounded-full border border-steel-200 bg-white/80 px-5 py-2 text-xs font-semibold tracking-wide text-steel-700 backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-brand-300 hover:text-brand-700 sm:text-sm"
        >
          すべて
          <span className="rounded-full bg-brand-50 px-2 py-0.5 text-[10px] font-bold text-brand-700">
            {flatList.length}
          </span>
        </a>
        {grouped.map((c) => (
          <a
            key={c.value}
            href={`#cat-${c.value}`}
            className="inline-flex items-center gap-2 rounded-full border border-steel-200 bg-white/80 px-5 py-2 text-xs font-semibold tracking-wide text-steel-700 backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-brand-300 hover:text-brand-700 sm:text-sm"
          >
            {c.label}
            <span className="rounded-full bg-brand-50 px-2 py-0.5 text-[10px] font-bold text-brand-700">
              {c.items.length}
            </span>
          </a>
        ))}
      </nav>

      <div id="works-top" className="mt-14 space-y-16 sm:space-y-20">
        {grouped.map((group, groupIdx) => {
          const meta = categoryMeta[group.value as WorkCategory];
          return (
            <section
              key={group.value}
              id={`cat-${group.value}`}
              className="scroll-mt-24"
            >
              <div className="mb-8 flex flex-col items-start gap-3 border-b border-steel-200/70 pb-6 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
                <div>
                  <p className="eyebrow text-brand-600">
                    {meta.eyebrow} —{" "}
                    {String(groupIdx + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-3 flex flex-wrap items-baseline gap-3">
                    <span className="text-2xl font-bold leading-tight text-steel-900 sm:text-3xl">
                      {group.label}
                    </span>
                  </h3>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-steel-600">
                    {meta.description}
                  </p>
                </div>
                <div className="inline-flex items-center gap-2 rounded-full border border-steel-200 bg-white/80 px-4 py-1.5 text-xs font-bold tracking-widest text-steel-700 backdrop-blur-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-500 shadow-[0_0_8px_rgba(15,76,129,0.5)]" />
                  {group.items.length} cases
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
                {group.items.map((w, i) => (
                  <button
                    key={w.id}
                    type="button"
                    onClick={() => setOpenId(w.id)}
                    className="group relative block aspect-[4/3] w-full overflow-hidden rounded-2xl bg-steel-100 text-left shadow-[0_8px_28px_-12px_rgba(15,76,129,0.18)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_48px_-16px_rgba(15,76,129,0.3)]"
                  >
                    <Image
                      src={w.src}
                      alt={w.alt}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-steel-900/90 via-steel-900/15 to-transparent" />
                    <div className="absolute inset-0 ring-1 ring-inset ring-white/10 transition-all duration-300 group-hover:ring-white/30" />

                    <div className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-full border border-white/30 bg-white/15 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-white backdrop-blur-md">
                      <span className="h-1 w-1 rounded-full bg-white" />
                      No.{String(i + 1).padStart(2, "0")}
                    </div>

                    <div className="absolute right-3 bottom-3 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-md transition-all duration-300 group-hover:bg-white group-hover:text-brand-700">
                      <ArrowUpRight className="h-4 w-4" />
                    </div>

                    <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                      <p className="text-base font-bold text-white">
                        {w.title}
                      </p>
                      <p className="mt-1 line-clamp-2 text-xs text-brand-100">
                        {w.description}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </section>
          );
        })}
      </div>

      {openWork && openIndex >= 0 && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-steel-900/85 p-4 backdrop-blur-md"
          onClick={close}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative w-full max-w-4xl overflow-hidden rounded-3xl border border-white/15 bg-white"
            onClick={(e) => e.stopPropagation()}
            style={{
              boxShadow:
                "0 30px 80px -20px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.3)",
            }}
          >
            <button
              type="button"
              onClick={close}
              className="absolute right-3 top-3 z-20 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-steel-700 shadow-lg transition-all hover:scale-105 hover:bg-steel-50"
              aria-label="閉じる"
            >
              <X className="h-5 w-5" />
            </button>

            {flatList.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={prev}
                  className="absolute left-3 top-1/2 z-20 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-steel-700 shadow-lg backdrop-blur transition-all hover:scale-105 hover:bg-white sm:left-4"
                  aria-label="前の事例"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={next}
                  className="absolute right-3 top-1/2 z-20 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-steel-700 shadow-lg backdrop-blur transition-all hover:scale-105 hover:bg-white sm:right-4"
                  aria-label="次の事例"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </>
            )}

            <div className="relative aspect-[4/3] w-full bg-steel-900">
              <Image
                src={openWork.src}
                alt={openWork.alt}
                fill
                sizes="(min-width: 1024px) 1024px, 100vw"
                className="object-contain"
              />
            </div>
            <div className="p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-brand-700">
                  <span className="h-1 w-1 rounded-full bg-brand-500" />
                  {workCategories.find((c) => c.value === openWork.category)
                    ?.label}
                </span>
                <span className="text-xs font-medium text-steel-500">
                  {openIndex + 1} / {flatList.length}
                </span>
              </div>
              <h3 className="mt-3 text-xl font-bold sm:text-2xl">
                {openWork.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-steel-700 sm:text-base">
                {openWork.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
