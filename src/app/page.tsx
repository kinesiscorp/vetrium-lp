import Image from "next/image";
import { ThemeToggle } from "./theme-toggle";
import { ScrollEngine } from "./scroll-engine";
import { Starfield } from "./starfield";
import { ProjectsSection } from "./projects-section";
import { Mandala, OrbDiscs, OrbLens, OrbSphere } from "./orbs";

const SERVICES = [
  {
    title: "Redesign",
    body: "Seu site existe, mas não converte. A gente refaz com estratégia — não só com um visual novo.",
  },
  {
    title: "Branding",
    body: "Nome, identidade e tom de voz. A base de tudo que vem depois, do cartão ao produto.",
  },
  {
    title: "Landing pages",
    body: "Páginas com um objetivo só: vender, captar ou apresentar. Rápidas e sem enfeite.",
  },
  {
    title: "Produtos digitais",
    body: "Do wireframe ao app completo — desenhados antes da primeira linha de código.",
  },
];

const STEPS = [
  {
    n: "01",
    title: "Diagnóstico",
    body: "Entendemos o que existe, o que trava e por quê — antes de propor qualquer mudança.",
  },
  {
    n: "02",
    title: "Direção",
    body: "A estratégia visual nasce do diagnóstico, não de gosto pessoal.",
  },
  {
    n: "03",
    title: "Execução",
    body: "Design e desenvolvimento com o mesmo time do início ao fim.",
  },
];

const STACK = [
  "Figma",
  "Next.js",
  "TypeScript",
  "Tailwind",
  "React",
  "Vercel",
  "Design Systems",
  "UI/UX",
];

