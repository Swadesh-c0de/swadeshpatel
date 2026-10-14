"use client";

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

  return (
    <nav
      aria-label="Primary Navigation"
      className="fixed bottom-5 sm:bottom-7 left-1/2 -translate-x-1/2 z-50 flex items-center gap-1 sm:gap-1.5 p-1.5 sm:p-2 rounded-full bg-zinc-950/80 border border-zinc-800/60 backdrop-blur-xl shadow-2xl shadow-black/80"
    >
      {dockItems.map((item) => {
        const Icon = item.icon;
        const active = pathname === item.href;

        return (
          <Link
            key={item.name}
            href={item.href}
            aria-label={item.name}
            aria-current={active ? "page" : undefined}
            className="relative group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 rounded-full z-10"
          >
            {active && (
              <motion.div
                layoutId="dock-active-pill"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
                className="absolute inset-0 rounded-full bg-zinc-800/80 border border-zinc-700/50 shadow-inner pointer-events-none -z-10"
              />
            )}

            <motion.div
              whileHover={{ scale: 1.08, y: -2 }}
              whileTap={{ scale: 0.94 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className={`p-2.5 sm:p-3 rounded-full flex items-center justify-center transition-colors duration-200 ${
                active ? "text-white" : "text-zinc-500 hover:text-zinc-200"
              }`}
            >
              {!active && (
                <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 bg-zinc-900/60 transition-opacity -z-10" />
              )}
              <Icon className="w-5 h-5 relative z-10" />
            </motion.div>

            <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-md bg-zinc-900 border border-zinc-800 text-[10px] font-mono text-zinc-300 uppercase tracking-widest opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 group-hover:-translate-y-0.5 transition-all duration-200 pointer-events-none whitespace-nowrap shadow-xl">
              {item.name}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
