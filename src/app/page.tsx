import type { Metadata } from "next";
import { ClosingCta } from "@/components/site/closing-cta";
import { Faq } from "@/components/site/faq";
import { Hero } from "@/components/site/hero";
import { Process } from "@/components/site/process";
import { RevealObserver } from "@/components/site/reveal-observer";
import { Services } from "@/components/site/services";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { Work } from "@/components/site/work";
import { CONTACT, FAQ, SERVICES, SITE } from "@/lib/site/content";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

/**
 * Cinco blocos curtos para quem não lê muito: promessa (hero) → o que
 * fazemos → prova (projetos) → como funciona → dúvidas → ação. O detalhe
 * (escopo, SEO/GEO, garantias) mora nas Dúvidas e no formulário.
 */
export default function Home() {
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
        itemListElement: SERVICES.map((s) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: s.name, description: s.line },
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
        <Services />
        <Work />
        <Process />
        <Faq />
        <ClosingCta />
      </main>
      <SiteFooter />
    </div>
  );
}
