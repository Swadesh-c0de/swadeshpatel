"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github, Code2, Music, Terminal, Play, Radio, Mic2, MessageCircle, ShieldCheck, Zap, Globe } from "lucide-react";
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


            {/* HERO PROJECT: dCHAT */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="w-full mb-16 sm:mb-24 relative group"
            >

                <div className="relative w-full bg-zinc-900/40 border border-zinc-800/80 backdrop-blur-xl rounded-4xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 p-1">

                    {/* Content Side */}
                    <div className="p-8 sm:p-12 lg:p-16 flex flex-col justify-center order-2 lg:order-1">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="px-3 py-1 rounded-full bg-zinc-500/10 text-emerald-300 text-xs font-mono border border-emerald-500/20">Next.js</span>
                            <span className="px-3 py-1 rounded-full bg-zinc-500/10 text-blue-300 text-xs font-mono border border-blue-500/20">Web3</span>
                        </div>

                        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-tight">dChat</h2>
                        <p className="text-zinc-400 text-lg leading-relaxed mb-8">
                            A decentralized, real-time chat application with robust end-to-end encryption. Built on top of XMTP to provide secure, wallet-to-wallet messaging for the modern Web3 ecosystem.
                        </p>

                        <div className="grid grid-cols-2 gap-4 mb-10">
                            <FeatureItem icon={<ShieldCheck className="w-5 h-5" />} label="E2E Encryption" />
                            <FeatureItem icon={<Globe className="w-5 h-5" />} label="Decentralized" />
                            <FeatureItem icon={<Zap className="w-5 h-5" />} label="Real-time Sync" />
                            <FeatureItem icon={<MessageCircle className="w-5 h-5" />} label="XMTP Protocol" />
                        </div>

                        <div className="flex flex-wrap gap-4">
                            <HeroActionBtn
                                href="https://d-chatapp.vercel.app"
                                icon={<ArrowUpRight className="w-5 h-5" />}
                                label="Live Demo"
                                primary
                            />
                            <HeroActionBtn
                                href="https://github.com/Swdesh-c0de/dChat"
                                icon={<FaGithub className="w-5 h-5" />}
                                label="View Source"
                            />
                        </div>
                    </div>

                    {/* Visual Side (Live Iframe) */}
                    <div className="bg-zinc-950 relative overflow-hidden flex items-center justify-center order-1 lg:order-2 h-96 lg:h-auto min-h-[400px]">
                        <div className="w-full h-full p-2 sm:p-4 opacity-80 hover:opacity-100 transition-opacity duration-300">
                            <div className="w-full h-full border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl relative">
                                {/* Browser Toolbar Mock */}
                                <div className="h-8 bg-zinc-900 border-b border-zinc-800 flex items-center px-4 gap-2 w-full absolute top-0 z-10">

                                    <div className="mx-auto px-2 py-1 bg-zinc-800 rounded-full h-4 w-auto flex items-center justify-center">
                                        <span className="text-[10px] text-zinc-500 font-mono">d-chatapp.vercel.app</span>
                                    </div>
                                </div>
                                <iframe
                                    src="https://d-chatapp.vercel.app"
                                    className="w-full h-full pt-8 scale-[0.85] origin-top md:scale-100"
                                    title="dChat Live Demo"
                                    allow="clipboard-write"
                                    sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                                ></iframe>
                                <div className="absolute inset-0 bg-transparent pointer-events-none rounded-2xl ring-1 ring-inset ring-white/10" />
                            </div>
                        </div>
                    </div>

                </div>
            </motion.div>


            {/* HERO PROJECT: VIBE-FI */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="w-full mb-16 sm:mb-24 relative group"
            >

                <div className="relative w-full bg-zinc-900/40 border border-zinc-800/80 backdrop-blur-xl rounded-4xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 p-1">

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

                    {/* Visual Side (Mockup - Ultra Clean) */}
                    <div className="bg-zinc-950/40 relative overflow-hidden flex items-center justify-center p-6 sm:p-10 order-1 lg:order-2 min-h-[400px] lg:h-auto">

                        {/* Minimalist Player Widget */}
                        <div className="w-full max-w-sm bg-black/50 backdrop-blur-sm border border-zinc-800/60 rounded-2xl flex flex-col relative z-10 transition-transform hover:-translate-y-1 duration-500 overflow-hidden">

                            {/* Header */}
                            <div className="px-5 py-4 border-b border-zinc-800/50 flex justify-between items-center bg-zinc-900/20">
                                <span className="text-zinc-500 font-mono text-[10px] uppercase tracking-widest flex items-center gap-2">
                                    <Terminal className="w-3 h-3" />
                                    vibe_fi
                                </span>
                            </div>

                            <div className="p-6 sm:p-8 flex-1 space-y-8">

                                {/* Track Info - Clean Typography */}
                                <div className="text-center space-y-1.5">
                                    <p className="text-white font-medium text-lg tracking-tight">Resonance</p>
                                    <p className="text-zinc-500 text-sm font-light">HOME</p>
                                </div>

                                {/* CSS-animated visualizer bars (Hardware Accelerated & Minimal) */}
                                <style dangerouslySetInnerHTML={{
                                    __html: `
                                    @keyframes vbar-clean {
                                        0% { transform: scaleY(0.15); opacity: 0.3; }
                                        100% { transform: scaleY(var(--scale)); opacity: 1; }
                                    }
                                    .visualizer-clean {
                                        animation: vbar-clean var(--dur) ease-in-out infinite alternate;
                                        transform-origin: bottom;
                                    }
                                `}} />
                                <div className="h-16 flex items-end justify-center gap-[3px] py-1">
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

                                {/* Progress Section */}
                                <div className="space-y-3 pt-2">
                                    {/* Timeline */}
                                    <div className="w-full bg-zinc-900 border border-zinc-800/80 h-1.5 rounded-full overflow-hidden relative">
                                        <div className="absolute top-0 left-0 w-[45%] h-full bg-zinc-300"></div>
                                    </div>

                                    {/* Timestamps */}
                                    <div className="flex justify-between items-center">
                                        <span className="text-zinc-500 font-mono text-[10px]">01:42</span>
                                        <Play className="w-4 h-4 text-zinc-300 fill-zinc-300" />
                                        <span className="text-zinc-500 font-mono text-[10px]">03:32</span>
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* Subtle Ambient Glow */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[radial-gradient(circle,rgba(255,255,255,0.03)_0%,transparent_70%)] pointer-events-none"></div>
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