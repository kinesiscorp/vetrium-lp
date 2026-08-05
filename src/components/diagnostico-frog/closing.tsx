import { PROPOSAL_URL, WHATSAPP_NUMBER } from "@/lib/diagnostico-frog/content";
import { Reveal } from "./reveal";

const MESSAGE =
  "Fala! Vi o raio-x do redesign do meu site e quero falar sobre os próximos passos.";

export function Closing() {
  const waHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(MESSAGE)}`;

  return (
    <section className="sec relative overflow-hidden border-t border-frog-edge">
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-[-30%] left-1/2 aspect-square w-[min(600px,120%)] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(124,255,0,0.12),transparent_68%)]"
      />
      <div className="wrap relative">
        <Reveal>
          <p className="eyebrow mb-4">
            <span className="slash">{"///"}</span> Em resumo
          </p>
          <h2 className="d h2 max-w-[18ch]">
            Seu site já mudou. Falta fechar com a gente.
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="mt-7 flex flex-wrap items-center gap-3">
          <a
            href={waHref}
            target="_blank"
            rel="noreferrer noopener"
            className="btn btn-pri"
          >
            <span className="lab">Chamar no WhatsApp</span>
            <span className="arw" aria-hidden>
              →
            </span>
          </a>
          <a href={PROPOSAL_URL} className="btn btn-ghost">
            <span className="lab">Ver a proposta comercial</span>
            <span className="arw" aria-hidden>
              →
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
