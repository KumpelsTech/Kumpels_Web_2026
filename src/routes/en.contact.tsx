import { createFileRoute } from "@tanstack/react-router";
import { ContactPage } from "@/components/site/pages";
export const Route = createFileRoute("/en/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Kumpels" },
      { name: "description", content: "Talk to the team, request a demo, or book an initial diagnosis." },
      { property: "og:title", content: "Contact — Kumpels" },
      { property: "og:url", content: "/en/contact" },
    ],
    links: [
      { rel: "canonical", href: "/en/contact" },
      { rel: "alternate", hrefLang: "es", href: "/es/contacto" },
      { rel: "alternate", hrefLang: "en", href: "/en/contact" },
    ],
  }),
  component: () => <ContactPage lang="en" />,
});
