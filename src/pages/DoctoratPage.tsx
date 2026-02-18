import { useState, useEffect } from 'react';
import { SimpleHeader } from '../components/SimpleHeader';
import { Doctorat } from '../components/Doctorat';
import { Footer } from '../components/Footer';

export default function DoctoratPage() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setShowContent(true);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <SimpleHeader/>
      
      <main>
        <Doctorat />
      </main>

      <Footer />
    </div>
  );
}