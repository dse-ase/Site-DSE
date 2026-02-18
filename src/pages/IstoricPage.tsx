import { useState, useEffect } from 'react';
import { SimpleHeader } from '../components/SimpleHeader';
import { Istoric } from '../components/Istoric';
import { Footer } from '../components/Footer';

export default function IstoricPage() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setShowContent(true);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 flex flex-col">
      <SimpleHeader showContent={showContent} />
      
      <main className="flex-grow">
        <Istoric />
      </main>

      <Footer />
    </div>
  );
}