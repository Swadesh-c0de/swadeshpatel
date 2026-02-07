"use client";

import { motion } from "framer-motion";
import LogoLoop from "@/components/LogoLoop";
import { Link as LinkIcon, Target, Wrench, ExternalLink, ArrowDown, MapPin, Mail, LayoutGrid, Download } from "lucide-react";
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
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h1 className="text-6xl sm:text-8xl md:text-9xl font-black tracking-tighter text-white leading-[0.85]">
            SWADESH<br />PATEL
          </h1>

          <p className="max-w-xl mx-auto text-lg text-zinc-500 font-light">
            <span className="text-zinc-200 font-medium"> Full Stack Developer</span> and <span className="text-zinc-200 font-medium">Arch Linux</span> enthusiast building high-performace web applications with
            <span className="text-zinc-200 font-medium"> Next.js</span> and <span className="text-zinc-200 font-medium">Express.js</span>.
          </p>

          <div className="pt-4">
            <a
              href="https://drive.google.com/file/d/1iA1a2yRGqoMa0aG10zK3KS81xiSW8Jnh/view?usp=sharing"
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
        viewport={{ once: true, margin: "-100px" }}
        className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[minmax(180px,auto)]"
      >

        {/* BIO CARD (Large) */}
        <BentoCard className="md:col-span-2 lg:col-span-2 row-span-1 flex flex-col justify-center p-8 bg-zinc-900/20">
          <h3 className="text-2xl font-bold text-white mb-2">Full-Stack Engineer</h3>
          <p className="text-zinc-400 leading-relaxed">
            Specializing in building scalable web applications. I merge academic rigor with freelance pragmatism to deliver clean, maintainable code.
          </p>
        </BentoCard>

        {/* SOCIALS */}
        <BentoCard className="md:col-span-1 bg-zinc-900/40 flex items-center justify-center gap-4">
          <SocialLink icon={<FaGithub className="w-8 h-8" />} href="https://github.com/Swadesh-c0de/" label="GitHub" />
          <SocialLink icon={<FiLinkedin className="w-8 h-8" />} href="https://in.linkedin.com/in/swadeshpatel/" label="LinkedIn" />
          <SocialLink icon={<Mail className="w-8 h-8" />} href="/contact" label="Contact" />
        </BentoCard>

        {/* LOCATION / STATUS */}
        <BentoCard className="hidden lg:flex flex-col items-center justify-center bg-zinc-900/10">
          <MapPin className="w-8 h-8 text-zinc-600 mb-2" />
          <div className="text-center">
            <span className="text-zinc-200 font-bold block">India, IN</span>
            <span className="text-zinc-500 text-xs font-mono">UTC+05:30</span>
          </div>
        </BentoCard>


        {/* TECH STACK (Wide) */}
        <BentoCard className="md:col-span-3 lg:col-span-4 overflow-hidden relative min-h-[160px] flex flex-col justify-center bg-zinc-950/50">
          <div className="absolute top-4 left-6 flex items-center gap-2">
            <BsLightningCharge className="text-zinc-500 w-4 h-4" />
            <span className="text-xs uppercase tracking-widest text-zinc-600 font-bold">Tech Stack</span>
          </div>
          <div className="mask-gradient w-full">
            <LogoLoop logos={[...techStack]} speed={40} direction="left" logoHeight={40} gap={50} pauseOnHover={true} />
          </div>
        </BentoCard>


        {/* FOCUS: Architecture */}
        <BentoCard className="md:col-span-1 bg-zinc-900/20 p-6 flex flex-col justify-between">
          <LayoutGrid className="w-8 h-8 text-zinc-700 mb-4" />
          <div>
            <h4 className="text-lg font-bold text-zinc-200">Architecture</h4>
            <p className="text-xs text-zinc-500 mt-1">Modular & Scalable Systems</p>
          </div>
        </BentoCard>

        {/* FOCUS: Linux */}
        <BentoCard className="md:col-span-1 bg-zinc-900/20 p-6 flex flex-col justify-between">
          <GrArchlinux className="w-8 h-8 text-zinc-700 mb-4" />
          <div>
            <h4 className="text-lg font-bold text-zinc-200">Linux Ricing</h4>
            <p className="text-xs text-zinc-500 mt-1">KDE, Hyprland & Terminal Workflows</p>
          </div>
        </BentoCard>

        {/* LINKS */}
        <BentoCard className="md:col-span-1 lg:col-span-2 bg-white/5 p-6 flex flex-col justify-center items-center text-center group cursor-pointer hover:bg-white/10 transition-colors">
          <a href="/projects" className="w-full h-full flex flex-col items-center justify-center">
            <Target className="w-10 h-10 text-white mb-3 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-bold text-white">View Projects</h3>
            <p className="text-sm text-zinc-500">Explore my latest work</p>
          </a>
        </BentoCard>


        {/* WORKFLOW ITEMS (Small Grid within Grid) */}
        <div className="md:col-span-3 lg:col-span-4 grid grid-cols-2 sm:grid-cols-4 gap-4">
          <MiniCard title="Arch Linux" icon={<GrArchlinux className="w-full h-full text-zinc-300 hover:text-blue-400 mx-auto grayscale hover:grayscale-0 transition-all duration-400 opacity-60 hover:opacity-100" />} />
          <MiniCard title="VS Code" icon={<VscVscode className="w-full h-full text-zinc-300 hover:text-blue-400 mx-auto grayscale hover:grayscale-0 transition-all duration-400 opacity-60 hover:opacity-100" />} />
          <MiniCard title="NextJS" icon={<SiNextdotjs className="w-full h-full text-zinc-300 hover:text-zinc-300 mx-auto grayscale hover:grayscale-0 transition-all duration-400 opacity-60 hover:opacity-100" />} />
          <MiniCard title="ExpressJS" icon={<SiExpress className="w-full h-full text-zinc-300 hover:text-zinc-300 mx-auto grayscale hover:grayscale-0 transition-all duration-400 opacity-60 hover:opacity-100" />} />
        </div>

      </motion.div>

    </div>
  );
}

