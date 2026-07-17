import { createFileRoute } from "@tanstack/react-router";
import { TechnologyPage } from "@/components/site/pages";
export const Route = createFileRoute("/en/technology")({
  head: () => ({
    meta: [
      { title: "Technology — Kumpels" },
      { name: "description", content: "AI applied to healthcare, interoperability, analytics, and product philosophy." },
      { property: "og:title", content: "Technology — Kumpels" },
      { property: "og:url", content: "/en/technology" },
    ],
    links: [
      { rel: "canonical", href: "/en/technology" },
      { rel: "alternate", hrefLang: "es", href: "/es/tecnologia" },
      { rel: "alternate", hrefLang: "en", href: "/en/technology" },
    ],
  }),
  component: () => <TechnologyPage lang="en" />,
});
