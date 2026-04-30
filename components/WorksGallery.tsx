"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { X } from "lucide-react";
import { works, workCategories, type WorkCategory } from "@/lib/works";
import { cn } from "@/lib/utils";

export function WorksGallery() {
  const [filter, setFilter] = useState<WorkCategory | "all">("all");
  const [openId, setOpenId] = useState<string | null>(null);

  const filtered = useMemo(
    () => (filter === "all" ? works : works.filter((w) => w.category === filter)),
    [filter],
  );
  const openWork = openId ? works.find((w) => w.id === openId) : null;

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
        {workCategories.map((c) => {
          const active = filter === c.value;
          return (
            <button
              key={c.value}
              type="button"
              onClick={() => setFilter(c.value)}
              className={cn(
                "rounded-full border px-5 py-2 text-xs font-semibold tracking-wide transition-colors sm:text-sm",
                active
                  ? "border-brand-600 bg-brand-600 text-white"
                  : "border-steel-300 bg-white text-steel-700 hover:border-brand-600 hover:text-brand-700",
              )}
            >
              {c.label}
            </button>
          );
        })}
      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((w) => (
          <button
            key={w.id}
            type="button"
            onClick={() => setOpenId(w.id)}
            className="group relative aspect-[4/5] overflow-hidden rounded-sm bg-steel-100 text-left"
          >
            <Image
              src={w.src}
              alt={w.alt}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-steel-900/85 via-steel-900/15 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-5 text-white">
              <p className="text-xs uppercase tracking-widest text-brand-200">
                Case
              </p>
              <p className="mt-1 text-base font-semibold">{w.title}</p>
            </div>
          </button>
        ))}
      </div>

      {openWork && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-steel-900/80 p-4 backdrop-blur"
          onClick={() => setOpenId(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative w-full max-w-3xl overflow-hidden rounded-sm bg-white"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setOpenId(null)}
              className="absolute right-3 top-3 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-steel-700 shadow hover:bg-white"
              aria-label="閉じる"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="relative aspect-[4/3] w-full bg-steel-100">
              <Image
                src={openWork.src}
                alt={openWork.alt}
                fill
                sizes="(min-width: 1024px) 800px, 100vw"
                className="object-contain"
              />
            </div>
            <div className="p-6 sm:p-8">
              <p className="text-xs uppercase tracking-widest text-brand-600">
                {workCategories.find((c) => c.value === openWork.category)?.label}
              </p>
              <h3 className="mt-2 text-xl font-bold">{openWork.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-steel-700">
                {openWork.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
