import { createFileRoute } from "@tanstack/react-router";
import { SolutionsPage } from "@/components/site/pages";
export const Route = createFileRoute("/es/soluciones")({
  head: () => ({
    meta: [
      { title: "Soluciones — Kumpels" },
      { name: "description", content: "Módulo Clínico/CDSS, Trazabilidad y soluciones a la medida para instituciones de salud." },
      { property: "og:title", content: "Soluciones — Kumpels" },
      { property: "og:url", content: "/es/soluciones" },
    ],
    links: [
      { rel: "canonical", href: "/es/soluciones" },
      { rel: "alternate", hrefLang: "es", href: "/es/soluciones" },
      { rel: "alternate", hrefLang: "en", href: "/en/solutions" },
    ],
  }),
  component: () => <SolutionsPage lang="es" />,
});
