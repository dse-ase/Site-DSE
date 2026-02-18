import { ProfesorProfile } from '../../components/ProfesorProfile';

export function SimonaApostuPage() {
  const data = {
    name: 'APOSTU Simona Andreea',
    initials: 'AS',
    role: 'Lector Universitar Dr.',
    specializations: [
      'Statistică aplicată și econometrie',
      'Analiza migrației forței de muncă înalt calificate',
      'Demografie și sănătate publică',
      'Îmbătrânire activă și sănătate',
      'Indicatori socio-economici'
    ],
    email: 'simona.apostu@csie.ase.ro',
    facultate: 'Facultatea de Cibernetică, Statistică și Informatică Economică',
    activitateDidactica: [
      'Bazele Statisticii',
      'Statistică',
      'Econometrie',
      'Statistică macroeconomică',
      'Statistică neparametrică',
      'Analiză multidimensională',
      'Serii de timp'
    ],
    domeniiCercetare: [
      'Statistică aplicată și econometrie',
      'Analiza migrației forței de muncă înalt calificate',
      'Demografie și sănătate publică',
      'Îmbătrânire activă și sănătate',
      'Indicatori socio-economici'
    ],
    tezeDoctorat: [],
    publicatiiRelevante: [],
    proiecteCercetare: [
      'Proiect POCU EXCIA – Excelența în cercetarea interdisciplinară doctorală și postdoctorală',
      'Expert – analiză mecanisme managementul apei, Autoritatea de Management POCA'
    ],
    cvProfiluri: []
  };

  return <ProfesorProfile data={data} />;
}
