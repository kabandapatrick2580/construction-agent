"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

interface Slide {
  src: string;
  alt: string;
}

interface ServiceCarouselProps {
  slides: Slide[];
  interval?: number; // ms, default 4000
  badge?: { value: string; label: string };
  aspectClass?: string; // e.g. "h-[400px]" — defaults to h-[400px]
}

export default function ServiceCarousel({
  slides,
  interval = 4000,
  badge,
  aspectClass = "h-[400px]",
}: ServiceCarouselProps) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [direction, setDirection] = useState(1); // 1 = forward, -1 = back

  const go = useCallback(
    (next: number) => {
      setDirection(next > index ? 1 : -1);
      setIndex((next + slides.length) % slides.length);
    },
    [index, slides.length]
  );

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setDirection(1);
      setIndex((i) => (i + 1) % slides.length);
    }, interval);
    return () => clearInterval(id);
  }, [paused, interval, slides.length]);

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? "100%" : "-100%", opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? "-100%" : "100%", opacity: 0 }),
  };

  return (
    <div
      className={`relative rounded-2xl overflow-hidden shadow-2xl ${aspectClass} select-none`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Slides */}
      <AnimatePresence initial={false} custom={direction} mode="popLayout">
        <motion.div
          key={index}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.55, ease: [0.32, 0.72, 0, 1] }}
          className="absolute inset-0"
        >
          <Image
            src={slides[index].src}
            alt={slides[index].alt}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </motion.div>
      </AnimatePresence>

      {/* Gradient overlay at bottom */}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/40 to-transparent pointer-events-none z-10" />

      {/* Arrows */}
      <button
        onClick={() => go(index - 1)}
        aria-label="Previous"
        className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-black/30 hover:bg-[#2BB1E4] text-white flex items-center justify-center transition-all duration-200 backdrop-blur-sm"
      >
        <MdChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={() => go(index + 1)}
        aria-label="Next"
        className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-black/30 hover:bg-[#2BB1E4] text-white flex items-center justify-center transition-all duration-200 backdrop-blur-sm"
      >
        <MdChevronRight className="w-5 h-5" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-1.5">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => go(i)}
            aria-label={`Slide ${i + 1}`}
            className={`rounded-full transition-all duration-300 ${
              i === index
                ? "w-5 h-1.5 bg-[#2BB1E4]"
                : "w-1.5 h-1.5 bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>

      {/* Optional badge */}
      {badge && (
        <div className="absolute -bottom-4 -right-4 bg-[#2BB1E4] p-6 rounded-xl text-white hidden md:block z-20 shadow-lg">
          <div className="text-3xl font-black font-headline">{badge.value}</div>
          <div className="text-xs uppercase tracking-widest font-bold opacity-80 mt-1">{badge.label}</div>
        </div>
      )}
    </div>
  );
}
