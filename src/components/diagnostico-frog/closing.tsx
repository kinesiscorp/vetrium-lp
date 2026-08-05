import { PROPOSAL_URL, WHATSAPP_NUMBER } from "@/lib/diagnostico-frog/content";
import { Reveal } from "../proposal-frog/reveal";

const MESSAGE =
  "Olá! Vi o diagnóstico do redesign do site do Esquadrão do Frog e quero conversar sobre os próximos passos.";

export function Closing() {
  const waHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(MESSAGE)}`;

  return (
    <section className="relative overflow-hidden border-t border-line px-6 py-20 sm:px-10 sm:py-28">
      <div
        aria-hidden
        className="halo pointer-events-none absolute bottom-[-40%] left-1/2 aspect-square w-[min(720px,140%)] -translate-x-1/2"
        style={{ background: "radial-gradient(circle, rgba(124,108,255,0.2), transparent 66%)" }}
      />
      <div className="relative mx-auto max-w-[920px]">
        <Reveal>
          <p className="serif-accent mb-4 text-[15px] text-accent-solid">Em resumo</p>
          <h2 className="text-balance text-[clamp(25px,3.4vw,36px)] leading-[1.1] font-semibold tracking-tight">
            A base do redesign já está construída — o que falta é conteúdo real do
            Frog, não mais decisão de design.
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="mt-7 flex flex-wrap items-center gap-3">
          <a
            href={PROPOSAL_URL}
            className="bg-metal inline-flex items-center gap-3 px-6 py-3.5 text-[15.5px] font-semibold text-accent-ink transition-shadow hover:shadow-[0_14px_40px_-14px_rgba(124,108,255,0.8)]"
          >
            Ver a proposta comercial <span aria-hidden>→</span>
          </a>
          <a
            href={waHref}
            target="_blank"
            rel="noreferrer noopener"
            className="border border-line-strong px-6 py-3.5 text-[15.5px] text-ink-dim transition-colors hover:border-accent-solid hover:text-ink"
          >
            Chamar no WhatsApp
          </a>
        </Reveal>

        <div
          aria-hidden
          className="mt-10 text-[clamp(48px,13vw,140px)] leading-[0.85] font-semibold tracking-tight text-transparent select-none"
          style={{ WebkitTextStroke: "1px rgba(255,255,255,0.07)" }}
        >
          vetrium
        </div>
      </div>
    </section>
  );
}
