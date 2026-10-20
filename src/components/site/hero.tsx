import { getImageProps } from "next/image";
import { whatsappHref } from "@/lib/site/content";
import { IconWhatsapp, PillLink, SplitHeading } from "./primitives";
import { StoryCard } from "./story-card";

/**
 * Capim do primeiro plano (PNGs transparentes) — balançam nos cantos como na
 * referência. Vazio até as artes finais chegarem; a camada só aparece quando
 * houver arquivo aqui.
 */
const GRASS: { src: string; side: "left" | "right" }[] = [];

function HeroBackdrop() {
  const common = { alt: "", sizes: "100vw", priority: true } as const;
  const { props: desk } = getImageProps({ ...common, src: "/art/v2/hero.webp", width: 2560, height: 1440 });
  const { props: mob } = getImageProps({ ...common, src: "/art/v2/hero-m.webp", width: 1080, height: 1920 });
  return (
    <picture>
      <source media="(min-width: 768px)" srcSet={desk.srcSet} />
      <source media="(max-width: 767px)" srcSet={mob.srcSet} />
      {/* eslint-disable-next-line jsx-a11y/alt-text -- decorativa: alt vem vazio de common */}
      <img {...mob} className="vds-kenburns absolute inset-0 h-full w-full object-cover object-center" />
    </picture>
  );
}

/**
 * Primeira dobra: ruínas de mármore sobre o mar ao entardecer, em tela
 * cheia. Título centralizado no céu, palavra a palavra; o card de stories
 * com projetos reais sobe da base da cena, como na referência.
 */
export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative isolate">
      <div className="relative h-[100svh] min-h-[46rem] overflow-hidden">
        <HeroBackdrop />

        {/* Atmosfera: brilho do sol e névoa respirando */}
        <div
          aria-hidden
          className="vds-glow pointer-events-none absolute left-1/2 top-[30%] h-[42rem] w-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgb(255_196_120/0.35),transparent_62%)] mix-blend-screen"
        />
        <div
          aria-hidden
          className="vds-haze pointer-events-none absolute inset-x-[-10%] bottom-[18%] h-[40%] bg-[radial-gradient(ellipse_at_center,rgb(214_176_130/0.28),transparent_70%)] blur-2xl"
        />
        {/* Leitura: escurece topo e base, mantém o centro luminoso */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgb(18_13_8/0.55)_0%,rgb(18_13_8/0.1)_30%,rgb(18_13_8/0.15)_60%,rgb(18_13_8/0.95)_100%)]"
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

        <div className="relative z-10 mx-auto flex h-full max-w-5xl flex-col items-center px-5 pt-[19vh] text-center sm:pt-[20vh]">
          <SplitHeading
            as="h1"
            id="hero-title"
            lead="Seu site não precisa apenas impressionar."
            it="Precisa gerar oportunidades."
            delay={150}
            className="vds-display text-[clamp(2.6rem,6.4vw,5.6rem)] text-marble [text-shadow:0_2px_30px_rgb(18_13_8/0.35)]"
          />
          <p
            data-rise
            style={{ ["--d" as string]: "650ms" }}
            className="vds-lead mt-6 text-[1.06rem] text-marble/80"
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
              <IconWhatsapp className="h-4 w-4 text-gold" />
              <span>Conversar no WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Card de stories sobe da base do hero para a próxima seção */}
      <div
        data-rise
        style={{ ["--d" as string]: "1000ms" }}
        className="relative z-20 -mt-[9.5rem] flex justify-center px-5 sm:-mt-[11rem]"
      >
        <StoryCard />
      </div>
    </section>
  );
}
