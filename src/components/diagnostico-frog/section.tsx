import type { SectionId } from "@/lib/diagnostico-frog/content";
import { Reveal } from "./reveal";

export function Section({
  id,
  tint,
  className = "",
  children,
}: {
  id: SectionId;
  tint?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className={`sec scroll-mt-20 border-t border-frog-edge ${tint ? "bg-frog-panel/40" : ""} ${className}`}
    >
      <div className="wrap">{children}</div>
    </section>
  );
}

export function SectionHead({
  tag,
  title,
  lead,
  strat,
  maxWidth = "58ch",
}: {
  tag: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  strat?: boolean;
  maxWidth?: string;
}) {
  return (
    <Reveal className="mb-9 max-w-[64ch] sm:mb-13">
      <p className={`eyebrow mb-4 ${strat ? "eyebrow-strat" : ""}`}>
        <span className="slash">{"///"}</span> {tag}
      </p>
      <h2 className="d h2">{title}</h2>
      {lead && (
        <p className="mt-4 text-lg leading-relaxed text-[#cfd4cb]" style={{ maxWidth }}>
          {lead}
        </p>
      )}
    </Reveal>
  );
}
