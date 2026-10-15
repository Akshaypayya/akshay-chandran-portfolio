"use client";

import { useState } from "react";
import {
  Github,
  Linkedin,
  Mail,
  ArrowUpRight,
  FileText,
  MessageCircle,
  Copy,
  Check,
  ExternalLink,
  Phone,
  MapPin,
  Zap
} from "lucide-react";

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const email = "akshay.payya@gmail.com";
  const phone = "+91-7736976618";
  const rawPhone = "917736976618";
  const gmailWebUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;
  const mailtoUrl = `mailto:${email}`;
  const whatsappUrl = `https://wa.me/${rawPhone}`;

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
    } catch {
      // Fallback
    }
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const copyPhone = async () => {
    try {
      await navigator.clipboard.writeText(phone);
    } catch {
      // Fallback
    }
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  return (
    <div className="glass overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-zinc-900/90 via-zinc-950/80 to-blue-950/20 p-7 shadow-2xl backdrop-blur-xl md:p-10">
      <div className="grid gap-10 lg:grid-cols-[1.2fr_.8fr] lg:items-center">
        <div>
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/10 px-3.5 py-1.5 font-mono text-xs text-blue-300">
              <span className="h-2 w-2 rounded-full bg-blue-400 animate-pulse" />
              LET'S CONNECT
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3.5 py-1.5 font-mono text-xs font-semibold text-emerald-300">
              <Zap size={13} className="text-emerald-400" />
              IMMEDIATE JOINER
            </span>
            <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs text-zinc-400">
              <MapPin size={12} /> Kerala, India
            </span>
          </div>

          <p className="mt-6 max-w-2xl text-2xl font-medium leading-relaxed text-zinc-200 md:text-4xl md:leading-tight">
            I’m actively looking for full-time or remote Flutter & Full-Stack roles where I can engineer resilient, production-ready applications end-to-end.
          </p>
          <p className="mt-4 text-sm text-zinc-400">
            Available immediately with zero notice period. Reach out via email, phone, WhatsApp, or LinkedIn.
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
              onClick={copyEmail}
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3.5 font-semibold text-zinc-300 transition hover:bg-white/10 hover:text-white"
              title="Copy email address"
            >
              {copiedEmail ? (
                <>
                  <Check size={17} className="text-green-400" />
                  <span className="text-green-400 font-mono text-xs">Copied!</span>
                </>
              ) : (
                <>
                  <Copy size={17} />
                  <span>Copy Email</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Right side contact links */}
        <div className="grid gap-3">
          {/* Main Email Box */}
          <div className="group rounded-2xl border border-blue-500/20 bg-blue-500/5 p-4 transition duration-300 hover:border-blue-500/40 hover:bg-blue-500/10">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/20 text-blue-300">
                  <Mail size={18} />
                </div>
                <div>
                  <div className="text-xs font-medium text-zinc-400">Direct Email</div>
                  <div className="font-mono text-sm font-semibold text-white">{email}</div>
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                <button
                  onClick={copyEmail}
                  className="rounded-lg border border-white/10 bg-white/5 p-2 text-zinc-400 transition hover:bg-white/10 hover:text-white"
                  title="Copy email address"
                >
                  {copiedEmail ? <Check size={16} className="text-green-400" /> : <Copy size={16} />}
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

          {/* Direct Phone / Call Box */}
          <div className="group rounded-2xl border border-white/10 bg-white/[.02] p-4 transition duration-300 hover:border-white/20 hover:bg-white/[.05]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-300">
                  <Phone size={18} />
                </div>
                <div>
                  <div className="text-xs font-medium text-zinc-400">Direct Phone</div>
                  <div className="font-mono text-sm font-semibold text-white">{phone}</div>
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                <button
                  onClick={copyPhone}
                  className="rounded-lg border border-white/10 bg-white/5 p-2 text-zinc-400 transition hover:bg-white/10 hover:text-white"
                  title="Copy phone number"
                >
                  {copiedPhone ? <Check size={16} className="text-green-400" /> : <Copy size={16} />}
                </button>
                <a
                  href={`tel:${phone}`}
                  className="rounded-lg bg-emerald-500 p-2 text-white transition hover:bg-emerald-600"
                  title="Call now"
                >
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
          </div>

          {/* WhatsApp */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between rounded-xl border border-white/7 bg-white/[.02] p-4 text-zinc-300 transition duration-300 hover:border-white/15 hover:bg-white/[.05] hover:text-white"
          >
            <span className="flex items-center gap-3">
              <MessageCircle size={18} className="text-emerald-400" /> Chat on WhatsApp
            </span>
            <span className="flex items-center gap-2 font-mono text-xs text-zinc-400">
              {phone} <ArrowUpRight size={16} className="text-zinc-500" />
            </span>
          </a>

          {/* Resume */}
          <a
            href="/resumes/Akshay-Chandran-Full-Stack-Developer-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between rounded-xl border border-white/7 bg-white/[.02] p-4 text-zinc-300 transition duration-300 hover:border-white/15 hover:bg-white/[.05] hover:text-white"
          >
            <span className="flex items-center gap-3">
              <FileText size={18} className="text-blue-400" /> View ATS Resume (PDF)
            </span>
            <ArrowUpRight size={16} className="text-zinc-500" />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/Akshaypayya"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between rounded-xl border border-white/7 bg-white/[.02] p-4 text-zinc-300 transition duration-300 hover:border-white/15 hover:bg-white/[.05] hover:text-white"
          >
            <span className="flex items-center gap-3">
              <Github size={18} className="text-purple-400" /> GitHub Profile
            </span>
            <span className="font-mono text-xs text-zinc-500">github.com/Akshaypayya</span>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/akshay-chandranp"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between rounded-xl border border-white/7 bg-white/[.02] p-4 text-zinc-300 transition duration-300 hover:border-white/15 hover:bg-white/[.05] hover:text-white"
          >
            <span className="flex items-center gap-3">
              <Linkedin size={18} className="text-blue-400" /> LinkedIn Profile
            </span>
            <span className="font-mono text-xs text-zinc-500">in/akshay-chandranp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
