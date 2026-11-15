"use client";

import { useState, useEffect, useRef } from "react";
import { Home, User, FolderOpen, FlaskConical, Mail } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const dockItems = [
  { name: "Home", icon: Home, href: "/" },
  { name: "About", icon: User, href: "/about" },
  { name: "Projects", icon: FolderOpen, href: "/projects" },
  { name: "Lab", icon: FlaskConical, href: "/lab" },
  { name: "Contact", icon: Mail, href: "/contact" },
];

export default function Dock() {
  const pathname = usePathname();
  const [pillStyle, setPillStyle] = useState({ left: 0, width: 0, opacity: 0 });
  const itemRefs = useRef([]);
  const navRef = useRef(null);

  useEffect(() => {
    let disposed = false;
    const updatePill = () => {
      if (disposed) return;
      const index = dockItems.findIndex((item) => item.href === pathname);
      const item = itemRefs.current[index];
      const next = item
        ? { left: item.offsetLeft, width: item.offsetWidth, opacity: 1 }
        : { left: 0, width: 0, opacity: 0 };
      setPillStyle((previous) =>
        previous.left === next.left && previous.width === next.width && previous.opacity === next.opacity
          ? previous
          : next
      );
    };
    const frame = requestAnimationFrame(updatePill);
    const observer = new ResizeObserver(updatePill);
    if (navRef.current) observer.observe(navRef.current);
    return () => {
      disposed = true;
      cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, [pathname]);

  return (
    <nav
      ref={navRef}
      aria-label="Primary Navigation"
      className="fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] sm:bottom-7 left-1/2 -translate-x-1/2 z-50 flex items-center gap-1 sm:gap-1.5 p-1.5 sm:p-2 rounded-full bg-zinc-950/80 border border-zinc-800/60 backdrop-blur-xl shadow-2xl shadow-black/80"
    >
      <div
        aria-hidden="true"
        style={pillStyle}
        className="dock-highlight absolute top-1.5 sm:top-2 bottom-1.5 sm:bottom-2 rounded-full bg-zinc-800/80 border border-zinc-700/50 shadow-inner pointer-events-none z-0"
      />
      {dockItems.map(({ name, icon: Icon, href }, index) => (
        <Link
          key={href}
          href={href}
          ref={(element) => { itemRefs.current[index] = element; }}
          aria-label={name}
          aria-current={pathname === href ? "page" : undefined}
          className="dock-link relative group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 rounded-full z-10"
        >
          <span className={`dock-icon p-3 rounded-full flex items-center justify-center ${pathname === href ? "text-white" : "text-zinc-500 hover:text-zinc-200"}`}>
            <Icon className="w-5 h-5" aria-hidden="true" />
          </span>
          <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-md bg-zinc-900 border border-zinc-800 text-[10px] font-mono text-zinc-300 uppercase tracking-widest opacity-0 sm:group-hover:opacity-100 group-focus-visible:opacity-100 sm:group-hover:-translate-y-0.5 transition-all duration-200 pointer-events-none whitespace-nowrap shadow-xl">{name}</span>
        </Link>
      ))}
    </nav>
  );
}
