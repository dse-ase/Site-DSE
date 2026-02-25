import { ProfesorProfile } from "../../components/ProfesorProfile";

export function LaviniaTotanPage() {
  const data = {
    name: "ȚOȚAN Lavinia-Ștefania",
    initials: "ȚL",
    role: "Lect. Univ. dr.",
    specializations: [
      "Statistică economică și socială",
      "Econometrie aplicată",
      "Analiza pieței muncii",
      "Modele stocastice și analize socio-economice",
      "Indicatori statistici și analize regionale"
    ],
    email: "lavinia.totan@csie.ase.ro",
    facultate: "Facultatea de Cibernetică, Statistică și Informatică Economică",
    birou: "—",
    activitateDidactica: [
      "Statistică – Facultatea de Management (zi, ID, București și Piatra Neamț)",
      "Econometrie – Facultatea de Management (zi, ID, București și Piatra Neamț)",
      "Statistică – Facultatea de Marketing (FR)",
      "Econometrie – Facultatea de Marketing (FR)"
    ],
    domeniiCercetare: [
      "Statistică economică și socială",
      "Econometrie aplicată",
      "Analiza pieței muncii",
      "Modele stocastice și analize socio-economice",
      "Indicatori statistici și analize regionale"
    ],
    tezeDoctorat: [], // "Nu am conducere de doctorat" as per source
    publicatiiRelevante: [
      "Sadkowska, J., Ciocoiu, C.N., Totan, L., Prioteasa, A.L. (2020). Project management in small and medium enterprises: A comparison between Romania and Poland. Economic Computation and Economic Cybernetics Studies and Research, 54(1), 197-214. DOI: 10.24818/18423264/54.1.20.13",
      "Tudose, G., Țoțan, L.Ș., Cristache, S.E. (2013). Models for the analysis of the labor market in Romania. Theoretical and Applied Economics, XX(4(581)), 113-122.",
      "Popescu, B.B., Țoțan, L.Ș. (2013). Econometric modeling for banking exclusion. Romanian Statistical Review, 3, 50-54.",
      "Geamănu, M., Țoțan, L.Ș., Popescu, B.B. (2014). The impact of FDI on economic growth in Romania and EU countries during the current economic crisis. Romanian Statistical Review, 1, 35-43.",
      "Popescu, B.B., Țoțan, L.Ș. (2013). Representative variables in a multiple regression model. Romanian Statistical Review, 1, 82-85.",
      "Țoțan, L.Ș., Popescu, B.B., Cristache, S.E. (2013). The impact of unemployment on economic growth in Romania during the crisis. Romanian Statistical Review, 1, 32-40.",
      "Țoțan, L.Ș., Geamănu, M., Tudose, G. (2012). Mutaţii structurale ale forţei de muncă din România, după 1990. Romanian Statistical Review, 9, 51-65.",
      "Manolache, R., Ţoţan, L. Ş., Burcea, Ş. (2011). [Title not specified]. Management Research and Practice, 3(3), 63-69.",
      "Ţoţan, L.Ş., Dincă, I., Ioancea, A. (2010). The impact of employment trends and labour market processes of economic, social and on preparing the workforce. Revista de Management Comparat Internaţional, 11(1), 359-362.",
      "Stanciu, Ş., Ionescu, M.A., Stănescu, D., Ţoţan, L. Ş. (2009). Conceptul de 'cultură antreprenorială' în instituţiile universitare româneşti. Romanian Statistical Review, 5, 63-78.",
      "Cristache, S.E., Cărbunaru-Băcescu, A., Ţoţan, L. Ş., Popescu, V. S. (2009). Statistical methods applied in the management of touristic activity. Revista de Management Comparat Internaţional, 10(1), 162-168.",
      "Dumitrescu, M., Ţoţan, L.Ş. (2008). Contributions referring to a territorial model for development of the economy based on knowledge (Methodology Framework). Theoretical and Applied Economics, 4(04(521)), 367-372.",
      "Sacală, M., Radu, M., Strat, V., Ţoţan, L. Ş. (2008). Investment risk aversion in Romania. Romanian Statistical Review (Special Issue - 4th International Conference on Applied Statistics).",
      "Ţoţan, L. Ş., Francu, L., Sacala, M. (2008). A statistical overview about the higher education system from Romania. Romanian Statistical Review (Special Issue - 4th International Conference on Applied Statistics)."
    ],
    proiecteCercetare: [
      "Proiect de cercetare CNCSIS 1236-CNCSIS-A-7/632/05.05.2006 – Modele şi metode stochastice de evaluare a efectelor schimbărilor economico-sociale specifice preaderării la Uniunea Europeană asupra stilurilor de viaţă din România (membru în echipă)",
      "Proiect de cercetare CNCSIS 1236-CNCSIS-A-A/619/10.05.2007 – Modele şi metode stochastice de evaluare a efectelor schimbărilor economico-sociale specifice preaderării la Uniunea Europeană asupra stilurilor de viaţă din România (membru în echipă)",
      "Proiect de cercetare PNCDI-II Parteneriate -91-054/14.09.2007 – Corelaţii între caracteristicile socio-economice ale regiunilor de dezvoltare şi nivelul economiei informale, estimări, analize, scenarii (membru în echipă)",
      "Proiect de cercetare PNCDI-II Parteneriate -92-082/01.10.2008 – Analiza factorilor şi a dinamicilor macroeconomice bazate pe cunoaştere, utilizând tehnici econometrice moderne şi de prelucrare a informaţiei (membru în echipă)",
      "Mediul de afaceri nr. 18/23.03.2009 – Analiza în dinamică a pieţei serviciilor medicale din România. Identificarea statistică a oportunităţilor de dezvoltare a afacerilor în domeniul medical (membru în echipă)",
      "Proiect de cercetare PNCDI-II Idei II- 1814/01.01.2009 – Dezvoltarea de instrumente statistice şi econometrice pentru măsurarea nivelului şi impactului corupţiei asupra dezvoltării sectoriale şi regionale la nivelul unei ţări: estimări, analize şi scenarii (membru în echipă)"
    ],
    cvProfiluri: [] // Empty array as per source: CV academic, Google Scholar, ResearchGate, ORCID all "—"
  };

  return <ProfesorProfile data={data} />;
}