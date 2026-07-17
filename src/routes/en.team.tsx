import { createFileRoute } from "@tanstack/react-router";
import { TeamPage } from "@/components/site/pages";
export const Route = createFileRoute("/en/team")({
  head: () => ({
    meta: [
      { title: "Team — Kumpels" },
      { name: "description", content: "The multidisciplinary team behind Kumpels." },
      { property: "og:title", content: "Team — Kumpels" },
      { property: "og:url", content: "/en/team" },
    ],
    links: [
      { rel: "canonical", href: "/en/team" },
      { rel: "alternate", hrefLang: "es", href: "/es/equipo" },
      { rel: "alternate", hrefLang: "en", href: "/en/team" },
    ],
  }),
  component: () => <TeamPage lang="en" />,
});
