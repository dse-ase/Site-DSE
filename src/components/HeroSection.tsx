import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { DataSprintPromo } from "./DataSprintPromo";

import imgCSIE from "../assets/CSIE.jpg";
import imgGradinaCSIE from "../assets/gradinacsie.jpg";
import imgASE from "../assets/ASE.jpg";
import imgGradinaCSIE2 from "../assets/gradina csie 2.jpg";

const slides = [
  { src: imgCSIE, alt: "Clădirea Virgil Madgearu a ASE, sediul Facultății CSIE, Calea Dorobanților 15-17" },
  { src: imgGradinaCSIE, alt: "Grădina interioară a clădirii CSIE, cu foișor din lemn și bănci" },
  { src: imgASE, alt: "Clădirea Ion N. Angelescu, sediul istoric al ASE din Piața Romană" },
  { src: imgGradinaCSIE2, alt: "Fântână cu nuferi în grădina interioară a clădirii CSIE" },
];

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  // WCAG 2.2.2: derularea automată trebuie să poată fi oprită; cine cere
  // mișcare redusă pornește direct cu ea oprită.
  const [paused, setPaused] = useState(prefersReducedMotion);
  // pauză temporară cât timp cursorul sau focusul e pe slideshow
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (paused || hovered) return;
    const interval = setInterval(() => {
      setCurrentSlide((prevIndex) => (prevIndex + 1) % slides.length);
    }, 6700);
    return () => clearInterval(interval);
  }, [paused, hovered]);

  const goToPrevious = () => {
    setCurrentSlide((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1,
    );
  };

  const goToNext = () => {
    setCurrentSlide((prevIndex) => (prevIndex + 1) % slides.length);
  };

  // săgețile: vizibile mereu pe ecrane touch/înguste, la hover sau focus pe desktop
  const arrowClass =
    "absolute top-1/2 -translate-y-1/2 bg-white/85 dark:bg-gray-800/85 hover:bg-white dark:hover:bg-gray-800 p-2 rounded-full shadow-sm z-20 transition-opacity duration-300 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 lg:group-focus-within:opacity-100 focus-visible:opacity-100";

  return (
    <div className="relative overflow-hidden bg-white dark:bg-gray-900 py-10 sm:py-12 lg:py-10 2xl:py-16 section-padding-mobile w-full max-w-full">
      <div className="relative z-10 px-4 w-full px-mobile-4">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-16 gap-mobile-4">
          {/* Left Side - Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex-1 text-center lg:text-left flex flex-col"
          >
            {/* html are font-size 20px, deci 5xl = 60px: pe laptopuri (lg–xl) titlul s-ar rupe pe
                3 rânduri și ar împinge anunțul DataSprint sub fold. 60px doar pe ecrane mari. */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl 2xl:text-5xl font-bold mb-4 sm:mb-6 leading-tight text-balance hero-title text-[#22409a] dark:text-white">
              Departamentul de{" "}
              <span className="text-[#7209B7] dark:text-[#4CC9F0]">
                Statistică și Econometrie
              </span>
            </h1>

            <p className="text-xl leading-relaxed hero-subtitle mb-6 lg:mb-8 text-[#22409a] dark:text-gray-200">
              Educaţie, cercetare și analiză cantitativă pentru economia
              modernă
            </p>

            <DataSprintPromo />
          </motion.div>

          {/* Right Side - Image Slideshow */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex-1 w-full slideshow-wrapper"
          >
            <div
              className="relative w-full rounded-xl overflow-hidden shadow-sm group slideshow-container"
              style={{ aspectRatio: "4/3" }}
              role="region"
              aria-roledescription="carusel"
              aria-label="Imagini din campusul ASE"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              onFocus={() => setHovered(true)}
              onBlur={(e) => {
                if (!e.currentTarget.contains(e.relatedTarget as Node)) setHovered(false);
              }}
            >
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className="absolute inset-0 w-full h-full"
                  aria-hidden={currentSlide !== index}
                  style={{
                    opacity: currentSlide === index ? 1 : 0,
                    transition: "opacity 1.2s ease-in-out",
                  }}
                >
                  <img
                    src={slide.src}
                    alt={slide.alt}
                    // prima imagine e vizibilă imediat; restul pot aștepta
                    loading={index === 0 ? "eager" : "lazy"}
                    className="w-full h-full object-contain bg-white dark:bg-gray-900"
                  />
                </div>
              ))}

              {/* Navigation Arrows */}
              <button
                onClick={goToPrevious}
                className={`${arrowClass} left-4`}
                aria-label="Imagine anterioară"
              >
                <ChevronLeft className="w-6 h-6 text-gray-800 dark:text-white btn-icon-mobile" />
              </button>

              <button
                onClick={goToNext}
                className={`${arrowClass} right-4`}
                aria-label="Imagine următoare"
              >
                <ChevronRight className="w-6 h-6 text-gray-800 dark:text-white btn-icon-mobile" />
              </button>

              {/* Indicatori + pauză. Pe telefon punctele sunt mai rare, ca zonele
                  lor de atingere (extinse în index.css) să nu se suprapună. */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-4 sm:gap-2 z-10 rounded-full bg-black/30 px-3 py-1.5">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className="h-2 rounded-full transition-all duration-500"
                    style={{
                      backgroundColor:
                        currentSlide === index
                          ? "#4CC9F0"
                          : "rgba(255, 255, 255, 0.7)",
                      width: currentSlide === index ? "24px" : "8px",
                    }}
                    aria-label={`Mergi la imaginea ${index + 1}`}
                    aria-current={currentSlide === index ? "true" : undefined}
                  />
                ))}
                <button
                  onClick={() => setPaused((p) => !p)}
                  className="ml-1 text-white/90 hover:text-white p-1.5 rounded-full"
                  aria-label={paused ? "Pornește derularea imaginilor" : "Oprește derularea imaginilor"}
                >
                  {paused ? <Play className="w-3.5 h-3.5" /> : <Pause className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
