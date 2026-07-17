import { createFileRoute } from "@tanstack/react-router";
import { BlogPage } from "@/components/site/pages";
export const Route = createFileRoute("/en/blog")({
  head: () => ({
    meta: [
      { title: "Blog — Kumpels" },
      { name: "description", content: "Medication errors, digital health, AI in healthcare and Kumpels news." },
      { property: "og:title", content: "Blog — Kumpels" },
      { property: "og:url", content: "/en/blog" },
    ],
    links: [
      { rel: "canonical", href: "/en/blog" },
      { rel: "alternate", hrefLang: "es", href: "/es/blog" },
      { rel: "alternate", hrefLang: "en", href: "/en/blog" },
    ],
  }),
  component: () => <BlogPage lang="en" />,
});
