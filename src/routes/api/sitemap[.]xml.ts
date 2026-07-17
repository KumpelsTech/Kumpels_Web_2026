import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

const BASE_URL = "";

const paths = [
  "/es",
  "/es/soluciones",
  "/es/tecnologia",
  "/es/vita-fertility",
  "/es/validacion",
  "/es/inversionistas",
  "/es/equipo",
  "/es/nosotros",
  "/es/blog",
  "/es/contacto",
  "/es/privacidad",
  "/es/terminos",
  "/en",
  "/en/solutions",
  "/en/technology",
  "/en/vita-fertility",
  "/en/validation",
  "/en/investors",
  "/en/team",
  "/en/about",
  "/en/blog",
  "/en/contact",
  "/en/privacy",
  "/en/terms",
];

export const Route = createFileRoute("/api/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const urls = paths
          .map((p) => `  <url><loc>${BASE_URL}${p}</loc><changefreq>weekly</changefreq></url>`)
          .join("\n");
        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;
        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
