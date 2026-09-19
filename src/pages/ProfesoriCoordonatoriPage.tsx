import { useState } from 'react';
import { motion } from 'motion/react';
import { SimpleHeader } from '../components/SimpleHeader';
import { Footer } from '../components/Footer';
import { GraduationCap, BookOpen, ExternalLink, ChevronDown, Lightbulb } from 'lucide-react';

type Coordonator = {
  name: string;
  slug: string;
  /** Teme propuse explicit de profesor. Butonul „Propuneri teme” apare doar
   *  pentru cei care au trimis o listă — lipsa lui înseamnă că nu au trimis. */
  teme?: string[];
};

// Mapping de activități didactice pentru fiecare profesor
const profesoriInfo: Record<string, string[]> = {
  'adrian-costea': ['Econometrie', 'Data Mining', 'Bazele Econometriei'],
  'adrian-otoiu': ['Statistică', 'Econometrie', 'Data Mining'],
  'bogdan-ileanu': ['Statistică', 'Econometrie', 'Analiza datelor în sănătate'],
  'claudiu-herteliu': ['Statistică computațională și econofizică', 'Statistică macroeconomică', 'Econometrie'],
  'constanta-mihaescu': ['Demografie', 'Statistică Socială', 'Statistică teoretică'],
  'cristina-boboc': ['Analiză Statistică Multidimensională', 'Statistică Neparametrică', 'Serii de Timp'],
  'daniela-manea': ['Statistică', 'Econometrie'],
  'dan-pele': ['Statistica Pieţelor Financiare', 'Econometrie', 'Serii de timp'],
  'elena-prada': ['Statistică Spatială', 'Statistică macroeconomică', 'Econometrie'],
  'emilia-gogu': ['Statistică macroeconomică', 'Statistică', 'Econometrie'],
  'emilia-titan': ['Statistică', 'Econometrie', 'Metode cantitative în studiul pieței'],
  'erika-marin': ['Statistică', 'Analiza managerială a datelor', 'Econometrie'],
  'giani-gradinaru': ['Statistică microeconomică', 'Econometrie', 'Previziune economică'],
  'gina-dimian': ['Statistică', 'Econometrie', 'Demografie și Statistică Socială'],
  'marinescu-mazurencu': ['Econometrie', 'Statistică', 'Evaluarea afacerilor electronice'],
  'mihaela-covrig': ['Statistică', 'Econometrie', 'Serii de timp'],
  'mihaela-mihai': ['Statistică', 'Econometrie', 'Matematică economică'],
  'monica-roman': ['Econometrie', 'Statistică', 'Metode cantitative'],
  'simona-apostu': ['Bazele Statisticii', 'Statistică', 'Econometrie'],
  'smaranda-cimpoeru': ['Econometrie', 'Econometrie spațială', 'Statistică'],
  'tudorel-andrei': ['Econometrie', 'Econometrie avansată'],
  'gabriela-niculescu': ['Statistică teoretică și statistică economică', 'Anchete și sondaje statistice', 'Econometrie']
};

const temeIleanu = [
  'Cuantificarea și modelarea fenomenelor demografice',
  'Metode cantitative utilizate în analiza rezilienței economice',
  'Modelarea econometrică a indicatorilor care caracterizează piața muncii',
  'Calitatea ajustării și măsuri ale discrepanțelor. Dezvoltări teoretice și practice',
  'Cuantificarea poverii bolilor',
  'Analize de impact bugetar. Evaluări, scenarii și estimări bazate pe modele de regresie, DSA și PSA',
  'Cuantificarea riscurilor în economie utilizând modele cu variabile discrete',
  'Cuantificarea riscurilor în domeniul medical utilizând modele cu alegere discretă',
  'Abordări tradiționale vs. AI în analiza fenomenelor socio-economice',
  'Indicatori compoziți și utilizarea lor în sociologie, economie, sănătate etc.',
  'Teme cu abordări transdisciplinare',
  'Alte teme care conțin, printre altele, și subiectele exemplificate în lista de mai sus'
];

