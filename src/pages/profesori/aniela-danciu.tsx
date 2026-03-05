import { ProfesorProfile } from '../../components/ProfesorProfile';
import photoAnielaDanciu from '../../assets/Poze Profesori/Aniela Danciu.jpg';

export function AnielaDanciuPage() {
  const data = {
    name: 'Aniela Raluca DANCIU',
    initials: 'AD',
    photo: photoAnielaDanciu,
    role: 'Conf. Univ. Dr.',
    specializations: ['Econometrie', 'Statistică financiar-bancară', 'Serii temporale'],
    email: 'aniela.danciu@csie.ase.ro',
    activitateDidactica: [
      'Pregătirea și susținerea cursurilor la disciplina Statistică economică',
      'Pregătirea și susținerea cursurilor la disciplina Econometrie',
      'Pregătirea și susținerea seminariilor la disciplina Bazele statisticii',
      'Pregătirea și susținerea seminariilor la disciplina Statistică teoretică',
      'Pregătirea și susținerea seminariilor la disciplina Statistică economică',
      'Pregătirea și susținerea seminariilor la disciplina Demografie',
      'Pregătirea și susținerea seminariilor la disciplina Analiza statistică a întreprinderii',
      'Pregătirea și susținerea seminariilor la disciplina Analiza calității vieții',
      'Pregătirea și susținerea seminariilor la disciplina Gestiune financiară a întreprinderii',
      'Pregătirea și susținerea seminariilor la disciplina Statistică financiar-bancară',
      'Pregătirea și susținerea seminariilor la disciplina Sisteme informatice pentru statistică',
      'Pregătirea și susținerea seminariilor la disciplina Proiectarea sistemelor informatice economice'
    ],
    domeniiCercetare: [
      'Statistică financiar-bancară',
      'Statistică socială',
      'Analiza statistică a întreprinderilor',
      'Modelarea fenomenelor economico-sociale',
      'Informatică',
      'Analiză factorială'
    ],
    tezeDoctorat: [],
    publicatiiRelevante: [],
    proiecteCercetare: [],
    cvProfiluri: []
  };

  return <ProfesorProfile data={data} />;
}
