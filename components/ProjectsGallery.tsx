"use client";

import { useState } from "react";
import ProjectCard from "./ProjectCard";
import type { Project } from "../data/projects";

type Category = "All" | "FinTech & Banking" | "Security & Systems" | "Full-Stack & Cloud" | "Real-Time & Mobile";

export default function ProjectsGallery({ projects }: { projects: Project[] }) {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const categories: Category[] = [
    "All",
    "FinTech & Banking",
    "Security & Systems",
    "Full-Stack & Cloud",
    "Real-Time & Mobile"
  ];

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <div>
      {/* Category Filter Tabs */}
      <div className="mb-10 flex flex-wrap items-center gap-2">
        {categories.map(cat => {
          const count = cat === "All"
            ? projects.length
            : projects.filter(p => p.category === cat).length;
          const isActive = activeCategory === cat;

          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`flex items-center gap-2 rounded-xl px-4 py-2 font-mono text-xs font-semibold transition duration-300 ${
                isActive
                  ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg shadow-blue-500/25 scale-[1.02]"
                  : "border border-white/10 bg-white/5 text-zinc-400 hover:border-white/20 hover:bg-white/10 hover:text-white"
              }`}
            >
              <span>{cat}</span>
              <span className={`rounded-full px-1.5 py-0.2 text-[10px] ${
                isActive ? "bg-white/20 text-white" : "bg-white/5 text-zinc-500"
              }`}>
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Projects Grid */}
      <div className="grid gap-6">
        {filteredProjects.map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i} />
        ))}
      </div>
    </div>
  );
}
