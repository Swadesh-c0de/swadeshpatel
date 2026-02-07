"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github, Code2, Music, Terminal, Play, Radio, Mic2 } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export default function Projects() {
    const projects = [
        {
            title: "Contacts Management System Backend API",
            desc: "A robust Node.js/Express backend for contact management with JWT auth and MongoDB.",
            stack: ["Express.js", "MongoDB", "JWT", "REST API", "BCRYPT"],
            links: { github: "https://github.com/Swadesh-c0de/contacts-management-system-backend", live: null },
            type: "Backend"
        },
        {
            title: "Arch Linux Config",
            desc: "Personal dotfiles and system configuration scripts for a customized Arch Linux environment.",
            stack: ["Bash", "KDE", "Kitty"],
            links: { github: "https://github.com/Swadesh-c0de/myArchLinuxConfiguration", live: null },
            type: "System"
        }
    ];

    return (
        <div className="w-full max-w-6xl px-4 sm:px-6 pt-24 sm:pt-32 pb-32 flex flex-col items-center min-h-screen">

            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16 sm:mb-24 w-full"
            >
                <h1 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tighter mb-6 text-white">SELECTED WORK</h1>
                <p className="text-zinc-500 text-lg sm:text-xl max-w-2xl mx-auto font-light leading-relaxed">
                    A showcase of high-performance tools, creative coding, and system architecture.
                </p>
            </motion.div>


            {/* HERO PROJECT: VIBE-FI */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="w-full mb-16 sm:mb-24 relative group"
            >

                <div className="relative w-full bg-zinc-900/40 border border-zinc-800/80 backdrop-blur-xl rounded-[2rem] overflow-hidden grid grid-cols-1 lg:grid-cols-2 p-1">

                    {/* Content Side */}
                    <div className="p-8 sm:p-12 lg:p-16 flex flex-col justify-center order-2 lg:order-1">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="px-3 py-1 rounded-full bg-zinc-500/10 text-purple-300 text-xs font-mono border border-purple-500/20">C++</span>
                            <span className="px-3 py-1 rounded-full bg-zinc-500/10 text-cyan-300 text-xs font-mono border border-cyan-500/20">TUI</span>
                        </div>

                        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-tight">Vibe-Fi <Music className="inline" /></h2>
                        <p className="text-zinc-400 text-lg leading-relaxed mb-8">
                            A beautiful terminal-based music player designed for modern developers. Seamlessly integrates YouTube search, local library browsing, and a retro-futuristic audio visualizer into a high-performance keyboard-driven interface.
                        </p>

                        <div className="grid grid-cols-2 gap-4 mb-10">
                            <FeatureItem icon={<Terminal className="w-5 h-5" />} label="Modern TUI" />
                            <FeatureItem icon={<Music className="w-5 h-5" />} label="YT Integration" />
                            <FeatureItem icon={<Radio className="w-5 h-5" />} label="Visualizer" />
                            <FeatureItem icon={<Mic2 className="w-5 h-5" />} label="Synced Lyrics" />
                        </div>

                        <div className="flex flex-wrap gap-4">
                            <HeroActionBtn
                                href="https://github.com/Swadesh-c0de/vibe-fi"
                                icon={<FaGithub className="w-5 h-5" />}
                                label="View Source"
                                primary
                            />
                        </div>
                    </div>

                    {/* Visual Side (Mockup) */}
                    <div className="bg-zinc-950/50 relative overflow-hidden flex items-center justify-center p-2 order-1 lg:order-2 h-64 lg:h-auto">
                        {/* Abstract Terminal UI representation */}
                        <div className="w-full max-w-sm h-min bg-black border border-zinc-800 rounded-xl p-2 sm:p-4 font-mono text-xs text-zinc-500 flex flex-col shadow-2xl relative">
                            <div className="flex items-center gap-2 mb-4 border-b border-zinc-900 pb-2">
                                <div className="flex gap-1.5">
                                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/60"></div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60"></div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/60"></div>
                                </div>
                                <span className="ml-2 text-zinc-400">user@arch: ~/vibe-fi</span>
                            </div>
                            <div className="flex-1 space-y-2">
                                <div className="flex justify-between text-zinc-400">
                                    <span>Now Playing: <span className="text-white">Lo-Fi beats</span></span>
                                    <span>02:45 / 04:20</span>
                                </div>
                                {/* Fake visualizer bars */}
                                <div className="h-24 flex items-end gap-1 justify-center py-4">
                                    {[...Array(20)].map((_, i) => (
                                        <div key={i} className="w-2 bg-gradient-to-t from-purple-500 to-cyan-500 rounded-sm" style={{ height: `${Math.max(20, (Math.sin(i * 0.5) * 50 + 50))}%` }}></div>
                                    ))}
                                </div>
                                <div className="w-full bg-zinc-900 h-1.5 rounded-full overflow-hidden">
                                    <div className="w-2/3 h-full bg-white"></div>
                                </div>
                            </div>

                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50" />
                        </div>
                    </div>

                </div>
            </motion.div>


            {/* GRID FOR OTHER PROJECTS */}
            <h3 className="text-xl font-mono text-zinc-500 mb-8 self-start uppercase tracking-widest pl-2">Other Experiments</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                {projects.map((project, index) => (
                    <GlassProjectCard key={index} project={project} index={index} />
                ))}
            </div>

        </div>
    );
}

function GlassProjectCard({ project, index }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ y: -5 }}
            className="group bg-zinc-900/20 border border-zinc-800/60 backdrop-blur-md rounded-2xl p-6 hover:bg-zinc-900/40 hover:border-zinc-700 transition-all duration-300"
        >
            <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-zinc-900 rounded-xl border border-zinc-800 text-zinc-300 group-hover:text-white group-hover:border-zinc-600 transition-colors">
                    <Code2 className="w-6 h-6" />
                </div>
                <div className="flex gap-2">
                    {project.links.github && (
                        <a href={project.links.github} className="text-zinc-600 hover:text-white transition-colors">
                            <Github className="w-5 h-5" />
                        </a>
                    )}
                    {project.links.live && (
                        <a href={project.links.live} className="text-zinc-600 hover:text-white transition-colors">
                            <ArrowUpRight className="w-5 h-5" />
                        </a>
                    )}
                </div>
            </div>

            <h4 className="text-xl font-bold text-zinc-200 mb-2 group-hover:text-white transition-colors">{project.title}</h4>
            <p className="text-zinc-500 text-sm leading-relaxed mb-6 group-hover:text-zinc-400 transition-colors">
                {project.desc}
            </p>

            <div className="flex flex-wrap gap-2 mt-auto">
                {project.stack.map(tech => (
                    <span key={tech} className="text-[10px] uppercase tracking-wider font-bold text-zinc-600 border border-zinc-800 px-2 py-1 rounded bg-zinc-950/30">
                        {tech}
                    </span>
                ))}
            </div>
        </motion.div>
    );
}

function FeatureItem({ icon, label }) {
    return (
        <div className="flex items-center gap-2 text-zinc-400">
            <span className="text-zinc-600">{icon}</span>
            <span className="text-sm">{label}</span>
        </div>
    )
}

function HeroActionBtn({ href, icon, label, primary }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener"
            className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 
          ${primary
                    ? "bg-white text-black hover:bg-zinc-200 shadow-lg shadow-white/5"
                    : "bg-zinc-900 text-zinc-400 border border-zinc-800 hover:text-white hover:border-zinc-700"}`}
        >
            {icon}
            {label}
        </a>
    )
}