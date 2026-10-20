"use client";

import { useEffect } from "react";

/**
 * Revela os elementos marcados com [data-reveal] quando entram na tela.
 * Um único observer para a página inteira; o CSS (vetrium-ds.css) cuida da
 * transição e ignora tudo isso quando o usuário prefere movimento reduzido.
 */
export function RevealObserver() {
  useEffect(() => {
    (window as unknown as { __vetriumAnimReady?: boolean }).__vetriumAnimReady = true;

    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-in"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-in");
          io.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return null;
}
