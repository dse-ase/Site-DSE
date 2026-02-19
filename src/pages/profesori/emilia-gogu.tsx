import { ProfesorProfile } from '../../components/ProfesorProfile';

export function EmiliaGoguPage() {
  const data = {
    name: 'GOGU Emilia',
    initials: 'GE',
    role: 'Conferențiar Universitar Dr.',
    specializations: [
      'Statistică economică și socială',
      'Indicatori economici și ai calității vieții',
      'Econometrie și analiză statistică aplicată',
      'Asigurarea calității în învățământul superior',
      'Politici educaționale și evaluarea performanței academice'
    ],
    email: 'emilia.gogu@csie.ase.ro',
    birou: 'Compartiment Cercetare ARACIS',
    facultate: 'Facultatea de Cibernetică, Statistică și Informatică Economică',
    activitateDidactica: [
      'Statistică macroeconomică',
      'Statistică',
      'Econometrie'
    ],
    domeniiCercetare: [
      'Statistică economică și socială',
      'Indicatori economici și ai calității vieții',
      'Econometrie și analiză statistică aplicată',
      'Asigurarea calității în învățământul superior',
      'Politici educaționale și evaluarea performanței academice'
    ],
    tezeDoctorat: [],
    publicatiiRelevante: [
      {
        title: 'Monografie Statistică a Academiei de Studii Economice din București. 100 de promoții de absolvenți Vol 1 si Vol 2',
        journal: 'Editura ASE București',
        year: 2020,
        authors: 'Gogu, E. et al.'
      },
      {
        title: 'Genesis and evolution of higher education in Romania - in statistical data',
        journal: 'Editura Economică',
        year: 2018,
        authors: 'Gogu, E. et al.'
      },
      {
        title: 'Evoluţia centenară a învăţământului în România',
        journal: 'Editura Economică',
        year: 2018,
        authors: 'Gogu, E. et al.'
      },
      {
        title: 'Statistica în turism şi comerţ - teorie şi studii de caz',
        journal: 'Editura Oscar Print',
        year: 2009,
        authors: 'Gogu, E. et al.'
      },
      {
        title: 'Statistică: Abordări teoretice și practice. Vol. 1. Statistică descriptivă',
        journal: 'Editura ASE',
        year: 2024,
        authors: 'Gogu, E. et al.'
      },
      {
        title: 'Teoria şi tehnica sondajului statistic',
        journal: 'Editura Oscar Print',
        year: 2009,
        authors: 'Gogu, E. et al.'
      },
      {
        title: 'The Economic Impact and the Decoupling of Economic Growth from Renewable Energy Consumption within the European Union in the Context of Social Well-Being',
        journal: 'Eastern European Economics, ISSN 15579298, 00128775',
        year: 2025,
        authors: 'Gogu, E., Mihai, F., & Aleca, O. E.'
      },
      {
        title: 'The Risk of Earthquakes in Romania – A Statistical Point of View',
        journal: 'Economic Computation and Economic Cybernetics Studies and Research, ISSN 0424-267X, vol 58, nr 3, pg 5-19',
        year: 2024,
        authors: 'Isaic-Maniu A., Gogu E., Dragan I.E., Constantin F.'
      },
      {
        title: 'Determinants of Foreign Direct Investment in the Least Developed Countries: Static and Dynamic Panel Data Evidence',
        journal: 'Economic Computation and Economic Cybernetics Studies and Research, ISSN 0424-267X, vol 56, nr 3, pg 21-36',
        year: 2022,
        authors: 'Apostu S.A, Tiron-Tudor A., Socol A, Ivan O.R, Mihăescu C., Gogu E'
      },
      {
        title: 'A Creative Statistical Model of Geometric Area Index Number for Adequate Estimation of ESG, DESG Goals Achievement, and Other Macroeconomic (Im)balances Dynamics',
        journal: 'Mathematics, ISSN (online): 2227-7390, vol 10, nr 16, pg 1-26',
        year: 2022,
        authors: 'Savoiu, G.; Matei, S.; Čudanov, M.; Gogu, E.'
      },
      {
        title: 'Debt Overhang, Gazelles\' Growth, and Fiscal Policy: A Note from the Quantile Regression Approach',
        journal: 'Sustainability, ISSN (Online): 2071-1050, vol 13, nr 18',
        year: 2021,
        authors: 'Anton S. G., Onofrei M., Gogu E., Neculau B. C., Mihai F.'
      },
      {
        title: 'The Challenges of the Green Economy in Romania. Scientific Literature',
        journal: 'Sustainability, ISSN (Online): 2071-1050, vol 13, nr 23',
        year: 2021,
        authors: 'Mihai F., Aleca O.E. Gogu E., Dobrin C., Gheorghe M.'
      },
      {
        title: 'Assessing the Impact of Clean Energy on Sustainable Economic Growth in European Union Member States',
        journal: 'Economic Computation and Economic Cybernetics Studies and Research, ISSN 0424-267X, vol 55, nr 4, pg 183-197',
        year: 2021,
        authors: 'Gogu E., Radu C., Deaconu A., Frăsineanu C., Triculescu M., Mișu S., Toma S.'
      },
      {
        title: 'Impact of education and economic growth on labour migration in the european union. A panel data analysis',
        journal: 'E & M Ekonomie a Management, ISSN 1212-3609, vol 23, nr 4, pg 55-67',
        year: 2020,
        authors: 'Istudor Nicolae, Dinu Vasile, Gogu Emilia, Prada Elena-Maria, Petrescu Irina-Elena'
      },
      {
        title: 'Sustainable economic development, economic equilibrium and work productivity on industries of the Romanian national economy, 2000-2015',
        journal: 'Economic Computation and Economic Cybernetics Studies and Research, ISSN 0424-267X',
        year: 2018,
        authors: 'Deaconu A., Gogu E., Radu C., Tudor M.'
      },
      {
        title: 'Econometric micro-and macroeconomic modelling in Romania: finding simplicity in complexity and generating statistical simplexity',
        journal: 'Economic Computation and Economic Cybernetics Studies and Research, ISSN 0424-267X',
        year: 2015,
        authors: 'Săvoiu Gh., Dinu V., Gogu E., Zurub Hosney'
      }
    ],
    proiecteCercetare: [
      'Proiectul QUALITAS – Dezvoltarea și consolidarea culturii calității în învățământul superior românesc',
      'Proiectul QAFIN – Îmbunătățirea politicilor publice în învățământul superior',
      'Proiectul ROSE – Acces la Studii și Echitate pentru Toți (ASEt)',
      'Proiecte PNCDI II – Parteneriate (KnowHow Reg, aPort, eMulticult, DEMOS)',
      'Proiectul „ÎNVĂȚĂMÂNTUL SUPERIOR DIN MOLDOVA" (PÎSM) Programul de Îmbunătățire a Învățământului Superior (PÎÎS). Subproiectul „Consolidarea Educației în Cariera Didactică pentru Performanța Profesională (EduPerformance)"',
      'Proiectul „ÎNVĂȚĂMÂNTUL SUPERIOR DIN MOLDOVA" (PÎSM) - Modernizarea curricula pentru formarea competențelor profesionale în Inginerie, Electronică, Automatică și Robotică, ca răspuns la cerințele Industriei 4.0 - GEAR 4.0',
      'Proiect "La consolidation de la capacité et de la fonctionnalité du système institutionnel de management de la qualité dans l\'Université d\'Etat de Moldova"',
      'Proiect "Creșterea calității actului didactic, deontologie și etică academică" - Universitatea „Aurel Vlaicu" din Arad',
      'Arhitectură pentru managementul cunoştinţelor în domeniul mediului, social şi economic în vederea elaborarii strategiilor de dezvoltare regională sustenabilă (KnowHow Reg)'
    ],
    cvProfiluri: [
      { tip: 'Google Scholar', url: 'https://scholar.google.com/scholar?hl=ro&as_sdt=0%2C5&q=GOGU+EMILIA&oq=' },
      { tip: 'ResearchGate', url: 'https://www.portal.cercetare.ase.ro/dashboard/citari' },
      { tip: 'ORCID', url: 'https://orcid.org/0000-0002-7333-7128' }
    ]
  };

  return <ProfesorProfile data={data} />;
}