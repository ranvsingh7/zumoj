"use client";

import { useEffect } from "react";

export default function MouseGlow() {
  useEffect(() => {
    const root = document.documentElement;
    const setGlow = (x: number, y: number) => {
      root.style.setProperty("--glow-x", `${x}px`);
      root.style.setProperty("--glow-y", `${y}px`);
      const mx = ((x / window.innerWidth) - 0.5) * 2;
      const my = ((y / window.innerHeight) - 0.5) * 2;
      root.style.setProperty("--mx", mx.toFixed(3));
      root.style.setProperty("--my", my.toFixed(3));
    };

    setGlow(window.innerWidth * 0.6, window.innerHeight * 0.3);

    let frame = 0;
    const handleMove = (event: MouseEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        setGlow(event.clientX, event.clientY);
      });
    };

    const handleTouch = (event: TouchEvent) => {
      const touch = event.touches[0];
      if (!touch) return;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        setGlow(touch.clientX, touch.clientY);
      });
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("touchmove", handleTouch, { passive: true });

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("touchmove", handleTouch);
    };
  }, []);

  return <div className="glow-layer" aria-hidden="true" />;
}
