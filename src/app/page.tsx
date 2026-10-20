import type { Metadata } from "next";
import { ClosingCta } from "@/components/site/closing-cta";
import { Discovery } from "@/components/site/discovery";
import { Faq } from "@/components/site/faq";
import { Hero } from "@/components/site/hero";
import { Process } from "@/components/site/process";
import { RevealObserver } from "@/components/site/reveal-observer";
import { Services } from "@/components/site/services";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { Standards } from "@/components/site/standards";
import { Value } from "@/components/site/value";
import { Work } from "@/components/site/work";
import { CONTACT, FAQ, FEATURED_SERVICE, SERVICE_GROUPS, SITE } from "@/lib/site/content";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

/**
 * Narrativa: o que fazemos (hero) → por que importa (valor) → o que
 * entregamos (serviços) → prova (projetos) → como (processo) → como você é
 * encontrado (SEO/GEO) → o que esperar (diferenciais) → dúvidas → ação.
 */
export default function Home() {
  const services = [FEATURED_SERVICE, ...SERVICE_GROUPS.flatMap((g) => g.services)];

  // Só dados reais: sem endereço, avaliações ou perfis que não existem.
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "@id": `${SITE.url}/#vetrium`,
      name: SITE.name,
      url: SITE.url,
      logo: `${SITE.url}/brand/vetrium-emblem.png`,
      description: SITE.description,
      email: CONTACT.email,
      areaServed: { "@type": "Country", name: "Brasil" },
      knowsLanguage: "pt-BR",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Serviços da Vetrium",
        itemListElement: services.map((s) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: s.name, description: s.summary },
        })),
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: FAQ.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ];

  return (
    <div className="vds flex flex-1 flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <RevealObserver />
      <SiteHeader />
      <main id="conteudo" className="flex-1">
        <Hero />
        <Value />
        <Services />
        <Work />
        <Process />
        <Discovery />
        <Standards />
        <Faq />
        <ClosingCta />
      </main>
      <SiteFooter />
    </div>
  );
}
