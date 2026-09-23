import Reveal from "./Reveal";
import { Briefcase, Calendar, MapPin } from "lucide-react";

export default function Experience() {
  return (
    <Reveal>
      <div className="space-y-12">
        {/* Present Experience */}
        <div className="relative border-l-2 border-blue-500/30 pl-7 md:pl-10">
          <div className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full border-2 border-blue-400 bg-blue-500 shadow-[0_0_16px_rgba(59,130,246,0.9)]" />

          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1 font-mono text-xs font-semibold text-blue-300">
              <Calendar size={12} /> APR 2023 — PRESENT
            </span>
            <span className="inline-flex items-center gap-1 font-mono text-xs text-zinc-400">
              <MapPin size={12} /> Kochi, India
            </span>
          </div>

          <h3 className="mt-3 font-display text-2xl font-bold text-white md:text-3xl">
            Interland Technologies Service Pvt Ltd
          </h3>
          <p className="mt-1 font-medium text-blue-400">Flutter Developer · Mobile App Developer</p>

          <ul className="mt-6 grid gap-3 text-zinc-300 md:grid-cols-2">
            {[
              "Architected and delivered 10+ cross-platform Flutter applications for iOS and Android.",
              "Engineered GrowK, a digital 24K gold investment and savings app with Keycloak OAuth2 & Saudi Nafath KYC.",
              "Developed crypto wallet and accounting platforms, including gamified crypto rewards & Payzo Books features.",
              "Translated responsive Figma wireframes into production Flutter interfaces and reusable design system components.",
              "Automated build and deployment pipelines with GitHub Actions, reducing release deployment cycle times by 40%.",
              "Applied MVVM / Clean Architecture with Riverpod & Provider, with 95%+ test coverage across core modules."
            ].map((x, i) => (
              <li
                key={i}
                className="glass-card rounded-2xl p-4 text-sm leading-relaxed transition duration-300 hover:border-blue-500/30"
              >
                {x}
              </li>
            ))}
          </ul>
        </div>

        {/* Previous Experience */}
        <div className="relative border-l-2 border-zinc-700/50 pl-7 md:pl-10">
          <div className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full border-2 border-zinc-500 bg-zinc-800" />

          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs font-medium text-zinc-400">
              <Calendar size={12} /> JAN 2023 — MAR 2023
            </span>
            <span className="inline-flex items-center gap-1 font-mono text-xs text-zinc-400">
              <MapPin size={12} /> Kochi, India
            </span>
          </div>

          <h3 className="mt-3 font-display text-2xl font-bold text-white md:text-3xl">
            KingoLabs Innovations Pvt Ltd
          </h3>
          <p className="mt-1 font-medium text-zinc-400">Flutter Developer Intern</p>

          <ul className="mt-6 grid gap-3 text-zinc-300 md:grid-cols-2">
            {[
              "Built internal CRM mobile tools for sales workflows and client interaction tracking.",
              "Developed 3+ cross-platform mobile apps using custom UI animations, CustomPainter and responsive screen adapters.",
              "Participated in 20+ code reviews focused on code standards, memory leak prevention and performance optimization."
            ].map((x, i) => (
              <li
                key={i}
                className="glass-card rounded-2xl p-4 text-sm leading-relaxed transition duration-300 hover:border-white/20"
              >
                {x}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Reveal>
  );
}

