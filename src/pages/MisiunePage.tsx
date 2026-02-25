import { useState, useEffect } from 'react';
import { SimpleHeader } from '../components/SimpleHeader';
import { Misiune } from '../components/Misiune';
import { Footer } from '../components/Footer';

export default function MisiunePage() {
  const [, setShowContent] = useState(false);

  useEffect(() => {
    setShowContent(true);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 flex flex-col">
      <SimpleHeader/>
      
      <main className="flex-grow">
        <Misiune />
      </main>

      <Footer />
    </div>
  );
}