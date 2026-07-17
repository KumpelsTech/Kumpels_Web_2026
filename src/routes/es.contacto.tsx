import { createFileRoute } from "@tanstack/react-router";
import { ContactPage } from "@/components/site/pages";
export const Route = createFileRoute("/es/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto — Kumpels" },
      { name: "description", content: "Habla con el equipo, solicita demo o agenda un diagnóstico inicial." },
      { property: "og:title", content: "Contacto — Kumpels" },
      { property: "og:url", content: "/es/contacto" },
    ],
    links: [
      { rel: "canonical", href: "/es/contacto" },
      { rel: "alternate", hrefLang: "es", href: "/es/contacto" },
      { rel: "alternate", hrefLang: "en", href: "/en/contact" },
    ],
  }),
  component: () => <ContactPage lang="es" />,
});
