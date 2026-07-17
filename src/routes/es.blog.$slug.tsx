import { createFileRoute } from "@tanstack/react-router";
import { BlogPostPage } from "@/components/site/pages";

export const Route = createFileRoute("/es/blog/$slug")({
  head: ({ params }) => ({
    meta: [
      { title: `Artículo — Kumpels` },
      { name: "description", content: "Artículo del blog de Kumpels." },
      { property: "og:title", content: "Artículo — Kumpels" },
      { property: "og:type", content: "article" },
      { property: "og:url", content: `/es/blog/${params.slug}` },
    ],
    links: [
      { rel: "canonical", href: `/es/blog/${params.slug}` },
      { rel: "alternate", hrefLang: "es", href: `/es/blog/${params.slug}` },
      { rel: "alternate", hrefLang: "en", href: `/en/blog/${params.slug}` },
    ],
  }),
  component: () => {
    const { slug } = Route.useParams();
    return <BlogPostPage lang="es" slug={slug} />;
  },
});
