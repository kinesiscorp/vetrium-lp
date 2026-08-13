import { Starfield } from "@/app/starfield";
import { IconArrowRight, IconClock, IconMail } from "./icons";
import { VetriumLockup } from "./vetrium-mark";

/**
 * "Sobre + contato" em duas colunas.
 *
 * A referência põe uma foto do time no meio. Não existe foto real de equipe
 * no repositório e simular pessoas seria enganoso — então o lugar da imagem
 * é ocupado pela própria marca: o lockup empilhado sobre o campo de
 * estrelas, que é o que a Vetrium tem de mais concreto pra mostrar aqui.
 *
 * Esta seção também absorve o CTA final antigo ("Seu próximo site começa
 * aqui") — dois convites de contato colados um no outro seria redundante.
 */
const STACK = [
  "Figma",
  "Next.js",
  "TypeScript",
  "Tailwind",
  "React",
  "Vercel",
  "Design Systems",
  "UI/UX",
];

export function AboutContact() {
  return (
    <section id="sobre" className="relative px-6 py-28">
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1.1fr_1fr]">
        {/* ---------- Sobre o estúdio ---------- */}
        <div data-anim="fade" className="js-anim h-full">
          <div className="crystal-panel facet-cut flex h-full flex-col p-9 sm:p-11">
            <h2 className="t-h2 max-w-[18ch] text-[clamp(1.7rem,3.2vw,2.4rem)]">
              Estúdio independente de design e{" "}
              <span className="emph">tecnologia</span>
            </h2>
            <p className="mt-6 max-w-[54ch] text-[15px] leading-relaxed text-muted">
              Tudo que sua marca precisa já existe dentro do seu negócio —
              nosso trabalho é tornar isso visível.
            </p>
            <p className="mt-4 max-w-[54ch] text-[15px] leading-relaxed text-muted">
              Diagnóstico primeiro, design depois. Cada decisão visual responde
              a um problema real de conversão, e o mesmo time acompanha do
              briefing ao pós-lançamento.
            </p>

            <p className="t-label mt-10 text-ink-dim">Ferramentas de trabalho</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {STACK.map((tool) => (
                <li
                  key={tool}
                  className="rounded-[6px] border border-line px-3 py-1.5 text-[11.5px] font-medium text-muted"
                >
                  {tool}
                </li>
              ))}
            </ul>

            {/* Assinatura da marca fecha o bloco sobre o estúdio */}
            <div className="mt-auto flex items-center gap-5 border-t border-line pt-9">
              <VetriumLockup markSize={34} />
            </div>
          </div>
        </div>

        {/* ---------- Contato ---------- */}
        <div data-anim="fade" data-delay={110} className="js-anim h-full">
          <div
            id="contato"
            // scroll-mt: o alvo é o próprio painel, não uma seção com padding —
            // sem isso o topo dele para embaixo da nav flutuante.
            className="crystal-panel facet-cut relative isolate flex h-full scroll-mt-28 flex-col justify-center overflow-hidden bg-bg-elevated p-9 sm:p-11"
          >
            <Starfield density={0.00011} />
            <div
              aria-hidden
              className="halo absolute -top-24 left-1/2 h-[24rem] w-[24rem] -translate-x-1/2 rounded-full"
            />
            <div className="relative z-10">
              <h2 className="t-h2 max-w-[16ch] text-[clamp(1.7rem,3.2vw,2.4rem)]">
                Seu próximo projeto começa com uma{" "}
                <span className="emph">boa conversa</span>
              </h2>
              <p className="mt-6 max-w-[42ch] text-[15px] leading-relaxed text-muted">
                Conta o que você quer resolver. A gente responde com um
                diagnóstico honesto do que dá pra melhorar primeiro — sem
                compromisso.
              </p>

              <a
                href="mailto:contato@vetrium.com.br"
                className="btn-glow group mt-9 inline-flex items-center gap-2.5 rounded-full bg-metal py-3.5 pl-6 pr-3 text-sm font-semibold text-accent-ink"
              >
                Falar com a Vetrium
                <span className="grid h-7 w-7 place-items-center rounded-full bg-accent-ink/15 transition-transform duration-300 group-hover:translate-x-0.5">
                  <IconArrowRight className="h-3.5 w-3.5" />
                </span>
              </a>

              <ul className="mt-9 space-y-3 border-t border-line pt-7 text-[13.5px] text-muted">
                <li className="flex items-center gap-2.5">
                  <IconMail className="h-4 w-4 flex-none text-accent-solid" />
                  <a
                    href="mailto:contato@vetrium.com.br"
                    className="transition-colors hover:text-ink"
                  >
                    contato@vetrium.com.br
                  </a>
                </li>
                <li className="flex items-center gap-2.5">
                  <IconClock className="h-4 w-4 flex-none text-accent-solid" />
                  Resposta em até 24 horas úteis
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
