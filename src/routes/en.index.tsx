import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/site/HomePage";

export const Route = createFileRoute("/en/")({
  head: () => ({
    meta: [
      { title: "Kumpels — Technology for safer healthcare" },
      {
        name: "description",
        content:
          "Kumpels connects prescribing, pharmacy, nursing and medication administration to help prevent errors and improve patient safety.",
      },
      { property: "og:title", content: "Kumpels — Technology for safer healthcare" },
      {
        property: "og:description",
        content:
          "HealthTech platform connecting the medication journey to support patient safety.",
      },
      { property: "og:url", content: "/en" },
      { name: "twitter:title", content: "Kumpels — Technology for safer healthcare" },
    ],
    links: [
      { rel: "canonical", href: "/en" },
      { rel: "alternate", hrefLang: "es", href: "/es" },
      { rel: "alternate", hrefLang: "en", href: "/en" },
      { rel: "alternate", hrefLang: "x-default", href: "/es" },
    ],
  }),
  component: () => <HomePage lang="en" />,
});
