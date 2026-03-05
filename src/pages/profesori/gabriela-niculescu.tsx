import { ProfesorProfile } from "../../components/ProfesorProfile";
import photoIleanaNiculescu from '../../assets/Poze Profesori/Ileana Niculescu Aron.jpg';
export function GabrielaNiculescuPage() {
  const data = {
    name: "NICULESCU-ARON Ileana Gabriela",
    initials: "IN",
    photo: photoIleanaNiculescu,
    role: "Prof. univ. dr.",
    specializations: [
      "Statistică teoretică și statistică economică",
      "Anchete și sondaje statistice",
      "Demografie",
      "Econometrie",
      "Cercetări de marketing",
      "Analiza comportamentului financiar al populației"
    ],
    email: "gabriela.niculescu@csie.ase.ro",
    facultate: "Facultatea de Cibernetică, Statistică și Informatică Economică",
    birou: "2603",
    activitateDidactica: [
      "Statistică teoretică și statistică economică",
      "Anchete și sondaje statistice",
      "Demografie",
      "Econometrie",
      "Tehnici speciale în sondaje și anchete (program master)",
      "Cercetări de marketing"
    ],
    domeniiCercetare: [
      "Analiza comportamentului financiar al populației",
      "Economisire și îndatorare a gospodăriilor",
      "Piața muncii și deficitul de forță de muncă",
      "Demografie și îmbătrânire demografică",
      "Economie aplicată și modelare statistică/econometrică",
      "E-learning și statistica în educație"
    ],
    tezeDoctorat: [],
    publicatiiRelevante: [
      "Paveliu, M.S., Olariu, E., Căplescu, R.D., Oluboyede, Y., Niculescu-Aron, I.G., Finch, A.P., Vale, L. (2019). Health-related quality of life in Romania: Cross-sectional studies using EQ-5D-3L and EQ-5D-5L. Value in Health. https://doi.org/10.1016/j.jval.2019.09.2283",
      "Olariu, E., Mohammed, W., Oluboyede, Y., Căplescu, R.D., Niculescu-Aron, I.G., Paveliu, M.S., Vale, L. (2022). EQ-5D-5L: a value set for Romania. European Journal of Health Economics. https://doi.org/10.1007/s10198-022-01481-7",
      "Olariu, E., Caplescu, R., Vale, L., Niculescu-Aron, I.G., Oluboyede, Y., Paveliu, M.S. (2023). Population norms for the EQ-5D-3L and EQ-5D-5L in Romania. Health and Quality of Life Outcomes. https://doi.org/10.1186/s12955-023-02144-8",
      "Olariu, E., Paveliu, M.S., Baican, E., Oluboyede, Y., Vale, L., Niculescu-Aron, I.G. (2019). Measuring health-related quality of life in the general population and Roma communities in Romania: study protocol for two cross-sectional studies. BMJ Open. https://doi.org/10.1136/bmjopen-2019-029067",
      "Paveliuc, M.S., Olariu, E., Căplescu, R.D., Oluboyede, Y., Niculescu-Aron, I.G., Ernu, S., Vale, L. (2021). Estimating an EQ-5D-3L Value Set for Romania Using Time Trade-Off. International Journal of Environmental Research and Public Health. https://doi.org/10.3390/ijerph18147415",
      "Niculescu-Aron, I.G. (2013). Procesul de economisire în România. Economisirea populației. Studii Postdoctorale în Economie, Editura Academiei Române.",
      "Niculescu-Aron, I.G. (2013). Using ordinal regression modeling to evaluate the financial potential of households. Journal of Economic Computation and Economic Cybernetics Studies and Research.",
      "Niculescu-Aron, I.G., Mihăescu, C. (2012). An analysis of the saving behavior in Romania. Research Journal of Economics, Business and ICT.",
      "Niculescu-Aron, I.G., Mihăescu, C. (2012). Household Saving in Western European Countries. Journal of Economic and Social Statistics.",
      "Niculescu-Aron, I.G. et al. (2010). Recent Developments in the Borrowing Behaviour of Romanian Households. Journal of Economic Computation and Economic Cybernetics Studies and Research."
    ],
    proiecteCercetare: [
      "PN1: Dezvoltarea și consolidarea culturii calității în învățământul superior românesc – QUALITAS (POSDRU) – expert analiză date",
      "PN3: Procesul de economisire în România. Economisirea populației – bursă postdoctorală (Academia Română)",
      "PN5: Modelarea comportamentului financiar al populației sub impactul îmbătrânirii demografice – membru",
      "PN6: Model statistic-econometric pentru detectarea timpurie a insolvenței companiilor bazate pe TIC – membru",
      "PN9: Deficitul actual de forță de muncă în ramura construcțiilor – director de proiect",
      "PN10: Modelul sistemului informațional național pentru caracterizarea noii economii în România – membru"
    ],
    cvProfiluri: [
      {
        tip: "Google Scholar",
        url: "https://scholar.google.com/citations?hl=ro&user=9kNCPOAAAAAJ"
      },
      {
        tip: "ResearchGate",
        url: "https://www.researchgate.net/profile/Ileana-Niculescu-Aron"
      },
      {
        tip: "ORCID",
        url: "https://orcid.org/0000-0003-2902-1641"
      }
    ]
  };

  return <ProfesorProfile data={data} />;
}