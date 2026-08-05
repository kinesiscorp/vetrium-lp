import { DEMO_COPY, DEMO_URL } from "@/lib/proposal-frog/content";
import { Reveal } from "./reveal";
import { Section, SectionHead } from "./section";

export function Demo() {
  return (
    <Section id="demonstracao">
      <SectionHead num="04" title="Já dá pra ver o que mudou" />

      <Reveal>
        <a
          href={DEMO_URL}
          target="_blank"
          rel="noreferrer noopener"
          className="group relative block overflow-hidden border border-line bg-[linear-gradient(150deg,rgba(124,108,255,0.09),rgba(12,12,20,0.9)_52%)] p-7 transition-colors hover:border-accent-solid sm:p-9"
        >
          <p className="max-w-[52ch] text-[clamp(16px,1.9vw,18.5px)] leading-relaxed text-ink-dim">
            {DEMO_COPY.split("verde").map((chunk, i, arr) =>
              i < arr.length - 1 ? (
                <span key={i}>
                  {chunk}
                  <span className="text-frog">verde</span>
                </span>
              ) : (
                chunk
              ),
            )}
          </p>
          <span className="mt-5 inline-flex items-center gap-2.5 border-b border-accent-solid pb-1 text-[15px] transition-[gap] group-hover:gap-4">
            Ver o raio-x do antes e depois <span aria-hidden>→</span>
          </span>
        </a>
      </Reveal>

      <Reveal delay={0.08}>
        <p className="mt-5 text-[13.5px] text-muted">
          É comparação real, com prints do site atual lado a lado com o que já construímos,
          não é maquete. Falta o seu conteúdo pra trocar os exemplos por dados reais: casos de
          aluno, depoimento e os links de checkout.
        </p>
      </Reveal>
    </Section>
  );
}
