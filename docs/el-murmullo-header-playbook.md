# El Murmullo - Memoire technique Header (reference pour El Ensueno)

## Objectif
Garder une reference claire des ajustements UI/UX faits sur El Murmullo pour les reproduire rapidement sur un autre site (ex: El Ensueno), surtout:
- Header desktop/mobile
- Mot `Suites` (mise en avant + megamenu)
- Bouton `Book Now` (style + animation)
- Position du logo flottant du hero

## Commits de reference
- `cb1cfd2` - `Style Book Now button with blue flash animation`
- `7c8b236` - `Increase header nav sizing and highlight Suites link`
- `fc08795` - `Adjust hero logo vertical offset above back-to-top button`

## Fichiers impactes
- `src/components/react/Header.tsx`
- `src/styles/global.css`
- `src/components/react/HeroSlider.tsx`
- Contexte de collision (CTA flottant): `src/components/astro/Footer.astro`

## 1) Header - structure et comportement
Fichier: `src/components/react/Header.tsx`

Regles principales:
- Header fixe en haut, fond blanc translucide + blur:
  - `fixed inset-x-0 top-0 z-50 bg-white/95 backdrop-blur-sm shadow-md`
- Header qui se cache au scroll vers le bas et reapparait vers le haut:
  - Etat `visible` pilote `translate-y-0` / `-translate-y-full`
  - Logique dans `handleScroll` (comparaison `currentScrollY` vs `lastScrollY`)
- Navigation desktop agrandie:
  - `text-base xl:text-[1.05rem] font-bold`

Points de code utiles:
- `src/components/react/Header.tsx:135`
- `src/components/react/Header.tsx:156`
- `src/components/react/Header.tsx:115`

## 2) Mot `Suites` - mise en avant + megamenu stable
Fichier: `src/components/react/Header.tsx`

Implementation:
- Le lien `Suites` est defini avec `hasMegamenu: true` dans `navLinks`
  - `en`: `/#suites`
  - `es`: `/es#suites`
- Couleur speciale appliquee a tous les liens avec `hasMegamenu`:
  - texte: `text-[#007CAA] hover:text-[#006a92]`
  - underline: `bg-[#007CAA]/70`
- Megamenu ouvre/ferme par hover avec temporisation anti-flicker:
  - `openSuitesMenu()`
  - `scheduleCloseSuitesMenu()` avec timeout `200ms`
- Megamenu en `fixed` sous le header:
  - `fixed left-0 right-0 top-[88px] pt-4`

Points de code utiles:
- `src/components/react/Header.tsx:12`
- `src/components/react/Header.tsx:167`
- `src/components/react/Header.tsx:173`
- `src/components/react/Header.tsx:182`
- `src/components/react/Header.tsx:97`

## 3) Bouton `Book Now` - style bleu + pulse
Fichiers:
- `src/components/react/Header.tsx`
- `src/styles/global.css`

Implementation:
- Texte dynamique selon langue:
  - `Book Now` (EN) / `Reservar Ahora` (ES)
- CTA en bleu brand:
  - `bg-[#007CAA]`
  - hover `bg-[#006a92]`
- Classe animation:
  - `book-now-flash`
- Taille typo montee pour meilleure lisibilite:
  - `text-sm sm:text-base`
- Accessibilite motion:
  - animation desactivee si `prefers-reduced-motion: reduce`

Points de code utiles:
- `src/components/react/Header.tsx:62`
- `src/components/react/Header.tsx:260`
- `src/components/react/Header.tsx:266`
- `src/styles/global.css:45`
- `src/styles/global.css:57`
- `src/styles/global.css:62`

## 4) Logo flottant du hero - position et anti-chevauchement
Fichiers:
- `src/components/react/HeroSlider.tsx`
- `src/components/astro/Footer.astro` (bouton `Back to Top`)

Implementation actuelle:
- Le logo est en bas a droite, au-dessus de l image hero:
  - `pointer-events-none absolute ... z-20`
- Offset vertical augmente pour eviter collision visuelle avec `Back to Top`:
  - `bottom-[2.7rem]` (mobile)
  - `sm:bottom-[3.2rem]`
  - `lg:bottom-[3.7rem]`

Contexte collision:
- `Back to Top` est `fixed bottom-4 right-4 z-50`
- Le logo et le CTA peuvent se rapprocher visuellement en bas a droite selon viewport

Points de code utiles:
- `src/components/react/HeroSlider.tsx:115`
- `src/components/astro/Footer.astro:107`

## 5) Recette de migration vers El Ensueno
Ordre recommande:
1. Copier la logique de `Header.tsx` (scroll show/hide + menu desktop/mobile).
2. Reproduire `hasMegamenu` pour `Suites` avec la meme regle couleur.
3. Reprendre la classe `book-now-flash` et ses keyframes dans `global.css`.
4. Ajuster les URLs de reservation (`href`) au moteur El Ensueno.
5. Positionner le logo hero avec un offset bas-droit compatible avec le CTA flottant.
6. Verifier en responsive: 390px, 768px, 1024px, 1440px.

## 6) Validation rapide (checklist)
- Le header disparait au scroll down et revient au scroll up.
- `Suites` est clairement differencie (bleu + underline bleu).
- Le megamenu `Suites` ne clignote pas quand la souris passe du lien au panel.
- `Book Now` est lisible, anime, et respecte `prefers-reduced-motion`.
- Le logo hero ne chevauche pas `Back to Top` sur mobile et desktop.

