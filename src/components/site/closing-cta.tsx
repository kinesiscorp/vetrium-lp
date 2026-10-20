import { CONTACT, whatsappHref } from "@/lib/site/content";
import { ButtonLink, IconMail, IconSparkle, IconWhatsapp } from "./primitives";
import { Sculpture } from "./sculpture";

export function ClosingCta() {
  return (
    <section
      id="contato"
      aria-labelledby="contato-title"
      className="vds-dark vds-night relative isolate overflow-hidden px-4 pt-24 sm:px-8 lg:pt-32"
    >
      <div className="mx-auto grid max-w-7xl lg:grid-cols-12 lg:gap-10">
        <div className="relative z-10 pb-16 lg:col-span-7 lg:pb-32">
          <p data-reveal className="vds-label text-marble">
            <span className="text-rose">08</span> — Próximo passo
          </p>
          <h2
            id="contato-title"
            data-reveal
            className="vds-display mt-6 text-[clamp(2.2rem,4.8vw,4rem)]"
          >
            Vamos transformar sua próxima ideia em uma experiência digital que{" "}
            <span className="vds-em text-rose">trabalha pelo seu negócio.</span>
          </h2>
          <p data-reveal className="vds-lead mt-7 text-marble">
            Conte um pouco sobre seu projeto. Vamos entender seus objetivos e
            identificar o melhor caminho.
          </p>
          <div data-reveal className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <ButtonLink href="/orcamento" variant="light">
              Solicitar uma proposta
            </ButtonLink>
            <ButtonLink href={whatsappHref()} external variant="outline" arrow={false}>
              <span className="inline-flex items-center gap-2">
                <IconWhatsapp className="h-4 w-4" /> WhatsApp
              </span>
            </ButtonLink>
          </div>
          <p data-reveal className="mt-8 flex items-center gap-2 text-sm text-marble">
            <IconMail className="h-4 w-4 text-rose" />
            ou escreva para{" "}
            <a href={`mailto:${CONTACT.email}`} className="vds-link text-ivory">
              {CONTACT.email}
            </a>
          </p>
        </div>

        <div className="relative mx-auto w-[min(78vw,22rem)] self-end lg:col-span-5 lg:w-full lg:max-w-[28rem]">
          <Sculpture
            art="heracles"
            sizes="(min-width: 1024px) 28rem, 78vw"
            sphere={{ x: 86, y: 30, size: 22, tone: "violet", float: true }}
          />
          <IconSparkle aria-hidden className="absolute left-0 top-[20%] h-4 w-4 text-ivory/70" />
        </div>
      </div>
    </section>
  );
}
