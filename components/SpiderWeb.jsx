"use client";

import { useId, useRef } from "react";

import { threadPath, webStyle as style } from "@/lib/spider-web";
import useSpiderMotion from "@/hooks/useSpiderMotion";

// Tapered, angular legs echo the long silhouette of a spider emblem.
const LEGS = [
  "M-3 -6 L-12 -14 L-17 -37 L-17 -18 L-7 -3 Z",
  "M-4 -3 L-22 -13 L-29 -28 L-25 -9 L-5 1 Z",
  "M-4 1 L-24 12 L-29 31 L-20 16 L-3 5 Z",
  "M-3 5 L-13 20 L-15 43 L-9 23 L-1 9 Z",
];

export default function SpiderWeb() {
  const { hub, restY, scale } = style;
  const root = useRef(null);
  const silk = useRef(null);
  const spider = useRef(null);
  const id = useId().replaceAll(":", "");

  useSpiderMotion({ root, silk, spider });

  return (
    <div ref={root} className="spider-web" data-web-position={style.mirror ? "left" : "right"} aria-hidden="true">
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
          <g stroke={`url(#${id}-silk)`} strokeLinecap="round" strokeWidth={style.stroke}>
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
