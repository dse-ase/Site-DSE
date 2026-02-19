import { ProfesorProfile } from '../../components/ProfesorProfile';

export function MihaelaCovrigPage() {
  const data = {
    name: 'COVRIG Mihaela',
    initials: 'CM',
    role: 'Conferențiar Universitar Dr.',
    specializations: [
      'Statistică și econometrie',
      'Analiza seriilor de timp',
      'Modele stochastice',
      'Statistică matematică și probabilități',
      'Asigurări și matematici actuariale',
      'Metode cantitative aplicate în economie',
      'Analiza riscului și evaluarea daunelor'
    ],
    email: 'mihaela.covrig@csie.ase.ro',
    facultate: 'Facultatea de Cibernetică, Statistică și Informatică Economică',
    activitateDidactica: [
      'Statistică',
      'Econometrie',
      'Serii de timp',
      'Procese și modele stochastice',
      'Metode cantitative în actuarial și asigurări',
      'Statistică matematică și probabilități',
      'Algebră și analiză matematică',
      'Matematici financiare și actuariale',
      'Metode și tehnici de gradare a datelor',
      'Estimarea repartițiilor de severitate a daunelor'
    ],
    domeniiCercetare: [
      'Statistică și econometrie',
      'Analiza seriilor de timp',
      'Modele stochastice',
      'Statistică matematică și probabilități',
      'Asigurări și matematici actuariale',
      'Metode cantitative aplicate în economie',
      'Analiza riscului și evaluarea daunelor'
    ],
    tezeDoctorat: [],
    publicatiiRelevante: [
      {
        title: 'Discovering the tutors\' perspective on the quality of internship programs in a pandemic context',
        journal: 'Management & Marketing',
        year: 2022,
        authors: 'Covrig, M. et al.'
      },
      {
        title: 'Equal Opportunities and Gender Equality: Some Considerations on Personal Loan and Insurance Markets',
        journal: 'Ovidius University Annals',
        year: 2015,
        authors: 'Covrig, M. et al.'
      },
      {
        title: 'Using R in Generalized Linear Models',
        journal: 'Romanian Statistical Review',
        year: 2015,
        authors: 'Covrig, M. et al.'
      },
      {
        title: 'A Discrete Time Insurance Model with Reinvested Surplus and a Fuzzy Number Interest Rate',
        journal: 'Procedia Economics and Finance',
        year: 2015,
        authors: 'Covrig, M. et al.'
      }
    ],
    proiecteCercetare: [
      'Practica inteligent dezvoltată – PRIDE-U (POCU, 2021–2022)',
      'SOCERT – Societatea cunoașterii, dinamism prin cercetare (POSDRU, postdoctorand, 2014–2015)',
      'Sisteme moderne de practică pentru facilitarea accesului la piața muncii (POSDRU, expert, 2010–2013)',
      'Proiecte privind planificarea producției, evaluarea politicilor familiale, asigurări și risc',
      'Proiecte finanțate prin POCU / POSDRU',
      'Proiecte finanțate prin PNCDI II – Parteneriate',
      'Proiecte finanțate prin CEEX',
      'Proiecte finanțate prin CNCSIS'
    ],
    cvProfiluri: []
  };

  return <ProfesorProfile data={data} />;
}
