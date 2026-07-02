import { useState, useEffect, useRef } from "react";
import { Link } from "@tanstack/react-router";
import { Reveal, SolDeMayo } from "../shared/ui";

export default function Aliados() {
  const [activeTier, setActiveTier] = useState(0);
  const [tierOpen, setTierOpen] = useState(false);
  const [selectedTier, setSelectedTier] = useState("Patrocinador");
  const tierRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!tierOpen) return;
    const onClick = (e: MouseEvent) => {
      if (tierRef.current && !tierRef.current.contains(e.target as Node)) setTierOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setTierOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => { document.removeEventListener("mousedown", onClick); document.removeEventListener("keydown", onKey); };
  }, [tierOpen]);

  const tiers = [
    { tier: "FUNDADOR", n: "I", featured: true, lines: ["Naming principal de pasarela", "Derechos exclusivos de categoría", "Co-producción editorial", "Salón privado de hospitalidad", "Presencia integrada en toda la narrativa anual"] },
    { tier: "ATELIER", n: "II", lines: ["Presencia destacada en pasarela", "Suite de activación de marca", "Inclusión en cobertura de prensa internacional", "Acceso a networking estratégico", "Contenidos co-branded"] },
    { tier: "CREADOR", n: "III", lines: ["Presencia curada", "Invitaciones VIP", "Inclusión en notas de prensa", "Acceso a networking exclusivo"] },
  ];

  return (
    <section id="aliados" className="relative py-28 md:py-40 px-6 md:px-12 overflow-hidden bg-ivory">
      <div className="absolute top-0 inset-x-0 h-2 gradient-argentina animate-gradient-shift" />
      <div className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full bg-sol/20 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-[700px] h-[700px] rounded-full bg-celeste/25 blur-3xl" />

      <div className="relative mx-auto max-w-[1500px]">
        <Reveal><p className="label-eyebrow mb-6">07 · Aliados</p></Reveal>
        <Reveal delay={100}>
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] text-ink max-w-5xl text-balance">
            Sumate al <span className="italic text-celeste-deep">primer capítulo</span> de una nueva era cultural argentina.
          </h2>
        </Reveal>
        <Reveal delay={200}>
          <p className="mt-10 max-w-2xl text-ink-soft font-light text-xl">
            No estás patrocinando un evento. Estás co-construyendo el movimiento
            creativo más importante de la Argentina contemporánea.
          </p>
        </Reveal>

        {/* Mobile: tabs */}
        <div className="mt-16 lg:hidden">
          <div className="flex gap-3 mb-8">
            {["FUNDADOR", "ATELIER", "CREADOR"].map((name, i) => {
              const isActive = activeTier === i;
              return (
                <button
                  key={name}
                  onClick={() => setActiveTier(i)}
                  className={`flex-1 py-4 font-impact text-base tracking-[0.15em] transition-all duration-300 border-2 ${
                    isActive
                      ? "bg-ink text-ivory border-ink shadow-[0_8px_30px_-5px_rgba(30,111,184,0.5)] scale-[1.02]"
                      : "bg-cloud text-ink-soft border-celeste-deep/30 hover:border-celeste-deep hover:text-ink hover:shadow-[0_4px_15px_-3px_rgba(30,111,184,0.25)] hover:scale-[1.01] active:scale-[0.98]"
                  }`}
                >
                  {isActive && (
                    <span className="block w-full h-[2px] bg-gradient-to-r from-transparent via-sol to-transparent mt-2 animate-pulse" />
                  )}
                  {name}
                </button>
              );
            })}
          </div>
          {tiers.filter((_, i) => i === activeTier).map((t) => (
            <div key={t.tier} className={`relative p-8 ${t.featured ? "bg-ink text-ivory shadow-[0_30px_80px_-20px_rgba(30,111,184,0.6)]" : "bg-ivory border border-border"}`}>
              {t.featured && (
                <div className="absolute -top-3 left-8 bg-sol text-ink px-3 py-1 font-impact tracking-[0.25em] text-xs shadow-lg">
                  MÁS ELEGIDO
                </div>
              )}
              <div className="flex items-baseline justify-between">
                <span className={`font-impact tracking-[0.3em] text-sm ${t.featured ? "text-sol" : "text-celeste-deep"}`}>NIVEL {t.n}</span>
                {t.featured && <SolDeMayo className="h-6 w-6 text-sol animate-sun-spin" />}
              </div>
              <h3 className={`mt-4 font-impact text-4xl tracking-wide ${t.featured ? "text-ivory" : "text-ink"}`}>{t.tier}</h3>
              <div className={`mt-4 h-1 w-12 ${t.featured ? "bg-sol" : "bg-celeste-deep"}`} />
              <ul className={`mt-6 space-y-3 font-light ${t.featured ? "text-ivory/85" : "text-ink-soft"}`}>
                {t.lines.map((l) => (
                  <li key={l} className="flex gap-3">
                    <span className={t.featured ? "text-sol" : "text-celeste-deep"}>✦</span>{l}
                  </li>
                ))}
              </ul>
              <Link to="/contacto" className={`mt-8 label-eyebrow inline-flex w-fit border-b-2 pb-1 ${t.featured ? "border-sol text-sol hover:text-ivory hover:border-ivory" : "border-celeste-deep text-celeste-deep hover:text-ink"} transition`}>
                Solicitar información →
              </Link>
            </div>
          ))}
        </div>

        {/* Desktop: 3-col grid */}
        <div className="hidden lg:grid mt-16 grid-cols-3 gap-6">
          {tiers.map((t, i) => (
            <Reveal key={t.tier} delay={i * 120}>
              <div className={`relative p-10 h-full flex flex-col ${t.featured ? "bg-ink text-ivory shadow-[0_30px_80px_-20px_rgba(30,111,184,0.6)] lg:-translate-y-4" : "bg-ivory border border-border"}`}>
                {t.featured && (
                  <div className="absolute -top-4 left-10 bg-sol text-ink px-4 py-1.5 font-impact tracking-[0.25em] text-xs shadow-lg">
                    MÁS ELEGIDO
                  </div>
                )}
                <div className="flex items-baseline justify-between">
                  <span className={`font-impact tracking-[0.3em] text-sm ${t.featured ? "text-sol" : "text-celeste-deep"}`}>NIVEL {t.n}</span>
                  {t.featured && <SolDeMayo className="h-8 w-8 text-sol animate-sun-spin" />}
                </div>
                <h3 className={`mt-6 font-impact text-5xl tracking-wide ${t.featured ? "text-ivory" : "text-ink"}`}>{t.tier}</h3>
                <div className={`mt-5 h-1 w-16 ${t.featured ? "bg-sol" : "bg-celeste-deep"}`} />
                <ul className={`mt-8 space-y-3 font-light flex-1 ${t.featured ? "text-ivory/85" : "text-ink-soft"}`}>
                  {t.lines.map((l) => (
                    <li key={l} className="flex gap-3">
                      <span className={t.featured ? "text-sol" : "text-celeste-deep"}>✦</span>{l}
                    </li>
                  ))}
                </ul>
                <Link to="/contacto" className={`mt-10 label-eyebrow inline-flex w-fit border-b-2 pb-1 ${t.featured ? "border-sol text-sol hover:text-ivory hover:border-ivory" : "border-celeste-deep text-celeste-deep hover:text-ink"} transition`}>
                  Solicitar información →
                </Link>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div className="mt-16 flex justify-center">
            <Link to="/contacto" className="group relative overflow-hidden inline-flex items-center gap-4 gradient-argentina animate-gradient-shift text-ivory px-12 py-6 label-eyebrow text-base shadow-[0_25px_70px_-20px_rgba(30,111,184,0.7)] hover:scale-105 hover:shadow-[0_30px_80px_-15px_rgba(30,111,184,0.9)] transition-all duration-300">
              <span className="relative z-10 inline-flex items-center gap-4">Solicitar el Dossier Completo
              <span className="transition-transform group-hover:translate-x-1">→</span></span>
              <span className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
