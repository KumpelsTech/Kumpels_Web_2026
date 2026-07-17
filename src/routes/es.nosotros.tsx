import { createFileRoute } from "@tanstack/react-router";
import { TeamPage } from "@/components/site/pages";
export const Route = createFileRoute("/es/nosotros")({
  head: () => ({
    meta: [
      { title: "Nosotros — Kumpels" },
      { name: "description", content: "Kumpels S.A.S. — healthtech para seguridad del paciente y operaciones en salud." },
      { property: "og:title", content: "Nosotros — Kumpels" },
      { property: "og:url", content: "/es/nosotros" },
    ],
    links: [
      { rel: "canonical", href: "/es/nosotros" },
      { rel: "alternate", hrefLang: "es", href: "/es/nosotros" },
      { rel: "alternate", hrefLang: "en", href: "/en/about" },
    ],
  }),
  component: () => <TeamPage lang="es" />,
});
