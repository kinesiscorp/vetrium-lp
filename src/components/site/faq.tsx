import { FAQ, whatsappHref } from "@/lib/site/content";
import { IconPlus, SplitHeading } from "./primitives";

/**
 * Dúvidas em fileiras arredondadas de vidro (como na referência).
 * <details>/<summary> nativos: teclado e leitor de tela sem JavaScript.
 */
export function Faq() {
  return (
    <section id="duvidas" aria-labelledby="duvidas-title" className="relative px-5 pb-28 sm:pb-36">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-24 -z-10 h-[30rem] w-[60rem] max-w-full -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,var(--halo),transparent_65%)] blur-2xl"
      />
      <div className="mx-auto max-w-2xl">
        <div className="text-center">
          <SplitHeading id="duvidas-title" lead="Antes de começar," it="algumas respostas" className="vds-h2" />
          <p data-rise className="vds-lead mx-auto mt-5">
            Não achou a sua?{" "}
            <a
              href={whatsappHref("Olá! Tenho uma dúvida sobre os serviços da Vetrium.")}
              target="_blank"
              rel="noopener noreferrer"
              className="vds-link text-fg"
            >
              Pergunte no WhatsApp
            </a>
            .
          </p>
        </div>

        <div className="mt-12 space-y-2.5">
          {FAQ.map((f, i) => (
            <details
              key={f.q}
              data-rise
              style={{ ["--d" as string]: `${i * 60}ms` }}
              className="vds-faq vds-glass rounded-[1.1rem]"
            >
              <summary className="flex items-center justify-between gap-6 px-5 py-4 text-left">
                <h3 className="text-[1rem] font-medium tracking-[-0.015em] text-fg">{f.q}</h3>
                <span className="vds-faq-icon grid h-8 w-8 flex-none place-items-center rounded-full bg-fg/6 text-fg">
                  <IconPlus className="h-4 w-4" />
                </span>
              </summary>
              <p className="max-w-[60ch] px-5 pb-5 leading-relaxed text-fg-2">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
