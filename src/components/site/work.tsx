import Image from "next/image";
import { WORK, WORK_KIND_LABEL } from "@/lib/site/content";
import { IconArrowUpRight, SplitHeading } from "./primitives";

/**
 * Projetos: dois cards lado a lado com a tela real de cada trabalho e o
 * tipo declarado (cliente ou produto próprio).
 */
export function Work() {
  return (
    <section id="projetos" aria-labelledby="projetos-title" className="px-5 pb-28 sm:pb-36">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <SplitHeading id="projetos-title" lead="Trabalho real," it="no ar" className="vds-h2" breakLine={false} />
          <p data-rise className="vds-lead mx-auto mt-5">
            Do diagnóstico ao código, feitos pelo mesmo time.
          </p>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2">
          {WORK.map((w, i) => {
            const body = (
              <>
                <div className="relative aspect-[16/10] overflow-hidden rounded-[1.2rem]">
                  <Image
                    src={w.image}
                    alt={w.imageAlt}
                    fill
                    sizes="(min-width: 768px) 36rem, 100vw"
                    className="object-cover object-top transition-transform duration-[1200ms] ease-[var(--ease-cinema)] group-hover:scale-[1.04]"
                  />
                </div>
                <div className="flex items-end justify-between gap-4 px-3 pb-2 pt-4">
                  <div>
                    <h3 className="text-[1.35rem] tracking-[-0.035em] text-night">{w.name}</h3>
                    <p className="mt-1 text-[0.88rem] text-slate">
                      {w.segment} · <span className="text-cobalt">{WORK_KIND_LABEL[w.kind]}</span>
                    </p>
                  </div>
                  {w.href && (
                    <span className="vds-pill-dot flex-none bg-night/6 text-night transition-colors group-hover:bg-night group-hover:text-paper">
                      <IconArrowUpRight className="h-4 w-4" />
                      <span className="sr-only">Abrir {w.name} em nova aba</span>
                    </span>
                  )}
                </div>
              </>
            );
            const cls =
              "group relative overflow-hidden rounded-[1.6rem] bg-paper-2 p-2 ring-1 ring-night/10 transition-[box-shadow] duration-500 " +
              (w.href ? "hover:ring-cobalt/40" : "");
            const style = { ["--d" as string]: `${i * 100}ms` };
            return w.href ? (
              <a key={w.slug} href={w.href} target="_blank" rel="noopener noreferrer" data-rise style={style} className={cls}>
                {body}
              </a>
            ) : (
              <article key={w.slug} data-rise style={style} className={cls}>
                {body}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
