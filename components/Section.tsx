import Reveal from "./Reveal";
export default function Section({ id, eyebrow, title, children }: { id: string; eyebrow: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="mx-auto max-w-6xl scroll-mt-28 px-5 py-24 md:py-32">
      <Reveal>
        <div className="mb-10 max-w-3xl">
          <div className="font-mono text-xs uppercase tracking-[.2em] text-blue-400">{eyebrow}</div>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight md:text-5xl">{title}</h2>
        </div>
      </Reveal>
      {children}
    </section>
  );
}
