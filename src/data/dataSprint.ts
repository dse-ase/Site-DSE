// DataSprint 2026 apare în două locuri: promo-ul din hero (HomePage) și cardul din
// ActivitatePage. Datele stau aici ca să nu se desincronizeze.
// Promo-ul din hero se ascunde singur după `dataEnd`; butonul „Aplică” dispare după
// `termenLimita`. Pentru o ediție nouă, actualizează doar acest fișier.

export const dataSprint = {
  titlu: 'DataSprint 2026',
  slogan: 'Construiește un sistem de alertă timpurie pentru riscuri care impactează piața.',
  dataText: '4-6 noiembrie 2026',
  loc: 'București',
  dataStart: '2026-11-04',
  dataEnd: '2026-11-06',
  termenLimita: '2026-10-11',
  termenLimitaText: '11 octombrie 2026',
  termenLimitaScurt: '11 octombrie',
  linkAplicare: 'https://forms.gle/wdiqFvmLRf87Noqw8',
  contact: 'cristina.boboc@csie.ase.ro',
  organizatori: 'KPMG România, Societatea Antreprenorială Studențească și DSE',
} as const;

/** Compară zile calendaristice locale, nu momente — un termen „până pe 11” e valabil toată ziua de 11. */
export function aTrecutZiua(isoDate: string, azi = new Date()): boolean {
  const [y, m, d] = isoDate.split('-').map(Number);
  const sfarsitZi = new Date(y, m - 1, d, 23, 59, 59, 999);
  return azi > sfarsitZi;
}
