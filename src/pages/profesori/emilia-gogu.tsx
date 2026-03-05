import { ProfesorProfile } from "../../components/ProfesorProfile";
import photoEmiliaGogu from '../../assets/Poze Profesori/Emilia Gogu.png';
export function EmiliaGoguPage() {
  const data = {
    name: "GOGU Emilia",
    initials: "EG",
    photo: photoEmiliaGogu,
    role: "Conf. univ. dr.",
    specializations: [
      "Statistică economică și socială",
      "Indicatori economici și ai calității vieții",
      "Econometrie și analiză statistică aplicată",
      "Asigurarea calității în învățământul superior",
      "Politici educaționale și evaluarea performanței academice"
    ],
    email: "emilia.gogu@csie.ase.ro",
    facultate: "Facultatea de Cibernetică, Statistică și Informatică Economică",
    birou: "Compartiment Cercetare ARACIS",
    activitateDidactica: [
      "Statistică macroeconomică",
      "Statistică",
      "Econometrie"
    ],
    domeniiCercetare: [
      "Statistică economică și socială",
      "Indicatori economici și ai calității vieții",
      "Econometrie și analiză statistică aplicată",
      "Asigurarea calității în învățământul superior",
      "Politici educaționale și evaluarea performanței academice"
    ],
    tezeDoctorat: [], // "NU ESTE CAZUL" as per source
    publicatiiRelevante: [
      "Gogu, E., Mihai, F., & Aleca, O. E. (2025). The Economic Impact and the Decoupling of Economic Growth from Renewable Energy Consumption within the European Union in the Context of Social Well-Being. Eastern European Economics, 1-37.",
      "Isaic-Maniu, A., Gogu, E., Dragan, I.E., & Constantin, F. (2024). The Risk of Earthquakes in Romania – A Statistical Point of View. Economic Computation and Economic Cybernetics Studies and Research, 58(3), 5-19.",
      "Gogu, E. et al. (2024). Statistică: Abordări teoretice și practice. Vol. 1. Statistică descriptivă. Editura ASE.",
      "Apostu, S.A., Tiron-Tudor, A., Socol, A., Ivan, O.R., Mihăescu, C., & Gogu, E. (2022). Determinants of Foreign Direct Investment in the Least Developed Countries: Static and Dynamic Panel Data Evidence. Economic Computation and Economic Cybernetics Studies and Research, 56(3), 21-36.",
      "Savoiu, G., Matei, S., Čudanov, M., & Gogu, E. (2022). A Creative Statistical Model of Geometric Area Index Number for Adequate Estimation of ESG, DESG Goals Achievement, and Other Macroeconomic (Im)balances Dynamics. Mathematics, 10(16), 1-26.",
      "Anton, S.G., Onofrei, M., Gogu, E., Neculau, B.C., & Mihai, F. (2021). Debt Overhang, Gazelles' Growth, and Fiscal Policy: A Note from the Quantile Regression Approach. Sustainability, 13(18).",
      "Mihai, F., Aleca, O.E., Gogu, E., Dobrin, C., & Gheorghe, M. (2021). The Challenges of the Green Economy in Romania. Scientific Literature. Sustainability, 13(23).",
      "Gogu, E., Radu, C., Deaconu, A., Frăsineanu, C., Triculescu, M., Mișu, S., & Toma, S. (2021). Assessing the Impact of Clean Energy on Sustainable Economic Growth in European Union Member States. Economic Computation and Economic Cybernetics Studies and Research, 55(4), 183-197.",
      "Gogu, E. et al. (2020). Monografie Statistică a Academiei de Studii Economice din București. 100 de promoții de absolvenți (Vol. 1 & 2). Editura ASE București.",
      "Istudor, N., Dinu, V., Gogu, E., Prada, E.M., & Petrescu, I.E. (2020). Impact of education and economic growth on labour migration in the European Union. A panel data analysis. E & M Ekonomie a Management, 23(4), 55-67.",
      "Gogu, E. et al. (2018). Genesis and evolution of higher education in Romania - in statistical data. Editura Economică.",
      "Gogu, E. et al. (2018). Evoluţia centenară a învăţământului în România. Editura Economică.",
      "Deaconu, A., Gogu, E., Radu, C., & Tudor, M. (2018). Sustainable economic development, economic equilibrium and work productivity on industries of the Romanian national economy, 2000-2015. Economic Computation and Economic Cybernetics Studies and Research.",
      "Săvoiu, Gh., Dinu, V., Gogu, E., & Zurub, H. (2015). Econometric micro-and macroeconomic modelling in Romania: finding simplicity in complexity and generating statistical simplexity. Economic Computation and Economic Cybernetics Studies and Research.",
      "Gogu, E. (2009). Statistica în turism şi comerţ - teorie şi studii de caz. Editura Oscar Print.",
      "Gogu, E. (2009). Teoria şi tehnica sondajului statistic. Editura Oscar Print."
    ],
    proiecteCercetare: [
      "Proiectul QUALITAS – Dezvoltarea și consolidarea culturii calității în învățământul superior românesc",
      "Proiectul QAFIN – Îmbunătățirea politicilor publice în învățământul superior",
      "Proiectul ROSE – Acces la Studii și Echitate pentru Toți (ASEt)",
      "Proiecte PNCDI II – Parteneriate (KnowHow Reg, aPort, eMulticult, DEMOS)",
      "Arhitectură pentru managementul cunoştinţelor în domeniul mediului, social şi economic în vederea elaborarii strategiilor de dezvoltare regională sustenabilă (KnowHow Reg)",
      "Proiectul „ÎNVĂȚĂMÂNTUL SUPERIOR DIN MOLDOVA” (PÎSM) Programul de Îmbunătățire a Învățământului Superior (PÎÎS). Subproiectul „Consolidarea Educației în Cariera Didactică pentru Performanța Profesională (EduPerformance)”",
      "Proiectul „ÎNVĂȚĂMÂNTUL SUPERIOR DIN MOLDOVA” (PÎSM) Programul de Îmbunătățire a Învățământului Superior (PÎÎS). Subproiectul: Modernizarea curricula pentru formarea competențelor profesionale în Inginerie, Electronică, Automatică și Robotică, ca răspuns la cerințele Industriei 4.0 - GEAR 4.0",
      "Proiect ”La consolidation de la capacité et de la fonctionnalité du système institutionnel de management de la qualité dans l'Université d'Etat de Moldova”",
      "Proiect ”Creșterea calității actului didactic, deontologie și etică academică” – Universitatea „Aurel Vlaicu” din Arad"
    ],
    cvProfiluri: [
      {
        tip: "Google Scholar",
        url: "https://scholar.google.com/scholar?hl=ro&as_sdt=0%2C5&q=GOGU+EMILIA&oq="
      },
      {
        tip: "ResearchGate",
        url: "https://www.researchgate.net/profile/Emilia-Gogu"
      },
      {
        tip: "ORCID",
        url: "https://orcid.org/0000-0002-7333-7128"
      }
    ]
  };

  return <ProfesorProfile data={data} />;
}