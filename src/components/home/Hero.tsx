"use client";

import Image from "next/image";
import avatar from "@/assets/images/avatar.png";
import { Download } from "lucide-react";
import Link from "next/link";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiRedux,
  SiNodedotjs,
} from "react-icons/si";
import { motion, type Variants } from "framer-motion";
import FloatingBadge from "../ui/FloatingBadge";
import Projects from "./Projects";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

const container: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function Hero() {
  const darkMode = useSelector((state: RootState) => state.theme.darkMode);
  return (
    <section
      className={`relative min-h-screen overflow-hidden pt-24 ${
        darkMode ? "bg-[#080B12]" : "bg-[#F8FAFC]"
      }`}
    >
      <div className="mx-auto flex min-h-[calc(100vh-8rem)] w-[90%] max-w-7xl items-center justify-between gap-16">
        {/* Left */}
        <div className="max-w-xl flex-1">
          <motion.div variants={container} initial="hidden" animate="visible">
            <motion.h1
              variants={item}
              className={`font-heading text-5xl font-bold leading-tight lg:text-7xl ${
                darkMode ? "text-white" : "text-slate-900"
              }`}
            >
              Hi, I'm
            </motion.h1>

            <motion.h1
              variants={item}
              className="font-heading text-5xl font-bold leading-tight text-cyan-400 lg:text-7xl"
            >
              Himanshu
            </motion.h1>

            <motion.h1
              variants={item}
              className={`font-heading text-5xl font-bold leading-tight lg:text-7xl ${
                darkMode ? "text-white" : "text-slate-900"
              }`}
            >
              Srivastava.
            </motion.h1>
          </motion.div>

          <p className="mt-5 text-xl font-semibold tracking-wide text-cyan-400">
            Full Stack Developer
          </p>

          <p
            className={`mt-6 max-w-lg text-lg leading-8 ${
              darkMode ? "text-slate-400" : "text-slate-600"
            }`}
          >
            I build fast, scalable, and user-focused web applications using
            React, Next.js, TypeScript, Redux, and modern web technologies.
          </p>
          <div className="mt-10 flex gap-4">
            <Link
              href="#projects"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 rounded-xl px-7 py-3 font-semibold transition duration-300 ${
                darkMode
                  ? "bg-[#00D9FF] text-black hover:bg-[#38BDF8]"
                  : "bg-slate-900 text-white hover:bg-slate-800"
              }`}
            >
              <Download size={18} />
              View Projects
            </Link>

            <a
              href="/new_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 rounded-xl px-7 py-3 font-semibold transition duration-300 ${
                darkMode
                  ? "bg-[#00D9FF] text-black hover:bg-[#38BDF8]"
                  : "bg-slate-900 text-white hover:bg-slate-800"
              }`}
            >
              <Download size={18} />
              Resume
            </a>
          </div>
        </div>

        {/* Right */}

        <div className="hidden flex-1 items-center justify-center lg:flex pt-12">
          <div className="relative h-[620px] w-[620px]">
            {/* Avatar */}
            <div
              className={`absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl ${
                darkMode ? "bg-cyan-400/10" : "bg-cyan-300/30"
              }`}
            />

            <Image
              src={avatar}
              alt="avatar"
              priority
              className="absolute left-1/2 top-1/2 w-[430px] -translate-x-1/2 -translate-y-1/2"
            />

            {/* React */}
            <FloatingBadge
              icon={SiReact}
              name="React"
              color="#61DAFB"
              duration={4}
              className="left-10 top-36"
            />

            {/* Next */}
            <FloatingBadge
              icon={SiNextdotjs}
              name="Next"
              color="#FFFFFF"
              duration={5}
              className="left-1/2 top-12 -translate-x-1/2"
            />

            {/* TypeScript */}
            <FloatingBadge
              icon={SiTypescript}
              name="TS"
              color="#3178C6"
              duration={3.8}
              className="right-6 top-40"
            />

            {/* Redux */}
            <FloatingBadge
              icon={SiRedux}
              name="Redux"
              color="#764ABC"
              duration={4.5}
              className="left-4 bottom-28"
            />

            {/* Node */}
            <FloatingBadge
              icon={SiNodedotjs}
              name="Node"
              color="#339933"
              duration={5.2}
              className="right-4 bottom-28"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
