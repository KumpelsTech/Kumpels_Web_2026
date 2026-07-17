import { createFileRoute } from "@tanstack/react-router";
import { ValidationPage } from "@/components/site/pages";
export const Route = createFileRoute("/en/validation")({
  head: () => ({
    meta: [
      { title: "Validation — Kumpels" },
      { name: "description", content: "Validation path, partner institutions, pilot metrics and case studies." },
      { property: "og:title", content: "Validation — Kumpels" },
      { property: "og:url", content: "/en/validation" },
    ],
    links: [
      { rel: "canonical", href: "/en/validation" },
      { rel: "alternate", hrefLang: "es", href: "/es/validacion" },
      { rel: "alternate", hrefLang: "en", href: "/en/validation" },
    ],
  }),
  component: () => <ValidationPage lang="en" />,
});
