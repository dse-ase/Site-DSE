import { ProfesorProfile } from '../../components/ProfesorProfile';

export function SmarandaCimpoeruPage() {
  const data = {
    name: 'CIMPOERU Smaranda',
    initials: 'CS',
    role: 'Conferențiar Universitar Dr.',
    specializations: [
      'Econometrie aplicată și statistică',
      'Econometrie spațială',
      'Analiza pieței muncii, sărăcie, migrație și integrare socială',
      'Utilizarea tehnicilor de data mining și inteligență artificială în economie'
    ],
    email: 'smaranda.cimpoeru@csie.ase.ro',
    facultate: 'Facultatea de Cibernetică, Statistică și Informatică Economică',
    birou: '2610',
    activitateDidactica: [
      'Econometrie (română și engleză)',
      'Econometrie spațială',
      'Statistică',
      'Vizualizarea datelor',
      'Cursuri și seminare la Facultatea de Cibernetică, Statistică și Informatică Economică',
      'Cursuri și seminare la Facultatea de Finanțe, Bănci, Burse de Valori',
      'Cursuri și seminare la Facultatea de Relații Economice Internaționale'
    ],
    domeniiCercetare: [
      'Econometrie aplicată și statistică',
      'Econometrie spațială',
      'Analiza pieței muncii, sărăcie, migrație și integrare socială',
      'Utilizarea tehnicilor de data mining și inteligență artificială în economie'
    ],
    tezeDoctorat: [],
    publicatiiRelevante: [
      {
        title: 'Impact of income and unemployment on happiness: Panel data evidence for European countries',
        journal: 'Applied Economics Letters',
        year: 2023,
        authors: 'Cimpoeru, S.'
      },
      {
        title: 'Two-speed integration? A comparative analysis of barriers and resilience strategies of young migrants in vulnerable conditions in Romania',
        journal: 'Social Sciences',
        year: 2023,
        authors: 'Cimpoeru, S., Roman, M., Roșca, V. I., Prada, E. M., Manafi, I., & Mureșan, L.'
      },
      {
        title: 'Mapping Regional Employment Divergences in North–South Europe Through Spatial Models',
        journal: 'Economies',
        year: 2025,
        authors: 'Belu, M. B., Cimpoeru, S., Popescu, M. E., & Cristescu, A.'
      },
      {
        title: 'Mapping and modelling the main determinants of Migration Flows at the NUTS2 Level in European Union using Spatial Data Analysis Techniques',
        journal: 'Management & Marketing',
        year: 2023,
        authors: 'Prada, E. M., & Cimpoeru, S.'
      },
      {
        title: 'The Impact of Youth Immigration on Unemployment: Macro and Micro Evidence from Europe',
        journal: 'Economic Computation & Economic Cybernetics Studies & Research',
        year: 2025,
        authors: 'Roman, M., & Cimpoeru, S.'
      },
      {
        title: 'Where are the Integration Policies Successful? Explaining Immigrants\' Integration in Europe with Multi-Dimensional Measures',
        journal: 'Statistika: Statistics & Economy Journal',
        year: 2025,
        authors: 'Roman, M., Cimpoeru, S., Prada, E. M., & Manafi, I.'
      },
      {
        title: 'Economic Determinants of Birth Rate in Romania. A Spatial Analysis',
        journal: 'Journal of Social and Economic Statistics',
        year: 2023,
        authors: 'Cimpoeru, S., & Pisică, A.'
      },
      {
        title: 'Refugees\' Self-Perceived Discrimination in Europe. A Statistical Analysis',
        journal: 'Romanian Statistical Review',
        year: 2021,
        authors: 'Cimpoeru, S., Kobeissi, A., Mohammad, H., Roman, M.'
      },
      {
        title: 'What Triggers Poverty of Young Nationals and Young Migrants? A Comparative Macroeconomic Approach',
        journal: 'Journal of Social and Economic Statistics',
        year: 2020,
        authors: 'Cimpoeru, S.'
      },
      {
        title: 'Modelarea econometrică a crizelor financiar-bancare',
        journal: 'Editura ASE',
        year: 2015,
        authors: 'Cimpoeru, S.'
      },
      {
        title: 'Using self-organizing maps for assessing systemic risk',
        journal: 'Economic Computation and Economic Cybernetics Studies and Research',
        year: 2015,
        authors: 'Cimpoeru, S.'
      },
      {
        title: 'A Logistic Model on Panel Data for Systemic Risk Assessment',
        journal: 'Journal of Applied Quantitative Methods',
        year: 2015,
        authors: 'Cimpoeru, S.'
      },
      {
        title: 'Models for evaluating financial crisis',
        journal: 'Theoretical and Applied Economics',
        year: 2015,
        authors: 'Cimpoeru, S.'
      },
      {
        title: 'Neural networks and their application in credit risk assessment. Evidence from the Romanian market',
        journal: 'Technological and Economic Development of Economy',
        year: 2011,
        authors: 'Cimpoeru, S. S.'
      }
    ],
    proiecteCercetare: [
      'EMpowerment through liquid Integration of Migrant Youth in vulnerable conditions (MIMY) – proiect Horizon 2020 (2020–2023), membru al echipei și Deputy Team Leader pentru ASE',
      'Agenda pentru competențe România 2020–2025 – proiect național, membru în echipa de cercetare (2018–2020)',
      'Evaluarea instabilității financiare și a riscului sistemic utilizând metode econometrice și tehnici data mining – proiect postdoctoral, manager de proiect (2014–2015)'
    ],
    cvProfiluri: [
      { tip: 'Google Scholar', url: 'https://scholar.google.com/citations?user=MJPFe_cAAAAJ&hl=ro&oi=ao' },
      { tip: 'ResearchGate', url: 'https://www.researchgate.net/profile/Smaranda-Cimpoeru?ev=hdr_xprf' }
    ]
  };

  return <ProfesorProfile data={data} />;
}