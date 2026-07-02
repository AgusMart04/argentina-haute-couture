import { Reveal, SolDeMayo } from "../shared/ui";
import atelierImg from "@/assets/atelier.jpg";
import detail1 from "@/assets/detail1.jpg";
import detail2 from "@/assets/detail2.jpg";

export default function HechoEnArgentina() {
  return (
    <section className="relative py-28 md:py-40 px-6 md:px-12 bg-gradient-to-b from-cloud via-ivory to-cloud overflow-hidden">
      <div className="absolute top-20 right-10 opacity-[0.05]">
        <SolDeMayo className="h-[500px] w-[500px] text-sol-deep animate-sun-spin" />
      </div>

      <div className="relative mx-auto max-w-[1600px]">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-end mb-16">
          <div className="lg:col-span-7">
            <Reveal><p className="label-eyebrow mb-6">05 · Hecho en Argentina</p></Reveal>
            <Reveal delay={100}>
              <h2 className="font-display text-5xl md:text-7xl leading-[0.95] text-ink text-balance">
                Detrás de cada puntada,
                <br />
                <span className="italic text-celeste-deep">una historia argentina.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={200} className="lg:col-span-5">
            <p className="text-ink-soft font-light leading-relaxed text-lg">
              Bordadoras de Once. Sastres de Boedo. Tejedores del norte. Diseñadores
              de Palermo. Detrás de cada prenda hay generaciones de manos argentinas
              que convierten la creatividad en oficio.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-12 gap-4 md:gap-6">
          <Reveal className="col-span-12 md:col-span-7 row-span-2">
            <div className="relative overflow-hidden">
              <img src={atelierImg} alt="Bordado artesanal en un atelier porteño" loading="lazy" width={1080} height={1920} className="w-full h-[45vh] md:h-[80vh] object-cover" />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-ink/80 to-transparent p-8">
                <p className="font-impact text-ivory text-xl tracking-[0.15em]">ATELIER · RECOLETA</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120} className="col-span-6 md:col-span-5">
            <div className="relative overflow-hidden">
              <img src={detail1} alt="Bordado del sol de mayo en hilo dorado y celeste" loading="lazy" width={1280} height={1600} className="w-full h-[28vh] md:h-[39vh] object-cover" />
              <div className="absolute top-3 left-3 bg-sol px-3 py-1 font-impact text-ink text-xs tracking-[0.2em]">SOL DE MAYO</div>
            </div>
          </Reveal>
          <Reveal delay={240} className="col-span-6 md:col-span-5">
            <div className="relative overflow-hidden">
              <img src={detail2} alt="Patronaje y corte de tela en taller argentino" loading="lazy" width={1080} height={1920} className="w-full h-[28vh] md:h-[39vh] object-cover" />
              <div className="absolute top-3 left-3 bg-celeste-deep px-3 py-1 font-impact text-ivory text-xs tracking-[0.2em]">SASTRERÍA</div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
