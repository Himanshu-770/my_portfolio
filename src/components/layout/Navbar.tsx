"use client";

import Link from "next/link";
import { Download, Moon } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { toggleTheme } from "@/redux/features/themeSlice";
import { Sun } from "lucide-react";
import { useEffect } from "react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];
export default function Navbar() {
  const dispatch = useDispatch();

  const darkMode = useSelector((state: RootState) => state.theme.darkMode);
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <header className="fixed left-1/2 top-6 z-50 w-[90%] max-w-6xl -translate-x-1/2">
      <nav className="flex items-center justify-between rounded-2xl border border-slate-800 bg-[#080B12]/80 px-6 py-4 backdrop-blur-xl">
        <Link
          href="#home"
          className="font-heading text-2xl font-bold text-[#00D9FF]"
        >
          HS
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-sm text-slate-300 transition duration-300 hover:text-[#00D9FF]"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
         <button
  onClick={() => dispatch(toggleTheme())}
  className="rounded-full border border-slate-700 bg-[#080B12] p-2 text-white transition hover:border-[#00D9FF]"
>
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <a
  href="/resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-2 rounded-xl bg-[#00D9FF] px-5 py-2 font-semibold text-black transition duration-300 hover:bg-[#38BDF8]"
>
            <Download size={18} />
            Resume
          </a>
        </div>
      </nav>
    </header>
  );
}
