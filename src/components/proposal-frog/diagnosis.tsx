import { DEMO_URL, FINDINGS } from "@/lib/proposal-frog/content";
import { Reveal } from "./reveal";
import { Section, SectionHead } from "./section";

export function Diagnosis() {
  return (
    <Section id="diagnostico">
      <SectionHead
        num="01"
        title="O que encontramos"
        lead="Auditamos o site atual, o canal e o Instagram antes de desenhar qualquer coisa. Quatro pontos concentram a maior parte da perda."
        maxWidth="54ch"
      />

      <div className="flex flex-col divide-y divide-line border-y border-line">
        {FINDINGS.map((f, i) => (
          <Reveal key={f.n} delay={i * 0.06} className="bg-sheet px-5 py-5 sm:px-6">
            <div className="grid grid-cols-[auto_1fr] items-start gap-4">
              <span className="serif-accent min-w-6 text-lg text-accent-solid">{f.n}</span>
              <div>
                <h3 className="mb-1.5 text-[17px] font-semibold tracking-tight">{f.title}</h3>
                <p className="text-ink-dim">{f.body}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1} className="mt-7">
        <p className="mb-4 text-[15px] leading-relaxed text-ink-dim">
          Isso é o problema. O que você recebe não é o ajuste desses pontos — é o site
          inteiro reconstruído:
        </p>
        <dl className="grid grid-cols-2 gap-px border border-line bg-line sm:grid-cols-4">
          {[
            { dt: "Seções", dd: "9, construídas do zero" },
            { dt: "Responsivo", dd: "desktop e mobile" },
            { dt: "Status", dd: "funcionando, não é maquete" },
            { dt: "Escopo completo", dd: "12 itens", href: "#escopo" },
          ].map((m) => (
            <div key={m.dt} className="bg-sheet p-4">
              <dt className="mb-1.5 text-[10.5px] tracking-[0.16em] text-muted uppercase">
                {m.dt}
              </dt>
              <dd className="text-[14.5px]">
                {m.href ? (
                  <a
                    href={m.href}
                    className="text-accent-solid underline decoration-accent-solid/40 underline-offset-2 hover:text-ink"
                  >
                    {m.dd} →
                  </a>
                ) : (
                  m.dd
                )}
              </dd>
            </div>
          ))}
        </dl>
      </Reveal>

      <p className="mt-5 text-[13.5px] text-muted">
        Diagnóstico completo com nove achados,{" "}
        <a
          href={DEMO_URL}
          target="_blank"
          rel="noreferrer noopener"
          className="text-accent-solid underline decoration-accent-solid/40 underline-offset-2 hover:text-ink"
        >
          disponível à parte
        </a>
        .
      </p>
    </Section>
  );
}
