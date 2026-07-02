import { useState, useEffect, useRef } from "react";
import { Reveal } from "../shared/ui";

interface FormErrors {
  name?: string;
  email?: string;
  mensaje?: string;
}

export default function Contacto() {
  const [tierOpen, setTierOpen] = useState(false);
  const [selectedTier, setSelectedTier] = useState("Patrocinador");
  const tierRef = useRef<HTMLDivElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [formData, setFormData] = useState({ name: "", company: "", role: "", email: "", mensaje: "" });

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

  const validate = (): FormErrors => {
    const errs: FormErrors = {};
    if (!formData.name.trim()) errs.name = "El nombre es obligatorio";
    if (!formData.email.trim()) {
      errs.email = "El email es obligatorio";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Ingresá un email válido";
    }
    if (!formData.mensaje.trim()) errs.mensaje = "El mensaje es obligatorio";
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setSubmitted(true);
    }
  };

  return (
    <section id="contacto" key={submitted ? "success" : "form"} className="py-28 md:py-40 px-6 md:px-12 bg-ivory">
      {submitted ? (
        <div className="mx-auto max-w-[800px] text-center">
          <Reveal>
            <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-celeste/15 mb-8">
              <svg className="h-10 w-10 text-celeste-deep" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-display text-5xl md:text-6xl leading-[0.95] text-ink text-balance">
              ¡Mensaje <span className="italic text-celeste-deep">enviado!</span>
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-8 text-ink-soft font-light text-xl max-w-lg mx-auto">
              Gracias, {formData.name}. Te contactaremos pronto en <strong className="text-ink">{formData.email}</strong>.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <button
              onClick={() => { setSubmitted(false); setFormData({ name: "", company: "", role: "", email: "", mensaje: "" }); setSelectedTier("Patrocinador"); setErrors({}); }}
              className="mt-10 label-eyebrow text-celeste-deep border-b-2 border-celeste-deep pb-1 hover:text-ink hover:border-ink transition"
            >
              Enviar otra consulta →
            </button>
          </Reveal>
        </div>
      ) : (
      <div className="mx-auto max-w-[1500px] grid lg:grid-cols-12 gap-16">
        <div className="lg:col-span-5">
          <Reveal><p className="label-eyebrow mb-6">10 · Contacto</p></Reveal>
          <Reveal delay={100}>
            <h2 className="font-display text-5xl md:text-6xl leading-[0.95] text-ink text-balance">
              Empecemos esta <span className="italic text-celeste-deep">conversación.</span>
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <div className="mt-10 space-y-6 text-ink-soft font-light text-lg">
              <p>Para patrocinios, inversión, participación de diseñadores, alianzas y prensa.</p>
              <div className="hairline w-16" />
              <div className="space-y-1">
                <p className="label-eyebrow text-celeste-deep text-xs">Prensa</p>
                <p className="text-ink">prensa@argentinahautecouture.com</p>
              </div>
              <div className="space-y-1">
                <p className="label-eyebrow text-celeste-deep text-xs">Alianzas</p>
                <p className="text-ink">alianzas@argentinahautecouture.com</p>
              </div>
              <div className="space-y-1">
                <p className="label-eyebrow text-celeste-deep text-xs">Buenos Aires</p>
                <p className="font-mono text-xs">34°36′13″S · 58°22′53″O</p>
              </div>
            </div>
          </Reveal>
        </div>
        <Reveal delay={150} className="lg:col-span-7">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border" onSubmit={handleSubmit} noValidate>
            <label className="bg-ivory p-6 block group">
              <span className="label-eyebrow text-ink-soft text-xs group-focus-within:text-celeste-deep transition">Nombre *</span>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className={`mt-3 w-full bg-transparent border-0 border-b-2 ${errors.name ? "border-tango" : "border-border"} focus:border-celeste-deep outline-none py-2 text-ink font-light transition`}
              />
              {errors.name && <p className="mt-1 text-xs text-tango">{errors.name}</p>}
            </label>
            <label className="bg-ivory p-6 block group">
              <span className="label-eyebrow text-ink-soft text-xs group-focus-within:text-celeste-deep transition">Empresa</span>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="mt-3 w-full bg-transparent border-0 border-b-2 border-border focus:border-celeste-deep outline-none py-2 text-ink font-light transition"
              />
            </label>
            <label className="bg-ivory p-6 block group">
              <span className="label-eyebrow text-ink-soft text-xs group-focus-within:text-celeste-deep transition">Cargo</span>
              <input
                type="text"
                name="role"
                value={formData.role}
                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                className="mt-3 w-full bg-transparent border-0 border-b-2 border-border focus:border-celeste-deep outline-none py-2 text-ink font-light transition"
              />
            </label>
            <label className="bg-ivory p-6 block group">
              <span className="label-eyebrow text-ink-soft text-xs group-focus-within:text-celeste-deep transition">Email *</span>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className={`mt-3 w-full bg-transparent border-0 border-b-2 ${errors.email ? "border-tango" : "border-border"} focus:border-celeste-deep outline-none py-2 text-ink font-light transition`}
              />
              {errors.email && <p className="mt-1 text-xs text-tango">{errors.email}</p>}
            </label>
            <label className="bg-ivory p-6 block md:col-span-2 group">
              <span className="label-eyebrow text-ink-soft text-xs">Tipo de interés</span>
              <div ref={tierRef} className="relative mt-3">
                <button
                  type="button"
                  onClick={() => setTierOpen(!tierOpen)}
                  className="w-full text-left bg-transparent border-0 border-b-2 border-border focus:border-celeste-deep outline-none py-2 pr-8 text-ink font-light cursor-pointer"
                >
                  {selectedTier}
                </button>
                <svg className={`pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 h-4 w-4 text-celeste-deep transition-transform duration-200 ${tierOpen ? "rotate-180" : ""}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9" /></svg>
                <div className={`absolute z-50 mt-2 w-full bg-ivory border border-border rounded-sm shadow-lg origin-top transition-all duration-150 ${tierOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0 pointer-events-none"}`}>
                  {["Patrocinador", "Inversor", "Diseñador", "Marca", "Prensa", "Alianza"].map((o) => (
                    <button
                      key={o}
                      type="button"
                      onClick={() => { setSelectedTier(o); setTierOpen(false); }}
                      className={`w-full text-left px-4 py-3 text-ink font-light transition-colors duration-150 hover:bg-celeste/10 first:rounded-t-sm last:rounded-b-sm ${selectedTier === o ? "bg-celeste/10 text-celeste-deep" : ""}`}
                    >
                      {o}
                    </button>
                  ))}
                </div>
              </div>
            </label>
            <label className="bg-ivory p-6 block md:col-span-2 group">
              <span className="label-eyebrow text-ink-soft text-xs group-focus-within:text-celeste-deep transition">Mensaje *</span>
              <textarea
                rows={4}
                required
                value={formData.mensaje}
                onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                className={`mt-3 w-full bg-transparent border-0 border-b-2 ${errors.mensaje ? "border-tango" : "border-border"} focus:border-celeste-deep outline-none py-2 text-ink font-light resize-none`}
              />
              {errors.mensaje && <p className="mt-1 text-xs text-tango">{errors.mensaje}</p>}
            </label>
            <div className="md:col-span-2 bg-ivory p-6 flex justify-end">
              <button type="submit" className="group relative overflow-hidden gradient-argentina animate-gradient-shift text-ivory px-12 py-4 label-eyebrow hover:scale-105 hover:shadow-[0_20px_50px_-10px_rgba(30,111,184,0.8)] transition-all duration-300 shadow-[0_15px_40px_-15px_rgba(30,111,184,0.6)]">
                <span className="relative z-10">Enviar Consulta →</span>
                <span className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12" />
              </button>
            </div>
          </form>
        </Reveal>
      </div>
      )}
    </section>
  );
}
