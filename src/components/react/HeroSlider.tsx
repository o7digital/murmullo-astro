import React, { useEffect, useState } from "react";
import { slugify } from "@/utils/slugify";

type Slide = {
  src: string;
  title: string;
  caption: string;
  alt: string;
};

const slides: Slide[] = [
  {
    src: "/images/hero/el-murmullo0.webp",
    title: "El Murmullo\nOur Luxury Villa by La Casa Que Canta",
    caption: "An exclusive private villa overlooking the Pacific Ocean in Zihuatanejo, Mexico.",
    alt: "El Murmullo luxury villa by La Casa Que Canta in Zihuatanejo, Mexico",
  },
  {
    src: "/images/hero/el-murmullo1.webp",
    title: "Where Ocean Meets Sky",
    caption: "Unparalleled privacy in one of Mexico's most exclusive coastal settings.",
    alt: "Oceanfront luxury villa with ocean views in Zihuatanejo",
  },
  {
    src: "/images/hero/el-murmullo2.webp",
    title: "Refined Coastal Living",
    caption: "The essence of La Casa Que Canta's understated elegance.",
    alt: "Refined coastal villa interior by La Casa Que Canta",
  },
  {
    src: "/images/hero/el-murmullo3.webp",
    title: "Timeless Mexican Design",
    caption: "Authentic Mexican architecture blending tradition with modern luxury.",
    alt: "Traditional Mexican architecture in luxury villa setting",
  },
  {
    src: "/images/hero/el-murmullo4.webp",
    title: "A Private Ocean Retreat",
    caption: "Designed for absolute privacy, comfort, and breathtaking ocean views.",
    alt: "Private ocean retreat villa in Zihuatanejo, Mexico",
  },
];

const SLIDE_DURATION = 5000;

export default function HeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotionPreference = () => setPrefersReducedMotion(mediaQuery.matches);
    updateMotionPreference();
    mediaQuery.addEventListener("change", updateMotionPreference);
    return () => mediaQuery.removeEventListener("change", updateMotionPreference);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion || paused) return undefined;
    const id = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, SLIDE_DURATION);

    return () => window.clearInterval(id);
  }, [paused, prefersReducedMotion]);

  const handleSelect = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div
      className="relative h-full w-full overflow-hidden bg-ink/80 text-sand"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Images du slider */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <picture
            key={slide.src}
            className={`absolute inset-0 transition-opacity duration-1000 ease-out ${
              index === activeIndex ? "opacity-100" : "opacity-0"
            }`}
            aria-hidden={index !== activeIndex}
          >
            <img
              src={slide.src}
              alt={slide.alt}
              className="h-full w-full object-cover"
              loading={index === 0 ? "eager" : "lazy"}
              fetchPriority={index === 0 ? "high" : "auto"}
              decoding="async"
            />
          </picture>
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
      </div>

      {/* Texte du slider - En bas à gauche comme Zotela */}
      <div className="relative z-10 flex h-full flex-col justify-end px-6 pb-20 sm:px-10 sm:pb-24 lg:px-16 lg:pb-28">
        <div className="max-w-4xl space-y-4">
          <h1 className="text-5xl leading-[1.1] sm:text-6xl lg:text-7xl xl:text-8xl font-display font-medium text-white whitespace-pre-line">
            {slides[activeIndex].title}
          </h1>
          <p className="max-w-xl text-base sm:text-lg text-white/90 font-light leading-relaxed">
            {slides[activeIndex].caption}
          </p>
        </div>
        
        {/* Navigation dots en bas */}
        <div className="mt-8 flex items-center gap-2">
          {slides.map((slide, index) => (
            <button
              key={slide.src}
              onClick={() => handleSelect(index)}
              className={`h-1.5 rounded-full transition-all ${
                index === activeIndex ? "bg-white w-12" : "bg-white/40 w-1.5"
              }`}
              aria-label={`Voir le visuel ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
