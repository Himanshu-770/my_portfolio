"use client";
import Profile from "@/assets/images/profile.png";
import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
export default function About() {
  const darkMode = useSelector((state: RootState) => state.theme.darkMode);
  return (
    <section
      id="about"
      className={`py-24 ${darkMode ? "bg-[#080B12]" : "bg-[#F8FAFC]"}`}
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mb-20 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            About Me
          </p>

          <h2
            className={`mt-4 font-heading text-4xl font-bold ${darkMode ? "text-white" : "text-slate-900"} md:text-5xl`}
          >
            Get to Know Me
          </h2>

          <p
            className={`mx-auto mt-6 max-w-2xl ${darkMode ? "text-slate-400" : "text-slate-600"}`}
          >
            Passionate about building modern web applications, solving
            real-world problems, and continuously learning new technologies.
          </p>
        </div>

        {/* Photo + About */}
        <div className="grid items-center gap-14 lg:grid-cols-[380px_1fr]">
          {/* Left - Photo */}
          <div className="flex justify-center">
            <div className="relative">
              {/* Background Glow */}
              <div className="absolute inset-0 rounded-3xl bg-cyan-500/20 blur-3xl" />

              {/* Photo Card */}
              <div
                className={`relative overflow-hidden rounded-3xl border p-3 ${
                  darkMode
                    ? "border-slate-800 bg-slate-900"
                    : "border-slate-300 bg-white"
                }`}
              >
                <Image
                  src={Profile}
                  alt="Himanshu Srivastava"
                  className="h-[420px] w-[320px] rounded-2xl object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right - About */}
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              Who I Am
            </p>

            <h3
              className={`font-heading text-4xl font-bold ${darkMode ? "text-white" : "text-slate-900"}`}
            >
              Full Stack Developer & Problem Solver
            </h3>

            <p
              className={`mt-6 leading-8 ${darkMode ? "text-slate-400" : "text-slate-600"}`}
            >
              I'm Himanshu Srivastava, an MCA student at KIET Group of
              Institutions with a strong interest in building modern, scalable
              web applications. I enjoy transforming ideas into responsive,
              user-friendly products while writing clean and maintainable code.
            </p>

            <p
              className={`mt-5 leading-8 ${darkMode ? "text-slate-400" : "text-slate-600"}`}
            >
              Alongside development, I actively practice Data Structures &
              Algorithms to strengthen my problem-solving skills and
              continuously explore new technologies to become a better software
              engineer.
            </p>

            {/* Quick Info */}
            <div className="mt-8 flex flex-wrap gap-3">
              <span
                className={`rounded-full border px-4 py-2 text-sm ${
                  darkMode
                    ? "border-slate-700 bg-slate-900 text-slate-300"
                    : "border-slate-300 bg-white text-slate-700"
                }`}
              >
                📍 Ghaziabad, India
              </span>

              <span
                className={`rounded-full border px-4 py-2 text-sm ${
                  darkMode
                    ? "border-slate-700 bg-slate-900 text-slate-300"
                    : "border-slate-300 bg-white text-slate-700"
                }`}
              >
                🎓 MCA @ KIET
              </span>

              <span
                className={`rounded-full border px-4 py-2 text-sm ${
                  darkMode
                    ? "border-slate-700 bg-slate-900 text-slate-300"
                    : "border-slate-300 bg-white text-slate-700"
                }`}
              >
                💼 Open to Opportunities
              </span>
            </div>
          </div>
        </div>

        {/* Education Timeline */}
        <div className="mt-28">
          <div className="mb-14 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
              Education
            </p>

            <h3
              className={`mt-4 font-heading text-4xl font-bold ${darkMode ? "text-white" : "text-slate-900"}`}
            >
              My Academic Journey
            </h3>
          </div>

          <div className="relative mx-auto max-w-3xl">
            {/* Vertical Line */}
            <div
              className={`absolute left-4 top-0 h-full w-px ${
                darkMode ? "bg-slate-700" : "bg-slate-300"
              }`}
            />

            {/* MCA */}
            <div className="relative mb-12 pl-14">
              <div
                className={`absolute left-0 top-2 h-8 w-8 rounded-full border-4 border-cyan-400 ${
                  darkMode ? "bg-[#080B12]" : "bg-white"
                }`}
              />

              <p className="text-sm text-cyan-400">2025 - Present</p>

              <h4
                className={`mt-2 text-2xl font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}
              >
                Master of Computer Applications (MCA)
              </h4>

              <p
                className={`mt-2 ${darkMode ? "text-slate-400" : "text-slate-600"}`}
              >
                KIET Group of Institutions
              </p>

              <p
                className={`mt-4 leading-7 ${darkMode ? "text-slate-400" : "text-slate-600"}`}
              >
                Focusing on Full Stack Development, Data Structures &
                Algorithms, Database Management Systems, Operating Systems, and
                Software Engineering.
              </p>
            </div>

            {/* B.Sc */}
            <div className="relative mb-12 pl-14">
              <div
                className={`absolute left-0 top-2 h-8 w-8 rounded-full border-4 border-cyan-400 ${
                  darkMode ? "bg-[#080B12]" : "bg-white"
                }`}
              />

              <p className="text-sm text-cyan-400">2021 - 2024</p>

              <h4
                className={`mt-2 text-2xl font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}
              >
                Bachelor of Science (Mathematics)
              </h4>

              <p
                className={`mt-2 ${darkMode ? "text-slate-400" : "text-slate-600"}`}
              >
                University of Allahabad
              </p>

              <p
                className={`mt-4 leading-7 ${darkMode ? "text-slate-400" : "text-slate-600"}`}
              >
                Developed strong analytical and mathematical thinking while
                building a solid foundation in problem solving.
              </p>
            </div>

            {/* Intermediate */}
            <div className="relative pl-14">
              <div
                className={`absolute left-0 top-2 h-8 w-8 rounded-full border-4 border-cyan-400 ${
                  darkMode ? "bg-[#080B12]" : "bg-white"
                }`}
              />

              <p className="text-sm text-cyan-400">2020 - 2021</p>

              <h4
                className={`mt-2 text-2xl font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}
              >
                Intermediate (Class XII)
              </h4>

              <p
                className={`mt-2 ${darkMode ? "text-slate-400" : "text-slate-600"}`}
              >
                Sindhu Vidya Mandir
              </p>

              <p
                className={`mt-4 leading-7 ${darkMode ? "text-slate-400" : "text-slate-600"}`}
              >
                Built a strong academic foundation and developed an interest in
                technology and programming.
              </p>
            </div>
          </div>
        </div>

        {/* Highlights */}
        {/* Currently Learning */}
        <div className="mt-28">
          <div className="mb-14 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
              Currently Learning
            </p>

            <h3
              className={`mt-4 font-heading text-4xl font-bold ${darkMode ? "text-white" : "text-slate-900"}`}
            >
              Growing Every Day
            </h3>

            <p
              className={`mx-auto mt-5 max-w-2xl ${darkMode ? "text-slate-400" : "text-slate-600"}`}
            >
              I enjoy continuously improving my skills by exploring modern
              technologies and software development best practices.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* Card 1 */}
            <div
              className={`rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400 ${
                darkMode
                  ? "border-slate-800 bg-slate-900/50"
                  : "border-slate-300 bg-white"
              }`}
            >
              <p className="text-sm uppercase tracking-widest text-cyan-400">
                Frontend
              </p>

              <h4
                className={`mt-3 text-2xl font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}
              >
                Next.js
              </h4>

              <p
                className={`mt-3 text-sm leading-6 ${darkMode ? "text-slate-400" : "text-slate-600"}`}
              >
                Building fast, SEO-friendly applications with the App Router.
              </p>
            </div>

            {/* Card 2 */}
            <div
              className={`rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400 ${
                darkMode
                  ? "border-slate-800 bg-slate-900/50"
                  : "border-slate-300 bg-white"
              }`}
            >
              <p className="text-sm uppercase tracking-widest text-cyan-400">
                Language
              </p>

              <h4
                className={`mt-3 text-2xl font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}
              >
                TypeScript
              </h4>

              <p
                className={`mt-3 text-sm leading-6 ${darkMode ? "text-slate-400" : "text-slate-600"}`}
              >
                Writing scalable, type-safe, and maintainable applications.
              </p>
            </div>

            {/* Card 3 */}
            <div
              className={`rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400 ${
                darkMode
                  ? "border-slate-800 bg-slate-900/50"
                  : "border-slate-300 bg-white"
              }`}
            >
              <p className="text-sm uppercase tracking-widest text-cyan-400">
                Architecture
              </p>

              <h4
                className={`mt-3 text-2xl font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}
              >
                System Design
              </h4>

              <p
                className={`mt-3 text-sm leading-6 ${darkMode ? "text-slate-400" : "text-slate-600"}`}
              >
                Understanding scalable application architecture and design
                patterns.
              </p>
            </div>

            {/* Card 4 */}
            <div
              className={`rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400 ${
                darkMode
                  ? "border-slate-800 bg-slate-900/50"
                  : "border-slate-300 bg-white"
              }`}
            >
              <p className="text-sm uppercase tracking-widest text-cyan-400">
                Backend
              </p>

              <h4
                className={`mt-3 text-2xl font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}
              >
                Node.js
              </h4>

              <p
                className={`mt-3 text-sm leading-6 ${darkMode ? "text-slate-400" : "text-slate-600"}`}
              >
                Learning APIs, authentication, databases, and backend
                architecture.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
