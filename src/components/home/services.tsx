import { IconBranding, IconProduct, IconStrategy, IconWeb } from "./icons";
import { SectionHeading } from "./section-heading";

const SERVICES = [
  {
    title: "Estratégia & Posicionamento",
    Icon: IconStrategy,
    items: [
      "Diagnóstico de marca",
      "Pesquisa de mercado",
      "Arquitetura da informação",
      "Definição de objetivos",
    ],
  },
  {
    title: "Branding & Identidade",
    Icon: IconBranding,
    items: ["Naming", "Identidade visual", "Direção de arte", "Brand guidelines"],
  },
  {
    title: "Web Design & Desenvolvimento",
    Icon: IconWeb,
    items: [
      "Sites institucionais",
      "Landing pages",
      "E-commerce",
      "Desenvolvimento web",
    ],
  },
  {
    title: "Produtos Digitais & UX/UI",
    Icon: IconProduct,
    items: ["Aplicativos e SaaS", "Dashboards", "UX Research", "Design Systems"],
  },
];

/**
 * Serviços como índice, não como grid de cards.
 *
 * Quatro cards iguais lado a lado achatavam a leitura: tudo tinha o mesmo
 * peso e o que a Vetrium entrega em cada frente sumia. Em linhas regradas o
 * olho percorre a lista inteira de uma vez, o título fica na medida certa
 * pra ser lido e as entregas ganham espaço — mais próximo de uma tabela de
 * capacidades de estúdio do que de uma vitrine de features.
 */
export function Services() {
  return (
    <section id="servicos" className="relative isolate overflow-hidden px-6 py-28">
      <span
        aria-hidden
        data-parallax="0.3"
        // No tema claro a mesma opacidade pesa mais (tinta escura sobre
        // fundo claro), por isso o valor cai um degrau lá.
        className="font-display pointer-events-none absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap text-[16vw] font-bold leading-none tracking-[0.08em] text-ink opacity-[0.028] dark:opacity-[0.05]"
      >
        SERVIÇOS
      </span>

      <div className="mx-auto max-w-6xl">
        <div data-anim="fade" className="js-anim">
          <SectionHeading
            title={
              <>
                Do posicionamento ao produto final, com o{" "}
                <span className="emph">mesmo time</span>
              </>
            }
            lead="Atuamos em todas as etapas do projeto. Nada de passar a bola pra um fornecedor no meio do caminho — quem diagnostica é quem desenha e quem entrega."
            action={{ label: "Começar um projeto", href: "#contato" }}
          />
        </div>

        <div className="mt-14 border-t border-line">
          {SERVICES.map(({ title, Icon, items }, i) => (
            // Wrapper leva a animação de scroll (GSAP escreve transform inline);
            // o hover mora no filho pra não brigar com ela.
            <div key={title} data-anim="fade" data-delay={i * 80} className="js-anim">
              <article className="group relative grid gap-x-10 gap-y-5 border-b border-line py-8 transition-colors duration-500 hover:bg-bg-elevated/45 lg:grid-cols-[auto_minmax(0,20rem)_1fr] lg:items-center">
                {/* Aresta que acende na linha em foco */}
                <span
                  aria-hidden
                  className="absolute left-0 top-0 h-full w-px origin-top scale-y-0 bg-accent-solid transition-transform duration-500 group-hover:scale-y-100"
                />

                <span className="grid h-11 w-11 flex-none place-items-center rounded-[10px] border border-line text-accent-solid transition-colors duration-500 group-hover:border-accent-solid lg:ml-6">
                  <Icon data-anim="icon-draw" className="icon-pop h-5 w-5" />
                </span>

                <h3 className="t-h3 text-[clamp(1.15rem,2.2vw,1.4rem)]">
                  {title}
                </h3>

                <ul className="flex flex-wrap gap-x-7 gap-y-2.5 text-[14px] text-muted">
                  {items.map((item) => (
                    <li key={item} className="flex items-center gap-2.5">
                      <span
                        aria-hidden
                        className="h-1 w-1 flex-none rotate-45 bg-accent-solid"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
