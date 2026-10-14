import HomeClient from "./HomeClient";
import { SiNextdotjs, SiJavascript, SiTypescript, SiExpress, SiPostman, SiC, SiCplusplus, SiYaml, SiKdeplasma, SiGo } from "react-icons/si";
import { FaGithub, FaReact, FaNodeJs, FaDocker, FaPython, FaHtml5, FaCss3Alt, FaMarkdown, FaJava, FaGitlab } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { BiLogoMongodb } from "react-icons/bi";
import { DiMysql, DiGit, DiVim, DiDebian } from "react-icons/di";
import { GrArchlinux } from "react-icons/gr";
import { FcLinux } from "react-icons/fc";
import { VscVscode } from "react-icons/vsc";

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
  { title: "Vim", node: <DiVim className="w-full h-full text-zinc-300 hover:text-white mx-auto grayscale hover:grayscale-0 transition-all duration-400 opacity-60 hover:opacity-100" /> },
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

export default function HomePage() {
  return <HomeClient techStack={techStack} />;
}