function BentoCard({ children, className = "" }) {
  return (
    <motion.div
      variants={fadeInUp}
      className={`rounded-3xl border border-zinc-800/50 backdrop-blur-sm overflow-hidden ${className}`}
    >
      {children}
    </motion.div>
  );
}

function MiniCard({ title, icon }) {
  return (
    <motion.div
      variants={fadeInUp}
      className="bg-black border border-zinc-800 rounded-2xl p-4 flex items-center gap-3 hover:border-zinc-600 transition-colors"
    >
      <div className="text-zinc-500 text-xl">{icon}</div>
      <span className="text-zinc-300 font-medium text-sm">{title}</span>
    </motion.div>
  )
}

function SocialLink({ icon, href, label, download }) {
  return (
    <a href={href} target={href === "/contact" || download ? "_self" : "_blank"} download={download} className="p-3 rounded-full bg-white/5 text-zinc-400 hover:bg-white hover:text-black transition-all duration-300" title={label}>
      {icon}
    </a>
  )
}


/* Data Arrays */
const techStack = [
  { title: "React", node: <FaReact className="w-full h-full text-zinc-300 hover:text-cyan-400 mx-auto grayscale hover:grayscale-0 transition-all duration-400 opacity-60 hover:opacity-100" /> },
  { title: "JavaScript", node: <SiJavascript className="w-full h-full text-zinc-300 hover:text-yellow-400 mx-auto grayscale hover:grayscale-0 transition-all duration-400 opacity-60 hover:opacity-100" /> },
  { title: "CSS3", node: <FaCss3Alt className="w-full h-full text-zinc-300 hover:text-blue-500 mx-auto grayscale hover:grayscale-0 transition-all duration-400 opacity-60 hover:opacity-100" /> },
  { title: "Tailwind", node: <RiTailwindCssFill className="w-full h-full text-zinc-300 hover:text-sky-400 mx-auto grayscale hover:grayscale-0 transition-all duration-400 opacity-60 hover:opacity-100" /> },
  { title: "Next.js", node: <SiNextdotjs className="w-full h-full text-zinc-300 hover:text-gray-300 mx-auto grayscale hover:grayscale-0 transition-all duration-400 opacity-60 hover:opacity-100" /> },
  { title: "Node.js", node: <FaNodeJs className="w-full h-full text-zinc-300 hover:text-green-400 mx-auto grayscale hover:grayscale-0 transition-all duration-400 opacity-60 hover:opacity-100" /> },
  { title: "Express", node: <SiExpress className="w-full h-full text-zinc-300 hover:text-gray-400 mx-auto grayscale hover:grayscale-0 transition-all duration-400 opacity-60 hover:opacity-100" /> },
  { title: "Arch", node: <GrArchlinux className="w-full h-full text-zinc-300 hover:text-blue-400 mx-auto grayscale hover:grayscale-0 transition-all duration-400 opacity-60 hover:opacity-100" /> },
  { title: "MongoDB", node: <BiLogoMongodb className="w-full h-full text-zinc-300 hover:text-green-500 mx-auto grayscale hover:grayscale-0 transition-all duration-400 opacity-60 hover:opacity-100" /> },
  { title: "SQL", node: <DiMysql className="w-full h-full text-zinc-300 hover:text-blue-400 mx-auto grayscale hover:grayscale-0 transition-all duration-400 opacity-60 hover:opacity-100" /> },
  { title: "Linux", node: <FcLinux className="w-full h-full text-zinc-300 hover:text-blue-400 mx-auto grayscale hover:grayscale-0 transition-all duration-400 opacity-60 hover:opacity-100" /> },
  { title: "Docker", node: <FaDocker className="w-full h-full text-zinc-300 hover:text-blue-300 mx-auto grayscale hover:grayscale-0 transition-all duration-400 opacity-60 hover:opacity-100" /> },
  { title: "Python", node: <FaPython className="w-full h-full text-zinc-300 hover:text-blue-400 mx-auto grayscale hover:grayscale-0 transition-all duration-400 opacity-60 hover:opacity-100" /> },
  { title: "Markdown", node: <FaMarkdown className="w-full h-full text-zinc-300 hover:text-blue-400 mx-auto grayscale hover:grayscale-0 transition-all duration-400 opacity-60 hover:opacity-100" /> },
  { title: "HTML5", node: <FaHtml5 className="w-full h-full text-zinc-300 hover:text-orange-500 mx-auto grayscale hover:grayscale-0 transition-all duration-400 opacity-60 hover:opacity-100" /> },
  { title: "C", node: <SiC className="w-full h-full text-zinc-300 hover:text-blue-600 mx-auto grayscale hover:grayscale-0 transition-all duration-400 opacity-60 hover:opacity-100" /> },
  { title: "Postman", node: <SiPostman className="w-full h-full text-zinc-300 hover:text-orange-400 mx-auto grayscale hover:grayscale-0 transition-all duration-400 opacity-60 hover:opacity-100" /> },
  { title: "Git", node: <DiGit className="w-full h-full text-zinc-300 hover:text-red-500 mx-auto grayscale hover:grayscale-0 transition-all duration-400 opacity-60 hover:opacity-100" /> },
  { title: "C++", node: <SiCplusplus className="w-full h-full text-zinc-300 hover:text-blue-600 mx-auto grayscale hover:grayscale-0 transition-all duration-400 opacity-60 hover:opacity-100" /> },
  { title: "TypeScript", node: <SiTypescript className="w-full h-full text-zinc-300 hover:text-blue-500 mx-auto grayscale hover:grayscale-0 transition-all duration-400 opacity-60 hover:opacity-100" /> },
  { title: "Java", node: <FaJava className="w-full h-full text-zinc-300 hover:text-red-600 mx-auto grayscale hover:grayscale-0 transition-all duration-400 opacity-60 hover:opacity-100" /> },
  { title: "VS Code", node: <VscVscode className="w-full h-full text-zinc-300 hover:text-blue-500 mx-auto grayscale hover:grayscale-0 transition-all duration-400 opacity-60 hover:opacity-100" /> },
  { title: "GitHub", node: <FaGithub className="w-full h-full text-zinc-300 hover:text-blue-500 mx-auto grayscale hover:grayscale-0 transition-all duration-400 opacity-60 hover:opacity-100" /> },
  { title: "YAML", node: <SiYaml className="w-full h-full text-zinc-300 hover:text-blue-400 mx-auto grayscale hover:grayscale-0 transition-all duration-400 opacity-60 hover:opacity-100" /> },
  { title: "GitLab", node: <FaGitlab className="w-full h-full text-orange-500 mx-auto grayscale hover:grayscale-0 transition-all duration-400 opacity-60 hover:opacity-100" /> },
  { title: "KDE Plasma", node: <SiKdeplasma className="w-full h-full text-zinc-300 hover:text-blue-400 mx-auto grayscale hover:grayscale-0 transition-all duration-400 opacity-60 hover:opacity-100" /> },
];