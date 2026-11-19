import { ExternalLink, Linkedin } from "lucide-react";
import type { Lang } from "@/i18n/types";

type LinkedInEdition = {
  date: string;
  titleEs: string;
  titleEn: string;
  descriptionEs: string;
  descriptionEn: string;
  href: string;
};

const linkedInEditions: LinkedInEdition[] = [
  {
    date: "2025-12-30",
    titleEs: "📬 Cerramos 2025 con un hito que define nuestro futuro",
    titleEn: "📬 We close 2025 with a milestone that defines our future",
    descriptionEs: "El cierre de 2025: aprendizajes, resultados del piloto en La Cardio y avances de Kumpels.",
    descriptionEn: "Our 2025 recap: lessons learned, La Cardio pilot results, and Kumpels milestones.",
    href: "https://www.linkedin.com/pulse/we-close-2025-milestone-defines-our-future-kumpelssas-4zate",
  },
  {
    date: "2025-09-05",
    titleEs: "🧪 ¡Nuestro piloto con Fundación Cardioinfantil comenzó oficialmente!",
    titleEn: "🧪 Our pilot with Fundación Cardioinfantil has officially started!",
    descriptionEs: "Comienzo del piloto de trazabilidad con La Cardio y novedades del ecosistema healthtech.",
    descriptionEn: "The launch of our traceability pilot with La Cardio and other healthtech updates.",
    href: "https://www.linkedin.com/pulse/our-pilot-fundaci%C3%B3n-cardioinfantil-has-officially-started-35raf",
  },
  {
    date: "2025-07-19",
    titleEs: "¡Presentamos Kumpels en el Creator Challenge de Nestlé!",
    titleEn: "We pitched at Nestlé’s Creator Challenge!",
    descriptionEs: "Participación en Nestlé Creator Challenge, aceleración Social Skin y nuevos espacios de innovación.",
    descriptionEn: "Nestlé Creator Challenge, Social Skin acceleration, and new innovation opportunities.",
    href: "https://www.linkedin.com/pulse/we-pitched-nestl%C3%A9s-creator-challenge-kumpelssas-yqrwe",
  },
  {
    date: "2025-06-19",
    titleEs: "¡Somos ganadores de Social Skin 2025!",
    titleEn: "We're the proud winners in Social Skin 2025!",
    descriptionEs: "El reconocimiento de Social Skin 2025 y otras novedades del crecimiento de Kumpels.",
    descriptionEn: "Our Social Skin 2025 recognition and other updates on Kumpels' growth.",
    href: "https://www.linkedin.com/pulse/were-proud-winners-social-skin-2025-kumpelssas-a2erf",
  },
  {
    date: "2025-05-27",
    titleEs: "¡Celebramos el inicio oficial de nuestra colaboración!",
    titleEn: "Celebrating the official start of our relationship!",
    descriptionEs: "Inicio de la colaboración con Fundación Cardioinfantil y participación en programas de innovación.",
    descriptionEn: "The start of our collaboration with Fundación Cardioinfantil and innovation programs.",
    href: "https://www.linkedin.com/pulse/celebrating-official-start-our-relationship-kumpelssas-bhwxe",
  },
];

// Históricos publicados originalmente desde HubSpot. Sus páginas HTML se
// encuentran en public/newsletters/{es,en}/ y se abren en una pestaña nueva.
const hubSpotEditions = [
  {
    "id": "jun-2026",
    "date": "2026-07-13",
    "editionEs": "Edición junio 2026 · Publicada el 13 de julio",
    "editionEn": "June 2026 edition · Published July 13",
    "titleEs": "📬 Q2 2026 en Kumpels: nuevos clientes y alianzas estratégicas",
    "titleEn": "📬 Q2 2026 at Kumpels: new clients and strategic partnerships",
    "descriptionEs": "Vita Fertilidad se une como cliente, carta de intención con Fertility Dreams y nuevos avances comerciales.",
    "descriptionEn": "Vita Fertility joins as a client, a letter of intent with Fertility Dreams, and new commercial milestones."
  },
  {
    "id": "mar-2026",
    "date": "2026-03-27",
    "editionEs": "Marzo 2026",
    "editionEn": "March 2026",
    "titleEs": "📬 De lo visible a lo medible: lo que hemos aprendido de nuestros clientes",
    "titleEn": "📬 From invisible to measurable: what we have learned from our clients",
    "descriptionEs": "Aprendizajes del piloto Farmacia On Time: trazabilidad, reprocesos, ahorro operativo y resultados medibles.",
    "descriptionEn": "Farmacia On Time pilot insights: traceability, rework, operational savings, and measurable outcomes."
  }
] as const;

