import { createFileRoute } from "@tanstack/react-router";
import { CoreValidationPage } from "@/components/site/CoreValidationPage";
export const Route = createFileRoute("/es/validacion")({
  head: () => ({
    meta: [
      { title: "Validación en entornos reales — Kumpels" },
      { name: "description", content: "Resultados del piloto hospitalario de La Cardio y diagnóstico operativo de VITA Fertilidad." },
      { property: "og:title", content: "Validación — Kumpels" },
      { property: "og:url", content: "/es/validacion" },
    ],
    links: [
      { rel: "canonical", href: "/es/validacion" },
      { rel: "alternate", hrefLang: "es", href: "/es/validacion" },
      { rel: "alternate", hrefLang: "en", href: "/en/validation" },
    ],
  }),
  component: () => <CoreValidationPage lang="es" />,
});
