import { useRef, useState } from "react";
import { Reveal } from "../shared/ui";
import runwayImg from "@/assets/runway.jpg";
import atelierImg from "@/assets/atelier.jpg";
import editorial1 from "@/assets/editorial1.jpg";
import detail1 from "@/assets/detail1.jpg";
import heroImg from "@/assets/hero.jpg";
import venueImg from "@/assets/venue.jpg";
import maderoImg from "@/assets/madero.jpg";
import buenosAiresImg from "@/assets/buenosaires.jpg";

export default function LaExperiencia() {
  const experienceTrackRef = useRef<HTMLDivElement>(null);
  const [activeExp, setActiveExp] = useState(0);

  const onExperienceScroll = () => {
    const el = experienceTrackRef.current;
    if (!el) return;
    const cardWidth = el.scrollWidth / 8;
    const center = el.scrollLeft + el.clientWidth / 2;
    setActiveExp(Math.min(7, Math.max(0, Math.floor(center / cardWidth))));
  };

  const items = [
    {
      n: "01",
      t: "Desfiles de Alta Costura",
      d: "Pasarelas de alta costura con diseñadores argentinos e internacionales.",
      img: runwayImg,
    },
    {
      n: "02",
      t: "Showcase de Diseñadores",
      d: "Exposición exclusiva de las nuevas propuestas de la moda argentina.",
      img: atelierImg,
    },
    {
      n: "03",
      t: "Tango & Couture Night",
      d: "Una noche fusión de tango y alta costura en un icónico espacio porteño.",
      img: editorial1,
    },
    {
      n: "04",
      t: "Exhibiciones de Arte",
      d: "Arte argentino contemporáneo en dialogue con la moda.",
      img: detail1,
    },
    {
      n: "05",
      t: "Producciones Editoriales",
      d: "Sesiones fotográficas y contenido editorial de alto impacto.",
      img: heroImg,
    },
    {
      n: "06",
      t: "Activaciones de Marcas",
      d: "Experiencias inmersivas de marcas globales en la ciudad.",
      img: venueImg,
    },
    {
      n: "07",
      t: "Prensa Internacional",
      d: "Medios internacionales cubriendo el evento en vivo.",
      img: maderoImg,
    },
    {
      n: "08",
      t: "Programa Cultural",
      d: "Unaagenda cultural que trasciende la moda.",
      img: buenosAiresImg,
    },
  ];

  const desktopItems = [
    { n: "01", t: "Desfiles de Alta Costura", img: runwayImg },
    { n: "02", t: "Showcase de Diseñadores Argentinos", img: atelierImg },
    { n: "03", t: "Tango & Couture Night", img: editorial1 },
    { n: "04", t: "Exhibiciones de Arte Argentino", img: detail1 },
    { n: "05", t: "Producciones Editoriales", img: heroImg },
    { n: "06", t: "Activaciones de Marcas Globales", img: venueImg },
    { n: "07", t: "Prensa Internacional", img: maderoImg },
    { n: "08", t: "Programa Cultural Porteño", img: buenosAiresImg },
  ];

  return (
    <section id="experiencia" className="py-28 md:py-40 px-6 md:px-12 bg-ink text-ivory">
      <div className="mx-auto max-w-[1600px]">
        <div className="flex items-end justify-between flex-wrap gap-8 mb-16">
          <div>
            <Reveal>
              <p className="label-eyebrow mb-6 text-sol">06 · La experiencia</p>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="font-display text-5xl md:text-7xl leading-[0.95] text-ivory max-w-4xl text-balance">
                Ocho capítulos para
                <br />
                <span className="italic text-sol">encender una ciudad.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={200}>
            <p className="max-w-md text-ivory/70 font-light text-lg">
              No es solo una semana. Es Buenos Aires entera transformada en escenario.
            </p>
          </Reveal>
        </div>

        {/* Mobile: horizontal scroll-snap row */}
        <div className="mb-16 md:hidden">
          <div
            ref={experienceTrackRef}
            onScroll={onExperienceScroll}
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {items.map((e, i) => {
              const isActive = activeExp === i;
              return (
                <figure
                  key={e.n}
                  className={`snap-start shrink-0 basis-[78%] overflow-hidden transition-all duration-500 ease-out ${
                    isActive ? "scale-100 opacity-100" : "scale-[0.95] opacity-70"
                  }`}
                >
                  <div className="relative aspect-[3/4] w-full">
                    <img
                      src={e.img}
                      alt={e.t}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-6">
                      <div className="flex items-baseline gap-3">
                        <span className="font-impact text-sol text-sm">{e.n}</span>
                        <span className="h-px flex-1 bg-sol/20" />
                      </div>
                      <h3 className="mt-4 font-display text-2xl text-ivory leading-tight">{e.t}</h3>
                      <p className="mt-3 text-sm text-ivory/70 leading-relaxed">{e.d}</p>
                      <div className="mt-4 flex items-center gap-2 label-eyebrow text-sol text-xs">
                        Descubrir <span>→</span>
                      </div>
                    </div>
                  </div>
                </figure>
              );
            })}
          </div>
          <div className="mt-6 flex items-center justify-center gap-3">
            {Array.from({ length: 8 }).map((_, i) => (
              <span
                key={i}
                className={`h-1.5 rounded-full transition-all duration-300 ${activeExp === i ? "w-6 bg-sol" : "w-1.5 bg-sol/30"}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop: 4-col grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-px bg-celeste-deep/30">
          {desktopItems.map((e, i) => (
            <Reveal
              key={e.n}
              delay={(i % 4) * 80}
              className="group relative aspect-[3/4] overflow-hidden bg-ink cursor-pointer"
            >
              <img
                src={e.img}
                alt={e.t}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent group-hover:from-celeste-deep/80 group-hover:via-ink/40 transition-all duration-700" />
              <div className="absolute inset-0 p-7 flex flex-col justify-between">
                <span className="font-impact text-sol text-xl">{e.n}</span>
                <div>
                  <h3 className="font-display text-2xl md:text-3xl text-ivory leading-tight">
                    {e.t}
                  </h3>
                  <div className="mt-4 flex items-center gap-3 label-eyebrow text-sol text-xs opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                    Descubrir <span>→</span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
