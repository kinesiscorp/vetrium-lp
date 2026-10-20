import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site/content";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // CRM interno e páginas de prospecção enviadas a clientes específicos.
      disallow: ["/admin", "/api/", "/diagnostico/", "/proposta-comercial/"],
    },
    sitemap: `${SITE.url}/sitemap.xml`,
  };
}
