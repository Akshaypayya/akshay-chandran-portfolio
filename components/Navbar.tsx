"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Process", href: "#process" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 py-4 backdrop-blur-md">
      <nav className="glass mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-5 py-3 shadow-xl transition-all border border-white/10 bg-black/40">
        <Link href="/#" className="group font-display text-lg font-bold tracking-tight text-white transition hover:opacity-90">
          Akshay Chandran<span className="text-blue-400 inline-block transition-transform duration-300 group-hover:scale-125 group-hover:text-blue-300">.</span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden items-center gap-7 text-sm font-medium text-zinc-400 md:flex">
          {navLinks.map(link => (
            <a
              key={link.name}
              href={link.href}
              className="relative py-1 transition hover:text-white after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden items-center gap-1.5 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition duration-300 hover:scale-[1.03] hover:shadow-blue-500/35 sm:flex"
          >
            Let’s talk <ArrowUpRight size={15} />
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-zinc-300 transition hover:bg-white/10 hover:text-white md:hidden"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="glass mx-auto mt-2 max-w-6xl rounded-2xl p-5 border border-white/10 bg-zinc-950/90 shadow-2xl backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-4 text-base font-medium">
            {navLinks.map(link => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-3 py-2 text-zinc-300 transition hover:bg-white/5 hover:text-white"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 px-4 py-2.5 text-center font-semibold text-white shadow-lg shadow-blue-500/20"
            >
              Let’s talk <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

