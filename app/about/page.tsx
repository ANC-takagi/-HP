import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Mail, Phone } from "lucide-react";
import { PageHero, Section, SectionTitle } from "@/components/Section";
import { company } from "@/lib/company";

export const metadata: Metadata = {
  title: "会社案内",
  description: `${company.name}の会社概要・代表挨拶。代表は${company.representative}。${company.address.full}にて熱絶縁工事(保温板金)を行っています。`,
};

const profile: { label: string; value: string | React.ReactNode }[] = [
  { label: "商号", value: company.name },
  { label: "代表者", value: company.representative },
  { label: "所在地", value: company.address.full },
  {
    label: "設立",
    value: `${company.founded} (${company.foundedNote})`,
  },
  { label: "事業内容", value: company.business },
  {
    label: "対応エリア",
    value: company.serviceAreas.join(" / "),
  },
  {
    label: "電話番号",
    value: (
      <a
        href={`tel:${company.contact.telDigits}`}
        className="font-display text-brand-700 hover:text-brand-600"
      >
        {company.contact.tel}
      </a>
    ),
  },
  {
    label: "メール",
    value: (
      <a
        href={`mailto:${company.contact.email}`}
        className="break-all text-brand-700 hover:text-brand-600"
      >
        {company.contact.email}
      </a>
    ),
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="会社案内"
        description={`${company.name}は、令和元年に千葉県市原市で創業した熱絶縁工事(保温板金)会社です。`}
      />

      <Section className="bg-white">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-start">
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-steel-100">
            <Image
              src="/images/works/pipe-01.jpg"
              alt="代表が手がける配管保温板金の現場"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-steel-900/80 to-transparent p-6">
              <p className="text-xs uppercase tracking-widest text-brand-200">
                Representative
              </p>
              <p className="mt-1 text-lg font-bold text-white">
                代表取締役 {company.representative}
              </p>
            </div>
          </div>
          <div>
            <p className="font-display text-xs font-bold uppercase tracking-[0.3em] text-brand-600">
              Message
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">
              みんなのライフラインを、
              <br />
              静かに、確かに支える。
            </h2>
            <span className="mt-5 block h-1 w-12 rounded-full bg-brand-600" />
            <div className="prose prose-steel mt-7 max-w-none space-y-5 text-base leading-relaxed text-steel-700">
              <p>
                工場やプラント、ビルの空調設備など、私たちの暮らしを支える「ライフライン」は、
                目に見えない多くの設備によって成り立っています。その設備の熱を逃さず、
                結露や凍結から守る——それが私たち保温板金職人の仕事です。
              </p>
              <p>
                {company.name}は、令和元年に千葉県市原市で創業しました。
                若いチームで、勢いと柔軟さを武器に、現場ごとに最適な施工をご提供しています。
                小さな配管から大型のプラント設備まで、一つひとつの仕事に丁寧に向き合うことで、
                お客様の信頼を積み重ねてきました。
              </p>
              <p>
                これから入社する仲間にも、お取引先様にも、
                「この会社と一緒にやってよかった」と思っていただけるような会社であり続けたい。
                そのために、技術と人を磨き、未来のライフラインを支え続けてまいります。
              </p>
              <p className="pt-2 text-right">
                代表取締役{" "}
                <span className="text-lg font-bold text-steel-900">
                  {company.representative}
                </span>
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-steel-50">
        <SectionTitle eyebrow="Profile" title="会社概要" align="center" />
        <div className="mx-auto mt-12 max-w-3xl overflow-hidden rounded-sm border border-steel-200 bg-white">
          <table className="w-full text-left text-sm">
            <tbody>
              {profile.map((row, idx) => (
                <tr
                  key={row.label}
                  className={
                    idx !== profile.length - 1 ? "border-b border-steel-100" : ""
                  }
                >
                  <th className="w-32 bg-steel-50 px-5 py-4 text-xs font-semibold uppercase tracking-wider text-steel-600 sm:w-40 sm:text-sm">
                    {row.label}
                  </th>
                  <td className="px-5 py-4 text-steel-800">{row.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mx-auto mt-10 max-w-3xl">
          <div className="overflow-hidden rounded-sm border border-steel-200 bg-white">
            <iframe
              title="所在地マップ"
              src={`https://www.google.com/maps?q=${encodeURIComponent(company.address.full)}&output=embed`}
              width="100%"
              height="320"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </Section>

      <Section className="bg-white">
        <div className="rounded-sm bg-brand-700 p-8 text-center text-white sm:p-12">
          <h2 className="text-2xl font-bold sm:text-3xl">
            お問い合わせ・ご相談はこちら
          </h2>
          <p className="mt-3 text-brand-100">
            工事のお見積り、採用に関するご質問など、お気軽にどうぞ。
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <a
              href={`tel:${company.contact.telDigits}`}
              className="inline-flex items-center gap-2 rounded-sm bg-white px-6 py-3 text-sm font-bold text-brand-700 hover:bg-brand-50"
            >
              <Phone className="h-4 w-4" />
              {company.contact.tel}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-sm border border-white/40 px-6 py-3 text-sm font-bold text-white hover:bg-white hover:text-brand-700"
            >
              <Mail className="h-4 w-4" />
              お問い合わせフォーム
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
