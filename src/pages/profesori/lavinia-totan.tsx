import { ProfesorProfile } from '../../components/ProfesorProfile';

export function LaviniaTotanPage() {
  const data = {
    name: 'ȚOȚAN Lavinia-Ștefania',
    initials: 'ȚL',
    role: 'Lector Universitar Dr.',
    specializations: [
      'Statistică economică și socială',
      'Econometrie aplicată',
      'Analiza pieței muncii',
      'Modele stocastice și analize socio-economice',
      'Indicatori statistici și analize regionale'
    ],
    email: 'lavinia.totan@csie.ase.ro',
    facultate: 'Facultatea de Cibernetică, Statistică și Informatică Economică',
    activitateDidactica: [],
    domeniiCercetare: [
      'Statistică economică și socială',
      'Econometrie aplicată',
      'Analiza pieței muncii',
      'Modele stocastice și analize socio-economice',
      'Indicatori statistici și analize regionale'
    ],
    tezeDoctorat: [],
    publicatiiRelevante: [],
    proiecteCercetare: [
      'Proiecte CNCSIS privind modele și metode stocastice de evaluare a efectelor schimbărilor economico-sociale',
      'Proiecte PNCDI II – Parteneriate privind economia informală și dinamica dezvoltării regionale',
      'Proiecte PNCDI II – IDEI privind dezvoltarea de instrumente statistice și econometrice'
    ],
    cvProfiluri: []
  };

  return <ProfesorProfile data={data} />;
}