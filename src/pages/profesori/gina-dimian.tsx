import { ProfesorProfile } from '../../components/ProfesorProfile';

export function GinaDimianPage() {
  const data = {
    name: 'DIMIAN Gina Cristina',
    initials: 'DG',
    role: 'Profesor Universitar Dr.',
    specializations: [
      'Econometria Mediului și a Digitalizării',
      'Microeconometria Pieței Muncii și Socială',
      'Econometria Seriilor de Timp și Analiză Sectorială',
      'Statistica Socială și Demografie Aplicată',
      'Modelare statistică și econometrică'
    ],
    email: 'gina.dimian@csie.ase.ro',
    birou: '2609',
    facultate: 'Facultatea de Cibernetică, Statistică și Informatică Economică',
    activitateDidactica: [
      'Statistică',
      'Econometrie',
      'Demografie și Statistică Socială',
      'Statistică macroeconomică',
      'Economie regională'
    ],
    domeniiCercetare: [
      'Econometria Mediului și a Digitalizării - modelarea impactului noilor tehnologii asupra sustenabilității',
      'Modelarea efectelor de mediere în relații economice complexe',
      'Analiza cantitativă a antreprenoriatului verde',
      'Determinarea indicatorilor de sustenabilitate prin metode statistice',
      'Microeconometria Pieței Muncii și Socială - utilizarea modelelor econometrice pentru comportamentul individual și dinamica ocupării',
      'Modele de regresie pentru analiza preferințelor individuale',
      'Analiza statistică a competențelor și a decalajelor digitale',
      'Econometria sănătății și a sărăciei',
      'Econometria Seriilor de Timp și Analiză Sectorială - modele avansate pentru date pe termen lung',
      'Estimarea relațiilor pe termen lung prin modele ARDL (Autoregressive Distributed Lag)',
      'Analiza statistică a competitivității sectoriale și a șomajului',
      'Analiza seriilor de timp în context de criză',
      'Statistica Socială și Demografie Aplicată - modelarea fenomenelor demografice și a atitudinilor populației',
      'Analiza cantitativă a rezilienței la crize de sănătate',
      'Studiul statistic al atitudinilor populației'
    ],
    tezeDoctorat: [
      'COSMA Anastasia - Comportamentul consumatorului: o explorare a supraconsumului, sustenabilității și stării de bine',
      'STANCU (BROASCĂ) Luminița - Digitalizarea administrației publice ca principal factor de creștere a productivității. Modelarea riscurilor și oportunităților',
      'ROMAN Victor-Mihai - Evaluarea relației dintre educație și statutul socioeconomic: o abordare cauză-efect'
    ],
    publicatiiRelevante: [
      'Dimian, G.C., Maftei, M., Jablonský, J. et al. (2025). The Influence of Digitalization on Greenhouse Gas Emissions in the European Union. The Analysis of the Mediating Effect of Renewable Energy Consumption. J Knowl Econ. WOS (în curs de indexare)',
      'Apostu S.A., Dimian G.C., Vasilescu M.D. (2024). An in-depth analysis of the relation of health and poverty in Europe. Panoeconomicus OnLine-First. WOS:001187378900005',
      'Dimian, G.C., Gheorghe, M., Boldeanu, D.M., Maftei, M. (2023). How digitalization, work-family balance, and work efficiency can influence employees\' preferences for teleworking. Inzinerine. Ekonomika., 34(2), 139-157. WOS:000993994500002',
      'Vasilescu, M.D., Dimian, G.C., Gradinaru, G.I. (2022). Green entrepreneurship in challenging times: a quantitative approach for European countries. Economic Research-Ekonomska Istrazivanja. WOS:000823616800001',
      'Dimian, G.C., Vasilescu, M.D. et al. (2021). Analysis of the Europeans\' attitudes towards vaccination in the context of the Covid-19 Pandemic. Ekonomický časopis 69(10), 997-1016. WOS:00074686550000',
      'Goschin, Z. and Dimian, G.C. (2021). Healthcare under pressure: modelling COVID-19 fatalities with multiscale geographically weighted regressions. Kybernetes. WOS:000703267700001',
      'Dimian, G.C., Apostu, S.A., Vasilescu, M.D., Aceleanu, M.I., Jablonsky, J. (2021). Vulnerability and resilience in health crises. Evidence from European countries. Technological and Economic Development of Economy, 27(4), 783-810. WOS:000681057300001',
      'Vasilescu M.D., Serban A.C., Dimian G.C., Aceleanu M.I., Picatoste X. (2020). Digital divide, skills and perceptions on digitalisation in the European Union. PLoS ONE 15(4): e0232032. WOS:000533192100001',
      'Dimian G.C., Marin E., Jablonsky J. (2019). Investigating the long and short-run salary-employment relationship in Romania: A sectorial approach using the ARDL model. Economic Computation and Economic Cybernetics Studies and Research, 53(1). WOS:000461762700001',
      'Dimian G.C., Aceleanu, M., Ileanu, B., Șerban, A. (2018). Unemployment and sectoral competitiveness in Southern European Union countries. Journal of Business Economics and Management, 19(3), 474-499. WOS:000453041400003',
      'Aceleanu, M., Șerban, A., Pociovălișteanu, D., Dimian G.C. (2017). Renewable energy: A way for a sustainable development in Romania. Energy Sources, Part B, 12(11), 958-963. WOS:000417485400003',
      'Dimian G.C., Begu, L., Jablonsky, J. (2017). Unemployment and labour market mismatch in the European Union Countries. Proceedings of Rijeka Faculty of Economics, 35(1), 13-44. WOS:000406769600001',
      'Dimian G.C., Ileanu, B., Aceleanu, M. (2016). Aging and economic competitiveness in the core of "North Euro-zone". Inzinerine Ekonomika-Engineering Economics Journal, 27(3), 253–263. WOS:000388489400002',
      'Dimian G.C., Ileanu, B., Jablonsky, J., Fabry, J. (2013). Analysis of European labour market in the crisis context. Prague Economic Papers, 1/2013, 50-71. WOS:000317807200003',
      'Mitruț, C., Constantin, L., Dimian G.C. (Bănică), Dimian, M. (2007). Indicators and methods for characterising regional specialization and concentration. Economic computation and economic cybernetics studies and research, 41(3-4), 5-13. WOS:000258575700001',
      'Bănică G.C., Constantin L., Profiroiu A., Dimian M. (2007). Regional convergence from the perspective of factor mobility and technological change. Economic Computation and Economic Cybernetics Studies and Research, 41(1-2), 167-177.'
    ],
    proiecteCercetare: [
      'Proiect postdoctoral POSDRU/89/1.5/S/59184 – Competențe pentru dezvoltarea durabilă a României (director proiect)',
      'Proiecte CNCSIS – AT, AC',
      'Proiecte CEEX și PNCDI II',
      'Proiecte privind competitivitatea regională, piața muncii, capitalul uman și politici de coeziune'
    ],
    cvProfiluri: [
      { tip: 'Google Scholar', url: 'https://scholar.google.ro/citations?user=OIy8Gn8AAAAJ&hl=ro' },
      { tip: 'ResearchGate', url: 'https://www.researchgate.net/profile/Gina-Dimian' },
      { tip: 'ORCID', url: 'https://orcid.org/0000-0001-9137-2616' }
    ]
  };

  return <ProfesorProfile data={data} />;
}