"use client";
import { useState, useEffect } from "react";
import LogoLoop from "@/components/LogoLoop";

import { Terminal, Rocket, BookOpen, Zap, Link as LinkIcon, Target, Wrench, ExternalLink } from "lucide-react";
import { SiNextdotjs, SiJavascript, SiTypescript, SiExpress, SiPostman, SiC, SiCplusplus, SiYaml, SiKdeplasma } from "react-icons/si";
import { FaGithub, FaReact, FaNodeJs, FaDocker, FaPython, FaHtml5, FaCss3Alt, FaMarkdown, FaJava, FaGitlab } from "react-icons/fa";
import { FiLinkedin } from "react-icons/fi";
import { RiTailwindCssFill } from "react-icons/ri";
import { BiLogoMongodb } from "react-icons/bi";
import { DiMysql, DiGit } from "react-icons/di";
import { GrArchlinux } from "react-icons/gr";
import { FcLinux } from "react-icons/fc";
import { VscVscode } from "react-icons/vsc";
import { BsLightningCharge } from "react-icons/bs";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true)
  }, []);

  return (
    <div className="h-auto mt-6 sm:w-[75%] mx-auto bg-black sm:bg-transparent text-white">
      {/* Main Content */}
      <div className="relative z-10 h-auto p-2 sm:p-4 lg:p-6">
        <div className="grid grid-cols-1 lg:grid-cols-8 gap-3 sm:gap-6 max-w-5xl mx-auto h-auto">
          <div className={`lg:col-span-8 transition-all duration-1000 ${mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
            <div className="bg-black/5 backdrop-blur-sm border-[0.1px] border-zinc-400/50 rounded-2xl p-6 sm:p-8 h-full hover:border-white/20 transition-all duration-300">
              {/* Title */}
              <div className="flex h-min justify-between items-center">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 leading-tight">
                  Hello! 👋,
                </h1>
                <span className="flex items-center mb-4 gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-400/30 text-xs text-emerald-200">
                  <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse" />
                  Available for work
                </span>
              </div>

              <p className="text-large text-gray-400 leading-relaxed mb-8">
                I’m <span className="text-cyan-400">Swadesh</span>, a CSE undergrad and freelance developer passionate about building full-stack web applications.
                I love working with modern tech stacks and Linux systems, combining what I learn academically with real-world development experience to create reliable, user-friendly solutions.
              </p>

              {/* Social Links */}
              <div className="flex flex-wrap gap-2">
                <SocialButton
                  icon={<FaGithub className="w-4 h-4" />}
                  label="GitHub"
                  url="https://github.com/Swadesh-c0de/"
                />
                <SocialButton
                  icon={<FiLinkedin className="w-4 h-4" />}
                  label="LinkedIn"
                  url="https://in.linkedin.com/in/swadeshpatel/"
                />
              </div>
            </div>
          </div>

          {/* TECH STACK CARD */}
          <div className={`lg:col-span-6 transition-all duration-1000 delay-200 ${mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
            <div className="bg-black/5 backdrop-blur-sm h-full border border-zinc-400/50 
              rounded-2xl p-6 sm:p-8 hover:border-white/20 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="pt-2">
                  <BsLightningCharge className="font-extrabold w-5 h-5 text-[#2fb1a0]" />
                </div>
                <h2 className="text-xl sm:text-2xl font-semibold">Tech Stack</h2>
              </div>

              {/* Modern Marquee */}
              <div className="relative overflow-hidden w-full">
                <LogoLoop
                  logos={techStack1}
                  speed={40}
                  direction="left"
                  logoHeight={48}
                  gap={30}
                  ariaLabel="Tech Stack"
                />
              </div>

              <div className="relative overflow-hidden w-full">
                <LogoLoop
                  logos={techStack2}
                  speed={40}
                  direction="right"
                  logoHeight={48}
                  gap={30}
                  ariaLabel="Tech Stack"
                />
              </div>
            </div>
          </div>

          {/* Links */}
          <div className={`lg:col-span-2 transition-all duration-1000 delay-200 ${mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <div className="bg-black/5 backdrop-blur-sm border border-zinc-400/50 rounded-2xl px-6 py-3 h-full flex flex-col gap-3 hover:border-white/20 transition-all duration-300">
              <div className="flex items-center gap-2 my-2">
                <LinkIcon className="w-5 h-5 text-gray-300" />
                <h2 className="text-xl sm:text-2xl font-semibold tracking-tight">
                  Links
                </h2>
              </div>
              <QuickLink label="About Me" href="/about" />
              <QuickLink label="Projects" href="/projects" />
              {/* <QuickLink label="GitHub" href="https://github.com/Swadesh-c0de" /> */}
              <QuickLink label="Contact" href="/contact" />
            </div>
          </div>

          {/* WORK IN MOTION */}
          <div
            className={`lg:col-span-8 transition-all duration-700 delay-200 ${mounted ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
              }`}
          >
            <div className="bg-zinc-black/5 backdrop-blur-md border border-zinc-400/50 rounded-2xl p-6 sm:p-8 hover:border-white/20 transition-all duration-300">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <Target className="w-5 h-5 text-gray-400" />
                  <h2 className="text-xl sm:text-2xl font-semibold text-gray-100">
                    Work in Motion
                  </h2>
                </div>
                <span className="text-xs text-gray-500 font-mono">
                  # ongoing development
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <FocusCard
                  title="Building Solid Architectures"
                  desc="Structuring scalable full-stack apps using Next.js, modular APIs, and clean component design."
                  badge="fullstack"
                />
                <FocusCard
                  title="Perfecting My Linux Workflow"
                  desc="Automating setups, optimizing Arch, and crafting my personal development environment."
                  badge="linux"
                />
                <FocusCard
                  title="UI Engineering"
                  desc="Designing fluid, maintainable interfaces using Tailwind, Framer Motion, and accessibility-first patterns."
                  badge="frontend"
                />
              </div>
            </div>
          </div>

          {/* DAILY WORKFLOW */}
          <div
            className={`lg:col-span-8 transition-all duration-700 delay-300 ${mounted ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
              }`}
          >
            <div className="bg-black/5 backdrop-blur-md border border-zinc-400/50 rounded-2xl p-6 sm:p-8 hover:border-white/20 transition-all duration-300">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <Wrench className="w-5 h-5 text-gray-400" />
                  <h2 className="text-xl sm:text-2xl font-semibold text-gray-100">
                    Daily Development Stack
                  </h2>
                </div>
                <span className="text-xs text-gray-500 font-mono">
                  # tools & workflow
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                <WorkflowItem
                  title="Arch Linux"
                  desc="Custom-tuned dev OS with zsh, Starship, and Hyprland setup."
                />
                <WorkflowItem
                  title="VS Code"
                  desc="Main IDE for full-stack projects with custom extensions & shortcuts."
                />
                <WorkflowItem
                  title="Git / GitHub"
                  desc="Version control and collaborative development environment."
                />
                <WorkflowItem
                  title="Docker / Postman"
                  desc="Testing, containerization, and API workflow debugging."
                />
              </div>

              <div className="border-t border-zinc-700/50 mt-8 pt-5 text-center">
                <p className="text-sm text-gray-400 font-light italic">
                  “Write. Debug. Improve. Repeat.”
                  <span className="text-zinc-500 block text-xs mt-1">
                    — my everyday dev cycle
                  </span>
                </p>
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
}

const techStack1 = [
  { title: "React", node: <FaReact className="w-6 h-6 text-cyan-400 mx-auto" /> },
  { title: "JavaScript", node: <SiJavascript className="w-6 h-6 text-yellow-400 mx-auto" /> },
  { title: "CSS3", node: <FaCss3Alt className="w-6 h-6 text-blue-500 mx-auto" /> },
  { title: "Tailwind", node: <RiTailwindCssFill className="w-6 h-6 text-sky-400 mx-auto" /> },
  { title: "Next.js", node: <SiNextdotjs className="w-6 h-6 text-gray-300 mx-auto" /> },
  { title: "Node.js", node: <FaNodeJs className="w-6 h-6 text-green-400 mx-auto" /> },
  { title: "Express", node: <SiExpress className="w-6 h-6 text-gray-400 mx-auto" /> },
  { title: "Arch", node: <GrArchlinux className="w-5 h-6 text-blue-400 mx-auto" /> },
  { title: "MongoDB", node: <BiLogoMongodb className="w-6 h-6 text-green-500 mx-auto" /> },
  { title: "SQL", node: <DiMysql className="w-6 h-6 text-blue-400 mx-auto" /> },
  { title: "Linux", node: <FcLinux className="w-6 h-6 mx-auto" /> },
  { title: "Docker", node: <FaDocker className="w-6 h-6 text-blue-300 mx-auto" /> },
  { title: "Python", node: <FaPython className="w-6 h-6 mx-auto" /> },
  { title: "Markdown", node: <FaMarkdown className="w-6 h-6 text-blue-400 mx-auto" /> },
  { title: "HTML5", node: <FaHtml5 className="w-6 h-6 text-orange-500 mx-auto" /> },
  { title: "C", node: <SiC className="w-6 h-6 text-blue-600 mx-auto" /> },
  { title: "Postman", node: <SiPostman className="w-6 h-6 text-orange-400 mx-auto" /> },
  { title: "Git", node: <DiGit className="w-6 h-6 text-red-500 mx-auto" /> },
  { title: "C++", node: <SiCplusplus className="w-6 h-6 text-blue-600 mx-auto" /> },
  { title: "TypeScript", node: <SiTypescript className="w-6 h-6 text-blue-500 mx-auto" /> },
  { title: "Java", node: <FaJava className="w-6 h-6 text-red-600 mx-auto" /> },
  { title: "VS Code", node: <VscVscode className="w-6 h-6 text-blue-500 mx-auto" /> },
  { title: "GitHub", node: <FaGithub className="w-6 h-6 mx-auto" /> },
  { title: "YAML", node: <SiYaml className="w-6 h-6 text-blue-400 mx-auto" /> },
  { title: "GitLab", node: <FaGitlab className="w-6 h-6 text-orange-500 mx-auto" /> },
  { title: "KDE Plasma", node: <SiKdeplasma className="w-6 h-6 text-blue-400 mx-auto" /> },
];

const techStack2 = [
  { title: "Arch", node: <GrArchlinux className="w-5 h-6 text-blue-400 mx-auto" /> },
  { title: "React", node: <FaReact className="w-6 h-6 text-cyan-400 mx-auto" /> },
  { title: "HTML5", node: <FaHtml5 className="w-6 h-6 text-orange-500 mx-auto" /> },
  { title: "Node.js", node: <FaNodeJs className="w-6 h-6 text-green-400 mx-auto" /> },
  { title: "JavaScript", node: <SiJavascript className="w-6 h-6 text-yellow-400 mx-auto" /> },
  { title: "SQL", node: <DiMysql className="w-6 h-6 text-blue-400 mx-auto" /> },
  { title: "Express", node: <SiExpress className="w-6 h-6 text-gray-400 mx-auto" /> },
  { title: "TypeScript", node: <SiTypescript className="w-6 h-6 text-blue-500 mx-auto" /> },
  { title: "Postman", node: <SiPostman className="w-6 h-6 text-orange-400 mx-auto" /> },
  { title: "MongoDB", node: <BiLogoMongodb className="w-6 h-6 text-green-500 mx-auto" /> },
  { title: "Linux", node: <FcLinux className="w-6 h-6 mx-auto" /> },
  { title: "Docker", node: <FaDocker className="w-6 h-6 text-blue-300 mx-auto" /> },
  { title: "Python", node: <FaPython className="w-6 h-6 mx-auto" /> },
  { title: "Next.js", node: <SiNextdotjs className="w-6 h-6 text-gray-300 mx-auto" /> },
  { title: "Markdown", node: <FaMarkdown className="w-6 h-6 text-blue-400 mx-auto" /> },
  { title: "C", node: <SiC className="w-6 h-6 text-blue-600 mx-auto" /> },
  { title: "Git", node: <DiGit className="w-6 h-6 text-red-500 mx-auto" /> },
  { title: "C++", node: <SiCplusplus className="w-6 h-6 text-blue-600 mx-auto" /> },
  { title: "CSS3", node: <FaCss3Alt className="w-6 h-6 text-blue-500 mx-auto" /> },
  { title: "VS Code", node: <VscVscode className="w-6 h-6 text-blue-500 mx-auto" /> },
  { title: "Tailwind", node: <RiTailwindCssFill className="w-6 h-6 text-sky-400 mx-auto" /> },
  { title: "Java", node: <FaJava className="w-6 h-6 text-red-600 mx-auto" /> },
  { title: "GitHub", node: <FaGithub className="w-6 h-6 mx-auto" /> },
  { title: "YAML", node: <SiYaml className="w-6 h-6 text-blue-400 mx-auto" /> },
  { title: "KDE Plasma", node: <SiKdeplasma className="w-6 h-6 text-blue-400 mx-auto" /> },
  { title: "GitLab", node: <FaGitlab className="w-6 h-6 text-orange-500 mx-auto" /> },
]

function SocialButton({ icon, label, url }) {
  return (
    <a
      href={url}
      target="_blank"
      className="group px-3 py-2 bg-white/10 border border-white/20 rounded-lg hover:bg-white/20 transition-all duration-300 hover:scale-105"
    >
      <div className="flex items-center gap-2 text-gray-300 group-hover:text-white transition-colors">
        {icon}
        <span className="text-sm font-medium">{label}</span>
      </div>
    </a>
  );
}

function QuickLink({ label, href }) {
  return (
    <a
      href={href}
      className="flex items-center justify-between bg-white/0 hover:bg-white/10 border border-transparent hover:border-white/10 rounded-xl px-3 py-2 transition-all duration-200 text-sm"
    >
      <span>{label}</span>
      <ExternalLink className="w-4 h-4 text-gray-500" />
    </a>
  );
}

function FocusCard({ title, desc, badge }) {
  return (
    <div className="group bg-zinc-950/50 border border-zinc-700/40 rounded-xl p-5 transition-all duration-300">
      <span className="inline-flex px-2 py-0.5 rounded-md bg-zinc-800 text-xs text-gray-300 mb-3 uppercase tracking-wide">
        {badge}
      </span>
      <h3 className="text-white font-semibold mb-2">
        {title}
      </h3>
      <p className="text-sm text-gray-400 leading-relaxed">{desc}</p>
    </div>
  );
}

function WorkflowItem({ title, desc }) {
  return (
    <div className="bg-zinc-950/40 border border-zinc-700/40 rounded-lg p-4 transition-all duration-300">
      <h4 className="text-sm font-semibold text-gray-100 mb-1">{title}</h4>
      <p className="text-xs text-gray-400 leading-snug">{desc}</p>
    </div>
  );
}
