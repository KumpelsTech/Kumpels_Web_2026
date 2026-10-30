import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";
import { privacyEn } from "@/content/legal/privacy.en";

export const Route = createFileRoute("/en/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Kumpels" },
      { name: "description", content: "Learn how Kumpels processes personal data collected through its website." },
      { property: "og:title", content: "Privacy Policy — Kumpels" },
      { property: "og:url", content: "/en/privacy" },
    ],
    links: [
      { rel: "canonical", href: "/en/privacy" },
      { rel: "alternate", hrefLang: "es", href: "/es/privacidad" },
      { rel: "alternate", hrefLang: "en", href: "/en/privacy" },
    ],
  }),
  component: () => <LegalPage lang="en" document={privacyEn} />,
});
