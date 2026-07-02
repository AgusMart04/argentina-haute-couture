import { createFileRoute } from "@tanstack/react-router";
import Contacto from "@/components/sections/Contacto";
import HojaDeRuta from "@/components/sections/HojaDeRuta";
import heroImg from "@/assets/hero.jpg";

export const Route = createFileRoute("/_layout/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto — Argentina Haute Couture" },
      {
        name: "description",
        content:
          "Empecemos esta conversación. Para patrocinios, inversión, participación de diseñadores, alianzas y prensa.",
      },
      { property: "og:title", content: "Contacto — Argentina Haute Couture" },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: ContactoPage,
});

function ContactoPage() {
  return (
    <div className="pt-20">
      <HojaDeRuta />
      <div className="relative h-1 w-full bg-gradient-to-r from-celeste-deep via-sol to-celeste-deep" />
      <Contacto />
    </div>
  );
}
