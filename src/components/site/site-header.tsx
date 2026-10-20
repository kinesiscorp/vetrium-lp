"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { NAV } from "@/lib/site/content";
import { IconArrowUpRight, IconClose, IconMenu, Logo } from "./primitives";

/**
 * Navegação em pílula de vidro flutuante (linguagem da referência). O vidro
 * fica mais denso depois de rolar, para o texto continuar legível sobre
 * qualquer seção. No mobile vira logo + botão de menu.
 */
export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const panelId = useId();
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = NAV.map((n) => document.getElementById(n.href.split("#")[1] ?? "")).filter(
      (el): el is HTMLElement => Boolean(el),
    );
    if (!sections.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(e.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setOpen(false);
      toggleRef.current?.focus();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-3 z-50 px-3 sm:top-4">
      <a
        href="#conteudo"
        className="sr-only rounded-full bg-night px-4 py-2 text-paper focus:not-sr-only focus:absolute focus:left-4 focus:top-2"
      >
        Pular para o conteúdo
      </a>

      <div
        className={
          "vds-glass mx-auto max-w-[56rem] rounded-[1.4rem] transition-[background-color] duration-500 " +
          (scrolled || open ? "bg-paper-2/80" : "")
        }
      >
        <div className="flex h-14 items-center justify-between gap-4 pl-4 pr-2">
          <Link href="/" aria-label="Vetrium — página inicial" className="rounded-full py-1">
            <Logo />
          </Link>

          <nav aria-label="Principal" className="hidden md:block">
            <ul className="flex items-center gap-1">
              {NAV.map((item) => {
                const isActive = active === item.href.split("#")[1];
                return (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      aria-current={isActive ? "location" : undefined}
                      className={
                        "rounded-full px-3.5 py-2 text-[0.88rem] tracking-[-0.01em] transition-colors " +
                        (isActive ? "bg-night/6 text-night" : "text-slate hover:text-night")
                      }
                    >
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-1">
            <Link
              href="/orcamento"
              className="vds-pill vds-pill-light hidden min-h-0 py-1 pl-4 pr-1 text-[0.86rem] sm:inline-flex"
            >
              <span>Solicitar orçamento</span>
              <span className="vds-pill-dot h-8 w-8" aria-hidden>
                <IconArrowUpRight className="h-3.5 w-3.5" />
              </span>
            </Link>
            <button
              ref={toggleRef}
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls={panelId}
              aria-label={open ? "Fechar menu" : "Abrir menu"}
              className="grid h-11 w-11 place-items-center rounded-full text-night md:hidden"
            >
              {open ? <IconClose className="h-5 w-5" /> : <IconMenu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {open && (
          <div id={panelId} className="px-4 pb-5 md:hidden">
            <nav aria-label="Menu">
              <ul className="border-t border-night/10 pt-2">
                {NAV.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="block py-3 text-[1.6rem] tracking-[-0.04em] text-night"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <Link
              href="/orcamento"
              onClick={() => setOpen(false)}
              className="vds-pill vds-pill-light mt-4 w-full justify-between"
            >
              <span>Solicitar orçamento</span>
              <span className="vds-pill-dot" aria-hidden>
                <IconArrowUpRight className="h-4 w-4" />
              </span>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
