type SuiteDetailTranslation = {
  label: string;
  copy: string;
};

type SuiteTranslation = {
  displayTitle?: string;
  tagline: string;
  description: string;
  guests: string;
  bed: string;
  view: string;
  specs?: string[];
  details: SuiteDetailTranslation[];
  amenities: string[];
};

export const suiteTranslations: Record<string, SuiteTranslation> = {
  "sra-tentacion": {
    tagline: "Suite insignia con brisas marinas panoramicas y luz intima.",
    description:
      "Descubra la hermosa vista panoramica desde cualquier rincon de esta amplia suite. La elegante decoracion con muebles artesanales mexicanos realza el tono gris azulado de los muros y la coleccion de espejos dorados decorados a mano. Relajese en el balcon, desayune en la terraza o refresquese en la plunge pool.",
    guests: "2 personas",
    bed: "Plunge pool | Terraza de dos niveles | Bano de lujo",
    view: "Vista al oceano",
    details: [
      {
        label: "Cama",
        copy: "Cama king extragrande con dosel de lino y cabecera artesanal.",
      },
      {
        label: "Bano",
        copy: "Ducha tipo spa con piedra natural e iluminacion suave.",
      },
      {
        label: "Amenidades",
        copy: "Set de bano de disenador, servicio a la habitacion y sistema de sonido premium.",
      },
      {
        label: "Vista",
        copy: "Vista al oceano ininterrumpida enmarcada por la selva.",
      },
    ],
    amenities: [
      "Guacamole y tequila de bienvenida",
      "Limpieza dos veces al dia",
      "Amenidades herbales de lujo",
      "Batas de algodon pique",
      "Banos con doble lavabo",
      "TV de pantalla plana, SKY TV",
    ],
  },
  "garden-suite": {
    displayTitle: "Garden Suite SUENO GUAJIRO",
    tagline: "Un refugio sereno entre verdes tropicales y sombra suave.",
    description:
      "Amplia suite privada con terraza, jardin tropical y camastros junto a una plunge pool frente al oceano. Decorada en tonos gris verdoso y plateados, con mobiliario tradicional estilo hacienda mexicana y escritorio con vista al mar.",
    guests: "2 personas",
    bed: "Cama King size",
    view: "Vista al oceano y al jardin",
    specs: [
      "Cama King size",
      "Vista al oceano y al jardin",
      "Terraza",
      "Sala de estar en suite",
      "Plunge pool",
    ],
    details: [
      {
        label: "Cama",
        copy: "Cama Queen con sabanas organicas e iluminacion ambiental suave.",
      },
      {
        label: "Bano",
        copy: "Bano de piedra caliza con regadera tipo lluvia y vistas exuberantes.",
      },
      {
        label: "Amenidades",
        copy: "Refrigerios en la habitacion, tapetes de yoga y libros seleccionados.",
      },
      {
        label: "Vista",
        copy: "Jardin tropical enmarcado por palmeras y enredaderas floridas.",
      },
    ],
    amenities: [
      "Guacamole y tequila de bienvenida",
      "Limpieza dos veces al dia",
      "Amenidades herbales de lujo",
      "Batas de algodon pique",
      "Banos con doble lavabo",
      "TV de pantalla plana, SKY TV",
    ],
  },
  "junior-suite-senorita-surena": {
    tagline: "Luz suave del oceano en un interior elegante y aireado.",
    description:
      "Ubicada en el primer piso, esta elegante suite en tonos aqua blue ofrece doble vista a la bahia, decoracion mexicana contemporanea, cojines bordados a mano por artesanos chiapanecos, escritorio comodo y amplia terraza exterior.",
    guests: "2 personas",
    bed: "Plunge pool | Terraza de dos niveles | Bano de lujo",
    view: "Vista al oceano",
    details: [
      {
        label: "Cama",
        copy: "Cama King con cabecera artesanal e iluminacion suave.",
      },
      {
        label: "Bano",
        copy: "Bano de piedra elegante con regadera tipo lluvia y tocador.",
      },
      {
        label: "Amenidades",
        copy: "Set de bano insignia, minibar curado y audio premium.",
      },
      {
        label: "Vista",
        copy: "Suaves vistas al oceano enmarcadas por interiores calidos.",
      },
    ],
    amenities: [
      "Guacamole y tequila de bienvenida",
      "Limpieza dos veces al dia",
      "Amenidades herbales de lujo",
      "Batas de algodon pique",
      "Banos con doble lavabo",
      "TV de pantalla plana, SKY TV",
    ],
  },
  "junior-suite-senorita-sonrisa": {
    tagline: "Luz calida, texturas suaves y una sensacion ludica de calma.",
    description:
      "Ubicada en el primer piso, esta acogedora suite en tonos terracota cuenta con doble vista a la bahia y amplia terraza con plunge pool. Tambien incluye balcon, escritorio, banos dobles y piezas emblematicas de artesania mexicana.",
    guests: "2 personas",
    bed: "Plunge pool | Terraza de dos niveles | Bano de lujo",
    view: "Vista al oceano",
    details: [
      {
        label: "Cama",
        copy: "Cama Queen con capas de lino suave y textiles artesanales.",
      },
      {
        label: "Bano",
        copy: "Acabados de piedra calida con regadera tipo lluvia y luz de la terraza.",
      },
      {
        label: "Amenidades",
        copy: "Set de bano de disenador, minibar curado y servicio a la habitacion.",
      },
      {
        label: "Vista",
        copy: "Suave vista costera con tonos de atardecer.",
      },
    ],
    amenities: [
      "Guacamole y tequila de bienvenida",
      "Limpieza dos veces al dia",
      "Amenidades herbales de lujo",
      "Batas de algodon pique",
      "Banos con doble lavabo",
      "TV de pantalla plana, SKY TV",
    ],
  },
};
