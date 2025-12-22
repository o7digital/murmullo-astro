import { useState } from "react";

const seaFeatures = [
  {
    url: "/images/embraced/embraced1.jpg",
    title: "Vues Océaniques",
    description: "Admirez les vues imprenables sur l'océan Pacifique depuis chaque coin de notre propriété.",
  },
  {
    url: "/images/embraced/embraced2.jpg",
    title: "Accès Plage Privée",
    description: "Profitez d'un accès direct à des plages vierges et des eaux cristallines.",
  },
  {
    url: "/images/embraced/embraced3.jpg",
    title: "Terrasses Panoramiques",
    description: "Détendez-vous sur nos terrasses privées avec des couchers de soleil à couper le souffle.",
  },
];

export default function EmbracedBySeaSlider() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="embraced-sea" className="relative py-6 md:py-8 bg-sand">
      <div className="container mx-auto px-6">
        {/* En-tête de section */}
        <div className="max-w-4xl mx-auto text-center mb-8">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-ink/60 block mb-4">
            Surrounded by the sea
          </span>
          <h2 className="font-editorial text-4xl md:text-5xl lg:text-6xl text-ink mb-6">
            Embraced by the Sea
          </h2>
          <p className="text-lg text-ink/70 max-w-2xl mx-auto">
            Experience the luxury of this Mexican home with Mediterranean nautical touches, ideal setting to admire the peaceful climate and panoramic views of the picturesque bay of Zihuatanejo.
          </p>
        </div>

        {/* Grille de contenu inspirée de Zotela */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {seaFeatures.map((feature, index) => (
            <div
              key={index}
              className="group relative cursor-pointer"
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg mb-4">
                <img
                  src={feature.url}
                  alt={feature.title}
                  className={`h-full w-full object-cover transition-all duration-700 ${
                    activeIndex === index ? "scale-110" : "scale-100"
                  }`}
                  loading="lazy"
                />
              </div>

              {/* Titre et description */}
              <div className="text-center">
                <h3 className="font-editorial text-2xl text-ink mb-2">
                  {feature.title}
                </h3>
                <p className="text-ink/70 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Texte additionnel */}
        <div className="mt-8 max-w-3xl mx-auto text-center">
          <p className="text-ink/70 leading-relaxed">
            Our privileged location offers direct access to pristine beaches and stunning ocean vistas. 
            Wake up to the sound of waves and enjoy breathtaking sunsets from your private terrace.
          </p>
        </div>
      </div>
    </section>
  );
}
