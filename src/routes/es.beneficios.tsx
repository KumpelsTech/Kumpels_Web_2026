import { createFileRoute } from "@tanstack/react-router";
import { SolutionsPage } from "@/components/site/pages";
export const Route = createFileRoute("/es/beneficios")({
  head: () => ({
    meta: [
      { title: "Beneficios — Kumpels" },
      { name: "description", content: "Beneficios de Kumpels para equipos clínicos y operativos." },
      { property: "og:url", content: "/es/beneficios" },
    ],
    links: [{ rel: "canonical", href: "/es/beneficios" }],
  }),
  component: () => <SolutionsPage lang="es" />,
});
