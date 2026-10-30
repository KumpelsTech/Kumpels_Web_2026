import { createFileRoute } from "@tanstack/react-router";
import { AboutKumpelsPage } from "@/components/site/AboutKumpelsPage";

export const Route = createFileRoute("/en/about")({
  head: () => ({
    meta: [
      { title: "About us — Kumpels" },
      { name: "description", content: "Meet Kumpels: our mission, vision, values, team and journey." },
      { property: "og:title", content: "About us — Kumpels" },
      { property: "og:url", content: "/en/about" },
    ],
    links: [
      { rel: "canonical", href: "/en/about" },
      { rel: "alternate", hrefLang: "es", href: "/es/quienes-somos" },
      { rel: "alternate", hrefLang: "en", href: "/en/about" },
    ],
  }),
  component: () => <AboutKumpelsPage lang="en" />,
});
