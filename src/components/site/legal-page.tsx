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
      <SiteHeader />
      <main id="conteudo" className="flex-1 px-4 pb-24 pt-32 sm:px-8 lg:pt-40">
        <article className="mx-auto max-w-3xl">
          <h1 className="vds-display text-[clamp(2.4rem,5vw,3.6rem)]">{title}</h1>
          {updated && <p className="mt-6 text-sm text-fg-2">Última atualização: {updated}</p>}
          <div className="mt-12 space-y-6 leading-relaxed text-fg-2 [&_a]:text-fg [&_a]:underline [&_a]:underline-offset-4 [&_h2]:tracking-[-0.03em] [&_h2]:mt-12 [&_h2]:text-2xl [&_h2]:text-fg [&_li]:ml-5 [&_li]:list-disc [&_strong]:text-fg [&_ul]:space-y-2">
            {children}
          </div>
        </article>
      </main>
      <SiteFooter />
    </div>
  );
}
