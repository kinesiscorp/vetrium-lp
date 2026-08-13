import { Starfield } from "@/app/starfield";
import { HeroCrystal } from "./hero-crystal";
import { IconArrowRight, IconClock, IconPin } from "./icons";

/**
 * Hero: headline à esquerda, cristal à direita.
 *
 * A headline curta ("Menos enfeite. Mais resultado.") e o rótulo do estúdio
 * vieram da última passada do fundador — ela diz em duas linhas o que a versão
 * anterior dizia em quatro, então ficou. O que mudou aqui foi só o sistema:
 * Sora no display, o glifo cristalino provisório substituído pelo símbolo de
 * verdade (HeroCrystal, mesma malha de vetrium-mark.tsx) e o cartão flutuante
 * de "aceitando projetos" absorvido pela faixa de fatos — dois avisos de
 * disponibilidade na mesma tela era um a mais.
 *
 * O fantasma do wordmark no rodapé do bloco é o wordmark de verdade —
 * "VETRIUM" em caixa alta com o tracking do brandkit. O `data-anim="hero"`
 * continua dissolvendo tudo na saída.
 */
export function Hero() {
  return (
    <section className="relative isolate flex min-h-[100svh] items-center overflow-hidden px-6 pb-20 pt-32 sm:pt-36">
      <Starfield />
      <div
        aria-hidden
        className="halo absolute -top-56 left-[6%] h-[44rem] w-[44rem] rounded-full"
      />

      {/* No tema claro a tinta escura pesa mais atrás do texto, então o
          fantasma do wordmark entra com metade da presença. */}
      <span
        aria-hidden
        style={{ letterSpacing: "0.14em" }}
        className="wordmark-ghost font-display pointer-events-none absolute bottom-[-2%] left-1/2 -translate-x-1/2 select-none whitespace-nowrap text-[17vw] font-bold leading-none text-ink opacity-[0.08] dark:opacity-[0.16]"
      >
        VETRIUM
      </span>

      <div
        data-anim="hero"
        className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-10"
      >
        <div>
          <p className="t-label text-muted">Digital Design &amp; Development</p>

          <h1 className="t-display mt-6 max-w-[14ch] text-[clamp(2.6rem,6vw,4.5rem)]">
            Menos enfeite.
            <br />
            <span className="emph">Mais resultado.</span>
          </h1>

          <p className="mt-7 max-w-[46ch] text-[15px] leading-relaxed text-ink-dim sm:text-base">
            Estúdio de design e tecnologia. Diagnóstico primeiro, design
            depois: cada decisão visual responde a um problema real de
            conversão.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#contato"
              className="btn-glow group inline-flex items-center gap-2.5 rounded-full bg-metal py-3.5 pl-6 pr-3 text-sm font-semibold text-accent-ink"
            >
              Iniciar um projeto
              <span className="grid h-7 w-7 place-items-center rounded-full bg-accent-ink/15 transition-transform duration-300 group-hover:translate-x-0.5">
                <IconArrowRight className="h-3.5 w-3.5" />
              </span>
            </a>
            <a
              href="#investimento"
              className="group inline-flex items-center gap-2.5 rounded-full border border-line-strong py-3.5 pl-6 pr-3 text-sm font-medium text-ink-dim transition-colors hover:border-accent-solid hover:text-ink"
            >
              Estimar o investimento
              <span className="grid h-7 w-7 place-items-center rounded-full border border-line transition-transform duration-300 group-hover:translate-x-0.5">
                <IconArrowRight className="h-3.5 w-3.5" />
              </span>
            </a>
          </div>

          {/* Faixa de fatos: fio em cima, itens separados por vãos generosos */}
          <ul className="mt-11 flex flex-wrap items-center gap-x-7 gap-y-3 border-t border-line pt-6 text-[13px] text-muted">
            <li className="flex items-center gap-2">
              <IconPin className="h-4 w-4 text-accent-solid" />
              Atendimento em todo o Brasil
            </li>
            <li className="flex items-center gap-2">
              <IconClock className="h-4 w-4 text-accent-solid" />
              Resposta em até 24h
            </li>
            <li className="flex items-center gap-2">
              <span aria-hidden className="pulse-dot h-2 w-2 rounded-full bg-ok" />
              Aceitando projetos · diagnóstico sem compromisso
            </li>
          </ul>
        </div>

        <div className="px-2 sm:px-10 lg:px-0">
          <HeroCrystal />
        </div>
      </div>
    </section>
  );
}
