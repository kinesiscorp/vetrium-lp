import { META } from "@/lib/proposal-jjl/content";
import { Reveal } from "./reveal";

export function Hero() {
  return (
    <section id="capa" className="relative flex min-h-svh flex-col justify-center overflow-hidden px-6 pt-24 pb-20 sm:px-10">
      <div
        aria-hidden
        className="halo pointer-events-none absolute top-[-30%] left-1/2 aspect-square w-[min(760px,150%)] -translate-x-1/2"
      />

      <div className="relative mx-auto w-full max-w-[860px]">
        <Reveal>
          <p className="mb-5 flex items-center gap-3 text-[11.5px] tracking-[0.2em] text-muted uppercase">
            <span className="h-px w-6 bg-line-strong" aria-hidden />
            Proposta comercial
          </p>
          <h1 className="text-balance text-[clamp(34px,5.8vw,58px)] leading-[1.02] font-semibold tracking-tight">
            Redesign do site
            <br />
            <span className="serif-accent text-metal">JJL Serviços</span>
          </h1>
          <p className="mt-5 max-w-[46ch] text-[clamp(16px,1.9vw,18.5px)] leading-relaxed text-ink-dim">
            Uma página que sustenta o peso da carteira de clientes que vocês já têm, em vez
            de escondê-la atrás de foto de banco de imagens.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-8 flex flex-wrap gap-3">
          <a
            href="#diagnostico"
            className="bg-metal px-6 py-3 text-[14.5px] font-semibold text-accent-ink transition-shadow hover:shadow-[0_14px_40px_-14px_rgba(124,108,255,0.8)]"
          >
            Ver o diagnóstico →
          </a>
          <a
            href="#investimento"
            className="border border-line-strong px-6 py-3 text-[14.5px] text-ink-dim transition-colors hover:border-accent-solid hover:text-ink"
          >
            Ir direto pro investimento
          </a>
        </Reveal>

        <Reveal delay={0.2}>
          <dl className="mt-10 grid grid-cols-2 gap-px border border-line bg-line sm:grid-cols-4">
            {[
              { dt: "Cliente", dd: META.client },
              { dt: "Site atual", dd: META.site },
              { dt: "Data", dd: META.date },
              { dt: "Validade", dd: META.validity },
            ].map((m) => (
              <div key={m.dt} className="bg-sheet p-4">
                <dt className="mb-1.5 text-[10.5px] tracking-[0.16em] text-muted uppercase">{m.dt}</dt>
                <dd className="tnum text-[14.5px]">{m.dd}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
