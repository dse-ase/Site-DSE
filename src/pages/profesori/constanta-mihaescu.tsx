import { ProfesorProfile } from '../../components/ProfesorProfile';
import photoConstantaMihaescu from '../../assets/Poze Profesori/Mihaescu-Constanta.jpeg';
export function ConstantaMihaescuPage() {
  const data = {
    name: 'MIHĂESCU Constanța',
    initials: 'MC',
    photo: photoConstantaMihaescu,
    role: 'Profesor Universitar Dr.',
    specializations: [
      'Demografie și îmbătrânire demografică',
      'Piața muncii și resursele de muncă',
      'Statistică socială și calitatea vieții',
      'Dezvoltare durabilă și dimensiunea socială a sustenabilității',
      'Analize statistico-econometrice aplicate'
    ],
    email: 'constanta.mihaescu@csie.ase.ro',
    facultate: 'Facultatea de Cibernetică, Statistică și Informatică Economică',
    activitateDidactica: [
      'Demografie',
      'Statistică Socială',
      'Statistică teoretică',
      'Analiza calității vieții',
      'Statistique pour les affaires'
    ],
    domeniiCercetare: [
      'Demografie și îmbătrânire demografică',
      'Piața muncii și resursele de muncă',
      'Statistică socială și calitatea vieții',
      'Dezvoltare durabilă și dimensiunea socială a sustenabilității',
      'Analize statistico-econometrice aplicate'
    ],
    tezeDoctorat: [],  // Gol - nu va fi afișat
    publicatiiRelevante: [],  // Gol - nu va fi afișat
    proiecteCercetare: [
      'Istoria României prin prisma recensămintelor populației și locuințelor (Director, 2019–2020)',
      'Modelarea comportamentului financiar al populației sub impactul îmbătrânirii demografice (Director Consorțiu, 2007–2010)',
      'Scenarii privind evoluția procesului de îmbătrânire demografică a populației României (Director, 2003)'
    ],
    cvProfiluri: []  // Gol - nu va fi afișat
  };

  return <ProfesorProfile data={data} />;
}
