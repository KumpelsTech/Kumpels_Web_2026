import { createFileRoute } from "@tanstack/react-router";
export const Route = createFileRoute("/en/vita-fertility")({
  head: () => ({
    meta: [
      { title: "VITA Fertility — Kumpels" },
      { name: "description", content: "Specialized technology for fertility clinics: traceability, patient follow-up, lab and operations." },
      { property: "og:title", content: "VITA Fertility — Kumpels" },
      { property: "og:url", content: "/en/vita-fertility" },
    ],
    links: [
      { rel: "canonical", href: "/en/vita-fertility" },
      { rel: "alternate", hrefLang: "es", href: "/es/vita-fertility" },
      { rel: "alternate", hrefLang: "en", href: "/en/vita-fertility" },
    ],
  }),
});
