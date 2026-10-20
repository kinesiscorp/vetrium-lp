import type { ComponentType, SVGProps } from "react";
import { FEATURED_SERVICE, SERVICE_GROUPS, type Service } from "@/lib/site/content";
import {
  ButtonLink,
  IconBars,
  IconCode,
  IconGlobe,
  IconLayers,
  IconTarget,
  IconWire,
  SectionHeader,
} from "./primitives";

const ICONS: Record<string, ComponentType<SVGProps<SVGSVGElement>>> = {
  "landing-pages": IconTarget,
  wireframes: IconWire,
  "ux-ui": IconLayers,
  desenvolvimento: IconCode,
  seo: IconBars,
  geo: IconGlobe,
};

function Details({ s, tone = "dark" }: { s: Service; tone?: "dark" | "light" }) {
  const muted = tone === "light" ? "text-marble" : "text-stone-ink";
  return (
    <dl className="grid gap-x-8 gap-y-5 sm:grid-cols-3">
      {(
        [
          ["Entregamos", s.delivers],
          ["Resolve", s.solves],
          ["Indicado quando", s.when],
        ] as const
      ).map(([k, v]) => (
        <div key={k}>
          <dt className={`vds-label text-[0.62rem] ${muted}`}>{k}</dt>
          <dd className="mt-2 text-[0.95rem] leading-relaxed">{v}</dd>
        </div>
      ))}
    </dl>
  );
}

/**
 * Serviços em composição editorial: o carro-chefe (landing pages) ganha um
 * bloco próprio em obsidiana; os demais aparecem agrupados pela etapa em
 * que entram no projeto — o que ajuda o leigo a entender "quando preciso
 * disso" em vez de ler seis cards iguais.
 */
export function Services() {
  const Featured = ICONS[FEATURED_SERVICE.id];
  return (
    <section id="servicos" aria-labelledby="servicos-title" className="bg-ivory px-4 py-24 sm:px-8 lg:py-36">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          index="02"
          eyebrow="Serviços"
          title={
            <span id="servicos-title">
              Do planejamento ao site no ar, <span className="vds-em">com o mesmo time.</span>
            </span>
          }
          lead="Você pode contratar a landing page completa ou apenas a etapa de que precisa. Veja o que cada serviço entrega e quando ele faz sentido."
        />

        {/* ---------- Carro-chefe ---------- */}
        <article
          data-reveal
          aria-labelledby="svc-landing"
          className="vds-dark relative mt-16 overflow-hidden px-6 py-10 sm:px-10 sm:py-14 lg:grid lg:grid-cols-12 lg:gap-10 lg:px-14"
        >
          <span
            aria-hidden
            className="vds-sphere absolute -right-14 -top-14 h-32 w-32 opacity-80 lg:-bottom-24 lg:-right-20 lg:top-auto lg:h-56 lg:w-56"
          />
          <div className="relative lg:col-span-5">
            <p className="vds-label flex items-center gap-3 text-marble">
              <Featured className="h-5 w-5 text-rose" />
              Serviço principal
            </p>
            <h3 id="svc-landing" className="vds-h2 mt-6">
              {FEATURED_SERVICE.name}
            </h3>
            <p className="vds-lead mt-5 text-marble">{FEATURED_SERVICE.summary}</p>
            <ButtonLink href="/orcamento?servico=landing-page" variant="light" className="mt-9">
              Orçar uma landing page
            </ButtonLink>
          </div>
          <div className="relative mt-10 border-t vds-rule-dark pt-8 lg:col-span-7 lg:mt-0 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
            <Details s={FEATURED_SERVICE} tone="light" />
            <p className="mt-8 text-sm text-marble">
              <span className="text-rose">↳</span> {FEATURED_SERVICE.connects}
            </p>
          </div>
        </article>

        {/* ---------- Demais serviços, por etapa ---------- */}
        <div className="mt-6">
          {SERVICE_GROUPS.map((group) => (
            <div
              key={group.label}
              data-reveal
              className="grid gap-6 border-b vds-rule py-10 lg:grid-cols-12 lg:gap-10 lg:py-12"
            >
              <div className="lg:col-span-3">
                <p className="font-editorial text-2xl">{group.label}</p>
                <p className="vds-label mt-2 text-[0.62rem] text-stone-ink">{group.verb}</p>
              </div>

              <div className="space-y-12 lg:col-span-9">
                {group.services.map((s) => {
                  const Icon = ICONS[s.id];
                  return (
                    <article key={s.id} id={`servico-${s.id}`} aria-labelledby={`svc-${s.id}`}>
                      <div className="flex items-start gap-4">
                        <Icon className="mt-1 h-6 w-6 flex-none text-violet-ink" />
                        <div>
                          <h3 id={`svc-${s.id}`} className="vds-h3 text-xl">
                            {s.name}
                          </h3>
                          <p className="mt-1 text-stone-ink">{s.summary}</p>
                        </div>
                      </div>
                      <div className="mt-6 sm:pl-10">
                        <Details s={s} />
                        <p className="mt-6 text-sm text-stone-ink">
                          <span className="text-rose-ink">↳</span> {s.connects}
                        </p>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
