import { ProfesorProfile } from '../../components/ProfesorProfile';
import photoSimonaGhita from '../../assets/Poze Profesori/Simona Ghita.jpg';
export function IoanaGhitaPage() {
  const data = {
    name: 'GHIȚĂ Simona Ioana',
    initials: 'GS',
    photo: photoSimonaGhita,
    role: 'Profesor Universitar Dr.',
    specializations: [
      'Piața muncii și vulnerabilități sociale',
      'Dezvoltare sustenabilă și calitatea vieții',
      'Economia turismului și transformarea digitală',
      'E-commerce și comportamentul consumatorilor',
      'Freelancing și gig economy',
      'Leadership și inegalități socio-economice'
    ],
    email: 'ioana.ghita@csie.ase.ro',
    birou: '2610',
    facultate: 'Facultatea de Cibernetică, Statistică și Informatică Economică',
    activitateDidactica: [
      'Statistică',
      'Statistică economică',
      'Statistică în comerț, turism și servicii',
      'Econometrie',
      'Statistica dezvoltării durabile',
      'Statistică managerială în turism',
      'Calculul și analiza indicilor statistici'
    ],
    domeniiCercetare: [
      'Piața muncii - ocuparea forței de muncă, șomajul, vulnerabilități pe piața muncii, migrație',
      'Inegalități și coeziune socio-economică',
      'Freelancing și gig economy',
      'Leadership în contexte de criză',
      'Dezvoltare sustenabilă și calitatea vieții',
      'Economia turismului și a ospitalității',
      'Transformarea digitală în turism',
      'Comerț electronic și comportamentul consumatorilor'
    ],
    tezeDoctorat: [],  // Gol - nu va fi afișat
    publicatiiRelevante: [
      'Saseanu, A.S.; Grosu, R.M.; Ghita, S.I., Ene, A.B. (2025). Employees\' perspectives on leadership in times of crisis in Romanian SMES. Transformations in Business & Economics, 24(1), 403-418.',
      'Boboc C.; Ghita, S.I.; Vasile, V. (2024). Migration of Health Workers: Key Findings from Romania. Management & Marketing, 19(1), 1-14.',
      'Boboc C., Ghiță S. (2024). The Impact of the Pandemic on the Participation in the Labour Market of Vulnerable Groups. In: The Economic and Social Impact of the COVID-19 Pandemic. Springer Cham, pp. 183-235.',
      'Săseanu A.S., Ghiță S.I., Gogonea R.M. (2023). E-Commerce and Its Determinants – Behavior Patterns of European Countries in COVID-19 Times. Peter Lang Publishing House. SCOPUS.',
      'Ghiță, S.I.; Săseanu, A.S.; Gogonea, R.M., Grosu R.M. (2022). Online shopping profiles within European countries during the COVID-19 pandemic. Transformations in Business & Economics, 21(2), 21-40.',
      'Toma, C.A., Boboc, C., Vasile, V., Ghiță, S.I. (2021). Income Inequality Shift Paradigm. From Economic Approach to Sharing Responsibilities. Amfiteatru Economic, 23(Special Issue 15), 964-981.',
      'Saseanu, A.S.; Ghita, S.I.; Albastroiu, I.; Stoian, C.A. (2020). Aspects of digitalization and related impact on green tourism in European countries. Information, 11(11), 507.',
      'Boboc C., Ghiţă S., Vasile V. (2019). Patterns in Romanian Tourism Activity—A Factorial Analysis. Springer Proceedings in Business and Economics.',
      'Ghita, S.I.; Saseanu, A.S.; Gogonea, R.M.; Huidumac-Petrescu, C.E. (2018). Perspectives of Ecological Footprint in European Context under the Impact of Information Society and Sustainable Development. Sustainability, 10(9), 3224.'
    ],
    proiecteCercetare: [
      'Proiect Eurofound (2014-2022) - Corespondent pentru România al European Foundation for the Improvement of Living and Working Conditions - Network of correspondents (senior researcher)',
      'Proiect parteneriate PNII nr.329/2014 - Instrumente eco-economice viabile pentru cuantificarea serviciilor ecosistemelor de pe teritoriul României (ROECOSERV), 2014-2017 (cercetător senior)',
      'Proiect PNCD II Competiția 2 - PARTENERIATE nr. 92087/2008 - Familia monoparentală, insecuritatea economică și politica guvernamentală, 2008-2011 (responsabil de proiect din partea ASE)',
      'Proiect PNCD II Competiția 1 - PARTENERIATE nr. 91-039/2007 - Metodologie de evaluare a impactului politicilor familiale asupra comportamentului și evoluției structurilor familiale, 2007-2010 (responsabil de proiect din partea ASE)',
      'Proiect CEEX (CERES) Contract nr. CEx 05-D8-61/2005 - Proiecția ocupării și a deficitului de calificări pe termen scurt și mediu, 2005-2007 (responsabil de proiect din partea ASE)',
      'Alte proiecte privind ocuparea forței de muncă, migrația, dezvoltarea durabilă, indicatorii socio-economici și politicile publice'
    ],
    cvProfiluri: [
      { tip: 'Google Scholar', url: 'https://scholar.google.com/citations?user=ezEDHB0AAAAJ&hl=ro' },
      { tip: 'ResearchGate', url: 'https://www.researchgate.net/profile/Simona-Ghita-5' },
      { tip: 'ORCID', url: 'https://orcid.org/0000-0002-5634-8570' }
    ]
  };

  return <ProfesorProfile data={data} />;
}