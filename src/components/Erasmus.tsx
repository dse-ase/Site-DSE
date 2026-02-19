import { motion } from 'motion/react';
import { Plane, Globe, Users, BookOpen } from 'lucide-react';

export function Erasmus() {
  const universities = [
    {
      name: 'Tilburg University',
      country: 'Olanda',
      program: 'Statistics & Data Science',
      image: '/assets/images/erasmus/netherlands.jpg'
    },
    {
      name: 'Ludwig Maximilian University',
      country: 'Germania',
      program: 'Econometrics & Quantitative Methods',
      image: '/assets/images/erasmus/germany.jpg'
    },
    {
      name: 'Lund University',
      country: 'Suedia',
      program: 'Mathematical Statistics',
      image: '/assets/images/erasmus/sweden.jpg'
    },
    {
      name: 'University of Barcelona',
      country: 'Spania',
      program: 'Applied Statistics',
      image: '/assets/images/erasmus/spain.jpg'
    },
    {
      name: 'Vienna University of Economics',
      country: 'Austria',
      program: 'Business Analytics',
      image: '/assets/images/erasmus/austria.jpg'
    },
    {
      name: 'University of Copenhagen',
      country: 'Danemarca',
      program: 'Biostatistics',
      image: '/assets/images/erasmus/denmark.jpg'
    }
  ];

  return (
    <section id="erasmus" className="py-24 bg-gradient-to-br from-[#7209B7]/5 via-white to-[#4CC9F0]/5">
      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#7209B7] to-[#4361EE] text-white px-4 py-2 rounded-full mb-4">
            <Plane className="w-4 h-4" />
            <span className="text-sm">Erasmus+</span>
          </div>
          <h2 className="text-[#3A0CA3] mb-4">Mobilități Erasmus+</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Studiază în străinătate și dezvoltă-ți perspectiva internațională! DSE are parteneriate cu peste 30 de universități de top din Europa.
          </p>
        </motion.div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-4 gap-6 mb-16"
        >
          <div className="bg-gradient-to-br from-[#7209B7] to-[#4361EE] rounded-2xl p-8 text-white text-center">
            <Globe className="w-12 h-12 mx-auto mb-4" />
            <h4 className="mb-2">30+</h4>
            <p className="text-sm">Universități partenere</p>
          </div>
          <div className="bg-gradient-to-br from-[#4361EE] to-[#4895EF] rounded-2xl p-8 text-white text-center">
            <Users className="w-12 h-12 mx-auto mb-4" />
            <h4 className="mb-2">200+</h4>
            <p className="text-sm">Studenți în mobilitate anual</p>
          </div>
          <div className="bg-gradient-to-br from-[#4895EF] to-[#4CC9F0] rounded-2xl p-8 text-white text-center">
            <BookOpen className="w-12 h-12 mx-auto mb-4" />
            <h4 className="mb-2">100%</h4>
            <p className="text-sm">Credite recunoscute</p>
          </div>
          <div className="bg-gradient-to-br from-[#4CC9F0] to-[#7209B7] rounded-2xl p-8 text-white text-center">
            <Plane className="w-12 h-12 mx-auto mb-4" />
            <h4 className="mb-2">€500+</h4>
            <p className="text-sm">Bursa lunară</p>
          </div>
        </motion.div>

        {/* Partner Universities */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-[#3A0CA3] text-center mb-12"
          >
            Universități partenere
          </motion.h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {universities.map((uni, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-[#4CC9F0]/20"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={uni.image}
                    alt={uni.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#3A0CA3]/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="text-white text-sm mb-1">{uni.country}</div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h4 className="text-[#3A0CA3] mb-3">{uni.name}</h4>
                  <div className="flex items-start gap-2 text-gray-600">
                    <BookOpen className="w-4 h-4 mt-1 flex-shrink-0 text-[#4361EE]" />
                    <p className="text-sm">{uni.program}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Application Process */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-r from-[#7209B7] to-[#4361EE] rounded-3xl p-12 text-white"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="mb-6">Cum aplici pentru Erasmus+?</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-white/20 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="mb-1">Verifică eligibilitatea</h4>
                    <p className="text-sm text-white/80">Trebuie să fii student activ la DSE cu medie minimă 8.00</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-white/20 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="mb-1">Alege destinația</h4>
                    <p className="text-sm text-white/80">Consultă lista de universități partenere și programele oferite</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-white/20 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="mb-1">Depune aplicația</h4>
                    <p className="text-sm text-white/80">Completează formularul online și anexează documentele cerute</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-white/20 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h4 className="mb-1">Pregătește-te pentru plecare</h4>
                    <p className="text-sm text-white/80">Participă la sesiunea de orientare și pregătește documentele necesare</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h4 className="mb-6">Calendar Erasmus+ 2025-2026</h4>
              <div className="space-y-4">
                <div className="border-l-4 border-[#4CC9F0] pl-4">
                  <div className="mb-1">Ianuarie - Februarie 2025</div>
                  <p className="text-sm text-white/80">Depunere aplicații pentru semestrul de toamnă</p>
                </div>
                <div className="border-l-4 border-[#4CC9F0] pl-4">
                  <div className="mb-1">Martie 2025</div>
                  <p className="text-sm text-white/80">Anunțarea rezultatelor selecției</p>
                </div>
                <div className="border-l-4 border-[#4CC9F0] pl-4">
                  <div className="mb-1">Septembrie 2025</div>
                  <p className="text-sm text-white/80">Plecare pentru mobilități de toamnă</p>
                </div>
                <div className="border-l-4 border-[#4CC9F0] pl-4">
                  <div className="mb-1">Octombrie 2025</div>
                  <p className="text-sm text-white/80">Depunere aplicații pentru semestrul de primăvară</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 text-center">
            <a
              href="mailto:erasmus@ase.ro"
              className="inline-block bg-white text-[#4361EE] px-8 py-4 rounded-full hover:bg-[#4CC9F0] hover:text-white transition-all duration-300"
            >
              Află mai multe despre Erasmus+
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}