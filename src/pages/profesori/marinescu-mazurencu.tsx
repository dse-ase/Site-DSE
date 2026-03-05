import { ProfesorProfile } from "../../components/ProfesorProfile";
import photoMiruna from '../../assets/Poze Profesori/MMazurencu.jpeg';
export function MirunaMazurencuPage() {
  const data = {
    name: "MAZURENCU-MARINESCU-PELE Miruna",
    initials: "MM",
    photo: photoMiruna,
    role: "Prof. univ. dr.",
    specializations: [
      "Modelare econometrică și statistică aplicată",
      "Evaluarea afacerilor și fezabilitate",
      "Demografie și analiză social-economică",
      "Statistică aplicată în economie",
      "Analiza statistico-economică a fenomenelor economice"
    ],
    email: "miruna@ase.ro",
    facultate: "Facultatea de Cibernetică, Statistică și Informatică Economică",
    birou: "2604",
    activitateDidactica: [
      "Econometrie",
      "Statistică",
      "Evaluarea afacerilor electronice",
      "Statistica investițiilor",
      "Evaluare și fezabilitate",
      "Analiza statistico-economică în industrie",
      "Demografie",
      "Consultanță în Statistică"
    ],
    domeniiCercetare: [
      "Modelare econometrică și statistică aplicată",
      "Analiza statistico-economică a fenomenelor economice",
      "Evaluarea afacerilor și fezabilitate",
      "Demografie și analiză social-economică",
      "Statistică aplicată în economie"
    ],
    tezeDoctorat: [], // "De completat" as per source
    publicatiiRelevante: [
      "Conda, A.I., Ginavar, A.T., Pele, D.T., Mazurencu-Marinescu-Pele, M. (2026). Cryptocurrency Market Analysis: Insights from Metcalfe's Law and Log-Periodic Power Laws. In: Chen, C.YH., Härdle, W.K., Lu, H.HS. (eds) Handbook of Blockchain Analytics. Springer Handbooks of Computational Statistics. Springer, Cham. https://doi.org/10.1007/978-3-031-95418-4_4",
      "Mazurencu Marinescu Pele, M. (2025). Environmental quality and safety. In P. Nijkamp, K. Kourtit, K.E. Haynes, & Z. Elburz (Eds.), Thematic Encyclopedia of Regional Science. Elgar Encyclopedias in Economics and Finance series. ISBN: 978 1 80037 927 5",
      "Mazurencu-Marinescu-Pele, M., Poleac, D., Chicu, N., Pele, D.T., Bogdan, A. (2025). AI Adoption in EU Enterprises: a Comprehensive Analysis and Modelling of Usage Patterns, Sectoral Differences and Acquisition Trends. Statistika: Statistics & Economy Journal.",
      "Săvescu, A.R., Mazurencu-Marinescu-Pele, M., Conda, A.I., Bolovăneanu, V., Pele, D.T. (2025). Infodemic insights: Mapping COVID-19's digital discourse in Romania. Management & Marketing.",
      "Ginavar, A.T., Conda, A.I., Pele, D.T., Mazurencu-Marinescu-Pele, M., Manea, D.I. (2025). Cryptocurrency Market Analysis: Insights from Metcalfe's Law and Log-Periodic Power Laws. Proceedings of the International Conference on Business Excellence, 19(1), 490-505.",
      "Conda, A.I., Găman, Ș., Bâg, R.C., Mazurencu-Marinescu-Pele, M., Pele, D.T., Härdle, W.K. (2025). BitMood: AI analysis of Bitcoin trends via Facebook emotions. Digital Finance (Manuscript submitted for publication).",
      "Pele, D.T., Conda, A.I., Bag, R., Mazurencu-Marinescu-Pele, M., Strat, V.A. (2023). Financial Risk Meter for the Romanian Stock Market. Romanian Journal of Economic Forecasting, 26(1), 5-24. https://ipe.ro/rjef/rjef1_2023/rjef1_2023p5-24.pdf",
      "Kourtit, K., Mazurencu Marinescu Pele, M., Nijkamp, P., Pele, D.T. (2021). Safe cities in the new urban world: A comparative cluster dynamics analysis through machine learning. Sustainable Cities and Society, 66, 102665. https://doi.org/10.1016/j.scs.2020.102665",
      "Pele, D.T., Mazurencu-Marinescu-Pele, M. (2019). Metcalfe's law and log-period power laws in the cryptocurrencies market. Economics: The Open-Access, Open-Assessment E-Journal, 13(2019-29), 1-26. http://dx.doi.org/10.5018/economics-ejournal.ja.2019-29",
      "Pele, D.T., Mazurencu Marinescu Pele, M. (2019). Using High-Frequency Entropy to Forecast Bitcoin's Daily Value at Risk. Entropy, 21(2), 102. https://doi.org/10.3390/e21020102",
      "Farole, T., Goga, S., Ionescu-Heroiu, M., Karamoschos, S., Mazurencu-Marinescu, M., Czapiewski, C., Komornicki, T., Pinna, A. (2018). Rethinking lagging regions: using cohesion policy to deliver on the potential of Europe's regions (Vol. 2): Full report. Washington, D.C.: World Bank Group. http://documents.worldbank.org/curated/en/457071525400247519/Full-report",
      "Popescu, M.E., Militaru, E., Pele, D., Mazurencu Marinescu, M., Vasile, V., Ilie, S., Mihăilescu, A., Șerban, A. (2018). SUPPORT FOR ESTABLISHING A MINIMUM WAGE-SETTING MECHANISM IN ROMANIA. Editura Lumen, ISBN e-book: 978-973-166-482-8",
      "Kourtit, K., Mazurencu Marinescu, M., Nijkamp, P. (2015). Multi-actor analysis of metropolitan performance indicators. In The rise of the city. Edward Elgar Publishing Ltd.",
      "Kourtit, K., Mazurencu Marinescu, M., Nijkamp, P. (2014). Growth modelling of metropolitan performance analysis, with an illustration in R software. Procedia Economics and Finance, 10, 314-323.",
      "Mazurencu Marinescu, M. (2013). Modelarea multinivel a fenomenelor socio-economice în România. Studiu de caz: companiile care operează în sectorul TIC din România. Editura Academiei Române. ISBN: 978-973-27-2290-9, 978-973-27-2293-0",
      "Mazurencu-Marinescu, M., Nijkamp, P., Pele, D.T. (2013). An Econometric Analysis of ICT-oriented Companies' Bankruptcy. A Case Study on Romania. Journal of Economic Computation and Economic Cybernetics Studies and Research, 47(2), 57-67.",
      "Mazurencu Marinescu, M. (2013). Some conceptual aspects of the multilevel modeling for the study of social-economic phenomena. Administration and Public Management Review, 3.",
      "Pele, D.T., Mazurencu Marinescu, M. (2012). An econophysics approach for modelling the behaviour of stock market bubbles: case study for Bucharest Stock Exchange. In Emerging Macroeconomics. Case Studies - Central and Eastern Europe (Chapter 5). ISBN: 978-1-62257-571-8",
      "Mazurencu Marinescu, M., Pele, D.T. (2012). Applying multilevel modeling for assessing business performance in software: case study--the companies operating in Romania's ICT sector. Journal of International Business and Economics, 12(3).",
      "Mazurencu Marinescu, M., Nijkamp, P. (2011). Companies in rough seas: predictors of early insolvency risk in the Romanian IT industry. Int. J. of Foresight and Innovation Policy, 7(1/2/3), 129-141."
    ],
    proiecteCercetare: [
      "ADER - Accountable Governance and Responsible Innovation in Artificial Intelligence C9 Support for the private sector, research, development and innovation, Investment 8 'Developing a program for attracting highly specialized human resources from abroad in research, development and innovation activities' PNRR-III-C9-2022 – I8, Project code: CF 158/15.11.2022, Financing contract no. 760047/23.05.2023, Beneficiary: Bucharest University of Economic Studies – membru în echipa de cercetare",
      "Coordinating for Cohesion in the Public Sector of the Future – FP7 COCOPS project (2011) – colaborator",
      "Fulbright grantee la University of Akron, Ohio, S.U.A., valoare grant: 18000 USD, perioada: 2009-2010 – Director de proiect",
      "Modelarea multinivel a fenomenelor socio-economice în România. Studiu de caz: companiile care operează în sectorul TIC din Romania, Contract de Cercetare nr. 195 din 03.03.2011, Studii post-doctorale în economie: program de formare continuă a cercetătorilor de elită (SPODE) POSDRU/89/1.5/S/61755, Beneficiar: ACADEMIA ROMÂNĂ, perioada: 2011-2013 – Director de proiect",
      "Model statistico-econometric inovativ pentru detectarea timpurie a insolvabilitatii companiilor bazate pe TIC si CD, care opereaza in economia de post tranzitie a Romaniei. Implicatii macroeconomice, cod CNCSIS 817, perioada: 2007-2010 – Director de proiect",
      "Modelarea comportamentului financiar al populaţiei sub impactul îmbătrânirii demografice. Sistem de indicatori specifici si masuri de combatere a dezechilibrelor financiare, PND II – Parteneriate, contract nr.91-016/2007, consorţiu cu INS si CCFM, perioada 2007-2010 – membră în echipa de cercetare",
      "Deficitul actual de forţă de muncă în ramura construcţiilor, contract nr. 6/2007 cu mediul de afaceri (între ASE şi Patronatul Societăţilor de Construcţii), perioada: 1.03.2007-1.06.2007 – Director de proiect",
      "Modelul sistemului informaţional naţional pentru caracterizarea Noii Economii în România, grant 2-CEEx06-8-65/2006, consorţiu coordonat de ASE, participanţi CNPS-INS şi Universitatea Gh. Bariţiu Braşov, 2006-2008 – membră în echipa de cercetare",
      "Armonizarea calificărilor cu oferta de pregătire a resurselor umane din România in contextul Spaţiului European al Învăţământului Superior pentru asigurarea euro-carierelor profesionale, Grant CEEX. Modul III 2006 – membru în echipa de cercetare",
      "Metodologie validata pentru evaluarea afacerilor bazate pe tehnologia informaţiei in pieţele emergente. Studiu de caz: Romania, Grant CNCSIS COD 119, TEMA NR. 3, perioada:2006-2007 – Director de proiect",
      "Corupţia şi calitatea serviciilor din sectorul public în perspectiva integrării europene, Grant CEEX Tip P-CD – membru în echipa de cercetare",
      "Evaluarea riscului politic (stabilităţii politice) şi a impactului acestuia asupra investiţiilor străine în ţările din Europa centrală şi de est în condiţiile integrării în structurile euro-atlantice, Grant tip A, CNCSIS 2006 – membru în echipa de cercetare",
      "Regimurile valutare în Europa Centrală şi de Est din perspective adoptării monedei unice. Studiu de caz România, Contract nr. 33480/17.07.2002, Tema 9, cod CNCSIS 27 – membru în echipa de cercetare",
      "Procesul de îmbătrânire demografică – consecinţe şi implicaţii în fundamentarea politicilor sectoriale macroeconomice, contract cod CNCSIS 926/2002 – membru în echipa de cercetare",
      "Regimurile valutare în Europa Centrală şi de Est din perspective adoptării monedei unice. Studiu de caz România, Contract nr. 34973/30.07.2001, Tema 4, Cod CNCSIS 129 – membru în echipa de cercetare",
      "Privatizarea si restructurarea sistemului bancar in România. O abordare in context european, Contract numărul 130/1999-2000, tema numărul 6 – membru în echipa de cercetare",
      "Metode de analiză şi predicţie a comportamentului întreprinderilor mici şi mijlocii, Act adiţional nr. 829/31.07.1998/III la contractul de finanţare pentru realizarea temelor de cercetare şi dezvoltare nr. 1253, 198/1996 – membru în echipa de cercetare",
      "PRE-ACCESION IMPACT STUDIES: Proiect RO 9907-02-01: studiul AD-HOC B-4: The impact of introducing a new public accountancy system for Romania, 2002 – Director de proiect, expert local Phare",
      "PRE-ACCESION IMPACT STUDIES: Proiect RO 9907-02-01, studiul 1B (suplimentar), Libera circulaţie a persoanelor",
      "TCP/RER/291: BSEC TRADE FACILITATION PROJECT: Review of legislation and regulations governing the import/export and domestic trade regime and an assessment of their practical application, 2002 – expert local FAO",
      "TCP/ROM/0167: STRATEGY FOR AGRICULTURE AND RURAL DEVELOPMENT IN ROMANIA: Assessment of land related disputes and conflicts and elaborate proposals for out of court conflict management schemes, 2003 – expert local FAO",
      "Proiecte POSDRU: Stagiile de practica ale studentilor – pas catre integrarea profesionala, POSDRU/109/2.1/G/81434, 2012-2013 – membru în echipa de proiect",
      "Proiecte POSDRU: Profesionalism la nivelul Direcţiilor judeţene de Statistică, PODCA, cod SMIS 15966, 2011-2012 – membru în echipa de proiect",
      "Proiecte POSDRU: Expert pe termen scurt în cadrul proiectului POSDRU/161/2.1/G/138408, 'InfoStart - Începutul carierei tale în IT'",
      "Proiecte evaluare POSDRU: A doua Evaluare Intermediară a POSDRU 2007 - 2013, POSDRU/7/7.1/AT/71 Lot 3 'Evaluare ad-hoc a intervenției POSDRU privind populația Roma' – expert statistician",
      "Proiecte evaluare POR: Evaluarea de impact a DMI 3.1 'Reabilitarea, modernizarea, dezvoltarea și echiparea infrastructurii serviciilor de sănătate' şi DMI 3.3 'Îmbunătățirea dotării cu echipamente a unităților de funcționare pentru intervenții în situații de urgență' – expert cheie cu rol de coordonator de proiect",
      "Coordonator proiect în cadrul contractului 'Evaluarea de impact a DMI 3.1 şi DMI 3.3.', Autoritatea Contractantă: Ministerul Dezvoltării Regionale și Administrației Publice",
      "Expert statistician pentru realizarea activității 2.4. Pilotarea metodologiei pentru cele 2 domenii de servicii publice selectate – Domeniul Educație din cadrul proiectului: Consolidarea cadrului pentru creșterea calității serviciilor publice și pentru sprijinirea dezvoltării la nivel local (SPC) cod – SIPOCA 9 (ianuarie-noiembrie 2017)",
      "Expert Banca Mondială în cadrul contractului: CASE STUDIES OF EU LAGGING REGIONS (martie-iunie 2017)",
      "Expert statistician în cadrul contractului pentru elaborarea STRATEGIEI DE SPECIALIZARE INTELIGENTĂ A REGIUNII DE DEZVOLTARE SUD-EST (mai-septembrie 2017)",
      "Expert statistician în cadrul contractului de evaluare a PNDR 2014-2020 cu Ministerul Agriculturii şi Dezvoltării Rurale (MADR) - Direcția Generală de Dezvoltare Rurală (AM PNDR) (mai-septembrie 2017)",
      "Contract de cercetare cu S.C. Getica S.A. intitulat: Getica - managing for shareholders value",
      "Contract de cercetare cu S.C. Eltek Engineering S.A intitulat: Studiu de analiză statistică şi evaluare a S.C. Eltek Engineering S.A"
    ],
    cvProfiluri: [] // Empty array as per source: "CV academic: disponibil la cerere", Google Scholar, ResearchGate, ORCID not specified
  };

  return <ProfesorProfile data={data} />;
}