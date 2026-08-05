import type { SectionId } from "@/lib/proposal-frog/content";
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
      className={`scroll-mt-24 border-t border-line px-6 py-20 sm:px-10 sm:py-28 ${tint ? "bg-sheet-hi/40" : ""} ${className}`}
    >
      <div className="mx-auto max-w-[860px]">{children}</div>
    </section>
  );
}

export function SectionHead({
  num,
  title,
  lead,
  maxWidth = "56ch",
}: {
  num: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  maxWidth?: string;
}) {
  return (
    <Reveal className="mb-10 flex flex-col gap-3 sm:mb-14">
      <span className="serif-accent text-[15px] text-accent-solid">{num}</span>
      <h2 className="text-balance text-[clamp(25px,3.4vw,36px)] leading-[1.1] font-semibold tracking-tight">
        {title}
      </h2>
      {lead && (
        <p className="text-[clamp(16px,1.9vw,18.5px)] leading-relaxed text-ink-dim" style={{ maxWidth }}>
          {lead}
        </p>
      )}
    </Reveal>
  );
}
