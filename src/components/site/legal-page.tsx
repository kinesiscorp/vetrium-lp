import type { ReactNode } from "react";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";

/** Moldura das páginas de texto (privacidade, créditos). */
export function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated?: string;
  children: ReactNode;
}) {
  return (
    <div className="vds flex flex-1 flex-col">
      <SiteHeader solid />
      <main id="conteudo" className="vds-paper flex-1 px-4 pb-24 pt-32 sm:px-8 lg:pt-40">
        <article className="mx-auto max-w-3xl">
          <h1 className="vds-display text-[clamp(2.4rem,5vw,3.6rem)]">{title}</h1>
          {updated && <p className="mt-6 text-sm text-stone-ink">Última atualização: {updated}</p>}
          <div className="mt-12 space-y-6 leading-relaxed text-stone-ink [&_a]:text-obsidian [&_a]:underline [&_a]:underline-offset-4 [&_h2]:font-editorial [&_h2]:mt-12 [&_h2]:text-2xl [&_h2]:text-obsidian [&_li]:ml-5 [&_li]:list-disc [&_strong]:text-obsidian [&_ul]:space-y-2">
            {children}
          </div>
        </article>
      </main>
      <SiteFooter />
    </div>
  );
}
