import { createFileRoute } from "@tanstack/react-router";
import { CoreInvestorsPage } from "@/components/site/CoreInvestorsPage";

export const Route = createFileRoute("/en/investors")({
  head: () => ({
    meta: [
      { name: "robots", content: "noindex, nofollow" },
      { title: "Investors — Kumpels" },
      { name: "description", content: "Kumpels Core: medication safety platform, innovation, recognition, and strategic partnerships." },
      { property: "og:title", content: "Investors — Kumpels" },
      { property: "og:url", content: "/en/investors" },
    ],
    links: [
      { rel: "canonical", href: "/en/investors" },
      { rel: "alternate", hrefLang: "es", href: "/es/inversionistas" },
      { rel: "alternate", hrefLang: "en", href: "/en/investors" },
    ],
  }),
  component: () => <CoreInvestorsPage lang="en" />,
});
