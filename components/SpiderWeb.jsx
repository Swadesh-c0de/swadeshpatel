"use client";

import { useEffect, useId, useRef } from "react";

import { threadPath, webStyles } from "@/lib/spider-web";

const coordinate = (value) => value.toFixed(3);
// Tapered, angular legs echo the long silhouette of a spider emblem.
const LEGS = [
  "M-3 -6 L-12 -14 L-17 -37 L-17 -18 L-7 -3 Z",
  "M-4 -3 L-22 -13 L-29 -28 L-25 -9 L-5 1 Z",
  "M-4 1 L-24 12 L-29 31 L-20 16 L-3 5 Z",
  "M-3 5 L-13 20 L-15 43 L-9 23 L-1 9 Z",
];

export default function SpiderWeb({ variant = "home" }) {
  const style = webStyles[variant] || webStyles.home;
  const { hub, restY, scale } = style;
  const root = useRef(null);
  const silk = useRef(null);
  const spider = useRef(null);
  const web = useRef(null);
  const id = useId().replaceAll(":", "");

  useEffect(() => {
    // Keep this effect tied to its own DOM nodes, including during Fast Refresh.
    const rootElement = root.current;
    const silkElement = silk.current;
    const spiderElement = spider.current;
    const webElement = web.current;
    if (!rootElement || !silkElement || !spiderElement || !webElement) return;

    let bounds = rootElement.getBoundingClientRect();
    const localX = (clientX) => {
      const x = (clientX - bounds.left) / bounds.width * 360;
      return style.mirror ? 360 - x : x;
    };
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let disposed = false;
    let inView = true;
    let frame;
    let previous = 0;
    let elapsed = 0;
    let retreat = 0;
    let x = 0;
    let y = 0;
    let vx = 0;
    let vy = 0;
    let pointer = null;
    let lastOpacity = null;
    const measure = () => {
      if (!disposed && inView && rootElement.isConnected) bounds = rootElement.getBoundingClientRect();
    };
    const move = (event) => {
      if (!disposed && inView && !reducedMotion.matches) pointer = { x: event.clientX, y: event.clientY };
    };
    const leave = () => { pointer = null; };
    const disturb = (event) => {
      if (disposed || !inView || reducedMotion.matches || bounds.width <= 0) return;
      move(event);
      const px = localX(event.clientX);
      const py = (event.clientY - bounds.top) / bounds.width * 360;
      if (px > 0 && px < 360 && py > 0 && py < 380) {
        retreat = style.retreat;
        vx += (px < hub.x ? 1 : -1) * 2.5;
      }
    };
    const animate = (now) => {
      if (disposed || !inView || !rootElement.isConnected || reducedMotion.matches || document.hidden || bounds.width <= 0) return;
      const dt = Math.min((now - (previous || now)) / 16.667, 2);
      previous = now;
      elapsed += dt / 60;
      const px = pointer ? localX(pointer.x) : -1000;
      const py = pointer ? (pointer.y - bounds.top) / bounds.width * 360 : -1000;
      const distance = Math.hypot(px - (hub.x + x), py - (restY + y));
      const proximity = Math.max(0, 1 - distance / 145);
      const targetX = Math.sin(elapsed * 0.9 + style.phase) * 4 + (hub.x + x - px) * proximity * 0.22;
      const targetY = Math.sin(elapsed * 0.48 + style.phase) * style.idle - retreat - proximity * style.lift;
      vx = (vx + (targetX - x) * 0.013 * dt) * Math.pow(0.94, dt);
      vy = (vy + (targetY - y) * 0.01 * dt) * Math.pow(0.93, dt);
      x += vx * dt;
      y += vy * dt;
      retreat *= Math.pow(0.992, dt);
      const sx = hub.x + x;
      const sy = Math.max(hub.y + 26, restY + y);
      const angle = style.angle - x * 0.65 + vx * 3;
      silkElement.setAttribute("d", threadPath(sx, sy, angle, vx, style));
      spiderElement.setAttribute("transform", `translate(${coordinate(sx)} ${coordinate(sy)}) rotate(${coordinate(angle)}) scale(${scale})`);
      const opacity = Math.round((0.82 + proximity * 0.18) * 1000) / 1000;
      if (opacity !== lastOpacity) {
        webElement.style.opacity = String(opacity);
        lastOpacity = opacity;
      }
      frame = requestAnimationFrame(animate);
    };
    const start = () => {
      cancelAnimationFrame(frame);
      if (disposed) return;
      previous = 0;
      const running = !disposed && inView && rootElement.isConnected && !reducedMotion.matches && !document.hidden;
      rootElement.style.setProperty("--spider-play", running ? "running" : "paused");
      if (running) frame = requestAnimationFrame(animate);
    };
    const observer = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting;
      measure();
      start();
    });
    observer.observe(rootElement);
    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("pointerdown", disturb, { passive: true });
    document.addEventListener("pointerleave", leave);
    window.addEventListener("resize", measure);
    window.addEventListener("scroll", measure, { passive: true });
    document.addEventListener("visibilitychange", start);
    reducedMotion.addEventListener("change", start);
    start();
    return () => {
      disposed = true;
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerdown", disturb);
      document.removeEventListener("pointerleave", leave);
      window.removeEventListener("resize", measure);
      window.removeEventListener("scroll", measure);
      document.removeEventListener("visibilitychange", start);
      reducedMotion.removeEventListener("change", start);
    };
  }, [style, hub, restY, scale]);

  return (
    <div ref={root} className={`spider-web${variant === "home" ? "" : ` spider-web--${variant}`}`} data-web-variant={variant} data-web-position={style.mirror ? "left" : "right"} aria-hidden="true">
      <svg viewBox="0 0 360 410" fill="none" focusable="false">
        <defs>
          <linearGradient id={`${id}-thread`} x1={hub.x} y1={hub.y} x2={hub.x} y2={restY + 40} gradientUnits="userSpaceOnUse">
            <stop stopColor="#d4d4d8" stopOpacity="0.45" />
            <stop offset="0.6" stopColor="#e4e4e7" stopOpacity="0.7" />
            <stop offset="1" stopColor="#f4f4f5" stopOpacity="0.85" />
          </linearGradient>
          <linearGradient id={`${id}-silk`} x1="360" y1="0" x2="100" y2="300" gradientUnits="userSpaceOnUse">
            <stop stopColor="#f4f4f5" stopOpacity="0.9" />
            <stop offset="0.5" stopColor="#d4d4d8" stopOpacity="0.65" />
            <stop offset="1" stopColor="#a1a1aa" stopOpacity="0.18" />
          </linearGradient>
          <filter id={`${id}-shadow`} x="-70%" y="-50%" width="240%" height="220%">
            <feDropShadow dx="3" dy="5" stdDeviation="2" floodColor="#000" floodOpacity="0.9" />
          </filter>
        </defs>
        <g transform={style.mirror ? "translate(360 0) scale(-1 1)" : undefined}>
          <g ref={web} stroke={`url(#${id}-silk)`} strokeLinecap="round" strokeWidth={style.stroke}>
            {style.spokes.map(({ d, opacity }, index) => <path key={index} d={d} opacity={opacity} />)}
            {style.rings.map(({ d, opacity }, index) => <path key={index} d={d} opacity={opacity} />)}
          </g>
          <path
            ref={silk}
            d={threadPath(hub.x, restY, style.angle, 0, style)}
            stroke={`url(#${id}-thread)`}
            strokeWidth="0.55"
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
          />
          <g ref={spider} transform={`translate(${hub.x} ${restY}) rotate(${style.angle}) scale(${scale})`} filter={`url(#${id}-shadow)`}>
            {[-1, 1].map((side) => (
              <g key={side} transform={`scale(${side} 1)`}>
                {LEGS.map((d, index) => (
                  <g key={index} className={`spider-leg spider-leg-${index}`}>
                    <path d={d} fill="#dedee2" />
                  </g>
                ))}
              </g>
            ))}
            <path
              d="M0 -10 L4 -7 L5 -2 L3 2 L5 7 L3 13 L0 18 L-3 13 L-5 7 L-3 2 L-5 -2 L-4 -7 Z"
              fill="#eeeef0"
            />
            <path d="M-2 -8 L-3 -13 L0 -10 L3 -13 L2 -8" fill="#eeeef0" />
          </g>
        </g>
      </svg>
    </div>
  );
}
