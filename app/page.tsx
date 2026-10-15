import Hero from "../components/Hero";
import Section from "../components/Section";
import Reveal from "../components/Reveal";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import ProjectsGallery from "../components/ProjectsGallery";
import Contact from "../components/Contact";
import { projects } from "../data/projects";
import { ShieldCheck, Zap, Award, Code2, Smartphone, Terminal, Server } from "lucide-react";

export default function Home() {
  return (
    <main>
      <Hero />

      {/* About Section */}
      <Section id="about" eyebrow="01 / About" title="Engineering products, not just screens.">
        <Reveal>
          <div className="grid gap-8 lg:grid-cols-[1.25fr_.75fr]">
            <div className="glass rounded-3xl p-7 md:p-10">
              <p className="text-lg leading-8 text-zinc-300">
                I’m a <span className="font-semibold text-white">Flutter Developer & Full-Stack Engineer</span> with <span className="font-semibold text-blue-400">3.5+ years of experience</span> building cross-platform mobile, web, and backend applications. I specialize in modular architecture, Riverpod/Provider state management, REST APIs, WebSockets, Firebase, and production-ready delivery.
              </p>
              <p className="mt-5 leading-7 text-zinc-400">
                My work spans FinTech & digital gold savings (Saudi Nafath KYC), business ERP & accounting (Payzo Books), military-grade mobile security tooling (<span className="text-zinc-200">Ironclad RASP SDK published on pub.dev</span>), multi-vendor marketplaces, real-time ride-booking with live GPS routing, and sub-100ms WebRTC communication platforms.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3 pt-6 border-t border-white/10">
                <span className="inline-flex items-center gap-2 rounded-xl border border-emerald-500/20 bg-emerald-500/10 px-3.5 py-1.5 font-mono text-xs font-semibold text-emerald-300">
                  <Zap size={14} className="text-emerald-400" /> Immediate Joiner
                </span>
                <span className="inline-flex items-center gap-2 rounded-xl border border-blue-500/20 bg-blue-500/10 px-3.5 py-1.5 font-mono text-xs font-semibold text-blue-300">
                  <ShieldCheck size={14} className="text-blue-400" /> Published pub.dev Author
                </span>
                <span className="inline-flex items-center gap-2 rounded-xl border border-purple-500/20 bg-purple-500/10 px-3.5 py-1.5 font-mono text-xs font-semibold text-purple-300">
                  <Award size={14} className="text-purple-400" /> 95%+ Core Test Coverage
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {[
                ["3.5+", "Years experience"],
                ["10+", "Production apps"],
                ["38", "Security packages"],
                ["0 Days", "Notice period (Immediate)"]
              ].map(([value, label]) => (
                <div key={label} className="glass rounded-3xl p-6 flex flex-col justify-between">
                  <div className="font-display text-3xl font-extrabold text-white">{value}</div>
                  <div className="mt-2 font-mono text-xs text-zinc-400">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </Section>

      {/* Skills Section */}
      <Section id="skills" eyebrow="02 / Technical Skills" title="Tools & technologies I use to ship products.">
        <Skills />
      </Section>

      {/* Experience Section */}
      <Section id="experience" eyebrow="03 / Experience" title="Building software in the real world.">
        <Experience />
      </Section>

      {/* Projects Section */}
      <Section
        id="projects"
        eyebrow="04 / Selected Work"
        title="Featured products & systems that showcase my engineering depth."
      >
        <ProjectsGallery projects={projects} />
      </Section>

      {/* Engineering Process */}
      <Section id="process" eyebrow="05 / Engineering Approach" title="From requirement to reliable release.">
        <Reveal>
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-5">
            {[
              ["01", "Understand", "Deconstruct business requirements, user journeys, edge cases, and compliance criteria."],
              ["02", "Architect", "Establish clean boundaries: Feature-First, MVVM, Riverpod/Provider state, and strict models."],
              ["03", "Build", "Implement reusable widgets, secure storage, API services, and native platform channels."],
              ["04", "Validate", "Maintain unit, widget, and integration test suites; achieved 95%+ core coverage."],
              ["05", "Ship & Iterate", "Automate CI/CD pipelines with GitHub Actions, observe telemetry, and refine release cycles."]
            ].map(([n, t, d]) => (
              <div key={n} className="glass rounded-3xl p-6 flex flex-col justify-between">
                <div>
                  <div className="font-mono text-xs text-blue-400 font-semibold">{n}</div>
                  <h3 className="mt-4 font-display text-lg font-bold text-white">{t}</h3>
                </div>
                <p className="mt-3 text-xs leading-5 text-zinc-400">{d}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </Section>

      {/* Education & Certifications */}
      <Section id="education" eyebrow="06 / Education & Certifications" title="The foundation behind the craft.">
        <Reveal>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="glass rounded-3xl p-7 md:col-span-2 flex flex-col justify-between">
              <div>
                <div className="font-mono text-xs text-blue-400 font-semibold">JUN 2015 — JUN 2019</div>
                <h3 className="mt-3 font-display text-2xl font-bold text-white">
                  B.Tech — Computer Science and Engineering
                </h3>
                <p className="mt-2 text-zinc-400">Malabar Institute of Technology · Kannur, Kerala, India</p>
              </div>
              <div className="mt-6 flex flex-wrap gap-2 pt-4 border-t border-white/10 font-mono text-xs text-zinc-500">
                <span className="rounded-lg bg-white/5 px-2.5 py-1">Data Structures</span>
                <span className="rounded-lg bg-white/5 px-2.5 py-1">Algorithms</span>
                <span className="rounded-lg bg-white/5 px-2.5 py-1">Operating Systems</span>
                <span className="rounded-lg bg-white/5 px-2.5 py-1">Networking & Security</span>
              </div>
            </div>

            <div className="glass rounded-3xl p-7 flex flex-col justify-between">
              <div>
                <div className="font-mono text-xs text-blue-400 font-semibold">CREDENTIALS & COURSES</div>
                <div className="mt-4 space-y-4 text-xs text-zinc-300 leading-relaxed">
                  <div className="rounded-xl border border-white/5 bg-white/[.02] p-3">
                    <div className="font-semibold text-white">Udemy — Flutter Multi-Vendor E-Commerce</div>
                    <div className="text-zinc-500 mt-1">Shop, Food & Store Apps | Node.js | Express | MongoDB | Deployment</div>
                  </div>
                  <div className="rounded-xl border border-white/5 bg-white/[.02] p-3">
                    <div className="font-semibold text-white">Flutter Development Certification</div>
                    <div className="text-zinc-500 mt-1">Spectrum Softech & Avodha Institute (2023)</div>
                  </div>
                </div>
              </div>
              <div className="mt-4 font-mono text-[11px] text-emerald-400">
                ⚡ Immediate Joiner · Figma UI · Git Reviews
              </div>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* Contact Section */}
      <Section id="contact" eyebrow="07 / Contact" title="Have an opportunity or project worth discussing?">
        <Contact />
      </Section>
    </main>
  );
}
