import { motion } from 'motion/react';
import { Briefcase, TrendingUp, Users, Award, Building2, Code } from 'lucide-react';

export function Cariera() {
  const careerPaths = [
    {
      icon: TrendingUp,
      title: 'Data Analyst',
      description: 'Analizează date complexe pentru a identifica tendințe și a oferi insights valoroase pentru decizii de business.',
      skills: ['Excel', 'SQL', 'Power BI', 'Tableau'],
      color: 'from-[#4361EE] to-[#4895EF]'
    },
    {
      icon: Code,
      title: 'Data Scientist',
      description: 'Dezvoltă modele predictive și algoritmi de machine learning pentru rezolvarea problemelor de business.',
      skills: ['Python', 'R', 'Machine Learning', 'Deep Learning'],
      color: 'from-[#7209B7] to-[#B5179E]'
    },
    {
      icon: Building2,
      title: 'Business Intelligence Analyst',
      description: 'Transformă datele în informații acționabile pentru îmbunătățirea performanței organizaționale.',
      skills: ['SAP', 'Oracle', 'Data Warehousing', 'ETL'],
      color: 'from-[#4895EF] to-[#4CC9F0]'
    },
    {
      icon: Award,
      title: 'Quantitative Analyst',
      description: 'Aplică metode statistice și matematice avansate în domeniul financiar și de investiții.',
      skills: ['Econometrie', 'Analiză de risc', 'Modelare financiară', 'Python'],
      color: 'from-[#560BAD] to-[#7209B7]'
    },
    {
      icon: Users,
      title: 'Market Research Analyst',
      description: 'Studiază condițiile pieței pentru a identifica oportunități de vânzare și poziționare strategică.',
      skills: ['SPSS', 'Cercetare calitativă', 'Sondaje', 'Analiză comportamentală'],
      color: 'from-[#F72585] to-[#B5179E]'
    },
    {
      icon: Briefcase,
      title: 'Consultant în Statistică',
      description: 'Oferă expertiza statistică pentru proiecte de cercetare, consultanță și analiză de date specializate.',
      skills: ['Statistică aplicată', 'Design experimental', 'Raportare', 'Comunicare'],
      color: 'from-[#3F37C9] to-[#4361EE]'
    }
  ];

  const companies = [
    { name: 'Google', sector: 'Technology' },
    { name: 'Amazon', sector: 'E-commerce' },
    { name: 'BCR', sector: 'Banking' },
    { name: 'ING', sector: 'Banking' },
    { name: 'Deloitte', sector: 'Consulting' },
    { name: 'PwC', sector: 'Consulting' },
    { name: 'Microsoft', sector: 'Technology' },
    { name: 'Oracle', sector: 'Technology' }
  ];

  return (
    <section id="cariera" className="pt-6 pb-24 bg-gradient-to-br from-gray-50 via-white to-[#4CC9F0]/5 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800" style={{ scrollMarginTop: 'calc(20vh - 3.5cm)' }}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#7209B7] to-[#4361EE] text-white px-4 py-2 rounded-full mb-4">
            <Briefcase className="w-4 h-4" />
            <span className="text-sm">Oportunități de carieră</span>
          </div>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Absolvenții noștri sunt foarte căutați pe piața muncii, având oportunități excelente în diverse domenii precum IT, banking, consulting și cercetare.
          </p>
        </motion.div>

        {/* Career Paths Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {careerPaths.map((career, index) => (
            <motion.div
              key={career.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative h-full bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-[#4361EE]/30 dark:hover:border-[#4361EE]/50">
                {/* Decorative gradient border */}
                <div className={`absolute inset-0 bg-gradient-to-r ${career.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>
                
                {/* Icon */}
                <div className={`relative inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-r ${career.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <career.icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="text-xl mb-3 text-gray-900 dark:text-white group-hover:text-[#4361EE] dark:group-hover:text-[#4CC9F0] transition-colors">
                    {career.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {career.description}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {career.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-xs bg-gradient-to-r from-gray-100 to-gray-50 dark:from-gray-700 dark:to-gray-600 text-gray-700 dark:text-gray-300 rounded-full border border-gray-200 dark:border-gray-600"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Internships Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white dark:bg-gray-800 rounded-3xl p-12 shadow-xl border border-gray-100 dark:border-gray-700"
        >
          {/* Stagiul de Practică pentru Licență */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-8 mb-8 border border-[#4361EE]/20 dark:border-gray-700 shadow-lg"
          >
            <h4 className="text-2xl mb-6 text-[#3A0CA3] dark:text-[#4CC9F0] font-semibold">
              Stagiul de Practică pentru Studiile de Licență
            </h4>
            <ul className="space-y-3 text-gray-600 dark:text-gray-300 mb-6">
              <li className="flex items-start gap-2">
                <span className="text-[#4361EE] mt-1">•</span>
                <span>Disciplină obligatorie în anul II de licență</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#4361EE] mt-1">•</span>
                <span>Durata minimă: 112 ore</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#4361EE] mt-1">•</span>
                <span>Se desfășoară în organizații din țară sau străinătate, publice sau private</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#4361EE] mt-1">•</span>
                <span>Activitățile trebuie să fie relevante pentru domeniul de specializare</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#4361EE] mt-1">•</span>
                <span>Practica poate fi realizată și în cadrul proiectelor cu finanțare europeană</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#4361EE] mt-1">•</span>
                <span>Convenția-cadru este necesară înainte de începerea stagiului</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#4361EE] mt-1">•</span>
                <span>Practica poate fi echivalată (angajare, internship, competiții studențești), în condițiile metodologiei</span>
              </li>
            </ul>
            <div className="bg-gradient-to-r from-[#4361EE]/5 to-[#4CC9F0]/5 dark:from-[#4361EE]/20 dark:to-[#4CC9F0]/20 rounded-lg p-4 border-l-4 border-[#4361EE]">
              <p className="text-gray-700 dark:text-gray-300">
                Pentru informații detaliate (proceduri, documente, echivalare, calendar, firme partenere), accesați pagina: 
                <a 
                  href="https://csie.ase.ro/student-csie/practica/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#4361EE] hover:text-[#7209B7] dark:text-[#4CC9F0] dark:hover:text-[#7209B7] transition-colors ml-1 underline"
                >
                  https://csie.ase.ro/student-csie/practica/
                </a>
              </p>
            </div>
          </motion.div>

          {/* Stagiul de Practică pentru Master */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-8 mb-10 border border-[#7209B7]/20 dark:border-gray-700 shadow-lg"
          >
            <h4 className="text-2xl mb-6 text-[#3A0CA3] dark:text-[#4CC9F0] font-semibold">
              Stagiul de Practică pentru Studiile de Master
            </h4>
            <ul className="space-y-3 text-gray-600 dark:text-gray-300 mb-6">
              <li className="flex items-start gap-2">
                <span className="text-[#7209B7] mt-1">•</span>
                <span>Disciplină obligatorie în anul II de masterat</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#7209B7] mt-1">•</span>
                <span>Durata minimă a stagiului: 280 de ore</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#7209B7] mt-1">•</span>
                <span>Practica se poate desfășura în organizații din țară sau din străinătate, publice sau private</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#7209B7] mt-1">•</span>
                <span>Activitățile trebuie să fie relevante pentru domeniul de specializare</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#7209B7] mt-1">•</span>
                <span>Practica poate fi realizată și în cadrul proiectelor cu finanțare europeană în care ASE este beneficiar sau partener</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#7209B7] mt-1">•</span>
                <span>Oportunitățile de practică/internship sunt disponibile în secțiunea dedicată de pe site</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#7209B7] mt-1">•</span>
                <span>Înainte de începerea practicii, este obligatorie încheierea Convenției-cadru de practică</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#7209B7] mt-1">•</span>
                <span>Practica poate fi echivalată (angajare, internship, competiții studențești), dacă durata activităților este de minimum 280 de ore</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#7209B7] mt-1">•</span>
                <span>Pentru echivalare este necesară încărcarea documentelor pe platforma de practică și transmiterea adeverinței de la angajator</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#7209B7] mt-1">•</span>
                <span>Pentru studenții ale căror activități se încadrează în coduri COR relevante pentru specializare, nu este necesară confirmare suplimentară pentru recunoașterea practicii</span>
              </li>
            </ul>
            <div className="bg-gradient-to-r from-[#7209B7]/5 to-[#4361EE]/5 dark:from-[#7209B7]/20 dark:to-[#4361EE]/20 rounded-lg p-4 border-l-4 border-[#7209B7]">
              <p className="text-gray-700 dark:text-gray-300">
                👉 Pentru informații detaliate (proceduri, documente necesare, calendar, echivalare, coduri COR, firme partenere și pașii de înscriere la stagiile disponibile), accesați pagina: 
                <a 
                  href="https://csie.ase.ro/student-csie/stagiul-de-practica-pentru-studiile-de-masterat-2/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#7209B7] hover:text-[#4361EE] dark:text-[#B5179E] dark:hover:text-[#4361EE] transition-colors ml-1 underline"
                >
                  https://csie.ase.ro/student-csie/stagiul-de-practica-pentru-studiile-de-masterat-2/
                </a>
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}