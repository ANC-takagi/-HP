import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { company } from "@/lib/company";

const links = [
  { href: "/", label: "ホーム" },
  { href: "/about", label: "会社案内" },
  { href: "/services", label: "事業内容" },
  { href: "/works", label: "施工事例" },
  { href: "/recruit", label: "採用情報" },
  { href: "/contact", label: "お問い合わせ" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 bg-steel-900 text-steel-200">
      <div className="container-x py-14 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-3">
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <Image
                src="/images/logo.jpg"
                alt=""
                width={48}
                height={48}
                className="h-12 w-auto"
              />
              <div className="leading-tight">
                <p className="text-base font-bold text-white">{company.name}</p>
                <p className="text-[10px] tracking-widest text-steel-400">
                  KIKUCHI KOGYO
                </p>
              </div>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-steel-400">
              {company.catchphrase}
              <br />
              熱絶縁工事(保温板金)で、工場・プラント・設備の安定稼働を支えています。
            </p>
          </div>

          <div>
            <h2 className="text-sm font-semibold tracking-wider text-white">
              CONTACT
            </h2>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-300" />
                <span>{company.address.full}</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand-300" />
                <a
                  href={`tel:${company.contact.telDigits}`}
                  className="hover:text-white"
                >
                  {company.contact.tel}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand-300" />
                <a
                  href={`mailto:${company.contact.email}`}
                  className="break-all hover:text-white"
                >
                  {company.contact.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold tracking-wider text-white">
              SITEMAP
            </h2>
            <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
              {links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-steel-700 pt-6 text-xs text-steel-400 sm:flex-row sm:items-center">
          <p>© {year} {company.name}. All Rights Reserved.</p>
          <p className="tracking-widest">{company.business}</p>
        </div>
      </div>
    </footer>
  );
}
