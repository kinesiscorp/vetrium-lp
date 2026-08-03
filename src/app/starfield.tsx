"use client";

import { useEffect, useRef } from "react";

type Star = {
  x: number;
  y: number;
  r: number;
  base: number;
  twinkle: number;
  phase: number;
  depth: number;
};

/**
 * Canvas star field. Drifts slowly and parallaxes against page scroll so the
 * hero reads as deep space rather than a flat gradient.
 */
export function Starfield({ density = 0.00016 }: { density?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let stars: Star[] = [];
    let width = 0;
    let height = 0;
    let raf = 0;
    let t = 0;

    const starColor = () =>
      getComputedStyle(document.documentElement)
        .getPropertyValue("--star")
        .trim() || "rgba(255,255,255,0.85)";
    let color = starColor();

    function seed() {
      const count = Math.min(520, Math.floor(width * height * density));
      stars = Array.from({ length: count }, () => {
        const depth = Math.random();
        return {
          x: Math.random() * width,
          y: Math.random() * height,
          r: 0.35 + depth * 1.25,
          base: 0.18 + Math.random() * 0.62,
          twinkle: 0.4 + Math.random() * 1.5,
          phase: Math.random() * Math.PI * 2,
          depth,
        };
      });
    }

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const parent = canvas!.parentElement;
      width = parent?.clientWidth ?? window.innerWidth;
      height = parent?.clientHeight ?? window.innerHeight;
      canvas!.width = width * dpr;
      canvas!.height = height * dpr;
      canvas!.style.width = `${width}px`;
      canvas!.style.height = `${height}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed();
    }

    function draw() {
      ctx!.clearRect(0, 0, width, height);
      const scrollShift = window.scrollY;
      for (const s of stars) {
        const alpha = reduced
          ? s.base
          : s.base * (0.55 + 0.45 * Math.sin(t * s.twinkle + s.phase));
        // Deeper stars drift less — parallax against scroll.
        const y = s.y - (scrollShift * (0.02 + s.depth * 0.06)) % (height + 40);
        const wrapped = ((y % height) + height) % height;
        ctx!.globalAlpha = Math.max(0, Math.min(1, alpha));
        ctx!.fillStyle = color;
        ctx!.beginPath();
        ctx!.arc(s.x, wrapped, s.r, 0, Math.PI * 2);
        ctx!.fill();
      }
      ctx!.globalAlpha = 1;
    }

    function loop() {
      t += 0.012;
      draw();
      raf = requestAnimationFrame(loop);
    }

    resize();
    if (reduced) {
      draw();
    } else {
      loop();
    }

    const onResize = () => resize();
    window.addEventListener("resize", onResize);

    // Star colour is theme dependent — re-read it when the class flips.
    const observer = new MutationObserver(() => {
      color = starColor();
      if (reduced) draw();
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      observer.disconnect();
    };
  }, [density]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none absolute inset-0 h-full w-full"
    />
  );
}
