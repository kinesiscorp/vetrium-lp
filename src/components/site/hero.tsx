import { whatsappHref } from "@/lib/site/content";
import { IconWhatsapp, PillLink, SplitHeading } from "./primitives";

/**
 * Primeira dobra sem imagem: grade técnica que desce devagar, com halo
 * violeta da marca atrás do título. Tudo vem da paleta e troca com o tema.
 */
export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative isolate overflow-hidden">
      <div aria-hidden className="vds-pattern vds-grid vds-grid-drift -z-10" />
      <div
        aria-hidden
        className="vds-halo vds-glow pointer-events-none absolute left-1/2 top-[8%] -z-10 h-[44rem] w-[44rem] -translate-x-1/2 rounded-full"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-b from-transparent to-canvas"
      />

      <div className="mx-auto flex min-h-[100svh] max-w-5xl flex-col items-center justify-center px-5 pb-20 pt-32 text-center">
        <SplitHeading
          as="h1"
          id="hero-title"
          lead="Seu site não precisa apenas impressionar."
          it="Precisa gerar oportunidades."
          delay={150}
          className="vds-display text-[clamp(2.6rem,6.4vw,5.6rem)] text-fg [&_.vds-it]:text-accent"
        />
        <p data-rise style={{ ["--d" as string]: "650ms" }} className="vds-lead mt-6 text-[1.06rem]">
          Criamos landing pages que explicam seu negócio em segundos, aparecem
          nas buscas e levam o visitante até o contato.
        </p>
        <div
          data-rise
          style={{ ["--d" as string]: "800ms" }}
          className="mt-9 flex flex-col items-center gap-3 sm:flex-row"
        >
          <PillLink href="/orcamento">Solicitar orçamento</PillLink>
          <a href={whatsappHref()} target="_blank" rel="noopener noreferrer" className="vds-pill vds-pill-ghost gap-2">
            <IconWhatsapp className="h-4 w-4 text-accent" />
            <span>Conversar no WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
