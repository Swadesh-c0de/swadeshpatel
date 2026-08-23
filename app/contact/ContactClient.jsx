"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import { socialLinks } from "@/data/socials";

export default function ContactClient() {
    const socials = [
        {
            platform: "X (Twitter)",
            handle: "@swadeshcodes",
            href: socialLinks.x,
            icon: <FaXTwitter className="w-5 h-5" />
        },
        {
            platform: "GitHub",
            handle: "@Swadesh-c0de",
            href: socialLinks.github,
            icon: <FaGithub className="w-5 h-5" />
        },
        {
            platform: "LinkedIn",
            handle: "@SwadeshPatel",
            href: socialLinks.linkedin,
            icon: <FaLinkedin className="w-5 h-5" />
        }
    ];

    return (
        <div className="w-full max-w-4xl px-4 sm:px-6 pt-24 sm:pt-32 pb-32 mx-auto min-h-screen flex flex-col justify-center text-zinc-100">

            {/* HEADER */}
            <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-16 sm:mb-20 space-y-4"
            >
                <h1 className="text-6xl sm:text-7xl md:text-8xl font-black tracking-tighter text-white leading-[0.88]">
                    LET'S<br />CONNECT.
                </h1>
                <p className="text-zinc-500 text-base sm:text-lg max-w-lg font-light leading-relaxed">
                    Interested in collaborating or discussing systems, Linux, and web architecture? Reach out across platforms.
                </p>
            </motion.div>

            {/* CHANNELS GRID (3 Columns) */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 w-full mb-10"
            >
                {socials.map((item, idx) => (
                    <a
                        key={idx}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-6 sm:p-7 rounded-3xl bg-zinc-950/40 border border-zinc-800/40 hover:border-zinc-700/60 transition-all duration-300 flex flex-col justify-between group"
                    >
                        <div className="flex justify-between items-start mb-10">
                            <div className="p-3 text-zinc-400 group-hover:text-white transition-colors">
                                {item.icon}
                            </div>
                            <ArrowUpRight className="w-4 h-4 text-zinc-600 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                        </div>

                        <div>
                            <h3 className="text-base font-bold text-zinc-200 group-hover:text-white transition-colors tracking-tight">
                                {item.platform}
                            </h3>
                            <p className="text-xs font-mono text-zinc-500 mt-1">
                                {item.handle}
                            </p>
                        </div>
                    </a>
                ))}
            </motion.div>
        </div>
    );
}
