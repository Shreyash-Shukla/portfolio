"use client";

import { useEffect, useRef, useState } from "react";

const COLORS = ["#292929", "#0e4429", "#006d32", "#26a641", "#39d353"];
const INFLUENCE_RADIUS = 48;

function dayDescription(day) {
  if (day.count === null) return `${day.date}: activity level ${day.level}`;
  return `${day.count} contribution${day.count === 1 ? "" : "s"} on ${new Date(`${day.date}T00:00:00Z`).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric", timeZone: "UTC" })}`;
}

export default function ContributionGraph({ weeks, total, year }) {
  const canvasRef = useRef(null);
  const [activeDay, setActiveDay] = useState(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const pointer = { x: -1000, y: -1000, active: false };
    let points = [];
    let frame = 0;
    let selectedDate = null;

    function draw() {
      const { width, height } = canvas.getBoundingClientRect();
      context.clearRect(0, 0, width, height);

      if (pointer.active) {
        const glow = context.createRadialGradient(pointer.x, pointer.y, 0, pointer.x, pointer.y, INFLUENCE_RADIUS);
        glow.addColorStop(0, "rgba(57, 211, 83, 0.10)");
        glow.addColorStop(1, "rgba(57, 211, 83, 0)");
        context.fillStyle = glow;
        context.fillRect(pointer.x - INFLUENCE_RADIUS, pointer.y - INFLUENCE_RADIUS, INFLUENCE_RADIUS * 2, INFLUENCE_RADIUS * 2);
      }

      let moving = false;
      for (const point of points) {
        const dx = point.baseX - pointer.x;
        const dy = point.baseY - pointer.y;
        const distance = Math.hypot(dx, dy);
        const force = pointer.active && distance < INFLUENCE_RADIUS
          ? Math.pow(1 - distance / INFLUENCE_RADIUS, 2) * 28
          : 0;
        const targetX = point.baseX + (force * dx) / (distance || 1);
        const targetY = point.baseY + (force * dy) / (distance || 1);

        point.vx = (point.vx + (targetX - point.x) * 0.18) * 0.72;
        point.vy = (point.vy + (targetY - point.y) * 0.18) * 0.72;
        point.x += point.vx;
        point.y += point.vy;
        moving ||= Math.abs(point.x - targetX) + Math.abs(point.y - targetY) + Math.abs(point.vx) + Math.abs(point.vy) > 0.08;

        context.beginPath();
        context.arc(point.x, point.y, point.radius, 0, Math.PI * 2);
        context.fillStyle = COLORS[point.day.level];
        context.fill();
      }

      frame = moving ? requestAnimationFrame(draw) : 0;
    }

    function startDrawing() {
      if (!frame) frame = requestAnimationFrame(draw);
    }

    function resize() {
      const { width, height } = canvas.getBoundingClientRect();
      const ratio = window.devicePixelRatio || 1;
      canvas.width = Math.round(width * ratio);
      canvas.height = Math.round(height * ratio);
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      const stepX = width / weeks.length;
      const stepY = height / 7;
      const radius = Math.min(7, stepX * 0.34, stepY * 0.35);
      points = weeks.flatMap((week, column) => week.flatMap((day, row) => day ? [{
        day,
        baseX: (column + 0.5) * stepX,
        baseY: (row + 0.5) * stepY,
        x: (column + 0.5) * stepX,
        y: (row + 0.5) * stepY,
        vx: 0,
        vy: 0,
        radius,
      }] : []));
      startDrawing();
    }

    function selectDay(day) {
      if (day?.date === selectedDate) return;
      selectedDate = day?.date ?? null;
      setActiveDay(day);
    }

    function move(event) {
      const bounds = canvas.getBoundingClientRect();
      pointer.x = event.clientX - bounds.left;
      pointer.y = event.clientY - bounds.top;
      pointer.active = true;
      let closest = null;
      let shortest = Infinity;
      for (const point of points) {
        const distance = Math.hypot(point.baseX - pointer.x, point.baseY - pointer.y);
        if (distance < shortest) {
          shortest = distance;
          closest = point.day;
        }
      }
      selectDay(shortest < 22 ? closest : null);
      startDrawing();
    }

    function leave() {
      pointer.active = false;
      selectDay(null);
      startDrawing();
    }

    const observer = new ResizeObserver(resize);
    observer.observe(canvas);
    canvas.addEventListener("pointermove", move);
    canvas.addEventListener("pointerdown", move);
    canvas.addEventListener("pointerleave", leave);
    canvas.addEventListener("pointercancel", leave);
    resize();

    return () => {
      observer.disconnect();
      canvas.removeEventListener("pointermove", move);
      canvas.removeEventListener("pointerdown", move);
      canvas.removeEventListener("pointerleave", leave);
      canvas.removeEventListener("pointercancel", leave);
      cancelAnimationFrame(frame);
    };
  }, [weeks]);

  return (
    <>
      <div className="overflow-x-auto pb-2">
        <div className="min-w-[740px]">
          <canvas
            ref={canvasRef}
            role="img"
            aria-label={`Contribution graph for ${year}, ${total ?? "unknown number of"} contributions. Hover or touch a dot for daily details.`}
            className="block h-[132px] w-full cursor-crosshair touch-pan-x"
          />
        </div>
      </div>
      <div className="mt-4 flex min-h-5 flex-wrap items-center justify-between gap-4 font-mono text-xs text-[#9eb4ca] sm:text-sm">
        <span aria-live="polite">{activeDay ? dayDescription(activeDay) : "Hover or touch a dot for details ;)"}</span>
        <div className="flex items-center gap-2"><span>Less</span>{COLORS.map((color) => <span key={color} className="h-3 w-3 rounded-full sm:h-4 sm:w-4" style={{ backgroundColor: color }} />)}<span>More</span></div>
      </div>
    </>
  );
}
