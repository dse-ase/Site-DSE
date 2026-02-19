import { ProfesorProfile } from '../../components/ProfesorProfile';

export function IrinaDraganPage() {
  const data = {
    name: 'Irina-Maria DRĂGAN',
    initials: 'ID',
    role: 'Conferențiar Universitar Dr.',
    specializations: ['Statistică economică și socială', 'Econometrie și modele econometrice', 'Măsurarea și analiza statistică a calității vieții', 'Analiza riscului în economie', 'Indicatori macroeconomici și conturi naționale'],
    email: 'irina.dragan@csie.ase.ro',
    facultate: 'Facultatea de Cibernetică, Statistică și Informatică Economică',
    activitateDidactica: [
      'Bazele Statisticii',
      'Statistică economică',
      'Econometrie',
      'Modele econometrice',
      'Statistică pentru managementul afacerilor',
      'Statistică macroeconomică',
      'Măsurarea și analiza statistică a riscului în economie',
      'Sistemul Conturilor Naționale'
    ],
    domeniiCercetare: [
      'Statistică economică și socială',
      'Econometrie și modele econometrice',
      'Măsurarea și analiza statistică a calității vieții',
      'Analiza riscului în economie',
      'Indicatori macroeconomici și conturi naționale'
    ],
    tezeDoctorat: [],
    publicatiiRelevante: [],
    proiecteCercetare: [],
    cvProfiluri: []
  };

  return <ProfesorProfile data={data} />;
}
