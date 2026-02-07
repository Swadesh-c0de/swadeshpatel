"use client";

import { motion } from "framer-motion";
import { FlaskConical, Gamepad2, Files, Music, Terminal, Cpu, Archive } from "lucide-react";

export default function Extras() {
    const extras = [
        {
            title: "Playground",
            desc: "Experimental UI components and micro-interactions.",
            icon: <Gamepad2 className="w-6 h-6 text-purple-400" />,
            status: "In Progress",
        },
        {
            title: "Snippets",
            desc: "Collection of useful code blocks and patterns.",
            icon: <Files className="w-6 h-6 text-blue-400" />,
            status: "Coming Soon",
        },
        {
            title: "Dotfiles",
            desc: "My personal Arch Linux configuration files.",
            icon: <Terminal className="w-6 h-6 text-green-400" />,
            status: "Available",
            link: "https://github.com/Swadesh-c0de/myArchLinuxConfiguration"
        },
        {
            title: "Wallpapers",
            desc: "Curated list of aesthetic wallpapers.",
            icon: <Archive className="w-6 h-6 text-yellow-400" />,
            status: "Coming Soon",
        }
    ];

    return (
        <div className="w-full max-w-6xl px-4 sm:px-6 pt-32 pb-20 mx-auto min-h-screen">

            {/* HEADER */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-20 flex flex-col items-center text-center"
            >
                <div className="mb-6 p-4 rounded-full bg-zinc-900/50 border border-zinc-800">
                    <FlaskConical className="w-8 h-8 text-zinc-400" />
                </div>
                <h1 className="text-5xl sm:text-7xl font-black tracking-tighter mb-6 text-white">THE LAB</h1>
                <p className="text-zinc-500 text-lg sm:text-xl max-w-xl font-light">
                    A collection of experiments, configurations, and digital artifacts that don't fit anywhere else.
                </p>
            </motion.div>

            {/* GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {extras.map((item, i) => (
                    <ExtraCard key={i} item={item} index={i} />
                ))}
            </div>

        </div>
    );
}

function ExtraCard({ item, index }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 + 0.2, duration: 0.5 }}
            whileHover={{ y: -5 }}
            className="group relative p-8 bg-zinc-900/20 border border-zinc-800/60 backdrop-blur-sm rounded-3xl hover:bg-zinc-900/40 hover:border-zinc-700 transition-all duration-300"
        >
            <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-zinc-950 rounded-2xl border border-zinc-800/50 group-hover:border-zinc-700 transition-colors">
                    {item.icon}
                </div>
                <span className={`text-[10px] font-mono uppercase tracking-widest px-2 py-1 rounded-full border ${item.status === "Available"
                    ? "bg-green-500/10 text-green-400 border-green-500/20"
                    : "bg-zinc-800 text-zinc-500 border-zinc-700"
                    }`}>
                    {item.status}
                </span>
            </div>

            <h3 className="text-xl font-bold text-zinc-200 mb-2 group-hover:text-white transition-colors">{item.title}</h3>
            <p className="text-zinc-500 text-sm leading-relaxed mb-6">
                {item.desc}
            </p>

            {item.link && (
                <a
                    href={item.link}
                    target="_blank"
                    className="inline-flex text-sm text-zinc-400 hover:text-white border-b border-transparent hover:border-white transition-all"
                >
                    View Resource
                </a>
            )}
        </motion.div>
    )
}