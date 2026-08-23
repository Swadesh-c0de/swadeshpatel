"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
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

  useEffect(() => {
    const activeIndex = dockItems.findIndex((item) => item.href === pathname);
    if (activeIndex !== -1 && itemRefs.current[activeIndex]) {
      const el = itemRefs.current[activeIndex];
      setPillStyle({
        left: el.offsetLeft,
        width: el.offsetWidth,
        opacity: 1,
      });
    } else {
      setPillStyle((prev) => ({ ...prev, opacity: 0 }));
    }
  }, [pathname]);

  return (
    <nav
      className="fixed bottom-5 sm:bottom-7 left-1/2 -translate-x-1/2 z-50 flex items-center gap-1 sm:gap-1.5 p-1.5 sm:p-2 rounded-full bg-zinc-950/80 border border-zinc-800/60 backdrop-blur-xl shadow-2xl shadow-black/80"
    >
      {/* Moving Active Pill - Strictly Horizontal, zero vertical scroll glitch */}
      <motion.div
        animate={{
          left: pillStyle.left,
          width: pillStyle.width,
          opacity: pillStyle.opacity,
        }}
        transition={{
          type: "spring",
          stiffness: 380,
          damping: 30,
        }}
        className="absolute top-1.5 sm:top-2 bottom-1.5 sm:bottom-2 rounded-full bg-zinc-800/80 border border-zinc-700/50 shadow-inner pointer-events-none"
      />

      {dockItems.map((item, idx) => {
        const Icon = item.icon;
        const active = pathname === item.href;

        return (
          <Link
            key={item.name}
            href={item.href}
            ref={(el) => (itemRefs.current[idx] = el)}
            aria-label={item.name}
            className="relative group focus:outline-none z-10"
          >
            <motion.div
              whileHover={{ scale: 1.08, y: -2 }}
              whileTap={{ scale: 0.94 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className={`p-2.5 sm:p-3 rounded-full flex items-center justify-center transition-colors duration-200 ${
                active ? "text-white" : "text-zinc-500 hover:text-zinc-200"
              }`}
            >
              {/* Inactive Hover Background */}
              {!active && (
                <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 bg-zinc-900/60 transition-opacity -z-10" />
              )}

              <Icon className="w-5 h-5 relative z-10" />
            </motion.div>

            {/* Monospace Hover Tooltip */}
            <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-md bg-zinc-900 border border-zinc-800 text-[10px] font-mono text-zinc-300 uppercase tracking-widest opacity-0 group-hover:opacity-100 group-hover:-translate-y-0.5 transition-all duration-200 pointer-events-none whitespace-nowrap shadow-xl">
              {item.name}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
