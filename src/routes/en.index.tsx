import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/site/HomePage";

export const Route = createFileRoute("/en/")({
  head: () => ({
    meta: [
      { title: "Kumpels Core — Coordinated, traceable medication workflows" },
      {
        name: "description",
        content:
          "Kumpels Core coordinates complex, medication-intensive workflows, connecting patients, teams and systems to prevent medication errors and ensure traceability.",
      },
      { property: "og:title", content: "Kumpels Core — Coordinated, traceable medication workflows" },
      {
        property: "og:description",
        content:
          "Kumpels Core coordinates complex, medication-intensive workflows, connecting patients, teams and systems to prevent medication errors and ensure traceability.",
      },
      { property: "og:url", content: "/en" },
      { name: "twitter:title", content: "Kumpels Core — Coordinated, traceable medication workflows" },
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
