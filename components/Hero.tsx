"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail, Sparkles, Terminal, Code2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="grid-bg relative flex min-h-[92vh] items-center overflow-hidden px-5 pt-28 pb-16">
      {/* Background Glowing Ambient Orbs */}
      <div className="pointer-events-none absolute left-1/4 top-1/4 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-600/15 blur-[120px] animate-pulse-slow" />
      <div className="pointer-events-none absolute right-1/4 top-1/3 h-96 w-96 translate-x-1/2 rounded-full bg-purple-600/10 blur-[120px] animate-pulse-slow" />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.2fr_.8fr]">
        <div>
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/25 bg-blue-500/10 px-4 py-2 font-mono text-xs font-semibold text-blue-300 backdrop-blur-md shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500"></span>
              </span>
              AVAILABLE FOR REMOTE OPPORTUNITIES
            </span>
          </motion.div>

          <motion.p initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mt-8 font-mono text-sm text-zinc-400 flex items-center gap-2">
            <Sparkles size={16} className="text-amber-400" /> Hello, I’m
          </motion.p>

          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="mt-2 font-display text-5xl font-extrabold tracking-tight sm:text-7xl md:text-8xl">
            Akshay<br />
            <span className="text-gradient">Chandran.</span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }} className="mt-7 max-w-2xl text-lg sm:text-xl leading-relaxed text-zinc-300">
            Full-Stack & Mobile Engineer crafting high-performance <span className="font-semibold text-blue-400">Flutter applications</span> and scalable <span className="font-semibold text-indigo-300">Node.js backends</span>.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }} className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 px-6 py-3.5 font-semibold text-white shadow-xl shadow-blue-500/25 transition duration-300 hover:scale-[1.03] hover:shadow-blue-500/40"
            >
              View projects <ArrowUpRight size={18} />
            </a>
            <a
              href="/resumes/Akshay-Chandran-Full-Stack-Developer-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-white/10 bg-white/5 px-6 py-3.5 font-semibold text-white backdrop-blur-md transition duration-300 hover:bg-white/10 hover:border-white/20"
            >
              View resume
            </a>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.45 }} className="mt-10 flex items-center gap-5 text-zinc-400">
            <a href="https://github.com/Akshaypayya" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="rounded-xl border border-white/5 bg-white/[0.03] p-3 transition duration-300 hover:border-white/20 hover:bg-white/10 hover:text-white">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/akshay-chandran-821903226" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="rounded-xl border border-white/5 bg-white/[0.03] p-3 transition duration-300 hover:border-white/20 hover:bg-white/10 hover:text-white">
              <Linkedin size={20} />
            </a>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=akshay.payya@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email" className="rounded-xl border border-white/5 bg-white/[0.03] p-3 transition duration-300 hover:border-white/20 hover:bg-white/10 hover:text-white">
              <Mail size={20} />
            </a>
          </motion.div>
        </div>

        {/* Code Terminal Mockup Card */}
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3, duration: 0.6 }} className="relative">
          <div className="glass relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-zinc-950/70 p-6 shadow-2xl backdrop-blur-2xl">
            <div className="rounded-[1.75rem] border border-white/10 bg-black/50 p-6 shadow-inner">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-rose-500/80" />
                  <span className="h-3 w-3 rounded-full bg-amber-500/80" />
                  <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="flex items-center gap-2 font-mono text-xs text-zinc-400">
                  <Terminal size={14} className="text-blue-400" /> developer.ts
                </div>
              </div>
              <div className="mt-6 font-mono text-sm leading-8">
                <div><span className="text-purple-400 font-semibold">const</span> <span className="text-blue-300">developer</span> = {"{"}</div>
                <div className="pl-6 text-zinc-400">name: <span className="text-emerald-300">"Akshay Chandran"</span>,</div>
                <div className="pl-6 text-zinc-400">title: <span className="text-emerald-300">"Full-Stack & Mobile Engineer"</span>,</div>
                <div className="pl-6 text-zinc-400">experience: <span className="text-amber-300">"3.5+ Years"</span>,</div>
                <div className="pl-6 text-zinc-400">mobile: [<span className="text-sky-300">"Flutter"</span>, <span className="text-sky-300">"Riverpod"</span>],</div>
                <div className="pl-6 text-zinc-400">backend: [<span className="text-emerald-300">"Node.js"</span>, <span className="text-purple-300">"Express"</span>],</div>
                <div className="pl-6 text-zinc-400">database: [<span className="text-emerald-300">"MongoDB"</span>, <span className="text-rose-300">"Redis"</span>]</div>
                <div>{"}"};</div>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-3 gap-2.5">
              {[
                { name: "Flutter", color: "bg-sky-500/20 text-sky-300 border-sky-500/30" },
                { name: "Node.js", color: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30" },
                { name: "MongoDB", color: "bg-green-500/20 text-green-300 border-green-500/30" }
              ].map(tech => (
                <div key={tech.name} className={`rounded-xl border px-3 py-2.5 text-center text-xs font-semibold backdrop-blur-md ${tech.color}`}>
                  {tech.name}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <a href="#about" className="absolute bottom-6 left-1/2 -translate-x-1/2 text-zinc-500 transition hover:text-white animate-bounce">
        <ArrowDown size={20} />
      </a>
    </section>
  );
}

