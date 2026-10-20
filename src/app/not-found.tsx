import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";

export const metadata: Metadata = {
  title: "Página não encontrada",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <div className="vds flex flex-1 flex-col">
      <SiteHeader />
      <main id="conteudo" className="flex flex-1 items-center px-4 py-40 sm:px-8">
        <div className="mx-auto w-full max-w-3xl">
          <p className="font-num text-sm text-slate">
            <span className="text-cobalt">404</span> — Página não encontrada
          </p>
          <h1 className="vds-display mt-6 text-[clamp(2.4rem,5vw,4rem)]">
            Este endereço não existe <span className="vds-it">— ou mudou de lugar.</span>
          </h1>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link href="/" className="vds-pill vds-pill-light pr-5">Voltar ao início</Link>
            <Link href="/orcamento" className="vds-pill vds-pill-ghost">Solicitar orçamento</Link>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
