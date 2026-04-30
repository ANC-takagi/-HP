import type { Metadata } from "next";
import { Inter, Noto_Sans_JP } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { company } from "@/lib/company";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const notoSansJp = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-noto-sans-jp",
});

const SITE_URL = "https://kikutikougyouhp.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${company.name} | 熱絶縁工事・保温板金`,
    template: `%s | ${company.name}`,
  },
  description:
    "千葉県市原市の株式会社菊地工業は、工場・プラント・空調ダクト・配管・ボイラー・タンク等の熱絶縁工事(保温板金)を行う建設会社です。みんなのライフラインを支える、確かな技術で対応します。",
  keywords: [
    "熱絶縁工事",
    "保温板金",
    "保温工事",
    "断熱工事",
    "市原市",
    "千葉県",
    "プラント",
    "ダクト",
    "配管",
    company.name,
  ],
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: SITE_URL,
    siteName: company.name,
    title: `${company.name} | 熱絶縁工事・保温板金`,
    description:
      "千葉県市原市の熱絶縁工事(保温板金)。工場・プラント・空調ダクト・配管・ボイラー・タンクなど幅広く対応。",
  },
  twitter: {
    card: "summary_large_image",
    title: `${company.name} | 熱絶縁工事・保温板金`,
    description:
      "千葉県市原市の熱絶縁工事(保温板金)。プラント・工場・配管・ダクトなどに対応。",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/images/logo.jpg",
    apple: "/images/logo.jpg",
  },
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: company.name,
  alternateName: company.nameEn,
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo.jpg`,
  email: company.contact.email,
  telephone: `+81-${company.contact.tel.replace(/^0/, "").replace(/-/g, "-")}`,
  founder: company.representative,
  foundingDate: "2019-09-17",
  address: {
    "@type": "PostalAddress",
    addressCountry: "JP",
    addressRegion: "千葉県",
    addressLocality: "市原市",
    streetAddress: "五井5714-10",
  },
  areaServed: ["千葉県", "神奈川県", "茨城県"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={`${inter.variable} ${notoSansJp.variable}`}>
      <body className="flex min-h-screen flex-col bg-white">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Script
          id="org-jsonld"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </body>
    </html>
  );
}
