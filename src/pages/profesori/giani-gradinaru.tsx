import { ProfesorProfile } from '../../components/ProfesorProfile';
import photoGianiGradinaru from '../../assets/Poze Profesori/Giani Gradinaru.jpg';
export function GianiGradinaruPage() {
  const data = {
    name: 'GRĂDINARU Giani Ionel',
    initials: 'GG',
    photo: photoGianiGradinaru,
    role: 'Profesor Universitar Dr.',
    specializations: [
      'Modele de business inovativ și economie digitală',
      'Bioeconomie durabilă',
      'Dezvoltare urbană și economie circulară',
      'Economia mediului și indicatori economie-mediu',
      'Inteligență artificială și Data Science',
      'Statistică economică și socială',
      'Econometrie și modele stohastice'
    ],
    email: 'giani.gradinaru@csie.ase.ro',
    birou: '2602',
    facultate: 'Facultatea de Cibernetică, Statistică și Informatică Economică',
    activitateDidactica: [
      'Statistică microeconomică',
      'Econometrie',
      'Previziune economică',
      'Analitica științei',
      'Data Mining, metode statistice și modelare econometrică'
    ],
    domeniiCercetare: [
      'Modele de business inovativ din perspectiva economiei digitale și a revoluției industriale 4.0',
      'Bioeconomie durabilă',
      'Dezvoltare urbană și economie circulară',
      'Economia mediului și indicatori economie-mediu',
      'Statistică economică și socială',
      'Econometrie și modele stohastice',
      'Calitatea vieții și statistică socială',
      'Evaluarea impactului economic și de mediu',
      'Inteligență artificială și Big Data'
    ],
    tezeDoctorat: [
      'Modele de business inovativ din perspectiva economiei digitale și a revoluției industriale 4.0',
      'Instrumente statistice pentru evaluarea și monitorizarea bioeconomiei durabile',
      'Perspectiva dezvoltării urbane în contextul integrării economiei circulare',
      'Tehnicile de analiză predictivă: importanță, oportunități și perspective',
      'Metode și instrumente predictive pentru dezvoltarea unei economii verzi',
      'Influența socio-economică a tehnologiilor disruptive'
    ],
    publicatiiRelevante: [
      'Gradinaru, G.I., Manea, D.I., Andreescu, F., Toma, D.A., Paraschiv, L.I. (2024). Identifying the Main Factors of Elaborating Smart City Strategy Using Machine Learning. A Comparative Study Among Romanian Cities. Economic Computation And Economic Cybernetics Studies And Research, 58(3), 53-71. WOS:001317110900004',
      'Gradinaru, G.I., Dinu, V., Rotaru, C.L., Toma, A. (2024). The Development of Educational Competences for Romanian Students in the Context of the Evolution of Data Science and Artificial Intelligence. Amfiteatru Economic, 26(65), 14-32. WOS:001251298900002',
      'Gradinaru, G.I., Maricut, A.C. (2023). The Impact of Economic Behavior Environment: A Comparative Study Among EU\'s Countries and China. Journal of the Knowledge Economy. WOS:001091941800005',
      'Dinu, V., Gradinaru, G.I., Maricut, A.C., Matei, B.F. (2023). The Role of Innovation and New Technologies in Closing the Economic Circuit of Electrical and Electronic Equipment. Amfiteatru Economic, 25(62), 12-27. WOS:001012163600002',
      'Timis, D., Rotaru, C.L., Gradinaru, G.I. (2023). Using Predictive Analytics Techniques in Order to Create a Sustainable Land Use Decision Management System. Case Study: Romania. Economic Computation And Economic Cybernetics Studies And Research, 57(1), 235-250. WOS:000960039800015',
      'Vasilescu, M.D., Dimian, G.C., Gradinaru, G.I. (2022). Green entrepreneurship in challenging times: a quantitative approach for European countries. Economic Research-Ekonomska Istrazivanja, 1-20. WOS:000823616800001',
      'Gradinaru, G.I., Maricut, A.C. (2022). From the Rebound Effect to the Perspective of Circular Economy: A Structure Changes Analysis Among EU Countries. Economic Computation And Economic Cybernetics Studies And Research, 56(1), 257-272. WOS:000777438800016',
      'Otoiu, A., Gradinaru, G.I. (2018). Proposing a composite environmental index to account for the actual state and changes in environmental dimensions, as a critique to EPI. Ecological Indicators, 93, 1209-1221. WOS:000452692600118',
      'Gradinaru, G.I. (2010). Environmental Quality, Stimulating Factor Consumption in the XXI Century. Amfiteatru Economic, 12(28), 441-450. WOS:000279314000013'
    ],
    proiecteCercetare: [
      'Proiect PNRR privind managementul inovării prin big data și inteligență artificială',
      'Proiect instituțional privind integrarea indicatorilor și datelor geospațiale în statistica oficială',
      'Proiecte CNCSIS privind sisteme de indicatori de mediu și calitatea vieții',
      'Proiecte CEEX și PNCDI privind economia mediului și dezvoltarea durabilă',
      'Proiecte POCU privind calitatea învățământului superior și internaționalizare',
      'Proiecte europene Leonardo da Vinci și contracte cu instituții publice centrale',
      'Proiecte privind evaluarea performanței administrative și politicile publice'
    ],
    cvProfiluri: [
      { tip: 'Google Scholar', url: 'https://scholar.google.com/citations?user=fnlzZiUAAAAJ&hl=en' },
      { tip: 'ResearchGate', url: 'https://www.researchgate.net/profile/Giani-Gradinaru' },
      { tip: 'ORCID', url: 'https://orcid.org/0000-0003-3336-1737' }
    ]
  };

  return <ProfesorProfile data={data} />;
}