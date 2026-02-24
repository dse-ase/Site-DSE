import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Imagini slideshow din Unsplash
const slideImages = [
  'src/assets/CSIE.jpg',
  'src/assets/gradinacsie.jpg',
  'src/assets/ASE.jpg',
  'src/assets/gradina csie 2.jpg'
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      title: 'Departamentul de Statistică și Econometrie',
      subtitle: 'Academia de Studii Economice, București'
    },
    {
      title: 'Statistică Economică și Data Science',
      subtitle: 'Programul de licență care pregătește specialiști pentru economia digitală'
    },
    {
      title: 'Investește în viitorul tău',
      subtitle: 'Alătură-te comunității DSE și descoperă oportunitățile în data science'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevIndex) => (prevIndex + 1) % slideImages.length);
    }, 6700);

    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentSlide((prevIndex) => 
      prevIndex === 0 ? slideImages.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentSlide((prevIndex) => 
      (prevIndex + 1) % slideImages.length
    );
  };

  return (
    <div 
      className="relative overflow-hidden bg-white dark:bg-gray-900 py-10 sm:py-16 lg:py-20 section-padding-mobile"
    >
      <div className="relative z-10 px-4 w-full px-mobile-4">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-16 gap-mobile-4">
          {/* Left Side - Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex-1 text-center lg:text-left"
          >
            <h1 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight hero-title" 
              style={{ 
                color: '#22409a',
                WebkitTextStroke: '1px rgba(255, 255, 255, 0.8)',
                paintOrder: 'stroke fill'
              }}
            >
              <span className="dark:hidden">Departamentul de{' '}
              <span style={{
                background: 'linear-gradient(135deg, #00BCD4 0%, #4CAF50 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                WebkitTextStroke: '1px rgba(255, 255, 255, 0.8)'
              }}>
                Statistică şi Econometrie
              </span></span>
              <span className="hidden dark:inline" style={{ WebkitTextStroke: '1.5px rgba(0, 0, 0, 0.6)', color: '#ffffff' }}>Departamentul de{' '}
              <span style={{
                background: 'linear-gradient(135deg, #00BCD4 0%, #4CAF50 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                WebkitTextStroke: '1.5px rgba(0, 0, 0, 0.6)'
              }}>
                Statistică şi Econometrie
              </span></span>
            </h1>
            <p 
              className="text-xl leading-relaxed hero-subtitle" 
              style={{ 
                color: '#22409a', 
                lineHeight: '1.6',
                WebkitTextStroke: '0.5px rgba(255, 255, 255, 0.8)',
                paintOrder: 'stroke fill'
              }}
            >
              <span className="dark:hidden">Educaţie, cercetare şi analiză cantitativă pentru economia modernă</span>
              <span className="hidden dark:inline" style={{ WebkitTextStroke: '1px rgba(0, 0, 0, 0.6)', color: '#e5e7eb' }}>Educaţie, cercetare şi analiză cantitativă pentru economia modernă</span>
            </p>
          </motion.div>

          {/* Right Side - Image Slideshow */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex-1 w-full slideshow-wrapper"
          >
            <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl group slideshow-container">
              {slideImages.map((image, index) => (
                <div
                  key={index}
                  className="absolute inset-0 w-full h-full"
                  style={{
                    opacity: currentSlide === index ? 1 : 0,
                    transition: 'opacity 1.2s ease-in-out'
                  }}
                >
                  <img
                    src={image}
                    alt={`ASE Slide ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
              
              {/* Navigation Arrows */}
              <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-800 p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"
                aria-label="Imagine anterioară"
              >
                <ChevronLeft className="w-6 h-6 text-gray-800 dark:text-white btn-icon-mobile" />
              </button>
              
              <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-800 p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"
                aria-label="Imagine următoare"
              >
                <ChevronRight className="w-6 h-6 text-gray-800 dark:text-white btn-icon-mobile" />
              </button>
              
              {/* Slideshow Indicators */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
                {slideImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className="h-2 rounded-full transition-all duration-500"
                    style={{
                      backgroundColor: currentSlide === index ? '#4CC9F0' : 'rgba(255, 255, 255, 0.5)',
                      width: currentSlide === index ? '24px' : '8px'
                    }}
                    aria-label={`Mergi la imaginea ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}