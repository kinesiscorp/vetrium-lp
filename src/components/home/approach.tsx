import { IconCode, IconPen, IconStrategy } from "./icons";
import { SectionHeading } from "./section-heading";

/**
 * "Como pensamos" — os três pilares do estúdio.
 *
 * Conteúdo herdado da última passada do fundador (o bento de Estratégia /
 * Design / Tecnologia). O que mudou é o vocabulário visual: as esferas de
 * wireframe viraram os ícones lineares da casa, a moldura em gradiente virou
 * `.crystal-panel`, e o card do meio deixa de se destacar por vidro e brilho
 * pra se destacar por aresta — borda em Electric Violet e superfície elevada,
 * que é como a marca marca ênfase em todo o resto da página.
 *
 * Só o pilar do meio ganha o destaque, como no original: é o que a Vetrium
 * vende primeiro.
 */
const PILLARS = [
  {
    title: "Estratégia",
    Icon: IconStrategy,
    body: "Diagnóstico antes do pixel — entendemos o que trava a conversão antes de propor qualquer visual novo.",
  },
  {
    title: "Design",
    Icon: IconPen,
    body: "Marca, UI e UX desenhados pra parecer óbvio, não pra decorar.",
    highlight: true,
    tools: ["Figma", "Design Systems", "UI/UX"],
  },
  {
    title: "Tecnologia",
    Icon: IconCode,
    body: "Do wireframe ao ar — o mesmo time que desenha também constrói.",
    tools: ["Next.js", "TypeScript", "Vercel"],
  },
];

export function Approach() {
  return (
    <section className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <div data-anim="fade" className="js-anim">
          <SectionHeading
            title={
              <>
                Experiências construídas com <span className="emph">estratégia</span>,{" "}
                <span className="emph">design</span> e{" "}
                <span className="emph">tecnologia</span>
              </>
            }
            lead="As três frentes são costuradas pelo mesmo time, do briefing ao pós-lançamento — nenhuma delas é passada pra um fornecedor no meio do caminho."
          />
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {PILLARS.map(({ title, Icon, body, highlight, tools }, i) => (
            // Wrapper leva a animação de scroll (GSAP escreve transform inline);
            // o hover mora no filho pra não brigar com ela.
            <div
              key={title}
              data-anim="fade"
              data-delay={i * 100}
              className="js-anim h-full"
            >
              <article
                className={
                  "crystal-panel hover-lift group flex h-full flex-col p-8 " +
                  (highlight
                    ? "border-accent-solid/40 bg-bg-elevated/70"
                    : "")
                }
              >
                <span className="grid h-11 w-11 flex-none place-items-center rounded-[10px] border border-line text-accent-solid transition-colors duration-500 group-hover:border-accent-solid">
                  <Icon data-anim="icon-draw" className="icon-anim h-5 w-5" />
                </span>

                <h3 className="t-h3 mt-8 text-[17px]">{title}</h3>
                <p className="mt-3 text-[14px] leading-relaxed text-muted">
                  {body}
                </p>

                {/* mt-auto encosta a lista no rodapé do painel: os corpos têm
                    alturas diferentes e, sem isso, as listas de cada pilar
                    começariam em alturas distintas na mesma fileira. */}
                {tools && (
                  <ul className="mt-auto space-y-2.5 border-t border-line pt-6 text-[13.5px] text-muted">
                    {tools.map((tool) => (
                      <li key={tool} className="flex items-center gap-2.5">
                        <span
                          aria-hidden
                          className="h-1 w-1 flex-none rotate-45 bg-accent-solid"
                        />
                        {tool}
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