// Profesori coordonatori pentru Licență - sortați alfabetic
const profesoriLicenta: Coordonator[] = [
  { name: 'Adrian COSTEA', slug: 'adrian-costea' },
  { name: 'Adrian OȚOIU', slug: 'adrian-otoiu' },
  { name: 'Bogdan Vasile ILEANU', slug: 'bogdan-ileanu', teme: temeIleanu },
  { name: 'Claudiu HERȚELIU', slug: 'claudiu-herteliu' },
  { name: 'Constanța MIHAESCU', slug: 'constanta-mihaescu' },
  { name: 'Cristina Rodica BOBOC', slug: 'cristina-boboc' },
  { name: 'Daniela Ioana MANEA', slug: 'daniela-manea' },
  { name: 'Dan Traian PELE', slug: 'dan-pele' },
  { name: 'Elena Maria PRADA', slug: 'elena-prada' },
  { name: 'Emilia GOGU', slug: 'emilia-gogu' },
  { name: 'Emilia ȚIȚAN', slug: 'emilia-titan' },
  { name: 'Erika MARIN', slug: 'erika-marin' },
  { name: 'Giani Ionel GRĂDINARU', slug: 'giani-gradinaru' },
  { name: 'Gina Cristina DIMIAN', slug: 'gina-dimian' },
  { name: 'Marinescu Pele MAZURENCU', slug: 'marinescu-mazurencu' },
  { name: 'Mihaela COVRIG', slug: 'mihaela-covrig' },
  { name: 'Mihaela MIHAI', slug: 'mihaela-mihai' },
  { name: 'Monica Mihaela ROMAN', slug: 'monica-roman' },
  { name: 'Simona APOSTU', slug: 'simona-apostu' },
  { name: 'Smaranda CIMPOERU', slug: 'smaranda-cimpoeru' },
  { name: 'Tudorel ANDREI', slug: 'tudorel-andrei' }
];

// Profesori coordonatori pentru Master - sortați alfabetic
const profesoriMaster: Coordonator[] = [
  { name: 'Adrian COSTEA', slug: 'adrian-costea' },
  { name: 'Adrian OȚOIU', slug: 'adrian-otoiu' },
  { name: 'Bogdan Vasile ILEANU', slug: 'bogdan-ileanu', teme: temeIleanu },
  { name: 'Claudiu HERȚELIU', slug: 'claudiu-herteliu' },
  { name: 'Constanța MIHAESCU', slug: 'constanta-mihaescu' },
  { name: 'Cristina Rodica BOBOC', slug: 'cristina-boboc' },
  { name: 'Dan Traian PELE', slug: 'dan-pele' },
  { name: 'Elena Maria PRADA', slug: 'elena-prada' },
  { name: 'Emilia ȚIȚAN', slug: 'emilia-titan' },
  { name: 'Giani Ionel GRĂDINARU', slug: 'giani-gradinaru' },
  { name: 'Gabriela NICULESCU', slug: 'gabriela-niculescu' },
  { name: 'Mihaela COVRIG', slug: 'mihaela-covrig' },
  { name: 'Mihaela MIHAI', slug: 'mihaela-mihai' },
  { name: 'Monica Mihaela ROMAN', slug: 'monica-roman' },
  { name: 'Smaranda CIMPOERU', slug: 'smaranda-cimpoeru' },
  { name: 'Tudorel ANDREI', slug: 'tudorel-andrei' }
];

