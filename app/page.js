"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import LogoLoop from "@/components/LogoLoop";
import { MapPin, Mail, Download, ArrowUpRight, Terminal } from "lucide-react";
import { SiNextdotjs, SiJavascript, SiTypescript, SiExpress, SiPostman, SiC, SiCplusplus, SiYaml, SiKdeplasma, SiGo } from "react-icons/si";
import { FaGithub, FaReact, FaNodeJs, FaDocker, FaPython, FaHtml5, FaCss3Alt, FaMarkdown, FaJava, FaGitlab } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiLinkedin } from "react-icons/fi";
import { RiTailwindCssFill } from "react-icons/ri";
import { BiLogoMongodb } from "react-icons/bi";
import { DiMysql, DiGit, DiVim, DiDebian } from "react-icons/di";
import { GrArchlinux } from "react-icons/gr";
import { FcLinux } from "react-icons/fc";
import { VscVscode } from "react-icons/vsc";
import { BsLightningCharge } from "react-icons/bs";
import { resumeUrl } from "@/config/constants";
import { featuredProjects } from "@/data/projects";
import { socialLinks, profileData } from "@/data/socials";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerGrid = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  return (
    <div className="w-full max-w-[1400px] px-4 sm:px-6 pb-32 flex flex-col items-center">

      {/* HERO / INTRO */}
      <section className="w-full py-20 lg:py-32 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <h1 className="text-6xl sm:text-8xl md:text-9xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-zinc-200 to-zinc-500 leading-[0.85] pb-4">
            SWADESH<br />PATEL
          </h1>

          <p className="max-w-xl mx-auto text-lg text-zinc-500 font-light">
            <span className="text-zinc-200 font-medium"> Full Stack Developer</span> and <span className="text-zinc-200 font-medium">Arch Linux</span> enthusiast building high-performace web applications with
            <span className="text-zinc-200 font-medium"> Next.js</span>, <span className="text-zinc-200 font-medium">Express.js</span> and <span className="text-zinc-200 font-medium">Go</span>.
          </p>

          <div className="pt-4">
            <a
              href={resumeUrl}
              download
              className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-100 text-zinc-950 font-medium rounded-full hover:bg-white hover:scale-105 transition-all duration-300 shadow-lg shadow-white/10"
              target="_blank"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume</span>
            </a>
          </div>
        </motion.div>
      </section>

      {/* BENTO GRID */}
      <motion.div
        variants={staggerGrid}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[minmax(180px,auto)]"
      >

        {/* BIO CARD (Large) */}
        <BentoCard className="md:col-span-2 lg:col-span-2 row-span-1 flex flex-col justify-between p-6 sm:p-8 bg-zinc-950/40 border-zinc-800/40 hover:border-zinc-700/60 transition-colors">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-zinc-500 font-medium">Profile</span>
              <span className="text-xs font-mono text-zinc-600">Overview</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">Full-Stack Engineer</h3>
            <p className="text-zinc-400 leading-relaxed font-light text-sm sm:text-base">
              {profileData.bio}
            </p>
          </div>
        </BentoCard>

        {/* SOCIALS */}
        <BentoCard className="md:col-span-1 bg-zinc-950/40 border-zinc-800/40 hover:border-zinc-700/60 p-6 flex flex-col justify-between transition-colors">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-zinc-500 font-medium">Connect</span>
          </div>
          <div className="flex items-center justify-center gap-3.5 my-auto">
            <SocialLink icon={<FaGithub className="w-5 h-5" />} href={socialLinks.github} label="GitHub" />
            <SocialLink icon={<FaXTwitter className="w-5 h-5" />} href={socialLinks.x} label="X (Twitter)" />
            <SocialLink icon={<FiLinkedin className="w-5 h-5" />} href={socialLinks.linkedin} label="LinkedIn" />
          </div>
        </BentoCard>

        {/* LOCATION / STATUS */}
        <BentoCard className="hidden lg:flex flex-col justify-between p-6 bg-zinc-950/40 border-zinc-800/40 hover:border-zinc-700/60 transition-colors">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-zinc-500 font-medium">Location</span>
            <span className="text-[10px] font-mono text-zinc-600">{profileData.timezone}</span>
          </div>
          <div className="text-center my-auto flex flex-col items-center">
            <MapPin className="w-6 h-6 text-zinc-500 mb-2" />
            <span className="text-zinc-200 font-bold block text-sm tracking-tight">{profileData.location}</span>
          </div>
        </BentoCard>

        {/* TECH STACK (Wide Marquee) */}
        <BentoCard className="md:col-span-3 lg:col-span-4 overflow-hidden relative min-h-40 flex flex-col justify-center bg-zinc-950/40 border-zinc-800/40 hover:border-zinc-700/60 p-6 sm:p-8">
          <div className="absolute top-5 left-6 sm:left-8 flex items-center gap-2">
            <BsLightningCharge className="text-zinc-500 w-3.5 h-3.5" />
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-zinc-500 font-medium">Tech Stack</span>
          </div>
          <div className="mask-gradient w-full pt-6">
            <LogoLoop logos={[...techStack]} speed={40} direction="left" logoHeight={40} gap={50} pauseOnHover={true} />
          </div>
        </BentoCard>

        {/* WHITE DESIGN LINE ART PC CARD (2 Columns - Left Side) */}
        <PCArtCard />

        {/* FEATURED PROJECTS SPOTLIGHT (2 Columns - Right Side) */}
        <FeaturedProjectsCard />

      </motion.div>

    </div>
  );
}

