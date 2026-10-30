import { createFileRoute } from "@tanstack/react-router";
import { articles } from "@/content/site";
import { BlogPostPage } from "@/components/site/pages";

const SITE_ORIGIN = "https://website.kumpels.com.co";

export const Route = createFileRoute("/en/blog/$slug")({
  head: ({ params }) => {
    const article = articles.find((item) => item.slug === params.slug);
    const title = article ? `${article.title_en} — Kumpels` : "Article — Kumpels";
    const description = article?.excerpt_en ?? "Kumpels blog article.";
    const canonicalUrl = `${SITE_ORIGIN}/en/blog/${encodeURIComponent(params.slug)}`;

    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: canonicalUrl },
        ...(article ? [{ property: "article:published_time", content: article.date }] : []),
      ],
      links: [
        { rel: "canonical", href: canonicalUrl },
        { rel: "alternate", hrefLang: "es", href: `${SITE_ORIGIN}/es/blog/${encodeURIComponent(params.slug)}` },
        { rel: "alternate", hrefLang: "en", href: `${SITE_ORIGIN}/en/blog/${encodeURIComponent(params.slug)}` },
      ],
    };
  },
  component: () => {
    const { slug } = Route.useParams();
    return <BlogPostPage lang="en" slug={slug} />;
  },
});
