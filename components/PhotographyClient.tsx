"use client";

import React, { useState, useEffect, useTransition, useMemo } from "react";
import { motion } from "framer-motion";
import { CategoryFilter } from "@/components/CategoryFilter";
import { PhotographyGallery } from "@/components/PhotographyGallery";

interface Photo {
  src: string;
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
  const [activeCategory, setActiveCategory] = useState(categories[0] || "");
  const [isPending, startTransition] = useTransition();

  const handleCategoryChange = (category: string) => {
    startTransition(() => {
      setActiveCategory(category);
    });
  };

  useEffect(() => {
    if (categories.length > 0 && !categories.includes(activeCategory)) {
      setActiveCategory(categories[0]);
    }
  }, [categories, activeCategory]);

  const filteredPhotos = useMemo(() =>
    photos.filter((photo) => photo.category === activeCategory),
    [photos, activeCategory]
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
          activeCategory={activeCategory}
          setActiveCategory={handleCategoryChange}
          photoCounts={photoCounts}
        />
      )}

      <div
        className={`transition-opacity duration-300 ${isPending ? "opacity-30" : "opacity-100"
          }`}
      >
        {categoryDescriptions[activeCategory] && (
          <motion.p
            key={activeCategory + "-desc"}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="text-slate-400 text-sm leading-relaxed mb-8 -mt-4 text-center"
          >
            {categoryDescriptions[activeCategory]}
          </motion.p>
        )}

        <PhotographyGallery key={activeCategory} photos={filteredPhotos} />
      </div>
    </>
  );
};
