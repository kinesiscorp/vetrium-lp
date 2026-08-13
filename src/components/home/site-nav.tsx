"use client";

import { useEffect, useId, useRef, useState } from "react";
import { ThemeToggle } from "@/app/theme-toggle";
import { IconClose, IconMenu } from "./icons";
import { VetriumLockup } from "./vetrium-mark";

/**
 * Barra de navegação flutuante. Só links que existem de fato na página —
 * nada de "Insights" sem blog por trás. O rótulo "Processo" é o mesmo usado
 * no rodapé — ver site-footer.tsx.
 *
 * A pílula virou uma barra de cantos curtos: no sistema novo, superfície é
 * faceta (raio curto) e ação é pílula (raio total) — o contraste entre as
 * duas formas é o que faz o CTA saltar sem precisar de mais cor.
 */
const LINKS = [
  ["Serviços", "#servicos"],
  ["Projetos", "#projetos"],
  ["Processo", "#processo"],
  ["Investimento", "#investimento"],
  ["Sobre", "#sobre"],
] as const;

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  /* Abaixo do md não existe nenhum outro jeito de alcançar Serviços/Projetos/
     Processo/Investimento/Sobre — antes deste menu, só o rodapé linkava pra lá
     no celular. O corte subiu de sm pra md quando "Investimento" entrou na
     lista: com cinco links, a barra não cabia mais em 640px sem quebrar. */
  useEffect(() => {
    if (!open) return;

    function onKeyDown(e: KeyboardEvent) {
      if (e.key !== "Escape") return;
      setOpen(false);
      toggleRef.current?.focus();
    }
    function onPointerDown(e: PointerEvent) {
      const target = e.target as Node;
      if (panelRef.current?.contains(target) || toggleRef.current?.contains(target)) return;
      setOpen(false);
    }

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-5 z-50 flex justify-center px-4">
      <div className="relative">
        <nav className="glass flex items-center gap-1 rounded-2xl py-2 pl-3 pr-2 shadow-[0_18px_40px_-24px_rgba(0,0,0,0.85)]">
          <a
            href="#top"
            aria-label="Vetrium — início"
            className="flex items-center rounded-xl px-1.5 py-0.5"
          >
            <VetriumLockup
              markSize={28}
              tagline={false}
              detailsClassName="hidden lg:flex"
            />
          </a>

          <div className="mx-2 hidden items-center gap-1 md:flex">
            {LINKS.map(([label, href]) => (
              <a
                key={href}
                href={href}
                // bg-line (e não white/10) porque o hover precisa aparecer nos
                // dois temas — branco translúcido some no tema claro.
                className="rounded-lg px-3.5 py-1.5 text-[13px] font-medium text-ink-dim transition-colors hover:bg-line hover:text-ink"
              >
                {label}
              </a>
            ))}
          </div>

          <ThemeToggle />
          <a
            href="#contato"
            className="btn-glow ml-1 rounded-full bg-metal px-4 py-2 text-[13px] font-semibold text-accent-ink"
          >
            Vamos conversar
          </a>
          <button
            ref={toggleRef}
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls={panelId}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            className="ml-1 grid h-9 w-9 flex-none place-items-center rounded-lg text-ink-dim transition-colors hover:bg-line hover:text-ink md:hidden"
          >
            {open ? <IconClose className="h-4.5 w-4.5" /> : <IconMenu className="h-4.5 w-4.5" />}
          </button>
        </nav>

        {open && (
          <div
            ref={panelRef}
            id={panelId}
            className="glass absolute inset-x-0 top-[calc(100%+0.5rem)] rounded-2xl p-2 shadow-[0_18px_40px_-24px_rgba(0,0,0,0.85)] md:hidden"
          >
            {LINKS.map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-3 text-[15px] font-medium text-ink-dim transition-colors hover:bg-line hover:text-ink"
              >
                {label}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
