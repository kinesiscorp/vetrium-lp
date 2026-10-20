import Image from "next/image";
import { whatsappHref } from "@/lib/site/content";
import { HeroBust } from "./hero-bust";
import { ButtonLink, IconWhatsapp } from "./primitives";

/**
 * Primeira dobra. A mensagem comercial vem antes da arte: quem não "lê" o
 * busto entende o negócio pelo texto. O busto 3D entra depois do texto,
 * sobre um pôster estático do mesmo enquadramento (sem salto de layout e
 * sem tela vazia se o WebGL não carregar).
 */
export function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="vds-dark vds-night relative isolate overflow-hidden"
    >
      <div className="mx-auto grid max-w-7xl px-4 pt-28 sm:px-8 lg:min-h-[100svh] lg:grid-cols-12 lg:pt-0">
        <div className="relative z-10 flex flex-col justify-center lg:col-span-6 lg:pb-16 lg:pt-28">
          <h1
            id="hero-title"
            className="vds-display vds-enter text-[clamp(2.6rem,6vw,5.4rem)]"
          >
            Seu site não precisa apenas impressionar.{" "}
            <span className="vds-em text-rose">Precisa gerar oportunidades.</span>
          </h1>

          <p
            className="vds-lead vds-enter mt-7 max-w-[44ch] text-marble"
            style={{ ["--enter-delay" as string]: "120ms" }}
          >
            Criamos landing pages que explicam seu negócio em segundos, aparecem
            nas buscas e levam o visitante até o contato.
          </p>

          <div
            className="vds-enter mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
            style={{ ["--enter-delay" as string]: "220ms" }}
          >
            <ButtonLink href="/orcamento" variant="light">
              Solicitar orçamento
            </ButtonLink>
            <ButtonLink href="#projetos" variant="outline" arrow={false}>
              Ver projetos
            </ButtonLink>
          </div>

          <a
            href={whatsappHref()}
            target="_blank"
            rel="noopener noreferrer"
            className="vds-link vds-enter mt-7 self-start text-sm text-marble hover:text-ivory"
            style={{ ["--enter-delay" as string]: "300ms" }}
          >
            <IconWhatsapp className="h-4 w-4 text-rose" />
            Prefere conversar? Chame no WhatsApp
          </a>
        </div>

        {/* Arte: pôster + cena 3D no mesmo quadro */}
        <div className="relative -mx-4 mt-6 aspect-[4/5] sm:mx-auto sm:w-[30rem] lg:absolute lg:inset-y-0 lg:right-0 lg:mx-0 lg:mt-0 lg:aspect-auto lg:w-[56%] [&:has(.bust-ready)>img]:opacity-0">
          <Image
            src="/art/bust-poster.webp"
            alt="Busto clássico de mármore iluminado em violeta e rosa, com uma bola de chiclete rosa saindo dos lábios"
            fill
            priority
            sizes="(min-width: 1024px) 56vw, 100vw"
            className="object-cover object-center transition-opacity duration-700"
          />
          <HeroBust className="absolute inset-0" />
        </div>
      </div>
    </section>
  );
}
