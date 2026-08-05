"use client";

import Image from "next/image";
import { useCallback, useRef, useState } from "react";

export function BeforeAfter({
  before,
  after,
}: {
  before: { img: string; label: string };
  after: { img: string; label: string };
}) {
  const [pos, setPos] = useState(50);
  const trackRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const setFromClientX = useCallback((clientX: number) => {
    const el = trackRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(100, Math.max(0, pct)));
  }, []);

  return (
    <div className="select-none">
      <div
        ref={trackRef}
        role="slider"
        tabIndex={0}
        aria-label="Comparar antes e depois"
        aria-valuenow={Math.round(pos)}
        aria-valuemin={0}
        aria-valuemax={100}
        className="bracket relative aspect-[1280/800] w-full cursor-ew-resize touch-none overflow-hidden border border-frog-edge-hi bg-frog-panel outline-none focus-visible:ring-2 focus-visible:ring-frog-acid"
        onPointerDown={(e) => {
          dragging.current = true;
          e.currentTarget.setPointerCapture(e.pointerId);
          setFromClientX(e.clientX);
        }}
        onPointerMove={(e) => {
          if (dragging.current) setFromClientX(e.clientX);
        }}
        onPointerUp={() => {
          dragging.current = false;
        }}
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft") setPos((p) => Math.max(0, p - 5));
          if (e.key === "ArrowRight") setPos((p) => Math.min(100, p + 5));
          if (e.key === "Home") setPos(0);
          if (e.key === "End") setPos(100);
        }}
      >
        <Image
          src={after.img}
          alt={`Depois, ${after.label}`}
          fill
          sizes="(min-width: 1160px) 1100px, 100vw"
          className="pointer-events-none object-cover"
        />

        <Image
          src={before.img}
          alt={`Antes, ${before.label}`}
          fill
          sizes="(min-width: 1160px) 1100px, 100vw"
          className="pointer-events-none object-cover"
          style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        />

        <span
          className="label pointer-events-none absolute top-3 left-3 border border-frog-edge-hi bg-frog-void/80 px-2.5 py-1 text-[10.5px] text-[#8e958d] backdrop-blur-sm transition-opacity"
          style={{ opacity: pos > 14 ? 1 : 0 }}
        >
          Antes
        </span>
        <span
          className="label pointer-events-none absolute top-3 right-3 border border-frog-acid/40 bg-frog-void/80 px-2.5 py-1 text-[10.5px] text-frog-acid backdrop-blur-sm transition-opacity"
          style={{ opacity: pos < 86 ? 1 : 0 }}
        >
          Depois
        </span>

        <div
          className="pointer-events-none absolute inset-y-0 w-[2px] bg-frog-acid shadow-[0_0_12px_rgba(124,255,0,0.6)]"
          style={{ left: `${pos}%` }}
        >
          <div className="absolute top-1/2 left-1/2 grid h-9 w-9 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-frog-acid text-[#071006] shadow-lg">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
              <path
                d="M5 3 2 8l3 5M11 3l3 5-3 5"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="label mt-2 flex items-center justify-between text-[10.5px] text-frog-steel">
        <span>{before.label}</span>
        <span>Arraste para comparar</span>
        <span>{after.label}</span>
      </div>
    </div>
  );
}