const PARAGRAPH =
  "Tudo que sua marca precisa já existe dentro do seu negócio — a Vetrium torna isso visível. Diagnóstico primeiro, design depois: cada decisão visual responde a um problema real de conversão.";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-bg text-ink">
      <ScrollEngine />

      {/* ---------------- Nav ---------------- */}
      <header className="fixed inset-x-0 top-5 z-50 flex justify-center px-4">
        <nav className="glass flex items-center gap-1 rounded-full py-2 pl-3 pr-2 shadow-2xl shadow-black/20">
          <a href="#top" aria-label="Vetrium — início" className="px-1.5">
            <Mandala className="h-6 w-6 text-ink" />
          </a>
          <div className="mx-1 hidden items-center gap-1 sm:flex">
            {[
              ["Serviços", "#servicos"],
              ["Projetos", "#projetos"],
              ["Processo", "#processo"],
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="rounded-full px-3.5 py-1.5 text-[13px] font-medium text-ink-dim transition-colors hover:bg-white/10 hover:text-ink"
              >
                {label}
              </a>
            ))}
          </div>
          <ThemeToggle />
          <a
            href="#contato"
            className="ml-1 rounded-full bg-metal px-4 py-2 text-[13px] font-semibold text-accent-ink transition-opacity hover:opacity-90"
          >
            Começar
          </a>
        </nav>
      </header>

      <main id="top" className="flex-1">
        {/* ---------------- Hero ---------------- */}
        <section className="relative isolate min-h-[100svh] overflow-hidden">
          <Starfield />
          <div className="halo absolute -top-40 left-1/2 h-[42rem] w-[42rem] -translate-x-1/2 rounded-full" />

          <div data-anim="hero" className="relative flex min-h-[100svh] flex-col items-center pt-36">
            {/* Blurred ghost of the wordmark, sitting behind the real one */}
            <span
              aria-hidden
              className="wordmark-ghost pointer-events-none absolute top-[15%] select-none whitespace-nowrap text-[19vw] font-semibold leading-none tracking-tighter text-ink"
            >
              vetrium
            </span>

            <p className="relative z-10 text-sm font-medium tracking-tight text-ink-dim">
              Design &amp; Technology
            </p>

            <h1 className="relative z-10 mt-2 select-none text-[15vw] font-semibold leading-[0.9] tracking-tighter">
              vetrium
            </h1>

            {/* Tilted device showing real work. Each transform gets its own
                element — a CSS animation on the same node would override the
                static 3D tilt. */}
            <div
              data-parallax="0.12"
              className="relative z-0 mt-[-7vw] w-[min(54rem,88vw)]"
            >
              <div className="float-soft">
                <div className="[transform:perspective(1600px)_rotateX(15deg)_rotateZ(-2.5deg)]">
                  <div className="gradient-frame overflow-hidden rounded-[1.75rem] shadow-[0_50px_140px_-25px_rgba(90,70,220,0.6)]">
                    <Image
                      src="/portfolio/master-crypto-cover.png"
                      alt="Master Crypto — projeto desenvolvido pela Vetrium"
                      width={1354}
                      height={726}
                      priority
                      className="h-auto w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating waitlist-style card */}
          <div className="glass absolute bottom-8 right-4 z-20 flex items-center gap-5 rounded-2xl px-5 py-4 sm:right-10">
            <div>
              <p className="text-sm font-semibold">Aceitando projetos</p>
              <p className="text-xs text-muted">Diagnóstico sem compromisso</p>
            </div>
            <a
              href="#contato"
              className="rounded-xl bg-ink px-4 py-2.5 text-[13px] font-semibold text-bg transition-opacity hover:opacity-85"
            >
              Falar agora
            </a>
          </div>
        </section>

        {/* ---------------- Mandala ---------------- */}
        <section className="relative flex min-h-[70svh] items-center justify-center overflow-hidden px-6">
          <div className="halo absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-70" />
          <div data-anim="draw" className="js-anim relative">
            <Mandala
              className="h-[min(30rem,72vw)] w-[min(30rem,72vw)] text-ink"
              pathClass="draw-path"
            />
          </div>
        </section>

        {/* ---------------- Assembling headline (pinned) ---------------- */}
        <section
          data-anim="assemble"
          className="js-anim relative flex min-h-[100svh] items-center justify-center overflow-hidden px-6"
        >
          <div className="halo absolute left-1/2 top-1/2 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-60" />
          <h2 className="relative mx-auto max-w-5xl text-center text-[clamp(2.5rem,7.5vw,5.75rem)] font-semibold leading-[1.08] tracking-tighter">
            <span className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1">
              <span data-piece>Damos</span>
              <span
                data-piece
                className="gradient-frame inline-flex h-[0.95em] w-[1.5em] items-center justify-center rounded-[0.42em]"
              >
                <OrbSphere className="h-[0.8em] w-[0.8em] text-ink" />
              </span>
              <span data-piece>forma</span>
            </span>
            <span className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1">
              <span data-piece>à</span>
              <span
                data-piece
                className="gradient-frame inline-flex h-[0.95em] w-[1.5em] items-center justify-center rounded-[0.42em]"
              >
                <OrbDiscs className="h-[0.8em] w-[0.8em] text-ink" />
              </span>
              <span data-piece className="serif-accent">
                ambição
              </span>
            </span>
            <span className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1">
              <span data-piece>do seu</span>
              <span
                data-piece
                className="gradient-frame inline-flex h-[0.95em] w-[1.5em] items-center justify-center rounded-[0.42em]"
              >
                <OrbLens className="h-[0.8em] w-[0.8em] text-ink" />
              </span>
              <span data-piece>negócio</span>
            </span>
          </h2>
        </section>

        {/* ---------------- Word-by-word paragraph ---------------- */}
        <section className="relative px-6 py-32">
          <p
            data-anim="words"
            className="js-anim mx-auto max-w-4xl text-[clamp(1.4rem,3.2vw,2.4rem)] font-medium leading-[1.35] tracking-tight"
          >
            {PARAGRAPH.split(" ").map((word, i) => (
              <span key={`${word}-${i}`} data-word className="inline-block">
                {word}
                {" "}
              </span>
            ))}
          </p>
        </section>

        {/* ---------------- Stack marquee ---------------- */}
        <div className="overflow-hidden border-y border-line py-5">
          <div className="marquee-track flex w-max items-center gap-10">
            {[...STACK, ...STACK, ...STACK].map((tool, i) => (
              <span
                key={`${tool}-${i}`}
                className="flex items-center gap-10 whitespace-nowrap text-[13px] font-medium uppercase tracking-[0.22em] text-muted"
              >
                {tool}
                <span className="text-accent-solid/60">✦</span>
              </span>
            ))}
          </div>
        </div>

        {/* ---------------- Services over ghost word ---------------- */}
        <section
          id="servicos"
          className="relative isolate overflow-hidden px-6 py-32"
        >
          <span
            aria-hidden
            data-parallax="0.3"
            className="pointer-events-none absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap text-[20vw] font-semibold leading-none tracking-tighter text-ink opacity-[0.05]"
          >
            serviços
          </span>

          <div className="mx-auto max-w-6xl">
            <div data-anim="fade" className="js-anim mb-16 max-w-xl">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-accent-solid">
                O que fazemos
              </p>
              <h2 className="text-[clamp(2rem,4.5vw,3.25rem)] font-semibold leading-tight tracking-tighter">
                Quatro frentes,{" "}
                <span className="serif-accent">um time só</span>
              </h2>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {SERVICES.map((s, i) => (
                <div
                  key={s.title}
                  data-anim="fade"
                  data-delay={i * 90}
                  className="js-anim gradient-frame glass rounded-3xl p-8 sm:odd:translate-y-6"
                >
                  <div className="relative z-10">
                    <h3 className="text-xl font-semibold tracking-tight">
                      {s.title}
                    </h3>
                    <p className="mt-3 text-[15px] leading-relaxed text-muted">
                      {s.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- Projects ---------------- */}
        <section id="projetos" className="relative px-6 py-32">
          <div className="mx-auto max-w-6xl">
            <div data-anim="fade" className="js-anim mb-12 max-w-xl">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-accent-solid">
                Portfólio
              </p>
              <h2 className="text-[clamp(2rem,4.5vw,3.25rem)] font-semibold leading-tight tracking-tighter">
                Trabalho que já{" "}
                <span className="serif-accent">está no ar</span>
              </h2>
            </div>
            <div data-anim="fade" className="js-anim">
              <ProjectsSection />
            </div>
          </div>
        </section>

        {/* ---------------- Two audiences ---------------- */}
        <section className="relative px-6 py-20">
          <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-2">
            {[
              {
                tag: "Para quem está começando",
                title: "Nasça com cara de marca grande",
                body: "Identidade, site e presença digital desde o primeiro dia — sem parecer amador enquanto você cresce.",
                img: "/portfolio/cycleit.png",
              },
              {
                tag: "Para quem já tem tração",
                title: "Pare de perder venda no site",
                body: "Diagnosticamos onde sua página trava a conversão e reconstruímos o caminho até o clique que importa.",
                img: "/portfolio/achievo-app.png",
              },
            ].map((card, i) => (
              <div
                key={card.tag}
                data-anim="fade"
                data-delay={i * 120}
                className="js-anim gradient-frame relative overflow-hidden rounded-[2rem] glass p-9"
              >
                <div className="relative z-10">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-solid">
                    {card.tag}
                  </p>
                  <h3 className="mt-5 max-w-[16ch] text-[clamp(1.6rem,3vw,2.3rem)] font-semibold leading-tight tracking-tight">
                    {card.title}
                  </h3>
                  <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-muted">
                    {card.body}
                  </p>
                </div>
                <div className="relative z-0 mt-10 overflow-hidden rounded-2xl border border-line">
                  <Image
                    src={card.img}
                    alt=""
                    width={1200}
                    height={800}
                    className="h-52 w-full object-cover object-top"
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ---------------- Process ---------------- */}
        <section id="processo" className="relative px-6 py-32">
          <div className="mx-auto max-w-6xl">
            <h2
              data-anim="fade"
              className="js-anim max-w-lg text-[clamp(2rem,4.5vw,3.25rem)] font-semibold leading-tight tracking-tighter"
            >
              Como <span className="serif-accent">trabalhamos</span>
            </h2>
            <div className="relative mt-16 grid gap-10 sm:grid-cols-3">
              <div
                aria-hidden
                className="absolute left-0 right-0 top-5 hidden h-px bg-line sm:block"
              />
              {STEPS.map((s, i) => (
                <div
                  key={s.n}
                  data-anim="fade"
                  data-delay={i * 110}
                  className="js-anim relative"
                >
                  <span className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-metal text-[13px] font-bold text-accent-ink">
                    {s.n}
                  </span>
                  <h3 className="mt-5 text-lg font-semibold tracking-tight">
                    {s.title}
                  </h3>
                  <p className="mt-2.5 text-[15px] leading-relaxed text-muted">
                    {s.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- Final CTA ---------------- */}
        <section id="contato" className="relative px-6 pb-32">
          <div
            data-anim="fade"
            className="js-anim gradient-frame relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem]"
          >
            <div className="relative isolate overflow-hidden bg-bg-elevated px-8 py-24 text-center sm:px-16">
              <Starfield density={0.00011} />
              <div className="halo absolute left-1/2 top-0 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/3 rounded-full" />
              <div className="relative z-10">
                <h2 className="mx-auto max-w-3xl text-[clamp(2rem,5vw,3.5rem)] font-semibold leading-[1.08] tracking-tighter">
                  Seu próximo site{" "}
                  <span className="serif-accent">começa aqui</span>
                </h2>
                <p className="mx-auto mt-6 max-w-md text-[15px] leading-relaxed text-muted">
                  Manda uma mensagem e a gente te diz, sem compromisso, o que
                  daria pra melhorar primeiro.
                </p>
                <a
                  href="mailto:contato@vetrium.com.br"
                  className="mt-10 inline-block rounded-full bg-metal px-8 py-3.5 text-sm font-semibold text-accent-ink transition-opacity hover:opacity-90"
                >
                  Falar com a Vetrium
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ---------------- Footer ---------------- */}
      <footer className="relative overflow-hidden border-t border-line px-6 pt-20">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-wrap items-end justify-between gap-10">
            <div>
              <p className="text-sm text-muted">Vamos conversar</p>
              <a
                href="mailto:contato@vetrium.com.br"
                className="mt-2 block text-[clamp(1.5rem,4vw,2.75rem)] font-medium tracking-tight transition-colors hover:text-accent-solid"
              >
                contato@vetrium.com.br
              </a>
            </div>
            <div className="text-right">
              <p className="text-sm font-semibold">Comece um projeto</p>
              <p className="mt-1 text-sm text-muted">
                Resposta em até 24 horas
              </p>
              <a
                href="mailto:contato@vetrium.com.br"
                className="mt-4 inline-block rounded-full bg-ink px-6 py-2.5 text-[13px] font-semibold text-bg transition-opacity hover:opacity-85"
              >
                Enviar briefing
              </a>
            </div>
          </div>

          <div className="mt-14 flex flex-wrap justify-between gap-6 border-b border-line pb-8 text-sm text-muted">
            {["Instagram", "LinkedIn", "Behance", "Dribbble"].map((s) => (
              <a key={s} href="#" className="transition-colors hover:text-ink">
                {s}
              </a>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 py-6 text-xs text-muted">
            <span>© {new Date().getFullYear()} Vetrium. Todos os direitos reservados.</span>
            <span>Design &amp; Technology</span>
          </div>
        </div>

        {/* Giant wordmark bleeding off the bottom */}
        <div className="relative">
          <div className="halo absolute left-1/2 top-1/2 h-[26rem] w-[70rem] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-80" />
          <span
            aria-hidden
            className="relative block select-none text-center text-[19vw] font-semibold leading-[0.78] tracking-tighter text-ink opacity-90"
          >
            vetrium
          </span>
        </div>
      </footer>
    </div>
  );
}
