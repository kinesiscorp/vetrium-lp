import Image from "next/image";
import { WORK, WORK_KIND_LABEL } from "@/lib/site/content";
import { IconArrowUpRight, SplitHeading } from "./primitives";

/**
 * Projetos: cards de vidro com a tela real de cada produto, em mosaico
 * (um grande, dois menores). Só projetos reais, com o tipo declarado.
 */
export function Work() {
  return (
    <section id="projetos" aria-labelledby="projetos-title" className="px-5 pb-28 sm:pb-36">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <SplitHeading id="projetos-title" lead="Trabalho real," it="no ar" className="vds-h2" breakLine={false} />
          <p data-rise className="vds-lead mx-auto mt-5">
            Produtos que criamos do zero, da estratégia ao código.
          </p>
        </div>

        <div className="mt-14 grid gap-4 lg:grid-cols-5">
          {WORK.map((w, i) => (
            <a
              key={w.slug}
              href={w.href}
              target="_blank"
              rel="noopener noreferrer"
              data-rise
              style={{ ["--d" as string]: `${i * 100}ms` }}
              className={
                "group relative overflow-hidden rounded-[1.6rem] bg-paper-2 p-2 ring-1 ring-umber/10 transition-[box-shadow] duration-500 hover:ring-olive/40 " +
                (i === 0 ? "lg:col-span-3 lg:row-span-2" : "lg:col-span-2")
              }
            >
              <div className={"relative overflow-hidden rounded-[1.2rem] " + (i === 0 ? "aspect-[16/11]" : "aspect-[16/9]")}>
                <Image
                  src={w.image}
                  alt={w.imageAlt}
                  fill
                  sizes={i === 0 ? "(min-width: 1024px) 40rem, 100vw" : "(min-width: 1024px) 26rem, 100vw"}
                  className="object-cover object-top transition-transform duration-[1200ms] ease-[var(--ease-cinema)] group-hover:scale-[1.04]"
                />
              </div>
              <div className="flex items-end justify-between gap-4 px-3 pb-2 pt-4">
                <div>
                  <h3 className="text-[1.35rem] tracking-[-0.035em] text-umber">{w.name}</h3>
                  <p className="mt-1 text-[0.88rem] text-clay">
                    {w.segment} · <span className="text-clay">{WORK_KIND_LABEL[w.kind]}</span>
                  </p>
                </div>
                <span className="vds-pill-dot flex-none bg-umber/6 text-umber transition-colors group-hover:bg-umber group-hover:text-paper">
                  <IconArrowUpRight className="h-4 w-4" />
                  <span className="sr-only">Abrir {w.name} em nova aba</span>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
