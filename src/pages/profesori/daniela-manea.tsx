import { ProfesorProfile } from '../../components/ProfesorProfile';
import photoDanielaManea from '../../assets/Poze Profesori/Daniela Manea.jpg';

export function DanielaManea() {
  const data = {
    name: 'MANEA Daniela Ioana',
    initials: 'MD',
    photo: photoDanielaManea,
    role: 'Profesor Universitar Dr.',
    specializations: [
      'Analize cantitative socio-economice la nivel macroeconomic',
      'Modelare statistică și econometrică',
      'Piața muncii, ocupare, salarii și politici publice',
      'Dezvoltare durabilă, mediu și politici bazate pe dovezi',
      'Statistică aplicată și previziune economică'
    ],
    email: 'daniela.manea@csie.ase.ro',
    facultate: 'Facultatea de Cibernetică, Statistică și Informatică Economică',
    activitateDidactica: [
      'Statistică',
      'Econometrie'
    ],
    domeniiCercetare: [
      'Analize cantitative socio-economice la nivel macroeconomic',
      'Modelare statistică și econometrică',
      'Piața muncii, ocupare, salarii și politici publice',
      'Dezvoltare durabilă, mediu și politici bazate pe dovezi',
      'Statistică aplicată și previziune economică'
    ],
    tezeDoctorat: [],  // Gol - nu va fi afișat
    publicatiiRelevante: [],  // Gol - nu va fi afișat
    proiecteCercetare: [
      'ASE 4.0 – Universitatea sustenabilă prin digitalizare (PNRR, 2022–2025)',
      'SIPOCA 593 – Sistem de monitorizare a fluxurilor de deșeuri (2022–2023)',
      'Manager în acțiune – stagii de practică în domeniul economic (POCU, 2021–2023)',
      'Multiple proiecte CNFIS-FDI privind dezvoltarea competențelor digitale, sustenabilitate și infrastructură educațională'
    ],
    cvProfiluri: []  // Gol - nu va fi afișat
  };

  return <ProfesorProfile data={data} />;
}
