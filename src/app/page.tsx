const SERVICES = [
  {
    n: "01",
    title: "Redesign",
    body: "Seu site já existe, mas não converte ou já não representa o que você construiu. A gente refaz com estratégia, não só com um visual novo.",
  },
  {
    n: "02",
    title: "Branding",
    body: "Nome, identidade visual, tom de voz. A base pra tudo que vem depois — do cartão de visita ao produto.",
  },
  {
    n: "03",
    title: "Landing pages & sites",
    body: "Páginas focadas em um objetivo: vender, captar lead ou apresentar um produto. Rápidas, claras, sem enfeite que atrapalha.",
  },
  {
    n: "04",
    title: "Wireframes & produtos",
    body: "Da estrutura de tela ao produto completo — apps e plataformas desenhados antes de escrever a primeira linha de código.",
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

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      <header className="fixed top-0 inset-x-0 z-50 border-b border-line-onDark/20 bg-bg-dark/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="text-lg font-extrabold tracking-tight text-ink-onDark">
            Achievo
          </a>
          <nav className="hidden gap-8 text-sm font-medium text-muted-onDark sm:flex">
            <a href="#servicos" className="hover:text-ink-onDark">
              Serviços
            </a>
            <a href="#processo" className="hover:text-ink-onDark">
              Como trabalhamos
            </a>
            <a href="#contato" className="hover:text-ink-onDark">
              Contato
            </a>
          </nav>
          <a
            href="#contato"
            className="rounded-full bg-accent px-5 py-2 text-sm font-semibold text-accent-ink transition-opacity hover:opacity-90"
          >
            Começar um projeto
          </a>
        </div>
      </header>

      <main id="top" className="flex-1">
        {/* Hero */}
        <section className="bg-bg-dark px-6 pt-40 pb-28 text-ink-onDark">
          <div className="mx-auto max-w-6xl">
            <p className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              Design &amp; produto digital
            </p>
            <h1 className="max-w-3xl text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl">
              Sites e produtos que{" "}
              <span className="text-muted-onDark">parecem bons</span> e
              convertem de verdade.
            </h1>
            <p className="mt-8 max-w-xl text-lg text-muted-onDark">
              Redesign, branding, landing pages e produtos digitais para
              negócios que já existem e querem crescer — com diagnóstico
              antes de qualquer decisão visual.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#contato"
                className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-ink transition-opacity hover:opacity-90"
              >
                Diagnosticar meu projeto
              </a>
              <a
                href="#servicos"
                className="rounded-full border border-line-onDark px-6 py-3 text-sm font-semibold text-ink-onDark transition-colors hover:border-ink-onDark"
              >
                Ver serviços
              </a>
            </div>
          </div>
        </section>

        {/* Serviços */}
        <section id="servicos" className="bg-bg px-6 py-28">
          <div className="mx-auto max-w-6xl">
            <div className="mb-16 flex items-end justify-between gap-6">
              <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
                Serviços<span className="text-accent">.</span>
              </h2>
              <span className="pb-1 text-sm font-medium text-muted">
                ({SERVICES.length})
              </span>
            </div>
            <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
              {SERVICES.map((s) => (
                <div key={s.n} className="bg-bg p-8">
                  <span className="text-sm font-semibold text-muted">
                    {s.n}
                  </span>
                  <h3 className="mt-3 text-xl font-bold tracking-tight">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-muted">
                    {s.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Como trabalhamos */}
        <section id="processo" className="bg-bg-dark px-6 py-28 text-ink-onDark">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
              Como trabalhamos<span className="text-accent">.</span>
            </h2>
            <div className="mt-16 grid gap-12 sm:grid-cols-3">
              {STEPS.map((s) => (
                <div key={s.n}>
                  <span className="text-sm font-semibold text-accent">
                    {s.n}
                  </span>
                  <h3 className="mt-3 text-xl font-bold tracking-tight">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-muted-onDark">
                    {s.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA final */}
        <section id="contato" className="bg-bg px-6 py-28">
          <div className="mx-auto max-w-6xl">
            <div className="rounded-3xl bg-bg-dark px-8 py-16 text-center text-ink-onDark sm:px-16">
              <h2 className="mx-auto max-w-2xl text-3xl font-extrabold tracking-tight sm:text-4xl">
                Tem um site ou produto que não está entregando o que deveria?
              </h2>
              <p className="mx-auto mt-6 max-w-lg text-base text-muted-onDark">
                Manda uma mensagem e a gente te diz, sem compromisso, o que
                daria pra melhorar primeiro.
              </p>
              <a
                href="mailto:contato@achievo.com.br"
                className="mt-10 inline-block rounded-full bg-accent px-8 py-3 text-sm font-semibold text-accent-ink transition-opacity hover:opacity-90"
              >
                Falar com a Achievo
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-line bg-bg px-6 py-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <span className="font-semibold text-ink">Achievo</span>
          <span>© {new Date().getFullYear()} Achievo. Todos os direitos reservados.</span>
        </div>
      </footer>
    </div>
  );
}
