"use client";

import { useState, useEffect } from "react";
import {
  Terminal,
  Code2,
  Cpu,
  GitBranch,
  Github,
  Linkedin,
  Mail,
  Link as LinkIcon,
  Wrench,
  Target,
  Layers,
} from "lucide-react";
import {
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
  SiExpress,
  SiPostman,
  SiC,
  SiCplusplus,
} from "react-icons/si";
import {
  FaReact,
  FaNodeJs,
  FaDocker,
  FaHtml5,
  FaCss3Alt,
  FaPython,
  FaGithub,
} from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { BiLogoMongodb } from "react-icons/bi";
import { DiMysql, DiGit } from "react-icons/di";
import { GrArchlinux } from "react-icons/gr";
import { VscVscode } from "react-icons/vsc";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="h-full mt-3 sm:w-[75%] mx-auto bg-black sm:bg-transparent text-white">
      <div className="relative z-10 h-auto p-2 sm:p-4 lg:p-6">
        <div className="grid grid-cols-1 lg:grid-cols-8 gap-3 sm:gap-6 max-w-5xl mx-auto h-auto">
          {/* ========== HERO / INTRO ========== */}
          <div
            className={`lg:col-span-8 transition-all duration-700 ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
            }`}
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
              <div className="flex items-center justify-between gap-4 flex-wrap mb-5">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
                  Hey, I’m Swadesh 👋
                </h1>
                <span className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-400/30 text-xs text-emerald-200">
                  <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse" />
                  Available for collaborations
                </span>
              </div>

              <p className="text-base text-gray-300 leading-relaxed mb-6">
                Computer Science Engineering student (3rd year) who loves
                building <span className="text-white font-medium">full-stack</span> apps,
                customizing <span className="text-white font-medium">Arch Linux</span>, and
                creating clean, developer-first UIs. I enjoy working close to the
                system, but I also love good frontend.
              </p>

              {/* Social Links */}
              <div className="flex flex-wrap gap-2">
                <SocialButton
                  icon={<FaGithub className="w-4 h-4" />}
                  label="GitHub"
                  url="https://github.com/Swadesh-c0de/"
                />
                <SocialButton
                  icon={<Linkedin className="w-4 h-4" />}
                  label="LinkedIn"
                  url="https://in.linkedin.com/in/swadeshpatel/"
                />
                <SocialButton
                  icon={<Mail className="w-4 h-4" />}
                  label="Email"
                  url="mailto:youremail@example.com"
                />
              </div>
            </div>
          </div>

          {/* ========== LEFT: STACK / ENVIRONMENT ========== */}
          <div
            className={`lg:col-span-4 transition-all duration-700 delay-100 ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
            }`}
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-7 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
              <div className="flex items-center gap-2 mb-5">
                <Code2 className="w-5 h-5 text-cyan-300" />
                <h2 className="text-xl sm:text-2xl font-semibold">
                  My Stack
                </h2>
              </div>

              {/* LANGUAGES */}
              <p className="text-xs tracking-wider text-gray-400 mb-2">
                LANGUAGES
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <Tag>JavaScript</Tag>
                <Tag>TypeScript</Tag>
                <Tag>Python</Tag>
                <Tag>C / C++</Tag>
                <Tag>Java</Tag>
              </div>

              {/* FRONTEND / BACKEND */}
              <p className="text-xs tracking-wider text-gray-400 mb-2">
                FRONTEND / BACKEND
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <Tag icon={<SiNextdotjs />}>Next.js</Tag>
                <Tag icon={<FaReact />}>React</Tag>
                <Tag icon={<FaNodeJs />}>Node.js</Tag>
                <Tag icon={<SiExpress />}>Express</Tag>
              </div>

              {/* TOOLS / DEVOPS */}
              <p className="text-xs tracking-wider text-gray-400 mb-2">
                TOOLS / DEV
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <Tag icon={<RiTailwindCssFill />}>Tailwind</Tag>
                <Tag icon={<BiLogoMongodb />}>MongoDB</Tag>
                <Tag icon={<DiMysql />}>MySQL</Tag>
                <Tag icon={<FaDocker />}>Docker</Tag>
                <Tag icon={<DiGit />}>Git</Tag>
              </div>

              {/* OS / EDITOR */}
              <p className="text-xs tracking-wider text-gray-400 mb-2">
                ENVIRONMENT
              </p>
              <div className="flex flex-wrap gap-2">
                <Tag icon={<GrArchlinux />}>Arch Linux</Tag>
                <Tag icon={<VscVscode />}>VS Code</Tag>
                <Tag icon={<FaGithub />}>GitHub</Tag>
              </div>
            </div>
          </div>

          {/* ========== RIGHT: QUICK LINKS / PAGES ========== */}
          <div
            className={`lg:col-span-4 transition-all duration-700 delay-100 ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
            }`}
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 h-[214px] flex flex-col gap-3 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
              <div className="flex items-center gap-2 mb-2">
                <LinkIcon className="w-4 h-4 text-gray-300" />
                <h2 className="text-lg font-semibold tracking-tight">
                  Quick Access
                </h2>
              </div>
              <QuickLink label="About Me" href="/about" />
              <QuickLink label="Projects" href="/projects" />
              <QuickLink label="GitHub" href="https://github.com/Swadesh-c0de" />
              <QuickLink label="Contact" href="/contact" />
            </div>
          </div>

          {/* ========== CURRENTLY LEARNING / FOCUS ========== */}
          <div
            className={`lg:col-span-8 transition-all duration-700 delay-200 ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
            }`}
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <Target className="w-5 h-5 text-gray-400" />
                <h2 className="text-xl sm:text-2xl font-semibold">
                  Learning / Building Right Now
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <FocusCard
                  title="Full-stack patterns"
                  desc="Next.js App Router, API routes, authentication & deployment."
                  badge="web"
                />
                <FocusCard
                  title="Linux workflow"
                  desc="Making Arch my perfect dev OS – dotfiles, CLI tools, scripts."
                  badge="linux"
                />
                <FocusCard
                  title="Clean UI systems"
                  desc="Reusable components in Tailwind + React Icons."
                  badge="ui"
                />
              </div>
            </div>
          </div>

          {/* ========== WORKFLOW / TOOLING (instead of projects/about/apod) ========== */}
          <div
            className={`lg:col-span-8 transition-all duration-700 delay-300 ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
            }`}
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <Wrench className="w-5 h-5 text-gray-400" />
                <h2 className="text-xl sm:text-2xl font-semibold">
                  My Workflow
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                <WorkflowItem title="Arch Linux" desc="Primary dev OS" />
                <WorkflowItem title="VS Code" desc="Main editor" />
                <WorkflowItem title="Git / GitHub" desc="Version control" />
                <WorkflowItem title="Docker / Postman" desc="Testing & API" />
              </div>

              <p className="text-xs text-gray-500 mt-6">
                I like building things end-to-end — setup → code → test → deploy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* =================== small components =================== */

function Tag({ children, icon }) {
  return (
    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-gray-200">
      {icon ? <span className="text-base">{icon}</span> : null}
      {children}
    </span>
  );
}

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
      <LinkIcon className="w-4 h-4 text-gray-500" />
    </a>
  );
}

function FocusCard({ title, desc, badge }) {
  return (
    <div className="bg-zinc-900/50 border border-white/10 rounded-xl p-4 hover:border-white/30 transition-all duration-200">
      <span className="inline-flex px-2 py-0.5 rounded-full bg-white/5 text-xs text-gray-300 mb-3 uppercase tracking-wide">
        {badge}
      </span>
      <h3 className="text-white font-semibold mb-1">{title}</h3>
      <p className="text-sm text-gray-400 leading-relaxed">{desc}</p>
    </div>
  );
}

function WorkflowItem({ title, desc }) {
  return (
    <div className="bg-zinc-900/40 border border-white/5 rounded-lg p-4 hover:border-white/20 transition-all duration-200">
      <h4 className="text-sm font-semibold text-white mb-1">{title}</h4>
      <p className="text-xs text-gray-400">{desc}</p>
    </div>
  );
}