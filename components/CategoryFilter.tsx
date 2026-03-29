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
    <div className=" text-center p-4 md:p-5 mb-8">
      <div className="flex flex-wrap justify-center gap-2.5">
        {categories.map((category) => {
          const isActive =
            activeCategory.toLowerCase() === category.toLowerCase();
          const count = photoCounts?.[category] ?? 0;

          return (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "relative flex items-center gap-2.5 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border",
                isActive
                  ? "text-white border-red-500/40 shadow-[0_0_16px_rgba(244,63,94,0.15)]"
                  : "text-slate-300 border-slate-500/50 bg-slate-900/30 hover:text-slate-200 hover:border-slate-600/60 hover:bg-slate-800/40"
              )}
            >
              {/* Active background — strong red on left, fades to transparent */}
              {isActive && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-red-700/60 via-red-600/30 to-red-500/10"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}

              {/* Top gloss highlight on active pill */}
              {isActive && (
                <div className="absolute inset-x-2 top-0 h-px bg-gradient-to-r from-transparent via-red-300/30 to-transparent pointer-events-none" />
              )}

              <span className="relative z-10 tracking-wide">{category}</span>

              {/* Count badge */}
              <span
                className={cn(
                  "relative z-10 min-w-[1.4rem] text-center text-[11px] px-1.5 py-px rounded-md tabular-nums font-semibold leading-5",
                  isActive
                    ? [
                      "bg-gradient-to-b from-red-400/30 to-red-600/20",
                      "text-red-200",
                      "border border-red-400/30",
                      "shadow-[inset_0_1px_0_rgba(251,113,133,0.25),inset_0_-1px_0_rgba(0,0,0,0.2)]",
                    ].join(" ")
                    : "bg-slate-800/80 text-slate-500 border border-slate-700/50"
                )}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
