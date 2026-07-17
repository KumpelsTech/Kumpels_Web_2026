import { createFileRoute } from "@tanstack/react-router";
import { VitaPage } from "@/components/site/pages";
export const Route = createFileRoute("/es/vita-fertility")({
  head: () => ({
    meta: [
      { title: "VITA Fertility — Kumpels" },
      { name: "description", content: "Tecnología especializada para clínicas de fertilidad: trazabilidad, pacientes, laboratorio y operación." },
      { property: "og:title", content: "VITA Fertility — Kumpels" },
      { property: "og:url", content: "/es/vita-fertility" },
    ],
    links: [
      { rel: "canonical", href: "/es/vita-fertility" },
      { rel: "alternate", hrefLang: "es", href: "/es/vita-fertility" },
      { rel: "alternate", hrefLang: "en", href: "/en/vita-fertility" },
    ],
  }),
  component: () => <VitaPage lang="es" />,
});
