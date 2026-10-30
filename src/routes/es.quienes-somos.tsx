import { createFileRoute } from "@tanstack/react-router";
import { AboutKumpelsPage } from "@/components/site/AboutKumpelsPage";

export const Route = createFileRoute("/es/quienes-somos")({
  head: () => ({
    meta: [
      { title: "Quiénes somos — Kumpels" },
      { name: "description", content: "Conoce a Kumpels: propósito, misión, visión, valores, equipo y trayectoria." },
      { property: "og:title", content: "Quiénes somos — Kumpels" },
      { property: "og:url", content: "/es/quienes-somos" },
    ],
    links: [
      { rel: "canonical", href: "/es/quienes-somos" },
      { rel: "alternate", hrefLang: "es", href: "/es/quienes-somos" },
      { rel: "alternate", hrefLang: "en", href: "/en/about" },
    ],
  }),
  component: () => <AboutKumpelsPage lang="es" />,
});
