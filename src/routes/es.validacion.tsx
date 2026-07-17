import { createFileRoute } from "@tanstack/react-router";
import { ValidationPage } from "@/components/site/pages";
export const Route = createFileRoute("/es/validacion")({
  head: () => ({
    meta: [
      { title: "Validación — Kumpels" },
      { name: "description", content: "Camino de validación, instituciones aliadas, métricas y casos de piloto." },
      { property: "og:title", content: "Validación — Kumpels" },
      { property: "og:url", content: "/es/validacion" },
    ],
    links: [
      { rel: "canonical", href: "/es/validacion" },
      { rel: "alternate", hrefLang: "es", href: "/es/validacion" },
      { rel: "alternate", hrefLang: "en", href: "/en/validation" },
    ],
  }),
  component: () => <ValidationPage lang="es" />,
});
