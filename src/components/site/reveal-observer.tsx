"use client";

import { useEffect } from "react";

/**
 * Um único observer para a página: títulos divididos em palavras
 * ([data-split]), blocos que sobem desfocados ([data-rise]) e linhas que se
 * desenham (.vds-draw) ganham .is-in ao entrar na tela. O CSS
 * (vetrium-ds.css) faz a transição e ignora tudo com movimento reduzido.
 */
export function RevealObserver() {
  useEffect(() => {
    (window as unknown as { __vetriumAnimReady?: boolean }).__vetriumAnimReady = true;

    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-split], [data-rise], .vds-draw"));
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
      { rootMargin: "0px 0px -10% 0px", threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return null;
}
