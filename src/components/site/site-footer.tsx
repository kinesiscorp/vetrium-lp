import Link from "next/link";
import { CONTACT, NAV, whatsappHref } from "@/lib/site/content";
import { Logo } from "./primitives";

export function SiteFooter() {
  return (
    <footer className="px-5 pb-8 pt-4">
      <div className="mx-auto max-w-6xl">
        <div className="vds-glass grid gap-10 rounded-[1.6rem] p-8 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Logo size={24} />
            <p className="mt-4 max-w-[34ch] leading-relaxed text-slate">
              Estúdio de estratégia, design e tecnologia. Landing pages que
              explicam, aparecem nas buscas e geram contato.
            </p>
          </div>
          <nav aria-label="Rodapé">
            <ul className="space-y-2.5">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="text-night/85 transition-colors hover:text-cobalt">
                    {n.label}
                  </a>
                </li>
              ))}
              <li>
                <Link href="/orcamento" className="text-night/85 transition-colors hover:text-cobalt">
                  Solicitar orçamento
                </Link>
              </li>
            </ul>
          </nav>
          <ul className="space-y-2.5">
            <li>
              <a href={`mailto:${CONTACT.email}`} className="text-night/85 hover:text-cobalt">
                {CONTACT.email}
              </a>
            </li>
            <li>
              <a href={whatsappHref()} target="_blank" rel="noopener noreferrer" className="text-night/85 hover:text-cobalt">
                WhatsApp {CONTACT.whatsappDisplay}
              </a>
            </li>
            <li className="text-slate">{CONTACT.area}</li>
          </ul>
        </div>
        <div className="mt-6 flex flex-col gap-3 px-2 text-sm text-slate sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} Vetrium</p>
          <div className="flex gap-6">
            <Link href="/privacidade" className="hover:text-night">Política de privacidade</Link>
            <Link href="/creditos" className="hover:text-night">Créditos de imagem</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
