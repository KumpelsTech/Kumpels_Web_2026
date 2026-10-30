import { createFileRoute } from "@tanstack/react-router";
import { BlogPage } from "@/components/site/pages";

export const Route = createFileRoute("/es/blog")({
  head: () => ({
    meta: [
      { title: 'Blog Kumpels — Innovación en salud y farmacia hospitalaria' },
      { name: "description", content: 'Explora nuestros artículos sobre innovación en salud, tecnología médica y el futuro de la farmacia hospitalaria.' },
      { property: "og:title", content: 'Blog Kumpels — Innovación en salud y farmacia hospitalaria' },
      { property: "og:description", content: 'Explora nuestros artículos sobre innovación en salud, tecnología médica y el futuro de la farmacia hospitalaria.' },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://website.kumpels.com.co/es/blog" },
    ],
    links: [
      { rel: "canonical", href: "https://website.kumpels.com.co/es/blog" },
      { rel: "alternate", hrefLang: "es", href: "https://website.kumpels.com.co/es/blog" },
      { rel: "alternate", hrefLang: "en", href: "https://website.kumpels.com.co/en/blog" },
    ],
  }),
  component: () => <BlogPage lang="es" />,
});
