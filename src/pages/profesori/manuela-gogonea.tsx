import { ProfesorProfile } from '../../components/ProfesorProfile';

export function ManuelaGogoneaPage() {
  const data = {
    name: 'GOGONEA Rodica-Manuela',
    initials: 'GR',
    role: 'Conferențiar Universitar Dr.',
    specializations: [
      'Analiză macroeconomică',
      'Econometrie și modelare economică',
      'Statistică economică și socială',
      'Indicatori economici și financiari',
      'Calitatea în învățământul superior'
    ],
    email: 'manuela.gogonea@csie.ase.ro',
    birou: '—',
    facultate: 'Facultatea de Cibernetică, Statistică și Informatică Economică',
    domeniiCercetare: [
      'Analiză macroeconomică',
      'Econometrie și modelare economică',
      'Statistică economică și socială',
      'Indicatori economici și financiari',
      'Calitatea în învățământul superior'
    ],
    proiecteCercetare: [
      'ECOMA – Analiza factorilor și dinamicilor macroeconomice bazată pe cunoaștere',
      'Modelarea comportamentului financiar al populației sub impactul îmbătrânirii demografice',
      'Crearea unei structuri informațional-statistice pentru asigurarea calității în învățământul superior',
      'Proiecte cu mediul de afaceri în domeniul pieței turistice și al pieței IT'
    ],
    tezeDoctorat: [],
    publicatiiRelevante: [],
    activitateDidactica: [],
    cvProfiluri: []
  };

  return <ProfesorProfile data={data} />;
}