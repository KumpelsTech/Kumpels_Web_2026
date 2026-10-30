import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";
import { privacyEs } from "@/content/legal/privacy.es";

export const Route = createFileRoute("/es/privacidad")({
  head: () => ({
    meta: [
      { title: "Política de privacidad — Kumpels" },
      { name: "description", content: "Conoce cómo Kumpels trata los datos personales recopilados a través de su sitio web." },
      { property: "og:title", content: "Política de privacidad — Kumpels" },
      { property: "og:url", content: "/es/privacidad" },
    ],
    links: [
      { rel: "canonical", href: "/es/privacidad" },
      { rel: "alternate", hrefLang: "es", href: "/es/privacidad" },
      { rel: "alternate", hrefLang: "en", href: "/en/privacy" },
    ],
  }),
  component: () => <LegalPage lang="es" document={privacyEs} />,
});
