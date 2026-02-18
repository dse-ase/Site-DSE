import { ProfesorProfile } from '../../components/ProfesorProfile';

export function TudorelAndreiPage() {
  const data = {
    name: 'ANDREI Tudorel',
    initials: 'AT',
    role: 'Profesor Universitar Dr.',
    specializations: [
      'Statistică economică și socială',
      'Econometrie și modelare economică',
      'Analiza pieței muncii',
      'Indicatori socio-economici și politici publice'
    ],
    email: 'tudorel.andrei@csie.ase.ro',
    facultate: 'Facultatea de Cibernetică, Statistică și Informatică Economică',
    activitateDidactica: [
      'Econometrie',
      'Econometrie avansată - Master Statistică și Data Mining (CSIE)'
    ],
    domeniiCercetare: [
      'Statistică economică și socială',
      'Econometrie și modelare economică',
      'Analiza pieței muncii',
      'Indicatori socio-economici și politici publice'
    ],
    tezeDoctorat: [
      'Statistical Methods for Measuring Sustainability Dimensions (Doctorand: Ceban Octavian)',
      'Analiza econometrică privind discriminarea între diverse grupuri de persoane (Doctorand: Glăvan Ionela-Roxana)',
      'Studiu asupra performanței cercetării științifice din România din perspectiva indicatorilor bibliometrici (Doctorand: Mirică Andreea)',
      'Un model econometric al renunțării la educație în rândul populației romă (Doctorand: Pârvan Andrei Teofil)',
      'Inechități de acces ale populației la serviciile de sănătate în România (Doctorand: Până Adrian)'
    ],
    publicatiiRelevante: [
      {
        authors: 'Andrei T.',
        year: 2003,
        title: 'Statistică și econometrie',
        publication: 'Editura Economică, București',
        details: 'ISBN 973-590-764-X'
      },
      {
        authors: 'Andrei T., Bourbonnais R.',
        year: 2008,
        title: 'Econometrie',
        publication: 'Editura Economică, București',
        details: 'ISBN 978-973-709-353-0'
      },
      {
        authors: 'Andrei T., Spircu L.',
        year: 2010,
        title: 'Aplicații în econometrie',
        publication: 'Editura Economică, București',
        details: 'ISBN 978-973-709-481-0'
      },
      {
        authors: 'Andrei T., Bourbonnais R.',
        year: 2017,
        title: 'Econometrie, ediția a doua revăzută și adăugită',
        publication: 'Editura Economică',
        details: 'ISBN 978-973-709-812-2'
      },
      {
        authors: 'Andrei T., Oancea B., Mirică A., Toma I.E., Herțeliu C.',
        year: 2018,
        title: 'Econometrie – Teorie și aplicații în Eviews și R',
        publication: 'Editura Economică, București',
        details: 'ISBN 978-973-709-862-7'
      },
      {
        authors: 'Andrei T., Teodorescu D., Bourbonnais R., Oancea B.',
        year: 2009,
        title: 'A Simultaneous Equation Model for Estimating Corruption in Higher Education',
        publication: 'Acta Oeconomica',
        details: 'Vol. 59(4), pp. 411-439, ISSN 001-6373'
      },
      {
        authors: 'Teodorescu D., Andrei T.',
        year: 2009,
        title: 'Faculty and peer influences on academic integrity: college cheating in Romania',
        publication: 'Higher Education',
        details: 'Vol. 57, Issue 3, pp. 267-282, ISSN 0018-1560'
      },
      {
        authors: 'Andrei T., Constantin D.L., Mitrut C.',
        year: 2009,
        title: 'Regional specialisation and industrial concentration in Romania\'s transition period from an election cycle perspective',
        publication: 'Environment and Planning C-Government and Policy',
        details: 'Vol. 27, Issue 4, pp. 713-731'
      },
      {
        authors: 'Mirică A., Andrei T., Dascălu E., Mincu Rădulescu G., Glăvan I.R.',
        year: 2016,
        title: 'Revision policy of seasonally adjusted series – case study on Romanian Quarterly GDP',
        publication: 'Economic Computation and Economic Cybernetics Studies and Research',
        details: 'Vol. 50(3), pp. 45-62'
      },
      {
        authors: 'Andrei T., Mirică A., Teodorescu D. et al.',
        year: 2016,
        title: 'Main determinants of labor force participation in the case of metropolitan Roma people',
        publication: 'Romanian Journal of Economic Forecasting',
        details: 'Vol. 19(3), pp. 144-163'
      },
      {
        authors: 'Andrei T., Teodorescu D., Mirică A.',
        year: 2016,
        title: 'Beyond the Impact Factor: measuring the international visibility of Romanian social sciences journals',
        publication: 'Scientometrics',
        details: 'Vol. 108(1), pp. 1-20'
      },
      {
        authors: 'Andrei T., Oancea B., Richmond P., Dhesi G., Herteliu C.',
        year: 2017,
        title: 'Decomposition of the Inequality of Income Distribution by Income Types—Application for Romania',
        publication: 'Entropy',
        details: 'Vol. 19, No. 9, 430'
      },
      {
        authors: 'Oancea B., Andrei T., Parjol D.',
        year: 2017,
        title: 'Income inequality in Romania: The exponential-Pareto distribution',
        publication: 'Physica A – Statistical Mechanics and its applications',
        details: 'Vol. 469, pp. 486-498'
      },
      {
        authors: 'Oancea B., Parjol D., Andrei T.',
        year: 2018,
        title: 'A Pareto upper tail for capital income distribution',
        publication: 'Physica A: Statistical Mechanics And Its Applications',
        details: 'Vol. 492, No. 1, pp. 403-417'
      },
      {
        authors: 'Iancu A., Andrei T., Dinu S.M.',
        year: 2020,
        title: 'Assessments on the impact of the health crisis on the economic environment in Romania from the perspective of foreign trade activity',
        publication: 'Romanian Statistical Review / Revista Romana de Statistica',
        details: 'Vol. 2, pp. 3-18'
      },
      {
        authors: 'Andrei T., Oancea B., Mirică A., Anghel L.C.',
        year: 2022,
        title: 'The Competitive Advantage of Foreign Trade with Agri-Food Products',
        publication: 'Romanian Journal of Economic Forecasting',
        details: 'Vol. 25(2), 54'
      },
      {
        authors: 'Andrei T., Oancea B., Mirică A.',
        year: 2022,
        title: 'Agriculture export variety and the short and long run impact on agriculture export',
        publication: 'Agricultural Economics',
        details: 'Vol. 68(4), pp. 137-145'
      },
      {
        authors: 'Andrei T., Régis B., Mirică A.',
        year: 2024,
        title: 'Consumption Expenditures on Food, Non-food Products and Services in Romania',
        publication: 'Prague Economic Papers',
        details: 'Vol. 33(5), pp. 617-644'
      }
    ],
    proiecteCercetare: [
      'NATO-EATC Research Fellowship – The cost of integration in NATO for aspiring countries - a quantitative model',
      'Stabilirea strategiilor regionale pentru prevenirea și combaterea abandonului școlar - Regiunea Centru, Regiunea Nord-Vest, Regiunea Nord-Est, Regiunea Vest (POSDRU/91/2.2/S/62447)',
      'Dezvoltarea capacității Ministerului Educației Naționale de monitorizare și prognoză a evoluției învățământului superior în raport cu piața muncii (Programul Operațional Capacitate Administrativă SIPOCA 3)',
      'Stagiile de practică ale studenților – pas către integrarea profesională (POSDRU/109/2.1/G/81434, 2012-2013)'
    ],
    cvProfiluri: [
      { tip: 'LinkedIn', url: 'https://www.linkedin.com/in/tudorel-andrei-0a314619/' },
      { tip: 'Google Scholar', url: 'https://scholar.google.com/citations?user=TUDOREL_ANDREI' },
      { tip: 'ORCID', url: 'https://orcid.org/0000-0003-1203-7612' }
    ]
  };

  return <ProfesorProfile data={data} />;
}