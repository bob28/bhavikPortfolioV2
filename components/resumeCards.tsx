"use client";

import { useState } from "react";
import { Card } from "primereact/card";
import { FaCalendarAlt, FaMapMarkerAlt, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export interface ResumeData {
  category: string;
  name: string;
  company?: string;
  location?: string;
  startDate: string;
  endDate?: string;
  years: string[];
  summary?: string;
  description?: string[];
  url?: string;
  techStack?: string[];
}

interface ResumeCardsProps {
  data: ResumeData;
  type: string;
}

export default function ResumeCards({ data, type }: ResumeCardsProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  // Determine category color scheme
  let categoryColor = "text-rose-400";
  let categoryBorder = "border-l-rose-400";
  let badgeBg = "bg-rose-400/10";
  let badgeText = "text-rose-400";
  let categoryGradient = "from-rose-500/10";

  if (data.category === "Education") {
    categoryColor = "text-amber-400";
    categoryBorder = "border-l-amber-400";
    badgeBg = "bg-amber-400/10";
    badgeText = "text-amber-400";
    categoryGradient = "from-amber-500/10";
  } else if (data.category === "Volunteer") {
    categoryColor = "text-emerald-400";
    categoryBorder = "border-l-emerald-400";
    badgeBg = "bg-emerald-400/10";
    badgeText = "text-emerald-400";
    categoryGradient = "from-emerald-500/10";
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4 }}
      className="w-full relative"
    >
      <div className="w-full relative group transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl rounded-2xl">
        {/* Glow / Gradient Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-br ${categoryGradient} to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500 pointer-events-none z-10`} />
        
        <Card
          className={`shadow-lg rounded-2xl bg-slate-800/40 group-hover:bg-slate-800/60 p-5 w-full border-l-4 border-transparent ${categoryBorder} backdrop-blur-md transition-colors relative z-0`}
        >
          <div className="flex flex-col gap-3">
          {/* Header Row: Category Badge + Date */}
          <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
            <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${badgeBg} ${badgeText}`}>
              {data.category}
            </span>
            <div className="flex items-center text-sm text-slate-300">
              <FaCalendarAlt className={`mr-2 ${categoryColor}`} />
              <span>
                {data.startDate} {data.endDate ? " - " + data.endDate : ""}
              </span>
            </div>
          </div>

          {/* Title & Company */}
          <div>
            <h2 className="text-xl font-bold text-slate-200 mb-1">{data.name}</h2>
            <div className="flex justify-between">
              {data.company && <h3 className={`text-md font-semibold ${categoryColor}`}>{data.company}</h3>}
              {/* Location */}
              {data.location && (
                <div className="flex items-center text-sm text-slate-300">
                  <FaMapMarkerAlt className={`mr-2 ${categoryColor}`} />
                  <span>{data.location}</span>
                </div>
              )}
            </div>
          </div>

          {/* Summary */}
          {data.summary && (
            <p className="text-sm mt-0 text-slate-300 leading-relaxed">{data.summary}</p>
          )}

          {/* Tech Stack Tags */}
          {data.techStack && data.techStack.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-1">
              {data.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className={`text-xs px-2 py-0.5 rounded-full border ${categoryColor.replace("text-", "border-")}/30 ${badgeBg}`}
                >
                  {tech}
                </span>
              ))}
            </div>
          )}

          {/* Expandable Description */}
          {/* {data.description && data.description.length > 0 && (
            <div className="mt-3">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className={`flex items-center gap-2 text-sm font-medium hover:underline focus:outline-none ${categoryColor} transition-colors`}
              >
                {isExpanded ? "Show less" : "Show more"}
                {isExpanded ? <FaChevronUp className="text-xs" /> : <FaChevronDown className="text-xs" />}
              </button>

              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <ul className="list-disc list-inside mt-4 space-y-2 text-sm text-slate-300">
                      {data.description.map((desc, idx) => (
                        <li key={idx} className="leading-relaxed">
                          {desc}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )} */}
        </div>
      </Card>
      </div>
    </motion.div>
  );
}