function BentoCard({ children, className = "" }) {
  const hasBorder = !className.includes("border-none") && !className.includes("border-0");
  return (
    <motion.div
      variants={fadeInUp}
      className={`rounded-3xl ${hasBorder ? "border border-zinc-800/50" : ""} backdrop-blur-sm overflow-hidden ${className}`}
    >
      {children}
    </motion.div>
  );
}

function FeaturedProjectsCard() {
  const featured = featuredProjects;

  return (
    <BentoCard className="h-fit md:col-span-3 lg:col-span-2 p-6 sm:p-8 flex flex-col justify-between bg-zinc-950/40 border-zinc-800/40 hover:border-zinc-700/60 transition-all duration-500">
      <div>
        <div className="flex items-center justify-between mb-5">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-zinc-500 font-medium">Selected Work</span>
          <a
            href="/projects"
            className="text-xs font-mono text-zinc-500 hover:text-zinc-200 flex items-center gap-1 transition-colors group"
          >
            All Work <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        <div className="divide-y divide-zinc-900/80">
          {featured.map((proj, idx) => (
            <div
              key={idx}
              className="py-3.5 first:pt-0 last:pb-0 flex items-center justify-between gap-4 group/row transition-all duration-300"
            >
              <div className="min-w-0">
                <div className="flex items-baseline gap-2.5">
                  <h4 className="text-base font-medium text-zinc-200 group-hover/row:text-white transition-colors tracking-tight">
                    {proj.title}
                  </h4>
                  <span className="text-[10px] font-mono text-zinc-600">
                    {proj.tag}
                  </span>
                </div>
                <p className="text-xs text-zinc-500 font-light truncate mt-0.5">
                  {proj.desc}
                </p>
              </div>

              <div className="flex items-center gap-2 shrink-0 opacity-50 group-hover/row:opacity-100 transition-opacity">
                {proj.github && (
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 text-zinc-500 hover:text-white transition-colors"
                    title="Source Code"
                  >
                    <FaGithub className="w-3.5 h-3.5" />
                  </a>
                )}
                {proj.live && (
                  <a
                    href={proj.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 text-zinc-500 hover:text-white transition-colors"
                    title="Live Preview"
                  >
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-4 mt-4 border-t border-zinc-900/80 flex items-center justify-between text-[11px] font-mono text-zinc-600">
        <span>Next.js · Express.js · Go</span>
      </div>
    </BentoCard>
  );
}

function PCArtCard() {
  return (
    <BentoCard className="h-fit md:col-span-3 lg:col-span-2 p-6 sm:p-8 flex flex-col justify-between transition-all duration-500 group border-0 border-none bg-transparent">
      <div>
        <div className="relative overflow-visible w-full h-full flex items-center justify-center">
          <Image
            src="/images/pc-isometric-white.png"
            alt="Minimalist PC Line Art"
            width={600}
            height={375}
            priority
            className="w-full h-full object-contain opacity-80 transition-all duration-700"
          />
        </div>
      </div>
    </BentoCard>
  );
}

function SocialLink({ icon, href, label, download }) {
  return (
    <a href={href} target={href === "/contact" || download ? "_self" : "_blank"} download={download} className="p-3 rounded-full bg-white/5 text-zinc-400 hover:bg-white hover:text-black transition-all duration-300" title={label}>
      {icon}
    </a>
  );
}


/* Data Arrays */
const techStack = [
  { title: "HTML5", node: <FaHtml5 className="w-full h-full text-zinc-300 hover:text-orange-500 mx-auto grayscale hover:grayscale-0 transition-all duration-400 opacity-60 hover:opacity-100" /> },
  { title: "CSS3", node: <FaCss3Alt className="w-full h-full text-zinc-300 hover:text-blue-500 mx-auto grayscale hover:grayscale-0 transition-all duration-400 opacity-60 hover:opacity-100" /> },
  { title: "JavaScript", node: <SiJavascript className="w-full h-full text-zinc-300 hover:text-yellow-400 mx-auto grayscale hover:grayscale-0 transition-all duration-400 opacity-60 hover:opacity-100" /> },
  { title: "React", node: <FaReact className="w-full h-full text-zinc-300 hover:text-cyan-400 mx-auto grayscale hover:grayscale-0 transition-all duration-400 opacity-60 hover:opacity-100" /> },
  { title: "Tailwind", node: <RiTailwindCssFill className="w-full h-full text-zinc-300 hover:text-sky-400 mx-auto grayscale hover:grayscale-0 transition-all duration-400 opacity-60 hover:opacity-100" /> },
  { title: "Next.js", node: <SiNextdotjs className="w-full h-full text-zinc-300 hover:text-gray-300 mx-auto grayscale hover:grayscale-0 transition-all duration-400 opacity-60 hover:opacity-100" /> },
  { title: "Node.js", node: <FaNodeJs className="w-full h-full text-zinc-300 hover:text-green-400 mx-auto grayscale hover:grayscale-0 transition-all duration-400 opacity-60 hover:opacity-100" /> },
  { title: "Express", node: <SiExpress className="w-full h-full text-zinc-300 hover:text-gray-400 mx-auto grayscale hover:grayscale-0 transition-all duration-400 opacity-60 hover:opacity-100" /> },
  { title: "Postman", node: <SiPostman className="w-full h-full text-zinc-300 hover:text-orange-400 mx-auto grayscale hover:grayscale-0 transition-all duration-400 opacity-60 hover:opacity-100" /> },
  { title: "MongoDB", node: <BiLogoMongodb className="w-full h-full text-zinc-300 hover:text-green-500 mx-auto grayscale hover:grayscale-0 transition-all duration-400 opacity-60 hover:opacity-100" /> },
  { title: "SQL", node: <DiMysql className="w-full h-full text-zinc-300 hover:text-blue-400 mx-auto grayscale hover:grayscale-0 transition-all duration-400 opacity-60 hover:opacity-100" /> },
  { title: "TypeScript", node: <SiTypescript className="w-full h-full text-zinc-300 hover:text-blue-500 mx-auto grayscale hover:grayscale-0 transition-all duration-400 opacity-60 hover:opacity-100" /> },
  { title: "Go", node: <SiGo className="w-full h-full text-zinc-300 hover:text-cyan-400 mx-auto grayscale hover:grayscale-0 transition-all duration-400 opacity-60 hover:opacity-100" /> },
  { title: "Arch", node: <GrArchlinux className="w-full h-full text-zinc-300 hover:text-blue-400 mx-auto grayscale hover:grayscale-0 transition-all duration-400 opacity-60 hover:opacity-100" /> },
  { title: "Linux", node: <FcLinux className="w-full h-full text-zinc-300 hover:text-blue-400 mx-auto grayscale hover:grayscale-0 transition-all duration-400 opacity-60 hover:opacity-100" /> },
  { title: "Debian", node: <DiDebian className="w-full h-full text-zinc-300 hover:text-red-800 mx-auto grayscale hover:grayscale-0 transition-all duration-400 opacity-60 hover:opacity-100" /> },
  { title: "KDE Plasma", node: <SiKdeplasma className="w-full h-full text-zinc-300 hover:text-blue-400 mx-auto grayscale hover:grayscale-0 transition-all duration-400 opacity-60 hover:opacity-100" /> },
  { title: "Vim", node: <DiVim className="w-full h-full text-zinc-300 hover:text-white mx-auto grayscale hover:grayscale-0 transition-all duration-400 opacity-60 hover:backdrop-opacity-100" /> },
  { title: "Docker", node: <FaDocker className="w-full h-full text-zinc-300 hover:text-blue-300 mx-auto grayscale hover:grayscale-0 transition-all duration-400 opacity-60 hover:opacity-100" /> },
  { title: "Python", node: <FaPython className="w-full h-full text-zinc-300 hover:text-blue-400 mx-auto grayscale hover:grayscale-0 transition-all duration-400 opacity-60 hover:opacity-100" /> },
  { title: "Markdown", node: <FaMarkdown className="w-full h-full text-zinc-300 hover:text-blue-400 mx-auto grayscale hover:grayscale-0 transition-all duration-400 opacity-60 hover:opacity-100" /> },
  { title: "C", node: <SiC className="w-full h-full text-zinc-300 hover:text-blue-600 mx-auto grayscale hover:grayscale-0 transition-all duration-400 opacity-60 hover:opacity-100" /> },
  { title: "C++", node: <SiCplusplus className="w-full h-full text-zinc-300 hover:text-blue-600 mx-auto grayscale hover:grayscale-0 transition-all duration-400 opacity-60 hover:opacity-100" /> },
  { title: "Java", node: <FaJava className="w-full h-full text-zinc-300 hover:text-red-600 mx-auto grayscale hover:grayscale-0 transition-all duration-400 opacity-60 hover:opacity-100" /> },
  { title: "Git", node: <DiGit className="w-full h-full text-zinc-300 hover:text-red-500 mx-auto grayscale hover:grayscale-0 transition-all duration-400 opacity-60 hover:opacity-100" /> },
  { title: "VS Code", node: <VscVscode className="w-full h-full text-zinc-300 hover:text-blue-500 mx-auto grayscale hover:grayscale-0 transition-all duration-400 opacity-60 hover:opacity-100" /> },
  { title: "GitHub", node: <FaGithub className="w-full h-full text-zinc-300 hover:text-zinc-100 mx-auto grayscale hover:grayscale-0 transition-all duration-400 opacity-60 hover:opacity-100" /> },
  { title: "GitLab", node: <FaGitlab className="w-full h-full text-orange-500 mx-auto grayscale hover:grayscale-0 transition-all duration-400 opacity-60 hover:opacity-100" /> },
  { title: "YAML", node: <SiYaml className="w-full h-full text-zinc-300 hover:text-blue-400 mx-auto grayscale hover:grayscale-0 transition-all duration-400 opacity-60 hover:opacity-100" /> },
];