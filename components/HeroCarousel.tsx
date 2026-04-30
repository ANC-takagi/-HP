"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const slides = [
  { src: "/images/hero.jpg", alt: "屋外の大型配管 保温板金施工" },
  { src: "/images/works/duct-03.jpg", alt: "工場内 大型ダクト 保温板金" },
  { src: "/images/works/pipe-01.jpg", alt: "配管エルボ部 保温板金加工" },
  { src: "/images/works/pipe-02.jpg", alt: "高温配管 板金仕上げ" },
  { src: "/images/works/duct-02.jpg", alt: "プラント内 ダクト交差部" },
];

const INTERVAL = 5500;

export function HeroCarousel() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => {
      setActive((p) => (p + 1) % slides.length);
    }, INTERVAL);
    return () => window.clearInterval(id);
  }, [paused]);

  return (
    <>
      <div
        className="absolute inset-0"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {slides.map((s, i) => (
          <div
            key={s.src}
            aria-hidden={i !== active}
            className={cn(
              "absolute inset-0 transition-opacity duration-[1500ms] ease-out",
              i === active ? "opacity-100" : "opacity-0",
            )}
          >
            <Image
              src={s.src}
              alt=""
              fill
              priority={i === 0}
              sizes="100vw"
              className={cn(
                "object-cover",
                i === active ? "scale-105" : "scale-100",
              )}
              style={{
                transition: "transform 6000ms ease-out",
              }}
            />
          </div>
        ))}
      </div>

      <div className="pointer-events-none absolute bottom-6 left-1/2 z-30 flex -translate-x-1/2 items-center gap-2 sm:bottom-8">
        {slides.map((s, i) => (
          <button
            key={s.src}
            type="button"
            onClick={() => setActive(i)}
            aria-label={`スライド ${i + 1} へ移動`}
            className={cn(
              "pointer-events-auto h-1 rounded-full transition-all duration-300",
              i === active
                ? "w-10 bg-white shadow-[0_0_12px_rgba(255,255,255,0.6)]"
                : "w-3 bg-white/40 hover:bg-white/70",
            )}
          />
        ))}
      </div>
    </>
  );
}
