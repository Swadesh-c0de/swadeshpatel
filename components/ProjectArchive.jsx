"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { allProjects } from "@/data/projects";

const categories = ["All", ...new Set(allProjects.map((project) => project.type))];

export default function ProjectArchive() {
  const [category, setCategory] = useState("All");
  const projects = category === "All"
    ? allProjects
    : allProjects.filter((project) => project.type === category);

  return (
    <section className="w-full space-y-6" aria-labelledby="project-archive-title">
      <div className="flex flex-wrap gap-3 items-center justify-between border-b border-zinc-900 pb-4 w-full">
        <h2 id="project-archive-title" className="text-xs font-mono uppercase tracking-[0.2em] text-zinc-400 font-medium">Project Archive</h2>
        <span role="status" aria-live="polite" className="text-xs font-mono text-zinc-400">
          {projects.length} {projects.length === 1 ? "project" : "projects"}
        </span>
      </div>
      <div className="project-filters" role="group" aria-label="Filter projects by category">
        {categories.map((item) => (
          <button key={item} type="button" aria-pressed={category === item} onClick={() => setCategory(item)}>
            {item}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 w-full">
        {projects.map((project) => <GlassProjectCard key={project.title} project={project} />)}
      </div>
    </section>
  );
}

function GlassProjectCard({ project }) {
    return (
        <div
            className="project-card group relative bg-zinc-950/40 border border-zinc-800/40 hover:border-zinc-700/60 rounded-3xl overflow-hidden p-6 sm:p-7 flex flex-col justify-between transition-colors duration-200"
        >
            <div>
                <div className="flex justify-between items-start mb-4">
                    <div className="space-y-1">
                        <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest font-semibold">{project.type}</span>
                        <h3 className="text-lg font-bold text-white tracking-tight leading-tight group-hover:text-zinc-100 transition-colors">{project.title}</h3>
                    </div>
                    <div className="flex gap-1.5 shrink-0">
                        {project.links.github && (
                            <a
                                href={project.links.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`${project.title} Source Code`}
                                className="min-w-11 min-h-11 inline-flex items-center justify-center p-2 text-zinc-400 hover:text-white transition-colors bg-zinc-900/40 rounded-xl border border-zinc-800/40 hover:border-zinc-700"
                                title="Source Code"
                            >
                                <FaGithub className="w-3.5 h-3.5" />
                            </a>
                        )}
                        {project.links.live && (
                            <a
                                href={project.links.live}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`${project.title} Live Demo`}
                                className="min-w-11 min-h-11 inline-flex items-center justify-center p-2 text-zinc-400 hover:text-white transition-colors bg-zinc-900/40 rounded-xl border border-zinc-800/40 hover:border-zinc-700"
                                title="Live Demo"
                            >
                                <ArrowUpRight className="w-3.5 h-3.5" />
                            </a>
                        )}
                    </div>
                </div>

                <p className="text-zinc-400 text-xs sm:text-sm font-light leading-relaxed mb-6">
                    {project.desc}
                </p>
            </div>

            <div className="pt-3 border-t border-zinc-900/80">
                <div className="flex flex-wrap gap-1.5">
                    {project.stack.map(tech => (
                        <span
                            key={tech}
                            className="px-2 py-0.5 rounded-md bg-zinc-900/30 border border-zinc-800/40 text-[10px] font-mono text-zinc-400 hover:text-white transition-colors"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}

