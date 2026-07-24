'use client'
import ExperienceCard from "./ExperienceCard";
import { Award, Building2 } from "lucide-react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

export default function Experience() {
  const darkMode = useSelector(
  (state: RootState) => state.theme.darkMode
);
  return (
   <section
  id="experience"
  className={`py-24 ${
    darkMode ? "bg-[#080B12]" : "bg-[#F8FAFC]"
  }`}
>
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mb-20 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Experience
          </p>

          <h2 className={`mt-4 font-heading text-4xl font-bold md:text-5xl ${
  darkMode ? "text-white" : "text-slate-900"
}`}>
            Experience & Achievements
          </h2>

          <p className={`mx-auto mt-6 max-w-2xl ${
  darkMode ? "text-slate-400" : "text-slate-600"
}`}>
            My professional journey, internship experience, and notable academic
            achievement.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 lg:grid-cols-2">
          <ExperienceCard
            icon={<Building2 size={14} />}
            type="Experience"
            title="Frontend Developer Intern"
            organization="MetaUpSpace"
            duration="2026 – Present"
            mode="On-site"
            description={[
              "Developing responsive web applications using React and Next.js.",
              "Building reusable UI components following modern development practices.",
              "Collaborating with the development team on real-world projects.",
            ]}
          />

          <ExperienceCard
            icon={<Award size={14} />}
            type="Achievement"
            title="INSPIRE Scholarship"
            organization="Government of India"
            duration="Awarded for Academic Excellence"
            mode="National Recognition"
            description={[
              "Recipient of the INSPIRE Scholarship under the Government of India's INSPIRE Programme.",
              "Recognized for outstanding academic performance in science education.",
            ]}
          />
        </div>
      </div>
    </section>
  );
}
