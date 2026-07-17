import { createFileRoute } from "@tanstack/react-router";
import { StubPage } from "@/components/site/StubPage";

export const Route = createFileRoute("/en/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy policy — Kumpels" },
      { name: "description", content: "How Kumpels protects personal information and institutional data." },
      { property: "og:title", content: "Privacy policy — Kumpels" },
      { property: "og:url", content: "/en/privacy" },
    ],
    links: [
      { rel: "canonical", href: "/en/privacy" },
      { rel: "alternate", hrefLang: "es", href: "/es/privacidad" },
      { rel: "alternate", hrefLang: "en", href: "/en/privacy" },
    ],
  }),
  component: () => <StubPage lang="en" title="Privacy policy" eyebrow="Legal" />,
});
