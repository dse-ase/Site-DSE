import { ProfesorProfile } from '../../components/ProfesorProfile';

export function RoxanaPetcuPage() {
  const data = {
    name: 'PETCU Ionela-Roxana',
    initials: 'PR',
    role: 'Lector Universitar Dr.',
    specializations: [
      'Statistică socială',
      'Econometrie aplicată',
      'Discriminare și inegalități socio-economice',
      'Indicatori statistici și sisteme de indicatori',
      'Metodologii statistice și decizie bazate pe date',
      'Indicatori de sănătate în fundamentarea deciziilor'
    ],
    email: 'roxana.petcu@csie.ase.ro',
    facultate: 'Facultatea de Cibernetică, Statistică și Informatică Economică',
    activitateDidactica: [
      'Statistică',
      'Econometrie',
      'Cercetare și expertiză în domeniul statisticilor sociale'
    ],
    domeniiCercetare: [
      'Statistică socială',
      'Econometrie aplicată',
      'Discriminare și inegalități socio-economice',
      'Indicatori statistici și sisteme de indicatori',
      'Metodologii statistice și decizie bazate pe date',
      'Indicatori de sănătate în fundamentarea deciziilor'
    ],
    tezeDoctorat: [],
    publicatiiRelevante: [
      {
        title: 'Fundamentarea politicilor publice pentru digitalizarea satului românesc',
        journal: 'Sisteme rurale durabile și sustenabile, Presa Universitară Clujană',
        year: 2023,
        authors: 'Tudorel Andrei, Andreea Mirică, Ionela-Roxana Petcu'
      },
      {
        title: 'Hearing loss prevalence and years lived with disability, 1990–2019: findings from the Global Burden of Disease Study 2019',
        journal: 'The Lancet, Vol. 397, Nr. 10278',
        year: 2021,
        authors: 'Lydia M. Haile, et al. (including Ionela-Roxana Glăvan)'
      },
      {
        title: 'Estimation of the global prevalence of dementia in 2019 and forecasted prevalence in 2050: an analysis for the Global Burden of Disease Study 2019',
        journal: 'The Lancet Public Health, Vol. 7, Nr. 2',
        year: 2022,
        authors: 'Emma Nichols, et al. (including Ionela-Roxana Glăvan)'
      },
      {
        title: 'Measuring routine childhood vaccination coverage in 204 countries and territories, 1980–2019: a systematic analysis for the Global Burden of Disease Study 2020',
        journal: 'The Lancet, Vol. 398, Nr. 10299',
        year: 2021,
        authors: 'Natalie C. Galles, et al. (including Ionela-Roxana Glăvan)'
      },
      {
        title: 'Tracking development assistance for health and for COVID-19: a review of development assistance, government, out-of-pocket, and other private spending on health for 204 countries and territories, 1990–2050',
        journal: 'The Lancet, Vol. 398, Nr. 10308',
        year: 2021,
        authors: 'Angela E. Micah, et al. (including Ionela-Roxana Glăvan)'
      },
      {
        title: 'Population-level risks of alcohol consumption by amount, geography, age, sex, and year: a systematic analysis for the Global Burden of Disease Study 2020',
        journal: 'The Lancet, Vol. 400, Nr. 10347',
        year: 2022,
        authors: 'Dana Bryazka, et al. (including Ionela-Roxana Petcu)'
      },
      {
        title: 'Global, regional, and national sex-specific burden and control of the HIV epidemic, 1990–2019, for 204 countries and territories: the Global Burden of Diseases Study 2019',
        journal: 'The Lancet HIV, Vol. 8, Nr. 10',
        year: 2021,
        authors: 'Deepa Jahagirdar, et al. (including Ionela-Roxana Glăvan)'
      },
      {
        title: 'Burden of non-communicable diseases among adolescents aged 10–24 years in the EU, 1990–2019: a systematic analysis of the Global Burden of Diseases Study 2019',
        journal: 'The Lancet Child & Adolescent Health, Volume 6, Issue 6, June 2022',
        year: 2022,
        authors: 'GBD 2019 Europe NCDs in Adolescents Collaborators (including Ionela-Roxana Petcu)'
      },
      {
        title: 'Diabetes mortality and trends before 25 years of age: an analysis of the Global Burden of Disease Study 2019',
        journal: 'The Lancet Diabetes & Endocrinology, Volume 10, Issue 3, March 2022',
        year: 2022,
        authors: 'GBD 2019 Diabetes Mortality Collaborators (including Ionela-Roxana Petcu)'
      }
    ],
    proiecteCercetare: [
      'Reziliența socială și economică în contextul evenimentelor catastrofice în cascadă din România (PNRR)',
      'România Durabilă – Dezvoltarea cadrului strategic și instituțional pentru implementarea Strategiei Naționale pentru Dezvoltarea Durabilă a României 2030 (POCA)',
      'Agenda competențe România 2020–2025'
    ],
    cvProfiluri: [
      { tip: 'Google Scholar', url: 'https://scholar.google.com/citations?user=h6950nIAAAAJ&hl=ro' },
      { tip: 'ORCID', url: 'https://orcid.org/0000-0001-7262-4371' }
    ]
  };

  return <ProfesorProfile data={data} />;
}