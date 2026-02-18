import { ProfesorProfile } from '../../components/ProfesorProfile';

export function MariaVasilescuPage() {
  const data = {
    name: 'VASILESCU Maria Denisa',
    initials: 'VM',
    role: 'Conferențiar Universitar Dr.',
    specializations: [
      'Piața muncii, ocuparea forței de muncă, salariul minim, reziliența pieței muncii',
      'Inegalități salariale și distribuția veniturilor',
      'Impactul socio-economic ale politicilor sociale și fiscale',
      'Digitalizare, competitivitate, dezvoltare durabilă și economie verde',
      'Elaborare recomandări de politici; analiză și evaluare politici publice',
      'Analiză și modelare econometrică avansată (SPSS/STATA/Eviews/R/Python)',
      'Prognoză și analiză de scenarii',
      'Analiză de impact, evaluare contrafactuală, evaluări ex-ante și ex-post'
    ],
    email: 'maria.vasilescu@csie.ase.ro',
    facultate: 'Facultatea de Cibernetică, Statistică și Informatică Economică',
    birou: '2610',
    activitateDidactica: [
      'Econometrie',
      'Econometrie (în limba franceză)',
      'Statistică',
      'Statistică macroeconomică',
      'Activitate de cercetare la Institutul Național de Cercetare Științifică în Domeniul Muncii și Protecției Sociale'
    ],
    domeniiCercetare: [
      'Piața muncii, ocuparea forței de muncă, salariul minim, reziliența pieței muncii',
      'Inegalități salariale și distribuția veniturilor',
      'Impactul socio-economic ale politicilor sociale și fiscale',
      'Digitalizare, competitivitate, dezvoltare durabilă și economie verde',
      'Elaborare recomandări de politici; analiză și evaluare politici publice',
      'Analiză și modelare econometrică avansată pe seturi complexe de date (SPSS/STATA/Eviews/R/Python)',
      'Modele cu date cross-secționale și panel, regresie logistică, modelare neparametrică',
      'Modele gravitaționale, analiză a eficienței, modele de echilibru general',
      'Prognoză și analiză de scenarii (trenduri socio-economice, previziuni economice)',
      'Analiză de impact, evaluare contrafactuală, evaluări ex-ante și ex-post'
    ],
    tezeDoctorat: [],
    publicatiiRelevante: [],
    proiecteCercetare: [
      'Proiecte PNCDI – Programele Nucleu și Parteneriate (director de proiect și membru în echipe)',
      'Proiecte POSDRU / FSE (Fondul Social European)',
      'Proiecte ale Comisiei Europene',
      'Proiecte ale Ministerului Muncii și Justiției Sociale',
      'Proiecte Danube Transnational Programme',
      'Contracte internaționale de cercetare EUROMOD'
    ],
    cvProfiluri: [
      { tip: 'Google Scholar', url: 'https://scholar.google.com/citations?user=nYhN7BAAAAAJ&hl=ro' },
      { tip: 'ResearchGate', url: 'https://www.researchgate.net/profile/Denisa-Vasilescu' },
      { tip: 'ORCID', url: 'https://orcid.org/0000-0003-3074-8020' }
    ]
  };

  return <ProfesorProfile data={data} />;
}