import { createFileRoute } from "@tanstack/react-router";
import { TeamPage } from "@/components/site/pages";
export const Route = createFileRoute("/en/about")({
  head: () => ({
    meta: [
      { title: "About — Kumpels" },
      { name: "description", content: "Kumpels S.A.S. — healthtech for patient safety and healthcare operations." },
      { property: "og:title", content: "About — Kumpels" },
      { property: "og:url", content: "/en/about" },
    ],
    links: [
      { rel: "canonical", href: "/en/about" },
      { rel: "alternate", hrefLang: "es", href: "/es/nosotros" },
      { rel: "alternate", hrefLang: "en", href: "/en/about" },
    ],
  }),
  component: () => <TeamPage lang="en" />,
});
