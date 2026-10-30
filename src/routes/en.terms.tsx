import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";
import { termsEn } from "@/content/legal/terms.en";

export const Route = createFileRoute("/en/terms")({
  head: () => ({
    meta: [
      { title: "Terms and Conditions — Kumpels" },
      { name: "description", content: "Read the terms and conditions for using the Kumpels website." },
      { property: "og:title", content: "Terms and Conditions — Kumpels" },
      { property: "og:url", content: "/en/terms" },
    ],
    links: [
      { rel: "canonical", href: "/en/terms" },
      { rel: "alternate", hrefLang: "es", href: "/es/terminos" },
      { rel: "alternate", hrefLang: "en", href: "/en/terms" },
    ],
  }),
  component: () => <LegalPage lang="en" document={termsEn} />,
});
