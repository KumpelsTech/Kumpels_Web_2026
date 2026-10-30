import { createFileRoute } from "@tanstack/react-router";
import { CoreSolutionsPage } from "@/components/site/CoreSolutionsPage";

export const Route = createFileRoute("/en/solutions")({
  head: () => ({
    meta: [
      { title: "Solutions — Kumpels" },
      { name: "description", content: "Kumpels Core brings clinical intelligence, automation and traceability together in one engine, with specialty-specific solutions for healthcare institutions." },
      { property: "og:title", content: "Solutions — Kumpels" },
      { property: "og:url", content: "/en/solutions" },
    ],
    links: [
      { rel: "canonical", href: "/en/solutions" },
      { rel: "alternate", hrefLang: "es", href: "/es/soluciones" },
      { rel: "alternate", hrefLang: "en", href: "/en/solutions" },
    ],
  }),
  component: () => <CoreSolutionsPage lang="en" />,
});
