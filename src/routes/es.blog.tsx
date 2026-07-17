import { createFileRoute } from "@tanstack/react-router";
import { BlogPage } from "@/components/site/pages";
export const Route = createFileRoute("/es/blog")({
  head: () => ({
    meta: [
      { title: "Blog — Kumpels" },
      { name: "description", content: "Errores de medicación, salud digital, IA en salud y novedades de Kumpels." },
      { property: "og:title", content: "Blog — Kumpels" },
      { property: "og:url", content: "/es/blog" },
    ],
    links: [
      { rel: "canonical", href: "/es/blog" },
      { rel: "alternate", hrefLang: "es", href: "/es/blog" },
      { rel: "alternate", hrefLang: "en", href: "/en/blog" },
    ],
  }),
  component: () => <BlogPage lang="es" />,
});
