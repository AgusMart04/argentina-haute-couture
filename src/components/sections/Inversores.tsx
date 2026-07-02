import { Reveal } from "../shared/ui";

export default function Inversores() {
  return (
    <section className="py-20 md:py-40 px-6 md:px-12 bg-cloud">
      <div className="mx-auto max-w-[1500px] grid lg:grid-cols-12 gap-12 lg:gap-20">
        <div className="lg:col-span-5 lg:sticky lg:top-32 self-start">
          <Reveal>
            <p className="label-eyebrow mb-6">08 · Inversores</p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-display text-5xl md:text-7xl leading-[0.95] text-ink text-balance">
              Una apuesta <span className="italic text-celeste-deep">por una</span>{" "}
              <span className="italic text-sol-deep">industria</span>{" "}
              <span className="italic text-celeste-deep">entera.</span>
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-10 text-ink-soft font-light leading-relaxed text-lg max-w-md">
              Argentina Haute Couture no es solo un evento. Es una plataforma de crecimiento para
              toda una industria — una tesis de inversión a largo plazo sobre el ascenso cultural y
              comercial argentino.
            </p>
          </Reveal>
        </div>
        <div className="lg:col-span-7 space-y-px bg-border">
          {[
            {
              t: "Potencial económico",
              d: "Un mercado de lujo emergente con capacidad estructural para exportación, licenciamiento y desarrollo de marca.",
            },
            {
              t: "Expansión regional",
              d: "Un hub natural para el circuito latinoamericano del lujo y sus asociaciones transfronterizas.",
            },
            {
              t: "Desarrollo de casas",
              d: "Un vehículo para elevar a las casas argentinas dentro de un marco cultural globalmente reconocido.",
            },
            {
              t: "Escalabilidad",
              d: "Hoja de ruta plurianual con verticales adyacentes — cine, editorial, retail y hospitalidad.",
            },
            {
              t: "Oportunidades comerciales",
              d: "Patrocinio, derechos de medios, mecenazgo privado y activaciones comerciales curadas.",
            },
          ].map((r, i) => (
            <Reveal
              key={r.t}
              delay={i * 80}
              className="bg-ivory p-8 md:p-10 flex gap-6 md:gap-10 hover:bg-celeste/5 transition group"
            >
              <span className="font-impact text-2xl text-celeste-deep pt-1">0{i + 1}</span>
              <div className="flex-1">
                <h3 className="font-display text-2xl md:text-3xl text-ink">{r.t}</h3>
                <p className="mt-3 text-ink-soft font-light leading-relaxed">{r.d}</p>
              </div>
              <span className="text-sol-deep text-2xl opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
                →
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
