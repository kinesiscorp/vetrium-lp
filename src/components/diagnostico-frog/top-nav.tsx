"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { NAV_SECTIONS, type SectionId } from "@/lib/diagnostico-frog/content";

export function TopNav() {
  const [active, setActive] = useState<SectionId>(NAV_SECTIONS[0].id);
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

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
    <header className="sticky top-0 z-50 border-b border-frog-edge bg-frog-void/85 backdrop-blur-md">
      <div className="wrap flex items-center gap-6 py-3">
        <a href="#topo" className="flex items-center">
          <Image
            src="/diagnostico-frog/frog-logo.png"
            alt="Esquadrão do Frog"
            width={900}
            height={432}
            priority
            className="h-10 w-auto drop-shadow-[0_0_24px_rgba(124,255,0,0.3)]"
          />
        </a>

        <div className="relative ml-auto" ref={menuRef}>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-haspopup="true"
            className="label flex items-center gap-2 border border-frog-edge-hi px-3 py-2 text-[12px] text-[#cfd4cb] transition-colors hover:border-frog-acid hover:text-frog-acid"
          >
            Índice
            <span aria-hidden className={`transition-transform ${open ? "rotate-180" : ""}`}>
              ▾
            </span>
          </button>
          {open && (
            <div className="absolute top-[calc(100%+8px)] right-0 w-64 border border-frog-edge-hi bg-frog-panel shadow-2xl shadow-black/40">
              <ul className="py-1.5">
                {NAV_SECTIONS.map((s) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        setOpen(false);
                        document.getElementById(s.id)?.scrollIntoView({ behavior: "smooth", block: "start" });
                      }}
                      className={`block px-4 py-2 text-[13.5px] transition-colors hover:bg-frog-panel-hi hover:text-frog-bone ${
                        active === s.id ? "text-frog-acid" : "text-[#b6bcb3]"
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
    </header>
  );
}
