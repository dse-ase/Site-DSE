import { ProfesorProfile } from '../../components/ProfesorProfile';
import photoAdrianOtoiu from '../../assets/Poze Profesori/Adrian Otoiu poza dse v2.jpg';

export function AdrianOtoiuPage() {
  const data = {
    name: 'OȚOIU Adrian',
    initials: 'OA',
    photo: photoAdrianOtoiu,
    role: 'Lector Universitar Dr.',
    specializations: [
      'Statistică aplicată și econometrie',
      'Indicatori compoziți: metodologie și aplicații în domeniul bunăstării umane și a mediului',
      'Migrație și demografie',
      'Piața muncii (modificarea structurii ocupaționale) și politici publice',
      'Data Science și analiză de date'
    ],
    email: 'adrian.otoiu@csie.ase.ro',
    facultate: 'Facultatea de Cibernetică, Statistică și Informatică Economică',
    activitateDidactica: [
      'Statistică',
      'Econometrie',
      'Data Mining'
    ],
    domeniiCercetare: [
      'Statistică aplicată și econometrie',
      'Indicatori compoziți: metodologie și aplicații în domeniul bunăstării umane și a mediului',
      'Migrație și demografie',
      'Piața muncii (modificarea structurii ocupaționale) și politici publice',
      'Data Science și analiză de date'
    ],
    tezeDoctorat: [],
    publicatiiRelevante: [
      {
        title: 'Does the unemployment invariance hypothesis hold for Romania?',
        journal: 'Applied Economics Letters, Volume 23, Issue 12',
        year: 2016,
        authors: 'Oțoiu, Adrian, Titan, Emilia'
      },
      {
        title: 'Are the variables used in building composite indicators of well-being relevant? Validating composite indexes of well-being',
        journal: 'Ecological Indicators, vol. 46',
        year: 2014,
        authors: 'Oțoiu, Adrian, Titan, Emilia, Dumitrescu, Remus'
      },
      {
        title: 'Open issues in composite indicators. A starting point and a reference on some state-of-the-art issues',
        journal: 'Rome: Roma TrE-Press',
        year: 2021,
        authors: 'Terzi, S., Oțoiu, A., Grimaccia, E., Mazziotta, M., Pareto, A.'
      },
      {
        title: 'What does a non-shifting Beveridge curve tell about Romania\'s labour market?',
        journal: 'Applied Economics Letters, 27 (18)',
        year: 2020,
        authors: 'Oțoiu, Adrian, Țițan, Emilia'
      },
      {
        title: 'Analysing Labour-Based Estimates of Automation and Their Implications. A Comparative Approach from an Economic Competitiveness Perspective',
        journal: 'Journal of Competitiveness, 14(3)',
        year: 2022,
        authors: 'Oțoiu, Adrian, Titan, Emilia, Paraschiv, Dorel Mihai, Dinu, Vasile, Manea, Daniela Ioana'
      }
    ],
    proiecteCercetare: [
      'POSDRU – Performanță și excelență în cercetarea doctorală și postdoctorală',
      'Agenda Competențe România 2020–2025',
      'Excelență în cercetarea interdisciplinară doctorală și postdoctorală',
      'Proiecte privind indicatori de bunăstare, migrație și politici socio-economice'
    ],
    cvProfiluri: [
      { tip: 'Google Scholar', url: 'https://scholar.google.ro/citations?user=HOp2DPIAAAAJ&hl=ro&oi=ao' },
      { tip: 'ORCID', url: 'https://orcid.org/0000-0001-5830-5462' },
      { tip: 'Scopus', url: 'https://www.scopus.com/authid/detail.uri?authorId=56375694100' }
    ]
  };

  return <ProfesorProfile data={data} />;
}