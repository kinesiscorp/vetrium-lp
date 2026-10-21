import { CONTACT, whatsappHref } from "@/lib/site/content";
import { IconWhatsapp, PillLink, SplitHeading } from "./primitives";

/** Fecho: padrão de pontos com halo violeta, ecoando a grade do hero. */
export function ClosingCta() {
  return (
    <section id="contato" aria-labelledby="contato-title" className="relative isolate overflow-hidden">
      <div aria-hidden className="vds-pattern vds-dots -z-10" />
      <div
        aria-hidden
        className="vds-halo vds-glow pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full"
      />

      <div className="mx-auto flex min-h-[40rem] max-w-3xl flex-col items-center justify-center px-5 py-28 text-center">
        <SplitHeading
          id="contato-title"
          lead="Vamos construir"
          it="o seu próximo site?"
          className="vds-display text-[clamp(2.6rem,6vw,5rem)] text-fg [&_.vds-it]:text-accent"
        />
        <p data-rise className="vds-lead mx-auto mt-6">
          Conte o que você precisa. Respondemos com os próximos passos e uma proposta.
        </p>
        <div data-rise style={{ ["--d" as string]: "150ms" }} className="mt-9 flex flex-col items-center gap-3 sm:flex-row">
          <PillLink href="/orcamento">Solicitar orçamento</PillLink>
          <a href={whatsappHref()} target="_blank" rel="noopener noreferrer" className="vds-pill vds-pill-ghost gap-2">
            <IconWhatsapp className="h-4 w-4 text-accent" />
            <span>WhatsApp</span>
          </a>
        </div>
        <p data-rise style={{ ["--d" as string]: "250ms" }} className="mt-6 text-sm text-fg-3">
          ou escreva para{" "}
          <a href={`mailto:${CONTACT.email}`} className="vds-link text-fg">
            {CONTACT.email}
          </a>
        </p>
      </div>
    </section>
  );
}
