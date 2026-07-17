import { createFileRoute } from "@tanstack/react-router";
import { SolutionsPage } from "@/components/site/pages";
export const Route = createFileRoute("/en/benefits")({
  head: () => ({
    meta: [
      { title: "Benefits — Kumpels" },
      { name: "description", content: "Benefits of Kumpels for clinical and operational teams." },
      { property: "og:url", content: "/en/benefits" },
    ],
    links: [{ rel: "canonical", href: "/en/benefits" }],
  }),
  component: () => <SolutionsPage lang="en" />,
});
