import { motion } from 'motion/react';
import { Code } from 'lucide-react';
import { SimpleHeader } from '../components/SimpleHeader';
import { Footer } from '../components/Footer';

export function StudentiColaboratoriPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 flex flex-col">
      <SimpleHeader/>
      
      <div className="pt-14 pb-20 flex-grow">
        <div className="max-w-4xl mx-auto px-6">
          
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-[#4CC9F0] to-[#4361EE] rounded-full mb-6">
              <Code className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl font-bold mb-4 text-[#4361EE] dark:text-[#4CC9F0]">
              Studenții noștri colaboratori
            </h1>
          </motion.div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Introduction */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border-2 border-gray-200 dark:border-gray-700">
              <div className="prose prose-lg max-w-none dark:prose-invert">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg mb-3">
                  Departamentul nostru colaborează activ cu studenți și absolvenți implicați în diverse proiecte academice și de dezvoltare instituțională. Le mulțumim pentru contribuțiile lor valoroase.
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 italic mb-0">
                  * Pentru mai multe informații despre studenți, apăsați pe numele lor pentru a accesa profilurile LinkedIn.
                </p>
              </div>
            </div>

            {/* Dezvoltarea platformei web */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border-2 border-[#4361EE] dark:border-[#4CC9F0]">
              <div className="prose prose-lg max-w-none dark:prose-invert">
                <h3 className="text-2xl font-semibold text-[#4361EE] dark:text-[#4CC9F0] mb-4 mt-0">
                  Dezvoltarea platformei web a departamentului
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                  <a href="https://www.linkedin.com/in/teodor-vasile-constantin123/" target="_blank" rel="noopener noreferrer" className="font-bold text-xl text-[#10B981] dark:text-[#34D399] hover:underline transition-all">Constantin Teodor-Vasile</a> – student, program Master - Statistică aplicată și Data Science: a dezvoltat integral platforma web a departamentului.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                  <a href="https://www.linkedin.com/in/andreea-ologu-467b5b340/" target="_blank" rel="noopener noreferrer" className="font-bold text-xl text-[#7209B7] dark:text-[#B5179E] hover:underline transition-all">Ologu Andreea Elena</a> – studentă, Communication and Multimedia Design, Universitatea din Leeuwarden: a realizat identitatea vizuală a departamentului (logo și elemente grafice).
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                  <a href="https://www.linkedin.com/in/caragea-iliana/" target="_blank" rel="noopener noreferrer" className="font-bold text-xl text-[#4361EE] dark:text-[#4CC9F0] hover:underline transition-all">Iliana Caragea</a> – studentă doctorandă Școala Doctorală Cibernetică și Statistică Economică: contribuie la actualizarea și întreținerea paginii web a departamentului.
                </p>
              </div>
            </div>

            {/* Organizarea seminarului Data&Lunch */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border-2 border-[#7209B7] dark:border-[#B5179E]">
              <div className="prose prose-lg max-w-none dark:prose-invert">
                <h3 className="text-2xl font-semibold text-[#7209B7] dark:text-[#B5179E] mb-4 mt-0">
                  Organizarea și desfășurarea seminarului doctoral „Data&Lunch"
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-0">
                  <a href="https://www.linkedin.com/in/ioana-birlan-86b30a203/" target="_blank" rel="noopener noreferrer" className="font-bold text-xl text-[#7209B7] dark:text-[#B5179E] hover:underline transition-all">Ioana Bîrlan</a>, <a href="https://www.linkedin.com/in/denisa-tr%C4%83%C8%99can-455583234/" target="_blank" rel="noopener noreferrer" className="font-bold text-xl text-[#7209B7] dark:text-[#B5179E] hover:underline transition-all">Denisa Trascan</a>, <a href="https://www.linkedin.com/in/camelia-dan-589244245/" target="_blank" rel="noopener noreferrer" className="font-bold text-xl text-[#7209B7] dark:text-[#B5179E] hover:underline transition-all">Camelia Dan</a> – studente doctorande Școala Doctorală Cibernetică și Statistică Economică: contribuie la organizarea și desfășurarea seminarului doctoral <a href="https://csie.ase.ro/data-lunch-seria-2-unde-ideile-devin-cunoastere/" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#7209B7] dark:text-[#B5179E] hover:underline transition-all">„Data&Lunch"</a>.
                </p>
              </div>
            </div>

            {/* Comunicare și promovare pe social media */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border-2 border-[#4CC9F0] dark:border-[#4361EE]">
              <div className="prose prose-lg max-w-none dark:prose-invert">
                <h3 className="text-2xl font-semibold text-[#4CC9F0] dark:text-[#4361EE] mb-4 mt-0">
                  Comunicare și promovare pe platforme de social media
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-0">
                  <a href="https://www.linkedin.com/in/eduard-manta-755695117/" target="_blank" rel="noopener noreferrer" className="font-bold text-xl text-[#4CC9F0] dark:text-[#4361EE] hover:underline transition-all">Eduard Manta</a>, <a href="https://www.linkedin.com/in/ioana-birlan-86b30a203/" target="_blank" rel="noopener noreferrer" className="font-bold text-xl text-[#4CC9F0] dark:text-[#4361EE] hover:underline transition-all">Ioana Bîrlan</a>, <a href="https://www.linkedin.com/in/maria-bianca-bolboa%C8%99%C4%83-389b95290/" target="_blank" rel="noopener noreferrer" className="font-bold text-xl text-[#4CC9F0] dark:text-[#4361EE] hover:underline transition-all">Maria Bolboașă</a>, <a href="https://www.linkedin.com/in/camelia-dan-589244245/" target="_blank" rel="noopener noreferrer" className="font-bold text-xl text-[#4CC9F0] dark:text-[#4361EE] hover:underline transition-all">Camelia Dan</a> – studenți doctoranzi Școala Doctorală Cibernetică și Statistică Economică: contribuie la crearea de conținut și administrarea paginilor de social media ale departamentului.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
      <Footer />
    </div>
  );
}