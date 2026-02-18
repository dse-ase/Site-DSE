import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Sun, Moon, Home } from 'lucide-react';
import { useDarkMode } from '../contexts/DarkModeContext';

export function SimpleHeader() {
  const { darkMode, setDarkMode } = useDarkMode();

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="fixed top-0 left-0 right-0 z-50 shadow-lg"
        style={{ 
          height: '12vh', 
          backgroundColor: '#22409a' 
        }}
      >
        <div className="max-w-[85%] mx-auto px-2 sm:px-4 lg:px-6 h-full">
          <div className="flex items-center justify-between h-full">
            
            {/* LEFT SIDE: Logo + Text */}
            <div className="flex items-center gap-2 sm:gap-4 lg:gap-6">
              {/* Logo - Clickable */}
              <a 
                href="#/" 
                className="cursor-pointer hover:opacity-80 hover:scale-105 transition-all duration-300 flex items-center gap-2 sm:gap-4 lg:gap-6"
              >
                <img src={'src/assets/76832ff7847efbc7c6a73a3c11e8dc869530dd33.png'} alt="DSE Logo" className="h-12 sm:h-16 lg:h-20 w-auto" />
                
                {/* Text next to logo */}
                <div className="hidden sm:flex items-center gap-2 lg:gap-3">
                  <Home className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-[#4CC9F0]" />
                  <span className="text-white text-sm sm:text-base lg:text-lg font-medium">Înapoi la pagina principală</span>
                </div>
                
                {/* Mobile - Just icon */}
                <div className="sm:hidden">
                  <Home className="w-5 h-5 text-[#4CC9F0]" />
                </div>
              </a>
            </div>

            {/* RIGHT SIDE: Dark Mode Toggle */}
            <div>
              <button
                onClick={toggleDarkMode}
                className="p-2 sm:p-2.5 rounded-lg text-gray-300 hover:bg-white/10 hover:text-white transition-all duration-300"
                aria-label="Toggle Dark Mode"
              >
                {darkMode ? (
                  <Moon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" />
                ) : (
                  <Sun className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" />
                )}
              </button>
            </div>

          </div>
        </div>
      </motion.header>
      
      {/* Spacer to push content below header */}
      <div style={{ height: '12vh' }} />
      
      {/* Additional spacing between header and content - 1.5cm on secondary pages only */}
      <div style={{ height: '1.5cm' }} />
    </>
  );
}