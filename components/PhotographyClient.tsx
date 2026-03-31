"use client";

import React, { useState, useEffect, useTransition, useMemo } from "react";
import { motion } from "framer-motion";
import { CategoryFilter } from "@/components/CategoryFilter";
import { PhotographyGallery } from "@/components/PhotographyGallery";

interface Photo {
  src: string;
  thumbnail: string;
  category: string;
  width: number;
  height: number;
}

interface PhotographyClientProps {
  photos: Photo[];
  categories: string[];
}

const categoryDescriptions: Record<string, string> = {
  "Automotive":
    "Capturing the sleek lines, engineering precision, and raw power of high-performance vehicles in motion and at rest.",
  "Cityscapes":
    "A curated look at urban architecture and the vibrant energy of the world's most iconic skylines.",
  "Engagement Collection":
    "Timeless storytelling focused on the intimate moments and genuine emotion shared between couples.",
  "Keynotes":
    "Professional coverage of corporate summits and seminars, highlighting the impact of speakers and the scale of the event.",
  "Landscapes":
    "Exploring the quiet majesty of the natural world through high-end, large-scale scenic photography.",
  "Life Events":
    "Documenting the joy and connection of personal milestones, from birthdays to creative studio gatherings.",
  "Sports":
    "Freezing high-stakes action and athletic intensity at the peak of the game.",
};

export const PhotographyClient = ({
  photos,
  categories,
}: PhotographyClientProps) => {
  const [activeCategoryUI, setActiveCategoryUI] = useState(categories[0] || "");
  const [activeCategoryData, setActiveCategoryData] = useState(categories[0] || "");
  const [isPending, startTransition] = useTransition();

  const handleCategoryChange = (category: string) => {
    // Instantly update the UI so the pill active state physically switches
    setActiveCategoryUI(category);
    
    // Give the browser exactly one frame to visually paint the new UI state 
    // and begin the framer-motion physics before blocking the JS thread 
    // with the massive gallery DOM diff computation.
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        startTransition(() => {
          setActiveCategoryData(category);
        });
      });
    });
  };

  useEffect(() => {
    if (categories.length > 0 && !categories.includes(activeCategoryUI)) {
      setActiveCategoryUI(categories[0]);
      setActiveCategoryData(categories[0]);
    }
  }, [categories, activeCategoryUI]);

  const filteredPhotos = useMemo(() =>
    photos.filter((photo) => photo.category === activeCategoryData),
    [photos, activeCategoryData]
  );

  const photoCounts = useMemo(() =>
    categories.reduce((acc, cat) => {
      acc[cat] = photos.filter((p) => p.category === cat).length;
      return acc;
    }, {} as Record<string, number>),
    [categories, photos]
  );

  return (
    <>
      {categories.length > 0 && (
        <CategoryFilter
          categories={categories}
          activeCategory={activeCategoryUI}
          setActiveCategory={handleCategoryChange}
          photoCounts={photoCounts}
        />
      )}

      <div
        className={`transition-opacity duration-300 ${isPending ? "opacity-30 pointer-events-none" : "opacity-100"
          }`}
      >
        {categoryDescriptions[activeCategoryData] && (
          <motion.p
            key={activeCategoryData + "-desc"}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="text-slate-400 text-sm leading-relaxed mb-8 -mt-4 text-center"
          >
            {categoryDescriptions[activeCategoryData]}
          </motion.p>
        )}

        {/* Removed key prop to prevent unmounting and destroying all cached images */}
        <PhotographyGallery photos={filteredPhotos} />
      </div>
    </>
  );
};
