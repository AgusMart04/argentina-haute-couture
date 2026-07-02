import { useState } from "react";
import { Reveal } from "../shared/ui";

export default function PorQueArgentina() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  return (
    <section id="porque" className="py-28 md:py-40 px-6 md:px-12 bg-ivory">
      <div className="mx-auto max-w-[1600px]">
        <div className="flex items-end justify-between flex-wrap gap-8 mb-16">
          <div>
            <Reveal>
              <p className="label-eyebrow mb-6">04 · Por qué Argentina</p>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="font-display text-5xl md:text-7xl leading-[0.95] text-ink max-w-4xl text-balance">
                Seis razones por las que el futuro creativo{" "}
                <span className="italic text-celeste-deep">se está escribiendo acá.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={200}>
            <p className="max-w-md text-ink-soft font-light text-lg">
              Argentina reúne lo que ninguna otra plaza de la región puede combinar al mismo tiempo.
              Y el mundo está empezando a notarlo.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {[
            {
              n: "01",
              t: "Talento creativo",
              d: "Diseñadores, directores creativos, fotógrafos y productores argentinos que ya colaboran con las grandes casas internacionales.",
              icon: "★",
            },
            {
              n: "02",
              t: "Identidad cultural",
              d: "El alma del tango, la pasión del fútbol, la elegancia porteña — una identidad nacional vibrante y reconocible en todo el mundo.",
              icon: "♦",
            },
            {
              n: "03",
              t: "Artesanía heredada",
              d: "Sastrería italiana, bordado francés y oficio textil transmitido por generaciones de inmigrantes y maestros argentinos.",
              icon: "✦",
            },
            {
              n: "04",
              t: "Buenos Aires global",
              d: "Una capital cultural reconocida — gastronomía, arquitectura, literatura, cine y diseño que dialoga con el mundo desde hace un siglo.",
              icon: "❖",
            },
            {
              n: "05",
              t: "Mercado emergente",
              d: "Una ventana de oportunidad real para marcas, inversores y patrocinadores que entienden el valor del posicionamiento temprano.",
              icon: "◆",
            },
            {
              n: "06",
              t: "Orgullo nacional",
              d: "Un país que celebra a los suyos como pocos. Cuando Argentina decide brillar, lo hace con una energía imposible de ignorar.",
              icon: "✺",
            },
          ].map((b, i) => {
            const isExpanded = expanded[b.n];
            return (
              <Reveal
                key={b.n}
                delay={(i % 3) * 80}
                className="bg-ivory p-10 md:p-12 min-h-[320px] hover:bg-cloud transition-colors duration-500 group"
              >
                <div className="flex items-baseline justify-between">
                  <span className="font-impact text-2xl text-celeste-deep">{b.n}</span>
                  <span className="text-3xl text-sol-deep group-hover:rotate-180 transition-transform duration-700">
                    {b.icon}
                  </span>
                </div>
                <h3 className="mt-8 font-display text-3xl text-ink">{b.t}</h3>
                <div className="hairline w-12 mt-4" />
                <p
                  className={`mt-6 text-ink-soft font-light leading-relaxed ${!isExpanded ? "line-clamp-2 md:line-clamp-none" : ""}`}
                >
                  {b.d}
                </p>
                <button
                  onClick={() => setExpanded((prev) => ({ ...prev, [b.n]: !prev[b.n] }))}
                  className="mt-3 text-sm text-celeste-deep font-medium md:hidden"
                >
                  {isExpanded ? "Ver menos" : "Ver más"}
                </button>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
