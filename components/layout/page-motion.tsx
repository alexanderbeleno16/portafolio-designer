"use client";

import { useEffect } from "react";

const REVEAL_SELECTOR = ".reveal";

export function PageMotion() {
  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const revealElements = Array.from(
      document.querySelectorAll<HTMLElement>(REVEAL_SELECTOR),
    );

    if (reducedMotion) {
      for (const element of revealElements) {
        element.classList.add("is-visible");
      }

      return;
    }

    const revealObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        }
      },
      {
        threshold: 0.14,
        rootMargin: "0px 0px -10% 0px",
      },
    );

    for (const element of revealElements) {
      revealObserver.observe(element);
    }

    return () => {
      revealObserver.disconnect();
    };
  }, []);

  return null;
}
