import { Starfield } from "@/app/starfield";
import { HeroAiSearch } from "./hero-ai-search";
import { IconArrowRight } from "./icons";

/**
 * Hero Vetrium 2.0: Cyber-Industrial Interface
 */
export function Hero() {
  return (
    <section className="relative isolate flex min-h-[100svh] items-center overflow-hidden px-6 pb-20 pt-32 sm:pt-36">
      <Starfield />

      {/* Grid de Coordenadas de Fundo (Inspiração Hardware) */}
      <div 
        aria-hidden 
        className="pointer-events-none absolute inset-0 opacity-[0.03] dark:opacity-[0.07]"
        style={{
          backgroundImage: "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "4rem 4rem"
        }}
      />

      <div
        aria-hidden
        className="halo absolute -top-56 left-[6%] h-[44rem] w-[44rem] rounded-full"
      />

      <span
        aria-hidden
        style={{ letterSpacing: "0.14em" }}
        className="wordmark-ghost font-display pointer-events-none absolute bottom-[-2%] left-1/2 -translate-x-1/2 select-none whitespace-nowrap text-[17vw] font-bold leading-none text-ink opacity-[0.05] dark:opacity-[0.10]"
      >
        VETRIUM
      </span>

      <div
        data-anim="hero"
        className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-[1.1fr_1fr] lg:gap-10"
      >
        <div>
          {/* Badge Chassi com LED de Status */}
          <div className="inline-flex items-center gap-2.5 rounded-md border border-line-strong bg-surface-raised/80 px-3 py-1 text-xs font-mono backdrop-blur-md">
            <span className="flex h-2 w-2 rounded-full bg-accent-solid animate-ping" />
            <span className="tech-label text-ink-dim">VTR-ENGINE.GEO · V2.4</span>
            <span className="text-[10px] text-muted">|</span>
            <span className="text-[11px] text-emerald-500 font-semibold">100% DISPONÍVEL</span>
          </div>

          <h1 className="t-display mt-6 max-w-[15ch] text-[clamp(2.5rem,5.5vw,4.2rem)] leading-[1.08]">
            Sua empresa recomendada pela IA.
            <br />
            <span className="emph">E convertendo no topo.</span>
          </h1>

          <p className="mt-7 max-w-[48ch] text-[15px] leading-relaxed text-ink-dim sm:text-base">
            Desenvolvemos Landing Pages ultra velozes e ecossistemas web com engenharia proprietária, preparadas para que o ChatGPT, Perplexity e Google citem seu negócio como a autoridade máxima do setor.
          </p>

          {/* Ações / Botões com Estilo Tátil e Glow */}
          <div className="mt-9 flex flex-wrap items-center gap-3.5">
            <a
              href="https://wa.me/5511941889077?text=Olá!%20Gostaria%20de%20um%20diagnóstico%20gratuito%20para%20minha%20empresa%20com%20a%20Vetrium."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-tactile group inline-flex items-center gap-3 rounded-xl px-6 py-3.5 text-xs text-ink shadow-[0_10px_30px_-10px_rgba(108,59,255,0.4)]"
            >
              <span className="h-2 w-2 rounded-full bg-accent-solid" />
              <span>Fazer diagnóstico gratuito</span>
              <IconArrowRight className="h-3.5 w-3.5 text-accent-solid transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href="#projetos"
              className="inline-flex items-center gap-2 rounded-xl border border-line-strong bg-bg-sunken/60 px-5 py-3.5 text-xs font-medium text-ink-dim backdrop-blur-sm transition-colors hover:border-accent-solid/50 hover:text-ink"
            >
              <span>Explorar laboratório</span>
              <span className="text-[10px] font-mono text-muted">[03 CASES]</span>
            </a>
          </div>

          {/* Régua de Telemetria / Hardware */}
          <div className="mt-11 border-t border-line pt-6">
            <div className="grid grid-cols-3 gap-3 text-left">
              <div>
                <p className="tech-label text-[9px]">ARQUITETURA</p>
                <p className="mt-1 font-mono text-xs font-semibold text-ink">Next.js 16 + SSR</p>
              </div>
              <div className="border-l border-line pl-3">
                <p className="tech-label text-[9px]">SCORE PERFORMANCE</p>
                <p className="mt-1 font-mono text-xs font-semibold text-emerald-500">100 / 100 LIGHTHOUSE</p>
              </div>
              <div className="border-l border-line pl-3">
                <p className="tech-label text-[9px]">OTIMIZAÇÃO IA</p>
                <p className="mt-1 font-mono text-xs font-semibold text-accent-solid">GEO + LLMS.TXT</p>
              </div>
            </div>
          </div>
        </div>

        {/* Console / Mockup de IA com Efeito Border Beam */}
        <div className="relative px-2 sm:px-8 lg:px-0">
          <div className="industrial-panel p-1.5">
            <div className="border-beam" />
            <HeroAiSearch />
          </div>
        </div>
      </div>
    </section>
  );
}
