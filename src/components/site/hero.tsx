import { getImageProps } from "next/image";
import { whatsappHref } from "@/lib/site/content";
import { IconWhatsapp, PillLink, SplitHeading } from "./primitives";

/**
 * Capim/ramos do primeiro plano (PNGs transparentes) — balançam nos cantos
 * como na referência. Vazio até as artes finais chegarem.
 */
const GRASS: { src: string; side: "left" | "right" }[] = [];

function HeroBackdrop() {
  const common = { alt: "", sizes: "100vw", priority: true } as const;
  const { props: desk } = getImageProps({ ...common, src: "/art/v3/hero.webp", width: 2560, height: 1440 });
  const { props: mob } = getImageProps({ ...common, src: "/art/v3/hero-m.webp", width: 1080, height: 1920 });
  return (
    <picture>
      <source media="(min-width: 768px)" srcSet={desk.srcSet} />
      <source media="(max-width: 767px)" srcSet={mob.srcSet} />
      {/* eslint-disable-next-line jsx-a11y/alt-text -- decorativa: alt vazio vem de common */}
      <img {...mob} className="vds-kenburns absolute inset-0 h-full w-full object-cover object-center" />
    </picture>
  );
}

/**
 * Primeira dobra: ruínas de um templo dórico entre oliveiras, sobre o mar,
 * em luz do dia. Título no céu claro, palavra a palavra; a base da cena se
 * dissolve no mármore da página.
 */
export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative isolate">
      <div className="relative h-[100svh] min-h-[44rem] overflow-hidden">
        <HeroBackdrop />

        {/* Luz: brilho do sol à direita e névoa sobre o mar */}
        <div
          aria-hidden
          className="vds-glow pointer-events-none absolute right-[8%] top-[6%] h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,rgb(255_247_228/0.7),transparent_62%)]"
        />
        <div
          aria-hidden
          className="vds-haze pointer-events-none absolute inset-x-[-10%] top-[38%] h-[22%] bg-[radial-gradient(ellipse_at_center,rgb(244_241_234/0.55),transparent_70%)] blur-2xl"
        />
        {/* Leitura: clareia o céu atrás do título e funde a base no mármore */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgb(244_241_234/0.55)_0%,rgb(244_241_234/0.35)_35%,rgb(244_241_234/0)_58%,rgb(244_241_234/0.2)_80%,var(--color-paper)_100%)]"
        />

        {GRASS.map((g) => (
          // eslint-disable-next-line @next/next/no-img-element -- camada decorativa animada
          <img
            key={g.src}
            src={g.src}
            alt=""
            aria-hidden
            className={
              "vds-sway pointer-events-none absolute bottom-0 h-[55%] w-auto " +
              (g.side === "left" ? "-left-8" : "-right-8 [animation-delay:-3s]")
            }
          />
        ))}

        <div className="relative z-10 mx-auto flex h-full max-w-5xl flex-col items-center px-5 pt-[20vh] text-center">
          <SplitHeading
            as="h1"
            id="hero-title"
            lead="Seu site não precisa apenas impressionar."
            it="Precisa gerar oportunidades."
            delay={150}
            className="vds-display text-[clamp(2.6rem,6.4vw,5.6rem)] text-umber"
          />
          <p
            data-rise
            style={{ ["--d" as string]: "650ms" }}
            className="vds-lead mt-6 text-[1.06rem] text-umber/75"
          >
            Criamos landing pages que explicam seu negócio em segundos, aparecem
            nas buscas e levam o visitante até o contato.
          </p>
          <div
            data-rise
            style={{ ["--d" as string]: "800ms" }}
            className="mt-9 flex flex-col items-center gap-3 sm:flex-row"
          >
            <PillLink href="/orcamento">Solicitar orçamento</PillLink>
            <a
              href={whatsappHref()}
              target="_blank"
              rel="noopener noreferrer"
              className="vds-pill vds-pill-ghost gap-2"
            >
              <IconWhatsapp className="h-4 w-4 text-olive" />
              <span>Conversar no WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
