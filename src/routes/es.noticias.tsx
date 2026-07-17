import { createFileRoute } from "@tanstack/react-router";
import { BlogPage } from "@/components/site/pages";
export const Route = createFileRoute("/es/noticias")({
  head: () => ({
    meta: [
      { title: "Noticias — Kumpels" },
      { name: "description", content: "Novedades de Kumpels, pilotos y aprendizajes de producto." },
      { property: "og:url", content: "/es/noticias" },
    ],
    links: [{ rel: "canonical", href: "/es/noticias" }],
  }),
  component: () => <BlogPage lang="es" />,
});
