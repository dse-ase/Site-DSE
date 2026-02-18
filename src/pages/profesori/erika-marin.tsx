import { ProfesorProfile } from '../../components/ProfesorProfile';

export function ErikaMarinPage() {
  const data = {
    name: 'MARIN Erika',
    initials: 'ME',
    role: 'Profesor Universitar Dr. | Director Departament',
    specializations: [
      'Director Departament de Statistică și Econometrie',
      'Statistică aplicată și econometrie',
      'Analiza managerială a datelor',
      'Modelarea fenomenelor și proceselor economice',
      'Previziune economică',
      'Planificare financiară și evaluare proiecte'
    ],
    email: 'erika.marin@csie.ase.ro',
    facultate: 'Facultatea de Cibernetică, Statistică și Informatică Economică',
    activitateDidactica: [
      'Statistică',
      'Analiza managerială a datelor',
      'Econometrie',
      'Activități didactice la nivel licență, masterat și doctorat'
    ],
    domeniiCercetare: [
      'Statistică aplicată și econometrie',
      'Analiza managerială a datelor',
      'Modelarea fenomenelor și proceselor economice',
      'Previziune economică',
      'Statistică managerială și planificare financiară',
      'Analiza și evaluarea proiectelor economico-financiare'
    ],
    proiecteCercetare: [
      'Proiecte europene de mediu (apă, canalizare, deșeuri) – expert economic-financiar',
      'Proiecte PNCDI, MENER, CNCSIS',
      'Proiecte de analiză economico-financiară și evaluare pentru finanțare europeană',
      'Activități de training pentru Autorități de Management și Organisme Intermediare'
    ]
  };

  return <ProfesorProfile data={data} />;
}
