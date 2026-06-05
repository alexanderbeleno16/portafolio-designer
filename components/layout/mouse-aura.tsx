"use client";

import { useEffect } from "react";

export function MouseAura() {
  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!canHover || reducedMotion) {
      return;
    }

    const root = document.documentElement;
    let frame = 0;
    let pulseTimeout = 0;
    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let auraX = targetX;
    let auraY = targetY;
    let trailX = targetX;
    let trailY = targetY;

    const animate = () => {
      auraX += (targetX - auraX) * 0.28;
      auraY += (targetY - auraY) * 0.28;
      trailX += (targetX - trailX) * 0.11;
      trailY += (targetY - trailY) * 0.11;

      root.style.setProperty("--mouse-x", `${auraX}px`);
      root.style.setProperty("--mouse-y", `${auraY}px`);
      root.style.setProperty("--mouse-trail-x", `${trailX}px`);
      root.style.setProperty("--mouse-trail-y", `${trailY}px`);

      frame = requestAnimationFrame(animate);
    };

    const handleMove = (event: PointerEvent) => {
      targetX = event.clientX;
      targetY = event.clientY;
      root.dataset.mouseAura = "enabled";
    };

    const handleDown = () => {
      root.dataset.mouseAuraPulse = "active";
      window.clearTimeout(pulseTimeout);
      pulseTimeout = window.setTimeout(() => {
        delete root.dataset.mouseAuraPulse;
      }, 360);
    };

    frame = requestAnimationFrame(animate);
    window.addEventListener("pointermove", handleMove, { passive: true });
    window.addEventListener("pointerdown", handleDown, { passive: true });

    return () => {
      if (frame) {
        cancelAnimationFrame(frame);
      }
      window.clearTimeout(pulseTimeout);

      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("pointerdown", handleDown);
      delete root.dataset.mouseAura;
      delete root.dataset.mouseAuraPulse;
      root.style.removeProperty("--mouse-x");
      root.style.removeProperty("--mouse-y");
      root.style.removeProperty("--mouse-trail-x");
      root.style.removeProperty("--mouse-trail-y");
    };
  }, []);

  return (
    <div className="mouse-aura" aria-hidden="true">
      <span className="mouse-aura__trail" />
      <span className="mouse-aura__halo" />
      <span className="mouse-aura__core" />
    </div>
  );
}
