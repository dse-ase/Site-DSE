import { ProfesorProfile } from "../../components/ProfesorProfile";
import photoNicholasAlexander from '../../assets/Poze Profesori/Nicholas Alexander.jpg';
export function NicholasAlexanderPage() {
  const data = {
    name: "ALEXANDER Nicholas",
    initials: "NA",
    photo: photoNicholasAlexander,
    role: "Asis. Univ. dr.",
    specializations: [
      "Statistică",
      "Econometrie",
      "Analiza demografică",
      "Cercetare în domeniul sănătății",
      "Modelare econometrică"
    ],
    email: "nicholas.alexander@csie.ase.ro",
    facultate: "Facultatea de Cibernetică, Statistică și Informatică Economică",
    birou: "—",
    activitateDidactica: [
      "Seminare Statistică",
      "Seminare Econometrie"
    ],
    domeniiCercetare: [
      "Analiza evoluției procesului de îmbătrânire în România în perioada recentă - parametri obiectivi și schimbări de percepție"
    ],
    tezeDoctorat: [], // Not mentioned in source
    publicatiiRelevante: [
      "Vassy, J.L., Brunette, C.A., Yi, T., et al. (2026). Opportunistic Genomic Screening for Familial Hypercholesterolemia to Improve Low-Density Lipoprotein Cholesterol: A Randomized Clinical Trial. JAMA Network Open, 9(1), e2549664. https://doi.org/10.1001/jamanetworkopen.2025.49664",
      "Vassy, J.L., Brunette, C.A., Lebo, M.S., et al. (2023). The GenoVA Study: Equitable Implementation of a Pragmatic Randomized Trial of Polygenic-Risk Scoring in Primary Care. American Journal of Human Genetics, 110(11), 1841-1852. https://doi.org/10.1016/j.ajhg.2023.10.001",
      "Alexander, N.V.J., Brunette, C.A., Guardino, E.T., et al. (2022). Performance of EHR Classifiers for Patient Eligibility in a Clinical Trial of Precision Screening. Contemporary Clinical Trials, 121, 106926. https://doi.org/10.1016/j.cct.2022.106926",
      "Brunette, C.A., Dong, O.M., Vassy, J.L., et al. (2021). A Cost-Consequence Analysis of Preemptive SLCO1B1 Testing for Statin Myopathy Risk Compared to Usual Care. Journal of Personalized Medicine, 11(11), 1123. https://doi.org/10.3390/jpm11111123",
      "Malmasi, S., Sandor, N.L., Hosomura, N., Goldberg, M., Skentzos, S., & Turchin, A. (2017). Canary: An NLP Platform for Clinicians and Researchers. Applied Clinical Informatics, 8(2), 447-453. https://doi.org/10.4338/ACI-2017-01-IE-0018"
    ],
    proiecteCercetare: [
      "Analysis of the Impact of COVID-19 on Key Demographic Indicators in Romania and the Republic of Moldova Using Econometric Modeling (DemoGROWTH)"
    ],
    cvProfiluri: [
      {
        tip: "LinkedIn",
        url: "https://www.linkedin.com/in/nvalexander"
      },
      {
        tip: "Google Scholar",
        url: "https://scholar.google.com/citations?user=ZIL08IMAAAAJ"
      },
      {
        tip: "ORCID",
        url: "https://orcid.org/0000-0001-8060-1540"
      }
    ]
  };

  return <ProfesorProfile data={data} />;
}