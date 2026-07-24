'use client'
import Link from "next/link";
import { Mail } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-[#080B12]">
      <div className="mx-auto max-w-7xl px-6 py-12">
        {/* Branding */}
        <div className="text-center">
          <h2 className="font-heading text-3xl font-bold text-white">
            Himanshu Srivastava
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            Crafting modern, responsive, and scalable web applications using
            React, Next.js, TypeScript, and Node.js.
          </p>
        </div>

        {/* Navigation */}
        <nav className="mt-10 flex flex-wrap justify-center gap-8">
          <Link
            href="#about"
            className="text-slate-400 transition hover:text-cyan-400"
          >
            About
          </Link>

          <Link
            href="#skills"
            className="text-slate-400 transition hover:text-cyan-400"
          >
            Skills
          </Link>

          <Link
            href="#projects"
            className="text-slate-400 transition hover:text-cyan-400"
          >
            Projects
          </Link>

          <Link
            href="#experience"
            className="text-slate-400 transition hover:text-cyan-400"
          >
            Experience
          </Link>

          <Link
            href="#contact"
            className="text-slate-400 transition hover:text-cyan-400"
          >
            Contact
          </Link>
        </nav>

        {/* Social Links */}
        <div className="mt-10 flex justify-center gap-5">
          <a
            href="https://github.com/Himanshu-770"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-slate-700 p-3 text-slate-300 transition-all duration-300 hover:border-cyan-400 hover:text-cyan-400"
          >
            <SiGithub size={20} />
          </a>

          <a
            href="https://www.linkedin.com/in/himanshusrivastava770"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-slate-700 p-3 text-slate-300 transition-all duration-300 hover:border-cyan-400 hover:text-cyan-400"
          >
            <FaLinkedin size={20} />
          </a>

          <a
            href="mailto:himanshusrivastava211006@gmail.com"
            className="rounded-xl border border-slate-700 p-3 text-slate-300 transition-all duration-300 hover:border-cyan-400 hover:text-cyan-400"
          >
            <Mail size={20} />
          </a>
        </div>

        {/* Copyright */}
        <div className="mt-10 border-t border-slate-800 pt-6 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Himanshu Srivastava. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
