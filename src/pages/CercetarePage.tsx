import { useState, useEffect } from 'react';
import { SimpleHeader } from '../components/SimpleHeader';
import { Cercetare } from '../components/Cercetare';
import { Footer } from '../components/Footer';

export default function CercetarePage() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setShowContent(true);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 flex flex-col">
      <SimpleHeader/>
      
      <main className="flex-1">
        <Cercetare />
      </main>

      <Footer />
    </div>
  );
}