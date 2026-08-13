import { IconCompass, IconLaunch, IconPen, IconSearch } from "./icons";
import { SectionHeading } from "./section-heading";

const STEPS = [
  {
    n: "01",
    title: "Imersão & Diagnóstico",
    Icon: IconSearch,
    body: "Entendemos negócio, público, mercado e objetivos pra identificar onde está o problema real.",
    deliverables: ["Briefing estratégico", "Benchmark", "Definição de metas"],
  },
  {
    n: "02",
    title: "Estratégia & Direção",
    Icon: IconCompass,
    body: "Definimos posicionamento, arquitetura da informação e a direção criativa que guia o projeto.",
    deliverables: ["Estratégia de marca", "Arquitetura", "Direção visual"],
  },
  {
    n: "03",
    title: "Design & Validação",
    Icon: IconPen,
    body: "Criamos, testamos e refinamos as soluções visuais e funcionais com foco em experiência.",
    deliverables: ["Wireframes", "Protótipos", "Design System"],
  },
  {
    n: "04",
    title: "Desenvolvimento & Lançamento",
    Icon: IconLaunch,
    body: "Transformamos o design em produto, testamos, publicamos e acompanhamos os resultados.",
    deliverables: ["Produto final", "Testes e otimização", "Suporte pós-lançamento"],
  },
];

/**
 * Processo em trilho.
 *
 * Aqui a numeração carrega informação de verdade (é uma sequência, e o
 * cliente precisa saber o que vem antes do quê), então ela deixou de ser um
 * detalhe no canto do card e virou a estrutura: um fio horizontal com nós
 * facetados marcando cada etapa. No mobile o mesmo trilho vira vertical.
 */
export function Process() {
  return (
    <section id="processo" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <div data-anim="fade" className="js-anim">
          <SectionHeading
            title={
              <>
                Um processo claro,{" "}
                <span className="emph">resultados previsíveis</span>
              </>
            }
            lead="Do primeiro contato à entrega final: quatro etapas, sempre com o mesmo time do início ao fim."
          />
        </div>

        <div className="relative mt-16 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Trilho: some no mobile, onde cada etapa já tem o próprio fio */}
          <div
            aria-hidden
            className="absolute left-0 right-0 top-[5px] hidden h-px bg-line lg:block"
          />

          {STEPS.map(({ n, title, Icon, body, deliverables }, i) => (
            <div
              key={n}
              data-anim="fade"
              data-delay={i * 110}
              className="js-anim relative h-full"
            >
              <article className="group flex h-full flex-col">
                {/* Nó do trilho */}
                <div className="relative flex items-center gap-3">
                  <span
                    aria-hidden
                    className="h-[11px] w-[11px] flex-none rotate-45 border border-accent-solid bg-bg transition-colors duration-500 group-hover:bg-accent-solid"
                  />
                  <span aria-hidden className="h-px flex-1 bg-line lg:hidden" />
                  <span className="t-label tnum text-accent-solid">{n}</span>
                </div>

                <span className="mt-7 grid h-11 w-11 place-items-center rounded-[10px] border border-line bg-bg-elevated/60 text-accent-solid transition-colors duration-500 group-hover:border-accent-solid">
                  <Icon data-anim="icon-draw" className="icon-pop h-5 w-5" />
                </span>

                {/* Reserva duas linhas a partir de sm: os títulos têm
                    comprimentos diferentes e sem isso o corpo de cada etapa
                    começa numa altura diferente na mesma fileira. */}
                <h3 className="t-h3 mt-6 text-[17px] sm:min-h-[2.7em]">
                  {title}
                </h3>
                <p className="mt-3 text-[14px] leading-relaxed text-muted">
                  {body}
                </p>

                {/* mt-auto encosta o bloco de entregáveis no rodapé da coluna:
                    os corpos têm alturas diferentes e, alinhados por cima,
                    a lista de cada etapa começava numa altura diferente. */}
                <p className="t-label mt-auto border-t border-line pt-6 text-[10px] text-ink-dim">
                  Entregáveis
                </p>
                <ul className="mt-3 space-y-2 text-[13.5px] text-muted">
                  {deliverables.map((d) => (
                    <li key={d} className="flex items-start gap-2.5">
                      <span
                        aria-hidden
                        className="mt-[0.42rem] h-1 w-1 flex-none rotate-45 bg-accent-solid"
                      />
                      {d}
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
