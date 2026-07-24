"use client";

import { motion } from "framer-motion";
import { IconType } from "react-icons";

interface FloatingBadgeProps {
  icon: IconType;
  name: string;
  color: string;
  className?: string;
  duration?: number;
}

export default function FloatingBadge({
  icon: Icon,
  name,
  color,
  className = "",
  duration = 4,
}: FloatingBadgeProps) {
  return (
    <motion.div
      animate={{
        y: [-8, 8, -8],
        rotate: [-2, 2, -2],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      whileHover={{
        scale: 1.1,
        y: -10,
        boxShadow: "0 0 30px rgba(0,217,255,.4)",
      }}
      className={`absolute flex h-20 w-20 flex-col items-center justify-center rounded-2xl border border-slate-700 bg-[#111827]/80 backdrop-blur-md ${className}`}
    >
      <Icon
        size={30}
        style={{ color }}
      />

      <span className="mt-2 text-xs text-slate-300">
        {name}
      </span>
    </motion.div>
  );
}