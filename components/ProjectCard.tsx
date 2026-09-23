import Link from "next/link";
import Reveal from "./Reveal";
import { ArrowUpRight, Layers, Sparkles } from "lucide-react";
import type { Project } from "../data/projects";

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <Reveal>
      <Link href={`/projects/${project.slug}`} className="group block">
        <article className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#0b0e14] p-7 transition duration-500 hover:-translate-y-1.5 hover:border-blue-500/40 hover:shadow-2xl hover:shadow-blue-500/10 md:p-9">
          {/* Subtle Ambient Background Gradient */}
          <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-50 transition duration-500 group-hover:opacity-75`} />

          <div className="relative grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <div className="flex items-center gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg border border-blue-500/30 bg-blue-500/10 font-mono text-xs font-bold text-blue-300">
                  0{index + 1}
                </span>
                <span className="font-mono text-xs uppercase tracking-wider text-zinc-400">{project.type}</span>
              </div>

              <h3 className="mt-4 font-display text-3xl font-extrabold text-white transition duration-300 group-hover:text-blue-200 md:text-4xl">
                {project.name}
              </h3>

              <p className="mt-4 max-w-xl text-base leading-relaxed text-zinc-300">
                {project.summary}
              </p>

              {/* Stack Pills */}
              <div className="mt-6 flex flex-wrap gap-2">
                {project.stack.slice(0, 6).map(s => (
                  <span
                    key={s}
                    className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 font-mono text-xs font-medium text-zinc-300 backdrop-blur-md transition group-hover:border-white/20 group-hover:bg-white/10"
                  >
                    {s}
                  </span>
                ))}
                {project.stack.length > 6 && (
                  <span className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1.5 font-mono text-xs text-zinc-500">
                    +{project.stack.length - 6} more
                  </span>
                )}
              </div>

              <div className="mt-7 inline-flex items-center gap-2 font-semibold text-blue-300 transition duration-300 group-hover:text-blue-100">
                <span>Explore case study</span>
                <ArrowUpRight size={18} className="transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
            </div>

            {/* Right Side UI Preview Wireframe */}
            <div className="relative min-h-[260px] overflow-hidden rounded-3xl border border-white/10 bg-black/40 p-5 backdrop-blur-md">
              <div className="absolute inset-5 rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.01] shadow-2xl p-5">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <div className="flex items-center gap-2">
                    <Layers size={14} className="text-blue-400" />
                    <span className="font-mono text-xs text-zinc-300 font-semibold">{project.name} Scope</span>
                  </div>
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                </div>

                <div className="mt-4 grid gap-2.5">
                  <div className="rounded-xl border border-white/5 bg-white/[0.04] p-3">
                    <div className="font-mono text-[11px] font-semibold text-zinc-200">Key Focus</div>
                    <div className="mt-1 text-xs text-zinc-400 line-clamp-1">{project.features[0]}</div>
                  </div>
                  <div className="rounded-xl border border-white/5 bg-white/[0.03] p-3">
                    <div className="font-mono text-[11px] font-semibold text-zinc-200">Impact</div>
                    <div className="mt-1 text-xs text-blue-300 line-clamp-1">{project.impact}</div>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-4 right-5 rounded-lg border border-white/10 bg-black/80 px-2.5 py-1 font-mono text-[10px] tracking-wide text-zinc-400 backdrop-blur-md">
                CASE STUDY PREVIEW
              </div>
            </div>
          </div>
        </article>
      </Link>
    </Reveal>
  );
}

