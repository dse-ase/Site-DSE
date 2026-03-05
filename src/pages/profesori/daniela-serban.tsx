import { ProfesorProfile } from '../../components/ProfesorProfile';
import photoDanielaSerban from '../../assets/Poze Profesori/Daniela Serban.jpg';
export function DanielaSerbanPage() {
  const data = {
    name: 'ȘERBAN Daniela',
    initials: 'ȘD',
    photo: photoDanielaSerban,
    role: 'Profesor Universitar Dr.',
    specializations: [
      'Statistică aplicată în afaceri',
      'Econometrie',
      'Analiza performanței sistemelor educaționale',
      'Politici publice și transport durabil',
      'Cercetare socio-economică'
    ],
    email: 'daniela.serban@ase.ro',
    facultate: 'Facultatea de Administrarea Afacerilor, cu predare în limbi străine',
    activitateDidactica: [
      'Statistică pentru afaceri',
      'Econometrie'
    ],
    domeniiCercetare: [
      'Statistică aplicată în afaceri',
      'Econometrie',
      'Analiza performanței sistemelor educaționale',
      'Politici publice și transport durabil',
      'Cercetare socio-economică'
    ],
    tezeDoctorat: [],
    publicatiiRelevante: [],
    proiecteCercetare: [
      'YOUTH – Youngster Overhauls Today\'s Urban Transport Habits, Intelligent Energy Europe / FP7',
      'TAPESTRY – Travel Awareness Publicity and Educational Strategies for Tourists, FP5',
      'ROSE–FABIZ – Creșterea Performanței Sistemului Educațional Universitar prin Reducerea Abandonului Academic'
    ],
    cvProfiluri: []
  };

  return <ProfesorProfile data={data} />;
}
