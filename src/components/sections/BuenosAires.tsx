import { Reveal } from "../shared/ui";
import buenosAiresImg from "@/assets/buenosaires.jpg";

export default function BuenosAires() {
  return (
    <section id="ciudad" className="relative overflow-hidden">
      <div className="relative h-[80svh] min-h-[600px]">
        <img
          src={buenosAiresImg}
          alt="Vista aérea de Buenos Aires al atardecer con el Obelisco y la bandera argentina"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover animate-slow-zoom"
        />

        <div className="relative z-10 h-full flex items-end pb-16 md:pb-24 px-6 md:px-12">
          <div className="mx-auto max-w-[1600px] w-full">
            <Reveal>
              <p className="label-eyebrow mb-4 text-sol">03 · La ciudad</p>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="font-display text-6xl md:text-8xl lg:text-[10rem] leading-[0.85] text-ivory text-balance max-w-6xl drop-shadow-2xl">
                Buenos Aires
                <br />
                <span className="italic font-light text-sol">no es una sede.</span>
                <br />
                <span className="font-impact tracking-wide text-ivory">ES EL ESCENARIO.</span>
              </h2>
            </Reveal>
          </div>
        </div>
      </div>

      <div className="bg-ink text-ivory py-20 px-6 md:px-12">
        <div className="mx-auto max-w-[1600px] grid lg:grid-cols-12 gap-12">
          <Reveal className="lg:col-span-5">
            <p className="text-ivory/85 text-lg md:text-xl font-light leading-relaxed">
              Una ciudad que respira creatividad en cada esquina. París del Sur. Capital mundial del
              tango. Capital editorial de Latinoamérica. Una arquitectura construida para el
              espectáculo y una vida cultural imposible de imitar.
            </p>
          </Reveal>
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-4 gap-px bg-celeste-deep/40">
            {[
              { t: "Recoleta", s: "Belle Époque" },
              { t: "Av. Alvear", s: "Lujo histórico" },
              { t: "Teatro Colón", s: "Ícono cultural" },
              { t: "San Telmo", s: "Alma porteña" },
              { t: "Palermo", s: "Diseño contemporáneo" },
              { t: "Puerto Madero", s: "Skyline" },
              { t: "Obelisco", s: "Corazón" },
              { t: "9 de Julio", s: "La avenida" },
            ].map((x, i) => (
              <Reveal
                key={x.t}
                delay={i * 50}
                className="bg-ink p-5 hover:bg-celeste-deep/20 transition"
              >
                <p className="font-display text-2xl text-ivory">{x.t}</p>
                <p className="mt-1 label-eyebrow text-celeste text-[10px]">{x.s}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
