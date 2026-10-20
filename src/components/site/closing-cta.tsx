import Image from "next/image";
import { CONTACT, whatsappHref } from "@/lib/site/content";
import { ButtonLink, IconWhatsapp } from "./primitives";

/** Fecho: o mesmo busto do hero, agora de perfil — a página termina onde começou. */
export function ClosingCta() {
  return (
    <section
      id="contato"
      aria-labelledby="contato-title"
      className="vds-dark vds-night relative isolate overflow-hidden px-4 pt-24 sm:px-8 lg:pt-0"
    >
      <div className="mx-auto grid max-w-7xl lg:min-h-[40rem] lg:grid-cols-12 lg:gap-10">
        <div className="relative z-10 flex flex-col justify-center pb-12 lg:col-span-7 lg:py-32">
          <h2 id="contato-title" data-reveal className="vds-display text-[clamp(2.4rem,5vw,4.4rem)]">
            Vamos construir o seu <span className="vds-em text-rose">próximo site?</span>
          </h2>
          <p data-reveal className="vds-lead mt-6 max-w-[40ch] text-marble">
            Conte o que você precisa. Respondemos com os próximos passos e uma
            proposta.
          </p>
          <div data-reveal className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <ButtonLink href="/orcamento" variant="light">
              Solicitar orçamento
            </ButtonLink>
            <ButtonLink href={whatsappHref()} external variant="outline" arrow={false}>
              <span className="inline-flex items-center gap-2">
                <IconWhatsapp className="h-4 w-4" /> WhatsApp
              </span>
            </ButtonLink>
          </div>
          <p data-reveal className="mt-8 text-sm text-marble">
            ou{" "}
            <a href={`mailto:${CONTACT.email}`} className="vds-link text-ivory">
              {CONTACT.email}
            </a>
          </p>
        </div>

        <div className="relative -mx-4 aspect-square sm:mx-auto sm:w-[28rem] lg:col-span-5 lg:mx-0 lg:aspect-auto lg:w-auto">
          <Image
            src="/art/bust-profile.webp"
            alt="O mesmo busto de mármore visto de perfil, iluminado em rosa"
            fill
            loading="lazy"
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}
