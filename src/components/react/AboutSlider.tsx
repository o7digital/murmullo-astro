import React, { useEffect, useState } from "react";

const images = [
  "/images/hero/sous-hero/el-murmullo1.webp",
  "/images/hero/sous-hero/el-murmullo2.webp",
  "/images/hero/sous-hero/el-murmullo3.webp",
  "/images/hero/sous-hero/el-murmullo4.webp",
  "/images/hero/sous-hero/el-murmullo5.webp",
  "/images/hero/sous-hero/el-murmullo6.webp",
  "/images/hero/sous-hero/el-murmullo7.webp",
  "/images/hero/sous-hero/el-murmullo8.webp",
];

const SLIDE_DURATION = 4000;

export default function AboutSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return undefined;
    const id = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, SLIDE_DURATION);

    return () => window.clearInterval(id);
  }, [paused]);

  return (
    <div
      className="relative h-full w-full overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Images du slider */}
      <div className="relative h-full w-full">
        {images.map((src, index) => (
          <img
            key={src}
            src={src}
            alt={`Murmullo ${index + 1}`}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
              index === activeIndex ? "opacity-100" : "opacity-0"
            }`}
            loading={index === 0 ? "eager" : "lazy"}
          />
        ))}
      </div>

      {/* Navigation dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`h-2 rounded-full transition-all ${
              index === activeIndex ? "bg-white w-8" : "bg-white/50 w-2"
            }`}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
