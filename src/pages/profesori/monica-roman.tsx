import { ProfesorProfile } from '../../components/ProfesorProfile';

export function MonicaRomanPage() {
  const data = {
    name: 'ROMAN Monica Mihaela',
    initials: 'RM',
    role: 'Profesor Universitar Dr. | Membru Consiliu Departament',
    specializations: [
      'Membru Consiliu Departamentului de Statistică și Econometrie',
      'Migrație, mobilitate și piața muncii',
      'Demografia populației și economia religiilor',
      'Politici publice și evaluare de impact',
      'Dezvoltare regională',
      'Econometrie și analiză statistică aplicată'
    ],
    email: 'monica.roman@csie.ase.ro',
    birou: 'Sala 2603',
    facultate: 'Facultatea de Cibernetică, Statistică și Informatică Economică; Facultatea de Relații Economice Internaționale',
    activitateDidactica: [
      'Econometrie',
      'Statistică',
      'Metode cantitative',
      'Statistica pieței financiare',
      'Statistica întreprinderii',
      'Demografie, Economia și Statistica Migrației'
    ],
    domeniiCercetare: [
      'Econometrie și analiză statistică aplicată',
      'Migrație, mobilitate și piața muncii',
      'Demografia populației și economia religiilor',
      'Politici publice și evaluare de impact',
      'Dezvoltare regională'
    ],
    tezeDoctorat: [
      {
        autor: 'Madalina Dragoi',
        titlu: 'Analiza cantitativă a utilizării inteligenței artificiale în societate și provocările asupra democrației',
        status: 'în coordonare'
      },
      {
        autor: 'Emanuelle Perta Muntean',
        titlu: 'Performanța școlară în învățământul preuniversitar. Abordare micro-econometrică',
        status: 'în coordonare'
      },
      {
        autor: 'Ana Alexandrescu',
        titlu: 'Mișcări ale populației și interacțiunea cu fenomenele demografice. Cuantificări statistice și analize cantitative folosind tehnici econometrice și de machine learning',
        status: 'în coordonare'
      },
      {
        autor: 'Dr. Adina Iorganda',
        titlu: 'Efectele tehnologiei asupra pieței muncii din România: O analiză statistică a adaptabilității în era digitală și în contextul pandemiei Covid-19',
        an: 2025
      },
      {
        autor: 'Dr. Mihaela Tical Matei',
        titlu: 'Migrația de revenire a personalului medical român. O analiză cantitativă',
        an: 2024
      },
      {
        autor: 'Dr. Alexandru Florea',
        titlu: 'Analiza statistică a migrației forței de muncă înalt calificate din România folosind rețele sociale',
        an: 2024
      },
      {
        autor: 'Dr. Amira Koubiesy',
        titlu: 'Youth migration from the third countries in Europe. Statistical quantifications and impacts',
        an: 2022
      },
      {
        autor: 'Dr. Heba Mohammad',
        titlu: 'Statistical approach of dimensions and structure of syrian migration in Romania and Europe',
        an: 2022
      },
      {
        autor: 'Dr. Iris Alexe',
        titlu: 'Analiza statistică a migrației forței de muncă înalt calificate din România folosind rețele sociale',
        an: 2020
      },
      {
        autor: 'Dr. Liliana Gotiu',
        titlu: 'Evaluarea cantitativă a impactului utilizării fondurilor structurale',
        an: 2020
      },
      {
        autor: 'Dr. Ali Sadig M. Bager',
        titlu: 'Bayesian approach for the ridge parameter and quantile regression with applications',
        an: 2018
      },
      {
        autor: 'Dr. Bahr K. Mohammed',
        titlu: 'Factorial Design of experiments applied for the analysis of non-normal responses with applications',
        an: 2018
      },
      {
        autor: 'Dr. Meshal H. Odah',
        titlu: 'Estimating methods in Tobit regression model with applications',
        an: 2018
      },
      {
        autor: 'Dr. Elena Prada',
        titlu: 'Analiza intenției de revenire a emigranților români în contextul crizei economice',
        an: 2015
      },
      {
        autor: 'Dr. Suzana Popa',
        titlu: 'Analiza cibernetico-economică a impactului investițiilor străine asupra dezvoltărilor social-economice a României',
        an: 2012
      }
    ],
    publicatiiRelevante: [
      'Glorianne Borg Axisa, Amalee Meehan, Monica Roman, Edita Štuopytė, O Ergünay. (2024), School Practices to Involve Parents in the Integration of Newly Arrived Migrant Students, in "International Perspectives on Migration, Bullying, and School", Routledge, 71-90',
      'Roman, M., Cimpoeru, S., Prada, E. M., & Manafi, I. (2025). Where are the Integration Policies Successful? Explaining Immigrants\' Integration in Europe with Multi-Dimensional Measures. Statistika: Statistics & Economy Journal, 105(2)',
      'Roman, M., Roșca, V. I., Cimpoeru, S., Prada, E. M., & Manafi, I. (2023). "A Picture Is Worth a Thousand Words": Youth Migration Narratives in a Photovoice. Societies, 13(9), 198',
      'Florea, A. R., and M. Roman. (2021). Artificial neural networks applied for predicting and explaining the education level of Twitter users. Social Network Analysis and Mining 11, no. 1',
      'Roman, M., & Plopeanu, A. P. (2021). The effectiveness of the emergency eLearning during COVID-19 pandemic. The case of higher education in economics in Romania. International Review of Economics Education, 37',
      'Popescu, M.E. and Roman, M., (2018). Vocational training and employability: Evaluation evidence from Romania. Evaluation and program planning, 67, pp.38-46',
      'Roman, M. (2019). Work and welfare take-up of enlargement migrants in the United Kingdom, Applied Economics Letters, 26(5), pp 341-344',
      'Nikolova, M., Roman, M., Zimmermann, K.F. (2017). Left Behind but Doing Good? Civic Engagement in Two Post-Socialist Countries, Journal of Comparative Economics, 45(3), pp. 658-684'
    ],
    proiecteCercetare: [
      'Horizon 2020 - Mapping mobility: pathways, institutions and structural effects of youth mobility in Europe (MOVE) – 2015-2018 – Team leader',
      'Horizon 2020 - EMpowerment through liquid Integration of Migrant Youth in vulnerable conditions (MIMY) – 2019-2023 – Team leader, WP leader',
      'PN-III: Abilitarea prin integrarea lichidă a tinerilor migranți în condiții vulnerabile – Director proiect (2022-2023)',
      'COST Action CA18115 - Transnational Collaboration on Bullying, Migration and Integration at School Level (TRIBES)',
      'COST Action CA20107 - Connecting Theory and Practical Issues of Migration and Religious Diversity (COREnet)',
      'COST Action CA23120 - Religious Identity, Bullying and Wellbeing at School: A Transnational Collaboration (ORBIT) – 2025-2028',
      'Membru în peste 20 de proiecte de cercetare privind modelarea economică, migrația forței de muncă, piața muncii'
    ],
    cvProfiluri: [
      { tip: 'Google Scholar', url: 'https://scholar.google.com/citations?user=SnRQTiAAAAAJ&hl=en' },
      { tip: 'ResearchGate', url: 'https://www.researchgate.net/profile/Monica-Roman-4/research' },
      { tip: 'ORCID', url: 'https://orcid.org/0000-0002-9347-0639' }
    ]
  };

  return <ProfesorProfile data={data} />;
}