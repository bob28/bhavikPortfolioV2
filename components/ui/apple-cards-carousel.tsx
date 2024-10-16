"use client";
import React, { useEffect, useState, createContext } from "react";
import {
  IconArrowNarrowLeft,
  IconArrowNarrowRight,
  IconX,
} from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Image, { ImageProps } from "next/image";
import { Dialog } from "primereact/dialog";
import { ShootingStars } from "./shooting-stars";
import { StarsBackground } from "./stars-background";

interface CarouselProps {
  items: JSX.Element[];
  initialScroll?: number;
}

type Card = {
  summary: string;
  title: string;
  category: string;
  content: React.ReactNode;
};

export const CarouselContext = createContext<{
  onCardClose: (index: number) => void;
  currentIndex: number;
}>({
  onCardClose: () => {},
  currentIndex: 0,
});

export const Carousel = ({ items, initialScroll = 0 }: CarouselProps) => {
  const carouselRef = React.useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = initialScroll;
      checkScrollability();
    }
  }, [initialScroll]);

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const handleCardClose = (index: number) => {
    if (carouselRef.current) {
      const cardWidth = isMobile() ? 230 : 384; // (md:w-96)
      const gap = isMobile() ? 4 : 8;
      const scrollPosition = (cardWidth + gap) * (index + 1);
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
      setCurrentIndex(index);
    }
  };

  const isMobile = () => {
    return window && window.innerWidth < 768;
  };

  return (
    <CarouselContext.Provider
      value={{ onCardClose: handleCardClose, currentIndex }}
    >
      <div className="relative w-full mb-10 -mt-12">
        <div
          className="flex w-full overflow-x-scroll overscroll-x-auto py-10 md:py-20 scroll-smooth [scrollbar-width:none]"
          ref={carouselRef}
          onScroll={checkScrollability}
        >
          <div
            className={cn(
              "absolute right-0 h-auto  w-[5%] overflow-hidden bg-gradient-to-l"
            )}
          ></div>

          <div
            className={cn(
              "flex flex-row justify-start gap-4 pl-4",
              "max-w-7xl mx-auto" // remove max-w-4xl if you want the carousel to span the full width of its container
            )}
          >
            {items.map((item, index) => (
              <motion.div
                key={"card" + index}
                className="last:pr-[5%] md:last:pr-[33%]  rounded-3xl"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>
        <div className="flex justify-center gap-2 -mt-3 md:-mt-10">
          <button
            className="relative  h-10 w-10 rounded-full bg-green-400 flex items-center justify-center disabled:opacity-50"
            onClick={scrollLeft}
            disabled={!canScrollLeft}
          >
            <IconArrowNarrowLeft className="h-6 w-6 text-slate-900" />
          </button>
          <button
            className="relative hover:bg-green-500 h-10 w-10 rounded-full bg-green-400 flex items-center justify-center disabled:opacity-50"
            onClick={scrollRight}
            disabled={!canScrollRight}
          >
            <IconArrowNarrowRight className="h-6 w-6  text-slate-900" />
          </button>
        </div>
      </div>
    </CarouselContext.Provider>
  );
};

export const Card = ({
  card,
  index,
  layout = false,
}: {
  card: Card;
  index: number;
  layout?: boolean;
}) => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Dialog
        header=""
        visible={visible}
        dismissableMask={true}
        onHide={() => {
          if (!visible) return;
          setVisible(false);
        }}
        pt={{
          content: {
            className: "bg-slate-800 rounded-b-xl",
          },
          header: {
            className: "bg-slate-800 pt-3 rounded-t-xl",
          },
          root: {
            className: "w-[95vw] md:w-[60vw] ",
          },
        }}
      >
        <p className="m-0">{card.content} </p>
      </Dialog>

      <motion.button
        onClick={() => setVisible(true)}
        layoutId={layout ? `card-${card.title}` : undefined}
        className="text-left rounded-3xl shadow-lg h-[25rem] w-56 md:w-80 p-8 overflow-hidden flex flex-col items-start justify-start relative z-10 bg-slate-800 transform transition-transform duration-300 hover:scale-105 hover:cursor-pointer"
      >
        <p className="mb-3 font-normal text-slate-300">{card.category}</p>
        <h5 className="mb-3 text-2xl font-semibold tracking-tight text-slate-200">
          {card.title}
        </h5>
        <p className="mb-3 font-normal text-slate-300">{card.summary}</p>
        <div className="mt-auto">
          <p className="inline-flex font-medium items-center text-green-400 hover:underline">
            View details
            <svg
              className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 18"
            >
              <path
                stroke="currentColor"
                strokeWidth="2"
                d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
              />
            </svg>
          </p>
        </div>
        <ShootingStars
          maxDelay={2000}
          minDelay={1000}
          starColor={"#4ade80"}
          trailColor="4ade80"
          starWidth={15}
          starHeight={2}
          maxSpeed={20}
        />
        <StarsBackground starDensity={0.001} />
      </motion.button>
    </>
  );
};

export const BlurImage = ({
  height,
  width,
  src,
  className,
  alt,
  ...rest
}: ImageProps) => {
  const [isLoading, setLoading] = useState(true);
  return (
    <Image
      className={cn(
        "transition duration-300",
        isLoading ? "blur-sm" : "blur-0",
        className
      )}
      onLoad={() => setLoading(false)}
      src={src}
      width={width}
      height={height}
      loading="lazy"
      decoding="async"
      blurDataURL={typeof src === "string" ? src : undefined}
      alt={alt ? alt : "Background of a beautiful view"}
      {...rest}
    />
  );
};