function CoordonatorCard({ profesor, index, baseDelay, panelId }: {
  profesor: Coordonator;
  index: number;
  baseDelay: number;
  panelId: string;
}) {
  const [temeDeschise, setTemeDeschise] = useState(false);
  const activitati = profesoriInfo[profesor.slug] || [];
  const areTeme = !!profesor.teme && profesor.teme.length > 0;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: baseDelay + index * 0.02 }}
      className="p-5 bg-[#4CC9F0]/5 dark:bg-[#4CC9F0]/10 rounded-xl border border-[#4CC9F0]/20 dark:border-gray-700 hover:border-[#4361EE]/40 dark:hover:border-[#4361EE]/40 transition-colors duration-300"
    >
      <a
        href={`#/profesor/${profesor.slug}`}
        className="group flex items-start justify-between gap-3 mb-3"
      >
        <p className="text-[#3A0CA3] dark:text-[#A5B8FF] font-semibold group-hover:text-[#4361EE] dark:group-hover:text-[#4CC9F0] transition-colors">
          {profesor.name}
        </p>
        <ExternalLink className="w-4 h-4 text-[#4361EE] dark:text-[#A5B8FF] opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 mt-1" />
      </a>

      {activitati.length > 0 && (
        <div className="space-y-1">
          {activitati.slice(0, 3).map((activitate, idx) => (
            <p key={idx} className="text-sm text-gray-600 dark:text-gray-400">
              • {activitate}
            </p>
          ))}
        </div>
      )}

      {areTeme && (
        <div className="mt-4">
          <button
            type="button"
            onClick={() => setTemeDeschise((v) => !v)}
            aria-expanded={temeDeschise}
            aria-controls={panelId}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#7209B7] text-white text-sm font-semibold hover:bg-[#3A0CA3] transition-colors"
          >
            <Lightbulb className="w-4 h-4" />
            Propuneri teme
            <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${temeDeschise ? 'rotate-180' : ''}`} />
          </button>

          {temeDeschise && (
            <ul
              id={panelId}
              className="mt-3 space-y-2 border-t border-[#4CC9F0]/30 dark:border-gray-600 pt-3"
            >
              {profesor.teme!.map((tema, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                  <span className="text-[#7209B7] dark:text-[#DDB8FF] font-semibold flex-shrink-0 w-5 text-right">{idx + 1}.</span>
                  <span>{tema}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </motion.div>
  );
}

export default function ProfesoriCoordonatoriPage() {
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
            className="text-center mb-12 sm:mb-16"
            style={{ marginTop: "1.5cm" }}
          >
            <div className="inline-flex items-center gap-2 bg-[#7209B7] text-white px-3 sm:px-4 py-2 rounded-full mb-6 sm:mb-8">
              <GraduationCap className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="text-xs sm:text-sm">COORDONATORI</span>
            </div>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
              Profesorii îndrumători pentru lucrări de licență și disertație
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 max-w-3xl mx-auto px-4 mt-3">
              Butonul „Propuneri teme” apare la profesorii care au transmis o listă explicită de teme.
            </p>
          </motion.div>

          {/* Licență Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8 border border-[#4CC9F0]/20 dark:border-gray-700">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-[#7209B7] rounded-xl p-3">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-[#3A0CA3] dark:text-[#4CC9F0] text-2xl">
                  Licență
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {profesoriLicenta.map((profesor, index) => (
                  <CoordonatorCard
                    key={profesor.slug}
                    profesor={profesor}
                    index={index}
                    baseDelay={0.3}
                    panelId={`teme-licenta-${profesor.slug}`}
                  />
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-[#4CC9F0]/20 dark:border-gray-700">
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  <span className="font-semibold text-[#4361EE] dark:text-[#A5B8FF]">{profesoriLicenta.length}</span> profesori coordonatori pentru lucrări de licență
                </p>
              </div>
            </div>
          </motion.div>

          {/* Master Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8 border border-[#4CC9F0]/20 dark:border-gray-700">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-[#4361EE] rounded-xl p-3">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-[#3A0CA3] dark:text-[#4CC9F0] text-2xl">
                  Master
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {profesoriMaster.map((profesor, index) => (
                  <CoordonatorCard
                    key={profesor.slug}
                    profesor={profesor}
                    index={index}
                    baseDelay={0.5}
                    panelId={`teme-master-${profesor.slug}`}
                  />
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-[#4CC9F0]/20 dark:border-gray-700">
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  <span className="font-semibold text-[#4361EE] dark:text-[#A5B8FF]">{profesoriMaster.length}</span> profesori coordonatori pentru disertații
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
