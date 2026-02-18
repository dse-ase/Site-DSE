import { ProfesorProfile } from '../../components/ProfesorProfile';

export function ClaudiuHerteliuPage() {
  const data = {
    name: 'HERȚELIU Claudiu',
    initials: 'HC',
    role: 'Profesor Universitar Dr.',
    specializations: [
      'Statistică computațională și econofizică',
      'Inegalități socio-economice și distribuția veniturilor',
      'Indicatori de bunăstare și dezvoltare regională',
      'Analiza seriilor de timp și modelare matematică',
      'Studii interdisciplinare socio-economice'
    ],
    email: 'hertz@csie.ase.ro',
    facultate: 'Facultatea de Cibernetică, Statistică și Informatică Economică',
    activitateDidactica: [
      'Statistică computațională și econofizică',
      'Statistică macroeconomică',
      'Econometrie',
      'Predare cursuri universitare',
      'Activități de seminarizare',
      'Îndrumarea studenților în laboratoarele de statistică',
      'Coordonare și supervizare activități academice și de cercetare'
    ],
    domeniiCercetare: [
      'Statistică aplicată și econometrie',
      'Econofizică și modele statistice complexe',
      'Inegalități socio-economice și distribuția veniturilor',
      'Indicatori de bunăstare și dezvoltare regională',
      'Analiza seriilor de timp și modelare matematică',
      'Studii interdisciplinare socio-economice'
    ],
    proiecteCercetare: [
      'PERFECTIS – Creșterea performanței instituționale prin dezvoltarea infrastructurii și ecosistemului de cercetare transdisciplinară',
      'Proiecte UEFISCDI – PCCF și Soluții',
      'Proiecte internaționale interdisciplinare privind inegalitățile socio-economice, sănătatea publică și dezvoltarea durabilă',
      'Proiecte privind managementul sănătății publice în contextul pandemiei COVID-19'
    ]
  };

  return <ProfesorProfile data={data} />;
}
