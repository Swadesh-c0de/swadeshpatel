"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Terminal } from "lucide-react";

export default function NotFound() {
  return (
    <div className="w-full max-w-xl px-4 sm:px-6 pt-32 pb-32 mx-auto min-h-screen flex flex-col items-center justify-center text-center text-zinc-100">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/60 border border-zinc-800/60 text-zinc-500 text-xs font-mono uppercase tracking-widest">
          <Terminal className="w-3.5 h-3.5" />
          <span>Error 404</span>
        </div>

        <h1 className="text-6xl sm:text-7xl font-black tracking-tighter text-white leading-none">
          PAGE NOT<br />FOUND.
        </h1>

        <p className="text-zinc-500 text-sm sm:text-base font-light max-w-sm mx-auto leading-relaxed">
          The requested coordinate does not exist in this workspace or has been moved to another index.
        </p>

        <div className="pt-2">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-zinc-100 text-zinc-950 font-medium text-xs sm:text-sm hover:bg-white hover:scale-105 transition-all duration-300 shadow-lg shadow-white/10"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return Home</span>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
