import { ReactNode } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
interface SkillCardProps {
  icon: ReactNode;
  name: string;
}

export default function SkillCard({ icon, name }: SkillCardProps) {
  const darkMode = useSelector((state: RootState) => state.theme.darkMode);
  return (
    <div
      className={`group flex items-center gap-4 rounded-2xl border px-5 py-4 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] ${
        darkMode
          ? "border-slate-800 bg-slate-900/50"
          : "border-slate-300 bg-white"
      }`}
    >
      <div className="text-3xl transition-transform duration-300 group-hover:rotate-12">
        {icon}
      </div>

      <span
        className={`font-medium ${
          darkMode ? "text-slate-200" : "text-slate-800"
        }`}
      >
        {name}
      </span>
    </div>
  );
}
