import { ReactNode } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
interface ExperienceCardProps {
  icon: ReactNode;
  type: string;
  title: string;
  organization: string;
  duration: string;
  mode: string;
  description: string[];
}

export default function ExperienceCard({
  icon,
  type,
  title,
  organization,
  duration,
  mode,
  description,
}: ExperienceCardProps) {
  const darkMode = useSelector((state: RootState) => state.theme.darkMode);
  return (
    <div
      className={`rounded-3xl border p-8 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/50 hover:shadow-xl hover:shadow-cyan-500/10 ${
        darkMode
          ? "border-slate-800 bg-slate-900/40"
          : "border-slate-300 bg-white"
      }`}
    >
      <span className="rounded-full bg-cyan-500/10 px-4 py-1 text-sm font-medium text-cyan-400">
        {type}
      </span>

      <h3
        className={`mt-6 font-heading text-2xl font-bold ${
          darkMode ? "text-white" : "text-slate-900"
        }`}
      >
        {title}
      </h3>

      <p
        className={`mt-2 text-lg ${
          darkMode ? "text-slate-300" : "text-slate-700"
        }`}
      >
        {organization}
      </p>

      <p
        className={`mt-1 text-sm ${
          darkMode ? "text-slate-500" : "text-slate-600"
        }`}
      >
        {duration}
      </p>

      <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-400">
        {icon}
        {mode}
      </div>
      <ul className="mt-6 space-y-3">
        {description.map((item) => (
          <li
            key={item}
            className={`flex items-start gap-3 ${
              darkMode ? "text-slate-400" : "text-slate-600"
            }`}
          >
            <span className="mt-2 h-2 w-2 rounded-full bg-cyan-400" />

            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
