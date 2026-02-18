import { ProfesorProfile } from '../../components/ProfesorProfile';

export function SilviaCristachePage() {
  const data = {
    name: 'CRISTACHE Silvia-Elena',
    initials: 'CS',
    role: 'Profesor Universitar Dr.',
    specializations: [
      'Statistică economică și socială',
      'Economie regională',
      'Economia informală',
      'Indicatori socio-economici',
      'Analize statistice uni- și multivariate',
      'Calitatea vieții și stiluri de viață'
    ],
    email: 'silvia.cristache@csie.ase.ro',
    facultate: 'Facultatea de Cibernetică, Statistică și Informatică Economică',
    activitateDidactica: [],  // Gol - nu va fi afișat
    domeniiCercetare: [
      'Statistică economică și socială',
      'Economie regională',
      'Economia informală',
      'Indicatori socio-economici',
      'Analize statistice uni- și multivariate',
      'Calitatea vieții și stiluri de viață'
    ],
    tezeDoctorat: [],  // Gol - nu va fi afișat
    publicatiiRelevante: [],  // Gol - nu va fi afișat
    proiecteCercetare: [
      'Proiecte CEEX – PNCDI II (Parteneriate, CERES)',
      'Granturi CNCSIS – tip A',
      'Proiecte cu mediul de afaceri în domeniul pieței IT și al serviciilor medicale',
      'Proiecte privind economia informală, stilurile de viață și indicatorii socio-economici'
    ],
    cvProfiluri: []  // Gol - nu va fi afișat
  };

  return <ProfesorProfile data={data} />;
}
