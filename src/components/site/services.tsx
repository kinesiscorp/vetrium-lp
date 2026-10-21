import type { ReactNode } from "react";
import { SERVICES } from "@/lib/site/content";
import { PillLink, SplitHeading } from "./primitives";

/* Mini-interfaces de vidro: mostram o que o serviço entrega sem jargão */
function WidgetLanding() {
  return (
    <div className="vds-glass w-full rounded-2xl p-3">
      <div className="flex gap-1" aria-hidden>
        <span className="h-1.5 w-1.5 rounded-full bg-fg/25" />
        <span className="h-1.5 w-1.5 rounded-full bg-fg/25" />
        <span className="h-1.5 w-1.5 rounded-full bg-fg/25" />
      </div>
      <div className="mt-3 h-2 w-3/4 rounded-full bg-fg/70" />
      <div className="mt-1.5 h-2 w-1/2 rounded-full bg-fg/30" />
      <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-fg px-3 py-1.5 text-[0.7rem] font-medium text-canvas">
        Solicitar orçamento
        <span className="h-1.5 w-1.5 rounded-full bg-canvas" />
      </div>
    </div>
  );
}
function WidgetDesign() {
  return (
    <div className="vds-glass grid w-full grid-cols-3 gap-1.5 rounded-2xl p-3" aria-hidden>
      <span className="col-span-3 h-8 rounded-md border border-dashed border-fg/35" />
      <span className="col-span-2 h-12 rounded-md border border-dashed border-fg/35" />
      <span className="h-12 rounded-md bg-accent/70" />
      <span className="h-5 rounded-md border border-dashed border-fg/35" />
      <span className="col-span-2 h-5 rounded-md border border-dashed border-fg/35" />
    </div>
  );
}
function WidgetDev() {
  return (
    <div className="vds-glass flex w-full items-center gap-3 rounded-2xl p-3">
      <div className="h-16 w-9 flex-none rounded-lg border border-fg/30 p-1" aria-hidden>
        <div className="h-full rounded bg-gradient-to-b from-accent/80 to-accent-soft/30" />
      </div>
      <div className="text-[0.75rem] leading-snug text-fg">
        Abre rápido no celular
        <br />
        <span className="text-fg-2">WhatsApp e formulário funcionando</span>
      </div>
    </div>
  );
}
function WidgetSeo() {
  return (
    <div className="vds-glass w-full rounded-2xl p-3 text-left">
      <p className="text-[0.66rem] text-accent">www.seunegocio.com.br</p>
      <p className="mt-0.5 text-[0.82rem] leading-tight text-fg">Seu negócio, encontrado por quem procura</p>
      <div className="mt-2 h-1.5 w-full rounded-full bg-fg/15" />
      <div className="mt-1 h-1.5 w-2/3 rounded-full bg-fg/15" />
    </div>
  );
}

/* Cada serviço ganha um padrão próprio, da mesma família gráfica do hero */
const CARDS: Record<string, { pattern: string; widget: ReactNode }> = {
  "landing-pages": { pattern: "vds-dots", widget: <WidgetLanding /> },
  design: { pattern: "vds-grid-fine", widget: <WidgetDesign /> },
  desenvolvimento: { pattern: "vds-diag", widget: <WidgetDev /> },
  "seo-geo": { pattern: "vds-rings", widget: <WidgetSeo /> },
};

/**
 * O que fazemos: título centralizado e quatro cartões, cada um com um padrão
 * gráfico próprio e o mini-widget do serviço. No mobile, carrossel com encaixe.
 */
export function Services() {
  return (
    <section id="servicos" aria-labelledby="servicos-title" className="px-5 pb-28 pt-8 sm:pb-36">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <SplitHeading id="servicos-title" lead="Um site que trabalha" it="pelo seu negócio" className="vds-h2" />
          <p data-rise className="vds-lead mx-auto mt-5">
            Estratégia, design e tecnologia com o mesmo time — do primeiro
            rascunho ao site no ar.
          </p>
        </div>

        <ul className="-mx-5 mt-14 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 [scrollbar-width:none] md:mx-0 md:grid md:grid-cols-2 md:overflow-visible md:px-0 lg:grid-cols-4">
          {SERVICES.map((s, i) => {
            const c = CARDS[s.id];
            return (
              <li
                key={s.id}
                data-rise
                style={{ ["--d" as string]: `${i * 90}ms` }}
                className="relative aspect-[4/5] w-[78vw] flex-none snap-center overflow-hidden rounded-[1.6rem] bg-raised ring-1 ring-fg/8 md:w-auto"
              >
                <div aria-hidden className={`absolute inset-0 ${c.pattern}`} />
                <div aria-hidden className="vds-halo absolute -right-16 -top-16 h-56 w-56 rounded-full" />
                <div className="absolute inset-x-3 top-3">{c.widget}</div>
                <div className="vds-glass absolute inset-x-3 bottom-3 rounded-[1.1rem] p-4">
                  <h3 className="vds-it text-[1.7rem] leading-none text-fg">{s.name}</h3>
                  <p className="mt-2 text-[0.88rem] leading-snug text-fg-2">{s.line}</p>
                </div>
              </li>
            );
          })}
        </ul>

        <div data-rise className="mt-12 flex justify-center">
          <PillLink href="/orcamento">Solicitar orçamento</PillLink>
        </div>
      </div>
    </section>
  );
}
