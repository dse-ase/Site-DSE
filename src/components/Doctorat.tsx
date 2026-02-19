import { motion } from 'motion/react';
import { GraduationCap, BookOpen, Award, Search } from 'lucide-react';

export function Doctorat() {
  return (
    <section id="doctorat" className="bg-white dark:bg-gray-900 min-h-screen">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 pt-4 pb-16">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#7209B7] to-[#4361EE] text-white px-4 py-2 rounded-full mb-4">
            <GraduationCap className="w-4 h-4" />
            <span className="text-sm">Studii Doctorale</span>
          </div>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Devino parte din elita cercetătorilor în statistică și econometrie. Contribuie la avansarea științei prin cercetare inovatoare și rigoroasă.
          </p>
        </motion.div>

        {/* Main Info */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gradient-to-r from-[#7209B7] to-[#4361EE] rounded-3xl p-12 text-white mb-16 shadow-2xl"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="mb-6">Program Doctoral în Statistică și Econometrie</h3>
              <p className="text-lg mb-6">
                Programul nostru doctoral te pregătește să devii un cercetător independent, capabil să contribui la frontiera cunoașterii în statistică și econometrie.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#4CC9F0] rounded-full flex-shrink-0"></div>
                  <span>Durată: 3 ani (full-time) sau 4 ani (part-time)</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#4CC9F0] rounded-full flex-shrink-0"></div>
                  <span>Burse de cercetare disponibile</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#4CC9F0] rounded-full flex-shrink-0"></div>
                  <span>Colaborări internaționale cu universități de top</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#4CC9F0] rounded-full flex-shrink-0"></div>
                  <span>Publicații în reviste de prestigiu (ISI, Scopus)</span>
                </li>
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20">
                <Search className="w-8 h-8 mx-auto mb-3" />
                <div className="text-3xl mb-2">50+</div>
                <p className="text-sm">Proiecte de cercetare active</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20">
                <Award className="w-8 h-8 mx-auto mb-3" />
                <div className="text-3xl mb-2">100+</div>
                <p className="text-sm">Publicații ISI anual</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20">
                <BookOpen className="w-8 h-8 mx-auto mb-3" />
                <div className="text-3xl mb-2">20+</div>
                <p className="text-sm">Conducători doctorali</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20">
                <GraduationCap className="w-8 h-8 mx-auto mb-3" />
                <div className="text-3xl mb-2">150+</div>
                <p className="text-sm">Doctori formați</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Directorul Școlii Doctorale */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            <GraduationCap className="w-6 h-6 text-[#7209B7]" />
            <h3 className="text-[#3A0CA3] dark:text-white">Directorul Școlii Doctorale</h3>
          </div>
          
          <div className="bg-gradient-to-br from-[#7209B7]/5 to-[#4361EE]/5 dark:from-[#7209B7]/20 dark:to-[#4361EE]/20 rounded-2xl shadow-lg border border-[#7209B7]/30 dark:border-gray-700 p-8">
            <div className="text-center mb-6">
              <h4 className="text-[#3A0CA3] dark:text-white mb-2">Prof. univ. dr. Emilia ȚIȚAN</h4>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border border-[#4CC9F0]/20 dark:border-gray-700">
                <h5 className="text-[#4361EE] dark:text-[#4CC9F0] mb-4">Program audiențe</h5>
                <div className="space-y-3 text-gray-600 dark:text-gray-300">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#7209B7] dark:bg-[#B5179E] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="text-[#3A0CA3] dark:text-white">ONLINE:</span>{' '}
                      <a 
                        href="mailto:emilia.titan@csie.ase.ro" 
                        className="text-[#4361EE] dark:text-[#4CC9F0] hover:text-[#7209B7] dark:hover:text-[#72EFDD] hover:underline transition-colors"
                      >
                        emilia.titan@csie.ase.ro
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#7209B7] dark:bg-[#B5179E] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Marți, ora 16.00, sala B706, cu anunț prin e-mail cu o zi înainte.</span>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border border-[#4CC9F0]/20 dark:border-gray-700">
                <h5 className="text-[#4361EE] dark:text-[#4CC9F0] mb-4">Contact</h5>
                <div className="space-y-3 text-gray-600 dark:text-gray-300">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#7209B7] dark:bg-[#B5179E] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="text-[#3A0CA3] dark:text-white">Email:</span>{' '}
                      <a 
                        href="mailto:emilia.titan@csie.ase.ro" 
                        className="text-[#4361EE] dark:text-[#4CC9F0] hover:text-[#7209B7] dark:hover:text-[#72EFDD] hover:underline transition-colors"
                      >
                        emilia.titan@csie.ase.ro
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#7209B7] dark:bg-[#B5179E] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="text-[#3A0CA3] dark:text-white">Tel:</span>{' '}
                      <a 
                        href="tel:+40213191901" 
                        className="text-[#4361EE] dark:text-[#4CC9F0] hover:text-[#7209B7] dark:hover:text-[#72EFDD] hover:underline transition-colors"
                      >
                        +4 021 319 19 01, int. 324
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <a
            href="https://doctorat.ase.ro/programe/cibernetica-si-statistica-economica/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-[#7209B7] to-[#4361EE] text-white px-8 py-4 rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300 font-semibold"
          >
            Aplică acum pentru doctorat
          </a>
        </motion.div>

      </div>
    </section>
  );
}