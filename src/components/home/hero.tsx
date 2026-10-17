import { Starfield } from "@/app/starfield";
import { HeroComparison } from "./hero-comparison";
import { IconArrowRight } from "./icons";

/**
 * Hero Vetrium: Foco no Pequeno Empresário & Percepção de Valor
 */
export function Hero() {
  return (
    <section className="relative isolate flex min-h-[100svh] items-center overflow-hidden px-6 pb-20 pt-32 sm:pt-36">
      <Starfield />

      {/* Grid de Coordenadas de Fundo */}
      <div 
        aria-hidden 
        className="pointer-events-none absolute inset-0 opacity-[0.03] dark:opacity-[0.06]"
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
          {/* Badge Direto */}
          <div className="inline-flex items-center gap-2 rounded-full border border-line-strong bg-surface-raised/80 px-3.5 py-1.5 text-xs font-medium text-ink-dim backdrop-blur-md">
            <span className="flex h-2 w-2 rounded-full bg-accent-solid animate-pulse" />
            Sites e Landing Pages para Negócios Locais
          </div>

          {/* Headline Opção 1: O Efeito Vitrine */}
          <h1 className="t-display mt-6 max-w-[15ch] text-[clamp(2.5rem,5.5vw,4.2rem)] leading-[1.08]">
            O seu trabalho é de primeira.
            <br />
            <span className="emph">Sua presença na internet precisa acompanhar.</span>
          </h1>

          <p className="mt-7 max-w-[48ch] text-[15px] leading-relaxed text-ink-dim sm:text-base">
            O cliente pesquisa pelo seu serviço e a primeira impressão precisa passar a mesma confiança de quando ele entra na sua porta. Criamos páginas rápidas, elegantes e feitas para transformar visitantes em mensagens no seu WhatsApp.
          </p>

          {/* Botões de Ação */}
          <div className="mt-9 flex flex-wrap items-center gap-3.5">
            <a
              href="https://wa.me/5511941889077?text=Olá!%20Gostaria%20de%20conversar%20sobre%20um%20site%20para%20o%20meu%20negócio%20com%20a%20Vetrium."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-tactile group inline-flex items-center gap-3 rounded-xl px-6 py-3.5 text-xs text-ink shadow-[0_10px_30px_-10px_rgba(108,59,255,0.4)]"
            >
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              <span>Conversar sobre o meu negócio</span>
              <IconArrowRight className="h-3.5 w-3.5 text-accent-solid transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href="#exemplos"
              className="inline-flex items-center gap-2 rounded-xl border border-line-strong bg-bg-sunken/60 px-5 py-3.5 text-xs font-medium text-ink-dim backdrop-blur-sm transition-colors hover:border-accent-solid/50 hover:text-ink"
            >
              <span>Ver exemplos reais</span>
            </a>
          </div>

          {/* Fatos Práticos (Sem jargão de programador) */}
          <div className="mt-11 border-t border-line pt-6">
            <div className="grid grid-cols-3 gap-3 text-left">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-muted">VELOCIDADE</p>
                <p className="mt-1 font-sans text-xs font-semibold text-ink">Abre em 1 segundo no celular</p>
              </div>
              <div className="border-l border-line pl-3">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-muted">OBJETIVO</p>
                <p className="mt-1 font-sans text-xs font-semibold text-emerald-500">Direto pro seu WhatsApp</p>
              </div>
              <div className="border-l border-line pl-3">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-muted">VALOR</p>
                <p className="mt-1 font-sans text-xs font-semibold text-accent-solid">Visual de marca grande</p>
              </div>
            </div>
          </div>
        </div>

        {/* Comparativo Interativo ao Lado */}
        <div className="relative px-2 sm:px-8 lg:px-0">
          <div className="industrial-panel p-1.5">
            <div className="border-beam" />
            <HeroComparison />
          </div>
        </div>
      </div>
    </section>
  );
}
