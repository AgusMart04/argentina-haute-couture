import { Link } from "@tanstack/react-router";
import { SolDeMayo } from "./shared/ui";

export default function Footer() {
  return (
    <footer className="relative bg-ink text-ivory px-6 md:px-12 py-16 overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-1 gradient-argentina animate-gradient-shift" />
      <div className="mx-auto max-w-[1600px] grid md:grid-cols-12 gap-12 items-start">
        <div className="md:col-span-5">
          <div className="flex items-center gap-3">
            <SolDeMayo className="h-10 w-10 text-sol" />
            <p className="font-impact text-2xl tracking-[0.18em]">
              ARGENTINA<span className="text-celeste"> HAUTE COUTURE</span>
            </p>
          </div>
          <p className="mt-6 max-w-sm text-ivory/65 font-light leading-relaxed">
            El movimiento cultural que está poniendo a la Argentina en el mapa creativo del mundo.
          </p>
        </div>
        <div className="md:col-span-4 grid grid-cols-2 gap-8">
          <ul className="space-y-3 label-eyebrow text-ivory/70 text-xs">
            <li>
              <Link to="/nuestra-esencia" className="hover:text-sol transition">
                Nuestra Esencia
              </Link>
            </li>
            <li>
              <Link to="/por-que-argentina" className="hover:text-sol transition">
                Por qué Argentina
              </Link>
            </li>
          </ul>
          <ul className="space-y-3 label-eyebrow text-ivory/70 text-xs">
            <li>
              <Link to="/aliados" className="hover:text-sol transition">
                Sumate
              </Link>
            </li>
            <li>
              <Link to="/contacto" className="hover:text-sol transition">
                Contacto
              </Link>
            </li>
          </ul>
        </div>
        <div className="md:col-span-3 space-y-3 label-eyebrow text-ivory/70 text-xs">
          <a href="#" className="flex items-center gap-2 hover:text-sol transition">
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
            Instagram
          </a>
          <a href="#" className="flex items-center gap-2 hover:text-sol transition">
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.86 4.46V13a8.28 8.28 0 005.58 2.17v-3.44a4.85 4.85 0 01-2-.92V6.69h2z" />
            </svg>
            TikTok
          </a>
        </div>
      </div>
      <div className="mx-auto max-w-[1600px] mt-16 pt-8 border-t border-ivory/15 flex flex-wrap justify-between gap-4 text-xs text-ivory/50 font-mono">
        <p>© {new Date().getFullYear()} Argentina Haute Couture</p>
        <p>Hecho con orgullo en Buenos Aires · Noviembre 2026</p>
      </div>
    </footer>
  );
}
