import { createFileRoute } from "@tanstack/react-router";
import PorQueArgentina from "@/components/sections/PorQueArgentina";
import HechoEnArgentina from "@/components/sections/HechoEnArgentina";
import heroImg from "@/assets/hero.jpg";

export const Route = createFileRoute("/_layout/por-que-argentina")({
  head: () => ({
    meta: [
      { title: "Por qué Argentina — Argentina Haute Couture" },
      {
        name: "description",
        content:
          "Seis razones por las que el futuro creativo se está escribiendo acá. Talento, identidad, artesanía, Buenos Aires, mercado y orgullo.",
      },
      { property: "og:title", content: "Por qué Argentina — Argentina Haute Couture" },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: PorQueArgentinaPage,
});

function PorQueArgentinaPage() {
  return (
    <div className="pt-20">
      <PorQueArgentina />
      <div className="relative h-1 w-full bg-gradient-to-r from-celeste-deep via-sol to-celeste-deep" />
      <HechoEnArgentina />
    </div>
  );
}
