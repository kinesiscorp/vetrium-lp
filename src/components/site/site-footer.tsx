import Link from "next/link";
import { CONTACT, NAV, whatsappHref } from "@/lib/site/content";
import { Logo } from "./primitives";

export function SiteFooter() {
  return (
    <footer className="vds-dark border-t border-white/10 bg-obsidian px-4 pt-16 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Logo tone="light" size={30} tagline />
            <p className="mt-6 max-w-[40ch] leading-relaxed text-marble">
              Estúdio de estratégia, design e tecnologia. Criamos landing pages
              e sites que unem arte autoral, clareza e performance.
            </p>
          </div>

          <nav aria-label="Rodapé" className="lg:col-span-3">
            <p className="vds-label text-[0.62rem] text-marble">Navegação</p>
            <ul className="mt-5 space-y-3">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="text-ivory/85 transition-colors hover:text-rose">
                    {n.label}
                  </a>
                </li>
              ))}
              <li>
                <Link href="/orcamento" className="text-ivory/85 transition-colors hover:text-rose">
                  Solicitar orçamento
                </Link>
              </li>
            </ul>
          </nav>

          <div className="lg:col-span-4">
            <p className="vds-label text-[0.62rem] text-marble">Contato</p>
            <ul className="mt-5 space-y-3">
              <li>
                <a href={`mailto:${CONTACT.email}`} className="text-ivory/85 hover:text-rose">
                  {CONTACT.email}
                </a>
              </li>
              <li>
                <a
                  href={whatsappHref()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ivory/85 hover:text-rose"
                >
                  WhatsApp {CONTACT.whatsappDisplay}
                </a>
              </li>
              <li className="text-marble">{CONTACT.area}</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 py-7 text-sm text-marble sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Vetrium. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <Link href="/privacidade" className="hover:text-ivory">
              Política de privacidade
            </Link>
            <Link href="/creditos" className="hover:text-ivory">
              Créditos de imagem
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
