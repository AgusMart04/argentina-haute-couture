import { createFileRoute } from "@tanstack/react-router";
import NuestraEsencia from "@/components/sections/NuestraEsencia";
import UnaPotencia from "@/components/sections/UnaPotencia";
import BuenosAires from "@/components/sections/BuenosAires";
import heroImg from "@/assets/hero.jpg";

export const Route = createFileRoute("/_layout/nuestra-esencia")({
  head: () => ({
    meta: [
      { title: "Nuestra Esencia — Argentina Haute Couture" },
      {
        name: "description",
        content:
          "No es una semana de moda. Es un movimiento cultural. Descubrí por qué Argentina se convierte en la nueva capital creativa del hemisferio sur.",
      },
      { property: "og:title", content: "Nuestra Esencia — Argentina Haute Couture" },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: NuestraEsenciaPage,
});

function NuestraEsenciaPage() {
  return (
    <div className="pt-20">
      <NuestraEsencia />
      <div className="relative h-1 w-full bg-gradient-to-r from-celeste-deep via-sol to-celeste-deep" />
      <UnaPotencia />
      <BuenosAires />
    </div>
  );
}
