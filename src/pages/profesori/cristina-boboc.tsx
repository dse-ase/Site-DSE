import { ProfesorProfile } from "../../components/ProfesorProfile";

export function CristinaBobocPage() {
  const data = {
    name: "BOBOC Cristina Rodica",
    initials: "CB",
    role: "Prof. univ. dr.",
    specializations: [
      "Metode de inteligență artificială și Machine Learning aplicate în economie și științe sociale",
      "Analiza pieței muncii: nepotrivirea competențelor (skill mismatching), echilibrul între viața profesională și cea personală, migrația și șomajul",
      "Sustenabilitate, economie verde și dezvoltare durabilă"
    ],
    email: "cristina.boboc2@csie.ase.ro",
    facultate: "Facultatea de Cibernetică, Statistică și Informatică Economică",
    birou: "2603",
    activitateDidactica: [
      "Analiză Statistică Multidimensională",
      "Statistică Neparametrică",
      "Serii de Timp",
      "Machine Learning în Python"
    ],
    domeniiCercetare: [
      "Metode de inteligență artificială și Machine Learning aplicate în economie și științe sociale",
      "Analiza pieței muncii: nepotrivirea competențelor (skill mismatching), echilibrul între viața profesională și cea personală, migrația și șomajul",
      "Sustenabilitate, economie verde și dezvoltare durabilă"
    ],
    tezeDoctorat: [
      "Inteligența artificială în analiza și previziunea necesarului de calificări și competențe pe piața muncii (Doctorand: Gianina Petrașcu)",
      "Harta conexiunilor dintre relațiile sociale, sănătatea mintală și calitatea vieții în era digital (Doctorand: Camelia Dan)",
      "Feminitate și precaritate: Impactul instabilității economice asupra inegalităților de gen pe piața muncii (Doctorand: Denisa Trășcan)"
    ],
    publicatiiRelevante: [
      "Petrascu, G.M., Boboc, C. (2024). The Intersection of AI and ESG: Exploring Overlapping Skills in the Romanian Labour Market. In Proceedings of the International Conference on Business Excellence, 19(1), 1561-1580. https://doi.org/10.2478/picbe-2025-0121",
      "Boboc, C., Ghiță, S. (2024). The Impact of the Pandemic on the Participation in the Labour Market of Vulnerable Groups: Women, Young People, the Elderly and Self-Employed Workers. In V. Vasile, E. Bunduchi (Eds.), The Economic and Social Impact of the COVID-19 Pandemic. Romania in a European Context (pp. 183-235). Springer Cham. https://link.springer.com/chapter/10.1007/978-3-031-47780-5_8",
      "Boboc, C., Roșca, A.R., Ciuhu, A.M., Vasile, V. (2024). Unemployment insights: a machine learning approach. Romanian Statistical Review, 2. https://insse.ro/cms/sites/default/files/field/publicatii/revista_romana_statistica_2_2024.pdf",
      "Boboc, C., Calavrezo, O. (2024). Le marché du travail en Roumanie: une analyse post intégration à l'Union Européenne. In N. Rahmania (Ed.), La Roumanie dans l'Espace Schengen: realité ou utopie? Ed. l'Harmattan.",
      "Toma, C.A., Boboc, C., Vasile, V., Ghiță, S.I. (2021). Income Inequality Shift Paradigm. From Economic Approach to Sharing Responsibilities. Amfiteatru Economic, 23(Special Issue No. 15), 964-981. https://doi.org/10.24818/EA/2021/S15/964",
      "Boboc, C., Ciobanu, M. (2021). Modus Operandi of Actors Involved in the Illicit Tobacco Trade in EU Countries. Statistika: Statistics and Economy Journal, 101(1), 101-111. https://www.czso.cz/documents/10180/143570303/32019721q1_boboc_analyses.pdf/a7b713b4-bbbd-44af-8bcd-7adfbc3b525e?version=1.1",
      "Boboc, C., Ghiță, S., Vasile, V. (2019). Patterns in Romanian Tourism Activity—A Factorial Analysis. In V. Vasile (Ed.), Caring and Sharing: The Cultural Heritage Environment as an Agent for Change (pp. 67-82). Springer Proceedings in Business and Economics. https://doi.org/10.1007/978-3-319-89468-3_7",
      "Bazillier, R., Boboc, C. (2016). Labour migration as a way to escape from employment vulnerability? Evidence from the European Union. Applied Economics Letters, 23(16), 1149-1152.",
      "Bazillier, R., Boboc, C., Calavrezo, O. (2016). Measuring employment vulnerability in Europe. International Labour Review, 155(2), 265-280."
    ],
    proiecteCercetare: [
      "Thematic Review country article for Romania on 'Fair transition towards climate neutrality' (subcontract ICF S.A. Belgium)",
      "Project ECE - Thematic Review on the topic of 'Skills shortages and structural changes in the labour market during the COVID-19 pandemic and in the context of the digital and green transition' (subcontract ICF S.A. Belgium)",
      "Project WHO – ID 2020/1062302-0: 'Literature review to be able to evaluate the extent of illicit trade in tobacco products related to duty free sales'",
      "Project WHO-FCTC: Illicit Tobacco Trade in the European Union 2017-2019 – Raising awareness and enhancing understanding of illicit tobacco trade among academic researchers in the European Union (finanțat de EU, contract WHO Reference 2018/866436-0)",
      "Eurofound project - ID 00320-4876: Casual work – characteristics, regulatory frameworks, spread and implications in selected Member States (Project Coordinator: Prof. Kari Hadjivassiliou, Institute for Employment Studies)",
      "Contract FEMISE – Contract No. 41-01/2015 – Inequality, Intergenerational Mobility of Women Educational Attainment and Inclusive Policies in the Arab Countries (Coordonator: Prof. Dr. Ahmed Driouchi, Al Akhawayn University, Morocco)"
    ],
    cvProfiluri: [
      {
        tip: "Google Scholar",
        url: "https://scholar.google.ro/citations?user=jnHPKtcAAAAJ&hl=ro"
      },
      {
        tip: "ResearchGate",
        url: "https://www.researchgate.net/profile/Cristina-Boboc-2"
      },
      {
        tip: "ORCID",
        url: "https://orcid.org/0000-0002-7397-4821"
      }
    ]
  };

  return <ProfesorProfile data={data} />;
}