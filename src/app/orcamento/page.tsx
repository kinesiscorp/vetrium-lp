import type { Metadata } from "next";
import { IconMail } from "@/components/site/primitives";
import { QuoteForm } from "@/components/site/quote-form";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { CONTACT } from "@/lib/site/content";

export const metadata: Metadata = {
  title: "Solicitar orçamento",
  description:
    "Conte o que você precisa — landing page, site, UX/UI, desenvolvimento, SEO ou GEO — e receba uma proposta da Vetrium. Leva cerca de dois minutos.",
  alternates: { canonical: "/orcamento" },
};

export default async function OrcamentoPage({
  searchParams,
}: {
  searchParams: Promise<{ servico?: string | string[] }>;
}) {
  const { servico } = await searchParams;
  const initialService = typeof servico === "string" ? servico : undefined;

  return (
    <div className="vds flex flex-1 flex-col">
      <SiteHeader />
      <main id="conteudo" className="flex-1 px-4 pb-24 pt-32 sm:px-8 lg:pt-40">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-12">
          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <h1 className="vds-display text-[clamp(2.4rem,4.4vw,3.6rem)]">
                Vamos construir <span className="vds-it text-gold">seu projeto.</span>
              </h1>
              <p className="vds-lead mt-6 text-dust">
                Três etapas rápidas. Com essas respostas conseguimos entender o
                que você precisa e preparar uma proposta adequada.
              </p>

              <ul className="mt-10 space-y-4 border-t border-white/10 pt-8 text-[0.95rem]">
                {[
                  "Sem compromisso: é só um pedido de proposta.",
                  "Seus dados são usados apenas para responder você.",
                  "Leva cerca de dois minutos.",
                ].map((t) => (
                  <li key={t} className="flex gap-3">
                    <span aria-hidden className="mt-2 h-1.5 w-1.5 flex-none rotate-45 bg-gold" />
                    {t}
                  </li>
                ))}
              </ul>

              <p className="mt-10 flex items-center gap-2 text-sm text-dust">
                <IconMail className="h-4 w-4" />
                Prefere e-mail?{" "}
                <a href={`mailto:${CONTACT.email}`} className="vds-link text-marble">
                  {CONTACT.email}
                </a>
              </p>
            </div>
          </aside>

          <div className="relative lg:col-span-7 lg:col-start-6">
            <QuoteForm initialService={initialService} />
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
