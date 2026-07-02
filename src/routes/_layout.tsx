import { createFileRoute, Outlet, useLocation } from "@tanstack/react-router";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useScrollProgress } from "@/hooks/use-reveal";

export const Route = createFileRoute("/_layout")({
  component: Layout,
});

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function Layout() {
  const progress = useScrollProgress();

  return (
    <main className="grain relative bg-background text-foreground overflow-x-hidden">
      <ScrollToTop />
      <div
        className="fixed top-0 left-0 z-50 h-[3px] gradient-argentina origin-left"
        style={{ transform: `scaleX(${progress})`, width: "100%", transition: "transform 0.1s linear" }}
      />
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
}
