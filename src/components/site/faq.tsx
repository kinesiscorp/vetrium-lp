import { FAQ, whatsappHref } from "@/lib/site/content";
import { IconPlus, SectionHeader } from "./primitives";

/**
 * FAQ com <details>/<summary> nativos: teclado, leitor de tela e estado
 * aberto/fechado funcionam sem JavaScript. As mesmas perguntas alimentam o
 * JSON-LD FAQPage da home.
 */
export function Faq() {
  return (
    <section id="duvidas" aria-labelledby="duvidas-title" className="vds-paper px-4 py-24 sm:px-8 lg:py-36">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <SectionHeader
            index="07"
            eyebrow="Dúvidas frequentes"
            title={<span id="duvidas-title">Perguntas que todo cliente faz.</span>}
          />
          <p data-reveal className="mt-6 text-stone-ink">
            Não encontrou a sua?{" "}
            <a
              href={whatsappHref("Olá! Tenho uma dúvida sobre os serviços da Vetrium.")}
              target="_blank"
              rel="noopener noreferrer"
              className="vds-link text-obsidian"
            >
              Pergunte no WhatsApp
            </a>
            .
          </p>
        </div>

        <div className="border-t vds-rule lg:col-span-8">
          {FAQ.map((f) => (
            <details key={f.q} className="vds-faq group border-b vds-rule">
              <summary className="flex items-start justify-between gap-6 py-6 text-left">
                <h3 className="font-editorial text-[1.35rem] leading-snug sm:text-[1.5rem]">{f.q}</h3>
                <IconPlus className="vds-faq-icon mt-1.5 h-5 w-5 flex-none text-rose-ink" />
              </summary>
              <p className="max-w-[68ch] pb-7 pr-10 leading-relaxed text-stone-ink">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
