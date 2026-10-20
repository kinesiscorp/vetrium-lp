"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { NAV } from "@/lib/site/content";
import { IconClose, IconMenu, Logo } from "./primitives";

/**
 * Header fixo, sempre em obsidiana: começa transparente sobre o hero escuro
 * e ganha fundo sólido ao rolar. Nas páginas internas (fundo marfim) já
 * nasce sólido (`solid`).
 */
export function SiteHeader({ solid = false }: { solid?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const panelId = useId();
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Seção atual: a que ocupa a faixa central da tela.
  useEffect(() => {
    const ids = NAV.map((n) => n.href.split("#")[1]).filter(Boolean);
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));
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

  const filled = solid || scrolled || open;

  return (
    <header
      className={
        "vds-dark fixed inset-x-0 top-0 z-50 transition-[background-color,border-color] duration-300 " +
        (filled
          ? "border-b border-white/10 bg-obsidian/92 backdrop-blur-md"
          : "border-b border-transparent bg-transparent")
      }
    >
      <a
        href="#conteudo"
        className="vds-label sr-only z-50 bg-ivory px-4 py-3 text-obsidian focus:not-sr-only focus:absolute focus:left-4 focus:top-3"
      >
        Pular para o conteúdo
      </a>

      <div className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between gap-6 px-4 sm:px-8">
        <Link href="/" aria-label="Vetrium — página inicial" className="py-2">
          <Logo tone="light" size={24} />
        </Link>

        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {NAV.map((item) => {
              const id = item.href.split("#")[1];
              const isActive = active === id;
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    aria-current={isActive ? "location" : undefined}
                    className={
                      "vds-label relative py-2 text-[0.68rem] transition-colors hover:text-ivory " +
                      (isActive ? "text-ivory" : "text-marble")
                    }
                  >
                    {item.label}
                    <span
                      aria-hidden
                      className={
                        "absolute inset-x-0 -bottom-0.5 h-px origin-left bg-rose transition-transform duration-300 " +
                        (isActive ? "scale-x-100" : "scale-x-0")
                      }
                    />
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/orcamento"
            className="vds-btn vds-btn-outline hidden min-h-0 border-white/35 px-4 py-2.5 text-[0.68rem] sm:inline-flex"
          >
            Solicitar orçamento
          </Link>
          <button
            ref={toggleRef}
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls={panelId}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            className="grid h-11 w-11 place-items-center text-ivory lg:hidden"
          >
            {open ? <IconClose className="h-6 w-6" /> : <IconMenu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div id={panelId} className="border-t border-white/10 px-4 pb-8 pt-2 sm:px-8 lg:hidden">
          <nav aria-label="Menu">
            <ul>
              {NAV.map((item) => (
                <li key={item.href} className="border-b border-white/10">
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="font-editorial block py-4 text-2xl text-ivory"
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
            className="vds-btn vds-btn-light mt-6 w-full"
          >
            Solicitar orçamento
          </Link>
        </div>
      )}
    </header>
  );
}
