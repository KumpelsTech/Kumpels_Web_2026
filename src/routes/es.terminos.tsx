import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";
import { termsEs } from "@/content/legal/terms.es";

export const Route = createFileRoute("/es/terminos")({
  head: () => ({
    meta: [
      { title: "Términos y condiciones — Kumpels" },
      { name: "description", content: "Consulta los términos y condiciones de uso del sitio web de Kumpels." },
      { property: "og:title", content: "Términos y condiciones — Kumpels" },
      { property: "og:url", content: "/es/terminos" },
    ],
    links: [
      { rel: "canonical", href: "/es/terminos" },
      { rel: "alternate", hrefLang: "es", href: "/es/terminos" },
      { rel: "alternate", hrefLang: "en", href: "/en/terms" },
    ],
  }),
  component: () => <LegalPage lang="es" document={termsEs} />,
});
