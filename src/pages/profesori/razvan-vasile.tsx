import { ProfesorProfile } from '../../components/ProfesorProfile';
import photoRazvanVasile from '../../assets/Poze Profesori/Razvan Vasile.jpg';
export function RazvanVasilePage() {
  const data = {
    name: 'VASILE Răzvan',
    initials: 'VR',
    photo: photoRazvanVasile,
    role: 'Asistent Universitar Dr.',
    specializations: [
      'Econometrie și analiză statistică aplicată în economie',
      'Migrație și mobilitatea forței de muncă',
      'Digitalizare, inteligență artificială și piața muncii',
      'Dezvoltare durabilă și reziliență economică',
      'Transformare digitală și incluziune economică și financiară',
      'Tranziția energetică, eficiența energetică și dezvoltarea economică sustenabilă',
      'Impactul digitalizării asupra ocupării și restructurării pieței muncii'
    ],
    email: 'razvan.vasile@csie.ase.ro',
    birou: '2609',
    facultate: 'Facultatea de Cibernetică, Statistică și Informatică Economică',
    activitateDidactica: [
      'Statistică economică',
      'Econometrie',
      'Analiza datelor economice',
      'Metode cantitative în economie',
      'Modelare econometrică și analiză statistică aplicată'
    ],
    domeniiCercetare: [
      'Econometrie și analiză statistică aplicată în economie',
      'Migrație și mobilitatea forței de muncă',
      'Digitalizare, inteligență artificială și piața muncii',
      'Dezvoltare durabilă și reziliență economică',
      'Transformare digitală și incluziune economică și financiară',
      'Relația dintre tranziția energetică, eficiența energetică și dezvoltarea economică sustenabilă',
      'Impactul digitalizării asupra ocupării și restructurării pieței muncii'
    ],
    tezeDoctorat: [],
    publicatiiRelevante: [
      'Panait, M.C., Apostu, S.A., Vasile, V., Vasile, R. (2022). Is energy efficiency a robust driver for the new normal development model? A Granger causality analysis. Energy Policy (WoS, Q1).',
      'Begu, L.S. et al. (2022). Modeling the relationship of migration phenomenon and sustainable development factors. Journal of Economic Computation and Economic Cybernetics Studies and Research (WoS).',
      'Surugiu, M.R. et al. (2023). Government revenue–expenditure nexus: wavelet approach for Romania. Economics and Finance Letters (WoS).',
      'Apostu, S.A. et al. (2022). Do Smart Cities represent the key to urban resilience? International Journal of Environmental Research and Public Health (WoS, Q1).',
      'Vasile, V. et al. (2023). Migration behavior of medical graduates from less developed countries. IJERPH (Scopus/WoS).'
    ],
    proiecteCercetare: [
      'Participare la proiecte de cercetare în cadrul Institutului Național de Cercetări Economice „Costin C. Kiritescu" – Academia Română',
      'Proiecte privind reziliența economică și urbană',
      'Cercetări privind digitalizarea și piața muncii',
      'Studii privind dezvoltarea durabilă și incluziunea economică',
      'Proiecte privind tranziția energetică și transformările economice post-pandemie'
    ],
    cvProfiluri: [
      { tip: 'Google Scholar', url: 'https://scholar.google.com/citations?user=Crcz0FoAAAAJ&hl=ro&oi=ao' },
      { tip: 'Web of Science', url: 'https://www.webofscience.com/wos/author/record/HNR-9406-2023' },
      { tip: 'ORCID', url: 'https://orcid.org/0000-0002-0269-2886' }
    ]
  };

  return <ProfesorProfile data={data} />;
}
