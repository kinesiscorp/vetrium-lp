import { PROJECTS } from "@/app/projects-data";

/**
 * Barra de confiança.
 *
 * A referência mostra logos de clientes — não temos os arquivos e não dá pra
 * inventar marca de terceiro, então usamos os nomes reais do portfólio como
 * wordmark tipográfico + um monograma genérico (a inicial dentro de um
 * quadrado), que sugere a marca sem falsificar nenhum logo.
 */
const CLIENTS = PROJECTS.slice(0, 6);

export function TrustedBy() {
  return (
    <section className="relative border-y border-line bg-bg-elevated/40 px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-9 lg:flex-row lg:items-center lg:gap-14">
        <p
          data-anim="fade"
          className="js-anim t-label max-w-[24ch] flex-none text-muted lg:max-w-[15rem] lg:border-r lg:border-line lg:pr-12"
        >
          Empresas que confiam no nosso trabalho
        </p>

        <ul className="grid flex-1 grid-cols-2 items-center gap-x-6 gap-y-7 sm:grid-cols-3">
          {CLIENTS.map((client, i) => (
            <li key={client.slug} data-anim="fade" data-delay={i * 70} className="js-anim">
              <span className="group flex items-center gap-2.5">
                <span
                  aria-hidden
                  className="grid h-8 w-8 flex-none place-items-center rounded-[6px] border border-line text-[13px] font-semibold text-accent-solid transition-colors group-hover:border-accent-solid"
                >
                  {client.name.charAt(0)}
                </span>
                <span className="text-[14px] font-medium tracking-tight text-ink-dim transition-colors group-hover:text-ink">
                  {client.name}
                </span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
