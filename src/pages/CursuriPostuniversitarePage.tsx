import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import {
  GraduationCap, Calendar, Clock, MapPin, Banknote, CalendarCheck, Laptop, Mail, Download,
  ExternalLink, ChevronDown, CheckCircle2, Users
} from 'lucide-react';
import { SimpleHeader } from '../components/SimpleHeader';
import { Footer } from '../components/Footer';
import ghidPdf from '../assets/docs/Ghid Curs Postuniversitar Business Analysis 2026.pdf';

// Pagina urmează „Ghid Curs Postuniversitar Business Analysis, Ediția 2026”.
// Aici stau doar informațiile esențiale; orarul pe ore, biografiile lectorilor
// și regulamentul complet sunt în PDF-ul din `ghidPdf`.

const infoPractice = [
  { icon: Calendar, label: 'Perioadă', value: '1 noiembrie – 30 decembrie 2026' },
  { icon: CalendarCheck, label: 'Înscrieri', value: '21 septembrie – 2 octombrie 2026' },
  { icon: MapPin, label: 'Locație', value: 'ASE București, Campus Piața Romană' },
  { icon: Banknote, label: 'Taxă', value: '1.500 RON + 250 RON înscriere' }
];

const program = [
  { day: 1, date: '7 nov.', hours: '6 ore', topic: 'Vizualizarea datelor și dashboard-uri', tool: 'Power BI', lector: 'Conf. Smaranda Cimpoeru' },
  { day: 2, date: '8 nov.', hours: '4 ore', topic: 'Analiza univariată a datelor', tool: 'Excel', lector: 'Prof. Erika Marin' },
  { day: 3, date: '14 nov.', hours: '5 ore', topic: 'Testarea ipotezelor și corelație', tool: 'Excel, SPSS', lector: 'Conf. Mihaela Mihai' },
  { day: 4, date: '15 nov.', hours: '5 ore', topic: 'Regresie liniară și previziune', tool: 'R Studio', lector: 'Conf. Mihaela Covrig' },
  { day: 5, date: '28 nov. / 5 dec.', hours: '6 ore', topic: 'Metode de clasificare', tool: 'Python', lector: 'Prof. Cristina Boboc, Camelia Dan (LSEG)' },
  { day: 6, date: '29 nov. / 6 dec.', hours: '4 ore', topic: 'Metode de clusterizare', tool: 'Python', lector: 'Prof. Cristina Boboc, Camelia Dan (LSEG)' },
  { day: 7, date: '11 / 12 dec.', hours: '1 oră', topic: 'Evaluare finală (test grilă)', tool: '', lector: 'Prof. Cristina Boboc' }
];

const lectori = [
  { name: 'Prof. univ. dr. Cristina Boboc', role: 'coordonatorul programului', slug: 'cristina-boboc' },
  { name: 'Prof. univ. dr. Erika Marin', role: 'director DSE', slug: 'erika-marin' },
  { name: 'Conf. univ. dr. Smaranda Cimpoeru', role: '', slug: 'smaranda-cimpoeru' },
  { name: 'Conf. univ. dr. Mihaela Covrig', role: '', slug: 'mihaela-covrig' },
  { name: 'Conf. univ. dr. Mihaela Mihai', role: '', slug: 'mihaela-mihai' },
  { name: 'Camelia Dan', role: 'specialist analiză date, LSEG', slug: '' }
];

const pasiInscriere = [
  { title: 'Completezi fișa de înscriere', text: 'Formularul-tip, semnat; îl găsești la secretariat sau pe site-ul ASE.' },
  { title: 'Trimiți dosarul online', text: 'Copii PDF/JPG ale actelor de studii și de identitate, plus dovada taxei de înscriere.' },
  { title: 'Confirmi locul în 48 de ore', text: 'După e-mailul de acceptare, achiți taxa de școlarizare și trimiți dovada la secretariat.' },
  { title: 'Semnezi contractul de studii', text: 'La primul curs, cu documentele originale pentru verificare.' }
];

const documenteDosar = [
  'fișa-tip de înscriere, semnată',
  'diploma de licență și foaia matricolă / suplimentul la diplomă (și cele de master, dacă este cazul)',
  'diploma de bacalaureat și foaia matricolă din liceu',
  'certificatul de naștere și cartea de identitate',
  'adeverință medicală (apt pentru program)',
  'certificatul de căsătorie, dacă este cazul',
  'dovada plății taxei de înscriere'
];

