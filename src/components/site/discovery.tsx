import { GEO_POINTS, SEO_POINTS } from "@/lib/site/content";
import { SectionHeader } from "./primitives";

function Node({ children, accent = false }: { children: React.ReactNode; accent?: boolean }) {
  return (
    <div
      className={
        "border px-4 py-3 text-center text-sm font-medium " +
        (accent ? "border-obsidian bg-obsidian text-ivory" : "border-obsidian/30 bg-ivory")
      }
    >
      {children}
    </div>
  );
}

function Arrow({ label }: { label?: string }) {
  return (
    <div aria-hidden className="flex flex-col items-center justify-center px-1 py-2 text-stone-ink lg:flex-row">
      <span className="h-5 w-px bg-obsidian/40 lg:h-px lg:w-6" />
      {label && <span className="vds-label px-2 py-1 text-[0.55rem]">{label}</span>}
      <span className="h-5 w-px bg-obsidian/40 lg:h-px lg:w-6" />
      <span className="-mt-1 text-xs leading-none text-obsidian/60 lg:-ml-1 lg:mt-0">
        <span className="lg:hidden">▼</span>
        <span className="hidden lg:inline">▶</span>
      </span>
    </div>
  );
}

/** Fluxo de descoberta. Puramente conceitual — está rotulado como tal. */
function DiscoveryDiagram() {
  return (
    <figure data-reveal className="mt-16 border vds-rule bg-ivory-deep p-6 sm:p-10">
      <div className="flex flex-col items-stretch lg:flex-row lg:items-center">
        <Node>Seu site bem estruturado</Node>
        <Arrow label="é lido por" />
        <div className="grid flex-1 gap-3">
          <div className="border border-obsidian/30 bg-ivory p-4">
            <p className="vds-label text-[0.6rem] text-violet-ink">SEO</p>
            <p className="mt-1 text-sm">
              <strong className="font-semibold">Buscadores</strong> rastreiam, indexam e
              mostram a página nos resultados.
            </p>
          </div>
          <div className="border border-obsidian/30 bg-ivory p-4">
            <p className="vds-label text-[0.6rem] text-rose-ink">GEO</p>
            <p className="mt-1 text-sm">
              <strong className="font-semibold">Assistentes de IA</strong> interpretam o
              conteúdo e podem usá-lo em respostas.
            </p>
          </div>
        </div>
        <Arrow label="ajuda" />
        <Node>A pessoa certa encontra você</Node>
        <Arrow />
        <Node accent>Contato</Node>
      </div>
      <figcaption className="vds-label mt-6 text-[0.58rem] text-stone-ink">
        Diagrama conceitual — ilustra o caminho, não representa dados medidos.
      </figcaption>
    </figure>
  );
}

function PointList({ title, tag, points, tagClass }: {
  title: string;
  tag: string;
  points: readonly (readonly [string, string])[];
  tagClass: string;
}) {
  return (
    <div data-reveal>
      <p className={`vds-label text-[0.62rem] ${tagClass}`}>{tag}</p>
      <h3 className="font-editorial mt-3 text-[2rem] leading-tight">{title}</h3>
      <dl className="mt-6 border-t vds-rule">
        {points.map(([k, v]) => (
          <div key={k} className="grid gap-1 border-b vds-rule py-4 sm:grid-cols-[13rem_1fr] sm:gap-6">
            <dt className="font-semibold">{k}</dt>
            <dd className="text-stone-ink">{v}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

export function Discovery() {
  return (
    <section id="busca" aria-labelledby="busca-title" className="bg-ivory px-4 py-24 sm:px-8 lg:py-36">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          index="05"
          eyebrow="SEO e GEO"
          title={
            <span id="busca-title">
              Ser encontrado no Google <span className="vds-em">e nas respostas de IA.</span>
            </span>
          }
          lead="Hoje as pessoas pesquisam de duas formas: digitando no Google ou perguntando para assistentes como ChatGPT e Gemini. Um site bem construído facilita os dois caminhos."
        />

        <DiscoveryDiagram />

        <div className="mt-20 grid gap-16 lg:grid-cols-2 lg:gap-14">
          <PointList
            tag="SEO · Search Engine Optimization"
            tagClass="text-violet-ink"
            title="O que cuidamos para buscadores"
            points={SEO_POINTS}
          />
          <PointList
            tag="GEO · Generative Engine Optimization"
            tagClass="text-rose-ink"
            title="O que cuidamos para IAs"
            points={GEO_POINTS}
          />
        </div>

        <aside
          data-reveal
          aria-label="Limites do SEO e do GEO"
          className="mt-16 border-l-2 border-violet bg-ivory-deep px-6 py-5 sm:px-8"
        >
          <p className="font-semibold">Uma conversa honesta sobre resultados</p>
          <p className="mt-2 max-w-[80ch] leading-relaxed text-stone-ink">
            SEO e GEO criam condições para seu site ser encontrado, mas não
            garantem posições no Google nem citações por ferramentas de IA. O
            resultado também depende da concorrência, do conteúdo publicado ao
            longo do tempo, da autoridade do seu negócio e de mudanças nesses
            sistemas. Por isso não prometemos números — entregamos uma base
            técnica bem feita.
          </p>
        </aside>
      </div>
    </section>
  );
}
