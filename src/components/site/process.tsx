import { STEPS } from "@/lib/site/content";
import { ButtonLink, SectionHeader } from "./primitives";

/** Etapas que só avançam com o "de acordo" do cliente. */
const APPROVAL = new Set(["03", "04"]);

/**
 * Processo como trilho: no desktop uma linha horizontal com seis nós; no
 * mobile a mesma linha fica vertical à esquerda. A numeração é a estrutura,
 * não decoração — é uma sequência e o cliente precisa saber o que vem antes.
 */
export function Process() {
  return (
    <section id="processo" aria-labelledby="processo-title" className="vds-paper px-4 py-24 sm:px-8 lg:py-36">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <SectionHeader
            className="lg:col-span-8"
            index="04"
            eyebrow="Como funciona"
            title={
              <span id="processo-title">
                Um método claro, <span className="vds-em">do primeiro contato ao site no ar.</span>
              </span>
            }
            lead="Seis etapas, sempre na mesma ordem. Você acompanha cada uma e aprova a estrutura e o visual antes de qualquer linha de código."
          />
        </div>

        <ol className="relative mt-16 grid gap-0 lg:grid-cols-6 lg:gap-6">
          {/* Trilho horizontal (desktop) */}
          <span aria-hidden className="absolute left-0 right-0 top-[7px] hidden h-px bg-obsidian/20 lg:block" />
          {/* Trilho vertical (mobile) */}
          <span aria-hidden className="absolute bottom-0 left-[7px] top-0 w-px bg-obsidian/20 lg:hidden" />

          {STEPS.map((s, i) => (
            <li
              key={s.n}
              data-reveal
              style={{ ["--reveal-delay" as string]: `${i * 70}ms` }}
              className="relative pb-12 pl-10 lg:pb-0 lg:pl-0"
            >
              <span
                aria-hidden
                className={
                  "absolute left-0 top-0 block h-[15px] w-[15px] rotate-45 border border-obsidian lg:relative " +
                  (i === STEPS.length - 1 ? "bg-rose" : "bg-ivory")
                }
              />
              <p className="vds-num text-sm text-rose-ink lg:mt-7">{s.n}</p>
              <h3 className="vds-h3 mt-2 lg:min-h-[2.6em]">{s.title}</h3>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-stone-ink">{s.body}</p>
              <p className="vds-label mt-5 text-[0.6rem] text-obsidian">
                <span className="text-stone-ink">Saída: </span>
                {s.output}
              </p>
              {APPROVAL.has(s.n) && (
                <p className="vds-label mt-3 inline-block bg-obsidian px-2 py-1 text-[0.56rem] text-ivory">
                  Sua aprovação
                </p>
              )}
            </li>
          ))}
        </ol>

        <div data-reveal className="mt-16 flex flex-col gap-4 sm:flex-row sm:items-center">
          <ButtonLink href="/orcamento">Começar pela etapa 01</ButtonLink>
          <p className="text-sm text-stone-ink">
            O primeiro passo é uma solicitação de orçamento — leva cerca de dois minutos.
          </p>
        </div>
      </div>
    </section>
  );
}
