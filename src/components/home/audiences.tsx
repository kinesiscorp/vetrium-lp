import Image from "next/image";
import { IconArrowRight } from "./icons";

/**
 * Dois recortes de público. Herdado da versão anterior da página — continua
 * cumprindo o papel de qualificar quem chega antes do processo.
 *
 * Os painéis agora usam o corte de faceta no canto superior direito e a
 * imagem sangra até a borda inferior: a peça é uma lâmina do cristal, não
 * um card com foto dentro de outra moldura.
 */
const CARDS = [
  {
    tag: "Para quem está começando",
    title: "Nasça com cara de marca grande",
    body: "Identidade, site e presença digital desde o primeiro dia — sem parecer amador enquanto você cresce.",
    img: "/portfolio/cycleit.png",
    alt: "Telas do app Cycleit, projeto desenvolvido pela Vetrium",
  },
  {
    tag: "Para quem já tem tração",
    title: "Pare de perder venda no site",
    body: "Diagnosticamos onde sua página trava a conversão e reconstruímos o caminho até o clique que importa.",
    img: "/portfolio/achievo-app.png",
    alt: "Telas do app Achievo, projeto desenvolvido pela Vetrium",
  },
];

export function Audiences() {
  return (
    <section className="relative px-6 py-16">
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-2">
        {CARDS.map((card, i) => (
          <div
            key={card.tag}
            data-anim="fade"
            data-delay={i * 120}
            className="js-anim h-full"
          >
            <a
              href="#contato"
              className="crystal-panel facet-cut hover-lift group flex h-full flex-col overflow-hidden pt-9"
            >
              <div className="px-9">
                <p className="t-label text-accent-solid">{card.tag}</p>
                <h3 className="t-h3 mt-5 max-w-[16ch] text-[clamp(1.5rem,2.8vw,2.1rem)] font-semibold">
                  {card.title}
                </h3>
                <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-muted">
                  {card.body}
                </p>
                <span className="mt-7 inline-flex items-center gap-2 text-[13px] font-semibold text-ink-dim transition-colors group-hover:text-ink">
                  Falar sobre isso
                  <IconArrowRight className="h-3.5 w-3.5 text-accent-solid transition-transform duration-300 group-hover:translate-x-0.5" />
                </span>
              </div>

              <div className="relative mt-9 overflow-hidden border-t border-line">
                <Image
                  src={card.img}
                  alt={card.alt}
                  width={1200}
                  height={800}
                  className="h-56 w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                />
                {/* Véu que amarra a imagem à superfície escura da marca */}
                <span
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-bg/70 to-transparent"
                />
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
