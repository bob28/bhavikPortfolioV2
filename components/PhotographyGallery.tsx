"use client";

import React, { useState, useEffect, useRef, useCallback, useMemo } from "react";
import Image from "next/image";
import { RowsPhotoAlbum, RenderImageProps, RenderImageContext } from "react-photo-album";
import "react-photo-album/rows.css";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// import optional lightbox plugins
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/plugins/captions.css";

const BATCH_SIZE = 12;

interface Photo {
  src: string;
  thumbnail: string;
  category: string;
  width: number;
  height: number;
}

interface PhotographyGalleryProps {
  photos: Photo[];
}

// Extend the Photo type for react-photo-album
interface GalleryPhoto {
  src: string;
  thumbnail: string;
  width: number;
  height: number;
  title?: string;
  description?: string;
  category: string;
  key?: string;
}

const calculateTargetRowHeight = (containerWidth: number) => {
  if (containerWidth < 640) return 300;
  if (containerWidth < 768) return 350;
  if (containerWidth < 1024) return 375;
  return 375;
};

export const PhotographyGallery = ({ photos }: PhotographyGalleryProps) => {
  const [index, setIndex] = useState(-1);
  const [visibleCount, setVisibleCount] = useState(BATCH_SIZE);
  const [prevPhotos, setPrevPhotos] = useState(photos);
  const sentinelRef = useRef<HTMLDivElement | null>(null);

  // Synchronously reset visible photos when the category (photos prop) changes
  // This prevents React from rendering up to 100 images for the new category before the useEffect fires!
  if (photos !== prevPhotos) {
    setPrevPhotos(photos);
    setVisibleCount(BATCH_SIZE);
  }

  // Prepare photos for PhotoAlbum and Lightbox
  const albumPhotos = useMemo<GalleryPhoto[]>(() =>
    photos.map((photo) => ({
      key: photo.src,
      src: photo.src.startsWith("/") ? photo.src : `/${photo.src}`,
      thumbnail: photo.thumbnail?.startsWith("/") ? photo.thumbnail : `/${photo.thumbnail}`,
      width: photo.width,
      height: photo.height,
      title: photo.category,
      description: `${photo.width}x${photo.height}`,
      category: photo.category,
    })),
    [photos]
  );

  const visiblePhotos = albumPhotos.slice(0, visibleCount);
  const hasMore = visibleCount < albumPhotos.length;

  // Intersection observer to load more photos as user scrolls
  const observerCallback = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      if (entries[0]?.isIntersecting && hasMore) {
        setVisibleCount((prev) => Math.min(prev + BATCH_SIZE, albumPhotos.length));
      }
    },
    [hasMore, albumPhotos.length]
  );

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(observerCallback, {
      rootMargin: "400px",
    });

    observer.observe(sentinel);

    return () => {
      observer.disconnect();
    };
  }, [observerCallback]);

  // Custom renderer for images to use next/image and add hover effects
  const renderImage = useCallback((
    { alt, title, sizes, className, onClick, style }: RenderImageProps,
    { photo, width, height, index }: RenderImageContext<GalleryPhoto>
  ) => {
    // The first few rows of images are heavily impacting LCP, make them priority
    const isPriority = index < 6;

    return (
      <div
        style={{
          ...style,
          width: "100%",
          position: "relative",
          aspectRatio: `${width} / ${height}`,
        }}
        className="group cursor-pointer overflow-hidden rounded-xl bg-slate-900/40 border border-white/5"
        onClick={onClick}
      >
        <Image
          fill
          // Switch to thumbnail for the grid view
          src={photo.thumbnail}
          alt={alt || "Photography"}
          title={title}
          sizes={sizes}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          priority={isPriority}
          loading={isPriority ? "eager" : "lazy"}
          decoding={isPriority ? "auto" : "async"}
          fetchPriority={isPriority ? "high" : "auto"}
          // Keep this true to bypass the Cloudflare Worker CPU limit
          unoptimized={true}
        />
      </div>
    );
  }, []);

  return (
    <div className="w-full" style={{ animation: "galleryFadeUp 0.6s ease-out both" }}>
      <RowsPhotoAlbum
        photos={visiblePhotos}
        targetRowHeight={calculateTargetRowHeight}
        spacing={5}
        onClick={({ index }) => setIndex(index)}
        render={{ image: renderImage }}
      />

      <Lightbox
        slides={index >= 0 ? [albumPhotos[index]] : []}
        open={index >= 0}
        close={() => setIndex(-1)}
        plugins={[Captions]}
        controller={{
          closeOnBackdropClick: true,
        }}
        on={{
          click: () => setIndex(-1),
        }}
        render={{
          buttonPrev: () => null,
          buttonNext: () => null,
        }}
      />

      {/* Sentinel element that triggers loading more photos */}
      {hasMore ? (
        <div ref={sentinelRef} className="flex justify-center py-10 mt-6">
          <div className="flex items-center gap-2 text-slate-400">
            <svg
              className="animate-spin h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              />
            </svg>
            <span className="text-sm">Loading more photos...</span>
          </div>
        </div>
      ) : (
        photos.length > 0 && (
          <div className="text-center my-10 text-slate-500 text-sm">
            Showing all {photos.length} photos
          </div>
        )
      )}
    </div>
  );
};




