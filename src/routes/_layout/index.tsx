import { createFileRoute } from "@tanstack/react-router";
import HomeContent from "@/components/HomeContent";
import heroImg from "@/assets/hero.jpg";

export const Route = createFileRoute("/_layout/")({
  head: () => ({
    meta: [
      { title: "Argentina Haute Couture — El despertar creativo de una nación" },
      {
        name: "description",
        content:
          "La celebración más importante de la creatividad argentina. Una plataforma cultural nacida en Buenos Aires para proyectar la moda, el arte y el diseño argentino al mundo.",
      },
      { property: "og:title", content: "Argentina Haute Couture" },
      {
        property: "og:description",
        content:
          "Orgullo, pasión y movimiento. Una nueva potencia creativa latinoamericana está despertando.",
      },
      { property: "og:image", content: heroImg },
      { name: "twitter:image", content: heroImg },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return <HomeContent />;
}
