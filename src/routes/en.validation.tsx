import { createFileRoute } from "@tanstack/react-router";
import { CoreValidationPage } from "@/components/site/CoreValidationPage";
export const Route = createFileRoute("/en/validation")({
  head: () => ({
    meta: [
      { title: "Real-world validation — Kumpels" },
      { name: "description", content: "La Cardio hospital pilot results and VITA Fertilidad operational assessment." },
      { property: "og:title", content: "Validation — Kumpels" },
      { property: "og:url", content: "/en/validation" },
    ],
    links: [
      { rel: "canonical", href: "/en/validation" },
      { rel: "alternate", hrefLang: "es", href: "/es/validacion" },
      { rel: "alternate", hrefLang: "en", href: "/en/validation" },
    ],
  }),
  component: () => <CoreValidationPage lang="en" />,
});
