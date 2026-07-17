import { createFileRoute } from "@tanstack/react-router";
import { InvestorsPage } from "@/components/site/pages";
export const Route = createFileRoute("/es/inversionistas")({
  head: () => ({
    meta: [
      { title: "Inversionistas — Kumpels" },
      { name: "description", content: "Oportunidad, tracción, modelo, hoja de ruta y deck para inversionistas." },
      { property: "og:title", content: "Inversionistas — Kumpels" },
      { property: "og:url", content: "/es/inversionistas" },
    ],
    links: [
      { rel: "canonical", href: "/es/inversionistas" },
      { rel: "alternate", hrefLang: "es", href: "/es/inversionistas" },
      { rel: "alternate", hrefLang: "en", href: "/en/investors" },
    ],
  }),
  component: () => <InvestorsPage lang="es" />,
});
