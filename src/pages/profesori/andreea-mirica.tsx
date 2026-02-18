import { ProfesorProfile } from '../../components/ProfesorProfile';

export function AndreeaMiricaPage() {
  const data = {
    name: 'MIRICĂ Andreea',
    initials: 'MA',
    role: 'Lector Universitar Dr.',
    specializations: [
      'Statistică oficială',
      'Ajustare sezonieră a seriilor de timp',
      'Indicatori statistici și sisteme de indicatori',
      'Analiza performanței cercetării științifice',
      'Metodologii statistice și decizie bazată pe date',
      'Indicatori de sănătate în fundamentarea deciziilor'
    ],
    email: 'andreea.mirica@csie.ase.ro',
    facultate: 'Facultatea de Cibernetică, Statistică și Informatică Economică',
    activitateDidactica: [
      'Statistică',
      'Econometrie',
      'Statistică Macroeconomică'
    ],
    domeniiCercetare: [
      'Statistică oficială',
      'Ajustare sezonieră a seriilor de timp',
      'Indicatori statistici și sisteme de indicatori',
      'Analiza performanței cercetării științifice',
      'Metodologii statistice și decizie bazată pe date',
      'Indicatori de sănătate în fundamentarea deciziilor'
    ],
    tezeDoctorat: [],
    publicatiiRelevante: [
      {
        title: 'Econometrie – Teorie și aplicații în Eviews și R',
        journal: 'Editura Economică, București',
        year: 2018,
        authors: 'Tudorel Andrei, Bogdan Oancea, Andreea Mirică, Iulia Elena Toma, Claudiu Herțeliu'
      },
      {
        title: 'Stagii de practică de calitate - un element necesar pregătirii studenților',
        journal: 'Educația și Cercetarea Românească. Stare prezentă și Perspective, Casa Cărții de Știință Cluj-Napoca',
        year: 2017,
        authors: 'Tudorel Andrei, Andreea Mirică'
      },
      {
        title: 'Fundamentarea politicilor publice pentru digitalizarea satului românesc',
        journal: 'Sisteme rurale durabile și sustenabile, Presa Universitară Clujană',
        year: 2023,
        authors: 'Tudorel Andrei, Andreea Mirică, Ionela-Roxana Petcu'
      },
      {
        title: 'Mediul rural din România în fața provocărilor globalizării',
        journal: 'Satul românesc. 100 de ani de evoluție rurală, Editura Academiei Române',
        year: 2019,
        authors: 'Tudorel Andrei, Andreea Mirică'
      },
      {
        title: 'Estimates, trends, and drivers of the global burden of type 2 diabetes attributable to PM2·5 air pollution, 1990–2019',
        journal: 'The Lancet Planetary Health, Volume 6, Issue 7, July 2022',
        year: 2022,
        authors: 'GBD 2019 Diabetes and Air Pollution Collaborators (including Mirică A.)'
      },
      {
        title: 'Global, regional, and national burden of hepatitis B, 1990–2019: a systematic analysis for the Global Burden of Disease Study 2019',
        journal: 'The Lancet Gastroenterology & Hepatology, Volume 7, Issue 9, September 2022',
        year: 2022,
        authors: 'GBD 2019 Hepatitis B Collaborators (including Mirică A.)'
      },
      {
        title: 'Measuring the availability of human resources for health and its relationship to universal health coverage for 204 countries and territories from 1990 to 2019',
        journal: 'The Lancet, Volume 399, Issue 10341, 4–10 June 2022',
        year: 2022,
        authors: 'GBD 2019 Human Resources for Health Collaborators (including Mirică A.)'
      },
      {
        title: 'Burden of non-communicable diseases among adolescents aged 10–24 years in the EU, 1990–2019',
        journal: 'The Lancet Child & Adolescent Health, Volume 6, Issue 6, June 2022',
        year: 2022,
        authors: 'GBD 2019 Europe NCDs in Adolescents Collaborators (including Mirică A.)'
      },
      {
        title: 'Diabetes mortality and trends before 25 years of age: an analysis of the Global Burden of Disease Study 2019',
        journal: 'The Lancet Diabetes & Endocrinology, Volume 10, Issue 3, March 2022',
        year: 2022,
        authors: 'GBD 2019 Diabetes Mortality Collaborators (including Mirică A.)'
      }
    ],
    proiecteCercetare: [],
    cvProfiluri: [
      { tip: 'LinkedIn', url: 'https://www.linkedin.com/in/andreea-mirica-b4a101b8' },
      'Google Scholar: Andreea Mirica - Google Scholar',
      { tip: 'ORCID', url: 'https://orcid.org/0000-0002-3794-1387' }
    ]
  };

  return <ProfesorProfile data={data} />;
}