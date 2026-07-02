import Hero from "@/components/sections/Hero";
import NuestraEsencia from "@/components/sections/NuestraEsencia";
import UnaPotencia from "@/components/sections/UnaPotencia";
import BuenosAires from "@/components/sections/BuenosAires";
import PorQueArgentina from "@/components/sections/PorQueArgentina";
import HechoEnArgentina from "@/components/sections/HechoEnArgentina";
import LaExperiencia from "@/components/sections/LaExperiencia";
import Aliados from "@/components/sections/Aliados";
import Inversores from "@/components/sections/Inversores";
import HojaDeRuta from "@/components/sections/HojaDeRuta";
import CtaFinal from "@/components/sections/CtaFinal";
import Contacto from "@/components/sections/Contacto";

export default function HomeContent() {
  return (
    <>
      <Hero />
      <div className="relative h-1 w-full bg-gradient-to-r from-celeste-deep via-sol to-celeste-deep" />
      <NuestraEsencia />
      <UnaPotencia />
      <BuenosAires />
      <PorQueArgentina />
      <HechoEnArgentina />
      <LaExperiencia />
      <Aliados />
      <Inversores />
      <HojaDeRuta />
      <CtaFinal />
      <Contacto />
    </>
  );
}
