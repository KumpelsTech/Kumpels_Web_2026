import { createFileRoute } from "@tanstack/react-router";
import { StubPage } from "@/components/site/StubPage";

export const Route = createFileRoute("/es/terminos")({
  head: () => ({
    meta: [
      { title: "Términos y condiciones — Kumpels" },
      { name: "description", content: "Términos y condiciones de uso de la plataforma Kumpels." },
      { property: "og:title", content: "Términos y condiciones — Kumpels" },
      { property: "og:url", content: "/es/terminos" },
    ],
    links: [
      { rel: "canonical", href: "/es/terminos" },
      { rel: "alternate", hrefLang: "es", href: "/es/terminos" },
      { rel: "alternate", hrefLang: "en", href: "/en/terms" },
    ],
  }),
  component: () => <StubPage lang="es" title="Términos y condiciones" eyebrow="Legal" />,
});
