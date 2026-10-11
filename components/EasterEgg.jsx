"use client";

import { useEffect, useRef, useCallback } from "react";

const KONAMI = [
  "ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown",
  "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight",
  "b", "a",
];

export default function EasterEgg() {
  const konamiProgress = useRef([]);

  // ─── Konami Code ────────────────────────────────────────────────────────────
  const triggerKonami = useCallback(() => {
    const colors = ["#8B9CFF", "#FF90E8", "#00E5FF", "#FFC900", "#B388FF", "#FF4444"];

    import("canvas-confetti").then((mod) => {
      const confetti = mod.default;
      confetti({ particleCount: 80, angle: 60, spread: 55, origin: { x: 0, y: 0.6 }, colors });
      setTimeout(() => confetti({ particleCount: 80, angle: 120, spread: 55, origin: { x: 1, y: 0.6 }, colors }), 200);
      setTimeout(() => confetti({ particleCount: 150, spread: 100, origin: { y: 0.3 }, colors }), 400);
    });

    const toast = document.createElement("div");
    toast.innerHTML = `
      <span style="font-size:1.5rem">🎉</span>
      <div>
        <strong style="font-size:0.9rem;font-family:monospace">KONAMI CODE ACTIVATED!</strong><br/>
        <span style="font-size:0.75rem;font-family:monospace;opacity:0.8">You found the easter egg, dev! 🚀</span>
      </div>
    `;
    toast.style.cssText = `
      position: fixed;
      bottom: 2rem;
      left: 50%;
      transform: translateX(-50%) translateY(60px);
      background: #8B9CFF;
      color: #000;
      padding: 1rem 1.5rem;
      border-radius: 1rem;
      border: 3px solid #000;
      box-shadow: 6px 6px 0px #000;
      display: flex;
      align-items: center;
      gap: 0.75rem;
      z-index: 10000;
      transition: transform 0.4s cubic-bezier(0.16,1,0.3,1);
    `;
    document.body.appendChild(toast);
    setTimeout(() => (toast.style.transform = "translateX(-50%) translateY(0)"), 50);
    setTimeout(() => {
      toast.style.transform = "translateX(-50%) translateY(60px)";
      setTimeout(() => toast.remove(), 400);
    }, 4000);
  }, []);

  useEffect(() => {
    const onKeyDown = (e) => {
      konamiProgress.current.push(e.key);
      if (konamiProgress.current.length > KONAMI.length) {
        konamiProgress.current.shift();
      }
      if (
        konamiProgress.current.length === KONAMI.length &&
        konamiProgress.current.every((k, i) => k === KONAMI[i])
      ) {
        konamiProgress.current = [];
        triggerKonami();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [triggerKonami]);

  return null;
}
