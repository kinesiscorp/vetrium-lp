import { Starfield } from "@/app/starfield";
import { HeroCrystal } from "./hero-crystal";
import { IconArrowRight, IconClock, IconPin } from "./icons";

/**
 * Hero: Posicionamento estratégico Vetrium (Design de Alta Conversão + GEO / Motores de IA)
 */
export function Hero() {
  return (
    <section className="relative isolate flex min-h-[100svh] items-center overflow-hidden px-6 pb-20 pt-32 sm:pt-36">
      <Starfield />
      <div
        aria-hidden
        className="halo absolute -top-56 left-[6%] h-[44rem] w-[44rem] rounded-full"
      />

      <span
        aria-hidden
        style={{ letterSpacing: "0.14em" }}
        className="wordmark-ghost font-display pointer-events-none absolute bottom-[-2%] left-1/2 -translate-x-1/2 select-none whitespace-nowrap text-[17vw] font-bold leading-none text-ink opacity-[0.08] dark:opacity-[0.16]"
      >
        VETRIUM
      </span>

      <div
        data-anim="hero"
        className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-[1.1fr_1fr] lg:gap-10"
      >
        <div>
          {/* Badge moderno */}
          <div className="inline-flex items-center gap-2 rounded-full border border-line-strong bg-surface-raised/60 px-3.5 py-1.5 text-xs font-medium text-ink-dim backdrop-blur-md">
            <span className="flex h-2 w-2 rounded-full bg-accent-solid animate-pulse" />
            Engenharia Digital &amp; Otimização para IA (GEO)
          </div>

          <h1 className="t-display mt-6 max-w-[15ch] text-[clamp(2.5rem,5.5vw,4.2rem)] leading-[1.08]">
            Sua empresa recomendada pela IA.
            <br />
            <span className="emph">E convertendo no topo.</span>
          </h1>

          <p className="mt-7 max-w-[48ch] text-[15px] leading-relaxed text-ink-dim sm:text-base">
            Desenvolvemos Landing Pages ultra velozes e de alta conversão, preparadas nativamente para que o ChatGPT, Perplexity e o Google citem o seu negócio como a autoridade máxima do seu setor.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="https://wa.me/5511941889077?text=Olá!%20Gostaria%20de%20um%20diagnóstico%20gratuito%20para%20minha%20empresa%20com%20a%20Vetrium."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glow group inline-flex items-center gap-2.5 rounded-full bg-metal py-3.5 pl-6 pr-3 text-sm font-semibold text-accent-ink"
            >
              Fazer diagnóstico gratuito
              <span className="grid h-7 w-7 place-items-center rounded-full bg-accent-ink/15 transition-transform duration-300 group-hover:translate-x-0.5">
                <IconArrowRight className="h-3.5 w-3.5" />
              </span>
            </a>
            <a
              href="#projetos"
              className="group inline-flex items-center gap-2.5 rounded-full border border-line-strong py-3.5 pl-6 pr-3 text-sm font-medium text-ink-dim transition-colors hover:border-accent-solid hover:text-ink"
            >
              Conhecer projetos
              <span className="grid h-7 w-7 place-items-center rounded-full border border-line transition-transform duration-300 group-hover:translate-x-0.5">
                <IconArrowRight className="h-3.5 w-3.5" />
              </span>
            </a>
          </div>

          {/* Faixa de fatos */}
          <ul className="mt-11 flex flex-wrap items-center gap-x-7 gap-y-3 border-t border-line pt-6 text-[13px] text-muted">
            <li className="flex items-center gap-2">
              <IconPin className="h-4 w-4 text-accent-solid" />
              Next.js + Core Web Vitals 99+
            </li>
            <li className="flex items-center gap-2">
              <IconClock className="h-4 w-4 text-accent-solid" />
              Indexação Semântica Schema &amp; llms.txt
            </li>
            <li className="flex items-center gap-2">
              <span aria-hidden className="pulse-dot h-2 w-2 rounded-full bg-ok" />
              Aceitando projetos · vagas limitadas no mês
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
