import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { path: "/", priority: 1 },
    { path: "/orcamento", priority: 0.8 },
    { path: "/privacidade", priority: 0.2 },
    { path: "/creditos", priority: 0.1 },
  ];
  return pages.map((p) => ({
    url: `${SITE.url}${p.path}`,
    lastModified: new Date("2026-10-19"),
    priority: p.priority,
  }));
}