type EditionCard =
  | (LinkedInEdition & { source: "linkedin" })
  | ((typeof hubSpotEditions)[number] & { source: "hubspot" });

const editions: EditionCard[] = [
  ...linkedInEditions.map((item) => ({ ...item, source: "linkedin" as const })),
  ...hubSpotEditions.map((item) => ({ ...item, source: "hubspot" as const })),
].sort((a, b) => b.date.localeCompare(a.date));

export function LinkedInNewsletterArchive({ lang }: { lang: Lang }) {
  const es = lang === "es";
  const dateFormat = new Intl.DateTimeFormat(es ? "es-CO" : "en-US", {
    day: "numeric", month: "long", year: "numeric", timeZone: "UTC",
  });
  const formatDate = (date: string) => dateFormat.format(new Date(`${date}T12:00:00Z`));
  return (
    <section id="ediciones-newsletter" className="relative overflow-hidden bg-[#F2F8FC] py-20 md:py-28">
      <div className="container-page relative z-10">
        <div className="flex flex-wrap items-start justify-between gap-5">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#0845D4]">NEWSLETTER</p>
            <h2 className="mt-4 font-display text-4xl font-black tracking-[-0.04em] text-[#071B52] md:text-5xl">
              {es ? "Este mes en Kumpels — archivo de ediciones" : "This month in Kumpels — edition archive"}
            </h2>
            <p className="mt-5 text-base leading-8 text-[#66758A]">
              {es
                ? "Explora nuestras siete ediciones históricas, publicadas originalmente en LinkedIn y enviadas desde HubSpot."
                : "Explore our seven past editions, originally published on LinkedIn and sent through HubSpot."}
            </p>
          </div>
          <a href="https://www.linkedin.com/newsletters/this-month-in-kumpels-7333122682919526401/"
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-[#0845D4]/25 bg-white px-5 py-3 text-sm font-bold text-[#0845D4] transition hover:border-[#0845D4]">
            <Linkedin className="h-4 w-4" />
            {es ? "Ver newsletter en LinkedIn" : "View newsletter on LinkedIn"}
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {editions.map((edition) => {
            const hubspot = edition.source === "hubspot";
            const href = hubspot
              ? `/newsletters/${lang}/${edition.id}.html`
              : edition.href;
            return (
              <a key={href} href={href} target="_blank" rel="noopener noreferrer"
                className="group flex h-full min-h-64 w-full flex-col rounded-2xl border border-[#DCE5EE] bg-white p-6 text-left shadow-soft transition hover:-translate-y-1 hover:border-[#0845D4]/35 hover:shadow-elevated"
                aria-label={`${es ? edition.titleEs : edition.titleEn} — ${hubspot ? 'Kumpels' : 'LinkedIn'}`}>
                <div className="flex items-center justify-between gap-3">
                  <span className="rounded-full bg-[#EAF5FC] px-3 py-1 text-xs font-bold text-[#0845D4]">
                    {hubspot ? (es ? "Archivo HubSpot" : "HubSpot archive") : "Newsletter"}
                  </span>
                  <time dateTime={edition.date} className="text-xs text-[#66758A]">{formatDate(edition.date)}</time>
                </div>
                {hubspot && (
                  <p className="mt-4 text-xs font-bold uppercase tracking-wide text-[#66758A]">
                    {es ? edition.editionEs : edition.editionEn}
                  </p>
                )}
                <h3 className="mt-5 font-display text-xl font-bold leading-snug text-[#071B52] group-hover:text-[#0845D4]">
                  {es ? edition.titleEs : edition.titleEn}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-7 text-[#66758A]">
                  {es ? edition.descriptionEs : edition.descriptionEn}
                </p>
                <div className="mt-6 flex items-center justify-between border-t border-[#E6EDF3] pt-4 text-sm font-bold text-[#0845D4]">
                  <span>{hubspot
                    ? (es ? "Leer edición" : "Read edition")
                    : (es ? "Leer edición en LinkedIn" : "Read edition on LinkedIn")}
                  </span>
                  <ExternalLink className="h-4 w-4" />
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
