"use client";

import { motion } from "framer-motion";
import { Mail, ArrowRight, Copy, Check } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { useState } from "react";

export default function Contact() {
    return (
        <div className="w-full max-w-4xl px-6 pt-32 pb-20 mx-auto min-h-screen flex flex-col justify-center items-center text-center">

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-16"
            >
                <h1 className="text-6xl sm:text-8xl font-black tracking-tighter mb-8 text-white leading-[0.9]">
                    LETS<br />CONNECT.
                </h1>
                <p className="text-xl text-zinc-400 font-light leading-relaxed max-w-lg mx-auto">
                    Interested in collaborating on a project or just want to discuss Arch Linux configs?
                    Find me on social media.
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="w-full max-w-md space-y-4"
            >
                <SocialCard icon={<FaGithub className="w-6 h-6" />} label="GitHub" handle="@Swadesh-c0de" href="https://github.com/Swadesh-c0de" />
                <SocialCard icon={<FaLinkedin className="w-6 h-6" />} label="LinkedIn" handle="Swadesh Patel" href="https://in.linkedin.com/in/swadeshpatel/" />
            </motion.div>

        </div>
    );
}

function SocialCard({ icon, label, handle, href }) {
    return (
        <a href={href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 border border-zinc-800/50 rounded-xl hover:bg-zinc-900 hover:border-zinc-700 transition-all group">
            <div className="text-zinc-400 group-hover:text-white transition-colors">{icon}</div>
            <div>
                <div className="text-sm font-bold text-zinc-300 group-hover:text-white transition-colors">{label}</div>
                <div className="text-xs text-zinc-500">{handle}</div>
            </div>
            <ArrowRight className="w-4 h-4 text-zinc-600 ml-auto group-hover:translate-x-1 transition-transform" />
        </a>
    )
}