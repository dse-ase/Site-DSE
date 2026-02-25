import { ProfesorProfile } from "../../components/ProfesorProfile";

export function ClaudiuHerteliuPage() {
  const data = {
    name: "HERȚELIU Claudiu",
    initials: "HC",
    role: "Prof. univ. dr.",
    specializations: [
      "Statistică computațională și econofizică",
      "Statistica religiei",
      "Scientometrie",
      "Artefacte statistice",
      "Metrici ale sănătății",
      "Metode cantitative aplicate"
    ],
    email: "hertz@csie.ase.ro",
    facultate: "Facultatea de Cibernetică, Statistică și Informatică Economică",
    birou: "2008",
    activitateDidactica: [
      "Statistică computațională și econofizică",
      "Statistică macroeconomică",
      "Econometrie",
      "Predare cursuri universitare",
      "Activități de seminarizare",
      "Îndrumarea studenților în laboratoarele de statistică",
      "Coordonare și supervizare activități academice și de cercetare"
    ],
    domeniiCercetare: [
      "Metode cantitative aplicate",
      "Statistica religiei",
      "Scientometrie",
      "Artefacte statistice",
      "Metrici ale sănătății"
    ],
    tezeDoctorat: [
      "Grigorescu, P.C. (2025). Applications of machine learning in the transaction monitoring space",
      "Alexander, N.V.J. (2024). Viața persoanelor înaintate în vârstă. Asistăm la o schimbare de paradigmă a societății contemporane?",
      "Pleștiu, C. (2023). Informația statistică în arhivele securității: Concordanțe/ Discordanțe/ Complementarități cu statisticile publice",
      "Calipolitis, D. (2023). Analiza comparată a tematicilor tezelor de doctorat în domeniul ciberneticii și statisticii economice din România: anii 1945-1965 versus 1995-2015",
      "Drugă, V. (2022). Formulele de finanțare per capita la nivelul sistemului de învătământ preuniversitar – o abordare cantitativă",
      "Leiva-Perez, W.H. (2021). Economic burden of epidemiological trends in OECD countries (teză susținută în Septembrie 2024)",
      "Vorovenci, A.E. (2019). ÎMBĂTRÂNIREA DEMOGRAFICĂ ȘI DECLINUL NATALITĂȚII ÎN ROMÂNIA: ANALIZĂ STATISTICĂ LONGITUDINALĂ ȘI IMPLICAȚII SOCIO-ECONOMICE (susținere programată în Aprilie 2026)",
      "Dragomirescu, D. (2019). ACCESUL LA ARTROPLASTIA GENUNCHIULUI ÎN ROMÂNIA: ANALIZĂ MULTIDIMENSIONALĂ A INECHITĂȚILOR, PERFORMANȚEI CLINICE ȘI ALINIERII EUROPENE (2002-2024) (susținere programată în Aprilie 2026)"
    ],
    publicatiiRelevante: [
      "Herțeliu, C., Jianu, I., Drăgan, I.M., Apostu, S., & Luchian, I. (2021). Testing Benford's Laws (non)conformity within disclosed companies' financial statements among hospitality industry in Romania. Physica A: Statistical Mechanics and its Applications, 582, 126221. https://doi.org/10.1016/j.physa.2021.126221",
      "Herțeliu, C., Jianu, I., Jianu, I., Bobb, V.C., Dhesi, G., Ceptureanu, S.I., Ceptureanu, E.G., & Ausloos, M. (2021). Money's importance from the religious perspective. Annals of Operations Research, 299(1-2), 375-399. https://doi.org/10.1007/s10479-019-03488-5",
      "Boja, C.E., Herteliu, C., Dârdală, M., & Ileanu, B.V. (2018). Day of the week submission effect for accepted papers in Physica A, PLOS ONE, Nature and Cell. Scientometrics, 117(2), 887-918. https://doi.org/10.1007/s11192-018-2911-7",
      "Herțeliu, C., Ileanu, B.V., Ausloos, M., & Rotundo, G. (2015). Effect of religious rules on time of conception in Romania from 1905 to 2001. Human Reproduction, 30(9), 2202-2214. https://doi.org/10.1093/humrep/dev129"
    ],
    proiecteCercetare: [
      "PERFECTIS – Creșterea performanței instituționale prin dezvoltarea infrastructurii și ecosistemului de cercetare transdisciplinară",
      "Proiecte UEFISCDI – PCCF și Soluții",
      "Proiecte internaționale interdisciplinare privind inegalitățile socio-economice, sănătatea publică și dezvoltarea durabilă",
      "Proiecte privind managementul sănătății publice în contextul pandemiei COVID-19"
    ],
    cvProfiluri: [
      {
        tip: "Google Scholar",
        url: "https://scholar.google.com/citations?user=qAy2QW8AAAAJ&hl=en"
      },
      {
        tip: "ResearchGate",
        url: "https://www.researchgate.net/profile/Claudiu-Herteliu-2"
      },
      {
        tip: "ORCID",
        url: "https://orcid.org/0000-0001-8860-9547"
      }
    ]
  };

  return <ProfesorProfile data={data} />;
}