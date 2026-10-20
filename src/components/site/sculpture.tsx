import Image from "next/image";

/**
 * Escultura clássica + intervenção contemporânea (esfera translúcida).
 *
 * As imagens são cabeças de mármore em domínio público (CC0, The Met Open
 * Access), recortadas e tratadas no projeto — ver public/art/CREDITS.md.
 * A esfera é CSS puro e se posiciona em % sobre a imagem, então acompanha
 * qualquer tamanho sem asset extra.
 */
const ART = {
  jovem: {
    src: "/art/busto-jovem.webp",
    width: 1121,
    height: 1400,
    alt: "Cabeça grega de mármore de um jovem com uma esfera rosa translúcida saindo dos lábios, como uma bola de chiclete",
  },
  heracles: {
    src: "/art/busto-heracles.webp",
    width: 915,
    height: 1400,
    alt: "Busto romano de mármore de Héracles, de barba e cabelos cacheados, ao lado de uma esfera violeta",
  },
} as const;

type Sphere = {
  /** Centro, em % da largura/altura da imagem */
  x: number;
  y: number;
  /** Diâmetro, em % da largura da imagem */
  size: number;
  tone?: "rose" | "violet";
  float?: boolean;
};

export function Sculpture({
  art,
  sphere,
  orbit = false,
  priority = false,
  sizes,
  className = "",
}: {
  art: keyof typeof ART;
  sphere?: Sphere;
  orbit?: boolean;
  priority?: boolean;
  sizes: string;
  className?: string;
}) {
  const a = ART[art];
  return (
    <figure className={`relative ${className}`}>
      {orbit && (
        <svg
          aria-hidden
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="pointer-events-none absolute -inset-x-[12%] top-[22%] h-[46%] w-[124%] -rotate-[14deg] overflow-visible"
        >
          {/* Metade de trás passa por trás da cabeça: só desenhamos a frente */}
          <path
            d="M2 50 A48 40 0 0 0 98 50"
            fill="none"
            stroke="url(#orbit-grad)"
            strokeWidth="1.25"
            vectorEffect="non-scaling-stroke"
          />
          <defs>
            <linearGradient id="orbit-grad" x1="0" x2="1">
              <stop offset="0" stopColor="#8A5CFF" stopOpacity="0" />
              <stop offset="0.35" stopColor="#8A5CFF" />
              <stop offset="1" stopColor="#FF69AD" />
            </linearGradient>
          </defs>
        </svg>
      )}

      <Image
        src={a.src}
        alt={a.alt}
        width={a.width}
        height={a.height}
        priority={priority}
        sizes={sizes}
        className="relative h-auto w-full select-none"
        draggable={false}
      />

      {sphere && (
        <span
          aria-hidden
          className={
            "absolute block aspect-square -translate-x-1/2 -translate-y-1/2 " +
            (sphere.float ? "vds-float" : "")
          }
          style={{ left: `${sphere.x}%`, top: `${sphere.y}%`, width: `${sphere.size}%` }}
        >
          <span
            className={
              "vds-sphere block h-full w-full " +
              (sphere.tone === "violet" ? "vds-sphere-violet" : "")
            }
          />
        </span>
      )}
    </figure>
  );
}
