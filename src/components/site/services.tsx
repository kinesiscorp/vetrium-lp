import type { ComponentType, SVGProps } from "react";
import { SERVICES } from "@/lib/site/content";
import { ButtonLink, IconBars, IconCode, IconLayers, IconTarget } from "./primitives";

const ICONS: Record<string, ComponentType<SVGProps<SVGSVGElement>>> = {
  "landing-pages": IconTarget,
  design: IconLayers,
  desenvolvimento: IconCode,
  "seo-geo": IconBars,
};

/**
 * O que fazemos: uma frase de posição e quatro serviços, uma linha cada.
 * Lista regrada como um índice — não quatro cards iguais.
 */
export function Services() {
  return (
    <section id="servicos" aria-labelledby="servicos-title" className="vds-paper px-4 py-24 sm:px-8 lg:py-36">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-12">
        <div data-reveal className="lg:col-span-5">
          <h2 id="servicos-title" className="vds-h2 max-w-[14ch]">
            Um site que <span className="vds-em text-rose-ink">trabalha</span> pelo seu negócio.
          </h2>
          <p className="vds-lead mt-6 text-stone-ink">
            Estratégia, design e tecnologia com o mesmo time — do primeiro
            rascunho ao site no ar.
          </p>
          <ButtonLink href="/orcamento" className="mt-10">
            Solicitar orçamento
          </ButtonLink>
        </div>

        <ul className="border-t vds-rule lg:col-span-7">
          {SERVICES.map((s, i) => {
            const Icon = ICONS[s.id];
            return (
              <li
                key={s.id}
                data-reveal
                style={{ ["--reveal-delay" as string]: `${i * 70}ms` }}
                className="group grid grid-cols-[2.5rem_1fr] items-baseline gap-x-4 border-b vds-rule py-7 sm:grid-cols-[2.5rem_14rem_1fr] sm:gap-x-6"
              >
                <Icon className="h-6 w-6 translate-y-1 text-violet-ink transition-colors duration-300 group-hover:text-rose-ink" />
                <h3 className="font-editorial text-[1.6rem] leading-tight">{s.name}</h3>
                <p className="col-start-2 mt-2 text-stone-ink sm:col-start-3 sm:mt-0">{s.line}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
