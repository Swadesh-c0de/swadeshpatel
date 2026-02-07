"use client";

import { motion } from "framer-motion";
import { Terminal, Cpu, Globe, Code2, Coffee, Zap, Download } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="w-full max-w-4xl px-6 pt-32 pb-20 mx-auto min-h-screen text-zinc-100">

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-20"
      >
        <h1 className="text-6xl sm:text-8xl font-black tracking-tighter mb-6 text-white leading-[0.9]">
          ABOUT<br />ME.
        </h1>
        <div className="flex items-center gap-6">
          <div className="h-1 w-24 bg-zinc-800 rounded-full" />
          <a
            href="https://drive.google.com/file/d/1iA1a2yRGqoMa0aG10zK3KS81xiSW8Jnh/view?usp=sharing"
            download
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-zinc-900/50 border border-zinc-800 rounded-full text-zinc-400 hover:text-white hover:bg-zinc-800 hover:border-zinc-700 transition-all group"
            target="_blank"
          >
            <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            <span className="text-xs font-mono uppercase tracking-wider">Download Resume</span>
          </a>
        </div>
      </motion.div>

      {/* STORY SECTION */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="mb-24 space-y-8"
      >
        <h2 className="text-sm font-mono text-zinc-500 uppercase tracking-widest mb-8">The Story</h2>

        <div className="space-y-6">
          <div className="space-y-2">
            <h3 className="text-4xl sm:text-5xl font-semibold text-white tracking-tight">
              Hi, I’m <span className="text-white font-bold font-sans tracking-tight">Swadesh</span>.
            </h3>
          </div>

          <div className="space-y-6 text-lg sm:text-xl font-light leading-relaxed text-zinc-300">
            <p>
              I am a 21-year-old Computer Science student with a deep-seated passion for Linux, Robotics, and AI. My approach to technology is driven by a simple question: <span className="italic text-zinc-100 font-serif">"How does this work?"</span>
            </p>
            <p>
              Whether I’m diving into the complex physics of the universe, exploring the inner workings of an operating system, or capturing nature through my camera lens, I am always seeking to understand the systems that govern our world. My goal is to bridge the gap between theory and reality by building technology that feels seamless, efficient, and powerful.
            </p>
          </div>
        </div>
      </motion.section>

      {/* PHILOSOPHY GRID */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="mb-24"
      >
        <h2 className="text-sm font-mono text-zinc-500 uppercase tracking-widest mb-8">Philosophy</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <PhilosophyCard
            icon={<Zap className="w-6 h-6" />}
            title="Speed"
            desc="Performance is a feature. I optimize for milliseconds, ensuring instant interactions."
          />
          <PhilosophyCard
            icon={<Terminal className="w-6 h-6" />}
            title="Control"
            desc="I prefer deep systems knowledge over black-box abstractions. Knowing how things work matters."
          />
          <PhilosophyCard
            icon={<Coffee className="w-6 h-6" />}
            title="Simplicity"
            desc="Minimalism isn't just an aesthetic; it's an engineering principle. Less code, fewer bugs."
          />
        </div>
      </motion.section>

      {/* TECH STACK LIST */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        <h2 className="text-sm font-mono text-zinc-500 uppercase tracking-widest mb-8">Arsenal</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {["C/C++", "Java", "Python", "JavaScript (ES6+)", "TypeScript", "React", "Next.js", "Node.js", "Express", "MongoDB", "mySQL", "Tailwind CSS", "Docker", "Linux", "Git/GitHub"].map((tech, i) => (
            <div key={i} className="p-4 border border-zinc-900 rounded-lg text-zinc-400 text-sm hover:border-zinc-700 hover:text-white transition-colors cursor-default">
              {tech}
            </div>
          ))}
        </div>
      </motion.section>

    </div >
  );
}

function PhilosophyCard({ icon, title, desc }) {
  return (
    <div className="p-6 bg-zinc-900/30 border border-zinc-800 rounded-2xl hover:bg-zinc-900/50 transition-colors">
      <div className="mb-4 text-zinc-100">{icon}</div>
      <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
      <p className="text-zinc-400 text-sm leading-relaxed">{desc}</p>
    </div>
  )
}