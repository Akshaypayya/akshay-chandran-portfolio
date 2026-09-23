import Hero from "../components/Hero";
import Section from "../components/Section";
import Reveal from "../components/Reveal";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import ProjectCard from "../components/ProjectCard";
import Contact from "../components/Contact";
import { projects } from "../data/projects";

export default function Home() {
  return (
    <main>
      <Hero />

      <Section id="about" eyebrow="01 / About" title="Engineering products, not just screens.">
        <Reveal>
          <div className="grid gap-8 lg:grid-cols-[1.25fr_.75fr]">
            <div className="glass rounded-3xl p-7 md:p-10">
              <p className="text-lg leading-8 text-zinc-300">
                I’m a Full-Stack and Flutter Developer with 3.5+ years of experience building
                cross-platform mobile, web, and backend solutions. I focus on clean architecture,
                reliable APIs, real-time communication, security, offline persistence, and
                production-ready delivery.
              </p>
              <p className="mt-6 leading-7 text-zinc-400">
                My experience spans FinTech, e-commerce, transportation, and real-time communication,
                including WebRTC, Socket.IO, Redis, Riverpod, payments, authentication,
                KYC, CI/CD, and offline-first workflows.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                ["3.5+", "Years experience"],
                ["10+", "Apps & projects"],
                ["Flutter", "Primary mobile stack"],
                ["Node.js", "Backend stack"]
              ].map(([value, label]) => (
                <div key={label} className="glass rounded-3xl p-6">
                  <div className="font-display text-3xl font-bold">{value}</div>
                  <div className="mt-2 text-sm text-zinc-500">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </Section>

      <Section id="skills" eyebrow="02 / Stack" title="Tools I use to ship products.">
        <Skills />
      </Section>

      <Section id="experience" eyebrow="03 / Experience" title="Building software in the real world.">
        <Experience />
      </Section>

      <Section id="projects" eyebrow="04 / Selected work" title="Five products that show how I think.">
        <div className="grid gap-6">
          {projects.map((project, i) => <ProjectCard key={project.slug} project={project} index={i} />)}
        </div>
      </Section>

      <Section id="process" eyebrow="05 / Engineering approach" title="From requirement to reliable release.">
        <Reveal>
          <div className="grid gap-3 md:grid-cols-5">
            {[
              ["01", "Understand", "Clarify users, constraints and acceptance criteria."],
              ["02", "Architect", "Choose boundaries, data flow and maintainable patterns."],
              ["03", "Build", "Implement features with reusable components and services."],
              ["04", "Validate", "Test APIs, edge cases, states and integrations."],
              ["05", "Ship", "Deploy, observe, fix and iterate."]
            ].map(([n, t, d]) => (
              <div key={n} className="glass rounded-3xl p-6">
                <div className="font-mono text-xs text-blue-400">{n}</div>
                <h3 className="mt-5 font-display text-lg font-semibold">{t}</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-500">{d}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </Section>

      <Section id="education" eyebrow="06 / Education & credentials" title="The foundation behind the work.">
        <Reveal>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="glass rounded-3xl p-7 md:col-span-2">
              <div className="font-mono text-xs text-blue-400">JUN 2015 — JUN 2019</div>
              <h3 className="mt-3 font-display text-2xl font-semibold">B.Tech in Computer Science and Engineering</h3>
              <p className="mt-2 text-zinc-500">Malabar Institute of Technology · Kannur, India</p>
            </div>
            <div className="glass rounded-3xl p-7">
              <div className="font-mono text-xs text-blue-400">CERTIFICATIONS</div>
              <div className="mt-4 space-y-4 text-sm text-zinc-400">
                <p>Multi-Vendor Full-Stack Development — Udemy</p>
                <p>Flutter Development Certification — Spectrum Softech & Avodha Institute (2023)</p>
              </div>
            </div>
          </div>
        </Reveal>
      </Section>

      <Section id="contact" eyebrow="07 / Contact" title="Have a product worth building?">
        <Contact />
      </Section>
    </main>
  );
}
