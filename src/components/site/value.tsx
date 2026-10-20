import { PILLARS } from "@/lib/site/content";
import { SectionHeader } from "./primitives";

/**
 * Proposta de valor. Depois do impacto do hero, a página respira: marfim,
 * tipografia e linhas. Cada pilar mostra a relação causa → objetivo, sem
 * prometer resultado.
 */
export function Value() {
  return (
    <section id="proposta" aria-labelledby="proposta-title" className="vds-paper px-4 py-24 sm:px-8 lg:py-36">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-12">
          <SectionHeader
            className="lg:col-span-7"
            index="01"
            eyebrow="Por que a Vetrium"
            title={
              <span id="proposta-title">
                Um site bonito que ninguém entende{" "}
                <span className="vds-em text-rose-ink">não trabalha</span> pelo seu negócio.
              </span>
            }
          />
          <p
            data-reveal
            className="vds-lead self-end text-stone-ink lg:col-span-5"
          >
            Muitos sites são tratados como peça de decoração. Para nós, o site é
            uma ferramenta: ele precisa explicar o que você faz, passar
            confiança e deixar claro como entrar em contato. A arte chama a
            atenção — a estrutura faz o resto.
          </p>
        </div>

        <ol className="mt-20 grid border-t vds-rule lg:grid-cols-3">
          {PILLARS.map((p, i) => (
            <li
              key={p.n}
              data-reveal
              style={{ ["--reveal-delay" as string]: `${i * 90}ms` }}
              className={
                "flex flex-col border-b vds-rule py-10 lg:border-b-0 lg:px-10 lg:py-12 " +
                (i > 0 ? "lg:border-l" : "lg:pl-0")
              }
            >
              <span className="vds-num text-sm text-rose-ink">{p.n}</span>
              <h3 className="font-editorial mt-5 text-[1.75rem] leading-tight">{p.title}</h3>
              <p className="mt-4 leading-relaxed text-stone-ink">{p.body}</p>

              <div className="mt-auto pt-10">
                <div className="flex items-center gap-3" aria-hidden>
                  <span className="h-2 w-2 rotate-45 border border-obsidian" />
                  <span className="h-px flex-1 bg-obsidian/25" />
                  <span className="h-2 w-2 rotate-45 bg-rose" />
                </div>
                <p className="vds-label mt-4 text-[0.64rem] text-stone-ink">Busca produzir</p>
                <p className="mt-2 font-medium">{p.outcome}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
