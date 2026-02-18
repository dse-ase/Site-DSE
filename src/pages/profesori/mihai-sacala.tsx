import { ProfesorProfile } from '../../components/ProfesorProfile';

export function MihaiSacalaPage() {
  const data = {
    name: 'SACALĂ Mihai Dumitru',
    initials: 'SM',
    role: 'Profesor Universitar Dr.',
    specializations: [
      'Econometrie aplicată',
      'Analiza seriilor de timp',
      'Modelarea econometrică a piețelor financiare',
      'Economie comportamentală',
      'Analiza statistică a comerțului și a pieței muncii',
      'Previziune economică',
      'Agricultură și agronomie',
      'Sănătate',
      'Reciclare',
      'Educație'
    ],
    email: 'mihai.sacala@csie.ase.ro',
    birou: 'sala 2602',
    facultate: 'Facultatea de Cibernetică, Statistică și Informatică Economică',
    activitateDidactica: [
      'Statistică',
      'Statistică macroeconomică',
      'Econometrie',
      'Business Analysis',
      'Analiza seriilor de timp'
    ],
    domeniiCercetare: [
      'Econometrie aplicată',
      'Analiza seriilor de timp',
      'Modelarea econometrică a piețelor financiare',
      'Economie comportamentală',
      'Analiza statistică a comerțului și a pieței muncii',
      'Previziune economică',
      'Agricultură și agronomie',
      'Sănătate',
      'Reciclare',
      'Educație'
    ],
    tezeDoctorat: [],
    publicatiiRelevante: [
      'Dinu, M.; Beia, S.I.; Pătărlăgeanu, S.R.; Gheorghe, A.F.; Munteanu, I.D.; Sacală, M.D. – Exploring the Impact of Wheat Prices and Annual Income on Pig Carcass Prices in European Countries: A Spatial Panel Regression Analysis. Agriculture 2025, 15, 2216',
      'Antonia, M., Goschin, Z., Munteanu, I.D., Sacala, M.D. – The Effects of Schooling Level on Economic Convergence in Emerging Countries: Evidence from Romania. Social Indicators Research (2023)',
      'Radu Petrariu, Mihail-Dumitru Sacala et al. – Comprehensive Food Consumption and Waste Analysis Based on eCommerce Behaviour in the Case of the AFER Community. Transformations in Business & Economics Journal, Vol. 21, No 3 (57), 2022',
      'Marius-Cristian Pană, Mihail-Dumitru Sacală et al. – Economic Determinants of Obesity and Overweight in Ten Post-Communist CEE Countries – Similar Trends? Journal of Economic Computation and Economic Cybernetics Studies and Research, Issue 3/2022, Vol. 56',
      'Marius Constantin, Mihail-Dumitru Sacală et al. – Vegetable Trade Flows and Chain Competitiveness Linkage Analysis Based on Spatial Panel Econometric Modelling and Porter\'s Diamond Model. Agronomy Basel Journal, 01.2022',
      'Mina Fanea-Ivanovici, Marius-Cristian Pană, Mihail Dumitru Sacala et al. – Measuring and Assessing the Wealth Influence on the Efficiency of the Health System through the Private Sector. Inzinerine Ekonomika-Engineering Economics, vol. 31, no. 4, 2020',
      'Mihail Dumitru Sacală et al. – Econometric Research of the Mix of Factors Influencing First-Year Students Dropout Decision at the Faculty of Agri-Food and Environmental Economics. Journal of Economic Computation and Economic Cybernetics Studies and Research, Issue 3/2021, Vol. 55',
      'Vergil Voineagu, Mihail Dumitru Sacală, Ioan Stefan Sacală – Technical analysis and econometric prediction using wave refraction method. Economic Computation and Economic Cybernetics Studies and Research, 3/2011'
    ],
    proiecteCercetare: [
      'ORIZONT EUROPA - COFUND: Instalații regenerabile integrate cu stocarea energiei termice prin pompare pentru satisfacerea durabilă a nevoilor energetice și agricole ale comunităților africane (REPTES)',
      'PNRR-III-C9-2022-I8-CF158: Accountable Governance and Responsible Innovation in Artificial Intelligence – www.responsibleai.ase',
      'Mediu de afaceri: Studiu privind balanța comercială cu produse agroalimentare a României în perioada 2015-2020',
      'Proiect postdoctoral POSDRU/89/1.5/S/59184 – Modelarea econometrică a interconexiunilor dintre piața de capital și economia comportamentală',
      'Studii și expertize privind balanța comercială a României și analiza relației dintre import și producția națională',
      'Proiecte de cercetare aplicată în domeniul econometriei și analizei datelor'
    ],
    cvProfiluri: [
      {
        tip: 'Google Scholar',
        url: 'https://scholar.google.com/citations?hl=ro&user=6CPQskYAAAAJ'
      },
      {
        tip: 'ResearchGate',
        url: 'https://www.researchgate.net/profile/Mihail-Sacala'
      },
      {
        tip: 'ORCID',
        url: 'https://orcid.org/0000-0002-5418-4998'
      }
    ]
  };

  return <ProfesorProfile data={data} />;
}