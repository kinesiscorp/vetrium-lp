import { Starfield } from "@/app/starfield";
import { HeroStage } from "./hero-stage";
import { IconArrowRight } from "./icons";

/**
 * Hero Vetrium: Layout Centralizado de Alto Impacto
 * - Título no centro com proposta convincente para pequenos negócios
 * - Explicação técnica discreta para passar autoridade a profissionais
 * - Stage com interação de scroll e visualização em tempo real
 */
export function Hero() {
  return (
    <section className="relative isolate flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-6 pb-24 pt-32 sm:pt-36">
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
        className="halo absolute -top-56 left-1/2 h-[44rem] w-[44rem] -translate-x-1/2 rounded-full"
      />

      <span
        aria-hidden
        style={{ letterSpacing: "0.14em" }}
        className="wordmark-ghost font-display pointer-events-none absolute bottom-[10%] left-1/2 -translate-x-1/2 select-none whitespace-nowrap text-[18vw] font-bold leading-none text-ink opacity-[0.04] dark:opacity-[0.08]"
      >
        VETRIUM
      </span>

      {/* Bloco Central de Copy */}
      <div className="relative z-10 mx-auto max-w-4xl text-center">
        {/* Badge Direto */}
        <div className="inline-flex items-center gap-2 rounded-full border border-line-strong bg-surface-raised/80 px-3.5 py-1.5 text-xs font-medium text-ink-dim backdrop-blur-md">
          <span className="flex h-2 w-2 rounded-full bg-accent-solid animate-pulse" />
          Sites e Landing Pages para Negócios Locais
        </div>

        {/* Headline Centrada */}
        <h1 className="t-display mt-7 text-balance text-[clamp(2.4rem,5.6vw,4.5rem)] leading-[1.08] text-ink">
          O seu trabalho é de primeira.
          <br />
          <span className="emph">Sua presença na internet precisa acompanhar.</span>
        </h1>

        {/* Subtítulo Claro e Humano */}
        <p className="mt-7 max-w-2xl mx-auto text-balance text-[15px] leading-relaxed text-ink-dim sm:text-lg">
          Construímos páginas que transmitem a verdadeira qualidade do seu serviço, abrem em 1 segundo no celular e colocam o cliente conversando direto no seu WhatsApp.
        </p>

        {/* CTAs Centrados */}
        <div className="mt-9 flex flex-wrap items-center justify-center gap-3.5">
          <a
            href="https://wa.me/5511941889077?text=Olá!%20Gostaria%20de%20conversar%20sobre%20um%20site%20para%20o%20meu%20negócio%20com%20a%20Vetrium."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-tactile group inline-flex items-center gap-3 rounded-xl px-7 py-4 text-xs font-semibold text-ink shadow-[0_12px_35px_-10px_rgba(108,59,255,0.45)]"
          >
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Conversar sobre o meu negócio</span>
            <IconArrowRight className="h-3.5 w-3.5 text-accent-solid transition-transform group-hover:translate-x-1" />
          </a>

          <a
            href="#projetos"
            className="inline-flex items-center gap-2 rounded-xl border border-line-strong bg-bg-sunken/60 px-6 py-4 text-xs font-medium text-ink-dim backdrop-blur-sm transition-colors hover:border-accent-solid/50 hover:text-ink"
          >
            <span>Ver projetos reais</span>
          </a>
        </div>

        {/* Faixa Técnica Discreta (Autoridade para Clientes Profissionais/Exigentes) */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[11px] font-mono text-muted">
          <span className="flex items-center gap-1.5 text-ink-dim/80">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            SSR Ultrarrápido (Next.js 16)
          </span>
          <span className="hidden sm:inline opacity-30">•</span>
          <span className="flex items-center gap-1.5 text-ink-dim/80">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-solid" />
            100 / 100 Google Lighthouse (Sub-segundo)
          </span>
          <span className="hidden sm:inline opacity-30">•</span>
          <span className="flex items-center gap-1.5 text-ink-dim/80">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
            Indexação Semântica Schema &amp; llms.txt (GEO)
          </span>
        </div>
      </div>

      {/* Stage Interativo com Animação de Scroll */}
      <div 
        data-anim="hero-stage"
        className="relative z-10 mt-16 w-full px-2 sm:px-6"
      >
        <HeroStage />
      </div>
    </section>
  );
}