const software = ['Power BI Desktop', 'Microsoft Excel', 'IBM SPSS (merge și Trial, 14 zile)', 'R + RStudio Desktop', 'Google Colab pentru Python (fără instalare)'];

export default function CursuriPostuniversitarePage() {
  const [documenteDeschise, setDocumenteDeschise] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <SimpleHeader />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8" style={{ paddingTop: '1.5cm' }}>
        <div className="pb-20">

          {/* Hero */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-6 bg-[#4361EE] text-white">
              <GraduationCap className="w-5 h-5" />
              <span className="text-sm uppercase tracking-wider font-semibold">Curs postuniversitar</span>
            </div>

            <h1 className="text-4xl md:text-5xl mb-3 text-[#3A0CA3] dark:text-[#4CC9F0]">
              Business Analysis
            </h1>
            <p className="text-base uppercase tracking-wider text-[#7209B7] dark:text-[#DDB8FF] font-semibold mb-5">
              Power BI • Excel • SPSS • R Studio • Python
            </p>

            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
              30 de ore de analiză a datelor de business, la clasă, în weekend: de la grafice și dashboard-uri
              până la regresie, clasificare și clusterizare. Pentru profesioniști și absolvenți care lucrează deja cu Excel.
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              <a
                href={ghidPdf}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#7209B7] hover:bg-[#3A0CA3] text-white px-6 py-3 rounded-full font-semibold transition-colors"
              >
                <Download className="w-5 h-5" />
                Ghidul cursului (PDF)
              </a>
            </div>
          </motion.div>

          {/* Informații practice */}
          <section className="mb-16">
            <div className="grid sm:grid-cols-2 gap-4">
              {infoPractice.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="flex items-center gap-4 bg-gray-50 dark:bg-gray-800 rounded-xl p-5 border border-gray-200 dark:border-gray-700"
                  >
                    <div className="flex-shrink-0 w-11 h-11 rounded-lg bg-[#4361EE] flex items-center justify-center">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400">{item.label}</p>
                      <p className="text-base font-semibold text-[#3A0CA3] dark:text-white">{item.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-3 px-1">
              Angajații ASE nu achită taxa de înscriere. Este nevoie de laptop personal.
            </p>
          </section>

          {/* Program */}
          <section className="mb-16">
            <h2 className="text-3xl text-[#3A0CA3] dark:text-white mb-2">Programul cursului</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Sâmbăta și duminica, de la ora 9. Orarul detaliat pe ore este în ghid.
            </p>

            <ol className="divide-y divide-gray-200 dark:divide-gray-700 border-y border-gray-200 dark:border-gray-700">
              {program.map((zi) => (
                <li key={zi.day} className="flex gap-4 py-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#7209B7] text-white flex items-center justify-center font-semibold">
                    {zi.day}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <p className="text-lg font-semibold text-gray-900 dark:text-white">{zi.topic}</p>
                      {zi.tool && (
                        <span className="text-sm font-semibold text-[#4361EE] dark:text-[#A5B8FF]">{zi.tool}</span>
                      )}
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      {zi.date} · {zi.hours} · {zi.lector}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          {/* Lectori */}
          <section className="mb-16">
            <h2 className="text-3xl text-[#3A0CA3] dark:text-white mb-6">Lectorii</h2>
            <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
              {lectori.map((lector, index) => (
                <li key={index} className="flex items-start gap-2 text-gray-800 dark:text-gray-200">
                  <CheckCircle2 className="w-5 h-5 text-[#4361EE] dark:text-[#A5B8FF] flex-shrink-0 mt-0.5" />
                  <span>
                    {lector.slug ? (
                      <a href={`#/profesor/${lector.slug}`} className="font-medium hover:text-[#4361EE] dark:hover:text-[#4CC9F0] hover:underline">
                        {lector.name}
                      </a>
                    ) : (
                      <span className="font-medium">{lector.name}</span>
                    )}
                    {lector.role && <span className="text-gray-500 dark:text-gray-400"> — {lector.role}</span>}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          {/* Înscriere */}
          <section id="inscriere" className="mb-16 scroll-mt-24">
            <h2 className="text-3xl text-[#3A0CA3] dark:text-white mb-2">Cum te înscrii</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Înscrierea se face online, între 21 septembrie și 2 octombrie 2026.
            </p>

            <ol className="space-y-4 mb-6">
              {pasiInscriere.map((pas, index) => (
                <li key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#4361EE] text-white flex items-center justify-center text-sm font-semibold">
                    {index + 1}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">{pas.title}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{pas.text}</p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
              <button
                type="button"
                onClick={() => setDocumenteDeschise((v) => !v)}
                aria-expanded={documenteDeschise}
                aria-controls="documente-dosar"
                className="w-full flex items-center justify-between gap-4 p-5 text-left font-semibold text-[#3A0CA3] dark:text-white"
              >
                Documente necesare pentru dosar
                <ChevronDown className={`w-5 h-5 flex-shrink-0 transition-transform duration-200 ${documenteDeschise ? 'rotate-180' : ''}`} />
              </button>
              {documenteDeschise && (
                <ul id="documente-dosar" className="px-5 pb-5 space-y-2">
                  {documenteDosar.map((doc, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-[#047857] dark:text-[#34D399] flex-shrink-0 mt-0.5" />
                      <span>{doc}</span>
                    </li>
                  ))}
                  <li className="pt-2">
                    <a
                      href="https://mefc.ase.ro/programe-postuniversitare-de-formare-si-dezvoltare-profesionala-continua/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm font-semibold text-[#4361EE] dark:text-[#A5B8FF] hover:underline"
                    >
                      Regulamentul și informațiile oficiale ASE
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </li>
                </ul>
              )}
            </div>
          </section>

          {/* Software */}
          <section className="mb-16">
            <h2 className="text-3xl text-[#3A0CA3] dark:text-white mb-2">Ce instalezi înainte</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Verifică aplicațiile înainte de prima întâlnire, ca timpul cursului să rămână pentru exerciții.
            </p>
            <ul className="flex flex-wrap gap-2">
              {software.map((app, index) => (
                <li
                  key={index}
                  className="inline-flex items-center gap-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full px-4 py-2 text-sm text-gray-800 dark:text-gray-200"
                >
                  <Laptop className="w-4 h-4 text-[#4361EE] dark:text-[#A5B8FF]" />
                  {app}
                </li>
              ))}
            </ul>
          </section>

          {/* Cui i se adresează */}
          <section className="mb-16">
            <div className="flex items-start gap-4 bg-[#F72585]/5 border border-[#F72585]/20 rounded-xl p-6">
              <Users className="w-6 h-6 text-[#B5179E] dark:text-[#F72585] flex-shrink-0 mt-0.5" />
              <p className="text-gray-700 dark:text-gray-300">
                <span className="font-semibold text-gray-900 dark:text-white">Cui i se adresează: </span>
                profesioniștilor și absolvenților cu noțiuni de bază de prelucrare a datelor, obișnuiți cu Excel
                sau cu alte aplicații de analiză statistică.
              </p>
            </div>
          </section>

          {/* Contact */}
          <section>
            <div className="bg-[#4361EE] rounded-xl p-8 sm:p-10 text-center text-white">
              <h2 className="text-3xl mb-3">Întrebări sau înscriere</h2>
              <p className="text-lg opacity-95 mb-6">
                Prof. univ. dr. Cristina Boboc, coordonatorul programului
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <a
                  href="mailto:cristina.boboc@csie.ase.ro"
                  className="inline-flex items-center gap-2 bg-white text-[#4361EE] px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  cristina.boboc@csie.ase.ro
                </a>
                <a
                  href="mailto:angelica.paiu@csie.ase.ro"
                  className="inline-flex items-center gap-2 bg-white/15 border border-white/40 text-white px-6 py-3 rounded-full font-semibold hover:bg-white/25 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  angelica.paiu@csie.ase.ro
                </a>
              </div>
              <div className="flex items-center justify-center gap-2 mt-6 text-sm opacity-90">
                <Clock className="w-4 h-4" />
                Înscrieri până pe 2 octombrie 2026
              </div>
            </div>
          </section>

        </div>
      </div>

      <Footer />
    </div>
  );
}
