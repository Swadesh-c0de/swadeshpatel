"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Music, Terminal, Play, Radio, Mic2, MessageCircle, ShieldCheck, Zap, Globe, Loader2 } from "lucide-react";
import { FaGithub } from "react-icons/fa";

import { allProjects } from "@/data/projects";

export default function ProjectsClient() {
    const [loadIframe, setLoadIframe] = useState(false);
    const projects = allProjects;

    return (
        <div className="w-full max-w-6xl px-4 sm:px-6 pt-24 sm:pt-32 pb-32 flex flex-col items-center min-h-screen text-zinc-100">

            {/* HEADER */}
            <motion.div
                animate={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 15 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-16 sm:mb-20 w-full space-y-4"
            >
                <h1 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tighter text-white leading-[0.88]">
                    SELECTED<br className="sm:hidden" /> WORK.
                </h1>
                <p className="text-zinc-500 text-base sm:text-lg max-w-xl mx-auto font-light leading-relaxed">
                    A showcase of high-performance web applications, terminal tools, and system architecture.
                </p>
            </motion.div>

            {/* HERO PROJECT: dCHAT */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
                className="w-full mb-12 sm:mb-16"
            >
                <div className="relative w-full bg-zinc-950/40 border border-zinc-800/40 hover:border-zinc-700/60 backdrop-blur-sm rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 p-1 transition-all duration-300">

                    {/* Content Side */}
                    <div className="p-7 sm:p-10 lg:p-12 flex flex-col justify-center order-2 lg:order-1">
                        <div className="flex items-center gap-2.5 mb-5">
                            <span className="px-2.5 py-1 rounded-md bg-zinc-900/60 border border-zinc-800/60 text-zinc-400 text-[11px] font-mono">Next.js</span>
                            <span className="px-2.5 py-1 rounded-md bg-zinc-900/60 border border-zinc-800/60 text-zinc-400 text-[11px] font-mono">Web3</span>
                            <span className="px-2.5 py-1 rounded-md bg-zinc-900/60 border border-zinc-800/60 text-zinc-400 text-[11px] font-mono">XMTP</span>
                        </div>

                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3 tracking-tight">dChat</h2>
                        <p className="text-zinc-400 text-sm sm:text-base font-light leading-relaxed mb-8">
                            A decentralized, real-time chat application with robust end-to-end encryption. Built on top of XMTP to provide secure, wallet-to-wallet messaging for the modern Web3 ecosystem.
                        </p>

                        <div className="grid grid-cols-2 gap-3.5 mb-8">
                            <FeatureItem icon={<ShieldCheck className="w-4 h-4" />} label="E2E Encryption" />
                            <FeatureItem icon={<Globe className="w-4 h-4" />} label="Decentralized" />
                            <FeatureItem icon={<Zap className="w-4 h-4" />} label="Real-time Sync" />
                            <FeatureItem icon={<MessageCircle className="w-4 h-4" />} label="XMTP Protocol" />
                        </div>

                        <div className="flex flex-wrap gap-3">
                            <HeroActionBtn
                                href="https://d-chatapp.vercel.app"
                                icon={<ArrowUpRight className="w-4 h-4" />}
                                label="Live Demo"
                                primary
                            />
                            <HeroActionBtn
                                href="https://github.com/Swadesh-c0de/dChat"
                                icon={<FaGithub className="w-4 h-4" />}
                                label="Source Code"
                            />
                        </div>
                    </div>

                    {/* Visual Side (Live Iframe) */}
                    <div className="relative overflow-hidden flex items-center justify-center order-1 lg:order-2 h-80 sm:h-96 lg:h-auto min-h-[360px]">
                        <div className="w-full h-full p-3 sm:p-4 opacity-85 hover:opacity-100 transition-opacity duration-300">
                            <div className="w-full h-full border border-zinc-800/60 rounded-2xl overflow-hidden shadow-2xl relative bg-black">
                                {/* Browser Toolbar Mock */}
                                <div className="h-8 bg-zinc-900/90 border-b border-zinc-800/80 flex items-center px-3.5 gap-2 w-full absolute top-0 z-10">
                                    <div className="mx-auto px-2.5 py-0.5 bg-zinc-950 rounded-full border border-zinc-800/80 flex items-center justify-center">
                                        <span className="text-[10px] text-zinc-500 font-mono">d-chatapp.vercel.app</span>
                                    </div>
                                </div>
                                <motion.div
                                    className="w-full h-full"
                                    onViewportEnter={() => setLoadIframe(true)}
                                    viewport={{ once: true, margin: "200px" }}
                                >
                                    {loadIframe ? (
                                        <iframe
                                            src="https://d-chatapp.vercel.app"
                                            className="w-full h-full pt-8 scale-[0.9] origin-top md:scale-100"
                                            title="dChat Live Demo"
                                            allow="clipboard-write"
                                            sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                                            loading="lazy"
                                        ></iframe>
                                    ) : (
                                        <div className="w-full h-full flex flex-col items-center justify-center bg-zinc-950/50 pt-8">
                                            <Loader2 className="w-6 h-6 text-zinc-700 animate-spin mb-3" />
                                            <span className="text-zinc-600 text-xs font-mono">Loading Demo...</span>
                                        </div>
                                    )}
                                </motion.div>
                            </div>
                        </div>
                    </div>

                </div>
            </motion.div>


            {/* HERO PROJECT: VIBE-FI */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
                className="w-full mb-16 sm:mb-20"
            >
                <div className="relative w-full bg-zinc-950/40 border border-zinc-800/40 hover:border-zinc-700/60 backdrop-blur-sm rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 p-1 transition-all duration-300">

                    {/* Content Side */}
                    <div className="p-7 sm:p-10 lg:p-12 flex flex-col justify-center order-2 lg:order-1">
                        <div className="flex items-center gap-2.5 mb-5">
                            <span className="px-2.5 py-1 rounded-md bg-zinc-900/60 border border-zinc-800/60 text-zinc-400 text-[11px] font-mono">C++</span>
                            <span className="px-2.5 py-1 rounded-md bg-zinc-900/60 border border-zinc-800/60 text-zinc-400 text-[11px] font-mono">TUI</span>
                            <span className="px-2.5 py-1 rounded-md bg-zinc-900/60 border border-zinc-800/60 text-zinc-400 text-[11px] font-mono">Audio Engine</span>
                        </div>

                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3 tracking-tight">Vibe-Fi</h2>
                        <p className="text-zinc-400 text-sm sm:text-base font-light leading-relaxed mb-8">
                            A terminal-based music player designed for developers. Seamlessly integrates YouTube search, local library browsing, and a retro-futuristic audio visualizer into a high-performance keyboard-driven interface.
                        </p>

                        <div className="grid grid-cols-2 gap-3.5 mb-8">
                            <FeatureItem icon={<Terminal className="w-4 h-4" />} label="Keyboard Driven" />
                            <FeatureItem icon={<Music className="w-4 h-4" />} label="YT Search" />
                            <FeatureItem icon={<Radio className="w-4 h-4" />} label="Live Visualizer" />
                            <FeatureItem icon={<Mic2 className="w-4 h-4" />} label="Synced Lyrics" />
                        </div>

                        <div className="flex flex-wrap gap-3">
                            <HeroActionBtn
                                href="https://github.com/Swadesh-c0de/vibe-fi"
                                icon={<FaGithub className="w-4 h-4" />}
                                label="Source Code"
                                primary
                            />
                        </div>
                    </div>

                    {/* Visual Side (TUI Player Mock) */}
                    <div className="relative overflow-hidden flex items-center justify-center p-6 sm:p-10 order-1 lg:order-2 min-h-[360px] lg:h-auto">
                        <div className="w-full max-w-sm bg-black/60 backdrop-blur-sm border border-zinc-800/50 rounded-2xl flex flex-col relative z-10 transition-transform hover:-translate-y-0.5 duration-300 overflow-hidden">
                            <div className="px-4 py-3 border-b border-zinc-800/50 flex justify-between items-center bg-zinc-900/30">
                                <span className="text-zinc-500 font-mono text-[10px] uppercase tracking-widest flex items-center gap-2">
                                    <Terminal className="w-3 h-3" />
                                    vibe_fi :: audio
                                </span>
                            </div>

                            <div className="p-6 sm:p-7 flex-1 space-y-6">
                                <div className="text-center space-y-1">
                                    <p className="text-white font-medium text-base tracking-tight">Resonance</p>
                                    <p className="text-zinc-500 text-xs font-light">HOME</p>
                                </div>

                                <div className="h-14 flex items-end justify-center gap-[3px] py-1">
                                    {[0.4, 0.7, 0.5, 0.9, 0.6, 1.0, 0.8, 0.5, 0.7, 0.4].map((val, i) => (
                                        <div
                                            key={i}
                                            className="w-1.5 h-full bg-zinc-300 rounded-full visualizer-clean"
                                            style={{
                                                '--scale': val,
                                                '--dur': `${0.5 + ((i * 0.13) % 0.5)}s`
                                            }}
                                        />
                                    ))}
                                </div>

                                <div className="space-y-2.5 pt-1">
                                    <div className="w-full bg-zinc-900 border border-zinc-800/80 h-1.5 rounded-full overflow-hidden relative">
                                        <div className="absolute top-0 left-0 w-[45%] h-full bg-zinc-300" />
                                    </div>

                                    <div className="flex justify-between items-center text-[10px] font-mono text-zinc-500">
                                        <span>01:42</span>
                                        <Play className="w-3.5 h-3.5 text-zinc-300 fill-zinc-300" />
                                        <span>03:32</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </motion.div>

            {/* OTHER EXPERIMENTS */}
            <div className="w-full space-y-6">
                <div className="flex items-center justify-between border-b border-zinc-900 pb-4 w-full">
                    <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-zinc-500 font-medium">Other Experiments</h3>
                    <span className="text-xs font-mono text-zinc-600">Archive</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 w-full">
                    {projects.map((project, index) => (
                        <GlassProjectCard key={index} project={project} index={index} />
                    ))}
                </div>
            </div>

        </div>
    );
}

function GlassProjectCard({ project, index }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ y: -3 }}
            className="group relative bg-zinc-950/40 border border-zinc-800/40 hover:border-zinc-700/60 rounded-3xl overflow-hidden p-6 sm:p-7 flex flex-col justify-between transition-all duration-300"
        >
            <div>
                <div className="flex justify-between items-start mb-4">
                    <div className="space-y-1">
                        <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest font-semibold">{project.type}</span>
                        <h4 className="text-lg font-bold text-white tracking-tight leading-tight group-hover:text-zinc-100 transition-colors">{project.title}</h4>
                    </div>
                    <div className="flex gap-1.5 shrink-0">
                        {project.links.github && (
                            <a
                                href={project.links.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 text-zinc-500 hover:text-white transition-colors bg-zinc-900/40 rounded-xl border border-zinc-800/40 hover:border-zinc-700"
                                title="Source Code"
                            >
                                <FaGithub className="w-3.5 h-3.5" />
                            </a>
                        )}
                        {project.links.live && (
                            <a
                                href={project.links.live}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 text-zinc-500 hover:text-white transition-colors bg-zinc-900/40 rounded-xl border border-zinc-800/40 hover:border-zinc-700"
                                title="Live Demo"
                            >
                                <ArrowUpRight className="w-3.5 h-3.5" />
                            </a>
                        )}
                    </div>
                </div>

                <p className="text-zinc-500 text-xs sm:text-sm font-light leading-relaxed mb-6">
                    {project.desc}
                </p>
            </div>

            <div className="pt-3 border-t border-zinc-900/80">
                <div className="flex flex-wrap gap-1.5">
                    {project.stack.map(tech => (
                        <span
                            key={tech}
                            className="px-2 py-0.5 rounded-md bg-zinc-900/30 border border-zinc-800/40 text-[10px] font-mono text-zinc-400 hover:text-white transition-colors"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}

function FeatureItem({ icon, label }) {
    return (
        <div className="flex items-center gap-2 text-zinc-400">
            <span className="text-zinc-600">{icon}</span>
            <span className="text-xs sm:text-sm font-light">{label}</span>
        </div>
    );
}

function HeroActionBtn({ href, icon, label, primary }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-300
          ${primary
                    ? "bg-zinc-100 text-zinc-950 font-medium hover:bg-white hover:scale-105 shadow-md shadow-white/5"
                    : "bg-zinc-900/60 text-zinc-400 border border-zinc-800/70 hover:text-white hover:bg-zinc-800 hover:border-zinc-700"}`}
        >
            {icon}
            <span>{label}</span>
        </a>
    );
}
