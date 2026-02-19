import { ProfesorProfile } from '../../components/ProfesorProfile';

export function AndreeaBeguPage() {
  const data = {
    name: 'Andreea Oana BEGU',
    initials: 'AB',
    role: 'Asistent Universitar Dr.',
    specializations: ['Migrație internațională și dezvoltare durabilă', 'Economie regională', 'Indicatori de dezvoltare economică și socială', 'Econometrie și analiză statistică aplicată', 'Patrimoniu cultural și dezvoltare rurală'],
    email: 'andreea.begu@csie.ase.ro',
    birou: '2609',
    facultate: 'Facultatea de Cibernetică, Statistică și Informatică Economică',
    activitateDidactica: [
      'Statistică',
      'Statistică Inferențială',
      'Econometrie',
      'Demografie și Statistică Socială'
    ],
    domeniiCercetare: [
      'Migrație internațională și dezvoltare durabilă',
      'Economie regională',
      'Indicatori de dezvoltare economică și socială',
      'Econometrie și analiză statistică aplicată',
      'Patrimoniu cultural și dezvoltare rurală'
    ],
    tezeDoctorat: [],
    publicatiiRelevante: [
      {
        title: 'Perceptions about immigrants and their integration in the European Union',
        journal: 'Economic Computation and Economic Cybernetics Studies and Research, Issue 4/2020; Vol.54, pp. 103-118, ISSN online: 1842-3264, ISSN print: 0424-267 X, DOI: 10.24818/18423264/54.4.20.07, WOS:000599013400007',
        year: 2020,
        authors: 'Vasilescu, M.D., Marin, E., Begu, L.S., Enache, A.O.',
        link: 'https://ecocyb.ase.ro/nr2020_4/7.%20Vasilescu%20Maria,%20Liviu%20Begu,%204,2020%20(T).pdf'
      },
      {
        title: 'Modeling the Relationship of the Migration Phenomenon and the Factors of Sustainable Development',
        journal: 'Economic Computation and Economic Cybernetics Studies and Research, Issue 3/2022; Vol. 56, pp.37-50, ISSN online: 1842-3264, ISSN print: 0424-267 X, DOI: 10.24818/18423264/56.3.22.03, WOS:000890159300003',
        year: 2022,
        authors: 'Begu, L.S., Vasilescu, M.D., Marin, E., Enache, A.O., Stroe, A.M.',
        link: 'https://ecocyb.ase.ro/nr2022_3/3.%20Begu%20Liviu,%20Erika%20Marin.pdf'
      },
      {
        title: 'Digital Transformation in the Offer of Cultural Consumption Services-Digitalisation and Best Practices',
        journal: 'Economic Computation and Economic Cybernetics Studies and Research, Vol. 58, Issue 4/2024, pp. 129-139, ISSN online: 1842-3264, ISSN print: 0424-267 X, DOI: 10.24818/18423264/58.4.24.08, WOS:001383345200008',
        year: 2024,
        authors: 'Meșter, I.T., Șipoș, C., Begu, A.O., Vasile, R.',
        link: 'https://ecocyb.ase.ro/nr2024_4/8_IoanaTeodoraMester_AndreeaOanaBegu.pdf'
      },
      {
        title: 'Does migration influence Corruption in Europe?',
        journal: 'Proceedings of the International Conference on Business Excellence, Vol.13 (2019): Issue 1, pp. 468-478, Journal eISSN: 2558-9652, DOI: https://doi.org/10.2478/picbe-2019-0041, WOS:000501603000041',
        year: 2019,
        authors: 'Begu, L.S., Davidescu, A.AM., Apostu, S.A., Enache, A.O.',
        link: 'https://reference-global.com/article/10.2478/picbe-2019-0041'
      },
      {
        title: 'An overview on rural tourism and consumer behavior. Particularities in Transylvania',
        journal: 'Proceedings of the International Conference ESPERA 2019, WOS:000749374800093',
        year: 2019,
        authors: 'Stroe, A.M., Enache, A.O.',
        link: 'https://www.webofscience.com/wos/woscc/full-record/WOS:000749374800093'
      },
      {
        title: 'Are foreign direct investments a robust factor for sustainable development?',
        journal: 'Proceedings of the International Conference on Business Excellence, Vol.16 (2022): Issue 1, pp.1027-1037, Journal eISSN: 2558-9652, DOI: https://doi.org/10.2478/picbe-2022-0095, WOS:000837579900027',
        year: 2022,
        authors: 'Munteanu, P., Enache, A.O., Vasile, R.',
        link: 'https://reference-global.com/article/10.2478/picbe-2022-0095?tab=references'
      },
      {
        title: 'Analyzing the Link Between Work Flexibility, Job Satisfaction and Job Performance Among Romanian Employees',
        journal: '"Ovidius" University Annals, Economic Sciences Series, Volume XVIII, Issue 2/2018, pp.477-482, ISSN 2393-3127 (Online), ISSN 2393-3119',
        year: 2018,
        authors: 'Lefter, V., Casuneanu, I., Enache, A.O.',
        link: 'https://stec.univ-ovidius.ro/html/anale/RO/wp-content/uploads/2019/02/20-1.pdf'
      },
      {
        title: 'Migration and Sustainable Development in the Context of Globalization',
        journal: 'The Romanian Economic Journal, vol. 22, Issue 74, pp.2-13, ISSN (print) 1454-4296, ISSN (online) 2286-2056',
        year: 2019,
        authors: 'Diaconescu, M., Enache, A.O., Munteanu, P.',
        link: 'https://rejournal.eu/sites/rejournal.versatech.ro/files/articole/2019-12-17/3581/1diaconescu.pdf'
      },
      {
        title: 'The Role Of The Diaspora In Promoting Tourism For The Valorisation Of Cultural Heritage. Case Study Romania',
        journal: 'Global Economic Observer, Vol.7, No.1, pp.37-40, ISSN: 2343 – 9742',
        year: 2019,
        authors: 'Enache, A.O.',
        link: 'https://www.globeco.ro/wp-content/uploads/vol/split/vol_7_no_1/geo_2019_vol7_no1_art_004.pdf'
      },
      {
        title: 'Economic and social approaches in external relations',
        journal: 'Romanian Journal of Economics, vol.53, pp.123-135, ONLINE ISSN 2344-4657',
        year: 2021,
        authors: 'Enache, A.O.',
        link: 'https://revecon.ro/articles/2021-2/2021-2-9.pdf'
      },
      {
        title: 'Determinants of the Migration Decision from Romania',
        journal: 'Global Economic Observer, Vol.10, No.1, ISSN: 2343 – 9742',
        year: 2022,
        authors: 'Enache, A.O.',
        link: 'https://www.globeco.ro/wp-content/uploads/vol/split/vol_10_no_1/geo_2022_vol10_no1_art_015.pdf'
      },
      {
        title: 'Risk Management in Cultural Heritage. Methods of Analysis',
        journal: 'Global Economic Observer, Vol.10, No.2, pp.67-73, ISSN: 2343 – 9742',
        year: 2022,
        authors: 'Stroe, M.A., Enache A.O.',
        link: 'https://www.globeco.ro/wp-content/uploads/vol/split/vol_10_no_2/geo_2022_vol10_no2_art_007.pdf'
      },
      {
        title: 'The Migration Phenomenon in the Context of Sustainable Development',
        journal: 'Global Economic Observer, Vol.10, No.1, ISSN: 2343 – 9742',
        year: 2022,
        authors: 'Enache, A.O.',
        link: 'https://www.globeco.ro/wp-content/uploads/vol/split/vol_10_no_1/geo_2022_vol10_no1_art_016.pdf'
      },
      {
        title: 'Relationship Between Education and Economic Growth: a Comparative Study Between Romania and Poland',
        journal: 'Global Economic Observer, Vol.13, No.2, pp.30-37, ISSN: 2343 – 9742',
        year: 2025,
        authors: 'Begu, A.O., Zainea, B., Zorilă, M.C.',
        link: 'https://www.globeco.ro/wp-content/uploads/vol/split/vol_13_no_2/geo_2025_vol13_no2_art_003.pdf'
      },
      {
        title: 'The Consumption Decision in Rural Tourism and Models of Rural Tourism in South Transylvania',
        journal: 'Global Economic Observer, Vol.13, No.2, pp.140-145, ISSN: 2343 – 9742',
        year: 2025,
        authors: 'Stroe, A.M., Begu, A.O.',
        link: 'https://www.globeco.ro/wp-content/uploads/vol/split/vol_13_no_2/geo_2025_vol13_no2_art_016.pdf'
      },
      {
        title: 'Impact of digital transition on the tourism sector',
        journal: 'Romanian Journal of Economics, vol.60, pp.119-131, ONLINE ISSN 2344-4657',
        year: 2025,
        authors: 'Begu, A.O.',
        link: 'https://revecon.ro/sites/default/files/2025-1-9.pdf'
      },
      {
        title: 'The impact of research, development and innovation expenditures and employment on economic growth. A panel data analysis throughout Romania\'s macro-regions',
        journal: 'Analele Universității din Oradea. Seria științe economice, TOM XXXIV, 2nd Issue, pp.93-104, ISSN 1582-5450',
        year: 2025,
        authors: 'Meșter, I., Gavriluț, D., Begu, A.O.',
        link: 'https://anale.steconomiceuoradea.ro/en/wp-content/uploads/2025/12/AUOES_2nd_ISSUE_2025-1.pdf'
      }
    ],
    proiecteCercetare: [
      'Membru în proiectul (PNRR): Reziliența socială și economică în contextul evenimentelor catastrofice în cascadă din România, Contract de finanțare (CF) nr. 267 / 29.11.2022',
      'Membru în proiectul „PORTO – Portofoliu de instrumente inovative pentru dezvoltarea durabilă a comunităților rurale cu potențial turistic", PN-III-P1-1.2-PCCDI-2017-0884',
      'Activitate de cercetare în cadrul Institutului de Economie Națională – Academia Română, în calitate de cercetător științific',
      'Activitate de cercetare în cadrul Institutului de Economie Națională – Academia Română, în calitate de cercetător doctorand'
    ],
    cvProfiluri: [
      { tip: 'Google Scholar', url: 'https://scholar.google.com/citations?hl=ro&user=0zWwspsAAAAJ' },
      { tip: 'ResearchGate', url: 'https://www.researchgate.net/profile/Andreea-Begu?ev=hdr_xprf' },
      { tip: 'ORCID', url: 'https://orcid.org/0009-0001-9485-7173' }
    ]
  };

  return <ProfesorProfile data={data} />;
}