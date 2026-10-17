"use client";

import { useEffect, useId, useRef, useState } from "react";
import { ThemeToggle } from "@/app/theme-toggle";
import { IconClose, IconMenu } from "./icons";
import { VetriumLockup } from "./vetrium-mark";

const LINKS = [
  ["O Novo Jogo (GEO)", "#sobre-geo"],
  ["Serviços", "#servicos"],
  ["Cases", "#projetos"],
  ["Processo", "#processo"],
  ["Valores", "#investimento"],
] as const;

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

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
        {/* Navbar Chassis com Bezel Industrial */}
        <nav className="industrial-panel flex items-center gap-1.5 py-2 pl-3.5 pr-2.5 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.9)] backdrop-blur-2xl">
          <a
            href="#top"
            aria-label="Vetrium — início"
            className="flex items-center rounded-xl px-1.5 py-0.5"
          >
            <VetriumLockup
              markSize={26}
              tagline={false}
              detailsClassName="hidden lg:flex"
            />
          </a>

          {/* Indicador de Status de Hardware (LED) */}
          <div className="hidden sm:flex items-center gap-2 border-l border-line px-3 ml-2 text-[10px] font-mono text-muted">
            <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="tech-label text-[9.5px]">SYS.ONLINE</span>
          </div>

          <div className="mx-2 hidden items-center gap-1 md:flex">
            {LINKS.map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="rounded-lg px-3 py-1.5 text-[12.5px] font-medium text-ink-dim transition-colors hover:bg-line hover:text-ink"
              >
                {label}
              </a>
            ))}
          </div>

          <ThemeToggle />

          <a
            href="https://wa.me/5511941889077?text=Olá!%20Gostaria%20de%20um%20diagnóstico%20gratuito%20para%20minha%20empresa%20com%20a%20Vetrium."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-tactile ml-1 inline-flex items-center gap-2 rounded-lg px-3.5 py-2 text-[11.5px] font-semibold text-ink"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent-solid" />
            Iniciar Projeto
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
            className="industrial-panel absolute inset-x-0 top-[calc(100%+0.5rem)] rounded-xl p-2.5 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.9)] backdrop-blur-2xl md:hidden"
          >
            <div className="flex items-center justify-between border-b border-line px-3 py-2 text-[10px] font-mono text-muted">
              <span>NAVEGAÇÃO DO SISTEMA</span>
              <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
            </div>
            {LINKS.map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3.5 py-2.5 text-[14px] font-medium text-ink-dim transition-colors hover:bg-line hover:text-ink"
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
