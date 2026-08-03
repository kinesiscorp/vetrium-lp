import { ThemeToggle } from "./theme-toggle";
import { Reveal } from "./reveal";
import { ProjectsSection } from "./projects-section";

const SERVICES = [
  {
    n: "01",
    title: "Redesign",
    body: "Seu site já existe, mas não converte ou já não representa o que você construiu. A gente refaz com estratégia, não só com um visual novo.",
    icon: (
      <path d="M21 12a9 9 0 1 1-3-6.7M21 4v5h-5" />
    ),
  },
  {
    n: "02",
    title: "Branding",
    body: "Nome, identidade visual, tom de voz. A base pra tudo que vem depois — do cartão de visita ao produto.",
    icon: (
      <>
        <circle cx="13.5" cy="6.5" r=".5" />
        <circle cx="17.5" cy="10.5" r=".5" />
        <circle cx="8.5" cy="7.5" r=".5" />
        <circle cx="6.5" cy="12.5" r=".5" />
        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
      </>
    ),
  },
  {
    n: "03",
    title: "Landing pages & sites",
    body: "Páginas focadas em um objetivo: vender, captar lead ou apresentar um produto. Rápidas, claras, sem enfeite que atrapalha.",
    icon: (
      <>
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M3 9h18M7 4v0" />
      </>
    ),
  },
  {
    n: "04",
    title: "Wireframes & produtos",
    body: "Da estrutura de tela ao produto completo — apps e plataformas desenhados antes de escrever a primeira linha de código.",
    icon: (
      <>
        <rect x="3" y="3" width="7" height="9" rx="1" />
        <rect x="14" y="3" width="7" height="5" rx="1" />
        <rect x="14" y="12" width="7" height="9" rx="1" />
        <rect x="3" y="16" width="7" height="5" rx="1" />
      </>
    ),
  },
];

const STEPS = [
  {
    n: "01",
    title: "Diagnóstico",
    body: "Entendemos o que existe hoje, o que não está funcionando e por quê — antes de propor qualquer mudança.",
  },
  {
    n: "02",
    title: "Direção",
    body: "Definimos a estratégia visual e de conteúdo com base no diagnóstico, não em gosto pessoal.",
  },
  {
    n: "03",
    title: "Execução",
    body: "Design e desenvolvimento com o mesmo time do início ao fim, documentado em cada etapa.",
  },
];

const STACK = [
  "Figma",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "React",
  "Vercel",
  "Design Systems",
  "UI/UX",
];

const STATS = [
  { n: "6+", label: "produtos digitais entregues" },
  { n: "3", label: "etapas em todo projeto" },
  { n: "1", label: "time do início ao fim" },
];

