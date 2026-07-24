import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import Image, { StaticImageData } from "next/image";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

interface ProjectCardProps {
  title: string;
  description: string;
  images: StaticImageData[];
  techStack: string[];
  features: string[];
  githubLink: string;
  liveLink: string;
  reverse?: boolean;
}

export default function ProjectCard({
  title,
  description,
  images,
  techStack,
  features,
  githubLink,
  liveLink,
  reverse = false,
}: ProjectCardProps) {
  const darkMode = useSelector((state: RootState) => state.theme.darkMode);
  return (
    <div
      className={`grid items-center gap-12 ${
        reverse ? "lg:grid-cols-[1fr_500px]" : "lg:grid-cols-[500px_1fr]"
      }`}
    >
      {/* Image */}

      <div className={reverse ? "lg:order-2" : ""}>
        <div className="flex flex-col gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className={`overflow-hidden rounded-3xl border shadow-2xl ${
                darkMode ? "border-slate-800" : "border-slate-300"
              }`}
            >
              <Image
                src={image}
                alt={`${title} Screenshot ${index + 1}`}
                className="w-full object-cover transition duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Content */}

      <div className={reverse ? "lg:order-1" : ""}>
        <h3
          className={`mt-1 font-heading text-4xl font-bold ${
            darkMode ? "text-white" : "text-slate-900"
          }`}
        >
          {title}
        </h3>

        <p
          className={`mt-6 leading-8 ${
            darkMode ? "text-slate-400" : "text-slate-600"
          }`}
        >
          {description}
        </p>

        {/* Tech Stack */}

        <div className="mt-8 flex flex-wrap gap-3">
          {techStack.map((tech) => (
            <span
              key={tech}
              className={`rounded-full border px-4 py-2 text-sm ${
                darkMode
                  ? "border-slate-700 text-slate-300"
                  : "border-slate-300 text-slate-700"
              }`}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Features */}

        <ul className="mt-8 space-y-3">
          {features.map((feature) => (
            <li
              key={feature}
              className={`flex items-center gap-3 ${
                darkMode ? "text-slate-300" : "text-slate-700"
              }`}
            >
              <span className="text-cyan-400">✓</span>

              {feature}
            </li>
          ))}
        </ul>

        {/* Buttons */}

        <div className="mt-10 flex gap-5">
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 rounded-xl border px-6 py-3 transition hover:border-cyan-400 ${
              darkMode
                ? "border-slate-700 text-white"
                : "border-slate-300 text-slate-900"
            }`}
          >
            <FaGithub size={18} />
            GitHub
          </a>

          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-900 transition hover:scale-105"
          >
            Live Demo
            <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </div>
  );
}
