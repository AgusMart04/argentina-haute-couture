import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { SolDeMayo } from "./shared/ui";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onS = () => setScrolled(window.scrollY > 40);
    onS();
    window.addEventListener("scroll", onS, { passive: true });
    return () => window.removeEventListener("scroll", onS);
  }, []);

  const navLinks = [
    { label: "Nuestra Esencia", to: "/nuestra-esencia" },
    { label: "Por qué Argentina", to: "/por-que-argentina" },
    { label: "Sumate", to: "/aliados" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 inset-x-0 z-40 transition-all duration-500 ${
          scrolled ? "bg-ivory/85 backdrop-blur-xl border-b border-border py-3" : "py-6"
        }`}
      >
        <div className="mx-auto max-w-[1600px] px-6 md:px-12 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <SolDeMayo className={`h-7 w-7 text-sol-deep transition-transform duration-700 group-hover:rotate-90 ${scrolled ? "" : "drop-shadow-[0_2px_8px_rgba(245,180,0,0.5)]"}`} />
            <span className={`font-impact text-xl tracking-[0.18em] ${scrolled ? "text-ink" : "text-ivory drop-shadow-[0_2px_6px_rgba(0,0,0,0.4)]"}`}>
              ARGENTINA<span className="text-celeste-deep"> HAUTE COUTURE</span>
            </span>
          </Link>
          <ul className={`hidden md:flex items-center gap-8 label-eyebrow text-sm ${scrolled ? "text-ink-soft" : "text-ivory/90 drop-shadow"}`}>
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link className="hover:text-sol-deep transition" to={l.to}>{l.label}</Link>
              </li>
            ))}
          </ul>
          <Link to="/contacto" className="hidden md:inline-flex items-center gap-2 label-eyebrow text-ivory bg-ink hover:bg-celeste-deep px-5 py-3 transition-colors shadow-[0_8px_30px_-10px_rgba(30,111,184,0.6)]">
            Contacto <span>→</span>
          </Link>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Menu"
          >
            <span className={`block w-6 h-0.5 transition-all duration-300 ${scrolled ? "bg-ink" : "bg-ivory"} ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 transition-all duration-300 ${scrolled ? "bg-ink" : "bg-ivory"} ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 transition-all duration-300 ${scrolled ? "bg-ink" : "bg-ivory"} ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`md:hidden fixed inset-0 bg-ink/98 backdrop-blur-2xl z-50 flex flex-col items-center justify-center gap-8 transition-all duration-500 ${mobileOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}>
        <button
          onClick={() => setMobileOpen(false)}
          className="absolute top-6 right-6 flex flex-col gap-1.5 p-2"
          aria-label="Cerrar menu"
        >
          <span className="block w-6 h-0.5 bg-ivory rotate-45 translate-y-2 transition-all duration-300" />
          <span className="block w-6 h-0.5 bg-ivory -rotate-45 -translate-y-2 transition-all duration-300" />
        </button>

        <SolDeMayo className="h-10 w-10 text-sol mb-4" />

        <ul className="flex flex-col items-center gap-6">
          {navLinks.map((item) => (
            <li key={item.to}>
              <Link
                className="font-display text-3xl text-ivory/90 hover:text-sol transition-colors"
                to={item.to}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="w-12 h-px bg-gradient-to-r from-transparent via-sol to-transparent my-4" />

        <Link
          to="/contacto"
          className="gradient-argentina animate-gradient-shift text-ivory px-10 py-4 label-eyebrow text-sm shadow-[0_20px_60px_-15px_rgba(30,111,184,0.6)]"
          onClick={() => setMobileOpen(false)}
        >
          Ser Patrocinador
        </Link>
      </div>
    </>
  );
}
