import { motion } from 'motion/react';
import { Microscope, Newspaper, BookOpen, Users, ExternalLink } from 'lucide-react';

export function Cercetare() {
  const activities = [
    {
      title: 'Conferința Internațională de Statistică Aplicată (ICAS)',
      description: 'Conferința Internațională de Statistică Aplicată (ICAS) este o manifestare științifică anuală organizată de Departamentul de Statistică și Econometrie, fiind la a XVIII-a ediție în anul 2025. Scopul principal al conferinței este de a oferi o oportunitate cadrelor universitare, cercetătorilor, doctoranzilor și profesioniștilor din mediul de afaceri de a se întâlni și de a-și prezenta rezultatele cercetării pe teme legate de analiză cantitativă și statistică aplicată.',
      image: '/assets/images/research/conference-icas.jpg',
      link: 'https://simpstat.ase.ro/',
      icon: Newspaper,
      gradient: 'from-[#4361EE] to-[#4895EF]'
    },
    {
      title: 'Journal of Social and Economic Statistics (JSES)',
      description: 'Journal of Social and Economic Statistics (JSES) este o revistă electronică cu acces liber care își propune să publice lucrări originale care aduc contribuții interesante și inedite la teoria statistică și la aplicațiile acesteia la problemele din viața reală. JSES este o publicație a Departamentului de Statistică și Econometrică al Academiei de Studii Economice din București. Revista este publicată de două ori pe an (numerele de vară și de iarnă). Jurnalul este indexat în următoarele baze de date: EBSCO, RePEc și ERIHPLUS.',
      image: '/assets/images/research/journal-jses.jpg',
      link: 'https://reference-global.com/journal/JSES',
      icon: BookOpen,
      gradient: 'from-[#4895EF] to-[#4CC9F0]'
    },
    {
      title: 'Centrul de Sondaje și Anchete',
      description: 'Centrul are ca principal obiectiv de activitate cercetarea ştiințifică fundamentală şi aplicativă în domeniul statisticii şi econometriei, propunându-şi să dezvolte cercetări interdisciplinare în domeniul economic şi social bazate pe folosirea metodelor şi modelelor statistico-econometrice. Centrul desfăşoara următoarele activități: studii şi cercetare fundamentală, cercetare aplicativă, prestări servicii, formare continuă, instruire şi perfecționare, consultanță, informare – documentare – diseminare în domeniul statisticii şi econometriei şi în domenii conexe. Începând cu anul 2004 Centrul de Cercetare Sondaje şi Anchete a desfăşurat peste 40 de studii şi cercetări pentru beneficiari externi, a derulat 28 de contracte de cercetare câştigate prin competiție națională şi 9 contracte de cercetare în parteneriat cu mediul de afaceri.',
      image: '/assets/images/research/survey-center.jpg',
      link: '#',
      icon: Users,
      gradient: 'from-[#4CC9F0] to-[#3F37C9]'
    }
  ];

  return (
    <section id="cercetare" className="pt-6 pb-24 bg-white dark:bg-gray-900" style={{ scrollMarginTop: 'calc(20vh - 3.5cm)' }}>
      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#7209B7] to-[#4361EE] text-white px-4 py-2 rounded-full mb-4">
            <Microscope className="w-4 h-4" />
            <span className="text-sm">CERCETARE</span>
          </div>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Departamentul nostru este activ în cercetarea științifică prin conferințe internaționale, publicații de prestigiu și proiecte inovatoare în statistică și econometrie.
          </p>
        </motion.div>

        {/* Main Research Activities - 3 Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {activities.map((activity, index) => {
            const Icon = activity.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-[#4CC9F0]/20 dark:border-gray-700"
                style={{ scrollMarginTop: 'calc(20vh - 3.5cm)' }}
              >
                {/* Header with Icon */}
                <div className={`p-6 bg-gradient-to-r ${activity.gradient}`}>
                  <div className="flex items-center gap-3 text-white">
                    <Icon className="w-8 h-8" />
                    <h3 className="text-xl font-bold">
                      {activity.title}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-gray-600 dark:text-gray-100 mb-6 line-clamp-4">
                    {activity.description}
                  </p>
                  
                  <a
                    href={activity.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#4361EE] dark:text-[#4CC9F0] hover:text-[#7209B7] dark:hover:text-[#72EFDD] transition-colors group/link"
                  >
                    <span>Află mai multe</span>
                    <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
