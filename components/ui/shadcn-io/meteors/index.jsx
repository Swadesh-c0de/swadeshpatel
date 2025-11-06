"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export const Meteors = ({
  number = 20,
  minDelay = 0.2,
  maxDelay = 1.2,
  minDuration = 2,
  maxDuration = 10,
  angle = -55,
  className,
}) => {
  const [meteorStyles, setMeteorStyles] = useState([]);

  useEffect(() => {
    const styles = Array.from({ length: number }).map(() => {
      const duration = Math.random() * (maxDuration - minDuration) + minDuration;
      const delay = Math.random() * (maxDelay - minDelay) + minDelay;
      const left = Math.floor(Math.random() * window.innerWidth);
      const distance = Math.random() * 700 + 800; // 400–1100px travel distance

      return {
        "--angle": `${angle}deg`,
        "--duration": `${duration}s`,
        "--distance": `-${distance}px`,
        // top: `${Math.random() * 10 - 5}%`,
        top: "-1%",
        left: `${left + 450}px`,
        animationDelay: `${delay}s`,
      };
    });

    setMeteorStyles(styles);
  }, [number, minDelay, maxDelay, minDuration, maxDuration, angle]);

  return (
    <>
      {meteorStyles.map((style, idx) => (
        <span
          key={idx}
          style={style}
          className={cn(
            "pointer-events-none fixed size-0.5 rounded-full bg-zinc-400 shadow-[0_0_6px_2px_#ffffff30] animate-meteor",
            className
          )}
        >
          <div className="absolute top-1/2 -z-10 h-px w-[60px] -translate-y-1/2 bg-linear-to-r from-zinc-400 to-transparent" />
        </span>
      ))}
    </>
  );
};
