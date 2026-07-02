import { Link } from "@tanstack/react-router";
import { Reveal, SolDeMayo } from "../shared/ui";
import runwayImg from "@/assets/runway.jpg";

export default function CtaFinal() {
  return (
    <section className="relative min-h-[90svh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={runwayImg} alt="" loading="lazy" className="h-full w-full object-cover animate-slow-zoom" />
        <div className="absolute inset-0 bg-gradient-to-b from-celeste-deep/40 via-ink/70 to-ink" />
        <div className="absolute inset-0 bg-gradient-to-tr from-tango/20 via-transparent to-sol/20 mix-blend-overlay" />
      </div>
      <div className="relative z-10 text-center px-6 max-w-6xl py-32">
        <Reveal>
          <SolDeMayo className="h-16 w-16 mx-auto text-sol animate-sun-spin mb-8" />
        </Reveal>
        <Reveal delay={100}>
          <h2 className="font-display text-5xl md:text-7xl lg:text-[8rem] leading-[0.85] text-ivory text-balance">
            Argentina está construyendo
          </h2>
        </Reveal>
        <Reveal delay={200}>
          <p className="mt-10 max-w-2xl mx-auto text-ivory/90 font-light text-xl">
            Patrocinadores, inversores, diseñadores, marcas y prensa —
            el primer capítulo se está escribiendo ahora. Y vos podés estar adentro.
          </p>
        </Reveal>
        <Reveal delay={300}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            <Link to="/contacto" className="group relative overflow-hidden bg-sol text-ink px-12 py-5 label-eyebrow hover:scale-105 hover:shadow-[0_30px_80px_-10px_rgba(245,180,0,0.9)] transition-all duration-300 shadow-[0_25px_70px_-15px_rgba(245,180,0,0.8)]">
              <span className="relative z-10">Ser Patrocinador</span>
              <span className="absolute inset-0 bg-white/30 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12" />
            </Link>
            <Link to="/contacto" className="label-eyebrow text-ivory border-2 border-ivory/60 px-12 py-5 hover:bg-ivory hover:text-ink transition">
              Sumate al Movimiento
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
