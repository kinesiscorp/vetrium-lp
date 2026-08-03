"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

declare global {
  interface Window {
    __vetriumAnimReady?: boolean;
  }
}

/**
 * Drives every scroll-linked animation on the page. Markup opts in with data
 * attributes so the page stays declarative:
 *
 *   data-anim="fade"      rise + fade when it enters
 *   data-anim="assemble"  children [data-piece] fly in from scattered
 *                         positions while the section is pinned
 *   data-anim="words"     children [data-word] brighten one by one on scrub
 *   data-anim="draw"      strokes inside are drawn in on scrub
 *   data-anim="hero"      hero drifts + dissolves as you leave it
 *   data-parallax="0.2"   translate on scroll at the given speed
 */
export function ScrollEngine() {
  useEffect(() => {
    window.__vetriumAnimReady = true;
    document.documentElement.classList.remove("anim-fallback");

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduced) {
      document.documentElement.classList.add("anim-fallback");
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      /* ---------- simple rise + fade ---------- */
      gsap.utils.toArray<HTMLElement>('[data-anim="fade"]').forEach((el) => {
        const delay = Number(el.dataset.delay ?? 0) / 1000;
        gsap.fromTo(
          el,
          { opacity: 0, y: 34 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            delay,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 88%" },
          },
        );
      });

      /* ---------- hero dissolve ---------- */
      gsap.utils.toArray<HTMLElement>('[data-anim="hero"]').forEach((el) => {
        gsap.set(el, { opacity: 1 });
        gsap.to(el, {
          y: -90,
          opacity: 0,
          filter: "blur(14px)",
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top top",
            end: "bottom top",
            scrub: 0.6,
          },
        });
      });

      /* ---------- scattered pieces assembling into place ---------- */
      gsap.utils.toArray<HTMLElement>('[data-anim="assemble"]').forEach((section) => {
        const pieces = gsap.utils.toArray<HTMLElement>(
          "[data-piece]",
          section,
        );
        gsap.set(section, { opacity: 1 });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top top",
            // Shorter than it looks like it should be: with pin+scrub, this
            // is how many scroll pixels the whole sequence consumes. 125%
            // needed ~12 mouse-wheel notches (or many more trackpad ticks)
            // to complete, which reads as "scroll stopped working."
            end: "+=60%",
            pin: true,
            scrub: 0.6,
            anticipatePin: 1,
          },
        });

        // One staggered tween — GSAP sizes the timeline itself, so every piece
        // is guaranteed to reach its end state inside the scroll range.
        const dirOf = (i: number) => (i % 2 === 0 ? -1 : 1);
        tl.fromTo(
          pieces,
          {
            x: (i: number) => dirOf(i) * (260 + ((i * 97) % 220)),
            y: (i: number) => ((i * 61) % 180) - 90,
            rotation: (i: number) => dirOf(i) * (6 + ((i * 13) % 10)),
            scale: 0.82,
            // Never fully invisible — a blank screen reads as broken. The
            // reference keeps the words faint and blurred, then resolves them.
            opacity: 0.14,
            filter: "blur(14px)",
          },
          {
            x: 0,
            y: 0,
            rotation: 0,
            scale: 1,
            opacity: 1,
            filter: "blur(0px)",
            ease: "power2.out",
            duration: 0.7,
            stagger: 0.09,
          },
        );
        // Hold the assembled headline on screen for the rest of the pin.
        tl.to({}, { duration: 0.35 });
      });

      /* ---------- word-by-word brighten ---------- */
      gsap.utils.toArray<HTMLElement>('[data-anim="words"]').forEach((block) => {
        const words = gsap.utils.toArray<HTMLElement>("[data-word]", block);
        gsap.set(block, { opacity: 1 });
        gsap.fromTo(
          words,
          { opacity: 0.16, filter: "blur(3px)" },
          {
            opacity: 1,
            filter: "blur(0px)",
            ease: "none",
            stagger: 0.5,
            scrollTrigger: {
              trigger: block,
              start: "top 78%",
              end: "bottom 55%",
              scrub: 0.5,
            },
          },
        );
      });

      /* ---------- stroke drawing ---------- */
      gsap.utils.toArray<HTMLElement>('[data-anim="draw"]').forEach((holder) => {
        const shapes = gsap.utils.toArray<SVGGeometryElement>(
          ".draw-path",
          holder,
        );
        gsap.set(holder, { opacity: 1 });
        shapes.forEach((shape, i) => {
          const len = shape.getTotalLength?.() ?? 400;
          gsap.fromTo(
            shape,
            { strokeDasharray: len, strokeDashoffset: len },
            {
              strokeDashoffset: 0,
              ease: "none",
              scrollTrigger: {
                trigger: holder,
                start: "top 85%",
                end: "bottom 45%",
                scrub: 0.7,
              },
              delay: i * 0.05,
            },
          );
        });
        gsap.fromTo(
          holder,
          { scale: 0.86, rotation: -18 },
          {
            scale: 1,
            rotation: 0,
            ease: "none",
            scrollTrigger: {
              trigger: holder,
              start: "top 85%",
              end: "bottom 40%",
              scrub: 0.7,
            },
          },
        );
      });

      /* ---------- parallax ---------- */
      gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((el) => {
        const speed = Number(el.dataset.parallax ?? 0.15);
        gsap.fromTo(
          el,
          { y: speed * 160 },
          {
            y: -speed * 160,
            ease: "none",
            scrollTrigger: {
              trigger: el.closest("section") ?? el,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.8,
            },
          },
        );
      });
    });

    // Fonts change metrics; recalculate once they land.
    document.fonts?.ready.then(() => ScrollTrigger.refresh());

    return () => ctx.revert();
  }, []);

  return null;
}
