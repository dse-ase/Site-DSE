import { useState, useEffect } from 'react';
import { SimpleHeader } from '../components/SimpleHeader';
import { Footer } from '../components/Footer';
import { motion } from 'motion/react';
import { Award, TrendingUp, BookOpen, Clock, Calendar } from 'lucide-react';

// Șefii Catedrelor
const sefiCatedre = [
  { perioada: '1951-1953', nume: 'Zoltan Csendeş', catedra: 'Statistică teoretică' },
  { perioada: '1951-1953', nume: 'Roman Moldovan', catedra: 'Statistică economică' },
  { perioada: '1951-1953', nume: 'Vasile Bratu', catedra: 'Statistica demografiei social-culturale' },
  { perioada: '1951-1953', nume: 'Gh. Fenyö', catedra: 'Statistică economică și Statistica desfacerii' },
  { perioada: '1953-1979', nume: 'Mircea Biji', catedra: 'Statistică teoretică și economică (Statistica Ramuri I+II)' },
  { perioada: '1979-1985', nume: 'Ion Capanu', catedra: 'Statistică teoretică și economică' },
  { perioada: '1985-1989', nume: 'Elena Maria Biji', catedra: 'Conducere planificată și Statistica economiei naționale' },
  { perioada: '1990-1999', nume: 'Tudor Baron', catedra: 'Statistică și Previziune Economică' },
  { perioada: '1993-2002', nume: 'Gheorghe Vasilescu', catedra: 'Analiza Statistică și Evaluare' },
  { perioada: '1999-2011', nume: 'Vergil Voineagu', catedra: 'Statistică și Previziune Economică' },
  { perioada: '2011-2012', nume: 'Constantin Mitruț', catedra: 'Statistică și Econometrie' },
  { perioada: '2012-2015', nume: 'Liviu Sebastian Begu', catedra: 'Statistică și Econometrie' },
  { perioada: '2015-2019', nume: 'Liviu Sebastian Begu', catedra: 'Statistică și Econometrie' },
  { perioada: '2019-prezent', nume: 'Erika Marin', catedra: 'Statistică și Econometrie' },
];

// Cronologia dezvoltării specializării
const cronologieDezvoltare = [
  { perioada: '1948-1949', facultate: 'Facultatea de Planificare și Administrație Economică', specializare: 'Statistică', durata: '3' },
  { perioada: '1949-1950', facultate: 'Facultatea de Planificare', specializare: 'Statistică', durata: '3' },
  { perioada: '1951-1957', facultate: 'Facultatea de Statistică', specializare: 'Statistică industrială', durata: '4' },
  { perioada: '1951-1957', facultate: 'Facultatea de Statistică', specializare: 'Statistică agricolă', durata: '4' },
  { perioada: '1951-1957', facultate: 'Facultatea de Statistică', specializare: 'Statistică comercială', durata: '4' },
  { perioada: '1951-1957', facultate: 'Facultatea de Statistică', specializare: 'Statistică demografică', durata: '4' },
  { perioada: '1958-1963', facultate: 'Facultatea de Economie Generală', specializare: 'Statistică economică', durata: '5' },
  { perioada: '1964-1966', facultate: 'Facultatea de Economie Generală', specializare: 'Statistica industriei, construcțiilor și transporturilor', durata: '5' },
  { perioada: '1964-1966', facultate: 'Facultatea de Economie Generală', specializare: 'Statistica agriculturii, circulației mărfurilor și populației', durata: '5' },
  { perioada: '1967-1970', facultate: 'Facultatea de Calcul Economic și Cibernetică Economică', specializare: 'Statistica industriei, construcțiilor și transporturilor', durata: '4 ½' },
  { perioada: '1967-1970', facultate: 'Facultatea de Calcul Economic și Cibernetică Economică', specializare: 'Statistica agriculturii, circulației mărfurilor și a populației', durata: '4 ½' },
  { perioada: '1971-1973', facultate: 'Facultatea de Calcul Economic și Cibernetică Economică', specializare: 'Statistică industrială', durata: '4 ½' },
  { perioada: '1971-1973', facultate: 'Facultatea de Calcul Economic și Cibernetică Economică', specializare: 'Statistică agrară', durata: '4 ½' },
  { perioada: '1974-1976', facultate: 'Facultatea de Cibernetică Economică și Statistică', specializare: 'Cibernetică economică și statistică', durata: '4' },
  { perioada: '1977-1989 (sem I)', facultate: 'Facultatea de Planificare și Cibernetică Economică', specializare: 'Planificare și cibernetică economică', durata: '4' },
  { perioada: '1989 (sem II)-1990', facultate: 'Facultatea de Cibernetică, Statistică și Informatică Economică', specializare: 'Statistică economică', durata: '4' },
  { perioada: '1991-2004', facultate: 'Facultatea de Cibernetică, Statistică și Informatică Economică', specializare: 'Statistică economică și socială', durata: '5' },
  { perioada: '2005-prezent', facultate: 'Facultatea de Cibernetică, Statistică și Informatică Economică', specializare: 'Statistică și previziune economică', durata: '3' },
];

