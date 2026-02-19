import { ProfesorProfile } from '../../components/ProfesorProfile';

export function MirunaMazurencuPage() {
  const data = {
    name: 'MAZURENCU-MARINESCU-PELE Miruna',
    initials: 'MM',
    role: 'Profesor Universitar Dr.',
    specializations: [
      'Modelare econometrică și statistică aplicată',
      'Evaluarea afacerilor și fezabilitate',
      'Demografie și analiză social-economică',
      'Statistică aplicată în economie',
      'Consultanță în Statistică'
    ],
    email: 'miruna@ase.ro',
    facultate: 'Facultatea de Cibernetică, Statistică și Informatică Economică',
    activitateDidactica: [
      'Econometrie',
      'Statistică',
      'Evaluarea afacerilor electronice',
      'Statistica investițiilor',
      'Evaluare și fezabilitate',
      'Analiza statistico-economică în industrie',
      'Demografie',
      'Consultanță în Statistică'
    ],
    domeniiCercetare: [
      'Modelare econometrică și statistică aplicată',
      'Analiza statistico-economică a fenomenelor economice',
      'Evaluarea afacerilor și fezabilitate',
      'Demografie și analiză social-economică',
      'Statistică aplicată în economie'
    ]
  };

  return <ProfesorProfile data={data} />;
}
