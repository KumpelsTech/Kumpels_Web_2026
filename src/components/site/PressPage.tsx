
import type { Lang } from "@/i18n/types";
import { ExternalLink } from "lucide-react";

const copy = {
  es: {
    pressTitle:
      "Porque cuando el propósito es claro, los resultados se ven.",
    pressIntro:
      "Explora nuestras apariciones, reconocimientos y participación en el ecosistema de innovación.",
    viewCoverage: "Ver aparición",
    recognition: "Reconocimiento",
  },
  en: {
    pressTitle:
      "When the purpose is clear, the results become visible.",
    pressIntro:
      "Explore our media appearances, recognition, and participation in the innovation ecosystem.",
    viewCoverage: "View coverage",
    recognition: "Recognition",
  },
} as const;

const mediaLinks = [
  {
    title: "Caracol Radio",
    href:
      "https://caracol.com.co/2026/03/25/este-software-agilizaria-los-tiempos-operativos-y-evitaria-errores-en-medicacion-en-colombia/",
  },
  {
    title: "La Nube — Blu Radio (audio)",
    href:
      "https://www.bluradio.com/tecnologia/innovacion/crean-software-para-evitar-errores-medicos-al-momento-de-suministrar-medicamentos-a-pacientes-pr30",
  },
  {
    title: "Seguro nos Pasa — Seguros Bolívar (YouTube)",
    href:
      "https://youtu.be/03_7vj7NOaA?si=dM2pY5Nt2u6BQ5dX",
  },
  {
    title: "Seguro nos Pasa — Spotify",
    href:
      "https://spotifycreators-web.app.link/e/735p8qZgC1b",
  },
  {
    title: "Kumpels Pharma — El Espectador",
    href:
      "https://www.elespectador.com/economia/emprendimiento-y-liderazgo/un-software-que-apoya-la-toma-de-decisiones-clinicas-en-hospitales-de-colombia/",
  },
  {
    title: "Telaraña farmacéutica",
    href: "https://www.youtube.com/watch?v=lxAEAg8p-Fc",
  },
];

type PressItem = {
  title: string;
  source: string;
  href: string;
  logo: string;
};

export function PressPage({ lang }: { lang: Lang }) {
  const L = copy[lang];

  const pressItems: PressItem[] = [
    {
      title:
        lang === "es"
          ? "Innovación colombiana en salud"
          : "Colombian healthcare innovation",
      source: "Caracol Radio",
      href: mediaLinks[0].href,
      logo: "",
    },
    {
      title:
        lang === "es"
          ? "Reconocimiento internacional"
          : "International recognition",
      source: "Siemens Healthineers",
      href: "",
      logo: "",
    },
    {
      title:
        lang === "es"
          ? "Tecnología para transformar la seguridad del medicamento"
          : "Technology transforming medication safety",
      source: "El Espectador",
      href: mediaLinks[5].href,
      logo: "",
    },
    {
      title:
        lang === "es"
          ? "Una solución construida desde Latinoamérica"
          : "A solution built in Latin America",
      source: "Kumpels",
      href: "",
      logo: "",
    },
    {
      title:
        lang === "es"
          ? "Innovación clínica con impacto"
          : "Clinical innovation with impact",
      source: "Seguros Bolívar",
      href: mediaLinks[3].href,
      logo: "",
    },
    {
      title:
        lang === "es"
          ? "Emprendimiento y transformación digital"
          : "Entrepreneurship and digital transformation",
      source: "Blu Radio",
      href: mediaLinks[1].href,
      logo: "",
    },
  ];

  return (
    <main id="main-content">
      {/* PRENSA Y ECOSISTEMA */}
      <section className="relative overflow-hidden bg-[#F5F4F2] py-20 md:py-28">
        {/* Elementos decorativos originales */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-40 left-0 h-14 w-[54%] bg-[#7F5542]/65 [clip-path:polygon(0_15%,100%_75%,100%_100%,0_55%)]"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-52 right-0 h-24 w-[46%] bg-[#F7A600] [clip-path:polygon(0_100%,100%_0,100%_35%,20%_100%)]"
        />

        <div className="container-page relative z-10">
          {/* Encabezado */}
          <div className="max-w-4xl">
            <h1 className="font-display text-3xl font-black leading-tight text-[#111827] md:text-4xl">
              {L.pressTitle}
            </h1>

            <p className="mt-2 text-base text-[#3F4C5E]">
              {L.pressIntro}
            </p>
          </div>

          {/* Enlaces de prensa */}
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {mediaLinks.map((item) => (
              <a
                key={item.title}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-3 rounded-xl border border-[#DCE5EE] bg-white px-4 py-3 text-sm font-semibold text-[#071B52] shadow-sm transition hover:border-[#0845D4] hover:text-[#0845D4]"
              >
                <span>{item.title}</span>
                <ExternalLink className="h-4 w-4 shrink-0" />
              </a>
            ))}
          </div>

          {/* Tarjetas de apariciones y reconocimientos */}
          <div className="mt-12 grid items-stretch gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {pressItems.map((item) => {
              const cardClass =
                "group flex h-full min-h-[260px] flex-col rounded-[1.75rem] border border-[#DCE5EE] bg-white p-6 shadow-[0_15px_35px_rgba(7,27,82,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_50px_rgba(7,27,82,0.14)]";

              const cardContent = (
                <>
                  {/* Zona superior para logotipo o fuente */}
                  <div className="flex h-16 shrink-0 items-center justify-start">
                    {item.logo ? (
                      <img
                        src={item.logo}
                        alt={item.source}
                        className="max-h-12 max-w-[180px] object-contain"
                        loading="lazy"
                        onError={(event) => {
                          event.currentTarget.style.display =
                            "none";
                        }}
                      />
                    ) : (
                      <span className="inline-flex rounded-full border border-[#DCE5EE] bg-[#F7FBFF] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-[#0845D4]">
                        {item.source}
                      </span>
                    )}
                  </div>

                  {/* Información */}
                  <div className="mt-5 flex-1">
                    <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#0845D4]">
                      {item.source}
                    </p>

                    <h2 className="mt-3 font-display text-xl font-bold leading-snug text-[#16213D]">
                      {item.title}
                    </h2>
                  </div>

                  {/* Enlace o reconocimiento */}
                  <div className="mt-6 flex items-center justify-between border-t border-[#E6EDF3] pt-4">
                    <span className="text-sm font-semibold text-[#536174]">
                      {item.href
                        ? L.viewCoverage
                        : L.recognition}
                    </span>

                    {item.href && (
                      <ExternalLink className="h-4 w-4 text-[#0845D4] transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    )}
                  </div>
                </>
              );

              return item.href ? (
                <a
                  key={item.source}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cardClass}
                >
                  {cardContent}
                </a>
              ) : (
                <div
                  key={item.source}
                  className={cardClass}
                >
                  {cardContent}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
