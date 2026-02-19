# Instrucțiuni pentru Imagini - Export WordPress

## ✅ IMPORTANT: Logo-ul DSE este atașat în conversație!

Salvează imaginea logo-ului DSE ca: `/public/assets/images/logo/dse-logo.png`

## 📁 Structura folderului:

```
/public/assets/images/
├── logo/
│   └── dse-logo.png                    [Salvează imaginea atașată aici!]
├── slideshow/
│   ├── slide1.jpg
│   ├── slide2.jpg
│   └── slide3.jpg
├── testimonials/
│   ├── wids.jpg
│   ├── vlad.jpg
│   ├── adriana.jpg
│   └── oana.jpg
└── misc/
    ├── sinusoida.png
    └── campus-map.png
```

## 🎯 Path-uri în cod:

Toate componentele folosesc deja path-urile corecte:
```javascript
// Exemplu din Header.tsx:
const logoImage = '/assets/images/logo/dse-logo.png';

// Exemplu din HeroSection.tsx:
const slideImages = [
  '/assets/images/slideshow/slide1.jpg',
  '/assets/images/slideshow/slide2.jpg',
  '/assets/images/slideshow/slide3.jpg'
];
```

**NOTĂ:** Fișierele din `/public/` sunt servite la root, de aceea path-urile încep cu `/assets/` (nu `/public/assets/`)

## 📝 Pași de urmat:

### 1. Salvează Logo-ul DSE
- Imaginea este atașată în conversație Figma Make
- Salvează ca: `dse-logo.png` în `/public/assets/images/logo/`
- Format: PNG transparent
- Dimensiuni: 200x60px (sau păstrează dimensiunea originală)

### 2. Adaugă Imaginile pentru Slideshow
Creează sau obține 3 imagini pentru slideshow-ul de pe pagina principală:
- Campus ASE
- Studenți la curs
- Laboratoare/evenimente

Salvează ca: `slide1.jpg`, `slide2.jpg`, `slide3.jpg` în `/public/assets/images/slideshow/`

### 3. Adaugă Imaginile Testimoniale
4 imagini pentru pagina de testimoniale:
- `wids.jpg` - Echipa WiDS Datathon
- `vlad.jpg` - Vlad Teleabă
- `adriana.jpg` - Adriana Preda
- `oana.jpg` - Oana Pascalache

Salvează în `/public/assets/images/testimonials/`

### 4. Adaugă Imagini Misc
- `sinusoida.png` - Grafic cronologie pentru Istoric
- `campus-map.png` - Hartă campus ASE

Salvează în `/public/assets/images/misc/`

## 📐 Dimensiuni recomandate:

- **Logo**: 200x60px (format PNG transparent)
- **Slideshow**: 1200x800px (landscape, format JPG, 80% quality)
- **Testimonials echipă**: 1200x800px (landscape, format JPG, 85% quality)
- **Testimonials portret**: 400x400px (square, format JPG, 85% quality)
- **Sinusoida**: 1400x600px (format PNG pentru claritate)
- **Campus Map**: 1200x900px (format PNG/JPG, maximum quality)

## 🚀 Pentru export în WordPress:

Copiază ÎNTREG folderul `/public/assets/` în tema WordPress.

Path-urile vor funcționa automat deoarece sunt relative (`/assets/images/...`).

## ⚠️ Fișiere Placeholder

Am creat fișiere `.txt` în fiecare subfolder cu instrucțiuni.
Șterge-le după ce adaugi imaginile reale!