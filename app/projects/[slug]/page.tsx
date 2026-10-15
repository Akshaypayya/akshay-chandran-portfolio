import { notFound } from "next/navigation";
import { projects } from "../../../data/projects";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, CheckCircle2, Layers, Cpu, Shield, Sparkles } from "lucide-react";

export function generateStaticParams() {
  return projects.map(p => ({ slug: p.slug }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find(p => p.slug === slug);
  if (!project) notFound();

  const currentIndex = projects.findIndex(p => p.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];
  const prevProject = projects[(currentIndex - 1 + projects.length) % projects.length];

  return (
    <main className="min-h-screen px-5 pb-24 pt-32 sm:pt-36">
      <div className="mx-auto max-w-5xl">
        <div className="flex items-center justify-between">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-400 transition hover:bg-white/10 hover:text-white"
          >
            <ArrowLeft size={16} /> Back to all projects
          </Link>
          <div className="flex items-center gap-2 font-mono text-xs text-zinc-500">
            <span>Project {currentIndex + 1} of {projects.length}</span>
          </div>
        </div>

        {/* Hero Banner */}
        <div className={`mt-8 overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br ${project.gradient} p-7 md:p-14 shadow-2xl relative`}>
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-mono text-xs uppercase tracking-wider text-zinc-400">
              {project.category} · {project.type}
            </span>
            {project.badge && (
              <span className="rounded-full border border-blue-400/30 bg-blue-500/20 px-3 py-0.5 font-mono text-xs font-semibold text-blue-200">
                {project.badge}
              </span>
            )}
          </div>

          <h1 className="mt-5 font-display text-4xl font-extrabold sm:text-6xl md:text-7xl text-white">
            {project.name}
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-zinc-200 md:text-xl">
            {project.description}
          </p>

          {/* Stats Badges */}
          {project.stats && (
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 max-w-2xl">
              {project.stats.map(st => (
                <div key={st.label} className="rounded-2xl border border-white/15 bg-black/40 p-4 backdrop-blur-md">
                  <div className="font-mono text-xs text-zinc-400">{st.label}</div>
                  <div className="mt-1 font-display text-lg font-bold text-white">{st.value}</div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_1.6fr]">
          {/* Left Column: Tech Stack & Architecture */}
          <aside className="space-y-6">
            <div className="glass rounded-3xl p-7">
              <div className="flex items-center gap-2 font-mono text-xs text-zinc-400 uppercase tracking-wider">
                <Cpu size={14} className="text-blue-400" /> Technology Stack
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map(s => (
                  <span
                    key={s}
                    className="rounded-lg border border-white/10 bg-white/[.04] px-3 py-2 font-mono text-xs text-zinc-300 backdrop-blur-sm"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {project.architecture && (
              <div className="glass rounded-3xl p-7">
                <div className="flex items-center gap-2 font-mono text-xs text-zinc-400 uppercase tracking-wider">
                  <Layers size={14} className="text-emerald-400" /> Data Flow & Architecture
                </div>
                <div className="mt-4 rounded-2xl border border-dashed border-white/15 bg-black/40 p-4 font-mono text-xs leading-6 text-zinc-300">
                  {project.architecture}
                </div>
              </div>
            )}

            <div className="glass rounded-3xl p-7 text-center">
              <div className="font-display text-lg font-bold text-white">Interested in this project?</div>
              <p className="mt-2 text-xs text-zinc-400">
                Let's discuss how this architecture and experience can benefit your team.
              </p>
              <Link
                href="/#contact"
                className="mt-5 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 px-5 py-2.5 font-semibold text-xs text-white shadow-md shadow-blue-500/20 transition hover:scale-105"
              >
                Discuss with Akshay <ArrowUpRight size={14} />
              </Link>
            </div>
          </aside>

          {/* Right Column: Features & Impact */}
          <div className="glass rounded-3xl p-7 md:p-10 space-y-10">
            <div>
              <div className="flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-blue-500/20 text-blue-400">
                  <CheckCircle2 size={16} />
                </span>
                <h2 className="font-display text-2xl font-bold text-white md:text-3xl">What I Built & Delivered</h2>
              </div>
              <div className="mt-6 grid gap-3">
                {project.features.map(f => (
                  <div
                    key={f}
                    className="flex items-start gap-3 rounded-2xl border border-white/7 bg-white/[.025] p-4 text-sm leading-relaxed text-zinc-300"
                  >
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-400 shrink-0" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-white/10 pt-8">
              <div className="flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-amber-500/20 text-amber-400">
                  <Sparkles size={16} />
                </span>
                <h2 className="font-display text-2xl font-bold text-white md:text-3xl">Project Impact</h2>
              </div>
              <p className="mt-4 text-base leading-8 text-zinc-300">
                {project.impact}
              </p>
            </div>
          </div>
        </div>

        {/* Project Navigation Footer */}
        <div className="mt-16 flex items-center justify-between border-t border-white/10 pt-8">
          <Link
            href={`/projects/${prevProject.slug}`}
            className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/[.02] px-4 py-3 text-sm text-zinc-400 transition hover:border-white/15 hover:bg-white/5 hover:text-white"
          >
            <ArrowLeft size={16} />
            <div className="text-left">
              <div className="font-mono text-[10px] text-zinc-500">PREVIOUS</div>
              <div className="font-semibold text-white">{prevProject.name}</div>
            </div>
          </Link>

          <Link
            href={`/projects/${nextProject.slug}`}
            className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/[.02] px-4 py-3 text-sm text-zinc-400 transition hover:border-white/15 hover:bg-white/5 hover:text-white"
          >
            <div className="text-right">
              <div className="font-mono text-[10px] text-zinc-500">NEXT</div>
              <div className="font-semibold text-white">{nextProject.name}</div>
            </div>
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </main>
  );
}
