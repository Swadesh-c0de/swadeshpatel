import PageWebs from "@/components/PageWebs";
import Image from "next/image";
import { Terminal, Coffee, Zap, Download } from "lucide-react";
import { resumeUrl } from "@/config/constants";
import { skillDomains, philosophyItems } from "@/data/skills";

const philosophyIcons = [
  <Zap key="speed" className="w-5 h-5" />,
  <Terminal key="control" className="w-5 h-5" />,
  <Coffee key="simplicity" className="w-5 h-5" />
];

export default function AboutClient({ age }) {

  return (
    <div className="page-container pt-24 sm:pt-32 pb-32 min-h-screen text-zinc-100">
      <PageWebs variant="about" />

      {/* HEADER SECTION */}
      <div
        className="mb-16 sm:mb-20 flex flex-col md:flex-row md:items-center justify-between gap-8 sm:gap-12"
      >
        <div className="space-y-6 max-w-xl">
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tighter text-white leading-[0.88]">
            ABOUT<br />ME.
          </h1>

          <div className="flex items-center gap-4">
            <div className="w-12 sm:w-16 h-[2px] bg-zinc-800 rounded-full" />
            <a
              href={resumeUrl}
              download
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-800/80 bg-zinc-950/40 text-zinc-300 hover:text-white hover:border-zinc-700 hover:bg-zinc-900/60 transition-all duration-300 group"
            >
              <Download className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
              <span className="text-[11px] font-mono uppercase tracking-wider">Download Resume</span>
            </a>
          </div>
        </div>

        {/* TOP RIGHT WHITE DESIGN LINE ART */}
        <div className="w-full md:w-80 lg:w-96 aspect-[16/10] relative overflow-visible bg-black group shrink-0">
          <Image
            src="/images/pc-workspace-refined.png"
            alt="Monochrome developer workspace with a monitor showing clean JavaScript code"
            width={1679}
            height={937}
            loading="eager"
            unoptimized
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      {/* STORY SECTION */}
      <section
        className="mb-20 sm:mb-24 space-y-6"
      >
        <div className="flex flex-wrap gap-3 items-center justify-between border-b border-zinc-900 pb-4">
          <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-zinc-400 font-medium">The Story</h2>
          <span className="text-xs font-mono text-zinc-400">Origin &amp; Focus</span>
        </div>

        <div className="space-y-4">
          <h3 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Hi, I’m Swadesh.
          </h3>

          <div className="text-zinc-400 font-light leading-relaxed text-sm sm:text-base space-y-4 pt-1">
            <p>
              I am a <span>{age}</span>-year-old Computer Science student with a deep-seated passion for Linux, Robotics, and AI. My approach to technology is driven by a simple question: <span className="text-zinc-200 font-normal italic">&quot;How does this work?&quot;</span> — not just in the software layers, but all the way down to the physical silicon.
            </p>
            <p>
              Whether I’m diving into the complex physics of the universe, exploring the inner workings of an operating system, or tinkering with physical system hardware, I am always seeking to understand the systems that govern our world.
            </p>
            <p>
              I have a growing fascination with hardware architecture and electronics. While I’m still early in my journey of learning circuit design and microcontrollers, I love hands-on experimentation, building physical setups, and exploring how code interacts with the physical world. My ultimate goal is to bridge the gap between high-level logic and hardware, creating technology that is seamless, efficient, and deeply integrated.
            </p>
          </div>
        </div>
      </section>

      {/* CORE PHILOSOPHY */}
      <section
        className="mb-20 sm:mb-24 space-y-6"
      >
        <div className="flex flex-wrap gap-3 items-center justify-between border-b border-zinc-900 pb-4">
          <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-zinc-400 font-medium">Philosophy</h2>
          <span className="text-xs font-mono text-zinc-400">Core Principles</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {philosophyItems.map((item, idx) => (
            <div
              key={item.title}
              className="p-6 sm:p-7 bg-zinc-950/40 border border-zinc-800/40 rounded-3xl hover:border-zinc-700/60 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="mb-4 text-zinc-400 group-hover:text-white transition-colors">
                  {philosophyIcons[idx]}
                </div>
                <h3 className="text-base font-bold text-zinc-200 group-hover:text-white transition-colors mb-2 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-zinc-400 text-xs font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TECHNICAL ARSENAL */}
      <section
        className="space-y-6"
      >
        <div className="flex flex-wrap gap-3 items-center justify-between border-b border-zinc-900 pb-4">
          <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-zinc-400 font-medium">Arsenal</h2>
          <span className="text-xs font-mono text-zinc-400">Technical Capability</span>
        </div>

        <div className="divide-y divide-zinc-900/90 border-b border-zinc-900/90">
          {skillDomains.map((domain) => (
            <div
              key={domain.tag}
              className="py-8 first:pt-4 last:pb-8 flex flex-col md:flex-row md:items-start justify-between gap-6 group"
            >
              {/* Domain Info */}
              <div className="md:w-5/12 space-y-2">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono text-zinc-400 font-semibold">{domain.tag}</span>
                  <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-zinc-200 transition-colors">
                    {domain.title}
                  </h3>
                </div>
                <p className="text-xs text-zinc-400 font-light leading-relaxed max-w-sm">
                  {domain.desc}
                </p>
              </div>

              {/* Skills Cloud */}
              <div className="md:w-7/12 flex flex-wrap gap-2 pt-1">
                {domain.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-xl bg-zinc-950/60 border border-zinc-800/60 text-zinc-400 text-xs font-mono hover:text-white hover:border-zinc-600 hover:bg-zinc-900/60 transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