// Personalul didactic încadrat
const personalDidactic = [
  // Perioada 1913-1947 - AISCI
  { nr: 1, nume: 'Cihoski Stanislas', disciplina: 'Statistică, în special economică', data: '2 iulie 1913' },
  { nr: 2, nume: 'Dorcioaică Ștefan', disciplina: 'Statistică economică', data: '1 octombrie 1947' },
  { nr: 3, nume: 'Hașeganu Dumitru', disciplina: 'Teoria statisticii', data: '1 noiembrie 1926' },
  { nr: 4, nume: 'Ivănescu Ion', disciplina: 'Statistică Ramuri II', data: '27 aprilie 1939' },
  { nr: 5, nume: 'Moldovan Roman', disciplina: 'Statistică economică', data: '1941' },
  { nr: 6, nume: 'Stănciulescu Ion', disciplina: 'Statistică Ramuri II', data: '27 noiembrie 1939' },
  { nr: 7, nume: 'Stănescu Ștefan', disciplina: 'Statistică, în special economică', data: '1925' },
  // Perioada 1948-1989 – ISEP/ASE
  { nr: 8, nume: 'Albu Longhin', disciplina: 'Statistică teoretică și economică', data: '1 decembrie 1948' },
  { nr: 9, nume: 'Anastasescu Mihail', disciplina: 'Statistică', data: '1 septembrie 1954' },
  { nr: 10, nume: 'Anghelache Constantin', disciplina: 'Statistică', data: '1974' },
  { nr: 11, nume: 'Antonescu Constantin', disciplina: 'Statistică', data: '1973' },
  { nr: 12, nume: 'Balcaș Augustin', disciplina: 'Statistică economică', data: '1949' },
  { nr: 13, nume: 'Bădiță Maria', disciplina: 'Statistică teoretică și economică', data: '1961' },
  { nr: 14, nume: 'Băjan Ana', disciplina: 'Teoria statisticii', data: '1 septembrie 1952' },
  { nr: 15, nume: 'Biji Elena Maria', disciplina: 'Statistică economică', data: '1953' },
  { nr: 16, nume: 'Biji Mircea Dragoș', disciplina: 'Teoria statisticii', data: '15 noiembrie 1948' },
  { nr: 17, nume: 'Bocat Eugen', disciplina: 'Statistică Ramuri II', data: '14 februarie 1949' },
  { nr: 18, nume: 'Bulgaru Mircea', disciplina: 'Teoria statisticii', data: '1 septembrie 1954' },
  { nr: 19, nume: 'Capanu Ion', disciplina: 'Statistică economică', data: '30 octombrie 1950' },
  { nr: 20, nume: 'Caracota Dumitrache', disciplina: 'Statistică economică', data: '1973' },
  { nr: 21, nume: 'Catană Vasile', disciplina: 'Statistică Ramuri II', data: '1952' },
  { nr: 22, nume: 'Chivu Gheorghe', disciplina: 'Statistică Ramuri II', data: '16 martie 1957' },
  { nr: 23, nume: 'Ciobanu Constantin', disciplina: 'Statistică Ramuri II', data: '1 septembrie 1954' },
  { nr: 24, nume: 'Coraliu Lucia', disciplina: 'Teoria statisticii', data: '1 septembrie 1950' },
  { nr: 25, nume: 'Cristureanu Titus', disciplina: 'Statistică comerțului exterior', data: '1955' },
  { nr: 26, nume: 'Doboș Iosif', disciplina: 'Statistică economică', data: '1 februarie 1953' },
  { nr: 27, nume: 'Falcea Simina', disciplina: 'Teoria statisticii', data: '1 octombrie 1954' },
  { nr: 28, nume: 'Ferenbach Iosif', disciplina: 'Statistică economică', data: '20 ianuarie 1949' },
  { nr: 29, nume: 'Florea Ștefan', disciplina: 'Statistică Ramuri II', data: '15 septembrie 1952' },
  { nr: 30, nume: 'Frățilă Gheorghe', disciplina: 'Economie și statistică agrară', data: '1971' },
  { nr: 31, nume: 'Gaspar Virgil', disciplina: 'Statistică economică', data: '1 septembrie 1954' },
  { nr: 32, nume: 'Ghiulea N.', disciplina: 'Statistică', data: '1949' },
  { nr: 33, nume: 'Grosu Călin Lidia', disciplina: 'Statistică Ramuri II', data: '1 septembrie 1954' },
  { nr: 34, nume: 'Ionescu Constantin', disciplina: 'Statistică Ramuri II', data: '1 septembrie 1954' },
  { nr: 35, nume: 'Isaic-Maniu Alexandru', disciplina: 'Statistică', data: '1971' },
  { nr: 36, nume: 'Istrătescu Elena', disciplina: 'Statistică economică', data: '1 septembrie 1952' },
  { nr: 37, nume: 'Ițigan Constantin', disciplina: 'Statistică economică', data: '1 septembrie 1952' },
  { nr: 38, nume: 'Jivănescu Gheorghe', disciplina: 'Statistică economică', data: '15 septembrie 1953' },
  { nr: 39, nume: 'Korka Mihai', disciplina: 'Statistica comerțului exterior', data: '1969' },
  { nr: 40, nume: 'Lescov Maria', disciplina: 'Teoria statisticii', data: '15 septembrie 1950' },
  { nr: 41, nume: 'Lilea Eugenia', disciplina: 'Statistică', data: '1969' },
  { nr: 42, nume: 'Maftei Ion', disciplina: 'Statistică teoretică și economică', data: '1968' },
  { nr: 43, nume: 'Mănescu Manea', disciplina: 'Teoria statisticii', data: '22 aprilie 1948' },
  { nr: 44, nume: 'Melica Ion', disciplina: 'Statistică Ramuri II', data: '30 noiembrie 1949' },
  { nr: 45, nume: 'Mesaroș Emil', disciplina: 'Statistică Ramuri II', data: '1 septembrie 1954' },
  { nr: 46, nume: 'Mitruț Constantin', disciplina: 'Statistică și Econometrie', data: '15 septembrie 1979' },
  { nr: 47, nume: 'Moineagu Constantin', disciplina: 'Teoria statisticii', data: '4 noiembrie 1955' },
  { nr: 48, nume: 'Moldovan Roman', disciplina: 'Statistică teoretică și economică', data: '1959' },
  { nr: 49, nume: 'Munteanu Samoilă', disciplina: 'Statistică Ramuri II', data: '1 septembrie 1955' },
  { nr: 50, nume: 'Niculescu Ilie', disciplina: 'Statistică și econometrie', data: '1975' },
  { nr: 51, nume: 'Onica Petre', disciplina: 'Statistică Ramuri II', data: '1 septembrie 1955' },
  { nr: 52, nume: 'Pârlog Cornelia', disciplina: 'Statistică și econometrie', data: '1968' },
  { nr: 53, nume: 'Petrovici Camenco', disciplina: 'Statistică Ramuri II', data: '1 februarie 1957' },
  { nr: 54, nume: 'Picican Eugen', disciplina: 'Statistică', data: '1968' },
  { nr: 55, nume: 'Pintilie Lucia', disciplina: 'Statistică teoretică și economică', data: '1953' },
  { nr: 56, nume: 'Porojan Dumitru', disciplina: 'Statistică și teoria sondajului', data: '1971' },
  { nr: 57, nume: 'Protopopescu V. V.', disciplina: 'Statistică economică', data: '1 februarie 1956' },
  { nr: 58, nume: 'Raucu Niculae', disciplina: 'Teoria statisticii', data: '15 septembrie 1953' },
  { nr: 59, nume: 'Rădulescu Gheorghe', disciplina: 'Statistică economică', data: '10 noiembrie 1948' },
  { nr: 60, nume: 'Rădulescu Mircea', disciplina: 'Statistică Ramuri II', data: '1 septembrie 1952' },
  { nr: 61, nume: 'Severin Ion', disciplina: 'Teoria statisticii', data: '1 septembrie 1954' },
  { nr: 62, nume: 'Slăvescu Vasilica', disciplina: 'Planificare și cibernetică economică', data: '1969' },
  { nr: 63, nume: 'Sora Virgil', disciplina: 'Statistică și Econometrie', data: '1963' },
  { nr: 64, nume: 'Stănescu Maria', disciplina: 'Statistică teoretică și economică', data: '1968' },
  { nr: 65, nume: 'Stoica Gheorghe', disciplina: 'Statistică', data: '1969' },
  { nr: 66, nume: 'Stoichiță Ion', disciplina: 'Teoria statisticii', data: '1 septembrie 1950' },
  { nr: 67, nume: 'Ștefănescu Ștefan', disciplina: 'Statistică Ramuri II', data: '1 septembrie 1954' },
  { nr: 68, nume: 'Tănăsoiu Ovidiu Emil', disciplina: 'Statistică și Econometrie', data: '1969' },
  { nr: 69, nume: 'Tobîltoc Valentin', disciplina: 'Planificare și cibernetică economică', data: '1967' },
  { nr: 70, nume: 'Tövissi Ludovic', disciplina: 'Teoria statisticii', data: '2 octombrie 1954' },
  { nr: 71, nume: 'Trebici Vladimir L.', disciplina: 'Statistică Ramuri II', data: '1 octombrie 1954' },
  { nr: 72, nume: 'Țigănescu Ion Eugen', disciplina: 'Planificare și cibernetică economică', data: '1962' },
  { nr: 73, nume: 'Vasilescu Florea', disciplina: 'Statistică economică', data: '1 septembrie 1953' },
  { nr: 74, nume: 'Vasilescu Gheorghe', disciplina: 'Statistică economică', data: '1 septembrie 1953' },
  { nr: 75, nume: 'Vasilescu Marinache', disciplina: 'Statistică economică', data: '15 septembrie 1953' },
  { nr: 76, nume: 'Vieru Ioana', disciplina: 'Statistică Ramuri II', data: '1 mai 1954' },
  { nr: 77, nume: 'Voineagu Vergil', disciplina: 'Statistică și Econometrie', data: '1979' },
  { nr: 78, nume: 'Wagner Pavel', disciplina: 'Statistică teoretică și economică', data: '1968' },
  { nr: 79, nume: 'Wagner Florica', disciplina: 'Statistica industriei', data: '1968' },
  { nr: 80, nume: 'Zaharia Octavian', disciplina: 'Statistică', data: '1972' },
  // Perioada 1990 - prezent
  { nr: 81, nume: 'Andrei Tudorel', disciplina: 'Statistică și Econometrie', data: '18 februarie 1991' },
  { nr: 82, nume: 'Apostu Simona Andreea', disciplina: 'Statistică și Econometrie', data: '3 octombrie 2016' },
  { nr: 83, nume: 'Bărbulescu Răzvan', disciplina: 'Statistică și Econometrie', data: '1 octombrie 2003' },
  { nr: 84, nume: 'Begu Liviu-Stelian', disciplina: 'Statistică și Econometrie', data: '21 februarie 1994' },
  { nr: 85, nume: 'Boboc Cristina-Rodica', disciplina: 'Statistică și Econometrie', data: '19 februarie 2001' },
  { nr: 86, nume: 'Căplescu Raluca Dana', disciplina: 'Statistică și Econometrie', data: '3 octombrie 2016' },
  { nr: 87, nume: 'Cărbunaru Băcescu Mihaela Angela', disciplina: 'Statistică și Econometrie', data: '20 februarie 1995' },
  { nr: 88, nume: 'Cimpoeru Smaranda', disciplina: 'Statistică și Econometrie', data: '1 aprilie 2010' },
  { nr: 89, nume: 'Costea Adrian', disciplina: 'Statistică și Econometrie', data: '1 octombrie 1998' },
  { nr: 90, nume: 'Covrig Mihaela', disciplina: 'Statistică și Econometrie', data: '1 octombrie 1999' },
  { nr: 91, nume: 'Cristache Silvia-Elena', disciplina: 'Statistică și Econometrie', data: '1 octombrie 1994' },
  { nr: 92, nume: 'Danciu Aniela Raluca', disciplina: 'Statistică și Econometrie', data: '1 octombrie 1999' },
  { nr: 93, nume: 'Davidescu Adriana Anamaria', disciplina: 'Statistică și Econometrie', data: '1 octombrie 2006' },
  { nr: 94, nume: 'Dimian Gina Cristina', disciplina: 'Statistică și Econometrie', data: '21 februarie 2005' },
  { nr: 95, nume: 'Drăgan Irina-Maria', disciplina: 'Statistică și Econometrie', data: '1 octombrie 1997' },
  { nr: 96, nume: 'Ghiță Simona Ioana', disciplina: 'Statistică și Econometrie', data: '1 octombrie 1997' },
  { nr: 97, nume: 'Glăvan Ionela Roxana', disciplina: 'Statistică și Econometrie', data: '18 februarie 2019' },
  { nr: 98, nume: 'Gogonea Rodica Manuela', disciplina: 'Statistică și Econometrie', data: '1 februarie 2005' },
  { nr: 99, nume: 'Gogu (Luca) Emilia', disciplina: 'Statistică și Econometrie', data: '28 septembrie 2015' },
  { nr: 100, nume: 'Goschin Zizi', disciplina: 'Statistică și Econometrie', data: '1 octombrie 1997' },
  { nr: 101, nume: 'Grădinaru Giani Ionel', disciplina: 'Statistică și Econometrie', data: '1 octombrie 1999' },
  { nr: 102, nume: 'Herțeliu Claudiu', disciplina: 'Statistică și Econometrie', data: '25 februarie 2002' },
  { nr: 103, nume: 'Iacob Andreea Iluzia', disciplina: 'Statistică și Econometrie', data: '1996' },
  { nr: 104, nume: 'Ileanu Bogdan-Vasile', disciplina: 'Statistică și Econometrie', data: '1 martie 2006' },
  { nr: 105, nume: 'Manea Daniela-Ioana', disciplina: 'Statistică și Econometrie', data: '1 octombrie 2004' },
  { nr: 106, nume: 'Marin Erika', disciplina: 'Statistică și Econometrie', data: '1 octombrie 1995' },
  { nr: 107, nume: 'Mazurencu-Marinescu Miruna', disciplina: 'Statistică și Econometrie', data: '1 octombrie 1996' },
  { nr: 108, nume: 'Mihai Mihaela', disciplina: 'Statistică și Econometrie', data: '3 octombrie 2016' },
  { nr: 109, nume: 'Mihăescu Constanța', disciplina: 'Statistică și Econometrie', data: '5 octombrie 1992' },
  { nr: 110, nume: 'Mirica Andreea', disciplina: 'Statistică și Econometrie', data: '2 octombrie 2017' },
  { nr: 111, nume: 'Mitruț Andreea Cristina', disciplina: 'Statistică și Econometrie', data: '2001' },
  { nr: 112, nume: 'Niculescu-Aron Ileana Gabriela', disciplina: 'Statistică și Econometrie', data: '28 februarie 2002' },
  { nr: 113, nume: 'Oțoiu Adrian', disciplina: 'Statistică și Econometrie', data: '2 octombrie 2017' },
  { nr: 114, nume: 'Pele Daniel Traian', disciplina: 'Statistică și Econometrie', data: '19 februarie 2001' },
  { nr: 115, nume: 'Popa Aura', disciplina: 'Statistică și Econometrie', data: '2009' },
  { nr: 116, nume: 'Prada Elena Maria', disciplina: 'Statistică și Econometrie', data: '2 octombrie 2017' },
  { nr: 117, nume: 'Roman Monica Mihaela', disciplina: 'Statistică și Econometrie', data: '1 octombrie 1994' },
  { nr: 118, nume: 'Sacală Mihail-Dumitru', disciplina: 'Statistică și Econometrie', data: '1 octombrie 2004' },
  { nr: 119, nume: 'Strat Vasile Alecsandru', disciplina: 'Statistică și Econometrie', data: '1 noiembrie 2007' },
  { nr: 120, nume: 'Șerban Daniela', disciplina: 'Statistică și Econometrie', data: '20 februarie 1995' },
  { nr: 121, nume: 'Turdean (Vană) Marinella', disciplina: 'Statistică', data: '1991' },
  { nr: 122, nume: 'Țițan Emilia', disciplina: 'Statistică și Econometrie', data: '16 februarie 1991' },
  { nr: 123, nume: 'Țoțan Lavinia-Ștefania', disciplina: 'Statistică și Econometrie', data: '1 noiembrie 2006' },
  { nr: 124, nume: 'Vasilescu Maria-Denisa', disciplina: 'Statistică și Econometrie', data: '28 septembrie 2015' },
  { nr: 125, nume: 'Vătui Mihaela', disciplina: 'Statistică și Econometrie', data: '1995' },
];

