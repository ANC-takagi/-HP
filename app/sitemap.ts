import type { MetadataRoute } from "next";

const SITE_URL = "https://kikutikougyouhp.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const paths = [
    { url: "/", priority: 1.0, changeFrequency: "monthly" as const },
    { url: "/about", priority: 0.8, changeFrequency: "yearly" as const },
    { url: "/services", priority: 0.9, changeFrequency: "yearly" as const },
    { url: "/works", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/recruit", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/contact", priority: 0.7, changeFrequency: "yearly" as const },
  ];

  return paths.map((p) => ({
    url: `${SITE_URL}${p.url}`,
    lastModified,
    changeFrequency: p.changeFrequency,
    priority: p.priority,
  }));
}
