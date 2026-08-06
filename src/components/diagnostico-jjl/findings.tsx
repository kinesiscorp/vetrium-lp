import Image from "next/image";
import { FINDINGS, MINOR_NOTES, type FindingCategory } from "@/lib/diagnostico-jjl/content";
import { Reveal } from "./reveal";
import { Section, SectionHead } from "./section";

const CATEGORY_LABEL: Record<FindingCategory, string> = {
  visual: "Visual",
  ux: "UX",
  estrategia: "Estratégia",
};

const CATEGORIES: FindingCategory[] = ["visual", "ux", "estrategia"];

export function Findings() {
  return (
    <Section id="achados" tint>
      <SectionHead
        num="02"
        title="Onde o site perde"
        lead="Cada achado é um problema observável, com print de evidência, não achismo."
        maxWidth="62ch"
      />

      <div className="flex flex-col gap-14 sm:gap-16">
        {CATEGORIES.map((cat) => {
          const items = FINDINGS.filter((f) => f.category === cat);
          if (items.length === 0) return null;
          return (
            <div key={cat}>
              <Reveal className="mb-6 flex items-center gap-3">
                <span className="serif-accent text-[14px] text-accent-solid">
                  {CATEGORY_LABEL[cat]}
                </span>
                <span className="h-px flex-1 bg-line" aria-hidden />
              </Reveal>

              <div className="flex flex-col gap-8">
                {items.map((f, i) => (
                  <Reveal key={f.n} delay={i * 0.06} className="border border-line bg-sheet">
                    {f.img && (
                      <div className="relative aspect-[1280/800] w-full overflow-hidden border-b border-line">
                        <Image
                          src={f.img}
                          alt={`Evidência, ${f.title}`}
                          fill
                          sizes="(min-width: 920px) 860px, 100vw"
                          className="object-cover object-top"
                        />
                      </div>
                    )}
                    <div className="grid grid-cols-[auto_1fr] items-start gap-4 p-6 sm:p-7">
                      <span className="serif-accent min-w-6 text-lg text-accent-solid">
                        {f.n}
                      </span>
                      <div>
                        <h3 className="mb-1.5 text-[16px] font-semibold tracking-tight">
                          {f.title}
                        </h3>
                        <p className="text-[14.5px] leading-relaxed text-ink-dim">{f.body}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <Reveal delay={0.1} className="mt-14">
        <p className="mb-3 text-[11px] tracking-[0.16em] text-muted uppercase">
          Também notamos
        </p>
        <ul className="grid gap-2.5 sm:grid-cols-2">
          {MINOR_NOTES.map((note) => (
            <li key={note} className="flex gap-2.5 text-[13.5px] text-ink-dim">
              <span className="flex-none text-faint" aria-hidden>
                ·
              </span>
              {note}
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
