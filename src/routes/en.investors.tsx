import { createFileRoute } from "@tanstack/react-router";
import { InvestorsPage } from "@/components/site/pages";
export const Route = createFileRoute("/en/investors")({
  head: () => ({
    meta: [
      { title: "Investors — Kumpels" },
      { name: "description", content: "Opportunity, traction, model, roadmap, and investor deck." },
      { property: "og:title", content: "Investors — Kumpels" },
      { property: "og:url", content: "/en/investors" },
    ],
    links: [
      { rel: "canonical", href: "/en/investors" },
      { rel: "alternate", hrefLang: "es", href: "/es/inversionistas" },
      { rel: "alternate", hrefLang: "en", href: "/en/investors" },
    ],
  }),
  component: () => <InvestorsPage lang="en" />,
});
