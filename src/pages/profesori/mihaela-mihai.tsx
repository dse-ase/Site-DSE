import { ProfesorProfile } from '../../components/ProfesorProfile';

export function MihaelaMihaiPage() {
  const data = {
    name: 'MIHAI Mihaela',
    initials: 'MM',
    role: 'Conferențiar Universitar Dr.',
    specializations: [
      'Statistică aplicată și econometrie',
      'Analiza excluziunii sociale și a tinerilor NEET',
      'Piața muncii și incluziunea socială',
      'Analize cantitative socio-economice',
      'Modelare și analiză statistică multidimensională'
    ],
    email: 'mihaela.mihai@csie.ase.ro',
    facultate: 'Facultatea de Cibernetică, Statistică și Informatică Economică',
    activitateDidactica: [
      'Statistică',
      'Econometrie',
      'Matematică economică',
      'Bazele informaticii',
      'Activități de seminarizare și predare',
      'Analize cantitative socio-economice la nivel macroeconomic',
      'Activitate de cercetare științifică la Institutul de Economie Națională – Academia Română'
    ],
    domeniiCercetare: [
      'Statistică aplicată și econometrie',
      'Analiza excluziunii sociale și a tinerilor NEET',
      'Piața muncii și incluziunea socială',
      'Analize cantitative socio-economice',
      'Modelare și analiză statistică multidimensională'
    ],
    tezeDoctorat: [],
    publicatiiRelevante: [],
    proiecteCercetare: [
      'ASEInovA – Sprijinirea, susținerea și promovarea antreprenoriatului și inovării în rândul studenților ASE',
      'Optimizarea infrastructurii educaționale a ASE pentru dezvoltarea abilităților practice',
      'Agenda competențe România 2020–2025',
      'Proiecte POSDRU privind cercetarea doctorală și postdoctorală în științe economice'
    ],
    cvProfiluri: [
      { tip: 'Google Scholar', url: 'https://scholar.google.com/citations?user=HHvDTVEAAAAJ&hl=ro' },
      { tip: 'ResearchGate', url: 'https://www.researchgate.net/profile/Mihaela-Mihai?ev=hdr_xprf' },
      { tip: 'ORCID', url: 'https://orcid.org/my-orcid?orcid=0000-0003-0326-5402' }
    ]
  };

  return <ProfesorProfile data={data} />;
}