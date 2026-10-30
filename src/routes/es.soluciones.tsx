import { createFileRoute } from "@tanstack/react-router";
import { CoreSolutionsPage } from "@/components/site/CoreSolutionsPage";

export const Route = createFileRoute("/es/soluciones")({
  head: () => ({
    meta: [
      { title: "Soluciones — Kumpels" },
      { name: "description", content: "Kumpels Core reúne inteligencia clínica, automatización y trazabilidad en un solo motor, con soluciones por especialidad para hospitales, farmacias y clínicas especializadas." },
      { property: "og:title", content: "Soluciones — Kumpels" },
      { property: "og:url", content: "/es/soluciones" },
    ],
    links: [
      { rel: "canonical", href: "/es/soluciones" },
      { rel: "alternate", hrefLang: "es", href: "/es/soluciones" },
      { rel: "alternate", hrefLang: "en", href: "/en/solutions" },
    ],
  }),
  component: () => <CoreSolutionsPage lang="es" />,
});
