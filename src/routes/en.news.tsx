import { createFileRoute } from "@tanstack/react-router";
import { BlogPage } from "@/components/site/pages";
export const Route = createFileRoute("/en/news")({
  head: () => ({
    meta: [
      { title: "News — Kumpels" },
      { name: "description", content: "Kumpels news, pilots and product learnings." },
      { property: "og:url", content: "/en/news" },
    ],
    links: [{ rel: "canonical", href: "/en/news" }],
  }),
  component: () => <BlogPage lang="en" />,
});
