import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { SimpleHeader } from '../components/SimpleHeader';
import { Footer } from '../components/Footer';
import { ExternalLink, Code2, Download } from 'lucide-react';

const instrumente = [
  {
    name: 'RStudio',
    description: 'Mediu integrat de dezvoltare (IDE) pentru limbajul R, esențial pentru analiză statistică avansată și vizualizare de date. Include editor de cod, console, debugger și workspace manager.',
    url: 'https://posit.co/download/rstudio-desktop/',
    color: 'from-[#7209B7] via-[#4361EE] to-[#4CC9F0]',
    icon: '📊',
    category: 'Statistică & R'
  },
  {
    name: 'PyCharm',
    description: 'IDE profesional pentru Python, perfect pentru data science și machine learning. Suport complet pentru biblioteci populare precum pandas, NumPy, scikit-learn și TensorFlow.',
    url: 'https://www.jetbrains.com/pycharm/download/?section=windows',
    color: 'from-[#4361EE] via-[#4895EF] to-[#4CC9F0]',
    icon: '🐍',
    category: 'Python & Data Science'
  },
  {
    name: 'JASP',
    description: 'Software gratuit și open-source pentru analiză statistică cu interfață intuitivă. Ideal pentru analiza datelor, teste statistice și modele Bayesiene. Alternativă modernă la SPSS.',
    url: 'https://jasp-stats.org/',
    color: 'from-[#7209B7] via-[#B5179E] to-[#F72585]',
    icon: '📈',
    category: 'Analiză Statistică'
  },
  {
    name: 'GeoDa',
    description: 'Instrument specializat pentru analiza spațială și explorarea datelor geografice. Perfect pentru econometrie spațială și analize GIS. Dezvoltat de Center for Spatial Data Science.',
    url: 'https://geodacenter.github.io/',
    color: 'from-[#4895EF] via-[#4CC9F0] to-[#3F37C9]',
    icon: '🗺️',
    category: 'Analiză Spațială'
  },
  {
    name: 'Excel Data Viz',
    description: 'Platformă cu resurse și tutoriale pentru vizualizarea datelor în Excel. Template-uri profesionale, grafice interactive și best practices pentru analiza și prezentarea datelor.',
    url: 'https://exceldataviz.com/',
    color: 'from-[#4361EE] via-[#4CC9F0] to-[#7209B7]',
    icon: '📊',
    category: 'Vizualizare Date'
  }
];

export default function InstrumenteAnalizaPage() {
  const [, setShowContent] = useState(false);

  useEffect(() => {
    setShowContent(true);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <SimpleHeader/>
      
      <main className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#7209B7] to-[#4361EE] text-white px-4 py-2 rounded-full mb-8">
              <Code2 className="w-4 h-4" />
              <span className="text-sm">INSTRUMENTE</span>
            </div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Software-ul recomandat pentru cursurile de statistică, econometrie și data science
            </p>
          </motion.div>

          {/* Tool Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {instrumente.slice(0, 4).map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-[#4CC9F0]/20 dark:border-gray-700"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${tool.color} opacity-0 group-hover:opacity-10 transition-opacity`} />
                
                <div className="p-8 relative">
                  {/* Header Section */}
                  <div className="flex items-start justify-between mb-6">
                    <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${tool.color} group-hover:scale-110 transition-transform duration-300`}>
                      <span className="text-4xl">{tool.icon}</span>
                    </div>
                    <span className="text-xs bg-[#4CC9F0]/20 dark:bg-[#4CC9F0]/10 text-[#4361EE] dark:text-[#4CC9F0] px-3 py-1 rounded-full font-medium">
                      {tool.category}
                    </span>
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-2xl mb-4 text-gray-900 dark:text-white group-hover:text-[#4361EE] dark:group-hover:text-[#4CC9F0] transition-colors">
                    {tool.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed min-h-[100px]">
                    {tool.description}
                  </p>
                  
                  {/* CTA Button */}
                  <a
                    href={tool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#7209B7] to-[#4361EE] text-white rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 font-semibold"
                  >
                    <Download className="w-5 h-5" />
                    <span>Descarcă acum</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                {/* Decorative corner */}
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${tool.color} opacity-10 rounded-bl-full`}></div>
              </motion.div>
            ))}
          </div>

          {/* Excel Data Viz - Centered */}
          <div className="flex justify-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-[#4CC9F0]/20 dark:border-gray-700 w-full md:w-1/2"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${instrumente[4].color} opacity-0 group-hover:opacity-10 transition-opacity`} />
              
              <div className="p-8 relative">
                {/* Header Section */}
                <div className="flex items-start justify-between mb-6">
                  <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${instrumente[4].color} group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-4xl">{instrumente[4].icon}</span>
                  </div>
                  <span className="text-xs bg-[#4CC9F0]/20 dark:bg-[#4CC9F0]/10 text-[#4361EE] dark:text-[#4CC9F0] px-3 py-1 rounded-full font-medium">
                    {instrumente[4].category}
                  </span>
                </div>
                
                {/* Content */}
                <h3 className="text-2xl mb-4 text-gray-900 dark:text-white group-hover:text-[#4361EE] dark:group-hover:text-[#4CC9F0] transition-colors">
                  {instrumente[4].name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed min-h-[100px]">
                  {instrumente[4].description}
                </p>
                
                {/* CTA Button */}
                <a
                  href={instrumente[4].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#7209B7] to-[#4361EE] text-white rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 font-semibold"
                >
                  <Download className="w-5 h-5" />
                  <span>Descarcă acum</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              {/* Decorative corner */}
              <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${instrumente[4].color} opacity-10 rounded-bl-full`}></div>
            </motion.div>
          </div>

          {/* Info Boxes */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Installation Guide */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-gradient-to-r from-[#4361EE]/10 to-[#4CC9F0]/10 dark:from-[#4361EE]/20 dark:to-[#4CC9F0]/20 border-l-4 border-[#4361EE] rounded-r-2xl p-8"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#4361EE] to-[#4895EF] rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-2xl">💡</span>
                </div>
                <div>
                  <h4 className="text-xl mb-2 text-[#3A0CA3] dark:text-[#4CC9F0]">Ghid de instalare</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    Toate instrumentele sunt gratuite pentru studenți! Urmează instrucțiunile de instalare de pe site-urile oficiale. Pentru PyCharm, poți beneficia de licență educațională gratuită prin JetBrains Student Program.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Course Support */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-gradient-to-r from-[#7209B7]/10 to-[#B5179E]/10 dark:from-[#7209B7]/20 dark:to-[#B5179E]/20 border-l-4 border-[#7209B7] rounded-r-2xl p-8"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#7209B7] to-[#B5179E] rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-2xl">📚</span>
                </div>
                <div>
                  <h4 className="text-xl mb-2 text-[#3A0CA3] dark:text-[#4CC9F0]">Utilizare în cursuri</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    Aceste instrumente sunt utilizate în cadrul cursurilor de Statistică, Econometrie și Data Science. Profesorii noștri oferă suport și tutoriale pentru fiecare platformă în cadrul seminariilor.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}