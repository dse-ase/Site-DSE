import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { ChevronDown, Menu, X, Sun, Moon } from "lucide-react";
import { CampusMapPopup } from "./CampusMapPopup";
import { useDarkMode } from "../contexts/DarkModeContext";
import { scrollToSection } from "./scroll";
import logo from "../assets/logo.png";

interface HeaderProps {
  showContent?: boolean;
}

export default function Header({ showContent = true }: HeaderProps) {
  const { darkMode, setDarkMode } = useDarkMode();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMapOpen, setIsMapOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 440);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={
          showContent
            ? {
                y: 0,
                opacity: 1,
                height: isMobile
                  ? isScrolled
                    ? "65px"
                    : "100px"
                  : isScrolled
                    ? "12vh"
                    : "20vh",
              }
            : { y: -100, opacity: 0 }
        }
        transition={{ duration: 0.3, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 shadow-lg ${isScrolled ? "scrolled" : ""}`}
        style={{
          backgroundColor: "#22409a",
        }}
      >
        <div className="max-w-[85%] mx-auto px-2 sm:px-6 h-full">
          <div className="flex items-center justify-between h-full">
            {/* LEFT SIDE: Logo + Social Media */}
            <div className="flex items-center gap-2 sm:gap-8">
              {/* Logo - Clickable - Larger and leftmost */}
              <a
                href="#/"
                className="cursor-pointer hover:opacity-80 hover:scale-105 transition-all duration-300"
              >
                <img
                  src={logo}
                  alt="DSE Logo"
                  className="h-16 sm:h-20 lg:h-28 w-auto"
                />
              </a>

              {/* Social Media Icons */}
              <div className="hidden lg:flex items-center gap-4 ml-4 pl-6 border-l-2 border-[whitesmoke]">
                <a
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer text-gray-300 hover:text-white transition-colors"
                  aria-label="TikTok"
                >
                  <svg
                    className="w-7 h-7"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                  </svg>
                </a>

                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer text-gray-300 hover:text-white transition-colors"
                  aria-label="Instagram"
                >
                  <svg
                    className="w-7 h-7"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer text-gray-300 hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg
                    className="w-7 h-7"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>

                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer text-gray-300 hover:text-white transition-colors"
                  aria-label="Facebook"
                >
                  <svg
                    className="w-7 h-7"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>

                {/* Dark Mode Toggle */}
                <div className="pl-4 ml-4 border-l-2 border-[whitesmoke]">
                  <button
                    onClick={toggleDarkMode}
                    className="p-2.5 rounded-lg text-gray-300 hover:bg-white/10 hover:text-white transition-all duration-300 group"
                    aria-label="Toggle Dark Mode"
                  >
                    {darkMode ? (
                      <Moon className="w-7 h-7" />
                    ) : (
                      <Sun className="w-7 h-7" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE: Navigation Menu */}
            <nav className="hidden lg:flex items-center gap-8">
              <div className="relative group border-r border-[whitesmoke] pr-8">
                <button className="flex items-center gap-1 text-lg text-gray-300 hover:text-[#4CC9F0] hover:scale-105 transition-all duration-200">
                  Despre noi
                  <ChevronDown className="w-4 h-4" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-56 bg-gray-800 rounded-lg shadow-xl py-2 border border-[whitesmoke] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <a
                    href="#/istoric"
                    className="block px-4 py-2 text-base text-gray-300 hover:bg-[#4CC9F0]/10 hover:text-[#4CC9F0] hover:scale-105 transition-all duration-200"
                  >
                    Istoric
                  </a>
                  <a
                    href="#/cadre-didactice"
                    className="block px-4 py-2 text-base text-gray-300 hover:bg-[#4CC9F0]/10 hover:text-[#4CC9F0] hover:scale-105 transition-all duration-200"
                  >
                    Echipa noastră
                  </a>
                  <a
                    href="#/misiune"
                    className="block px-4 py-2 text-base text-gray-300 hover:bg-[#4CC9F0]/10 hover:text-[#4CC9F0] hover:scale-105 transition-all duration-200"
                  >
                    Misiune
                  </a>
                </div>
              </div>

              <div className="relative group border-r border-[whitesmoke] pr-8">
                <button className="flex items-center gap-1 text-lg text-gray-300 hover:text-[#4CC9F0] hover:scale-105 transition-all duration-200">
                  Programe studii
                  <ChevronDown className="w-4 h-4" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-56 bg-gray-800 rounded-lg shadow-xl py-2 border border-[whitesmoke] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <a
                    href="#licenta"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection("licenta");
                    }}
                    className="block px-4 py-2 text-base text-gray-300 hover:bg-[#4CC9F0]/10 hover:text-[#4CC9F0] hover:scale-105 transition-all duration-200"
                  >
                    Licență
                  </a>
                  <a
                    href="#master"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection("master");
                    }}
                    className="block px-4 py-2 text-base text-gray-300 hover:bg-[#4CC9F0]/10 hover:text-[#4CC9F0] hover:scale-105 transition-all duration-200"
                  >
                    Master
                  </a>
                  <a
                    href="#/cursuri-postuniversitare"
                    className="block px-4 py-2 text-base text-gray-300 hover:bg-[#4CC9F0]/10 hover:text-[#4CC9F0] hover:scale-105 transition-all duration-200"
                  >
                    Cursuri postuniversitare
                  </a>
                  <a
                    href="#doctorat"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection("doctorat");
                    }}
                    className="block px-4 py-2 text-base text-gray-300 hover:bg-[#4CC9F0]/10 hover:text-[#4CC9F0] hover:scale-105 transition-all duration-200"
                  >
                    Doctorat
                  </a>
                </div>
              </div>

              <div className="relative group border-r border-[whitesmoke] pr-8">
                <button className="flex items-center gap-1 text-lg text-gray-300 hover:text-[#4CC9F0] hover:scale-105 transition-all duration-200">
                  Studenți
                  <ChevronDown className="w-4 h-4" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-64 bg-gray-800 rounded-lg shadow-xl py-2 border border-[whitesmoke] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <a
                    href="#/activitati-viitoare"
                    className="block px-4 py-2 text-base text-gray-300 hover:bg-[#4CC9F0]/10 hover:text-[#4CC9F0] transition-all duration-200"
                  >
                    🚀 Activități viitoare
                  </a>
                  <a
                    href="#/evenimente-trecute"
                    className="block px-4 py-2 text-base text-gray-300 hover:bg-[#4CC9F0]/10 hover:text-[#4CC9F0] transition-all duration-200"
                  >
                    🕰️ Evenimente trecute
                  </a>
                  <div className="border-t border-gray-700 my-2"></div>
                  <button
                    onClick={() => setIsMapOpen(true)}
                    className="w-full text-left block px-4 py-2 text-base text-gray-300 hover:bg-[#4CC9F0]/10 hover:text-[#4CC9F0] transition-all duration-200"
                  >
                    🏢 Campus ASE
                  </button>
                  <a
                    href="https://csie.ase.ro/wp-content/uploads/2025/10/Calendarul-Studentului-2025-2026.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 text-base text-gray-300 hover:bg-[#4CC9F0]/10 hover:text-[#4CC9F0] transition-all duration-200"
                  >
                    📅 Calendarul Studentului
                  </a>
                  <a
                    href="#/orar"
                    className="block px-4 py-2 text-base text-gray-300 hover:bg-[#4CC9F0]/10 hover:text-[#4CC9F0] transition-all duration-200"
                  >
                    📚 Orar
                  </a>
                  <a
                    href="https://csie.ase.ro/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 text-base text-gray-300 hover:bg-[#4CC9F0]/10 hover:text-[#4CC9F0] transition-all duration-200"
                  >
                    🏛️ Site CSIE
                  </a>
                  <div className="border-t border-gray-700 my-2"></div>
                  <a
                    href="#/databases"
                    className="block px-4 py-2 text-base text-gray-300 hover:bg-[#4CC9F0]/10 hover:text-[#4CC9F0] transition-all duration-200"
                  >
                    📊 Baze de date
                  </a>
                  <a
                    href="#/instrumente-analiza"
                    className="block px-4 py-2 text-base text-gray-300 hover:bg-[#4CC9F0]/10 hover:text-[#4CC9F0] transition-all duration-200"
                  >
                    💻 Instrumente de analiză
                  </a>
                  <div className="border-t border-gray-700 my-2"></div>
                  <a
                    href="#/studenti-colaboratori"
                    className="block px-4 py-2 text-base text-gray-300 hover:bg-[#4CC9F0]/10 hover:text-[#4CC9F0] transition-all duration-200"
                  >
                    🎓 Studenții noștri colaboratori
                  </a>
                  <a
                    href="#/cariera"
                    className="block px-4 py-2 text-base text-gray-300 hover:bg-[#4CC9F0]/10 hover:text-[#4CC9F0] transition-all duration-200"
                  >
                    💼 Carieră
                  </a>
                  <a
                    href="#/profesori-coordonatori"
                    className="block px-4 py-2 text-base text-gray-300 hover:bg-[#4CC9F0]/10 hover:text-[#4CC9F0] transition-all duration-200"
                  >
                    👨‍🏫 Profesori coordonatori
                  </a>
                  <a
                    href="#/testimoniale"
                    className="block px-4 py-2 text-base text-gray-300 hover:bg-[#4CC9F0]/10 hover:text-[#4CC9F0] transition-all duration-200"
                  >
                    💬 Testimoniale
                  </a>
                </div>
              </div>

              <a
                href="#/cercetare"
                className="text-lg text-gray-300 hover:text-[#4CC9F0] hover:scale-105 transition-all duration-200 border-r border-[whitesmoke] pr-8"
              >
                Cercetare
              </a>

{/* În interiorul <nav className="hidden lg:flex ..."> */}
<a
  href="#contact"
  onClick={(e) => {
    e.preventDefault();
    scrollToSection("contact");
  }}
  className="text-lg text-gray-300 hover:text-[#4CC9F0] hover:scale-105 transition-all duration-200 border-r border-[whitesmoke] pr-8 cursor-pointer"
>
  Contact
</a>

              <a
                href="https://csie.ase.ro/oferta-de-mobilitati-erasmus/"
                target= "_blank"
                className="px-5 py-2.5 text-white rounded-md hover:shadow-lg hover:scale-105 transition-all duration-200 text-base font-medium"
                style={{
                  background:
                    "linear-gradient(135deg, #00BCD4 0%, #4CAF50 100%)",
                }}
              >
                Erasmus+
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center gap-3">
              {/* Dark Mode Toggle - Mobile */}
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-lg text-white hover:bg-white/10 transition-all duration-300"
                aria-label="Toggle Dark Mode"
              >
                {darkMode ? (
                  <Moon className="w-6 h-6" />
                ) : (
                  <Sun className="w-6 h-6" />
                )}
              </button>

              {/* Menu Toggle Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md text-white hover:bg-white/10 transition-colors"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden border-t border-white/20 py-4 max-h-[70vh] overflow-y-auto mobile-menu-container"
              style={{ backgroundColor: "#22409a" }}
            >
              <div className="flex flex-col gap-3 px-6">
                <div className="space-y-2">
                  <div className="py-2 text-white font-semibold text-center">
                    Despre noi
                  </div>
                  <div className="pl-4 space-y-2">
                    <a
                      href="#/istoric"
                      onClick={() => setIsMenuOpen(false)}
                      className="block py-1.5 text-sm text-gray-200 hover:text-[#4CC9F0] transition-colors text-center"
                    >
                      Istoric
                    </a>
                    <a
                      href="#/cadre-didactice"
                      onClick={() => setIsMenuOpen(false)}
                      className="block py-1.5 text-sm text-gray-200 hover:text-[#4CC9F0] transition-colors text-center"
                    >
                      Echipa noastră
                    </a>
                    <a
                      href="#/misiune"
                      onClick={() => setIsMenuOpen(false)}
                      className="block py-1.5 text-sm text-gray-200 hover:text-[#4CC9F0] transition-colors text-center"
                    >
                      Misiune
                    </a>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="py-2 text-white font-semibold text-center">
                    Programe studii
                  </div>
                  <div className="pl-4 space-y-2">
                    <a
                      href="/#licenta"
                      onClick={() => setIsMenuOpen(false)}
                      className="block py-1.5 text-sm text-gray-200 hover:text-[#4CC9F0] transition-colors text-center"
                    >
                      Licență
                    </a>
                    <a
                      href="/#master"
                      onClick={() => setIsMenuOpen(false)}
                      className="block py-1.5 text-sm text-gray-200 hover:text-[#4CC9F0] transition-colors text-center"
                    >
                      Master
                    </a>
                    <a
                      href="#/cursuri-postuniversitare"
                      onClick={() => setIsMenuOpen(false)}
                      className="block py-1.5 text-sm text-gray-200 hover:text-[#4CC9F0] transition-colors text-center"
                    >
                      Cursuri postuniversitare
                    </a>
                    <a
                      href="/#doctorat"
                      onClick={() => setIsMenuOpen(false)}
                      className="block py-1.5 text-sm text-gray-200 hover:text-[#4CC9F0] transition-colors text-center"
                    >
                      Doctorat
                    </a>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="py-2 text-white font-semibold text-center">
                    Utile pentru studenți
                  </div>
                  <div className="pl-4 space-y-2">
                    <a
                      href="#/cariera"
                      onClick={() => setIsMenuOpen(false)}
                      className="block py-1.5 text-sm text-gray-200 hover:text-[#4CC9F0] transition-colors text-center"
                    >
                      💼 Carieră - Oportunități și internship-uri
                    </a>
                    <a
                      href="#/orar"
                      onClick={() => setIsMenuOpen(false)}
                      className="block py-1.5 text-sm text-gray-200 hover:text-[#4CC9F0] transition-colors text-center"
                    >
                      📅 Orar - Programa cursurilor
                    </a>
                    <a
                      href="#/databases"
                      onClick={() => setIsMenuOpen(false)}
                      className="block py-1.5 text-sm text-gray-200 hover:text-[#4CC9F0] transition-colors text-center"
                    >
                      📊 Baze de date - Resurse pentru analiză
                    </a>
                    <a
                      href="#/instrumente-analiza"
                      onClick={() => setIsMenuOpen(false)}
                      className="block py-1.5 text-sm text-gray-200 hover:text-[#4CC9F0] transition-colors text-center"
                    >
                      💻 Instrumente - Software pentru analiză
                    </a>
                    <button
                      onClick={() => {
                        setIsMapOpen(true);
                        setIsMenuOpen(false);
                      }}
                      className="block py-1.5 text-sm text-gray-200 hover:text-[#4CC9F0] transition-colors text-center w-full"
                    >
                      🏢 Clădiri - Locații și săli
                    </button>
                  </div>
                </div>

                <div className="border-t border-white/20 pt-3 mt-2 space-y-2">
                  <a
                    href="#/evenimente-trecute"
                    onClick={() => setIsMenuOpen(false)}
                    className="block py-1.5 text-gray-200 hover:text-[#4CC9F0] transition-colors text-center"
                  >
                    🗓️ Evenimente trecute
                  </a>
                  <a
                    href="#/activitati-viitoare"
                    onClick={() => setIsMenuOpen(false)}
                    className="block py-1.5 text-gray-200 hover:text-[#4CC9F0] transition-colors text-center"
                  >
                    📅 Activități viitoare
                  </a>
                  <a
                    href="#/studenti-colaboratori"
                    onClick={() => setIsMenuOpen(false)}
                    className="block py-1.5 text-gray-200 hover:text-[#4CC9F0] transition-colors text-center"
                  >
                    🎓 Studenții noștri colaboratori
                  </a>
                  <a
                    href="https://csie.ase.ro/"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsMenuOpen(false)}
                    className="block py-1.5 text-gray-200 hover:text-[#4CC9F0] transition-colors text-center"
                  >
                    🏛️ Site CSIE
                  </a>
                  <a
                    href="#/profesori-coordonatori"
                    onClick={() => setIsMenuOpen(false)}
                    className="block py-1.5 text-gray-200 hover:text-[#4CC9F0] transition-colors text-center"
                  >
                    👨‍🏫 Profesori coordonatori
                  </a>
                  <a
                    href="#/testimoniale"
                    onClick={() => setIsMenuOpen(false)}
                    className="block py-1.5 text-gray-200 hover:text-[#4CC9F0] transition-colors text-center"
                  >
                    💬 Testimoniale
                  </a>
                </div>

                <div className="border-t border-white/20 pt-3 mt-2 space-y-2">
                  <a
                    href="#/cercetare"
                    onClick={() => setIsMenuOpen(false)}
                    className="block py-2 text-white font-semibold hover:text-[#4CC9F0] transition-colors text-center"
                  >
                    Cercetare
                  </a>

<a
  href="#contact"
  onClick={(e) => {
    e.preventDefault();
    setIsMenuOpen(false); // Închidem meniul întâi
    scrollToSection("contact"); // Executăm scroll-ul
  }}
  className="block py-2 text-white font-semibold hover:text-[#4CC9F0] transition-colors text-center cursor-pointer"
>
  Contact
</a>
                  <a
                    href="https://csie.ase.ro/oferta-de-mobilitati-erasmus/"
                    target="_blank"
                    onClick={() => setIsMenuOpen(false)}
                    className="block py-2 px-4 text-center text-white rounded-md transition-all font-medium"
                    style={{
                      background:
                        "linear-gradient(135deg, #00BCD4 0%, #4CAF50 100%)",
                    }}
                  >
                    Erasmus+
                  </a>
                </div>

                {/* Social Media - Mobile */}
                <div className="flex items-center justify-center gap-6 pt-4 border-t border-white/20 mt-2">
                  <a
                    href="https://tiktok.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-200 hover:text-white transition-colors"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                    </svg>
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-200 hover:text-white transition-colors"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-200 hover:text-white transition-colors"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-200 hover:text-white transition-colors"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </motion.header>

      {/* Spacer to push content below header */}
      <div
        className="header-spacer"
        style={{ height: isMobile ? "100px" : "20vh" }}
      />

      {/* Campus Map Popup */}
      <CampusMapPopup isOpen={isMapOpen} onClose={() => setIsMapOpen(false)} />
    </>
  );
}
