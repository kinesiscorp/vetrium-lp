import { Fragment } from "react";
import { CrystalGlyph } from "./vetrium-mark";

/**
 * Bloco de storytelling da marca — dois momentos encadeados que o scroll
 * engine dirige:
 *   1. a headline se montando com pin + scrub   (data-anim="assemble")
 *   2. o parágrafo acendendo palavra a palavra   (data-anim="words")
 *
 * É a parte "experiência" da página; a mecânica não muda. O que mudou são
 * os glifos entre as palavras: as esferas de wireframe da versão anterior
 * viraram cortes do mesmo cristal do símbolo, então a headline passou a
 * falar a língua da marca em vez de geometria genérica.
 */
const PARAGRAPH =
  "Tudo que sua marca precisa já existe dentro do seu negócio — a Vetrium torna isso visível. Diagnóstico primeiro, design depois: cada decisão visual responde a um problema real de conversão.";

const GLYPH_FRAME =
  "inline-flex h-[0.95em] w-[1.32em] items-center justify-center rounded-[0.28em] border border-line bg-bg-elevated/60";

export function BrandManifesto() {
  return (
    <>
      {/* ---------------- Headline que se monta (pinada) ---------------- */}
      <section
        data-anim="assemble"
        className="js-anim relative flex min-h-[100svh] items-center justify-center overflow-hidden px-6"
      >
        <div
          aria-hidden
          className="halo absolute left-1/2 top-1/2 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-60"
        />
        <h2 className="t-display relative mx-auto max-w-5xl text-center text-[clamp(2.5rem,7.2vw,5.5rem)]">
          <span className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1">
            <span data-piece>Damos</span>
            <span data-piece className={GLYPH_FRAME}>
              <CrystalGlyph
                shape="shard"
                className="h-[0.62em] w-[0.62em] text-accent-solid"
              />
            </span>
            <span data-piece>forma</span>
          </span>
          <span className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1">
            <span data-piece>à</span>
            <span data-piece className={GLYPH_FRAME}>
              <CrystalGlyph
                shape="prism"
                className="h-[0.62em] w-[0.62em] text-accent-solid"
              />
            </span>
            <span data-piece className="emph">
              ambição
            </span>
          </span>
          <span className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1">
            <span data-piece>do seu</span>
            <span data-piece className={GLYPH_FRAME}>
              <CrystalGlyph
                shape="facet"
                className="h-[0.62em] w-[0.62em] text-accent-solid"
              />
            </span>
            <span data-piece>negócio</span>
          </span>
        </h2>
      </section>

      {/* ---------------- Parágrafo palavra a palavra ---------------- */}
      <section className="relative px-6 py-28">
        <p
          data-anim="words"
          className="js-anim mx-auto max-w-4xl text-[clamp(1.35rem,3vw,2.2rem)] font-medium leading-[1.4] tracking-[-0.015em]"
        >
          {/* O espaço mora FORA do span: dentro de um inline-block ele cai no
              fim da linha e o navegador o descarta, colando as palavras. */}
          {PARAGRAPH.split(" ").map((word, i) => (
            <Fragment key={`${word}-${i}`}>
              <span data-word className="inline-block">
                {word}
              </span>{" "}
            </Fragment>
          ))}
        </p>
      </section>
    </>
  );
}
