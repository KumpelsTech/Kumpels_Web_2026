import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/site/HomePage";

export const Route = createFileRoute("/es/")({
  head: () => ({
    meta: [
      { title: "Kumpels Core — Flujos con medicamentos, coordinados y trazables" },
      {
        name: "description",
        content:
          "Kumpels Core coordina flujos complejos intensivos en medicamentos: conecta pacientes, equipos y sistemas para prevenir errores de medicación y dejar trazabilidad.",
      },
      { property: "og:title", content: "Kumpels Core — Flujos con medicamentos, coordinados y trazables" },
      {
        property: "og:description",
        content:
          "Kumpels Core coordina flujos complejos intensivos en medicamentos: conecta pacientes, equipos y sistemas para prevenir errores de medicación y dejar trazabilidad.",
      },
      { property: "og:url", content: "/es" },
      { name: "twitter:title", content: "Kumpels Core — Flujos con medicamentos, coordinados y trazables" },
    ],
    links: [
      { rel: "canonical", href: "/es" },
      { rel: "alternate", hrefLang: "es", href: "/es" },
      { rel: "alternate", hrefLang: "en", href: "/en" },
      { rel: "alternate", hrefLang: "x-default", href: "/es" },
    ],
  }),
  component: () => <HomePage lang="es" />,
});
