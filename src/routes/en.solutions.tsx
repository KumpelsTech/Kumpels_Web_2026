import { createFileRoute } from "@tanstack/react-router";
import { SolutionsPage } from "@/components/site/pages";
export const Route = createFileRoute("/en/solutions")({
  head: () => ({
    meta: [
      { title: "Solutions — Kumpels" },
      { name: "description", content: "Clinical/CDSS module, traceability, and custom solutions for healthcare institutions." },
      { property: "og:title", content: "Solutions — Kumpels" },
      { property: "og:url", content: "/en/solutions" },
    ],
    links: [
      { rel: "canonical", href: "/en/solutions" },
      { rel: "alternate", hrefLang: "es", href: "/es/soluciones" },
      { rel: "alternate", hrefLang: "en", href: "/en/solutions" },
    ],
  }),
  component: () => <SolutionsPage lang="en" />,
});
