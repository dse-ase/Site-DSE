import { ProfesorProfile } from '../../components/ProfesorProfile';

export function RazvanBarbulescuPage() {
  const data = {
    name: 'BĂRBULESCU Răzvan',
    initials: 'BR',
    role: 'Lector Universitar Dr.',
    specializations: [
      'Demografie și previziuni privind fertilitatea, mortalitatea și migrația în România',
      'Economia familiei și modele microeconomice ale deciziilor colective',
      'Piața muncii, managementul generației Z și valoarea propusă angajaților',
      'Sustenabilitatea sistemelor de pensii publice și securitate socială',
      'Relația dintre ajutorul extern și dezvoltarea umană',
      'AI și Machine learning în educație'
    ],
    email: 'razvan.barbulescu@csie.ase.ro',
    facultate: 'Facultatea de Cibernetică, Statistică și Informatică Economică',
    activitateDidactica: [
      'Econometrie',
      'Statistică',
      'Analiza Datelor',
      'Comunicare Corporativă (alte departamente)',
      'Doctrine Economice Clasice (alte departamente)',
      'Project Management (alte departamente)',
      'Gestiunea carierei (alte departamente)'
    ],
    domeniiCercetare: [
      'Demografie și previziuni privind fertilitatea, mortalitatea și migrația în România',
      'Economia familiei și modele microeconomice ale deciziilor colective',
      'Piața muncii, managementul generației Z și valoarea propusă angajaților',
      'Sustenabilitatea sistemelor de pensii publice și securitate socială',
      'Relația dintre ajutorul extern și dezvoltarea umană',
      'AI și Machine learning în educație'
    ],
    tezeDoctorat: [],
    publicatiiRelevante: [
      {
        title: 'Teorii și modele microeconomice ale deciziilor colective luate în familie',
        journal: 'Editura ASE, București',
        year: 2014,
        authors: 'Bărbulescu, R.'
      },
      {
        title: 'Managing \'Generation Z\' based on Differenced in Employee Value Propositions - Romania versus the EU',
        journal: 'Journal of Applied Quantitative Methods',
        year: 2022,
        authors: 'Bărbulescu, R.'
      },
      {
        title: 'Is Foreign Aid Effective In Promoting Development? The African Case',
        journal: 'Transformations In Business & Economics',
        year: 2013,
        authors: 'Staicu, G., Bărbulescu, R., Moraru, L.C.'
      },
      {
        title: 'Romania\'s Demographic Decline – What\'s Next',
        journal: 'The Romanian Economic and Business Review',
        year: 2012,
        authors: 'Bărbulescu, R.'
      },
      {
        title: 'Criza care va veni – o analiză pe termen mediu și lung a modificărilor demografice și a efectelor acestora asupra pieței muncii',
        journal: 'Revista OEconomica',
        year: 2010,
        authors: 'Bărbulescu, R., Dobre, M.'
      },
      {
        title: 'A Study of the Relationship between Foreign Aid and Human Development in Africa',
        journal: 'International Development, InTech Publishing',
        year: 2017,
        authors: 'Staicu, G., Bărbulescu, R.'
      }
    ],
    proiecteCercetare: [
      'Membru proiect: Managementul riscului de țară din perspectiva aderării la UE (Contract nr. 1242, 2006-2007, finanțat de CNCSIS)',
      'Membru proiect: Is the Romanian Investor Motivated to be Greedy or Cautious? Impact of Information Asymmetry on Liquidity and Volatility (Contract 5868/2006, 2006-2007, finanțat de CEEX)',
      'Cercetător post-doctoral: Sustenabilitatea sistemului de pensii publice. O analiză formală (Program SPODE, POSDRU/89/1.5/S 61755, 2011-2013)'
    ],
    cvProfiluri: [
      { tip: 'Google Scholar', url: 'https://scholar.google.com/citations?hl=en&tzom=-120&user=hsWbXHgAAAAJ' },
      { tip: 'ORCID', url: 'https://orcid.org/0000-0001-9931-9668' }
    ]
  };

  return <ProfesorProfile data={data} />;
}