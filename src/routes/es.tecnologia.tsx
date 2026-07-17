import { createFileRoute } from "@tanstack/react-router";
import { TechnologyPage } from "@/components/site/pages";
export const Route = createFileRoute("/es/tecnologia")({
  head: () => ({
    meta: [
      { title: "Tecnología — Kumpels" },
      { name: "description", content: "IA aplicada a salud, interoperabilidad, analítica y filosofía de producto." },
      { property: "og:title", content: "Tecnología — Kumpels" },
      { property: "og:url", content: "/es/tecnologia" },
    ],
    links: [
      { rel: "canonical", href: "/es/tecnologia" },
      { rel: "alternate", hrefLang: "es", href: "/es/tecnologia" },
      { rel: "alternate", hrefLang: "en", href: "/en/technology" },
    ],
  }),
  component: () => <TechnologyPage lang="es" />,
});
