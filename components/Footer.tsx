"use client";

import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/10 bg-zinc-950/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 py-10 text-sm text-zinc-400 md:flex-row">
        <div>
          <span className="font-display font-semibold text-white">Akshay Chandran<span className="text-blue-400">.</span></span>
          <span className="ml-3 text-xs text-zinc-500">© {new Date().getFullYear()} All rights reserved.</span>
        </div>

        <div className="flex items-center gap-6 font-mono text-xs text-zinc-500">
          <span>Flutter</span>
          <span>·</span>
          <span>Node.js</span>
          <span>·</span>
          <span>MongoDB</span>
        </div>

        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-zinc-300 transition duration-300 hover:border-white/20 hover:bg-white/10 hover:text-white"
        >
          Back to top <ArrowUp size={14} />
        </button>
      </div>
    </footer>
  );
}

