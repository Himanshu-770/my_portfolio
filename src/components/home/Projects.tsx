"use client";
import PMSDashboard from "@/assets/images/PMS.png";
import PMSLogin from "@/assets/images/login.png";
import ProjectCard from "@/components/home/ProjectCard";
import MysteryHome from "@/assets/images/mystry_login.png";
import MysteryDashboard from "@/assets/images/mystry_dashboard.png";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

export default function Projects() {
  const darkMode = useSelector((state: RootState) => state.theme.darkMode);
  return (
    <section
      id="projects"
      className={`py-24 ${darkMode ? "bg-[#080B12]" : "bg-[#F8FAFC]"}`}
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mb-20 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Projects
          </p>

          <h2
            className={`mt-4 font-heading text-4xl font-bold md:text-5xl ${
              darkMode ? "text-white" : "text-slate-900"
            }`}
          >
            Featured Projects
          </h2>

          <p
            className={`mx-auto mt-6 max-w-2xl ${
              darkMode ? "text-slate-400" : "text-slate-600"
            }`}
          >
            A collection of projects where I applied modern technologies to
            solve real-world problems and improve my development skills.
          </p>
        </div>

        {/* Project Cards */}
        <div className="space-y-24">
          {/* PMS */}
          <ProjectCard
            title="Project Management System"
            images={[PMSLogin, PMSDashboard]}
            description="A modern Project Management System that streamlines project planning, team collaboration, milestone tracking, and workflow management through an intuitive dashboard. Designed with a responsive interface and efficient state management for a smooth user experience."
            techStack={[
              "Next.js",
              "TypeScript",
              "Redux Toolkit",
              "Tailwind CSS",
              "React Hook Form",
              "Local Storage",
            ]}
            features={[
              "Multi-step project creation workflow",
              "Project CRUD operations",
              "Advanced search & filtering",
              "Responsive admin dashboard",
              "Redux Toolkit state management",
              "Persistent Local Storage",
            ]}
            githubLink="https://github.com/Himanshu-770"
            liveLink="#"
          />

          {/* Mystery Message */}
          <ProjectCard
            reverse
            title="True Feedback"
            images={[MysteryHome, MysteryDashboard]}
            description="True Feedback is an anonymous messaging platform that allows users to receive honest feedback without revealing the sender's identity. Users can share a unique profile link, manage message preferences, and securely access their dashboard through authentication."
            techStack={[
              "Next.js",
              "TypeScript",
              "MongoDB",
              "NextAuth",
              "Resend",
              "OpenAI",
              "Tailwind CSS",
            ]}
            features={[
              "Anonymous messaging through unique profile links",
              "Secure authentication with NextAuth",
              "Email verification using Resend",
              "AI-powered message suggestions with OpenAI",
              "Personal dashboard to manage anonymous messages",
              "Responsive UI with MongoDB integration",
            ]}
            githubLink="https://github.com/Himanshu-770"
            liveLink="#"
          />

          {/* Portfolio */}
        </div>
      </div>
    </section>
  );
}
