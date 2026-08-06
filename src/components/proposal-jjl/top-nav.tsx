"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { NAV_SECTIONS, type SectionId } from "@/lib/proposal-jjl/content";

export function TopNav() {
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState<SectionId>(NAV_SECTIONS[0].id);
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setProgress(max > 0 ? Math.min(1, h.scrollTop / max) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const els = NAV_SECTIONS.map((s) => document.getElementById(s.id)).filter(
      (el): el is HTMLElement => !!el,
    );
    if (els.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id as SectionId);
      },
      { rootMargin: "-15% 0px -70% 0px", threshold: 0 },
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("click", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header data-no-print className="fixed inset-x-0 top-0 z-50">
      <div className="flex items-center justify-between border-b border-line bg-bg/85 px-5 py-3 backdrop-blur-md sm:px-8">
        <a
          href="/"
          target="_blank"
          rel="noreferrer noopener"
          className="flex items-center gap-2.5"
        >
          <Image src="/brand-frog/vetrium-icon.png" alt="" aria-hidden width={28} height={28} className="h-7 w-7 rounded-[7px]" />
          <Image src="/brand-frog/vetrium-wordmark.png" alt="Vetrium" width={792} height={153} className="h-[15px] w-auto" />
        </a>
        <div className="flex items-center gap-4">
          <span className="hidden text-[10.5px] tracking-[0.2em] text-faint uppercase sm:inline">
            Proposta interativa
          </span>
          <div className="relative" ref={menuRef}>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-haspopup="true"
              className="flex items-center gap-2 border border-line-strong px-3 py-1.5 text-[12.5px] tracking-wide text-ink-dim transition-colors hover:border-accent-solid hover:text-ink"
            >
              Índice
              <span aria-hidden className={`transition-transform ${open ? "rotate-180" : ""}`}>
                ▾
              </span>
            </button>
            {open && (
              <div className="absolute top-[calc(100%+8px)] right-0 w-64 border border-line bg-sheet shadow-2xl shadow-black/40">
                <ul className="max-h-[70vh] overflow-y-auto py-1.5">
                  {NAV_SECTIONS.map((s) => (
                    <li key={s.id}>
                      <a
                        href={`#${s.id}`}
                        onClick={(e) => {
                          e.preventDefault();
                          setOpen(false);
                          document.getElementById(s.id)?.scrollIntoView({ behavior: "smooth", block: "start" });
                        }}
                        className={`block px-4 py-2 text-[13.5px] transition-colors hover:bg-card hover:text-ink ${
                          active === s.id ? "text-accent-solid" : "text-ink-dim"
                        }`}
                      >
                        {s.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="h-[2px] w-full bg-line">
        <div
          className="h-full bg-metal transition-[width] duration-150 ease-out"
          style={{ width: `${progress * 100}%` }}
        />
      </div>
    </header>
  );
}
