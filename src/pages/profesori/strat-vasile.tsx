import { ProfesorProfile } from "../../components/ProfesorProfile";

export function VasileStratPage() {
  const data = {
    name: "STRAT Vasile Alecsandru",
    initials: "VS",
    role: "Prof. Univ. dr.",
    specializations: [
      "Statistică pentru afaceri",
      "Econometrie",
      "Business Statistics",
      "Managerial Data Analysis",
      "Sondaj statistic în cercetarea de piață"
    ],
    email: "vasile.strat@bbs.ase.ro",
    facultate: "Facultatea de Cibernetică, Statistică și Informatică Economică",
    birou: "—",
    activitateDidactica: [
      "Statistica pentru afaceri – licență Germană, FABIZ",
      "Econometrie – licență Germană, FABIZ",
      "Business Statistics – INDE MBA, BBS",
      "Managerial Data Analysis – ROCA Executive MBA, BBS"
    ],
    domeniiCercetare: [
      "Statistică aplicată în economie",
      "Econometrie",
      "Analiza datelor de afaceri",
      "Cercetare de piață"
    ],
    tezeDoctorat: [
      "Sondajul statistic în cercetarea de piață – la nivelul instituției de învățământ superior"
    ],
    publicatiiRelevante: [
      "Anagnoste, S., Andrei, A.V., Bolovăneanu, V., Cepoi, C.O., Clodnitchi, R., Cramer, A.A., Grecu, R.A., Lessmann, S., Pele, D.T., Petukhina, A., Strat, V.A. (2025). The role of AI in (Re)Shaping energy Finance: A systematic literature review. Energy Strategy Reviews, Volume 61, 101833. https://doi.org/10.1016/j.esr.2025.101833",
      "Davidescu, A.A.M., Popovici O.C., Strat, V.A. (2022). Estimating the impact of green ESIF in Romania using input-output model. INTERNATIONAL REVIEW OF FINANCIAL ANALYSIS, Vol. 84. DOI:10.1016/j.irfa.2022.102336",
      "Davidescu, A.A.M., Popovici, O.C., Strat, V.A. (2021). An empirical analysis using panel data gravity models and scenario forecast simulations for the Romanian exports in the context of COVID-19. Economic Research-Ekonomska Istraživanja. DOI: 10.1080/1331677X.2021.1907205",
      "Caplescu, R.D., Panaite, A.M., Pele, D.T., Strat, V.A. (2020). Will they repay their debt? Identification of borrowers likely to be charged off. Management & Marketing. Challenges for the Knowledge Society, vol.15, no.3, pp.393-409. https://doi.org/10.2478/mmcks-2020-0023"
    ],
    proiecteCercetare: [],
    cvProfiluri: [
      {
        tip: "Google Scholar",
        url: "https://scholar.google.com/citations?user=JQg5c0YAAAAJ&hl=ro&authuser=2"
      },
      {
        tip: "ResearchGate",
        url: "https://www.researchgate.net/profile/Vasile-Strat"
      },
      {
        tip: "ORCID",
        url: "https://orcid.org/0000-0002-5074-1419"
      }
    ],
  };

  return <ProfesorProfile data={data} />;
}