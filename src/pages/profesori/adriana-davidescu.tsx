import { ProfesorProfile } from '../../components/ProfesorProfile';

export function AdrianaDavidescuPage() {
  const data = {
    name: 'DAVIDESCU Adriana Anamaria',
    initials: 'DA',
    role: 'Profesor Universitar Dr.',
    specializations: [
      'Econometrie aplicată și statistică economică',
      'Analiza pieței muncii',
      'Economia informală și economia ascunsă',
      'Evaluarea impactului politicilor publice',
      'Modele input–output (Leontief)',
      'Analiza macroeconomică și socio-economică',
      'Modelare econometrică (date panel, cross-section, serii de timp)',
      'Scenarii de dezvoltare economică'
    ],
    email: 'adriana.davidescu@csie.ase.ro',
    facultate: 'Facultatea de Cibernetică, Statistică și Informatică Economică',
    activitateDidactica: [
      'Statistică',
      'Econometrie',
      'Serii de timp',
      'Sistemul Conturilor Naționale',
      'Metode statistico-econometrice de analiză a impactului',
      'Modele input–output (Leontief)',
      'Analiza economiei informale'
    ],
    domeniiCercetare: [
      'Econometrie aplicată și statistică economică',
      'Analiza pieței muncii',
      'Economia informală și economia ascunsă',
      'Evaluarea impactului politicilor publice',
      'Modele input–output (Leontief)',
      'Analiza macroeconomică și socio-economică',
      'Modelare econometrică (date panel, cross-section, serii de timp)',
      'Scenarii de dezvoltare economică'
    ],
    tezeDoctorat: [],  // Gol - nu va fi afișat
    publicatiiRelevante: [],  // Gol - nu va fi afișat
    proiecteCercetare: [
      'INCERTEC 2023 – Analiza surselor de incertitudine privind evoluția economiei românești',
      'PERFECTIS (2022–2024) – Creșterea performanței instituționale prin cercetare de excelență',
      'OPEN FUTURE (2023) – Vizibilitate și impact al cercetării științifice',
      'Restart Economia (2020) – Impactul economic și social al COVID-19 în România',
      'Indicele Mediului de Afaceri din România (2021–2023)',
      'Analiza impactului directivelor UE privind accizarea produselor din tutun (BAT România)',
      'Coordonator de echipă / expert tehnic senior / cercetător senior în peste 50 de proiecte naționale și internaționale'
    ],
    cvProfiluri: []  // Gol - nu va fi afișat
  };

  return <ProfesorProfile data={data} />;
}
