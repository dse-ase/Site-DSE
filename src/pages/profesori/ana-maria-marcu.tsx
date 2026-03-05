import { ProfesorProfile } from '../../components/ProfesorProfile';
import photoMarcuAnaMaria from '../../assets/Poze Profesori/MARCU Ana-Maria.jpg';

export function AnaMariaMarcuPage() {
  const data = {
    name: 'Ana-Maria MARCU',
    initials: 'AM',
    photo: photoMarcuAnaMaria,

    role: 'Asistent Cercetare drd.',
    specializations: ['Statistică aplicată', 'Econometrie', 'Dezvoltare regională'],
    email: 'anamaria.marcu@csie.ase.ro',
    activitateDidactica: [
      'Pregătirea și susținerea seminariilor la disciplina Statistică',
      'Pregătirea și susținerea seminariilor la disciplina Demografie și statistică socială',
      'Activitate de cercetare în cadrul Asociației Române de Științe Regionale',
      'Activitate de expertiză în cadrul Centrului de Cercetări pentru Prognoză Macroeconomică și Regională'
    ],
    domeniiCercetare: [
      'Statistică aplicată și econometrie',
      'Analize cantitative socio-economice',
      'Econometrie aplicată și modele pe date de tip panel',
      'Analiza seriilor de timp și modelare neparametrică',
      'Dezvoltare regională și economie socială',
      'Previziune economică'
    ],
    tezeDoctorat: [],
    publicatiiRelevante: [
      {
        title: 'The complex relationship between air transport infrastructure and regional development. An empirical inquiry',
        journal: 'Regional Science Inquiry, vol. XV, pp. 61-80',
        year: 2023,
        authors: 'Constantin, D.L., Marcu, A.M.'
      },
      {
        title: 'Meeting The Unexpected: The Very Sensitive Behaviour of Air Transport Sector During the COVID-19 Pandemic and The Lessons Learnt',
        journal: 'Journal of Academic Research in Economics, Vol. 16, No.2, July 2024, ISSN: 2066-0855, RePEc-Ideas, EBSCO, CEEOL, Cabell\'s, Index Copernicus, CSA, American Association for Advancement of Science',
        year: 2024,
        authors: 'D.L. Constantin, A.M. Marcu'
      }
    ],
    proiecteCercetare: [
      'Place-based Economic Policy in EU\'s Periphery – fundamental research in collaborative development and local resilience. Projections for Romania and Moldova (PEPER)',
      'Analiza calitativă și cantitativă a abandonului pentru studenții ASE'
    ],
    cvProfiluri: [
      { tip: 'ResearchGate', url: 'https://www.researchgate.net/profile/Ana-Maria-Marcu-4?ev=hdr_xprf' },
      { tip: 'ORCID', url: 'https://orcid.org/0009-0002-6130-3876' }
    ]
  };

  return <ProfesorProfile data={data} />;
}