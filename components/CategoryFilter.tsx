"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CategoryFilterProps {
  categories: string[];
  activeCategory: string;
  setActiveCategory: (category: string) => void;
  photoCounts?: Record<string, number>;
}

export const CategoryFilter = ({
  categories,
  activeCategory,
  setActiveCategory,
  photoCounts,
}: CategoryFilterProps) => {
  return (
    <div className="text-center px-4 md:px-6 mb-10">
      <div className="flex flex-wrap justify-center gap-3 md:gap-4">
        {categories.map((category) => {
          const isActive =
            activeCategory.toLowerCase() === category.toLowerCase();
          const count = photoCounts?.[category] ?? 0;

          return (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "group relative flex items-center gap-3 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-500",
                "border overflow-hidden backdrop-blur-md",
                isActive
                  ? "text-white border-red-500/50 shadow-[0_0_20px_rgba(244,63,94,0.2)]"
                  : "text-slate-400 border-slate-800/60 bg-slate-950/40 hover:text-slate-200 hover:border-slate-700/80 hover:bg-slate-900/60"
              )}
            >
              {/* Active Background - Glassy Red Gradient */}
              {isActive && (
                <motion.div
                  layoutId="active-pill-background"
                  className="absolute inset-0 bg-gradient-to-br from-red-600/30 via-red-500/10 to-transparent"
                  transition={{ type: "spring", bounce: 0.25, duration: 0.6 }}
                />
              )}

              {/* Inactive Hover Glow */}
              {!isActive && (
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/0 via-red-500/5 to-red-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm pointer-events-none" />
              )}

              <span className="relative z-10 tracking-tight">{category}</span>

              {/* Count Badge — High Fidelity Pill */}
              <span
                className={cn(
                  "relative z-10 flex items-center justify-center min-w-[1.6rem] h-5 px-2 py-0.5 rounded-full text-[11px] tabular-nums font-bold transition-all duration-300",
                  isActive
                    ? [
                      "bg-red-500 text-white shadow-[0_0_12px_rgba(244,63,94,0.4)]",
                      "border border-red-400/50",
                    ].join(" ")
                    : [
                      "bg-slate-900 text-slate-500 border border-slate-800",
                      "group-hover:bg-slate-800 group-hover:text-slate-300 group-hover:border-slate-700",
                    ].join(" ")
                )}
              >
                {count}
              </span>

              {/* Edge Shine Effect for Active */}
              {isActive && (
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-red-300/40 to-transparent opacity-60 pointer-events-none" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};
