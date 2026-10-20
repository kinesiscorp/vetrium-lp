import Image from "next/image";
import type { ReactNode } from "react";
import { SERVICES } from "@/lib/site/content";
import { PillLink, SplitHeading } from "./primitives";

/* Mini-interfaces de vidro: mostram o que o serviço entrega sem jargão */
function WidgetLanding() {
  return (
    <div className="vds-glass w-full rounded-2xl p-3">
      <div className="flex gap-1" aria-hidden>
        <span className="h-1.5 w-1.5 rounded-full bg-umber/25" />
        <span className="h-1.5 w-1.5 rounded-full bg-umber/25" />
        <span className="h-1.5 w-1.5 rounded-full bg-umber/25" />
      </div>
      <div className="mt-3 h-2 w-3/4 rounded-full bg-umber/70" />
      <div className="mt-1.5 h-2 w-1/2 rounded-full bg-umber/30" />
      <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-umber px-3 py-1.5 text-[0.7rem] font-medium text-paper">
        Solicitar orçamento
        <span className="h-1.5 w-1.5 rounded-full bg-paper" />
      </div>
    </div>
  );
}
function WidgetDesign() {
  return (
    <div className="vds-glass grid w-full grid-cols-3 gap-1.5 rounded-2xl p-3" aria-hidden>
      <span className="col-span-3 h-8 rounded-md border border-dashed border-umber/35" />
      <span className="col-span-2 h-12 rounded-md border border-dashed border-umber/35" />
      <span className="h-12 rounded-md bg-olive/70" />
      <span className="h-5 rounded-md border border-dashed border-umber/35" />
      <span className="col-span-2 h-5 rounded-md border border-dashed border-umber/35" />
    </div>
  );
}
function WidgetDev() {
  return (
    <div className="vds-glass flex w-full items-center gap-3 rounded-2xl p-3">
      <div className="h-16 w-9 flex-none rounded-lg border border-umber/30 p-1" aria-hidden>
        <div className="h-full rounded bg-gradient-to-b from-olive/80 to-olive-soft/30" />
      </div>
      <div className="text-[0.75rem] leading-snug text-umber">
        Abre rápido no celular
        <br />
        <span className="text-clay">WhatsApp e formulário funcionando</span>
      </div>
    </div>
  );
}
function WidgetSeo() {
  return (
    <div className="vds-glass w-full rounded-2xl p-3 text-left">
      <p className="text-[0.66rem] text-olive">www.seunegocio.com.br</p>
      <p className="mt-0.5 text-[0.82rem] leading-tight text-umber">Seu negócio, encontrado por quem procura</p>
      <div className="mt-2 h-1.5 w-full rounded-full bg-umber/15" />
      <div className="mt-1 h-1.5 w-2/3 rounded-full bg-umber/15" />
    </div>
  );
}

const CARDS: Record<string, { img: string; alt: string; widget: ReactNode }> = {
  "landing-pages": { img: "/art/v3/card-landing.webp", alt: "Busto clássico de mármore em luz suave", widget: <WidgetLanding /> },
  design: { img: "/art/v3/card-design.webp", alt: "Capitel dórico de mármore visto de baixo", widget: <WidgetDesign /> },
  desenvolvimento: { img: "/art/v3/card-dev.webp", alt: "Oliveira de tronco retorcido em luz do dia", widget: <WidgetDev /> },
  "seo-geo": { img: "/art/v3/card-seo.webp", alt: "Horizonte do mar visto do alto de uma planície", widget: <WidgetSeo /> },
};

/**
 * O que fazemos: título centralizado e quatro cartões-fotografia de museu
 * (objetos sobre fundo claro). No mobile, carrossel com encaixe.
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
                className="relative aspect-[4/5] w-[78vw] flex-none snap-center overflow-hidden rounded-[1.6rem] bg-paper-2 ring-1 ring-umber/8 md:w-auto"
              >
                <Image
                  src={c.img}
                  alt={c.alt}
                  fill
                  sizes="(min-width: 1024px) 18rem, (min-width: 768px) 45vw, 78vw"
                  className="object-cover"
                />
                <div className="absolute inset-x-3 top-3">{c.widget}</div>
                <div className="vds-glass absolute inset-x-3 bottom-3 rounded-[1.1rem] p-4">
                  <h3 className="vds-it text-[1.7rem] leading-none text-umber">{s.name}</h3>
                  <p className="mt-2 text-[0.88rem] leading-snug text-clay">{s.line}</p>
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
