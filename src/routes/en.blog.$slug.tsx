import { createFileRoute } from "@tanstack/react-router";
import { BlogPostPage } from "@/components/site/pages";

export const Route = createFileRoute("/en/blog/$slug")({
  head: ({ params }) => ({
    meta: [
      { title: `Article — Kumpels` },
      { name: "description", content: "Kumpels blog article." },
      { property: "og:title", content: "Article — Kumpels" },
      { property: "og:type", content: "article" },
      { property: "og:url", content: `/en/blog/${params.slug}` },
    ],
    links: [
      { rel: "canonical", href: `/en/blog/${params.slug}` },
      { rel: "alternate", hrefLang: "es", href: `/es/blog/${params.slug}` },
      { rel: "alternate", hrefLang: "en", href: `/en/blog/${params.slug}` },
    ],
  }),
  component: () => {
    const { slug } = Route.useParams();
    return <BlogPostPage lang="en" slug={slug} />;
  },
});
