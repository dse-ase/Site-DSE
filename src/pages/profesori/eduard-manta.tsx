import { ProfesorProfile } from "../../components/ProfesorProfile";
import photoEduardManta from '../../assets/Poze Profesori/Eduard Manta.jpg';
export function EduardMantaPage() {
  const data = {
    name: "MANTA Eduard Mihai",
    initials: "EM",
    photo: photoEduardManta,
    role: "Asis. Univ. dr.",
    specializations: [
      "Economie informală",
      "Dezvoltare sustenabilă",
      "ESG",
      "Green finance",
      "Modelare cantitativă",
      "Bibliometrie și scientometrie"
    ],
    email: "eduard.manta@csie.ase.ro",
    facultate: "Facultatea de Cibernetică, Statistică și Informatică Economică",
    birou: "4304",
    activitateDidactica: [
      "Statistica",
      "Econometrie",
      "Serii de timp",
      "Bibliometrie si scientometrie",
      "Analiza predictiva utilizand metode de invatare automata"
    ],
    domeniiCercetare: [
      "Economie informală",
      "Dezvoltare sustenabilă",
      "ESG",
      "Green finance",
      "Modelare cantitativă"
    ],
    tezeDoctorat: [],
    publicatiiRelevante: [
      "Davidescu, A. A., Petcu, M. A., Curea, S. C., & Manta, E. M. (2022). Two faces of the same coin: Exploring the multilateral perspective of informality in relation to Sustainable Development Goals based on bibliometric analysis. Economic Analysis and Policy, 73, 683-705.",
      "Dell'Anno, R., Davidescu, A. A., & Manta, E. M. (2025). Embedding informality into sustainable development indices for Europe. Baltic Journal of Economics, 25(1), 90-111.",
      "Dell'Anno, R., Manta, E. M., Nae, T. M., & Geambasu, C. M. (2025). The Informal Economy as a Risk and an Opportunity for Sustainable Development: A Machine Learning-Based Approach. The AMFITEATRU ECONOMIC journal, 27(S19), 1385-1385.",
      "Davidescu, A. A., Lobonț, O. R., Manta, E. M., Mihiț, L. D., & Țăran, A. M. (2025). Crossing chasms: A PLS approach to EU public sector performance assessment. PLoS One, 20(6), e0325994.",
      "Dell'Anno, R., Davidescu, A. A., & Manta, E. M. (2024). The role of the informal economy in achieving the sustainable development goals in europe. Amfiteatru Economic, 26(Special Issue No. 18), 1018-1125.",
      "VĂTAVU, S., Varadi, A. E., Manta, E. M., ȚĂRAN, A. M., & LOBONȚ, O. R. (2023). CAUSES AND CONSEQUENCES OF SHADOW ECONOMY AND ITS IMPACT ON ECONOMIC DEVELOPMENT. Economic Computation & Economic Cybernetics Studies & Research, 57(4).",
      "Davidescu, A. A., Petcu, M. A., Curea, S. C., & Manta, E. M. (2023). The relationship between informality and sustainable development goals through text analysis. Applied Economics Letters, 30(14), 1946-1954.",
      "Davidescu, A. A., Manta, E. M., Stoica-Ungureanu, A. T., & Anton, M. (2022). Could religiosity and religion influence the tax morale of individuals? An empirical analysis based on variable selection methods. Mathematics, 10(23), 4497.",
      "Davidescu, A. A., Manta, E. M., Hapau, R. G., Gruiescu, M., & Vacaru, O. M. (2023). Exploring the contagion effect from developed to emerging CEE financial markets. Mathematics, 11(3), 666.",
      "Davidescu, A. A., Manta, E. M., Vacaru, O. M., Gruiescu, M., Hapau, R. G., & Baranga, P. L. (2023). Has the covid-19 pandemic led to a switch in the volatility of biopharmaceutical companies?. Mathematics, 11(14), 3116.",
      "Davidescu, A. A., Manta, E. M., Florescu, M. S., Constantin, R. S., & Manole, C. (2025). Evaluating Sectoral Vulnerability to Natural Disasters in the US Stock Market: Sectoral Insights from DCC-GARCH Models with Generalized Hyperbolic Innovations. Sustainability, 17(18), 8324.",
      "AnaMaria, D. A., Manta, E. M., Ioana, B., Alexandra-Mădălina, M., & Sorin-Cristian, N. (2026). Detecting Greenwashing in ESG Disclosure: An NLP-Based Analysis of Central and Eastern European Firms. Sustainability, 18(3), 1486."
    ],
    proiecteCercetare: [
      "Membru in peste 10 proiecte de cercetare",
      "INSEAI 2023 - International Network for Knowledge and Comparative Socioeconomic Analysis of Informality and the Policies to be Implemented for their Formalization in the European Union and Latin America, funded by the Marie Sklodowska-Curie Actions (MSCA) Staff Exchanges program",
      "INCERTEC 2023 – Analiza surselor de incertitudine privind evoluția economiei românești",
      "PERFECTIS (2022–2024) – Creșterea performanței instituționale prin cercetare de excelență"
    ],
    cvProfiluri: [
      {
        tip: "Google Scholar",
        url: "https://scholar.google.com/citations?user=0mSdtRwAAAAJ&hl=ro"
      },
      {
        tip: "ResearchGate",
        url: "https://www.researchgate.net/scientific-contributions/Eduard-Mihai-Manta-2211256444"
      },
      {
        tip: "ORCID",
        url: "https://orcid.org/0000-0001-9693-8607"
      }
    ],
  };

  return <ProfesorProfile data={data} />;
}