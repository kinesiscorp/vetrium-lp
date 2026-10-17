import { IconCode, IconPen, IconStrategy } from "./icons";
import { SectionHeading } from "./section-heading";

/**
 * Seção "O Novo Jogo da Busca" (SEO tradicional vs GEO / Otimização para IA)
 */
const PILLARS = [
  {
    title: "A Busca Antiga (O que 99% entregam)",
    Icon: IconPen,
    badge: "WordPress & Construtores Lentos",
    body: "Sites inflados de plugins, carregamento lento no celular e código invisível para os motores de inteligência artificial.",
    metrics: "Lighthouse ~50 · 0% indexável para IA",
    negative: true,
  },
  {
    title: "Arquitetura Nativamente GEO",
    Icon: IconStrategy,
    badge: "O Padrão Vetrium",
    body: "Páginas com dados semânticos estruturados (JSON-LD Schema) e arquivo llms.txt na raiz: o ChatGPT, Perplexity e Gemini encontram e citam sua empresa diretamente como resposta oficial.",
    highlight: true,
    metrics: "100% legível para IA · Citabilidade máxima",
    tools: ["Schema.org", "llms.txt", "JSON-LD", "Semantic HTML"],
  },
  {
    title: "Engenharia de Alta Conversão",
    Icon: IconCode,
    badge: "Next.js & Performance Pura",
    body: "Do código ao ar sem intermediários. Tempo de carregamento sub-segundo para zero atrito entre o anúncio e o clique no seu WhatsApp.",
    metrics: "Core Web Vitals 99+ · Menos de 1s de carga",
    tools: ["Next.js 16", "Tailwind CSS", "TypeScript"],
  },
];

export function Approach() {
  return (
    <section id="sobre-geo" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <div data-anim="fade" className="js-anim">
          <SectionHeading
            title={
              <>
                <span className="block text-xs font-semibold uppercase tracking-widest text-accent-solid mb-3">
                  O NOVO JOGO DA BUSCA
                </span>
                Seu cliente não pesquisa mais <span className="emph">só no Google</span>.{" "}
                Ele pergunta para a <span className="emph">Inteligência Artificial</span>.
              </>
            }
            lead="Não construímos apenas páginas bonitas. Desenvolvemos ecossistemas web com engenharia GEO (Generative Engine Optimization) para transformar sua empresa na resposta oficial recomendada pelos modelos generativos."
          />
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {PILLARS.map(({ title, Icon, badge, body, highlight, negative, metrics, tools }, i) => (
            <div
              key={title}
              data-anim="fade"
              data-delay={i * 100}
              className="js-anim h-full"
            >
              <article
                className={
                  "crystal-panel hover-lift group flex h-full flex-col p-8 " +
                  (highlight
                    ? "border-accent-solid/60 bg-bg-elevated/90 shadow-[0_0_30px_-10px_rgba(147,51,234,0.3)] ring-1 ring-accent-solid/30"
                    : negative
                    ? "opacity-75 border-line/60 bg-surface/30"
                    : "")
                }
              >
                <div className="flex items-center justify-between">
                  <span className={"grid h-11 w-11 flex-none place-items-center rounded-[10px] border border-line text-accent-solid transition-colors duration-500 group-hover:border-accent-solid " + (negative ? "text-muted" : "")}>
                    <Icon data-anim="icon-draw" className="icon-anim h-5 w-5" />
                  </span>
                  <span className={"text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full border " + (highlight ? "border-accent-solid/40 bg-accent-solid/10 text-accent-ink dark:text-accent-from" : "border-line text-muted")}>
                    {badge}
                  </span>
                </div>

                <h3 className="t-h3 mt-8 text-[17px]">{title}</h3>
                <p className="mt-3 text-[14px] leading-relaxed text-muted">
                  {body}
                </p>

                <div className="mt-6 border-t border-line pt-4">
                  <p className="text-xs font-medium text-ink-dim">{metrics}</p>
                </div>

                {tools && (
                  <ul className="mt-auto space-y-2.5 border-t border-line pt-6 text-[13.5px] text-muted">
                    {tools.map((tool) => (
                      <li key={tool} className="flex items-center gap-2.5">
                        <span
                          aria-hidden
                          className="h-1 w-1 flex-none rotate-45 bg-accent-solid"
                        />
                        {tool}
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
