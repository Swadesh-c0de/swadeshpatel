import HomeClient from "./HomeClient";
import { SiNextdotjs, SiTypescript, SiExpress, SiGo, SiPostgresql } from "react-icons/si";
import { FaReact, FaNodeJs, FaDocker, FaPython, FaGitAlt, FaLinux } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { BiLogoMongodb } from "react-icons/bi";

export const metadata = { alternates: { canonical: "/" } };

const technologies = [
  ["Next.js", SiNextdotjs], ["React", FaReact], ["TypeScript", SiTypescript],
  ["Tailwind CSS", RiTailwindCssFill], ["Node.js", FaNodeJs], ["Express", SiExpress],
  ["Go", SiGo], ["PostgreSQL", SiPostgresql], ["MongoDB", BiLogoMongodb],
  ["Docker", FaDocker], ["Python", FaPython], ["Linux", FaLinux], ["Git", FaGitAlt],
];

export default function HomePage() {
  const techStack = technologies.map(([title, Icon]) => ({
    title,
    node: <Icon className="w-10 h-10 text-zinc-400 hover:text-white transition-colors duration-200" />,
  }));
  return <HomeClient techStack={techStack} />;
}
