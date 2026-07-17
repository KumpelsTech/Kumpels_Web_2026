import { createFileRoute } from "@tanstack/react-router";
import { StubPage } from "@/components/site/StubPage";

export const Route = createFileRoute("/en/terms")({
  head: () => ({
    meta: [
      { title: "Terms & conditions — Kumpels" },
      { name: "description", content: "Terms and conditions for using the Kumpels platform." },
      { property: "og:title", content: "Terms & conditions — Kumpels" },
      { property: "og:url", content: "/en/terms" },
    ],
    links: [
      { rel: "canonical", href: "/en/terms" },
      { rel: "alternate", hrefLang: "es", href: "/es/terminos" },
      { rel: "alternate", hrefLang: "en", href: "/en/terms" },
    ],
  }),
  component: () => <StubPage lang="en" title="Terms & conditions" eyebrow="Legal" />,
});
