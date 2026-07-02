import { SolDeMayo } from "../shared/ui";
import heroImg from "@/assets/hero.jpg";

export default function Hero() {
  return (
    <section id="top" className="relative h-[100svh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Modelo de alta costura argentina con el Obelisco de Buenos Aires al amanecer"
          className="h-full w-full object-cover animate-slow-zoom"
          width={1920}
          height={1280}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/15 to-celeste-deep/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-celeste-deep/40 via-transparent to-sol-deep/30 mix-blend-multiply" />

      <div className="relative z-10 h-full flex flex-col">
        <div className="flex-1 flex items-center justify-center px-6">
          <div className="text-center max-w-7xl">
            <p className="label-eyebrow text-ivory/80 text-xs mb-6" style={{ animation: "reveal-blur 1.4s ease-out 0s both" }}>
              Noviembre 2026 · Buenos Aires
            </p>
            <h1 className="font-display text-[11vw] md:text-[6.5vw] leading-[0.88] tracking-[-0.045em] text-ivory drop-shadow-[0_4px_30px_rgba(0,0,0,0.35)]" style={{ animation: "reveal-blur 1.6s ease-out 0.1s both" }}>
              Está naciendo
            </h1>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3" style={{ animation: "reveal-blur 1.8s ease-out 0.4s both" }}>
              <span className="font-impact text-ivory text-2xl md:text-4xl tracking-[0.08em]">ARGENTINA</span>
              <SolDeMayo className="h-8 w-8 md:h-10 md:w-10 text-sol animate-sun-spin" />
              <span className="font-impact text-ivory text-2xl md:text-4xl tracking-[0.08em]">HAUTE COUTURE</span>
            </div>

            <p className="mt-10 max-w-3xl mx-auto text-ivory text-balance text-base md:text-xl font-light leading-relaxed" style={{ animation: "reveal-blur 2s ease-out 0.7s both" }}>
              La celebración de la creatividad argentina — desde Buenos Aires hacia el mundo.
            </p>

            <div className="mt-12 flex flex-wrap items-center justify-center gap-4" style={{ animation: "reveal-blur 2.2s ease-out 1s both" }}>
              <a href="#aliados" className="group relative overflow-hidden gradient-argentina animate-gradient-shift text-ivory px-10 py-5 label-eyebrow text-sm shadow-[0_20px_60px_-15px_rgba(30,111,184,0.6)] hover:scale-105 hover:shadow-[0_25px_70px_-10px_rgba(30,111,184,0.8)] transition-all duration-300">
                <span className="relative z-10">Ser Patrocinador Fundador</span>
                <span className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12" />
              </a>
              <a href="#nuestra-esencia" className="label-eyebrow text-ivory border-2 border-ivory/60 px-10 py-5 hover:bg-ivory hover:text-ink transition">
                Conocer el Movimiento
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
