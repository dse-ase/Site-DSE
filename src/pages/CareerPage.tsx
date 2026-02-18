import { useState, useEffect } from 'react';
import { SimpleHeader } from '../components/SimpleHeader';
import { Cariera } from '../components/Cariera';
import { Footer } from '../components/Footer';

export default function CareerPage() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setShowContent(true);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <SimpleHeader showContent={showContent} />
      
      <main>
        <Cariera />
      </main>

      <Footer />
    </div>
  );
}