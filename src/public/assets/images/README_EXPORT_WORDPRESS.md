# 📸 Ghid Export Imagini pentru WordPress

## ✅ Verificare Completă Implementată

Toate path-urile `figma:asset` au fost înlocuite cu path-uri publice `/assets/images/`!

## 📁 Structură Completă

```
/public/assets/images/
├── logo/
│   └── dse-logo.png                    [Logo DSE pentru header]
├── slideshow/
│   ├── slide1.jpg                      [HeroSection slideshow]
│   ├── slide2.jpg                      [HeroSection slideshow]
│   └── slide3.jpg                      [HeroSection slideshow]
├── testimonials/
│   ├── wids.jpg                        [Echipă WiDS Datathon]
│   ├── vlad.jpg                        [Vlad Teleabă]
│   ├── adriana.jpg                     [Adriana Preda]
│   └── oana.jpg                        [Oana Pascalache]
└── misc/
    ├── sinusoida.png                   [Cronologie Istoric]
    └── campus-map.png                  [Hartă Campus ASE]
```

## 🔍 Fișiere Actualizate

### ✅ Componente cu imagini:
1. **Header.tsx** → Logo DSE
2. **SimpleHeader.tsx** → Logo DSE
3. **HeroSection.tsx** → 3 imagini slideshow
4. **Istoric.tsx** → Imagine sinusoidă cronologie
5. **ProgramSection.tsx** → Hartă campus
6. **CampusMapPopup.tsx** → Hartă campus
7. **TestimonialePage.tsx** → 4 imagini testimoniale

## 📋 Pași pentru Export WordPress

### 1. Pregătire Imagini

**Descarcă imaginile tale reale** și redenumește-le exact ca mai jos:

#### Logo (1 imagine):
- `dse-logo.png` (200x60px, format PNG cu fundal transparent)

#### Slideshow (3 imagini):
- `slide1.jpg` (1200x800px, landscape)
- `slide2.jpg` (1200x800px, landscape)
- `slide3.jpg` (1200x800px, landscape)

#### Testimoniale (4 imagini):
- `wids.jpg` (1200x800px pentru echipă sau 400x400px pentru portret)
- `vlad.jpg` (400x400px, portret profesional)
- `adriana.jpg` (400x400px, portret profesional)
- `oana.jpg` (400x400px, portret profesional)

#### Misc (2 imagini):
- `sinusoida.png` (1400x600px, grafic cronologie)
- `campus-map.png` (1200x900px, hartă)

### 2. Plasare în WordPress

**Opțiunea A - Temă WordPress Clasică:**
```
/wp-content/themes/[tema-ta]/assets/images/
```

**Opțiunea B - Theme Builder (Elementor, Divi, etc.):**
```
/wp-content/uploads/figma-make-assets/images/
```

Apoi actualizează în cod path-ul de bază:
```javascript
const baseImagePath = '/wp-content/uploads/figma-make-assets';
```

### 3. Verificare Paths în Cod

Toate path-urile folosesc formatul:
```javascript
'/assets/images/[subfolder]/[filename]'
```

Pentru WordPress, asigură-te că path-ul este:
```javascript
'/wp-content/themes/[tema]/assets/images/[subfolder]/[filename]'
```

SAU folosește funcția `get_template_directory_uri()`:
```php
<?php echo get_template_directory_uri(); ?>/assets/images/logo/dse-logo.png
```

### 4. Optimizare Imagini

**Înainte de upload, optimizează:**
- Folosește TinyPNG sau ImageOptim pentru compresie
- Convertește PNG-uri mari în JPG (dacă nu au transparență)
- Asigură-te că dimensiunile sunt corecte

**Dimensiuni Maxime Recomandate:**
- Logo: 200x60px (PNG)
- Slideshow: 1200x800px (JPG, 80% quality)
- Testimoniale echipă: 1200x800px (JPG, 80% quality)
- Testimoniale portret: 400x400px (JPG, 85% quality)
- Misc (sinusoidă): 1400x600px (PNG sau JPG)
- Misc (hartă): 1200x900px (PNG sau JPG)

## ⚠️ Important

1. **Păstrează EXACT numele fișierelor** - codul se bazează pe ele!
2. **Respectă structura de foldere** - subfoldere: `logo/`, `slideshow/`, `testimonials/`, `misc/`
3. **Testează local** înainte de a deploya pe WordPress
4. **Verifică permisiunile** folderelor în WordPress (755 pentru foldere, 644 pentru fișiere)

## 🎯 Placeholder-uri Actuale

Momentan, aplicația folosește placeholder-uri de la Unsplash pentru development.
**TREBUIE** să le înlocuiești cu imaginile reale ASE înainte de launch!

## 📞 Ajutor

Dacă întâmpini probleme:
1. Verifică că toate imaginile sunt în folderul corect
2. Verifică că numele fișierelor sunt IDENTICE cu cele din listă
3. Verifică că path-urile în WordPress sunt corecte
4. Verifică consolă browser pentru erori 404

---

**Data ultimei actualizări:** 11 Februarie 2026
**Versiune:** 1.0 - Export Ready
