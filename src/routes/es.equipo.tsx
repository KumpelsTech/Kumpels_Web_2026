import { createFileRoute } from "@tanstack/react-router";
import { TeamPage } from "@/components/site/pages";
export const Route = createFileRoute("/es/equipo")({
  head: () => ({
    meta: [
      { title: "Equipo — Kumpels" },
      { name: "description", content: "El equipo multidisciplinario detrás de Kumpels." },
      { property: "og:title", content: "Equipo — Kumpels" },
      { property: "og:url", content: "/es/equipo" },
    ],
    links: [
      { rel: "canonical", href: "/es/equipo" },
      { rel: "alternate", hrefLang: "es", href: "/es/equipo" },
      { rel: "alternate", hrefLang: "en", href: "/en/team" },
    ],
  }),
  component: () => <TeamPage lang="es" />,
});
