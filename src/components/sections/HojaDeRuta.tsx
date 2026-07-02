import { Reveal } from "../shared/ui";

export default function HojaDeRuta() {
  const steps = [
    { p: "Visión", s: "Q1 2025" },
    { p: "Desarrollo", s: "Q2 2025" },
    { p: "Alianzas", s: "Q3 2025" },
    { p: "Diseñadores", s: "Q1 2026" },
    { p: "Lanzamiento", s: "Q3 2026" },
    { p: "Nov 2026", s: "La Semana", final: true },
  ];

  return (
    <section className="py-28 md:py-40 px-6 md:px-12 bg-ivory">
      <div className="mx-auto max-w-[1500px]">
        <Reveal>
          <p className="label-eyebrow mb-6">09 · Hoja de ruta</p>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="font-display text-5xl md:text-7xl leading-[0.95] text-ink text-balance">
            Camino a <span className="italic text-celeste-deep">Noviembre 2026.</span>
          </h2>
        </Reveal>

        <div className="mt-20 relative">
          <div className="hidden md:block absolute left-0 right-0 top-3 h-[3px] gradient-argentina animate-gradient-shift" />
          <div className="md:hidden absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[3px] gradient-argentina animate-gradient-shift" />

          {/* Desktop grid */}
          <div className="hidden md:grid grid-cols-6 gap-6">
            {steps.map((step, i) => (
              <Reveal key={step.p} delay={i * 100} className="relative">
                <div
                  className={`h-6 w-6 rounded-full mb-6 -mt-1.5 border-4 border-ivory ${step.final ? "bg-sol shadow-[0_0_30px_var(--color-sol)]" : "bg-celeste-deep"}`}
                />
                <p className={`font-display text-2xl ${step.final ? "text-tango" : "text-ink"}`}>
                  {step.p}
                </p>
                <p className="mt-2 label-eyebrow text-ink-soft text-xs">{step.s}</p>
              </Reveal>
            ))}
          </div>

          {/* Mobile vertical */}
          <div className="md:hidden flex flex-col gap-12">
            {steps.map((step, i) => {
              const isLeft = i % 2 === 0;
              return (
                <Reveal key={step.p} delay={i * 100} className="relative flex items-start">
                  {isLeft ? (
                    <>
                      <div className="w-1/2 pr-6 text-right">
                        <p
                          className={`font-display text-2xl ${step.final ? "text-tango" : "text-ink"}`}
                        >
                          {step.p}
                        </p>
                        <p className="mt-2 label-eyebrow text-ink-soft text-xs">{step.s}</p>
                      </div>
                      <div
                        className={`absolute left-1/2 -translate-x-1/2 top-1 h-6 w-6 rounded-full border-4 border-ivory z-10 ${step.final ? "bg-sol shadow-[0_0_30px_var(--color-sol)]" : "bg-celeste-deep"}`}
                      />
                      <div className="w-1/2" />
                    </>
                  ) : (
                    <>
                      <div className="w-1/2" />
                      <div
                        className={`absolute left-1/2 -translate-x-1/2 top-1 h-6 w-6 rounded-full border-4 border-ivory z-10 ${step.final ? "bg-sol shadow-[0_0_30px_var(--color-sol)]" : "bg-celeste-deep"}`}
                      />
                      <div className="w-1/2 pl-6">
                        <p
                          className={`font-display text-2xl ${step.final ? "text-tango" : "text-ink"}`}
                        >
                          {step.p}
                        </p>
                        <p className="mt-2 label-eyebrow text-ink-soft text-xs">{step.s}</p>
                      </div>
                    </>
                  )}
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
