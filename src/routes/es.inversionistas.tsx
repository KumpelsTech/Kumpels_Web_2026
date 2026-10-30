import { createFileRoute } from "@tanstack/react-router";
import { CoreInvestorsPage } from "@/components/site/CoreInvestorsPage";

export const Route = createFileRoute("/es/inversionistas")({
  head: () => ({
    meta: [
      { name: "robots", content: "noindex, nofollow" },
      { title: "Inversionistas — Kumpels" },
      { name: "description", content: "Kumpels Core: plataforma de seguridad del medicamento, innovación, reconocimientos y alianzas estratégicas." },
      { property: "og:title", content: "Inversionistas — Kumpels" },
      { property: "og:url", content: "/es/inversionistas" },
    ],
    links: [
      { rel: "canonical", href: "/es/inversionistas" },
      { rel: "alternate", hrefLang: "es", href: "/es/inversionistas" },
      { rel: "alternate", hrefLang: "en", href: "/en/investors" },
    ],
  }),
  component: () => <CoreInvestorsPage lang="es" />,
});
