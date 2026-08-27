"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Terminal, FlaskConical } from "lucide-react";
import { labItems } from "@/data/lab";

export default function LabClient() {
    return (
        <div className="w-full max-w-5xl px-4 sm:px-6 pt-24 sm:pt-32 pb-32 mx-auto min-h-screen text-zinc-100">

            {/* HEADER SECTION */}
            <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-16 sm:mb-20 space-y-6 max-w-2xl"
            >
                <h1 className="text-6xl sm:text-7xl md:text-8xl font-black tracking-tighter text-white leading-[0.88]">
                    THE<br />LAB.
                </h1>

                <p className="text-zinc-500 text-base sm:text-lg font-light leading-relaxed">
                    A digital playground of experimental configurations, dotfiles, shell scripts, explorations, and architectural artifacts.
                </p>
            </motion.div>
            {/* LAB GRID */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="space-y-6"
            >
                <div className="flex items-center justify-between border-b border-zinc-900 pb-4">
                    <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-zinc-500 font-medium">Experiments &amp; Configurations</h2>
                    <span className="text-xs font-mono text-zinc-600">Open Source</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 w-full">
                    {labItems.map((item, idx) => (
                        <a
                            key={idx}
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-6 sm:p-7 rounded-3xl bg-zinc-950/40 border border-zinc-800/40 hover:border-zinc-700/60 hover:bg-zinc-900/30 transition-all duration-300 flex flex-col justify-between group"
                        >
                            <div>
                                <div className="flex justify-between items-start mb-8">
                                    <div className="p-2.5 rounded-xl bg-zinc-900/60 border border-zinc-800/60 text-zinc-400 group-hover:text-white group-hover:border-zinc-700 transition-all">
                                        <Terminal className="w-5 h-5" />
                                    </div>
                                    <ArrowUpRight className="w-4 h-4 text-zinc-600 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                                </div>

                                <div className="space-y-1.5">
                                    <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block">
                                        {item.tag}
                                    </span>
                                    <h3 className="text-base font-bold text-zinc-200 group-hover:text-white transition-colors tracking-tight">
                                        {item.title}
                                    </h3>
                                    <p className="text-xs text-zinc-400 font-light leading-relaxed pt-1">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </motion.div>

        </div>
    );
}
