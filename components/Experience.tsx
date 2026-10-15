import Reveal from "./Reveal";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";

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
              <MapPin size={12} /> Kochi, Kerala, India
            </span>
          </div>

          <h3 className="mt-3 font-display text-2xl font-bold text-white md:text-3xl">
            Interland Technologies Service Pvt Ltd
          </h3>
          <p className="mt-1 font-medium text-blue-400">Flutter Developer · Mobile App Developer</p>

          <ul className="mt-6 grid gap-3 text-zinc-300 md:grid-cols-2">
            {[
              "Develop and maintain 10+ cross-platform Flutter applications for Android, iOS, and Flutter Web using Dart.",
              "Build responsive, reusable UI components using Riverpod & Provider modular patterns, including MVVM and Clean Architecture.",
              "Translate Figma/product wireframes into maintainable interfaces, collaborating closely with design, backend, QA, and product teams.",
              "Integrate REST APIs, Firebase services, OAuth2 authentication, notifications, payments (Stripe, Razorpay), and local storage across fintech, accounting, and commerce workflows.",
              "Troubleshoot UI/API/device issues, optimize performance, and maintain unit, widget, and integration tests; achieved 95%+ core-module test coverage on a major application.",
              "Contribute to backend/API integration using Node.js, Express.js, TypeScript, and MongoDB; participate in Git reviews and GitHub Actions CI/CD workflows."
            ].map((x, i) => (
              <li
                key={i}
                className="glass-card flex items-start gap-3 rounded-2xl p-4 text-sm leading-relaxed transition duration-300 hover:border-blue-500/30"
              >
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-400 shrink-0" />
                <span>{x}</span>
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
              <MapPin size={12} /> Kochi, Kerala, India
            </span>
          </div>

          <h3 className="mt-3 font-display text-2xl font-bold text-white md:text-3xl">
            KingoLabs Innovations Pvt Ltd
          </h3>
          <p className="mt-1 font-medium text-zinc-400">Flutter Developer Intern</p>

          <ul className="mt-6 grid gap-3 text-zinc-300 md:grid-cols-2">
            {[
              "Developed Flutter interfaces with responsive layouts, reusable widgets, REST API integration, and custom UI components.",
              "Created CustomPainter-based interactive screens and dynamic animations for enhanced engagement.",
              "Contributed to an internal CRM and 3+ cross-platform app projects; resolved device-specific layout, navigation, and integration issues.",
              "Collaborated in active code reviews focusing on null safety, code maintainability, and Flutter best practices."
            ].map((x, i) => (
              <li
                key={i}
                className="glass-card flex items-start gap-3 rounded-2xl p-4 text-sm leading-relaxed transition duration-300 hover:border-white/20"
              >
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-zinc-500 shrink-0" />
                <span>{x}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Reveal>
  );
}
