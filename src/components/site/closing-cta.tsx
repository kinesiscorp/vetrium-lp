import Image from "next/image";
import { CONTACT, whatsappHref } from "@/lib/site/content";
import { IconWhatsapp, PillLink, SplitHeading } from "./primitives";

/** Fecho em tela cheia, de volta ao céu aberto do hero (como na referência). */
export function ClosingCta() {
  return (
    <section id="contato" aria-labelledby="contato-title" className="relative isolate overflow-hidden">
      <Image src="/art/v4/cta.webp" alt="" fill sizes="100vw" className="vds-kenburns -z-10 object-cover" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,var(--color-paper)_0%,rgb(255_255_255/0.55)_28%,rgb(255_255_255/0.2)_60%,var(--color-paper)_100%)]" />

      <div className="mx-auto flex min-h-[44rem] max-w-3xl flex-col items-center justify-start px-5 pb-56 pt-28 text-center">
        <SplitHeading
          id="contato-title"
          lead="Vamos construir"
          it="o seu próximo site?"
          className="vds-display text-[clamp(2.6rem,6vw,5rem)] text-night"
        />
        <p data-rise className="vds-lead mx-auto mt-6 text-night/75">
          Conte o que você precisa. Respondemos com os próximos passos e uma proposta.
        </p>
        <div data-rise style={{ ["--d" as string]: "150ms" }} className="mt-9 flex flex-col items-center gap-3 sm:flex-row">
          <PillLink href="/orcamento">Solicitar orçamento</PillLink>
          <a href={whatsappHref()} target="_blank" rel="noopener noreferrer" className="vds-pill vds-pill-ghost gap-2">
            <IconWhatsapp className="h-4 w-4 text-cobalt" />
            <span>WhatsApp</span>
          </a>
        </div>
        <p data-rise style={{ ["--d" as string]: "250ms" }} className="mt-6 text-sm text-slate">
          ou escreva para{" "}
          <a href={`mailto:${CONTACT.email}`} className="vds-link text-night">
            {CONTACT.email}
          </a>
        </p>
      </div>
    </section>
  );
}
