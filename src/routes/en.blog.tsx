import { createFileRoute } from "@tanstack/react-router";
import { BlogPage } from "@/components/site/pages";

export const Route = createFileRoute("/en/blog")({
  head: () => ({
    meta: [
      { title: 'Kumpels Blog — Healthcare innovation and hospital pharmacy' },
      { name: "description", content: 'Explore our articles on healthcare innovation, medical technology and the future of hospital pharmacy.' },
      { property: "og:title", content: 'Kumpels Blog — Healthcare innovation and hospital pharmacy' },
      { property: "og:description", content: 'Explore our articles on healthcare innovation, medical technology and the future of hospital pharmacy.' },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://website.kumpels.com.co/en/blog" },
    ],
    links: [
      { rel: "canonical", href: "https://website.kumpels.com.co/en/blog" },
      { rel: "alternate", hrefLang: "es", href: "https://website.kumpels.com.co/es/blog" },
      { rel: "alternate", hrefLang: "en", href: "https://website.kumpels.com.co/en/blog" },
    ],
  }),
  component: () => <BlogPage lang="en" />,
});
