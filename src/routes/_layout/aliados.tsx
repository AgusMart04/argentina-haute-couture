import { createFileRoute } from "@tanstack/react-router";
import Aliados from "@/components/sections/Aliados";
import Contacto from "@/components/sections/Contacto";
import heroImg from "@/assets/hero.jpg";

export const Route = createFileRoute("/_layout/aliados")({
  head: () => ({
    meta: [
      { title: "Sumate — Argentina Haute Couture" },
      {
        name: "description",
        content:
          "Sumate al primer capítulo de una nueva era cultural argentina. Patrocinio, inversión y alianzas estratégicas para la industria creativa.",
      },
      { property: "og:title", content: "Sumate — Argentina Haute Couture" },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: AliadosPage,
});

function AliadosPage() {
  return (
    <div className="pt-20">
      <Aliados />
      <div className="relative h-1 w-full bg-gradient-to-r from-celeste-deep via-sol to-celeste-deep" />
      <Contacto />
    </div>
  );
}
