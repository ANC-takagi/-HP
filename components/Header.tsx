"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { company } from "@/lib/company";
import { cn } from "@/lib/utils";

const nav = [
  { href: "/", label: "ホーム" },
  { href: "/about", label: "会社案内" },
  { href: "/services", label: "事業内容" },
  { href: "/works", label: "施工事例" },
  { href: "/recruit", label: "採用情報" },
  { href: "/contact", label: "お問い合わせ" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b border-steel-200/80 bg-white/95 shadow-sm backdrop-blur"
          : "bg-white/90 backdrop-blur",
      )}
    >
      <div className="container-x flex h-16 items-center justify-between gap-4 lg:h-20">
        <Link
          href="/"
          className="flex items-center gap-3"
          aria-label={`${company.name} トップページ`}
        >
          <Image
            src="/images/logo.jpg"
            alt=""
            width={48}
            height={48}
            priority
            className="h-10 w-auto lg:h-12"
          />
          <div className="leading-tight">
            <p className="text-base font-bold text-brand-700 lg:text-lg">
              {company.name}
            </p>
            <p className="text-[10px] tracking-widest text-steel-500 lg:text-xs">
              KIKUCHI KOGYO
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {nav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative text-sm font-medium transition-colors hover:text-brand-600",
                  active ? "text-brand-700" : "text-steel-700",
                )}
              >
                {item.label}
                {active && (
                  <span className="absolute -bottom-1 left-0 h-0.5 w-full rounded-full bg-brand-600" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${company.contact.telDigits}`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-700 hover:text-brand-600"
          >
            <Phone className="h-4 w-4" />
            <span className="font-display tracking-wide">
              {company.contact.tel}
            </span>
          </a>
          <Link href="/contact" className="btn-primary !py-2 !text-xs">
            お問い合わせ
          </Link>
        </div>

        <button
          type="button"
          className="-mr-2 inline-flex h-10 w-10 items-center justify-center rounded text-steel-700 lg:hidden"
          aria-label="メニューを開く"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-steel-200 bg-white lg:hidden">
          <nav className="container-x flex flex-col py-4">
            {nav.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "border-b border-steel-100 py-3 text-base font-medium",
                    active ? "text-brand-700" : "text-steel-800",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
            <a
              href={`tel:${company.contact.telDigits}`}
              className="mt-4 inline-flex items-center justify-center gap-2 rounded-sm border border-brand-600 py-3 text-sm font-semibold text-brand-700"
            >
              <Phone className="h-4 w-4" />
              {company.contact.tel}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
