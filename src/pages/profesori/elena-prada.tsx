import { ProfesorProfile } from '../../components/ProfesorProfile';
import photoElenaPrada from '../../assets/Poze Profesori/Elena Prada.jpg';
export function ElenaPradaPage() {
  const data = {
    name: 'PRADA Elena-Maria',
    initials: 'PE',
    photo: photoElenaPrada,
    role: 'Lector Universitar Dr.',
    specializations: [
      'Statistică aplicată și econometrie',
      'Migrație internațională și integrare socio-economică',
      'Analiza pieței muncii',
      'Metode cantitative și analiza datelor',
      'Indicatori socio-economici',
      'Analiza spațială a datelor socio-economice'
    ],
    email: 'elena.prada@csie.ase.ro',
    birou: '2603',
    facultate: 'Facultatea de Cibernetică, Statistică și Informatică Economică',
    activitateDidactica: [
      'Statistică',
      'Statistică macroeconomică',
      'Econometrie',
      'Statistică spațială',
      'Econometrie spațială',
      'Econometrics',
      'Spatial Econometrics'
    ],
    domeniiCercetare: [
      'Statistică aplicată și econometrie',
      'Migrație internațională și integrare socio-economică',
      'Analiza pieței muncii',
      'Metode cantitative și analiza datelor',
      'Indicatori socio-economici',
      'Analiza spațială a datelor socio-economice'
    ],
    tezeDoctorat: [],
    publicatiiRelevante: [],
    proiecteCercetare: [
      'Proiect Orizont 2020 „EMpowerment through liquid Integration of Migrant Youth in vulnerable conditions" (MiMy)',
      'Proiect „EoM – Comunități solidare și inclusive pentru migranți în România", Active Citizens Fund',
      'Proiect Agenda pentru competențe România 2020–2025, Ministerul Muncii și Justiției Sociale'
    ],
    cvProfiluri: [
      { tip: 'Google Scholar', url: 'https://scholar.google.com/citations?user=q1QvTJ0AAAAJ&hl=en' },
      { tip: 'ResearchGate', url: 'https://www.researchgate.net/profile/Elena-Prada-2?ev=hdr_xprf' },
      { tip: 'ORCID', url: 'https://orcid.org/0000-0001-7215-3207' }
    ]
  };

  return <ProfesorProfile data={data} />;
}