import { ProfesorProfile } from '../../components/ProfesorProfile';

export function AdrianCosteaPage() {
  const data = {
    name: 'COSTEA Adrian',
    initials: 'CA',
    role: 'Profesor Universitar Dr.',
    specializations: [
      'Econometrie și statistică aplicată',
      'Data Mining și inteligență computațională',
      'Rețele neuronale artificiale, algoritmi genetici și fuzzy logic',
      'Analiza și modelarea proceselor economico-decizionale',
      'Sisteme informatice și informatică economică'
    ],
    email: 'adrian.costea@csie.ase.ro',
    facultate: 'Facultatea de Cibernetică, Statistică și Informatică Economică',
    activitateDidactica: [
      'Econometrie',
      'Data Mining',
      'Bazele Econometriei',
      'Statistică Economică',
      'Statistică',
      'Statistică Macroeconomică',
      'Structuri de date',
      'Programe aplicative',
      'Programare în C, C++, Visual C++'
    ],
    domeniiCercetare: [
      'Econometrie și statistică aplicată',
      'Data Mining și inteligență computațională',
      'Rețele neuronale artificiale, algoritmi genetici și fuzzy logic',
      'Analiza și modelarea proceselor economico-decizionale',
      'Sisteme informatice și informatică economică'
    ],
    tezeDoctorat: [
      'Tehnici de Data Mining folosite în analiza fraudei fiscale (Doctorand: Alexandru Simion)',
      'Metode de inteligență computațională pentru analiza situațiilor financiare (Doctorand: Cosmin Adrian Proșcanu - susținere programată februarie 2026)',
      'Modele de avertizare timpurie pentru prevenirea deteriorării performanțelor entităților financiare/economice (Doctorand: Jheng Siang-Li)',
      'Algoritmi deep learning pentru sisteme de tranzacționare automatizate pregătite pentru industrie (Doctorand: Rahul Tak)',
      'Quantifying the impact of teacher quality on student academic results in the long run: a meta-analysis through hierarchical linear modeling (Doctorand: Claudia-Nicoleta Păun - susținere programată septembrie 2026)',
      'Analiza statistică a dezechilibrelor macroeconomice în România (Doctorand: Alexandru-Ioan Chiriluș - susținut 24 septembrie 2024)',
      'Metode de inteligență computațională pentru analiza situațiilor financiare (Doctorand: Andreea Ioana Chiriac - susținut 29 martie 2024)'
    ],
    publicatiiRelevante: [
      'Proșcanu CA, Proșcanu ME, Pele DT, Costea A, 2025, Watt\'s Next? Benchmarking Time Series Models on Romania\'s National Electricity Consumption, Romanian Journal of Economic Forecasting, Vol. 28, No. 3, pp. 146-163. Link: https://ipe.ro/ftp/RePEc/rjef3_2025/rjef3_2025p146-163.pdf',
      'Chiriluș A, Costea A, 2023, The Effect of FDI on Environmental Degradation in Romania: Testing the Pollution Haven Hypothesis, Sustainability, Vol. 15, No. 13, 10733. DOI: 10.3390/su151310733',
      'Costea A, 2022, An Early-Warning System for Financial Performance Predictions, Economic Computation and Economic Cybernetics Studies and Research, Vol. 56, No. 2, pp. 5-20. DOI: 10.24818/18423264/56.2.22.01',
      'Costea A, Ferrara M, Șerban F, 2017, An integrated two-stage methodology for optimising the accuracy of performance classification models, Technological and Economic Development of Economy, Vol. 23, No. 1, pp. 111-139. Link: http://www.tandfonline.com/doi/full/10.3846/20294913.2016.1213196',
      'Șerban F, Costea A, Ferrara M, 2015, Portfolio optimization using interval analysis, Economic Computation and Economic Cybernetics Studies and Research, Vol. 49, No. 1, pp. 147-162',
      'Moinescu B, Costea A, 2014, Towards an early-warning system of distressed non-banking financial institutions, Economic Computation and Economic Cybernetics Studies and Research, Vol. 48, No. 2, pp. 75-90'
    ],
    proiecteCercetare: [
      'MSCA Digital Finance (1 ianuarie 2024 – 31 decembrie 2027) - membru. Proiect finanțat de Comisia Europeană prin Marie Sklodowska-Curie Action',
      'Proiect CA19130 - FinAI Fintech and Artificial Intelligence in Finance - Towards a transparent financial industry (14 septembrie 2020 - 13 septembrie 2024) - membru. Proiect finanțat de COST – European Cooperation in Science and Technology',
      'Aplicant secundar al proiectului Sustainable Digital Transformation in Europe (OC-2025-1-28474) pentru obținerea finanțării din partea COST network (aflat în faza de evaluare). Aplicant principal: prof. Maria Iannario, Universitatea de Studii din Napoli – Federico II'
    ],
    cvProfiluri: [
      { tip: 'Google Scholar', url: 'https://scholar.google.ro/citations?user=5Flb3TMAAAAJ&hl=ro' },
      { tip: 'ResearchGate', url: 'https://www.researchgate.net/profile/Adrian-Costea?ev=prf_overview' },
      { tip: 'ORCID', url: 'https://orcid.org/0000-0002-9968-0469' }
    ]
  };

  return <ProfesorProfile data={data} />;
}