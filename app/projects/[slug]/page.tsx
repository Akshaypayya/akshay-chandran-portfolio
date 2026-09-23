import { notFound } from "next/navigation";
import { projects } from "../../../data/projects";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

export function generateStaticParams() {
  return projects.map(p => ({ slug: p.slug }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find(p => p.slug === slug);
  if (!project) notFound();

  return (
    <main className="min-h-screen px-5 pb-24 pt-36">
      <div className="mx-auto max-w-5xl">
        <Link href="/#projects" className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-white"><ArrowLeft size={16}/> Back to projects</Link>
        <div className={`mt-10 overflow-hidden rounded-[2rem] border border-white/8 bg-gradient-to-br ${project.gradient} p-7 md:p-12`}>
          <div className="font-mono text-xs text-zinc-500">{project.type}</div>
          <h1 className="mt-4 font-display text-6xl font-bold md:text-8xl">{project.name}</h1>
          <p className="mt-6 max-w-3xl text-xl leading-8 text-zinc-300">{project.description}</p>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_1.4fr]">
          <aside className="glass h-fit rounded-3xl p-7">
            <div className="text-sm text-zinc-500">Technology</div>
            <div className="mt-4 flex flex-wrap gap-2">{project.stack.map(s=><span key={s} className="rounded-lg border border-white/7 bg-white/[.03] px-3 py-2 text-xs text-zinc-400">{s}</span>)}</div>
          </aside>
          <div className="glass rounded-3xl p-7 md:p-10">
            <h2 className="font-display text-3xl font-bold">What I built</h2>
            <div className="mt-6 grid gap-3">{project.features.map(f=><div key={f} className="rounded-2xl border border-white/7 bg-white/[.025] p-4 text-zinc-300">{f}</div>)}</div>
            <h2 className="mt-12 font-display text-3xl font-bold">Project impact</h2>
            <p className="mt-5 leading-8 text-zinc-400">{project.impact}</p>
            <div className="mt-8 rounded-2xl border border-dashed border-white/10 p-6 font-mono text-xs leading-7 text-zinc-500">
              UI → State → Repository → API → Service → Database
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
