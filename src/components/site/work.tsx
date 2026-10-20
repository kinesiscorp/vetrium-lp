import Image from "next/image";
import { WORK, WORK_KIND_LABEL, type WorkItem } from "@/lib/site/content";
import { IconArrowUpRight, SectionHeader } from "./primitives";

function WorkCard({ w, large, index }: { w: WorkItem; large: boolean; index: number }) {
  const media = (
    <div className="relative overflow-hidden bg-obsidian-2 ring-1 ring-white/10">
      <Image
        src={w.image}
        alt={w.imageAlt}
        width={1280}
        height={800}
        loading="lazy"
        sizes={large ? "(min-width: 1024px) 56vw, 100vw" : "(min-width: 1024px) 40vw, 100vw"}
        className="aspect-[16/10] w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
      />
    </div>
  );

  return (
    <article
      data-reveal
      style={{ ["--reveal-delay" as string]: `${(index % 2) * 120}ms` }}
      aria-labelledby={`work-${w.slug}`}
      className="group"
    >
      {w.href ? (
        <a href={w.href} target="_blank" rel="noopener noreferrer" tabIndex={-1} aria-hidden>
          {media}
        </a>
      ) : (
        media
      )}

      <div className="mt-6 flex items-start justify-between gap-6">
        <div>
          <h3 id={`work-${w.slug}`} className="font-editorial text-[2rem] leading-tight">
            {w.name}
          </h3>
          <p className="mt-2 text-marble">
            {w.segment} · <span className="text-rose">{WORK_KIND_LABEL[w.kind]}</span>
          </p>
          {w.result && (
            <p className="mt-4 text-ivory">
              <span className="font-editorial text-2xl">{w.result.value}</span>{" "}
              <span className="text-sm text-marble">{w.result.context}</span>
            </p>
          )}
        </div>
        {w.href && (
          <a
            href={w.href}
            target="_blank"
            rel="noopener noreferrer"
            className="vds-link mt-2 flex-none text-sm text-ivory hover:text-rose"
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
 * Portfólio assimétrico (largo + estreito). Só projetos reais, cada um com
 * o tipo declarado; número de resultado só com dado medido em `result`.
 */
export function Work() {
  return (
    <section
      id="projetos"
      aria-labelledby="projetos-title"
      className="vds-dark bg-obsidian px-4 py-24 sm:px-8 lg:py-36"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          id="projetos-title"
          tone="light"
          title={
            <>
              Trabalho real, <span className="vds-em text-rose">no ar.</span>
            </>
          }
          lead="Produtos que criamos do zero, da estratégia ao código."
        />

        <div className="mt-16 grid gap-x-10 gap-y-16 lg:grid-cols-12">
          {WORK.map((w, i) => {
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
                    : large
                      ? "lg:col-span-7"
                      : "lg:col-span-5 lg:mt-24"
                }
              >
                <WorkCard w={w} large={large} index={i} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
