import { ProfesorProfile } from '../../components/ProfesorProfile';
import photoEmiliaTitan from '../../assets/Poze Profesori/Emilia Titan.jpg';
export function EmiliaTitanPage() {
  const data = {
    name: 'ȚIȚAN Emilia',
    initials: 'ȚE',
    photo: photoEmiliaTitan,
    role: 'Profesor Universitar Dr.',
    specializations: [
      'Statistică socială',
      'Statistică macroeconomică',
      'Modelare econometrică',
      'Analiza multidimensională a datelor',
      'Piața muncii, ocupare și salarii',
      'Migrație și îmbătrânire demografică',
      'Dezvoltare durabilă și politici publice'
    ],
    email: 'emilia.titan@csie.ase.ro',
    facultate: 'Facultatea de Cibernetică, Statistică și Informatică Economică',
    activitateDidactica: [
      'Statistică',
      'Econometrie',
      'Metode cantitative în studiul pieței',
      'Statistică socială',
      'Statistică macroeconomică'
    ],
    domeniiCercetare: [
      'Statistică socială',
      'Statistică macroeconomică',
      'Modelare econometrică',
      'Analiza multidimensională a datelor',
      'Piața muncii, ocupare și salarii',
      'Migrație și îmbătrânire demografică',
      'Dezvoltare durabilă și politici publice'
    ],
    tezeDoctorat: [],  // Gol - nu va fi afișat
    publicatiiRelevante: [],  // Gol - nu va fi afișat
    proiecteCercetare: [],  // Gol - nu va fi afișat
    cvProfiluri: []  // Gol - nu va fi afișat (deși există Google Scholar, link-ul nu este furnizat)
  };

  return <ProfesorProfile data={data} />;
}
