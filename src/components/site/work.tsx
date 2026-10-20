import Image from "next/image";
import { WORK, WORK_KIND_LABEL, type WorkItem } from "@/lib/site/content";
import { ButtonLink, IconArrowUpRight, SectionHeader } from "./primitives";

function WorkCard({ w, large, index }: { w: WorkItem; large: boolean; index: number }) {
  return (
    <article
      data-reveal
      style={{ ["--reveal-delay" as string]: `${(index % 2) * 120}ms` }}
      aria-labelledby={`work-${w.slug}`}
      className="group"
    >
      <div className="relative overflow-hidden bg-obsidian-2 ring-1 ring-white/10">
        {/* Barra de navegador: sinaliza "site real" sem mockup pesado */}
        <div aria-hidden className="flex items-center gap-1.5 border-b border-white/10 px-4 py-2.5">
          <span className="h-2 w-2 rounded-full bg-white/20" />
          <span className="h-2 w-2 rounded-full bg-white/20" />
          <span className="h-2 w-2 rounded-full bg-white/20" />
        </div>
        <Image
          src={w.image}
          alt={w.imageAlt}
          width={1280}
          height={800}
          loading="lazy"
          sizes={large ? "(min-width: 1024px) 56vw, 100vw" : "(min-width: 1024px) 40vw, 100vw"}
          className="aspect-[16/10] w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.02]"
        />
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-[1fr_auto] sm:items-start">
        <div>
          <p className="vds-label text-[0.62rem] text-marble">
            <span className="text-rose">{WORK_KIND_LABEL[w.kind]}</span>
            <span aria-hidden> · </span>
            {w.segment} <span aria-hidden>·</span> <span className="vds-num">{w.year}</span>
          </p>
          <h3 id={`work-${w.slug}`} className="font-editorial mt-3 text-[2rem] leading-tight">
            {w.name}
          </h3>
          <p className="mt-3 max-w-[52ch] leading-relaxed text-marble">
            <span className="sr-only">Objetivo: </span>
            {w.goal}
          </p>
          <ul aria-label="Escopo entregue" className="mt-4 flex flex-wrap gap-2">
            {w.scope.map((s) => (
              <li key={s} className="vds-label border border-white/15 px-2.5 py-1 text-[0.58rem] text-marble">
                {s}
              </li>
            ))}
          </ul>
          {w.result && (
            <p className="mt-5 border-l-2 border-rose pl-4">
              <span className="vds-num text-2xl text-ivory">{w.result.value}</span>
              <span className="block text-sm text-marble">{w.result.context}</span>
            </p>
          )}
        </div>
        {w.href && (
          <a
            href={w.href}
            target="_blank"
            rel="noopener noreferrer"
            className="vds-link text-sm text-ivory hover:text-rose"
          >
            Ver ao vivo
            <IconArrowUpRight className="h-4 w-4" />
            <span className="sr-only">(abre {w.name} em nova aba)</span>
          </a>
        )}
      </div>
    </article>
  );
}

/**
 * Portfólio em grade assimétrica (larga + estreita, alternando). Só entra
 * projeto real, e cada um diz o que é: produto próprio, cliente ou
 * conceito. Resultado numérico só aparece se `result` for preenchido com
 * dado medido.
 */
export function Work() {
  return (
    <section
      id="projetos"
      aria-labelledby="projetos-title"
      className="vds-dark relative overflow-hidden bg-obsidian px-4 py-24 sm:px-8 lg:py-36"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <SectionHeader
            className="lg:col-span-8"
            tone="light"
            index="03"
            eyebrow="Projetos"
            title={
              <span id="projetos-title">
                Trabalho real, <span className="vds-em text-rose">no ar.</span>
              </span>
            }
            lead="Produtos que a Vetrium criou do zero — da estratégia ao código. São a prova do nosso processo aplicado de ponta a ponta."
          />
        </div>

        <div className="mt-16 grid gap-x-10 gap-y-20 lg:grid-cols-12">
          {WORK.map((w, i) => {
            // Padrão 7/5, depois 5/7: quebra a monotonia sem perder o grid
            const row = Math.floor(i / 2);
            const first = i % 2 === 0;
            const lonely = i === WORK.length - 1 && first;
            const large = lonely || (row % 2 === 0 ? first : !first);
            return (
              <div
                key={w.slug}
                className={
                  lonely
                    ? "lg:col-span-7 lg:col-start-6"
                    : (large ? "lg:col-span-7" : "lg:col-span-5 lg:mt-24")
                }
              >
                <WorkCard w={w} large={large} index={i} />
              </div>
            );
          })}
        </div>

        <div
          data-reveal
          className="mt-24 flex flex-col gap-6 border-t vds-rule-dark pt-10 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="max-w-[52ch] text-marble">
            Cases de clientes, com contexto e resultados medidos, são publicados
            aqui assim que autorizados. Seu projeto pode ser o próximo.
          </p>
          <ButtonLink href="/orcamento" variant="light">
            Quero um projeto assim
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
