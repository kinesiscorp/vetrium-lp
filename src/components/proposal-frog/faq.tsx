import { FAQ } from "@/lib/proposal-frog/content";
import { Reveal } from "./reveal";
import { Section, SectionHead } from "./section";

export function Faq() {
  return (
    <Section id="perguntas">
      <SectionHead num="10" title="O que você deve estar pensando" />

      <div className="flex flex-col divide-y divide-line border border-line">
        {FAQ.map((item, i) => (
          <Reveal key={item.q} delay={i * 0.04}>
            <details className="group bg-sheet">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-4.5 text-[15.5px] font-semibold marker:content-none">
                {item.q}
                <span
                  aria-hidden
                  className="flex-none text-accent-solid transition-transform duration-200 group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="px-4.5 pb-4.5 text-[14px] text-ink-dim">{item.a}</p>
            </details>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
