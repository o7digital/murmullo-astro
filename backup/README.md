# Backup du site El Murmullo

**Date de sauvegarde:** 19 décembre 2025

## Description

Cette sauvegarde contient une copie complète du site original El Murmullo hébergé sur le serveur d'Alain.

- **URL d'origine:** https://www.el-murmullo.com
- **Taille totale:** ~17 MB
- **Nombre de fichiers:** 145+

## Contenu

### Structure
```
www.el-murmullo.com/
├── en/                           # Version anglaise
│   ├── *.php.html               # Pages PHP (converties en .html)
│   ├── css/                     # Feuilles de style
│   ├── js/                      # Scripts JavaScript
│   └── images/                  # Images et photos
│       ├── home/               # Images de la page d'accueil
│       ├── senora/             # Suite Señora Tentación
│       ├── sueno/              # Suite Sueño Guajiro
│       ├── serenata/           # Suite Serenata Sureña
│       ├── senorita/           # Suite Señorita Sonrisa
│       ├── kit/                # Images de présentation
│       └── prettyPhoto/        # Galerie photo
└── es/                          # Version espagnole (partielle)
```

### Pages principales sauvegardées
- Page d'accueil (luxury-romantic-boutique-hotel-zihuatanejo-ixtapa-mexico.php)
- Señora Tentación (senora-tentacion.php)
- Sueño Guajiro (sueno-guajiro.php)
- Serenata Sureña (serenata-surena.php)
- Señorita Sonrisa (senorita-sonrisa.php)
- Contact (contact.php)
- Privacy Notice (privacy-notice.php)

### Ressources sauvegardées
- ✅ Toutes les images des suites
- ✅ Images de la galerie principale
- ✅ CSS (Bootstrap, animations, responsive)
- ✅ JavaScript (jQuery, Fotorama, Isotope, etc.)
- ✅ Polices et icônes
- ✅ Logo La Casa Que Canta

## Notes importantes

1. **Les fichiers PHP ont été convertis en .html** par wget pour permettre une consultation locale
2. **Les liens ont été convertis** pour fonctionner en local
3. Cette sauvegarde a été créée avant la refonte du site en Astro
4. Le site original date de 2006 et est toujours hébergé sur le serveur d'Alain

## Utilisation

Pour consulter le site sauvegardé localement :
```bash
cd www.el-murmullo.com/en
open luxury-romantic-boutique-hotel-zihuatanejo-ixtapa-mexico.php.html
```

## Commande de sauvegarde utilisée

```bash
wget --mirror --page-requisites --adjust-extension --convert-links \
     --no-parent --timestamping --wait=1 --random-wait \
     --user-agent="Mozilla/5.0" \
     https://www.el-murmullo.com/en/luxury-romantic-boutique-hotel-zihuatanejo-ixtapa-mexico.php
```

---

*Cette sauvegarde sert de référence pour la refonte du site en Astro.*
