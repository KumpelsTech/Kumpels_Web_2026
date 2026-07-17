import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/site/HomePage";

export const Route = createFileRoute("/es/")({
  head: () => ({
    meta: [
      { title: "Kumpels — Tecnología para una atención más segura" },
      {
        name: "description",
        content:
          "Kumpels conecta prescripción, farmacia, enfermería y administración del medicamento para ayudar a prevenir errores y mejorar la seguridad del paciente.",
      },
      { property: "og:title", content: "Kumpels — Tecnología para una atención más segura" },
      {
        property: "og:description",
        content:
          "Plataforma HealthTech para conectar el viaje del medicamento y apoyar la seguridad del paciente.",
      },
      { property: "og:url", content: "/es" },
      { name: "twitter:title", content: "Kumpels — Tecnología para una atención más segura" },
    ],
    links: [
      { rel: "canonical", href: "/es" },
      { rel: "alternate", hrefLang: "es", href: "/es" },
      { rel: "alternate", hrefLang: "en", href: "/en" },
      { rel: "alternate", hrefLang: "x-default", href: "/es" },
    ],
  }),
  component: () => <HomePage lang="es" />,
});
