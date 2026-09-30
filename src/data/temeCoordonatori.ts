// Propuneri de teme transmise de profesorii coordonatori, anul universitar 2026–2027.
// Pagina ProfesoriCoordonatoriPage afișează butonul „Propuneri teme” DOAR pentru
// slug-urile care apar aici — absența lui înseamnă că profesorul nu a trimis o listă.
// Pentru a adăuga un profesor: pune o intrare nouă cu `licenta` și/sau `master`.

export type Tema = {
  titlu: string;
  /** Metodele sugerate, afișate ca linie secundară sub temă. */
  metode?: string;
};

export type ListaTeme = {
  teme: Tema[];
  /** Observație a profesorului, afișată sub listă (surse de date, condiții etc.). */
  nota?: string;
};

export type TemeProfesor = {
  licenta?: ListaTeme;
  master?: ListaTeme;
};

export const temeCoordonatori: Record<string, TemeProfesor> = {
  'bogdan-ileanu': {
    licenta: {
      teme: [
        { titlu: "Cuantificarea și modelarea fenomenelor demografice" },
        { titlu: "Metode cantitative utilizate în analiza rezilienței economice" },
        { titlu: "Modelarea econometrică a indicatorilor care caracterizează piața muncii" },
        { titlu: "Calitatea ajustării și măsuri ale discrepanțelor. Dezvoltări teoretice și practice" },
        { titlu: "Cuantificarea poverii bolilor" },
        { titlu: "Analize de impact bugetar. Evaluări, scenarii și estimări bazate pe modele de regresie, DSA și PSA" },
        { titlu: "Cuantificarea riscurilor în economie utilizând modele cu variabile discrete" },
        { titlu: "Cuantificarea riscurilor în domeniul medical utilizând modele cu alegere discretă" },
        { titlu: "Abordări tradiționale vs. AI în analiza fenomenelor socio-economice" },
        { titlu: "Indicatori compoziți și utilizarea lor în sociologie, economie, sănătate etc." },
        { titlu: "Teme cu abordări transdisciplinare" },
        { titlu: "Alte teme care conțin, printre altele, și subiectele exemplificate în lista de mai sus" }
      ]
    }
  },

  'cristina-boboc': {
    licenta: {
      teme: [
        {
          titlu: "Relațiile sociale, utilizarea rețelelor sociale și sentimentul de singurătate în Uniunea Europeană – o analiză multivariată",
          metode: "teste Mann–Whitney și Kruskal–Wallis, Chi-pătrat, corelații Spearman, analiză factorială/PCA, analiză cluster"
        },
        {
          titlu: "Participarea la educația și formarea pe tot parcursul vieții în Uniunea Europeană – o analiză comparativă multivariată",
          metode: "analiză cluster, PCA, teste neparametrice, analiza diferențelor dintre țări"
        },
        {
          titlu: "Neconcordanța dintre competențele dobândite prin educație și cerințele pieței muncii (skill mismatch) în Uniunea Europeană – o analiză multivariată",
          metode: "statistică descriptivă, teste neparametrice, corelații Spearman, analiză factorială/PCA, analiză cluster și comparații între țări sau grupuri socio-demografice"
        },
        {
          titlu: "Competențele digitale și integrarea pe piața muncii în statele Uniunii Europene",
          metode: "corelații Spearman, teste neparametrice, PCA/analiză factorială, clusterizare"
        },
        {
          titlu: "Factorii asociați încrederii în instituțiile naționale și europene – o analiză pe baza datelor Eurobarometer",
          metode: "Chi-pătrat, Mann–Whitney/Kruskal–Wallis, analiză factorială, regresie logistică/ordinală"
        },
        {
          titlu: "Decizia de emigrare a tinerilor – o analiză multidimensională a factorilor socio-economici",
          metode: "teste neparametrice, analiză factorială/PCA, regresie logistică, analiză cluster"
        },
        {
          titlu: "Economia verde și dezvoltarea sustenabilă în România în context european – o analiză multidimensională",
          metode: "PCA/analiză factorială, clusterizare, corelații neparametrice, comparații România–UE"
        }
      ]
    },
    master: {
      teme: [
        {
          titlu: "Predicția sentimentului de singurătate în Uniunea Europeană utilizând algoritmi de Machine Learning",
          metode: "Logistic Regression, Random Forest, XGBoost/LightGBM, cross-validation, SHAP"
        },
        {
          titlu: "Predicția abandonului universitar utilizând algoritmi de Machine Learning",
          metode: "Logistic Regression, Random Forest, XGBoost, SVM, modele pentru date dezechilibrate, Explainable AI"
        },
        {
          titlu: "Predicția intenției de emigrare a tinerilor utilizând algoritmi de Machine Learning",
          metode: "Random Forest, XGBoost, SVM, feature selection, SHAP"
        },
        {
          titlu: "Predicția neconcordanței dintre competențele individuale și cerințele ocupaționale (skill mismatch) utilizând algoritmi de Machine Learning",
          metode: "Logistic Regression, Random Forest, XGBoost/LightGBM, feature selection, cross-validation, SHAP/feature importance"
        },
        {
          titlu: "Predicția încrederii în instituțiile Uniunii Europene utilizând algoritmi de Machine Learning",
          metode: "Logistic Regression, Random Forest, XGBoost, SVM, cross-validation, Explainable AI"
        },
        {
          titlu: "Predicția performanței statelor Uniunii Europene în tranziția către economia circulară utilizând Machine Learning",
          metode: "Random Forest, XGBoost, Gradient Boosting, clustering, feature importance și SHAP"
        }
      ]
    }
  },

  'giani-gradinaru': {
    licenta: {
      teme: [
        { titlu: "Analiza statistică a incidentelor de securitate cibernetică și identificarea factorilor de risc" },
        { titlu: "Modele statistice pentru identificarea factorilor asociați riscului de apariție a unei afecțiuni medicale" },
        { titlu: "Evaluarea statistică a performanței orașelor inteligente și verzi" },
        { titlu: "Analiza producției de energie din surse regenerabile" },
        { titlu: "Analiza statistică a fenomenelor climatice extreme și a efectelor economice ale acestora" },
        { titlu: "Percepția utilizatorilor asupra utilizării responsabile a inteligenței artificiale" },
        { titlu: "Factorii care influențează adoptarea tehnologiilor de realitate virtuală și augmentată" },
        { titlu: "Determinanții participării adulților la programe de reconversie profesională" },
        { titlu: "Impactul utilizării roboților colaborativi asupra productivității și ocupării forței de muncă" },
        { titlu: "Analiza cererii de competențe de inteligență artificială și machine learning pe piața muncii" }
      ]
    },
    master: {
      teme: [
        { titlu: "Sistem predictiv de avertizare timpurie pentru riscul incidentelor de securitate cibernetică" },
        { titlu: "Modele explicabile de machine learning pentru predicția riscului medical pe baza datelor clinice și genetice" },
        { titlu: "Model multidimensional de evaluare și prognoză a sustenabilității orașelor inteligente" },
        { titlu: "Prognoza probabilistică a producției de energie regenerabilă în condiții de incertitudine climatică" },
        { titlu: "Modelarea riscurilor climatice și estimarea impactului acestora asupra economiei și infrastructurii" },
        { titlu: "Evaluarea echității, transparenței și explicabilității modelelor de inteligență artificială utilizate în luarea deciziilor" },
        { titlu: "Model predictiv al adoptării tehnologiilor de realitate extinsă în diverse domenii și industrii" },
        { titlu: "Predicția riscului de depreciere a competențelor și a necesarului de reconversie profesională" },
        { titlu: "Evaluarea efectelor introducerii roboților colaborativi asupra productivității, ocupării și calității muncii" },
        { titlu: "Prognoza cererii de competențe pe piața muncii prin analiza anunțurilor de angajare" }
      ]
    }
  },

  'smaranda-cimpoeru': {
    master: {
      teme: [
        { titlu: "Disparități regionale în dezvoltarea economică a României sau a regiunilor UE: analiză spațială a convergenței PIB per capita, a inegalității veniturilor și a ratei sărăciei" },
        { titlu: "Analiza spațială a ocupării și șomajului în rândul tinerilor: disparități pe piața forței de muncă și factori determinanți" },
        { titlu: "Brain drain și depopularea în Europa – analiză spațială a migrației tinerilor și a declinului demografic regional (eventual model gravitațional)" },
        { titlu: "Disparități regionale în accesul la sănătate și impactul asupra speranței de viață: o abordare spațială pe date panel (România sau UE)" },
        { titlu: "Creștere economică vs. decarbonizare – analiza spațială a factorilor determinanți ai emisiilor de dioxid de carbon în regiunile europene" },
        { titlu: "Educație și dezvoltare economică regională – analiza spațială a educației și a abandonului școlar: cauze și impact asupra dezvoltării economice (România sau UE)" },
        { titlu: "Accesibilitatea locuințelor în Europa – analiză spațială a costurilor de locuire, a veniturilor și a factorilor determinanți" },
        { titlu: "De la lockdown la turism excesiv – cum s-a redesenat harta turismului european după pandemie? Model spațial gravitațional" },
        { titlu: "Inteligența artificială și viitorul pieței muncii – analiza spațială a ocupării și a impactului automatizării asupra pieței muncii în Europa" }
      ],
      nota: "Surse principale de date: Eurostat (inclusiv anchetele EU-SILC și EU-LFS) și INS, la nivel regional NUTS1, NUTS2 sau NUTS3, în funcție de disponibilitate."
    }
  },

  'elena-prada': {
    licenta: {
      teme: [
        {
          titlu: "Depopularea și îmbătrânirea regiunilor din Uniunea Europeană – o analiză spațială",
          metode: "hărți tematice, Moran's I global, LISA, corelații spațiale, modele SAR/SEM"
        },
        {
          titlu: "Accesul la servicii medicale și disparitățile teritoriale în România",
          metode: "GIS, indicatori de accesibilitate, Moran's I, LISA, regresie spațială, panel spațial"
        },
        {
          titlu: "Infrastructura de încărcare pentru vehicule electrice și inegalitățile regionale în Uniunea Europeană",
          metode: "ESDA, Moran's I, LISA, regresie OLS și modele SAR/SEM"
        },
        {
          titlu: "Diferențele teritoriale ale fertilității în Uniunea Europeană – o abordare spațială (sau educația și mamele tinere)",
          metode: "statistică descriptivă, Moran's I, LISA, regresie spațială, panel spațial"
        },
        {
          titlu: "Economia circulară și dezvoltarea regională în Uniunea Europeană",
          metode: "PCA, analiză cluster, Moran's I, regresie spațială"
        },
        {
          titlu: "Vulnerabilitatea digitală a regiunilor europene în contextul dublei tranziții verde și digitală",
          metode: "construirea unui indice compozit, PCA, Moran's I, LISA, modele SAR/SEM"
        },
        {
          titlu: "Distribuția investițiilor în energie regenerabilă și efectele teritoriale asupra regiunilor europene",
          metode: "GIS, autocorelație spațială, regresie spațială"
        },
        {
          titlu: "Migrația tinerilor și dezechilibrele demografice regionale în Uniunea Europeană",
          metode: "hărți tematice, LISA bivariată, regresie spațială"
        },
        {
          titlu: "Efectele inteligenței artificiale asupra locurilor de muncă din piața IT din România, folosind date din platformele online pentru joburi",
          metode: "web scraping, LISA, statistică descriptivă, modele de regresie"
        },
        { titlu: "Orice temă propusă de student, în funcție de pasiunile acestuia" }
      ],
      nota: "Teme orientative din aria statisticii spațiale."
    },
    master: {
      teme: [
        {
          titlu: "Regiunile aflate în declin demografic („shrinking regions”) în Uniunea Europeană – o analiză econometrică spațială",
          metode: "panel spațial, Moran's I dinamic, LISA Markov, SAR, SEM și SDM"
        },
        {
          titlu: "Criza locuirii și efectele de spillover asupra regiunilor europene",
          metode: "panel spațial NUTS 2, modele SDM, efecte directe, indirecte și totale"
        },
        {
          titlu: "Brain drain și capcana demografică regională în Uniunea Europeană",
          metode: "panel spațial, modele dinamice, SDM, convergență regională"
        },
        {
          titlu: "Tranziția verde și apariția noilor poli industriali europeni",
          metode: "modele spațiale panel, SDM, analiza efectelor de spillover generate de investițiile verzi"
        },
        {
          titlu: "Vulnerabilitatea regională în dubla tranziție verde și digitală – construirea și modelarea unui indice compozit",
          metode: "PCA, indice compozit, Moran's I, SDM, analiză de sensibilitate"
        },
        {
          titlu: "Efectele transfrontaliere asupra dezvoltării regionale în Uniunea Europeană",
          metode: "modele cu matrici multiple de ponderi spațiale (vecinătate internă vs. transfrontalieră), SDM și SARAR"
        },
        {
          titlu: "Fertilitatea, accesibilitatea locuințelor și migrația tinerilor – o analiză econometrică spațială",
          metode: "panel spațial, laguri temporale, SDM, efecte directe și indirecte"
        },
        {
          titlu: "Formarea clusterelor regionale de sărăcie în Uniunea Europeană",
          metode: "LISA dinamic, modele panel spațiale, analiza tranziției între tipurile HH–HL–LH–LL"
        },
        {
          titlu: "Alegerea matricei de ponderi spațiale și impactul acesteia asupra estimărilor econometrice",
          metode: "comparație între Queen, Rook, k-NN și Distance Matrix în modelele SAR, SEM, SDM și SARAR"
        }
      ],
      nota: "Teme orientative din aria econometriei spațiale."
    }
  },

  'emilia-gogu': {
    licenta: {
      teme: [
        { titlu: "Analiza statistică a convergenței economice a României către media Uniunii Europene" },
        { titlu: "Determinantele creșterii economice în România. Analiză statistică și econometrică" },
        { titlu: "Disparități regionale ale dezvoltării economice în România. O abordare statistică și teritorială" },
        { titlu: "Analiza statistică a pieței muncii din România în context european" },
        { titlu: "Productivitatea muncii și competitivitatea economiei României în context european" },
        { titlu: "Determinantele șomajului în România și în statele Uniunii Europene" },
        { titlu: "Migrația internațională și impactul asupra pieței muncii din România" },
        { titlu: "Îmbătrânirea demografică și implicațiile macroeconomice asupra economiei României" },
        { titlu: "Depopularea și disparitățile teritoriale în România. Analiză statistică regională" },
        { titlu: "Analiza statistică a inflației în România și identificarea principalilor factori determinanți" },
        { titlu: "Inflația, salariile și puterea de cumpărare a populației în România" },
        { titlu: "Prognoza ratei inflației utilizând modele statistice și metode de machine learning" },
        { titlu: "Evoluția salariului real și relația acestuia cu productivitatea muncii" },
        { titlu: "Inegalitatea veniturilor și dezvoltarea economică în statele Uniunii Europene" },
        { titlu: "Analiza statistică a riscului de sărăcie și excluziune socială în România" },
        { titlu: "Datoria publică și creșterea economică în statele Uniunii Europene" },
        { titlu: "Investițiile străine directe și dezvoltarea economică a României" },
        { titlu: "Comerțul exterior și competitivitatea economiei României în context european" },
        { titlu: "Consumul de energie regenerabilă și creșterea economică în Uniunea Europeană" },
        { titlu: "Construirea unui indice compozit al dezvoltării economico-sociale pentru statele Uniunii Europene" },
        { titlu: "Clasificarea statelor Uniunii Europene după performanța macroeconomică utilizând metode de analiză cluster" },
        { titlu: "Analiza unor indicatori din Obiectivele pentru Dezvoltarea Durabilă – Agenda 2030" }
      ],
      nota: "Teme din aria disciplinei Statistică macroeconomică, cu caracter orientativ. Studenții pot propune și alte teme, cu acordul cadrului didactic coordonator, dacă se încadrează în aria de interes și în specificul programului de studii. Pentru definitivarea temei sunt necesare o discuție prealabilă cu profesorul coordonator și o scurtă scrisoare de motivație. Metodologic, temele pot integra statistică descriptivă, analiza seriilor cronologice, analiză teritorială, corelație și regresie, date panel, clusterizare, indicatori compoziți, modele ARIMA și algoritmi de machine learning. Surse de date: INS – TEMPO, Eurostat, BNR, Ministerul Finanțelor, World Bank, OECD, FMI, UNdata."
    }
  },

  'emilia-titan': {
    licenta: {
      teme: [
        { titlu: "Convergența economică în Uniunea Europeană: evoluții și disparități între state" },
        { titlu: "Inflația în Uniunea Europeană: dinamici, diferențe și tipologii de state" },
        { titlu: "Competitivitatea economiilor europene în contextul tranziției digitale și verzi" },
        { titlu: "Vulnerabilitatea energetică a statelor Uniunii Europene: o analiză multidimensională" },
        { titlu: "Dezechilibrele macroeconomice în Uniunea Europeană: profiluri de vulnerabilitate ale statelor membre" },
        { titlu: "Reziliența piețelor muncii din Uniunea Europeană în perioade de criză" },
        { titlu: "Datoria publică și sustenabilitatea finanțelor publice în Uniunea Europeană" },
        { titlu: "Digitalizarea și inteligența artificială în transformarea economiilor europene" },
        { titlu: "Tranziția verde și restructurarea economiilor Uniunii Europene" },
        { titlu: "Reziliența economică a statelor Uniunii Europene: o abordare multidimensională" }
      ]
    },
    master: {
      teme: [
        { titlu: "Persistența și convergența inflației în Uniunea Europeană" },
        { titlu: "Transmiterea șocurilor energetice asupra inflației în economiile europene" },
        { titlu: "Sustenabilitatea datoriei publice în statele Uniunii Europene" },
        { titlu: "Convergența economică și cluburile de convergență în Uniunea Europeană" },
        { titlu: "Sincronizarea ciclurilor economice în Uniunea Europeană" },
        { titlu: "Mecanismul de transmisie al politicii monetare către inflație și creditare în zona euro" },
        { titlu: "Avertizarea timpurie a dezechilibrelor macroeconomice și a vulnerabilităților economice în Uniunea Europeană" },
        { titlu: "Reziliența economiilor europene la șocuri: evaluare și determinanți" },
        { titlu: "Tranziția energetică și riscurile macroeconomice în Uniunea Europeană" },
        { titlu: "Inteligența artificială, digitalizarea și transformarea structurală a economiilor europene" }
      ]
    }
  },

  'mihaela-mihai': {
    licenta: {
      teme: [
        { titlu: "Inteligența artificială în viața tinerilor europeni: utilizare, educație și competențe digitale" },
        { titlu: "Adoptarea inteligenței artificiale în întreprinderile din Uniunea Europeană" },
        { titlu: "Educația în era digitală: competențe și participare la învățarea online în Uniunea Europeană" },
        { titlu: "Performanța sistemelor educaționale din Europa: o abordare multidimensională" },
        { titlu: "Tranziția către energia verde în Uniunea Europeană: progres și disparități între state" },
        { titlu: "Sportul și activitatea fizică în Uniunea Europeană: diferențe și profiluri între state" },
        { titlu: "Dimensiunea economică și socială a sportului în Uniunea Europeană" },
        { titlu: "Moda sustenabilă și economia circulară: performanța statelor europene în gestionarea deșeurilor textile" },
        { titlu: "Turismul european între creștere și sezonalitate: o analiză comparativă a statelor Uniunii Europene" },
        { titlu: "Performanța statelor Uniunii Europene în atingerea obiectivelor de dezvoltare durabilă" }
      ]
    },
    master: {
      teme: [
        { titlu: "Adoptarea inteligenței artificiale în întreprinderile europene: tipare, determinanți și perspective" },
        { titlu: "Inteligența artificială și transformarea digitală a economiilor europene: o măsurare multidimensională" },
        { titlu: "Inteligența artificială generativă și competențele digitale ale tinerilor europeni" },
        { titlu: "Inegalitățile educaționale și performanța elevilor: o analiză pe microdate PISA" },
        { titlu: "Performanța tranziției energetice a statelor Uniunii Europene: o evaluare multidimensională" },
        { titlu: "Traiectorii ale tranziției către energia regenerabilă în Uniunea Europeană" },
        { titlu: "Performanța multidimensională a sectorului sportiv în Uniunea Europeană" },
        { titlu: "Sustenabilitatea industriei textile în Uniunea Europeană: consum, deșeuri și circularitate" },
        { titlu: "Sustenabilitatea turismului european: evaluare multidimensională și tipologii ale statelor Uniunii Europene" },
        { titlu: "Progresul statelor Uniunii Europene către dezvoltarea durabilă: convergență, disparități și tipologii" }
      ]
    }
  },

  'adrian-costea': {
    // Lista transmisă nu separă licența de disertație, așa că apare la ambele niveluri.
    licenta: {
      teme: [
        { titlu: "Modele de grupare a clientelei pe baza tehnicilor de data mining" },
        { titlu: "Analiza comparativă a companiilor aflate în proces de insolvență în România" },
        { titlu: "Clasificarea companiilor din perspectiva performanțelor financiare" },
        { titlu: "Analiza comparativă a țărilor privind îndeplinirea criteriilor de convergență nominală și reală" },
        { titlu: "Analiza randamentelor fondurilor de investiții și ale fondurilor de pensii private" }
      ]
    },
    master: {
      teme: [
        { titlu: "Modele de grupare a clientelei pe baza tehnicilor de data mining" },
        { titlu: "Analiza comparativă a companiilor aflate în proces de insolvență în România" },
        { titlu: "Clasificarea companiilor din perspectiva performanțelor financiare" },
        { titlu: "Analiza comparativă a țărilor privind îndeplinirea criteriilor de convergență nominală și reală" },
        { titlu: "Analiza randamentelor fondurilor de investiții și ale fondurilor de pensii private" }
      ]
    }
  }
};
