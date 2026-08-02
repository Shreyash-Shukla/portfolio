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
    const colors = ["#00FF6A", "#FF90E8", "#00E5FF", "#FFC900", "#B388FF", "#FF4444"];

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
      background: #00FF6A;
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

  // ─── Custom Right-Click Context Menu ────────────────────────────────────────
  useEffect(() => {
    const onContextMenu = (e) => {
      e.preventDefault();
      document.getElementById("shreyash-ctx-menu")?.remove();

      const menu = document.createElement("div");
      menu.id = "shreyash-ctx-menu";
      const menuItems = [
        { label: "📄 View Resume", href: "#resume" },
        { label: "💻 GitHub", href: "https://github.com/Shreyash-Shukla", external: true },
        { label: "💼 LinkedIn", href: "https://www.linkedin.com/in/shreyash-shukla-6a3b5a309/", external: true },
        { label: "✉️ Contact", href: "#contact" },
        { label: "🎮 Play Bug Blaster", href: "#hero" },
      ];

      menu.style.cssText = `
        position: fixed;
        left: ${Math.min(e.clientX, window.innerWidth - 200)}px;
        top: ${Math.min(e.clientY, window.innerHeight - 220)}px;
        background: #0D0D0D;
        border: 2px solid #00FF6A;
        border-radius: 12px;
        padding: 6px;
        z-index: 10000;
        box-shadow: 6px 6px 0px rgba(0,255,106,0.3);
        min-width: 190px;
        font-family: monospace;
      `;

      menu.innerHTML = `
        <div style="padding:6px 10px 8px;font-size:10px;font-weight:900;color:#00FF6A;letter-spacing:0.1em;border-bottom:1px solid #2C2C2C;margin-bottom:4px;">
          SHREYASH.DEV
        </div>
        ${menuItems.map((item, i) => `
          <a
            href="${item.href}"
            ${item.external ? 'target="_blank" rel="noopener noreferrer"' : ""}
            id="ctx-item-${i}"
            style="display:block;padding:8px 12px;color:#fff;font-size:12px;font-weight:700;border-radius:8px;cursor:pointer;text-decoration:none;"
            onmouseover="this.style.background='#00FF6A';this.style.color='#000';"
            onmouseout="this.style.background='';this.style.color='#fff';"
          >
            ${item.label}
          </a>
        `).join("")}
      `;

      document.body.appendChild(menu);
      const dismiss = () => menu.remove();
      setTimeout(() => document.addEventListener("click", dismiss, { once: true }), 10);
    };

    document.addEventListener("contextmenu", onContextMenu);
    return () => document.removeEventListener("contextmenu", onContextMenu);
  }, []);

  return null;
}
