import { useState, useEffect, useRef } from "react";
import { ui } from "@/i18n";

interface FusionCuisineSliderProps {
  lang?: 'en' | 'es';
}

export default function FusionCuisineSlider({ lang = 'en' }: FusionCuisineSliderProps) {
  const t = ui[lang];
  
  const dishes = [
    { name: t['cuisine.dish1'], image: "/images/cuisines/9.webp" },
    { name: t['cuisine.dish2'], image: "/images/cuisines/10.webp" },
    { name: t['cuisine.dish3'], image: "/images/cuisines/cuisine5.webp" },
    { name: t['cuisine.dish4'], image: "/images/cuisines/cuisine6.webp" },
    { name: t['cuisine.dish5'], image: "/images/cuisines/cusine2.webp" },
  ];
  const MIN_ZOOM = 1;
  const MAX_ZOOM = 3;
  const defaultZoom = 1.8;
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [zoom, setZoom] = useState(MIN_ZOOM);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const lightboxRef = useRef<HTMLDivElement>(null);

  const openLightbox = (imageUrl: string) => {
    setLightboxImage(imageUrl);
    setZoom(defaultZoom);
    setPosition({ x: 0, y: 0 });
  };

  const closeLightbox = () => {
    setLightboxImage(null);
    setZoom(1);
    setPosition({ x: 0, y: 0 });
  };

  const navigateLightbox = (direction: "prev" | "next") => {
    if (!lightboxImage) return;
    const currentIndex = dishes.findIndex(dish => dish.image === lightboxImage);
    let newIndex;
    
    if (direction === "prev") {
      newIndex = currentIndex === 0 ? dishes.length - 1 : currentIndex - 1;
    } else {
      newIndex = currentIndex === dishes.length - 1 ? 0 : currentIndex + 1;
    }
    
    setLightboxImage(dishes[newIndex].image);
    setZoom(defaultZoom);
    setPosition({ x: 0, y: 0 });
  };

  const handleZoomIn = () => {
    setZoom(prev => Math.min(prev + 0.5, MAX_ZOOM));
  };

  const handleZoomOut = () => {
    setZoom(prev => {
      const newZoom = Math.max(prev - 0.5, MIN_ZOOM);
      if (newZoom === MIN_ZOOM) {
        setPosition({ x: 0, y: 0 });
      }
      return newZoom;
    });
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoom > 1) {
      setIsDragging(true);
      setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && zoom > 1) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };
  
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (lightboxImage && lightboxRef.current) {
        e.preventDefault();
        if (e.deltaY < 0) {
          setZoom(prev => Math.min(prev + 0.5, MAX_ZOOM));
        } else {
          setZoom(prev => {
            const newZoom = Math.max(prev - 0.5, MIN_ZOOM);
            if (newZoom === MIN_ZOOM) {
              setPosition({ x: 0, y: 0 });
            }
            return newZoom;
          });
        }
      }
    };

    const lightbox = lightboxRef.current;
    if (lightbox) {
      lightbox.addEventListener('wheel', handleWheel, { passive: false });
      return () => lightbox.removeEventListener('wheel', handleWheel);
    }
  }, [lightboxImage]);
  
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && lightboxImage) {
        closeLightbox();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxImage]);
  
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer || isPaused) return;
    
    let animationId: number;
    let currentPosition = 0;
    const speed = 1.5; // pixels per frame (60fps = 90px/sec)
    
    const animate = () => {
      if (!scrollContainer) return;
      
      currentPosition += speed;
      const maxScroll = scrollContainer.scrollWidth / 2;
      
      if (currentPosition >= maxScroll) {
        currentPosition = 0;
      }
      
      scrollContainer.style.transform = `translateX(-${currentPosition}px)`;
      animationId = requestAnimationFrame(animate);
    };
    
    animationId = requestAnimationFrame(animate);
    
    return () => cancelAnimationFrame(animationId);
  }, [isPaused]);

  // Duplicate dishes 2 times for seamless infinite loop
  const allDishes = [...dishes, ...dishes];

  return (
    <>
    <section id="fusion-cuisine" className="relative py-12 md:py-20 lg:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Grid Layout: Texte à gauche, Slider à droite */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
          {/* Texte à gauche */}
          <div className="max-w-xl px-4 sm:px-0 lg:col-span-4 lg:pr-8 xl:pr-10">
            <span className="text-xl sm:text-2xl uppercase tracking-[0.10em] text-dusk font-semibold block mb-2">
              {t['cuisine.title']}
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-ink mb-4 md:mb-6 leading-tight">
              {t['cuisine.subtitle']}
            </h2>
            <p className="text-sm sm:text-base text-ink/70 leading-relaxed mb-6 md:mb-8">
              {t['cuisine.description']}
            </p>
          </div>

          {/* Slider horizontal à droite */}
          <div className="relative -mx-4 sm:-mx-6 lg:-mx-4 xl:-mx-12 lg:col-span-8 overflow-hidden">
            <div
              ref={scrollRef}
              className="flex gap-3 sm:gap-4 md:gap-6 will-change-transform"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {allDishes.map((dish, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-[300px] sm:w-[360px] md:w-[440px] lg:w-[520px] group cursor-pointer"
                  onClick={() => openLightbox(dish.image)}
                >
                  <div className="relative h-[380px] sm:h-[450px] md:h-[550px] lg:h-[600px] overflow-hidden rounded-lg shadow-xl">
                    <img
                      src={dish.image}
                      alt={dish.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      draggable="false"
                      loading="lazy"
                    />
                    {/* Overlay avec titre */}
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent flex items-end p-4 sm:p-6 md:p-8">
                      <h3 className="font-editorial text-xl sm:text-2xl md:text-3xl lg:text-4xl text-sand">
                        {dish.name}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Lightbox */}
    {lightboxImage && (
      <div
        ref={lightboxRef}
        className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center overflow-hidden"
        onClick={closeLightbox}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        {/* Bouton fermer avec croix visible */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            closeLightbox();
          }}
          className="absolute top-4 right-4 bg-white hover:bg-gray-200 text-black w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center text-2xl sm:text-3xl font-bold z-20 transition-all shadow-lg hover:scale-110 border border-black/10"
          aria-label="Close"
          title="Close (Esc)"
        >
          ✕
        </button>

        {/* Barre de zoom verticale à droite */}
        <div className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 flex flex-col items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full p-3 z-10">
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleZoomIn();
            }}
            className="bg-white/20 hover:bg-white/30 text-white w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold transition-all"
            aria-label="Zoom in"
          >
            +
          </button>
          
          <div className="flex flex-col items-center gap-2">
            <div className="h-32 w-1 bg-white/20 rounded-full relative">
              <div 
                className="absolute bottom-0 w-full bg-white rounded-full transition-all"
                style={{ height: `${((zoom - MIN_ZOOM) / (MAX_ZOOM - MIN_ZOOM)) * 100}%` }}
              />
              <div 
                className="absolute w-4 h-4 bg-white rounded-full -left-1.5 transition-all"
                style={{ bottom: `calc(${((zoom - MIN_ZOOM) / (MAX_ZOOM - MIN_ZOOM)) * 100}% - 8px)` }}
              />
            </div>
            <div className="text-white text-xs font-semibold bg-white/20 px-2 py-1 rounded">
              {Math.round(zoom * 100)}%
            </div>
          </div>
          
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleZoomOut();
            }}
            className="bg-white/20 hover:bg-white/30 text-white w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold transition-all"
            aria-label="Zoom out"
          >
            −
          </button>
        </div>

        {/* Bouton précédent */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            navigateLightbox("prev");
          }}
          className="absolute left-2 sm:left-4 md:left-6 top-1/2 -translate-y-1/2 text-white text-3xl sm:text-4xl hover:text-gray-300 z-10 bg-white/10 hover:bg-white/20 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center"
          aria-label="Previous"
        >
          ‹
        </button>

        {/* Image */}
        <div 
          className="flex items-center justify-center w-full h-full"
          style={{ cursor: zoom > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default' }}
        >
          <img
            src={lightboxImage}
            alt="Lightbox"
            className="max-w-[90%] max-h-[90%] object-contain transition-transform"
            style={{
              transform: `scale(${zoom}) translate(${position.x / zoom}px, ${position.y / zoom}px)`,
              transformOrigin: 'center center'
            }}
            onClick={(e) => e.stopPropagation()}
            onMouseDown={handleMouseDown}
            draggable={false}
          />
        </div>

        {/* Bouton suivant */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            navigateLightbox("next");
          }}
          className="absolute right-2 sm:right-4 md:right-6 top-1/2 -translate-y-1/2 text-white text-3xl sm:text-4xl hover:text-gray-300 z-10 bg-white/10 hover:bg-white/20 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center"
          aria-label="Next"
        >
          ›
        </button>

        {/* Miniatures en bas */}
        <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex gap-2 overflow-x-auto max-w-[90vw]">
          {dishes.map((dish, index) => (
            <div
              key={index}
              className={`w-12 h-12 sm:w-16 sm:h-16 cursor-pointer rounded overflow-hidden flex-shrink-0 ${
                lightboxImage === dish.image ? "ring-2 ring-white" : "opacity-60 hover:opacity-100"
              }`}
              onClick={(e) => {
                e.stopPropagation();
                setLightboxImage(dish.image);
                setZoom(defaultZoom);
                setPosition({ x: 0, y: 0 });
              }}
            >
              <img src={dish.image} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    )}
    </>
  );
}
