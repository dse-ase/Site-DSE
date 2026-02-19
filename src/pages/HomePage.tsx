import { useState, useEffect } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import { CardsSection } from '../components/CardsSection';
import { ProgramSection } from '../components/ProgramSection';
import { MasterPrograms } from '../components/MasterPrograms';
import { DoctoralProgram } from '../components/DoctoralProgram';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';

export default function HomePage() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setShowContent(true);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header showContent={showContent} />
      
      <main>
        {/* Acasă */}
        <HeroSection />
        
        {/* Cards Section - Programe, Utile, Cercetare */}
        <CardsSection />
        
        {/* Programe studii - Licență */}
        <ProgramSection />
        
        {/* Programe studii - Master */}
        <MasterPrograms />
        
        {/* Programe studii - Doctorat */}
        <DoctoralProgram />
        
        {/* Contact */}
        <Contact />
      </main>

      <Footer />
    </div>
  );
}