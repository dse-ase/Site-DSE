import { useState, useEffect } from 'react';
import { SimpleHeader } from '../components/SimpleHeader';
import { CadreDidactice } from '../components/CadreDidactice';
import { Footer } from '../components/Footer';

export default function CadreDidacticePage() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setShowContent(true);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 flex flex-col">
      <SimpleHeader/>
      
      <main className="flex-grow">
        <CadreDidactice />
      </main>

      <Footer />
    </div>
  );
}