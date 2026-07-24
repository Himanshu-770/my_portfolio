"use client";
import SkillCard from "./SkillCard";
import { FaJava } from "react-icons/fa";
import { Code2 } from "lucide-react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import {
  SiC,
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiRedux,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGit,
  SiGithub,
  SiPostman,
  SiPython,
} from "react-icons/si";

export default function Skills() {
  const darkMode = useSelector((state: RootState) => state.theme.darkMode);
  return (
    <section
      id="skills"
      className={`py-24 ${darkMode ? "bg-[#080B12]" : "bg-[#F8FAFC]"}`}
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mb-20 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            My Skills
          </p>

          <h2
            className={`mt-4 font-heading text-4xl font-bold md:text-5xl ${
              darkMode ? "text-white" : "text-slate-900"
            }`}
          >
            Technologies I Work With
          </h2>

          <p
            className={`mx-auto mt-6 max-w-2xl ${
              darkMode ? "text-slate-400" : "text-slate-600"
            }`}
          >
            My toolkit for building responsive, scalable, and modern web
            applications while continuously learning new technologies.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="space-y-12">
          {/* Frontend */}
          <div>
            <h3
              className={`mb-6 font-heading text-3xl font-bold ${
                darkMode ? "text-white" : "text-slate-900"
              }`}
            >
              Frontend
            </h3>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              <SkillCard
                icon={<SiHtml5 className="text-orange-500" />}
                name="HTML5"
              />

              <SkillCard
                icon={<SiCss className="text-blue-500" />}
                name="CSS3"
              />

              <SkillCard
                icon={<SiJavascript className="text-yellow-400" />}
                name="JavaScript"
              />

              <SkillCard
                icon={<SiReact className="text-cyan-400" />}
                name="React"
              />

              <SkillCard
                icon={
                  <SiNextdotjs
                    className={darkMode ? "text-white" : "text-black"}
                  />
                }
                name="Next.js"
              />

              <SkillCard
                icon={<SiTypescript className="text-blue-400" />}
                name="TypeScript"
              />

              <SkillCard
                icon={<SiRedux className="text-violet-400" />}
                name="Redux Toolkit"
              />

              <SkillCard
                icon={<SiTailwindcss className="text-sky-400" />}
                name="Tailwind CSS"
              />
            </div>
          </div>

          {/* Backend */}
          <div className="mt-14">
            <h3
              className={`mb-6 font-heading text-3xl font-bold ${
                darkMode ? "text-white" : "text-slate-900"
              }`}
            >
              Backend
            </h3>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              <SkillCard icon={<SiNodedotjs />} name="Node.js" />

              <SkillCard icon={<SiExpress />} name="Express.js" />

              <SkillCard icon={<SiMongodb />} name="MongoDB" />

              <SkillCard
                icon={
                  <div
                    className={`flex h-8 w-8 items-center justify-center rounded-lg border text-sm font-bold ${
                      darkMode
                        ? "border-slate-700 text-white"
                        : "border-slate-300 text-slate-900"
                    }`}
                  >
                    API
                  </div>
                }
                name="REST APIs"
              />
            </div>
          </div>

          {/* Programming */}
          <div className="mt-14">
            <h3
              className={`mb-6 font-heading text-3xl font-bold ${
                darkMode ? "text-white" : "text-slate-900"
              }`}
            >
              Programming
            </h3>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              <SkillCard icon={<FaJava />} name="Java" />

              <SkillCard icon={<SiPython />} name="Python" />

              <SkillCard icon={<SiC />} name="C" />
            </div>
          </div>

          {/* Tools */}
          <div className="mt-14">
            <h3
              className={`mb-6 font-heading text-3xl font-bold ${
                darkMode ? "text-white" : "text-slate-900"
              }`}
            >
              Tools
            </h3>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              <SkillCard icon={<SiGit />} name="Git" />

              <SkillCard icon={<SiGithub />} name="GitHub" />

              <SkillCard icon={<Code2 />} name="VS Code" />

              <SkillCard icon={<SiPostman />} name="Postman" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
