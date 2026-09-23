"use client";

import { useState } from "react";
import { Github, Linkedin, Mail, ArrowUpRight, FileText, MessageCircle, Copy, Check, ExternalLink } from "lucide-react";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "akshay.payya@gmail.com";
  const gmailWebUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;
  const mailtoUrl = `mailto:${email}`;

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div className="glass overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-zinc-900/90 via-zinc-950/80 to-blue-950/20 p-7 shadow-2xl backdrop-blur-xl md:p-10">
      <div className="grid gap-10 lg:grid-cols-[1.2fr_.8fr] lg:items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/10 px-3.5 py-1.5 font-mono text-xs text-blue-300">
            <span className="h-2 w-2 rounded-full bg-blue-400 animate-pulse" />
            LET'S CONNECT
          </div>
          <p className="mt-6 max-w-2xl text-2xl font-medium leading-relaxed text-zinc-200 md:text-4xl md:leading-tight">
            I’m open to remote Flutter and full-stack opportunities where I can build useful products end to end.
          </p>
          <p className="mt-4 text-sm text-zinc-400">
            Reach out via email, WhatsApp, or connect on social media.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            {/* Primary Action - Gmail Web */}
            <a
              href={gmailWebUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-blue-500/25 transition duration-300 hover:scale-[1.02] hover:shadow-blue-500/40"
            >
              Compose in Gmail <ExternalLink size={17} />
            </a>

            {/* Direct Mailto */}
            <a
              href={mailtoUrl}
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3.5 font-semibold text-white transition hover:bg-white/10 hover:border-white/20"
            >
              Default Mail App <Mail size={17} />
            </a>

            {/* Copy Button */}
            <button
              onClick={copyToClipboard}
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3.5 font-semibold text-zinc-300 transition hover:bg-white/10 hover:text-white"
              title="Copy email address"
            >
              {copied ? (
                <>
                  <Check size={17} className="text-green-400" />
                  <span className="text-green-400 font-mono text-xs">Copied!</span>
                </>
              ) : (
                <>
                  <Copy size={17} />
                  <span>Copy Address</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Right side contact links */}
        <div className="grid gap-3">
          {/* Main Email Box with address */}
          <div className="group rounded-2xl border border-blue-500/20 bg-blue-500/5 p-4 transition duration-300 hover:border-blue-500/40 hover:bg-blue-500/10">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/20 text-blue-300">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="text-xs font-medium text-zinc-400">Direct Email</div>
                  <div className="font-mono text-sm font-semibold text-white">{email}</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={copyToClipboard}
                  className="rounded-lg border border-white/10 bg-white/5 p-2 text-zinc-400 transition hover:bg-white/10 hover:text-white"
                  title="Copy email address"
                >
                  {copied ? <Check size={16} className="text-green-400" /> : <Copy size={16} />}
                </button>
                <a
                  href={gmailWebUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg bg-blue-500 p-2 text-white transition hover:bg-blue-600"
                  title="Open in Gmail"
                >
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
          </div>

          <a
            href="/resumes/Akshay-Chandran-Full-Stack-Developer-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between rounded-xl border border-white/7 bg-white/[.02] p-4 text-zinc-300 transition duration-300 hover:border-white/15 hover:bg-white/[.05] hover:text-white"
          >
            <span className="flex items-center gap-3"><FileText size={18} className="text-blue-400" /> View Resume</span>
            <ArrowUpRight size={16} className="text-zinc-500" />
          </a>

          <a
            href="https://wa.me/9177736976618"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between rounded-xl border border-white/7 bg-white/[.02] p-4 text-zinc-300 transition duration-300 hover:border-white/15 hover:bg-white/[.05] hover:text-white"
          >
            <span className="flex items-center gap-3"><MessageCircle size={18} className="text-emerald-400" /> Chat on WhatsApp</span>
            <ArrowUpRight size={16} className="text-zinc-500" />
          </a>

          <a
            href="https://github.com/Akshaypayya"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between rounded-xl border border-white/7 bg-white/[.02] p-4 text-zinc-300 transition duration-300 hover:border-white/15 hover:bg-white/[.05] hover:text-white"
          >
            <span className="flex items-center gap-3"><Github size={18} className="text-purple-400" /> GitHub</span>
            <ArrowUpRight size={16} className="text-zinc-500" />
          </a>

          <a
           href="https://www.linkedin.com/in/akshay-chandranp"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between rounded-xl border border-white/7 bg-white/[.02] p-4 text-zinc-300 transition duration-300 hover:border-white/15 hover:bg-white/[.05] hover:text-white"
          >
            <span className="flex items-center gap-3"><Linkedin size={18} className="text-blue-400" /> LinkedIn</span>
            <ArrowUpRight size={16} className="text-zinc-500" />
          </a>
        </div>
      </div>
    </div>
  );
}

