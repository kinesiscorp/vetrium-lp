import { IconClock, IconMail, IconPin } from "./icons";
import { VetriumLockup } from "./vetrium-mark";

const NAV_LINKS = [
  ["Serviços", "#servicos"],
  ["Projetos", "#projetos"],
  ["Processo", "#processo"],
  ["Investimento", "#investimento"],
  ["Sobre", "#sobre"],
] as const;

const SERVICE_LINKS = [
  "Estratégia & Posicionamento",
  "Branding & Identidade",
  "Web Design & Desenvolvimento",
  "Produtos Digitais & UX/UI",
];

// Ainda não temos os perfis. Ficam listados como texto, não como link:
// href="#" rola a página pro topo e o leitor de tela anuncia "link" pra algo
// que não leva a lugar nenhum. Quando as URLs existirem, viram <a> de novo.
const SOCIALS = ["Instagram", "LinkedIn", "Behance", "Dribbble"];

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-line px-6 pt-20">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1.2fr_1.2fr]">
          {/* Marca */}
          <div>
            <VetriumLockup markSize={38} />
            <p className="mt-7 max-w-[30ch] text-sm leading-relaxed text-muted">
              Estúdio de design e tecnologia criando experiências digitais que
              impulsionam negócios.
            </p>
            <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted">
              {SOCIALS.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>

          {/* Navegação */}
          <nav aria-label="Navegação do rodapé">
            <p className="t-label text-ink-dim">Navegação</p>
            <ul className="mt-5 space-y-3 text-sm text-muted">
              {NAV_LINKS.map(([label, href]) => (
                <li key={href}>
                  <a href={href} className="transition-colors hover:text-ink">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Serviços */}
          <div>
            <p className="t-label text-ink-dim">Serviços</p>
            <ul className="mt-5 space-y-3 text-sm text-muted">
              {SERVICE_LINKS.map((s) => (
                <li key={s}>
                  <a
                    href="#servicos"
                    className="transition-colors hover:text-ink"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <p className="t-label text-ink-dim">Contato</p>
            <ul className="mt-5 space-y-3 text-sm text-muted">
              <li>
                <a
                  href="mailto:contato@vetrium.com.br"
                  className="flex items-center gap-2.5 transition-colors hover:text-ink"
                >
                  <IconMail className="h-4 w-4 flex-none text-accent-solid" />
                  contato@vetrium.com.br
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <IconPin className="h-4 w-4 flex-none text-accent-solid" />
                Atendimento em todo o Brasil
              </li>
              <li className="flex items-center gap-2.5">
                <IconClock className="h-4 w-4 flex-none text-accent-solid" />
                Resposta em até 24h
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-line py-6 text-xs text-muted">
          <p>{`© ${new Date().getFullYear()} Vetrium. Todos os direitos reservados.`}</p>
          <p className="t-label text-[10px]">Digital Design &amp; Development</p>
        </div>
      </div>

      {/* Wordmark gigante sangrando no rodapé — assinatura da página, agora
          no lettering do brandkit (caixa alta, tracking largo). */}
      <div className="relative">
        <div
          aria-hidden
          className="halo absolute left-1/2 top-1/2 h-[26rem] w-[70rem] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-80"
        />
        <span
          aria-hidden
          className="font-display relative block select-none text-center text-[15vw] font-bold leading-[0.9] tracking-[0.06em] text-ink opacity-[0.18]"
        >
          VETRIUM
        </span>
      </div>
    </footer>
  );
}
