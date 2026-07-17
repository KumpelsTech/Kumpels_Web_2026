import { createFileRoute } from "@tanstack/react-router";
import { StubPage } from "@/components/site/StubPage";

export const Route = createFileRoute("/es/privacidad")({
  head: () => ({
    meta: [
      { title: "Política de privacidad — Kumpels" },
      { name: "description", content: "Cómo Kumpels protege la información personal y los datos institucionales." },
      { property: "og:title", content: "Política de privacidad — Kumpels" },
      { property: "og:url", content: "/es/privacidad" },
    ],
    links: [
      { rel: "canonical", href: "/es/privacidad" },
      { rel: "alternate", hrefLang: "es", href: "/es/privacidad" },
      { rel: "alternate", hrefLang: "en", href: "/en/privacy" },
    ],
  }),
  component: () => <StubPage lang="es" title="Política de privacidad" eyebrow="Legal" />,
});
