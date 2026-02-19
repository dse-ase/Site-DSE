import { ProfesorProfile } from '../../components/ProfesorProfile';

export function DanPelePage() {
  const data = {
    name: 'PELE Daniel Traian',
    initials: 'PD',
    role: 'Profesor Universitar Dr.',
    specializations: [
      'Econometrie și analiză statistică avansată',
      'Serii de timp și modele financiare',
      'Piețe financiare, risc și stabilitate financiară',
      'FinTech și inteligență artificială aplicată în finanțe',
      'Crize financiare și predictibilitate macroeconomică',
      'Inteligența Artificială și LLM',
      'Digital Finance'
    ],
    email: 'dan.pele@csie.ase.ro',
    facultate: 'Facultatea de Cibernetică, Statistică și Informatică Economică',
    activitateDidactica: [
      'Statistică',
      'Econometrie',
      'Serii de timp',
      'Statistica piețelor financiare',
      'Modelarea avansată a seriilor de timp',
      'Modelarea piețelor financiare'
    ],
    domeniiCercetare: [
      'Econometrie și analiză statistică avansată',
      'Serii de timp și modele financiare',
      'Piețe financiare, risc și stabilitate financiară',
      'FinTech, inteligență artificială aplicată în finanțe',
      'Crize financiare și predictibilitate macroeconomică',
      'Politici publice și evaluarea performanței',
      'Inteligența Artificială și LLM',
      'Digital Finance'
    ],
    tezeDoctorat: [
      'Ștefan Găman - Risk models for digital assets',
      'Antoaneta Amza - LLMs in economy',
      'Siang-Li Jheng - Early-warning systems for preventing the deterioration of financial/economic entities\' performance',
      'Delia Diaconu - Explainable AI - Applications in Economics',
      'Alexandru-Victor Andrei - Explainable Artificial Intelligence (XAI) - applications in economics',
      'Andrei-Theodor Ginavar - Application of Large Language Model models in the forecast of digital asset returns',
      'Rahul Tak - Deep learning for efficient and high performance automated trading systems',
      'Saad obaid jameel al masoodi - Statistical methods for financial markets forecasting',
      'Bolovăneanu Vlad - Modele de detectare a fraudelor financiare'
    ],
    publicatiiRelevante: [],  // Gol - nu va fi afișat
    proiecteCercetare: [],  // Gol - nu va fi afișat
    cvProfiluri: []  // Gol - nu va fi afișat (chiar dacă există Google Scholar și ResearchGate, linkurile nu sunt furnizate)
  };

  return <ProfesorProfile data={data} />;
}
