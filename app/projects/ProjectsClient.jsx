import PageWebs from "@/components/PageWebs";
import { ArrowUpRight, Music, Terminal, Play, Radio, Mic2, MessageCircle, ShieldCheck, Zap, Globe } from "lucide-react";
import { FaGithub } from "react-icons/fa";

import LivePreview from "@/components/LivePreview";
import ProjectArchive from "@/components/ProjectArchive";
import { dChatProject as dChat, vibeFiProject as vibeFi } from "@/data/projects";

export default function ProjectsClient() {
    return (
        <div className="page-container pt-24 sm:pt-32 pb-32 flex flex-col items-center min-h-screen text-zinc-100">
            <PageWebs variant="projects" />

            {/* HEADER */}
            <div
                className="text-center mb-16 sm:mb-20 w-full space-y-4"
            >
                <h1 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tighter text-white leading-[0.88]">
                    SELECTED<br className="sm:hidden" /> WORK.
                </h1>
                <p className="text-zinc-400 text-base sm:text-lg max-w-xl mx-auto font-light leading-relaxed">
                    A showcase of high-performance web applications, terminal tools, and system architecture.
                </p>
            </div>

            {/* HERO PROJECT: dCHAT */}
            <div
                className="w-full mb-12 sm:mb-16"
            >
                <div className="relative w-full bg-zinc-950/40 border border-zinc-800/40 hover:border-zinc-700/60 backdrop-blur-sm rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 p-1 transition-all duration-300">

                    {/* Content Side */}
                    <div className="p-5 sm:p-10 lg:p-12 flex flex-col justify-center">
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

                        <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2.5 sm:gap-3">
                            <HeroActionBtn
                                href={dChat.live}
                                icon={<ArrowUpRight className="w-4 h-4" />}
                                label="Live Demo"
                                primary
                            />
                            <HeroActionBtn
                                href={dChat.github}
                                icon={<FaGithub className="w-4 h-4" />}
                                label="Source Code"
                            />
                        </div>
                    </div>

                    <div className="relative flex items-center justify-center p-4 sm:p-8 lg:p-10 min-h-[360px]">
                        <LivePreview url={dChat.live} title={dChat.title} />
                    </div>

                </div>
            </div>


            {/* HERO PROJECT: VIBE-FI */}
            <div
                className="w-full mb-16 sm:mb-20"
            >
                <div className="relative w-full bg-zinc-950/40 border border-zinc-800/40 hover:border-zinc-700/60 backdrop-blur-sm rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 p-1 transition-all duration-300">

                    {/* Content Side */}
                    <div className="p-5 sm:p-10 lg:p-12 flex flex-col justify-center">
                        <div className="flex items-center gap-2.5 mb-5 flex-wrap">
                            <span className="px-2.5 py-1 rounded-md bg-zinc-900/60 border border-zinc-800/60 text-zinc-400 text-[11px] font-mono">Go</span>
                            <span className="px-2.5 py-1 rounded-md bg-zinc-900/60 border border-zinc-800/60 text-zinc-400 text-[11px] font-mono">Bubble Tea</span>
                            <span className="px-2.5 py-1 rounded-md bg-zinc-900/60 border border-zinc-800/60 text-zinc-400 text-[11px] font-mono">libmpv</span>
                            <span className="px-2.5 py-1 rounded-md bg-zinc-900/60 border border-zinc-800/60 text-zinc-400 text-[11px] font-mono">TUI</span>
                        </div>

                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3 tracking-tight">Vibe-Fi</h2>
                        <p className="text-zinc-400 text-sm sm:text-base font-light leading-relaxed mb-8">
                            A high-performance terminal music player re-engineered in Go with Charm&apos;s Bubble Tea Elm architecture. Features hardware-accelerated playback via libmpv, YouTube streaming with gapless stream caching, a 60 FPS live spectrum visualizer, synchronized LRC lyrics, native Linux MPRIS media controls, and a companion documentation web portal.
                        </p>

                        <div className="grid grid-cols-2 gap-3.5 mb-8">
                            <FeatureItem icon={<Terminal className="w-4 h-4" />} label="Go & Bubble Tea" />
                            <FeatureItem icon={<Music className="w-4 h-4" />} label="libmpv Audio" />
                            <FeatureItem icon={<Radio className="w-4 h-4" />} label="60 FPS Visualizer" />
                            <FeatureItem icon={<Mic2 className="w-4 h-4" />} label="Synced LRC Lyrics" />
                        </div>

                        <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2.5 sm:gap-3">
                            <HeroActionBtn
                                href={vibeFi.live}
                                icon={<ArrowUpRight className="w-4 h-4" />}
                                label="Live Docs"
                                primary
                                className="col-span-2 sm:col-span-1"
                            />
                            <HeroActionBtn
                                href={vibeFi.github}
                                icon={<FaGithub className="w-4 h-4" />}
                                label="Go CLI"
                            />
                        </div>
                    </div>

                    {/* Visual Side (TUI Player Mock) */}
                    <div className="relative overflow-hidden flex items-center justify-center p-4 sm:p-8 lg:p-10 min-h-[360px] lg:h-auto">
                        <div className="w-full max-w-sm bg-black/60 backdrop-blur-sm border border-zinc-800/50 rounded-2xl flex flex-col relative z-10 transition-transform hover:-translate-y-0.5 duration-300 overflow-hidden">
                            <div className="px-4 py-3 border-b border-zinc-800/50 flex justify-between items-center bg-zinc-900/30">
                                <span className="text-zinc-400 font-mono text-[10px] uppercase tracking-widest flex items-center gap-2">
                                    <Terminal className="w-3 h-3 text-zinc-400" />
                                    vibe_fi :: audio
                                </span>
                                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-zinc-900/60 border border-zinc-800/60 text-zinc-400">
                                    Go · TUI
                                </span>
                            </div>

                            <div className="p-6 sm:p-7 flex-1 space-y-6">
                                <div className="text-center space-y-1">
                                    <p className="text-white font-medium text-base tracking-tight">Resonance</p>
                                    <p className="text-zinc-400 text-xs font-light">HOME</p>
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

                                    <div className="flex justify-between items-center text-[10px] font-mono text-zinc-400">
                                        <span>01:42</span>
                                        <Play className="w-3.5 h-3.5 text-zinc-300 fill-zinc-300" />
                                        <span>03:32</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <ProjectArchive />

        </div>
    );
}


function FeatureItem({ icon, label }) {
    return (
        <div className="flex items-center gap-2 text-zinc-400">
            <span className="text-zinc-400">{icon}</span>
            <span className="text-xs sm:text-sm font-light">{label}</span>
        </div>
    );
}

function HeroActionBtn({ href, icon, label, primary, className = "" }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3.5 sm:px-5 py-2.5 rounded-full text-[11px] sm:text-xs font-mono uppercase tracking-wider transition-all duration-300 text-center whitespace-nowrap
          ${primary
                    ? "bg-zinc-100 text-zinc-950 font-medium hover:bg-white hover:scale-105 shadow-md shadow-white/5"
                    : "bg-zinc-900/60 text-zinc-400 border border-zinc-800/70 hover:text-white hover:bg-zinc-800 hover:border-zinc-700"} ${className}`}
        >
            {icon}
            <span>{label}</span>
        </a>
    );
}