export default function Home() {
  return (
    <div className="flex flex-col flex-1 bg-bg text-ink">
      <header className="fixed top-0 inset-x-0 z-50 border-b border-line bg-bg/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="text-lg font-extrabold tracking-tight text-metal">
            Vetrium
          </a>
          <nav className="hidden gap-8 text-sm font-medium text-muted sm:flex">
            <a href="#servicos" className="hover:text-ink">
              Serviços
            </a>
            <a href="#projetos" className="hover:text-ink">
              Projetos
            </a>
            <a href="#processo" className="hover:text-ink">
              Como trabalhamos
            </a>
            <a href="#contato" className="hover:text-ink">
              Contato
            </a>
          </nav>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <a
              href="#contato"
              className="rounded-full bg-metal px-5 py-2 text-sm font-semibold text-accent-ink transition-opacity hover:opacity-90"
            >
              Começar um projeto
            </a>
          </div>
        </div>
      </header>

      <main id="top" className="flex-1">
        {/* Hero */}
        <section className="relative isolate overflow-hidden px-6 pt-40 pb-32">
          <div className="ore-glow pointer-events-none absolute -top-32 right-[-6rem] h-[32rem] w-[32rem] rounded-full sm:right-8" />
          <div
            className="ore-glow pointer-events-none absolute bottom-[-8rem] left-[-8rem] h-[24rem] w-[24rem] rounded-full opacity-60"
            style={{ animationDelay: "-8s" }}
          />
          <div className="relative mx-auto max-w-6xl">
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-line px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-metal">
              Design &amp; Technology
            </p>
            <h1 className="max-w-3xl text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Sites e produtos com{" "}
              <span className="text-metal">acabamento raro</span> e
              estratégia por trás.
            </h1>
            <p className="mt-8 max-w-xl text-lg text-muted">
              Redesign, branding, landing pages e produtos digitais para
              negócios que já existem e querem crescer — com diagnóstico
              antes de qualquer decisão visual.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#contato"
                className="rounded-full bg-metal px-6 py-3 text-sm font-semibold text-accent-ink transition-opacity hover:opacity-90"
              >
                Diagnosticar meu projeto
              </a>
              <a
                href="#projetos"
                className="rounded-full border border-line px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-accent-solid"
              >
                Ver projetos
              </a>
            </div>
            <dl className="mt-20 grid max-w-xl grid-cols-3 gap-8 border-t border-line pt-8">
              {STATS.map((s) => (
                <div key={s.label}>
                  <dt className="text-3xl font-extrabold text-metal">{s.n}</dt>
                  <dd className="mt-1 text-sm text-muted">{s.label}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Stack marquee */}
        <div className="overflow-hidden border-y border-line bg-bg-elevated py-5">
          <div className="flex w-max gap-12 marquee-track">
            {[...STACK, ...STACK].map((tool, i) => (
              <span
                key={`${tool}-${i}`}
                className="whitespace-nowrap text-sm font-semibold uppercase tracking-widest text-muted"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Serviços */}
        <section id="servicos" className="px-6 py-28">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <div className="mb-16 flex items-end justify-between gap-6">
                <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
                  Serviços<span className="text-metal">.</span>
                </h2>
                <span className="pb-1 text-sm font-medium text-muted">
                  ({SERVICES.length})
                </span>
              </div>
            </Reveal>
            <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
              {SERVICES.map((s, i) => (
                <Reveal key={s.n} delay={i * 80}>
                  <div className="h-full bg-bg-elevated p-8">
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-accent-solid"
                    >
                      {s.icon}
                    </svg>
                    <h3 className="mt-5 text-xl font-bold tracking-tight">
                      {s.title}
                    </h3>
                    <p className="mt-3 text-base leading-relaxed text-muted">
                      {s.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Projetos */}
        <section id="projetos" className="bg-bg-elevated px-6 py-28">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <div className="mb-4 flex items-end justify-between gap-6">
                <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
                  Projetos<span className="text-metal">.</span>
                </h2>
              </div>
              <p className="mb-12 max-w-xl text-muted">
                Um recorte do trabalho do time da Vetrium em produtos
                digitais reais — de app a landing page.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <ProjectsSection />
            </Reveal>
          </div>
        </section>

        {/* Como trabalhamos */}
        <section id="processo" className="px-6 py-28">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
                Como trabalhamos<span className="text-metal">.</span>
              </h2>
            </Reveal>
            <div className="relative mt-16 grid gap-12 sm:grid-cols-3">
              <div
                aria-hidden
                className="absolute top-5 hidden h-px w-full bg-line sm:block"
              />
              {STEPS.map((s, i) => (
                <Reveal key={s.n} delay={i * 100}>
                  <div className="relative">
                    <span className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-metal text-sm font-bold text-accent-ink">
                      {s.n}
                    </span>
                    <h3 className="mt-5 text-xl font-bold tracking-tight">
                      {s.title}
                    </h3>
                    <p className="mt-3 text-base leading-relaxed text-muted">
                      {s.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA final */}
        <section id="contato" className="bg-bg-elevated px-6 py-28">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <div className="relative isolate overflow-hidden rounded-3xl bg-bg-elevated-2 px-8 py-16 text-center sm:px-16">
                <div className="ore-glow pointer-events-none absolute -top-20 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full" />
                <h2 className="relative mx-auto max-w-2xl text-3xl font-extrabold tracking-tight sm:text-4xl">
                  Tem um site ou produto que não está entregando o que deveria?
                </h2>
                <p className="relative mx-auto mt-6 max-w-lg text-base text-muted">
                  Manda uma mensagem e a gente te diz, sem compromisso, o que
                  daria pra melhorar primeiro.
                </p>
                <a
                  href="mailto:contato@vetrium.com.br"
                  className="relative mt-10 inline-block rounded-full bg-metal px-8 py-3 text-sm font-semibold text-accent-ink transition-opacity hover:opacity-90"
                >
                  Falar com a Vetrium
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="border-t border-line px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <span className="text-lg font-extrabold tracking-tight text-metal">
                Vetrium
              </span>
              <p className="mt-3 max-w-[22ch] text-sm text-muted">
                Design & Technology.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wide text-muted">
                Navegação
              </h4>
              <ul className="mt-4 space-y-2 text-sm">
                <li><a href="#servicos" className="hover:text-metal">Serviços</a></li>
                <li><a href="#projetos" className="hover:text-metal">Projetos</a></li>
                <li><a href="#processo" className="hover:text-metal">Como trabalhamos</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wide text-muted">
                Contato
              </h4>
              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <a href="mailto:contato@vetrium.com.br" className="hover:text-metal">
                    contato@vetrium.com.br
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wide text-muted">
                Redes
              </h4>
              <ul className="mt-4 space-y-2 text-sm">
                <li><a href="#" className="hover:text-metal">Instagram</a></li>
                <li><a href="#" className="hover:text-metal">LinkedIn</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-14 flex flex-col gap-2 border-t border-line pt-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
            <span>© {new Date().getFullYear()} Vetrium. Todos os direitos reservados.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
