import { ProfesorProfile } from '../../components/ProfesorProfile';

export function GabrielaNiculescuPage() {
  const data = {
    name: 'NICULESCU ARON Ileana Gabriela',
    initials: 'NI',
    role: 'Profesor Universitar Dr.',
    specializations: [
      'Analiza comportamentului financiar al populației',
      'Economisire și îndatorare a gospodăriilor',
      'Piața muncii și deficitul de forță de muncă',
      'Demografie și îmbătrânire demografică',
      'Economie aplicată și modelare statistică/econometrică',
      'E-learning și statistica în educație'
    ],
    email: 'gabriela.niculescu@csie.ase.ro',
    facultate: 'Facultatea de Cibernetică, Statistică și Informatică Economică',
    activitateDidactica: [
      'Statistică teoretică și statistică economică',
      'Anchete și sondaje statistice',
      'Demografie',
      'Econometrie',
      'Tehnici speciale în sondaje și anchete (program master)',
      'Cercetări de marketing'
    ],
    domeniiCercetare: [
      'Analiza comportamentului financiar al populației',
      'Economisire și îndatorare a gospodăriilor',
      'Piața muncii și deficitul de forță de muncă',
      'Demografie și îmbătrânire demografică',
      'Economie aplicată și modelare statistică/econometrică',
      'E-learning și statistica în educație'
    ],
    tezeDoctorat: [],
    publicatiiRelevante: [
      'Niculescu-Aron, I.G. – Procesul de economisire în România. Economisirea populației, Studii Postdoctorale în Economie, Editura Academiei Române, 2013',
      'Niculescu-Aron, I.G. – Using ordinal regression modeling to evaluate the financial potential of households, Journal of Economic Computation and Economic Cybernetics Studies and Research, 2013',
      'Niculescu-Aron, I.G.; Mihăescu, C. – An analysis of the saving behavior in Romania, Research Journal of Economics, Business and ICT, 2012',
      'Niculescu-Aron, I.G.; Mihăescu, C. – Household Saving in Western European Countries, Journal of Economic and Social Statistics, 2012',
      'Niculescu-Aron, I.G. et al. – Recent Developments in the Borrowing Behaviour of Romanian Households, Journal of Economic Computation and Economic Cybernetics Studies and Research, 2010'
    ],
    proiecteCercetare: [
      'PN1: Dezvoltarea și consolidarea culturii calității în învățământul superior românesc – QUALITAS (POSDRU) – Expert analiză date',
      'PN3: Procesul de economisire în România. Economisirea populației – Bursă postdoctorală (Academia Română)',
      'PN5: Modelarea comportamentului financiar al populației sub impactul îmbătrânirii demografice – Membru',
      'PN6: Model statistic-econometric pentru detectarea timpurie a insolvenței companiilor bazate pe TIC – Membru',
      'PN9: Deficitul actual de forță de muncă în ramura construcțiilor – Director de proiect',
      'PN10: Modelul sistemului informațional național pentru caracterizarea noii economii în România – Membru'
    ],
    cvProfiluri: []
  };

  return <ProfesorProfile data={data} />;
}
