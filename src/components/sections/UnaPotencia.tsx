import { useState } from "react";
import { Reveal } from "../shared/ui";

export default function UnaPotencia() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  return (
    <section className="relative py-28 md:py-40 px-6 md:px-12 overflow-hidden bg-gradient-to-br from-cloud via-ivory to-cloud">
      <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-celeste/20 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-[600px] h-[600px] rounded-full bg-sol/25 blur-3xl" />

      <div className="relative mx-auto max-w-[1600px]">
        <Reveal>
          <p className="label-eyebrow mb-6">02 · Una potencia despierta</p>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="font-display text-5xl md:text-7xl lg:text-[6.5rem] leading-[0.9] text-ink text-balance max-w-6xl">
            América Latina escribe su{" "}
            <span className="italic text-celeste-deep">próximo capítulo</span> de moda.
            <br />Y se escribe en <span className="italic text-sol-deep">Argentina.</span>
          </h2>
        </Reveal>
        <div className="mt-16 grid lg:grid-cols-3 gap-6">
          {[
            {
              n: "01",
              t: "Un país en movimiento",
              d: "Una generación de diseñadores, artistas y creativos argentinos listos para explotar en el escenario internacional.",
              color: "celeste",
            },
            {
              n: "02",
              t: "Una ciudad icónica",
              d: "Buenos Aires combina cultura europea y latina como ninguna otra capital del mundo — Belle Époque, tango, arte y arquitectura.",
              color: "sol",
            },
            {
              n: "03",
              t: "Una herencia única",
              d: "Sastrería italiana, refinamiento francés y alma latina convergen en una identidad creativa imposible de replicar.",
              color: "tango",
            },
          ].map((b, i) => {
            const isExpanded = expanded[b.n];
            return (
              <Reveal key={b.n} delay={i * 120}>
                <div className="group relative bg-ivory border border-border p-10 h-full min-h-[340px] hover:border-celeste-deep transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_80px_-20px_rgba(30,111,184,0.3)]">
                  <div
                    className={`inline-flex items-center justify-center h-14 w-14 rounded-full ${b.color === "celeste" ? "bg-celeste/15 text-celeste-deep" : b.color === "sol" ? "bg-sol/20 text-sol-deep" : "bg-tango/15 text-tango"}`}
                  >
                    <span className="font-impact text-xl">{b.n}</span>
                  </div>
                  <h3 className="mt-8 font-display text-3xl text-ink leading-tight">{b.t}</h3>
                  <p
                    className={`mt-5 text-ink-soft font-light leading-relaxed ${!isExpanded ? "line-clamp-2 md:line-clamp-none" : ""}`}
                  >
                    {b.d}
                  </p>
                  <button
                    onClick={() => setExpanded((prev) => ({ ...prev, [b.n]: !prev[b.n] }))}
                    className="mt-3 text-sm text-celeste-deep font-medium md:hidden"
                  >
                    {isExpanded ? "Ver menos" : "Ver más"}
                  </button>
                  <div
                    className={`mt-8 h-1 w-12 ${b.color === "celeste" ? "bg-celeste-deep" : b.color === "sol" ? "bg-sol-deep" : "bg-tango"} group-hover:w-24 transition-all duration-500`}
                  />
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
