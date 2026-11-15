"use client";

import { useEffect, useRef, useState } from "react";

export default function LogoLoop({
  logos,
  speed = 40,
  direction = "left",
  logoHeight = 40,
  gap = 40,
  pauseOnHover = true,
  ariaLabel = "Technologies",
}) {
  const root = useRef(null);
  const sequence = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, copies: 2 });
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);

  useEffect(() => {
    const container = root.current;
    const list = sequence.current;
    if (!container || !list) return;
    let disposed = false;

    const resize = new ResizeObserver(() => {
      if (disposed) return;
      const width = Math.round(list.getBoundingClientRect().width * 100) / 100;
      if (!width) return;
      const copies = Math.max(2, Math.ceil(container.clientWidth / width) + 1);
      setDimensions((previous) =>
        previous.width === width && previous.copies === copies
          ? previous
          : { width, copies }
      );
    });
    resize.observe(container);
    resize.observe(list);

    let visible = false;
    const updatePlayback = () => {
      if (disposed) return;
      container.style.setProperty(
        "--loop-play",
        visible && !document.hidden ? "running" : "paused"
      );
    };
    const visibility = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      updatePlayback();
    });
    visibility.observe(container);
    document.addEventListener("visibilitychange", updatePlayback);

    return () => {
      disposed = true;
      resize.disconnect();
      visibility.disconnect();
      document.removeEventListener("visibilitychange", updatePlayback);
    };
  }, [logos, gap, logoHeight]);

  const stopped = (pauseOnHover && (hovered || focused)) || speed === 0 || dimensions.width === 0;

  return (
    <div
      ref={root}
      className="logo-loop"
      role="region"
      aria-label={ariaLabel}
      tabIndex={pauseOnHover ? 0 : undefined}
      style={{
        "--logo-height": `${logoHeight}px`,
        "--logo-gap": `${gap}px`,
        "--loop-distance": `${-dimensions.width}px`,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocusCapture={() => setFocused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false);
      }}
    >
      <div className="logo-loop-heading">
        <h2>{ariaLabel}</h2>
      </div>
      <div className="logo-loop-window">
        <div
          className="logo-loop-track"
          style={{
            animationDuration: `${dimensions.width / Math.max(Math.abs(speed), 1)}s`,
            animationDirection: (direction === "right") !== (speed < 0) ? "reverse" : "normal",
            animationPlayState: stopped ? "paused" : "var(--loop-play, paused)",
          }}
        >
          {Array.from({ length: dimensions.copies }, (_, copy) => (
            <ul
              key={copy}
              ref={copy === 0 ? sequence : undefined}
              aria-hidden={copy > 0}
              inert={copy > 0 ? true : undefined}
              className="logo-loop-sequence"
            >
              {logos.map((logo) => (
                <li key={logo.title}>
                  <span role="img" aria-label={logo.title} title={logo.title}>
                    <span aria-hidden="true">{logo.node}</span>
                  </span>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
}