const presidentiINS = [
  { nume: 'Manea Mănescu', perioada: '1955-1957' },
  { nume: 'Mircea Biji', perioada: '1990' },
  { nume: 'Constantin Ionescu', perioada: '1990-1992' },
  { nume: 'Pavel Wagner', perioada: '1992-1997' },
  { nume: 'Vergil Voineagu', perioada: '2009-2012' },
  { nume: 'Tudorel Andrei', perioada: '2012-2019' },
];

export default function ListeProfesoriPage() {
  const [, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 flex flex-col">
      <SimpleHeader/>
      
      <main className="flex-grow pt-[1.5cm] pb-20">
        <div className="max-w-[1400px] mx-auto px-6">
          
          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#7209B7] to-[#4361EE] text-white px-4 py-2 rounded-full mb-4">
              <BookOpen className="w-4 h-4" />
              <span className="text-sm">ISTORIC & CONDUCERE</span>
            </div>
            <h1 className="text-5xl mb-6">
              <span className="bg-gradient-to-r from-[#7209B7] via-[#4361EE] to-[#4CC9F0] bg-clip-text text-transparent">
                Liste Profesori și Conducători
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Istoricul complet al dezvoltării programului de statistică și membrii distinși ai departamentului (1913-prezent)
            </p>
          </motion.div>

          {/* Șefii Catedrelor - PRIMA SECȚIUNE */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 md:p-12 border border-[#4CC9F0]/20 dark:border-gray-700 mb-12"
          >
            <div className="flex items-center gap-3 mb-8">
              <Award className="w-8 h-8 text-[#4361EE]" />
              <div>
                <h2 className="text-2xl text-[#3A0CA3] dark:text-[#4CC9F0]">Șefii Catedrelor de Statistică / Departamentului de Statistică și Econometrie</h2>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">(1951-prezent)</p>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gradient-to-r from-[#4361EE] to-[#4CC9F0] text-white">
                    <th className="border border-blue-300 dark:border-blue-700 px-4 py-3 text-left">Perioada</th>
                    <th className="border border-blue-300 dark:border-blue-700 px-4 py-3 text-left">Prenume și nume</th>
                    <th className="border border-blue-300 dark:border-blue-700 px-4 py-3 text-left">Denumirea catedrei/departamentului</th>
                  </tr>
                </thead>
                <tbody>
                  {sefiCatedre.map((item, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-blue-50 dark:bg-gray-700' : 'bg-white dark:bg-gray-800'}>
                      <td className="border border-gray-200 dark:border-gray-600 px-4 py-3 font-semibold text-[#4361EE] dark:text-[#4CC9F0]">{item.perioada}</td>
                      <td className="border border-gray-200 dark:border-gray-600 px-4 py-3 font-semibold text-gray-800 dark:text-gray-200">{item.nume}</td>
                      <td className="border border-gray-200 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">{item.catedra}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Președinții INS - SECȚIUNEA 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 md:p-12 border border-[#4CC9F0]/20 dark:border-gray-700 mb-12"
          >
            <div className="flex items-center gap-3 mb-8">
              <TrendingUp className="w-8 h-8 text-[#4361EE]" />
              <div>
                <h2 className="text-2xl text-[#3A0CA3] dark:text-[#4CC9F0]">Președinți ai Institutului Național de Statistică</h2>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Membri ai Departamentului care au condus INS</p>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gradient-to-r from-[#7209B7] to-[#4361EE] text-white">
                    <th className="border border-purple-300 dark:border-purple-700 px-4 py-3 text-left">Perioada</th>
                    <th className="border border-purple-300 dark:border-purple-700 px-4 py-3 text-left">Prenume și nume</th>
                  </tr>
                </thead>
                <tbody>
                  {presidentiINS.map((item, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-purple-50 dark:bg-gray-700' : 'bg-white dark:bg-gray-800'}>
                      <td className="border border-gray-200 dark:border-gray-600 px-4 py-3 font-semibold text-[#7209B7] dark:text-[#4CC9F0]">{item.perioada}</td>
                      <td className="border border-gray-200 dark:border-gray-600 px-4 py-3 font-semibold text-gray-800 dark:text-gray-200">{item.nume}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Cronologia dezvoltării specializării */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 md:p-12 border border-[#4CC9F0]/20 dark:border-gray-700 mb-12"
          >
            <div className="flex items-center gap-3 mb-8">
              <Calendar className="w-8 h-8 text-[#4361EE]" />
              <div>
                <h2 className="text-2xl text-[#3A0CA3] dark:text-[#4CC9F0]">Cronologia dezvoltării specializării/programului de Statistică în ISEP/ASE</h2>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">(1948-prezent)</p>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gradient-to-r from-[#4361EE] to-[#4CC9F0] text-white">
                    <th className="border border-blue-300 dark:border-blue-700 px-4 py-3 text-left">Perioada</th>
                    <th className="border border-blue-300 dark:border-blue-700 px-4 py-3 text-left">Facultatea</th>
                    <th className="border border-blue-300 dark:border-blue-700 px-4 py-3 text-left">Specializarea de licență</th>
                    <th className="border border-blue-300 dark:border-blue-700 px-4 py-3 text-center">Durată (ani)</th>
                  </tr>
                </thead>
                <tbody>
                  {cronologieDezvoltare.map((item, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-blue-50 dark:bg-gray-700' : 'bg-white dark:bg-gray-800'}>
                      <td className="border border-gray-200 dark:border-gray-600 px-4 py-3 font-semibold text-[#4361EE] dark:text-[#4CC9F0]">{item.perioada}</td>
                      <td className="border border-gray-200 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">{item.facultate}</td>
                      <td className="border border-gray-200 dark:border-gray-600 px-4 py-3 text-gray-800 dark:text-gray-200">{item.specializare}</td>
                      <td className="border border-gray-200 dark:border-gray-600 px-4 py-3 text-center font-semibold text-[#7209B7] dark:text-[#4CC9F0]">{item.durata}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Personalul didactic încadrat (125 membri) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 md:p-12 border border-[#4CC9F0]/20 dark:border-gray-700 mb-12"
          >
            <div className="flex items-center gap-3 mb-8">
              <Clock className="w-8 h-8 text-[#4361EE]" />
              <div>
                <h2 className="text-2xl text-[#3A0CA3] dark:text-[#4CC9F0]">Personalul didactic încadrat la AISCI/ISEP/ASE domeniu de predare Statistica</h2>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">(1913-prezent) - 125 membri</p>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gradient-to-r from-[#7209B7] to-[#4361EE] text-white">
                    <th className="border border-purple-300 dark:border-purple-700 px-4 py-3 text-center">Nr.</th>
                    <th className="border border-purple-300 dark:border-purple-700 px-4 py-3 text-left">Nume și prenume</th>
                    <th className="border border-purple-300 dark:border-purple-700 px-4 py-3 text-left">Disciplina /Catedra/Departamentul</th>
                    <th className="border border-purple-300 dark:border-purple-700 px-4 py-3 text-left">Data încadrării</th>
                  </tr>
                </thead>
                <tbody>
                  {personalDidactic.map((item, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-purple-50 dark:bg-gray-700' : 'bg-white dark:bg-gray-800'}>
                      <td className="border border-gray-200 dark:border-gray-600 px-4 py-3 text-center text-gray-600 dark:text-gray-400">{item.nr}</td>
                      <td className="border border-gray-200 dark:border-gray-600 px-4 py-3 font-semibold text-gray-800 dark:text-gray-200">{item.nume}</td>
                      <td className="border border-gray-200 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">{item.disciplina}</td>
                      <td className="border border-gray-200 dark:border-gray-600 px-4 py-3 text-[#7209B7] dark:text-[#4CC9F0] font-semibold">{item.data}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

        </div>
      </main>

      <Footer />
    </div>
  );
}