import { Reveal, SolDeMayo } from "../shared/ui";
import editorial1 from "@/assets/editorial1.jpg";

export default function NuestraEsencia() {
  return (
    <section id="nuestra-esencia" className="relative py-28 md:py-40 px-6 md:px-12 bg-ivory">
      <div className="absolute left-0 top-0 bottom-0 w-2 hidden lg:block">
        <div className="h-1/3 bg-celeste" />
        <div className="h-1/3 bg-ivory" />
        <div className="h-1/3 bg-celeste" />
      </div>

      <div className="mx-auto max-w-[1500px] grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
        <div className="lg:col-span-5">
          <Reveal>
            <p className="label-eyebrow mb-6 text-celeste-deep">01 · Nuestra Esencia</p>
          </Reveal>
          <Reveal delay={120}>
            <div className="relative">
              <img src={editorial1} alt="Editorial fashion argentino frente a fachada Belle Époque" loading="lazy" width={1280} height={1600} className="w-full h-[45vh] md:h-[70vh] object-cover shadow-[0_30px_80px_-30px_rgba(30,111,184,0.5)]" />
              <div className="absolute -bottom-6 -right-6 bg-sol p-5 shadow-xl rotate-3">
                <SolDeMayo className="h-12 w-12 text-ink" />
              </div>
            </div>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-10 font-mono text-xs text-ink-soft">No. 001 — El despertar de una nación creativa</p>
          </Reveal>
        </div>
        <div className="lg:col-span-7 lg:pl-12 flex flex-col justify-center">
          <Reveal>
            <h2 className="font-display text-5xl md:text-7xl lg:text-[5.2rem] leading-[0.95] text-balance text-ink">
              No es una semana de moda.
              <br />
              Es un <span className="italic text-celeste-deep">movimiento cultural.</span>
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <div className="mt-10 flex items-center gap-3">
              <div className="h-[3px] w-16 bg-celeste-deep" />
              <div className="h-[3px] w-8 bg-sol" />
              <div className="h-[3px] w-4 bg-tango" />
            </div>
          </Reveal>
          <Reveal delay={300}>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10 text-ink-soft text-lg font-light leading-relaxed">
              <p>
                Argentina es <strong className="text-ink font-medium">tango, fútbol, literatura, asado, milonga, cine, arquitectura</strong>.
                Es una de las identidades culturales más poderosas del planeta.
              </p>
              <p>
                Hoy, esa misma fuerza creativa está lista para tomar el escenario global
                de la moda. <strong className="text-ink font-medium">Es nuestro turno.</strong>
              </p>
              <p>
                Argentina Haute Couture no celebra el lujo silencioso —
                celebra el <strong className="text-celeste-deep font-medium">orgullo</strong>,
                la <strong className="text-tango font-medium">pasión</strong> y el
                <strong className="text-sol-deep font-medium"> talento argentino</strong> en
                todas sus formas.
              </p>
              <p>
                Es la plataforma cultural que convierte a Buenos Aires en la nueva capital
                creativa del hemisferio sur.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
