import { ProfesorProfile } from "../../components/ProfesorProfile";
import photoSimonaApostu from '../../assets/Poze Profesori/Simona apostu.jfif.jpeg';
export function SimonaApostuPage() {
  const data = {
    name: "APOSTU Simona Andreea",
    initials: "SA",
    photo: photoSimonaApostu,
    role: "Conf. Univ. dr.",
    specializations: [
      "Statistică aplicată și econometrie",
      "Analiza migrației forței de muncă înalt calificate",
      "Demografie și sănătate publică",
      "Îmbătrânire activă și sănătate",
      "Indicatori socio-economici",
    ],
    email: "simona.apostu@csie.ase.ro",
    facultate: "Facultatea de Cibernetică, Statistică și Informatică Economică",
    birou: "2610",
    activitateDidactica: [
      "Statistică macroeconomică",
      "Serii de timp"
    ],
    domeniiCercetare: [
      "Tranziția către energia regenerabilă",
      "Analiza pieței muncii: migrația și șomajul",
      "Sustenabilitate, economie verde și dezvoltare durabilă",
    ],
    tezeDoctorat: [],
    publicatiiRelevante: [
      "Apostu, S. A., Vasile, V., Panait, M., & Sava, V. (2023). Exploring the ecological efficiency as the path to resilience. Economic research-Ekonomska istraživanja, 36(2).",
      "Apostu, S. A., Gigauri, I., Panait, M., & Martín-Cervantes, P. A. (2023). Is Europe on the way to sustainable development? Compatibility of green environment, economic growth, and circular economy issues. International Journal of Environmental Research and Public Health, 20(2), 1078.",
      "Sarwar, S., Waheed, R., Aziz, G., & Apostu, S. A. (2022). The nexus of energy, green economy, blue economy, and carbon neutrality targets. Energies, 15(18), 6767.",
      "Panait, M., Janjua, L. R., Apostu, S. A., & Mihăescu, C. (2022). Impact factors to reduce carbon emissions. Evidences from Latin America. Kybernetes, ahead-of-print (ahead-of-print), 1–18.",
      "Hossain, M. R., Singh, S., Sharma, G. D., Apostu, S. A., & Bansal, P. (2023). Overcoming the shock of energy depletion for energy policy? Tracing the missing link between energy depletion, renewable energy development and decarbonization in the USA. Energy Policy, 174, 113469.",
      "Apostu, S. A., Panait, M., Balsalobre-Lorente, D., Ferraz, D., & Rădulescu, I. G. (2022). Energy transition in non-euro countries from central and eastern Europe: evidence from panel vector error correction model. Energies, 15(23), 9118.",
      "Boţa-Avram, C., Apostu, S. A., Ivan, R., & Achim, M. V. (2024). Exploring the impact of macro-determinant factors on energy resource depletion: Evidence from a worldwide cross-country panel data analysis. Energy Economics, 130, 107341.",
      "Panait, M., Apostu, S. A., Vasile, V., & Vasile, R. (2022). Is energy efficiency a robust driver for the new normal development model? A Granger causality analysis. Energy Policy, 169, 113162.",
      "Apostu, S. A., Hussain, A., Kijkasiwat, P., & Vasa, L. (2022). A comparative study of the relationship between circular economy, economic growth, and oil price across South Asian countries. Frontiers in Environmental Science, 10, 1036889.",
      "Çomuk, P., Akkaya, B., Ercoşkun, S., & Apostu, S. A. (2025). The foreıgn dırect ınvestments, economıc growth, renewable energy and carbon (CO 2) emıssıons nexus: an empırıcal analysıs for Turkey and European Unıon Countrıes. Environment, Development & Sustainability, 27(12)."
    ],
    proiecteCercetare: [
      "Programul Operațional Capital Uman 2014-2020, proiect numărul POCU/380/6/13/125245 nr. 36482/23.05.2019 „Excelența în cercetarea interdisciplinara doctorala si postdoctorala, alternative de cariera prin inițiativa antreprenoriala (EXCIA)”",
      "Dezvoltarea unui program pentru atragerea resurselor umane înalt specializate din străinătate în activități de cercetare, dezvoltare și inovare - PNRR-III-C9-2022 – I8, PNRR-III-C9-2022 -I8-CF255/29.11.2022",
      "Dezvoltarea unui program pentru atragerea resurselor umane înalt specializate din străinătate în activități de cercetare, dezvoltare și inovare - PNRR-III-C9-2022 – I8, CF 267/29.11.2022"
    ],
    cvProfiluri: [
      {
        tip: "Google Scholar",
        url: "https://scholar.google.com/citations?user=2B9sx_YAAAAJ&hl=en"
      },
      {
        tip: "ResearchGate",
        url: "https://www.researchgate.net/profile/Simona-Apostu-2"
      },
      {
        tip: "ORCID",
        url: "https://orcid.org/0000-0003-1727-0114"
      }
    ],
  };

  return <ProfesorProfile data={data} />;
}