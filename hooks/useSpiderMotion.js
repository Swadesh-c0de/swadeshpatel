"use client";

import { useEffect } from "react";
import { coordinate, threadPath, webStyle as style } from "@/lib/spider-web";

const { hub, restY, scale } = style;

// Pointer-driven springs only. The idle spider uses no animation frames.
export default function useSpiderMotion({ root, silk, spider }) {
  useEffect(() => {
    const element = root.current;
    const silkElement = silk.current;
    const spiderElement = spider.current;
    if (!element || !silkElement || !spiderElement) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let bounds = element.getBoundingClientRect();
    let frame = null;
    let previous;
    let pointer = null;
    let x = 0, y = 0, vx = 0, vy = 0, retreat = 0;

    const setState = state => {
      if (element.dataset.spiderState !== state) element.dataset.spiderState = state;
      const playback = state === "settled" ? "paused" : "running";
      if (element.style.getPropertyValue("--spider-play") !== playback) element.style.setProperty("--spider-play", playback);
    };
    const draw = (sx, sy, angle = style.angle, velocity = 0) => {
      silkElement.setAttribute("d", threadPath(sx, sy, angle, velocity, style));
      spiderElement.setAttribute("transform", `translate(${coordinate(sx)} ${coordinate(sy)}) rotate(${coordinate(angle)}) scale(${scale})`);
    };
    const settle = () => {
      x = y = vx = vy = retreat = 0;
      draw(hub.x, restY);
      setState("settled");
    };
    const localPointer = event => ({
      x: (event.clientX - bounds.left) / bounds.width * 360,
      y: (event.clientY - bounds.top) / bounds.width * 360,
    });
    const wake = () => {
      if (frame !== null || document.hidden || reducedMotion.matches) return;
      previous = undefined;
      frame = requestAnimationFrame(animate);
    };
    const animate = now => {
      frame = null;
      if (document.hidden || reducedMotion.matches) return;
      const milliseconds = previous === undefined ? 0 : Math.min(now - previous, 50);
      previous = now;
      const dt = milliseconds / 16.667;
      const px = pointer?.x ?? -1000, py = pointer?.y ?? -1000;
      const distance = Math.hypot(px - (hub.x + x), py - (restY + y));
      const proximity = Math.max(0, 1 - distance / 145);
      const targetX = Math.max(-28, Math.min(28, (hub.x + x - px) * proximity * .22));
      const targetY = -retreat - proximity * style.lift;
      vx = (vx + (targetX - x) * .018 * dt) * Math.pow(.9, dt);
      vy = (vy + (targetY - y) * .015 * dt) * Math.pow(.9, dt);
      x += vx * dt;
      y += vy * dt;
      retreat *= Math.pow(.975, dt);
      draw(hub.x + x, Math.max(hub.y + 26, restY + y), style.angle - x * .65 + vx * 3, vx);
      if (proximity < .01 && Math.abs(x) + Math.abs(y) + Math.abs(vx) + Math.abs(vy) + retreat < .08) {
        settle();
        return;
      }
      setState("interacting");
      frame = requestAnimationFrame(animate);
    };
    const move = event => {
      if (reducedMotion.matches || event.pointerType === "touch" || bounds.width <= 0) return;
      pointer = localPointer(event);
      wake();
    };
    const leave = () => { pointer = null; wake(); };
    const disturb = event => {
      if (reducedMotion.matches || bounds.width <= 0) return;
      const point = localPointer(event);
      const nearSpider = Math.hypot(point.x - hub.x - x, point.y - restY - y) < 100;
      const nearWeb = Math.hypot(point.x - hub.x, point.y - hub.y) < 130;
      if (!nearSpider && !nearWeb) return;
      retreat = style.retreat;
      vx += (point.x < hub.x ? 1 : -1) * 2.5;
      vy -= 3;
      wake();
    };
    const resume = () => {
      cancelAnimationFrame(frame);
      frame = null;
      if (reducedMotion.matches) {
        pointer = null;
        settle();
      } else if (document.hidden) element.style.setProperty("--spider-play", "paused");
      else {
        wake();
      }
    };
    const resize = new ResizeObserver(() => { bounds = element.getBoundingClientRect(); });
    resize.observe(element);
    settle();
    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("pointerdown", disturb, { passive: true });
    document.addEventListener("pointerleave", leave);
    document.addEventListener("visibilitychange", resume);
    reducedMotion.addEventListener("change", resume);
    return () => {
      cancelAnimationFrame(frame);
      resize.disconnect();
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerdown", disturb);
      document.removeEventListener("pointerleave", leave);
      document.removeEventListener("visibilitychange", resume);
      reducedMotion.removeEventListener("change", resume);
      element.style.setProperty("--spider-play", "paused");
    };
  }, [root, silk, spider]);
}
