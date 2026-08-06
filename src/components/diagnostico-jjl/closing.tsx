import { META, WHATSAPP_NUMBER } from "@/lib/diagnostico-jjl/content";
import { Reveal } from "./reveal";

const MESSAGE = `Olá! Vi o raio-x que a Vetrium fez do site da ${META.client} e quero conversar sobre os próximos passos.`;

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
          <p className="serif-accent mb-4 text-[15px] text-accent-solid">Próximo passo</p>
          <h2 className="text-balance text-[clamp(25px,3.4vw,36px)] leading-[1.1] font-semibold tracking-tight">
            Isso é o que dá pra ver de fora. O resto a gente decide numa conversa.
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="mt-7 flex flex-wrap items-center gap-3">
          <a
            href={waHref}
            target="_blank"
            rel="noreferrer noopener"
            className="bg-metal inline-flex items-center gap-3 px-6 py-3.5 text-[15.5px] font-semibold text-accent-ink transition-shadow hover:shadow-[0_14px_40px_-14px_rgba(124,108,255,0.8)]"
          >
            Chamar a Vetrium no WhatsApp <span aria-hidden>→</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
