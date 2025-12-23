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
  details: SuiteDetailTranslation[];
  amenities: string[];
};

export const suiteTranslations: Record<string, SuiteTranslation> = {
  "sra-tentacion": {
    tagline: "Suite insignia con brisas marinas panoramicas y luz intima.",
    description:
      "La suite de lujo definitiva con acabados premium, texturas seleccionadas y una terraza privada pensada para mananas pausadas y rituales al atardecer.",
    guests: "2-3 huespedes",
    bed: "Cama King + sala de estar",
    view: "Panorama del Pacifico",
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
      "Terraza privada",
      "Vista al oceano",
      "Wi-Fi de alta velocidad",
      "Control de clima",
      "Ritual de Nespresso y te",
      "Servicio a la habitacion",
      "Amenidades de bano de lujo",
      "Limpieza diaria",
      "Caja fuerte",
    ],
  },
  "garden-suite": {
    displayTitle: "Suite Jardin Sueno Guajiro",
    tagline: "Un refugio sereno entre verdes tropicales y sombra suave.",
    description:
      "Sumerjase en la naturaleza con una terraza serena, texturas calidas e interiores ventilados disenados para bajar el ritmo de su estancia.",
    guests: "2 huespedes",
    bed: "Cama Queen",
    view: "Refugio de jardin",
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
      "Terraza privada",
      "Vista al jardin",
      "Wi-Fi de alta velocidad",
      "Aire acondicionado",
      "Mini bar",
      "Limpieza diaria",
      "Kit de yoga en la habitacion",
      "Caja fuerte",
      "Servicio de te",
    ],
  },
  "junior-suite-senorita-surena": {
    tagline: "Luz suave del oceano en un interior elegante y aireado.",
    description:
      "Junior suite elegante y espaciosa con comodidades modernas y suaves vistas al oceano, perfecta para tardes tranquilas y noches de descanso.",
    guests: "2 huespedes",
    bed: "Cama King",
    view: "Vistas parciales al oceano",
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
      "Vistas parciales al oceano",
      "Wi-Fi de alta velocidad",
      "Control de clima",
      "Mini bar",
      "Ropa de cama premium",
      "Limpieza diaria",
      "Rincon de trabajo",
      "Caja fuerte",
      "Servicio a la habitacion",
    ],
  },
  "junior-suite-senorita-sonrisa": {
    tagline: "Luz calida, texturas suaves y una sensacion ludica de calma.",
    description:
      "Una suite luminosa y acogedora pensada para el confort y la relajacion, que equilibra detalles artesanales con un ambiente costero relajado.",
    guests: "2 huespedes",
    bed: "Cama Queen",
    view: "Vista costera",
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
      "Balcon privado",
      "Vista costera",
      "Wi-Fi de alta velocidad",
      "Aire acondicionado",
      "Mini bar",
      "Limpieza diaria",
      "Servicio a la habitacion",
      "Caja fuerte",
      "Iluminacion ambiental",
    ],
  },
};
