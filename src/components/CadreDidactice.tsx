import { motion } from 'motion/react';
import { GraduationCap, BookOpen, Mail, Users, Crown, FileText, ExternalLink, Home } from 'lucide-react';

export function CadreDidactice() {
  const conducere = {
    name: 'MARIN Erika',
    initials: 'ME',
    role: 'Director Departament',
    email: 'erika.marin@csie.ase.ro',
    hasPage: true,
    cvUrl: 'src/assets/cv/Prof. Univ. Dr. Marin Erika CV.pdf'
  };

const consiliu = [
    {
      name: 'APOSTU Simona Andreea',
      initials: 'AS',
      role: 'Membru Consiliu',
      position: 'Conferențiar Universitar',
      email: 'simona.apostu@csie.ase.ro',
      hasPage: true,
      cvUrl: 'src/assets/cv/Lect. Univ. Dr. Apostu Simona Andreea CV.pdf'
    },
    {
      name: 'BOBOC Cristina Rodica',
      initials: 'BC',
      role: 'Membru Consiliu',
      position: 'Profesor Universitar',
      email: 'cristina.boboc@csie.ase.ro',
      hasPage: true,
      cvUrl: 'src/assets/cv/Prof. Univ. Dr. Cristina Boboc CV.pdf'
    },
    {
      name: 'MIHAESCU Constanța',
      initials: 'MC',
      role: 'Membru Consiliu',
      position: 'Profesor Universitar',
      email: 'constanta.mihaescu@csie.ase.ro',
      hasPage: true,
      cvUrl: 'src/assets/cv/Prof. univ. dr. Constanța Mihăescu CV.pdf'
    },
    {
      name: 'ROMAN Monica Mihaela',
      initials: 'RM',
      role: 'Membru Consiliu',
      position: 'Profesor Universitar',
      email: 'monica.roman@csie.ase.ro',
      hasPage: true,
      cvUrl: 'src/assets/cv/Prof. univ. dr. Monica Roman CV.pdf'
    }
  ];

  const cadre = [
    {
      name: 'ALEXANDER Nicholas Victor Julius',
      initials: 'AN',
      position: 'Asistent Universitar',
      email: 'nicholas.alexander@csie.ase.ro',
      cvUrl: 'src/assets/cv/Asist. Univ. Dr. Alexander Nicholas Victor Julius CV.pdf'
    },
    {
      name: 'ANDREI Tudorel',
      initials: 'AT',
      position: 'Profesor Universitar',
      email: 'tudorel.andrei@csie.ase.ro',
      hasPage: true,
      cvUrl: 'src/assets/cv/Prof. Univ. Dr. Andrei Tudorel CV.pdf'
    },
    {
      name: 'BĂRBULESCU Răzvan',
      initials: 'BR',
      position: 'Lector Universitar',
      email: 'razvan.barbulescu@csie.ase.ro',
      hasPage: true,
      cvUrl: 'src/assets/cv/Lect univ dr Razvan Barbulescu CV.pdf'
    },
    {
      name: 'BEGU Andreea Oana',
      initials: 'BA',
      position: 'Asistent Universitar',
      email: 'andreea.begu@csie.ase.ro',
      hasPage: true,
      cvUrl: 'src/assets/cv/Asis. Univ. Dr. Begu Andreea-Oana CV.pdf'
    },
    {
      name: 'CIMPOERU Smaranda',
      initials: 'CS',
      position: 'Conferențiar Universitar',
      email: 'smaranda.cimpoeru@csie.ase.ro',
      hasPage: true,
      cvUrl: 'src/assets/cv/Conf. univ. dr. Smaranda Cimpoeru CV.pdf'
    },
    {
      name: 'COSTEA Adrian',
      initials: 'CA',
      position: 'Profesor Universitar',
      email: 'adrian.costea@csie.ase.ro',
      hasPage: true,
      cvUrl: 'src/assets/cv/Prof. univ. dr. Adrian Costea CV.pdf'
    },
    {
      name: 'COVRIG Mihaela',
      initials: 'CM',
      position: 'Conferențiar Universitar',
      email: 'mihaela.covrig@csie.ase.ro',
      hasPage: true,
      cvUrl: 'src/assets/cv/Conf. univ. dr. Mihaela Covrig CV.pdf'
    },
    {
      name: 'CRISTACHE Silvia Elena',
      initials: 'CS',
      position: 'Profesor Universitar',
      email: 'silvia.cristache@csie.ase.ro',
      hasPage: true,
      cvUrl: 'src/assets/cv/Prof. Univ. Dr. Cristache Silvia-Elena CV.pdf'
    },
    {
      name: 'DANCIU Aniela Raluca',
      initials: 'DA',
      position: 'Conferențiar Universitar',
      email: 'aniela.danciu@csie.ase.ro',
      hasPage: true,
      cvUrl: 'src/assets/cv/Conf. Univ. dr. Danciu Aniela CV.pdf'
    },
    {
      name: 'DAVIDESCU Adriana Anamaria',
      initials: 'DA',
      position: 'Profesor Universitar',
      email: 'adriana.davidescu@csie.ase.ro',
      hasPage: true,
      cvUrl: 'src/assets/cv/Prof. univ. dr. Adriana Anamaria Davidescu CV.pdf'
    },
    {
      name: 'DIMIAN Gina Cristina',
      initials: 'DG',
      position: 'Profesor Universitar',
      email: 'gina.dimian@csie.ase.ro',
      hasPage: true,
      cvUrl: 'src/assets/cv/Prof. Univ. Dr. Dimian Gina Cristina CV.pdf'
    },
    {
      name: 'DRĂGAN Irina Maria',
      initials: 'DI',
      position: 'Conferențiar Universitar',
      email: 'irina.dragan@csie.ase.ro',
      hasPage: true,
      cvUrl: 'src/assets/cv/Conf. Univ. Dr. Drăgan Irina-Maria CV.pdf'
    },
    {
      name: 'GHIȚĂ Simona Ioana',
      initials: 'GS',
      position: 'Profesor Universitar',
      email: 'ioana.ghita@csie.ase.ro',
      hasPage: true,
      cvUrl: 'src/assets/cv/Prof. Univ. Dr. Ghiță Simona Ioana CV.pdf'
    },
    {
      name: 'GOGONEA Rodica Manuela',
      initials: 'GR',
      position: 'Profesor Universitar',
      email: 'manuela.gogonea@csie.ase.ro',
      hasPage: true,
      cvUrl: 'src/assets/cv/Conf. Univ. Dr. Gogonea Rodica-Manuela CV.pdf'
    },
    {
      name: 'GOGU Emilia',
      initials: 'GE',
      position: 'Conferențiar Universitar',
      email: 'emilia.gogu@csie.ase.ro',
      hasPage: true,
      cvUrl: 'src/assets/cv/Conf. Univ. Dr. Gogu Emilia CV.pdf'
    },
    {
      name: 'GRĂDINARU Giani Ionel',
      initials: 'GG',
      position: 'Profesor Universitar',
      email: 'giani.gradinaru@csie.ase.ro',
      hasPage: true,
      cvUrl: 'src/assets/cv/Prof. Univ. Dr. Grădinaru Giani Ionel CV.pdf'
    },
    {
      name: 'HERȚELIU Claudiu',
      initials: 'HC',
      position: 'Profesor Universitar',
      email: 'claudiu.herteliu@csie.ase.ro',
      hasPage: true,
      cvUrl: 'src/assets/cv/Prof. Univ. Dr. Herțeliu Claudiu CV.pdf'
    },
    {
      name: 'ILEANU Bogdan Vasile',
      initials: 'IB',
      position: 'Conferențiar Universitar',
      email: 'bogdan.ileanu@csie.ase.ro',
      cvUrl: 'src/assets/cv/Lect. Univ. Dr. Ileanu Bogdan Vasile CV.pdf'
    },
    {
      name: 'MANEA Daniela Ioana',
      initials: 'MD',
      position: 'Profesor Universitar',
      email: 'daniela.manea@csie.ase.ro',
      hasPage: true,
      cvUrl: 'src/assets/cv/Prof. univ. dr. Daniela Manea CV.pdf'
    },
    {
      name: 'MANTA Eduard Mihai',
      initials: 'ME',
      position: 'Asistent Universitar',
      email: 'eduard.manta@csie.ase.ro',
      cvUrl: 'src/assets/cv/Asist. Univ. Dr. Manta Eduard Mihai CV.pdf'
    },
    {
      name: 'MARCU Ana-Maria',
      initials: 'MA',
      position: 'Asistent Cercetare Științifică',
      email: 'ana-maria.marcu@csie.ase.ro',
      hasPage: true,
      cvUrl: 'src/assets/cv/Asist. Cerc. Dr. Marcu Ana-Maria CV.pdf'
    },
    {
      name: 'MARICUȚ Alin Cristian',
      initials: 'MA',
      position: 'Asistent Universitar',
      email: 'alin.maricut@csie.ase.ro',
      hasPage: true,
      cvUrl: 'src/assets/cv/Asist. Univ. Dr. Maricut Alin Cristian CV.pdf'
    },
    {
      name: 'MAZURENCU-MARINESCU-PELE Miruna',
      initials: 'MM',
      position: 'Profesor Universitar',
      email: 'marinescu.mazurencu@csie.ase.ro',
      hasPage: true,
      cvUrl: 'src/assets/cv/Prof. univ. dr. Miruna Mazurencu CV.pdf'
    },
    {
      name: 'MIHAI Mihaela',
      initials: 'MM',
      position: 'Conferențiar Universitar',
      email: 'mihaela.mihai@csie.ase.ro',
      hasPage: true,
      cvUrl: 'src/assets/cv/Conf. Univ. Dr. Mihai Mihaela CV.pdf'
    },
    {
      name: 'MIRICĂ Andreea',
      initials: 'MA',
      position: 'Lector Universitar',
      email: 'andreea.mirica@csie.ase.ro',
      hasPage: true,
      cvUrl: 'src/assets/cv/Lect. Univ. dr. Mirică Andreea CV.pdf'
    },
    {
      name: 'NICULESCU ARON Ileana Gabriela',
      initials: 'NI',
      position: 'Profesor Universitar',
      email: 'gabriela.niculescu@csie.ase.ro',
      hasPage: true,
      cvUrl: 'src/assets/cv/Prof. univ. dr. Ileana Gabriela Niculescu-Aron CV.pdf'
    },
    {
      name: 'OȚOIU Adrian',
      initials: 'OA',
      position: 'Lector Universitar',
      email: 'adrian.otoiu@csie.ase.ro',
      hasPage: true,
      cvUrl: 'src/assets/cv/Lect. Univ. Dr. Otoiu Adrian CV.pdf'
    },
    {
      name: 'PÂRVAN Andrei Teofil',
      initials: 'PA',
      position: 'Asistent Universitar',
      email: 'andrei.parvan@csie.ase.ro',
      cvUrl: 'src/assets/cv/Asist. Univ. Dr. Parvan Andrei Teofil CV.pdf'
    },
    {
      name: 'PELE Daniel Traian',
      initials: 'PD',
      position: 'Profesor Universitar',
      email: 'dan.pele@csie.ase.ro',
      hasPage: true,
      cvUrl: 'src/assets/cv/Prof. univ. dr. Daniel Traian Pele CV.pdf'
    },
    {
      name: 'PETCU Roxana Ionela',
      initials: 'PR',
      position: 'Lector Universitar',
      email: 'roxana.petcu@csie.ase.ro',
      hasPage: true,
      cvUrl: 'src/assets/cv/Lect. Univ. Dr. Petcu Ionela-Roxana CV.pdf'
    },
    {
      name: 'PRADA Elena Maria',
      initials: 'PE',
      position: 'Lector Universitar',
      email: 'elena.prada@csie.ase.ro',
      hasPage: true,
      cvUrl: 'src/assets/cv/Lect. Univ. Dr. Prada Elena-Maria CV.pdf'
    },
    {
      name: 'SACALĂ Mihai Dumitru',
      initials: 'SM',
      position: 'Asistent Universitar',
      email: 'mihai.sacala@csie.ase.ro',
      hasPage: true,
      cvUrl: 'src/assets/cv/Prof. Univ. Dr. Sacală Mihai CV.pdf'
    },
    {
      name: 'ȘERBAN Daniela',
      initials: 'ȘD',
      position: 'Profesor Universitar',
      email: 'daniela.serban@csie.ase.ro',
      hasPage: true,
      cvUrl: 'src/assets/cv/Prof. Univ. Dr. Șerban Daniela CV.pdf'
    },
    {
      name: 'STRAT Vasile Alexandru',
      initials: 'SV',
      position: 'Profesor Universitar',
      email: 'vasile.strat@csie.ase.ro',
      cvUrl: 'src/assets/cv/Prof. Univ. Dr. Strat Vasile Alexandru CV.pdf'
    },
    {
      name: 'ȚIȚAN Emilia',
      initials: 'ȚE',
      position: 'Profesor Universitar',
      email: 'emilia.titan@csie.ase.ro',
      hasPage: true,
      cvUrl: 'src/assets/cv/Prof. univ. dr. Emilia Țițan CV.pdf'
    },
    {
      name: 'ȚOȚAN Lavinia Stefania',
      initials: 'ȚL',
      position: 'Lector Universitar',
      email: 'lavinia.totan@csie.ase.ro',
      hasPage: true,
      cvUrl: 'src/assets/cv/Lect. Univ. Dr. Totan Lavinia-Ștefania CV.pdf'
    },
    {
      name: 'VASILE Răzvan',
      initials: 'VR',
      position: 'Asistent Universitar',
      email: 'razvan.vasile@csie.ase.ro',
      hasPage: true,
      cvUrl: 'src/assets/cv/Asis. Univ. Dr. Vasile Razvan CV.pdf'
    },
    {
      name: 'VASILESCU Maria Denisa',
      initials: 'VM',
      position: 'Conferențiar Universitar',
      email: 'maria.vasilescu@csie.ase.ro',
      hasPage: true,
      cvUrl: 'src/assets/cv/Conf. Univ. Dr. Vasilescu Maria Denisa CV.pdf'
    }
  ];
  
  const stats = [
    { number: '43', label: 'Cadre didactice' },
    { number: '5', label: 'Membri Consiliu' },
    { number: '100+', label: 'Publicații' },
    { number: '20+', label: 'Ani experiență medie' }
  ];

  const getInitialsColor = (initials: string) => {
    const colors = [
      'bg-gradient-to-br from-[#7209B7] to-[#4361EE]',
      'bg-gradient-to-br from-[#4361EE] to-[#4895EF]',
      'bg-gradient-to-br from-[#4895EF] to-[#4CC9F0]',
      'bg-gradient-to-br from-[#4CC9F0] to-[#7209B7]'
    ];
    return colors[initials.charCodeAt(0) % colors.length];
  };

  const nameToSlug = (name: string) => {
    // Găsim persoana în arrays și extragem slug din email
    // Email format: prenume.nume@csie.ase.ro → slug: prenume-nume
    
    // Caută în conducere
    if (conducere.name === name) {
      return conducere.email.split('@')[0].replace(/\./g, '-');
    }
    
    // Caută în consiliu
    const consiluMember = consiliu.find(m => m.name === name);
    if (consiluMember) {
      return consiluMember.email.split('@')[0].replace(/\./g, '-');
    }
    
    // Caută în cadre
    const cadreMember = cadre.find(m => m.name === name);
    if (cadreMember) {
      return cadreMember.email.split('@')[0].replace(/\./g, '-');
    }
    
    // Fallback: transformă manual
    const parts = name.split(' ');
    if (parts.length >= 2) {
      const lastName = parts[0];
      const firstName = parts[1];
      const reordered = `${firstName} ${lastName}`;
      return reordered.toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/ă/g, 'a')
        .replace(/â/g, 'a')
        .replace(/î/g, 'i')
        .replace(/ș/g, 's')
        .replace(/ț/g, 't')
        .replace(/[^a-z0-9-]/g, '');
    }
    return name.toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/ă/g, 'a')
      .replace(/â/g, 'a')
      .replace(/î/g, 'i')
      .replace(/ș/g, 's')
      .replace(/ț/g, 't')
      .replace(/[^a-z0-9-]/g, '');
  };

  const navigateToProfesor = (name: string) => {
    const slug = nameToSlug(name);
    window.location.hash = `#/profesor/${slug}`;
  };

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#7209B7] to-[#4361EE] text-white px-3 sm:px-4 py-2 rounded-full mb-6 sm:mb-8">
            <GraduationCap className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="text-xs sm:text-sm">ECHIPA NOASTRĂ</span>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl text-[#4361EE] mb-1 sm:mb-2">{stat.number}</div>
              <p className="text-xs sm:text-sm lg:text-base text-gray-600 dark:text-gray-300">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Conducere */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.15 }}
          className="mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-8">
            <Crown className="w-5 h-5 text-[#F59E0B]" />
            <h3 className="text-[#3A0CA3] dark:text-[#C77DFF] text-xl">Conducere</h3>
          </div>
          
          <div className={`max-w-2xl mx-auto rounded-2xl shadow-lg p-6 border hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-800 border-[#4CC9F0]/20 dark:border-gray-700`}>
            <div id={nameToSlug(conducere.name)} className="flex flex-col items-center text-center">
              <div className={`${getInitialsColor(conducere.initials)} rounded-full w-16 h-16 flex items-center justify-center text-white mb-4`}>
                <span className="text-xl">{conducere.initials}</span>
              </div>
              <h4 className="text-[#3A0CA3] dark:text-[#4CC9F0] mb-1">{conducere.name}</h4>
              <p className="text-[#F59E0B] text-sm mb-3">{conducere.role}</p>
              <div className="flex gap-2 justify-center">
                <button
                  onClick={() => navigateToProfesor(conducere.name)}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#7209B7] to-[#4361EE] text-white rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-200 text-sm"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Mai mult despre</span>
                </button>
                {conducere.cvUrl && (
                  <a
                    href={conducere.cvUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#10b981] to-[#059669] text-white rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-200 text-sm"
                  >
                    <FileText className="w-4 h-4" />
                    <span>CV</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Consiliul Departamentului */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-8">
            <Users className="w-6 h-6 text-[#4361EE]" />
            <h3 className="text-[#3A0CA3] dark:text-[#C77DFF]">Consiliul Departamentului</h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {consiliu.map((member, index) => (
              <motion.div
                key={index}
                id={nameToSlug(member.name)}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="rounded-2xl shadow-lg p-6 border hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-800 border-[#4CC9F0]/20 dark:border-gray-700"
              >
                <div className="flex flex-col items-center text-center">
                  <div className={`${getInitialsColor(member.initials)} rounded-full w-16 h-16 flex items-center justify-center text-white mb-4`}>
                    <span className="text-xl">{member.initials}</span>
                  </div>
                  <h4 className="text-[#3A0CA3] dark:text-[#4CC9F0] mb-1">{member.name}</h4>
                  <p className="text-[#4361EE] text-sm mb-1">{member.role}</p>
                  <p className="text-gray-600 dark:text-gray-400 text-xs mb-3">{member.position}</p>
                  <div className="flex flex-col gap-2 w-full">
                    <button
                      onClick={() => navigateToProfesor(member.name)}
                      className="inline-flex items-center justify-center gap-2 px-3 py-1.5 bg-gradient-to-r from-[#7209B7] to-[#4361EE] text-white rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-200 text-xs w-full"
                    >
                      <ExternalLink className="w-3 h-3" />
                      <span>Mai mult despre</span>
                    </button>
                    {member.cvUrl && (
                      <a
                        href={member.cvUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-3 py-1.5 bg-gradient-to-r from-[#10b981] to-[#059669] text-white rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-200 text-xs w-full"
                      >
                        <FileText className="w-3 h-3" />
                        <span>CV</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Toate Cadrele Didactice */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="flex items-center justify-center gap-2 mb-8">
            <BookOpen className="w-6 h-6 text-[#4361EE]" />
            <h3 className="text-[#3A0CA3] dark:text-[#C77DFF]">Toate Cadrele Didactice</h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cadre.map((member, index) => (
              <motion.div
                key={index}
                id={nameToSlug(member.name)}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.25, delay: index * 0.05 }}
                className="rounded-2xl shadow-lg p-6 border hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-800 border-[#4CC9F0]/20 dark:border-gray-700"
              >
                <div className="flex flex-col items-center text-center">
                  <div className={`${getInitialsColor(member.initials)} rounded-full w-16 h-16 flex items-center justify-center text-white mb-4`}>
                    <span className="text-xl">{member.initials}</span>
                  </div>
                  <h4 className="text-[#3A0CA3] dark:text-[#4CC9F0] mb-1">{member.name}</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-xs mb-3">{member.position}</p>
                  <div className="flex flex-col gap-2 w-full">
                    <button
                      onClick={() => navigateToProfesor(member.name)}
                      className="inline-flex items-center justify-center gap-2 px-3 py-1.5 bg-gradient-to-r from-[#7209B7] to-[#4361EE] text-white rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-200 text-xs w-full"
                    >
                      <ExternalLink className="w-3 h-3" />
                      <span>Mai mult despre</span>
                    </button>
                    {member.cvUrl && (
                      <a
                        href={member.cvUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-3 py-1.5 bg-gradient-to-r from-[#10b981] to-[#059669] text-white rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-200 text-xs w-full"
                      >
                        <FileText className="w-3 h-3" />
                        <span>CV</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}