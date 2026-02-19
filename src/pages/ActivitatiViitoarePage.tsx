import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { SimpleHeader } from '../components/SimpleHeader';
import { Footer } from '../components/Footer';
import { Calendar, ExternalLink, ArrowRight } from 'lucide-react';

export default function ActivitatiViitoarePage() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setShowContent(true);
  }, []);

  const evenimente = [
    {
      id: 1,
      titlu: 'Programul de Mobilitate EMOS lansat: finanțare pentru stagii de practică transfrontaliere și evenimente de Statistică Oficială',
      data: '15 Decembrie 2025',
      link: 'https://asds-csie.ase.ro/emos-mobility-programme-launched-funding-for-cross-border-internships-and-official-statistics-events/',
      categorie: 'Mobilitate'
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 flex flex-col">
      <SimpleHeader/>
      
      <main className="pb-24 flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#7209B7] to-[#4361EE] text-white px-4 py-2 rounded-full mb-8">
              <Calendar className="w-4 h-4" />
              <span className="text-sm">Activități Viitoare</span>
            </div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Descoperă oportunitățile și evenimentele care te așteaptă
            </p>
          </motion.div>

          {/* Evenimente Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {evenimente.map((eveniment, index) => (
              <motion.article
                key={eveniment.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#4CC9F0]/20 dark:border-gray-700 overflow-hidden group"
              >
                <div className="p-8">
                  {/* Categorie Badge */}
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#7209B7] to-[#4361EE] text-white px-3 py-1 rounded-full text-xs font-semibold mb-4">
                    {eveniment.categorie}
                  </div>

                  {/* Titlu */}
                  <h3 className="text-xl font-bold text-[#3A0CA3] dark:text-[#4CC9F0] mb-4 leading-tight">
                    {eveniment.titlu}
                  </h3>

                  {/* Data */}
                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-6">
                    <Calendar className="w-4 h-4" />
                    <span>{eveniment.data}</span>
                  </div>

                  {/* Link */}
                  <a
                    href={eveniment.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#4361EE] hover:text-[#7209B7] dark:text-[#4CC9F0] dark:hover:text-[#4361EE] font-semibold transition-colors group-hover:gap-3 duration-300"
                  >
                    <span>Citește mai mult</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.article>
            ))}
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}