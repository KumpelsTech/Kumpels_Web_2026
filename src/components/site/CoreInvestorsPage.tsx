import type { Lang } from "@/i18n/types";
import { PageHero } from "./PageHero";
import { Globe2, ShieldCheck, BarChart3, Quote, Scale, Trophy, Rocket, ExternalLink, Calendar } from "lucide-react";

const copy = {
  "es": {
    "title": "Construimos la infraestructura tecnológica para una medicación más segura",
    "intro": "Kumpels está transformando la seguridad del medicamento mediante inteligencia artificial, trazabilidad y automatización, con una solución escalable para instituciones de salud.",
    "thesis": {
      "title": "Una plataforma diseñada para prevenir errores, optimizar operaciones y salvar vidas",
      "description": "Los errores de medicación representan un problema clínico, operativo y financiero de alcance global. Kumpels Core conecta la validación clínica y la trazabilidad del medicamento para prevenir riesgos antes de que impacten al paciente.",
      "quote": "La muerte por un error de medicación prevenible es inaceptable. Estamos construyendo la plataforma que ayuda a evitar que vuelva a suceder."
    },
    "problem": {
      "title": "Una falla global con consecuencias humanas y financieras",
      "description": "Los errores de medicación afectan a millones de pacientes y se originan, en gran medida, en procesos fragmentados, falta de información oportuna y flujos clínicos y operativos desconectados.",
      "secondary": "Estas fallas generan eventos adversos, reprocesos, desperdicio de recursos, mayores costos hospitalarios y una carga significativa para los profesionales y los sistemas de salud.",
      "regulationTitle": "Necesidad clínica y regulatoria",
      "regulation": "En Colombia, el Decreto 2200 de 2005 establece responsabilidades relacionadas con la revisión y detección de problemas en la prescripción, reforzando la necesidad de contar con sistemas que apoyen la validación y la seguridad del medicamento."
    },
    "problemStats": [
      {
        "value": "Global",
        "title": "Impacto sanitario",
        "description": "Los errores relacionados con medicamentos afectan a pacientes e instituciones en múltiples sistemas de salud."
      },
      {
        "value": "Prevenible",
        "title": "Oportunidad de intervención",
        "description": "Una parte significativa de estos eventos puede evitarse mediante tecnología, validación y procesos adecuados."
      },
      {
        "value": "Medible",
        "title": "Impacto de la solución",
        "description": "La reducción de errores, reprocesos y tiempos operativos puede medirse mediante indicadores clínicos y financieros."
      }
    ],
    "solution": {
      "title": "Una plataforma tecnológica que protege cada etapa",
      "intro": "Kumpels combina inteligencia clínica, automatización y trazabilidad para fortalecer la seguridad del medicamento de principio a fin.",
      "items": [
        {
          "title": "Detección de riesgos",
          "description": "Analizamos información clínica y datos de prescripción, con reglas clínicas e inteligencia artificial, para identificar riesgos potenciales de manera temprana."
        },
        {
          "title": "Validación clínica",
          "description": "Apoyamos la revisión sistemática de las prescripciones para contribuir a que el tratamiento adecuado llegue al paciente adecuado."
        },
        {
          "title": "Eficiencia operativa",
          "description": "Optimizamos los flujos de dispensación, entrega y administración, reduciendo tiempos, reprocesos y costos innecesarios."
        },
        {
          "title": "Trazabilidad mejorada",
          "description": "Conectamos el recorrido del medicamento para ofrecer mayor visibilidad, control y oportunidad en cada etapa."
        }
      ]
    },
    "recognition": {
      "title": "Validación por instituciones y programas de innovación",
      "intro": "Nuestro compromiso con la innovación ha sido reconocido por universidades, compañías globales, programas públicos y ecosistemas internacionales.",
      "awardsTitle": "Concursos, premios y reconocimientos",
      "programsTitle": "Programas de aceleración",
      "awards": [
        {
          "name": "Social Skin — Grupo Bolívar / Davivienda",
          "organization": "Colombia",
          "year": "2025",
          "amount": "USD 12,000"
        },
        {
          "name": "LaCardio CREA — La Cardio innovation competition",
          "organization": "Bogotá, Colombia",
          "year": "2024–2025",
          "amount": ""
        },
        {
          "name": "Growth Lab",
          "organization": "Colombia",
          "year": "2025",
          "amount": ""
        },
        {
          "name": "Nestlé",
          "organization": "Colombia",
          "year": "2025",
          "amount": ""
        },
        {
          "name": "Programa Distrital Ruta Bogotá de Alto Impacto y Universidad del Rosario",
          "organization": "Bogotá, Colombia",
          "year": "2024",
          "amount": ""
        },
        {
          "name": "3.er lugar — External Exhibition, Innovation Think Tank, Siemens Healthineers",
          "organization": "Erlangen, Germany",
          "year": "2023",
          "amount": "USD 1,080"
        },
        {
          "name": "Fondo Emprender del Gobierno colombiano",
          "organization": "Bogotá, Colombia",
          "year": "2022",
          "amount": "USD 22,000"
        }
      ],
      "programs": [
        {
          "name": "Early Stage 100",
          "organization": "—",
          "year": "Agosto de 2025"
        },
        {
          "name": "Next Generation Digital Action",
          "organization": "Copenhague, Dinamarca",
          "year": "2024"
        },
        {
          "name": "Incubadora de Mentores de la Universidad Nacional de Colombia",
          "organization": "Bogotá, Colombia",
          "year": "2024"
        },
        {
          "name": "Talent Bridges — Ayuntamiento de Madrid",
          "organization": "Madrid, Spain",
          "year": "2023 · Cohort 2"
        }
      ]
    },
    "opportunity": {
      "title": "Escalar una solución con impacto clínico y potencial regional",
      "intro": "Buscamos aliados estratégicos que compartan nuestra visión de transformar la seguridad del medicamento y construir una infraestructura tecnológica escalable para Latinoamérica.",
      "phrase": "Una oportunidad para escalar impacto clínico, tecnológico y financiero.",
      "items": [
        {
          "title": "Programas piloto",
          "description": "Validación con instituciones de salud y asociaciones estratégicas para demostrar impacto clínico y operativo."
        },
        {
          "title": "Crecimiento de mercado",
          "description": "Expansión de nuestra presencia en el sector healthtech mediante nuevas instituciones, verticales y mercados."
        },
        {
          "title": "Impacto sostenible",
          "description": "Creación de valor clínico, financiero y operativo de largo plazo para pacientes e instituciones."
        }
      ]
    },
    "finalCta": {
      "title": "Construyamos juntos el futuro de la seguridad del medicamento",
      "description": "Conversemos sobre inversión, alianzas estratégicas y oportunidades para escalar Kumpels.",
      "secondary": "Agendar una reunión"
    },
    "pressTitle": "Porque cuando el propósito es claro, los resultados se ven.",
    "pressIntro": "Explora nuestras apariciones, reconocimientos y participación en el ecosistema de innovación.",
    "mediaTitle": "Prensa y apariciones",
    "place": "Lugar",
    "year": "Año",
    "amount": "Monto",
    "links": "Ver publicación"
  },
  "en": {
    "title": "Building the technology infrastructure for safer medication use",
    "intro": "Kumpels is transforming medication safety through artificial intelligence, traceability, and automation, with a scalable solution for healthcare institutions.",
    "thesis": {
      "title": "A platform designed to prevent errors, optimize operations, and save lives",
      "description": "Medication errors are a global clinical, operational, and financial challenge. Kumpels Core connects clinical validation and medication traceability to prevent risks before they affect patients.",
      "quote": "A death caused by a preventable medication error is unacceptable. We are building the platform that helps prevent it from happening again."
    },
    "problem": {
      "title": "A global failure with human and financial consequences",
      "description": "Medication errors affect millions of patients and often arise from fragmented processes, a lack of timely information, and disconnected clinical and operational workflows.",
      "secondary": "These failures cause adverse events, rework, wasted resources, higher hospital costs, and a significant burden on healthcare professionals and systems.",
      "regulationTitle": "Clinical and regulatory need",
      "regulation": "In Colombia, Decree 2200 of 2005 establishes responsibilities related to reviewing prescriptions and detecting prescribing problems, reinforcing the need for systems that support medication validation and safety."
    },
    "problemStats": [
      {
        "value": "Global",
        "title": "Healthcare impact",
        "description": "Medication-related errors affect patients and institutions across healthcare systems."
      },
      {
        "value": "Preventable",
        "title": "Opportunity for intervention",
        "description": "A significant share of these events can be avoided through technology, validation, and appropriate processes."
      },
      {
        "value": "Measurable",
        "title": "Solution impact",
        "description": "Reductions in errors, rework, and operational time can be measured with clinical and financial indicators."
      }
    ],
    "solution": {
      "title": "A technology platform protecting every stage",
      "intro": "Kumpels combines clinical intelligence, automation, and traceability to strengthen medication safety from end to end.",
      "items": [
        {
          "title": "Risk detection",
          "description": "We analyze clinical information and prescription data using clinical rules and artificial intelligence to identify potential risks early."
        },
        {
          "title": "Clinical validation",
          "description": "We support systematic prescription reviews to help the right treatment reach the right patient."
        },
        {
          "title": "Operational efficiency",
          "description": "We optimize dispensing, delivery, and administration workflows, reducing time, rework, and unnecessary costs."
        },
        {
          "title": "Improved traceability",
          "description": "We connect the medication journey to improve visibility, control, and timeliness at each stage."
        }
      ]
    },
    "recognition": {
      "title": "Validation through institutions and innovation programs",
      "intro": "Our commitment to innovation has been recognized by universities, global companies, public programs, and international ecosystems.",
      "awardsTitle": "Competitions, awards, and recognition",
      "programsTitle": "Acceleration programs",
      "awards": [
        {
          "name": "Social Skin — Grupo Bolívar / Davivienda",
          "organization": "Colombia",
          "year": "2025",
          "amount": "USD 12,000"
        },
        {
          "name": "LaCardio CREA — La Cardio innovation competition",
          "organization": "Bogotá, Colombia",
          "year": "2024–2025",
          "amount": ""
        },
        {
          "name": "Growth Lab",
          "organization": "Colombia",
          "year": "2025",
          "amount": ""
        },
        {
          "name": "Nestlé",
          "organization": "Colombia",
          "year": "2025",
          "amount": ""
        },
        {
          "name": "Programa Distrital Ruta Bogotá de Alto Impacto y Universidad del Rosario",
          "organization": "Bogotá, Colombia",
          "year": "2024",
          "amount": ""
        },
        {
          "name": "3rd place — External Exhibition, Innovation Think Tank, Siemens Healthineers",
          "organization": "Erlangen, Germany",
          "year": "2023",
          "amount": "USD 1,080"
        },
        {
          "name": "Fondo Emprender — Colombian Government",
          "organization": "Bogotá, Colombia",
          "year": "2022",
          "amount": "USD 22,000"
        }
      ],
      "programs": [
        {
          "name": "Early Stage 100",
          "organization": "—",
          "year": "August 2025"
        },
        {
          "name": "Next Generation Digital Action",
          "organization": "Copenhagen, Denmark",
          "year": "2024"
        },
        {
          "name": "Incubadora de Mentores — Universidad Nacional de Colombia",
          "organization": "Bogotá, Colombia",
          "year": "2024"
        },
        {
          "name": "Talent Bridges — Madrid City Council",
          "organization": "Madrid, Spain",
          "year": "2023 · Cohort 2"
        }
      ]
    },
    "opportunity": {
      "title": "Scaling a solution with clinical impact and regional potential",
      "intro": "We seek strategic partners who share our vision of transforming medication safety and building scalable technology infrastructure for Latin America.",
      "phrase": "An opportunity to scale clinical, technological, and financial impact.",
      "items": [
        {
          "title": "Pilot programs",
          "description": "Validation with healthcare institutions and strategic associations to demonstrate clinical and operational impact."
        },
        {
          "title": "Market growth",
          "description": "Expansion in healthtech through new institutions, specialties, and markets."
        },
        {
          "title": "Sustainable impact",
          "description": "Long-term clinical, financial, and operational value for patients and institutions."
        }
      ]
    },
    "finalCta": {
      "title": "Let’s build the future of medication safety together",
      "description": "Let’s discuss investment, strategic partnerships, and opportunities to scale Kumpels.",
      "secondary": "Schedule a meeting"
    },
    "pressTitle": "When the purpose is clear, the results become visible.",
    "pressIntro": "Explore our media appearances, recognition, and participation in the innovation ecosystem.",
    "mediaTitle": "Media coverage and interviews",
    "place": "Location",
    "year": "Year",
    "amount": "Amount",
    "links": "View coverage"
  }
} as const;
const mediaLinks = [
  {
    "title": "Caracol Radio",
    "href": "https://caracol.com.co/2026/03/25/este-software-agilizaria-los-tiempos-operativos-y-evitaria-errores-en-medicacion-en-colombia/"
  },
  {
    "title": "La Nube — Blu Radio (audio)",
    "href": "https://www.kumpels.com.co/Blu%20radio/Audio%20Entrevista%20Blu%20Radio.mp3"
  },
  {
    "title": "La Nube — Blu Radio (PDF)",
    "href": "https://www.kumpels.com.co/Blu%20radio/Blu%20Radio%20-%20La%20Nube.pdf"
  },
  {
    "title": "Seguro nos Pasa — Seguros Bolívar (YouTube)",
    "href": "https://youtu.be/03_7vj7NOaA?si=dM2pY5Nt2u6BQ5dX"
  },
  {
    "title": "Seguro nos Pasa — Spotify",
    "href": "https://spotifycreators-web.app.link/e/735p8qZgC1b"
  },
  {
    "title": "Kumpels Pharma — El Espectador",
    "href": "https://www.elespectador.com/economia/emprendimiento-y-liderazgo/un-software-que-apoya-la-toma-de-decisiones-clinicas-en-hospitales-de-colombia/"
  },
  {
    "title": "Telaraña farmacéutica",
    "href": "https://www.youtube.com/watch?v=lxAEAg8p-Fc"
  }
];

export function CoreInvestorsPage({ lang }: { lang: Lang }) {
  const L = copy[lang];

  const problemIcons = [Globe2, ShieldCheck, BarChart3];

  const pressItems = [
    {
      title: lang === "es" ? "Innovación colombiana en salud" : "Colombian healthcare innovation",
      source: "Caracol Radio",
      href: mediaLinks[0].href,
      logo: "",
    },
    {
      title: lang === "es" ? "Reconocimiento internacional" : "International recognition",
      source: "Siemens Healthineers",
      href: "",
      logo: "",
    },
    {
      title: lang === "es" ? "Tecnología para transformar la seguridad del medicamento" : "Technology transforming medication safety",
      source: "El Espectador",
      href: mediaLinks[5].href,
      logo: "",
    },
    {
      title: lang === "es" ? "Una solución construida desde Latinoamérica" : "A solution built in Latin America",
      source: "Kumpels",
      href: "",
      logo: "",
    },
    {
      title: lang === "es" ? "Innovación clínica con impacto" : "Clinical innovation with impact",
      source: "Seguros Bolívar",
      href: mediaLinks[3].href,
      logo: "",
    },
    {
      title: lang === "es" ? "Emprendimiento y transformación digital" : "Entrepreneurship and digital transformation",
      source: "Blu Radio",
      href: mediaLinks[1].href,
      logo: "",
    },
  ];

  return (
    <>
      {/* HERO */}
      <PageHero
        title={L.title}
        
        intro={L.intro}
        backgroundImage="/images/fondo4.png"
        backgroundPosition="center"
      />

      {/* TESIS DE INVERSIÓN */}
      <section className="relative overflow-hidden bg-white py-20 md:py-28">
        <div className="container-page">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <h2 className="max-w-4xl font-display text-4xl font-black leading-[1.04] tracking-[-0.04em] text-[#071B52] md:text-6xl">
                {L.thesis.title}
              </h2>

              <div className="mt-7 h-1 w-32 bg-[#F7BA2B]" />

              <p className="mt-7 max-w-3xl text-base leading-8 text-[#536174] md:text-lg">
                {L.thesis.description}
              </p>
            </div>

            <div className="lg:col-span-5">
              <blockquote className="relative border-l-4 border-[#27B8FF] bg-[#F4F8FC] px-7 py-8 md:px-9">
                <Quote className="h-9 w-9 text-[#0845D4]" />

                <p className="mt-5 font-display text-xl font-bold leading-8 text-[#16213D] md:text-2xl">
                  “{L.thesis.quote}”
                </p>

              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEMA */}
      <section className="relative overflow-hidden bg-[#071B52] py-20 text-white md:py-28">
        <div className="pointer-events-none absolute bottom-0 left-0 h-28 w-[42%] bg-[#0845D4]/35 [clip-path:polygon(0_55%,100%_0,100%_100%,0_100%)]" />

        <div className="pointer-events-none absolute bottom-0 right-0 h-24 w-[38%] bg-[#F7BA2B] [clip-path:polygon(0_100%,100%_20%,100%_100%)]" />

        <div className="container-page relative z-10">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <h2 className="font-display text-4xl font-black leading-tight tracking-[-0.035em] md:text-5xl">
                {L.problem.title}
              </h2>

              <p className="mt-6 text-base leading-8 text-white/75">
                {L.problem.description}
              </p>

              <p className="mt-4 text-base leading-8 text-white/60">
                {L.problem.secondary}
              </p>
            </div>

            <div className="grid gap-px overflow-hidden border border-white/15 bg-white/15 md:grid-cols-3 lg:col-span-7">
              {L.problemStats.map((stat, index) => {
                const Icon = problemIcons[index] ?? ShieldCheck;

                return (
                  <article
                    key={stat.title}
                    className="bg-[#0B285D] p-7 md:p-8"
                  >
                    <Icon className="h-7 w-7 text-[#27B8FF]" />

                    <p className="mt-8 font-display text-3xl font-black text-white">
                      {stat.value}
                    </p>

                    <h3 className="mt-3 text-base font-bold text-white">
                      {stat.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-white/60">
                      {stat.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>

          <div className="mt-12 grid border-t border-white/15 pt-8 md:grid-cols-[auto_1fr] md:items-start md:gap-7">
            <span className="grid h-12 w-12 place-items-center bg-[#F7BA2B] text-[#071B52]">
              <Scale className="h-6 w-6" />
            </span>

            <div className="mt-5 md:mt-0">
              <h3 className="font-display text-xl font-bold">
                {L.problem.regulationTitle}
              </h3>

              <p className="mt-2 max-w-5xl text-sm leading-7 text-white/65">
                {L.problem.regulation}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUCIÓN */}
      <section className="relative overflow-hidden bg-[#F5F7FA] py-20 md:py-28">
        {/* Logo de fondo */}
        <img
          src="/images/Logo-Kumpels-azul.png"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute right-[5%] top-16 hidden w-[340px] select-none object-contain opacity-[0.055] lg:block xl:w-[430px]"
          draggable={false}
        />

        <div className="container-page relative z-10">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <h2 className="max-w-4xl font-display text-4xl font-black leading-tight tracking-[-0.035em] text-[#071B52] md:text-5xl">
                {L.solution.title}
              </h2>

              <p className="mt-5 max-w-3xl text-base leading-8 text-[#66758A]">
                {L.solution.intro}
              </p>
            </div>

            <div className="hidden justify-end lg:col-span-4 lg:flex">
              <img
                src="/images/Logo-Kumpels-azul.png"
                alt="Kumpels"
                className="w-56 object-contain opacity-20"
                draggable={false}
              />
            </div>
          </div>

          {/* Soluciones sin numeración */}
          <div className="mt-14 border-y border-[#CAD6E2]">
            {L.solution.items.map((item, index) => {

              return (
                <article
                  key={item.title}
                  className="group grid gap-5 border-b border-[#CAD6E2] py-7 last:border-b-0 md:grid-cols-[minmax(260px,0.85fr)_1.5fr] md:items-center md:gap-12 md:py-9"
                >
                  <div className="flex items-center gap-4">
                    <span className="grid h-12 w-12 shrink-0 place-items-center bg-[#071B52] text-sm font-black text-white transition duration-300 group-hover:bg-[#0845D4]">0{index + 1}</span>

                    <h3 className="font-display text-xl font-bold leading-tight text-[#16213D]">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-sm leading-7 text-[#66758A]">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* RECONOCIMIENTOS */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-page">
          <div className="max-w-4xl">
            <h2 className="font-display text-4xl font-black leading-tight tracking-[-0.035em] text-[#071B52] md:text-5xl">
              {L.recognition.title}
            </h2>

            <p className="mt-5 max-w-3xl text-base leading-8 text-[#66758A]">
              {L.recognition.intro}
            </p>
          </div>

          <div className="mt-14 grid gap-12 lg:grid-cols-2">
            {/* Premios */}
            <div>
              <div className="flex items-center justify-between border-b-2 border-[#071B52] pb-4">
                <h3 className="font-display text-2xl font-bold text-[#071B52]">
                  {L.recognition.awardsTitle}
                </h3>

                <Trophy className="h-6 w-6 text-[#F7BA2B]" />
              </div>

              <div>
                {L.recognition.awards.map((award) => (
                  <article
                    key={award.name}
                    className="grid gap-4 border-b border-[#DCE5EE] py-6 md:grid-cols-[1fr_auto]"
                  >
                    <div>
                      <h4 className="font-bold leading-6 text-[#16213D]">
                        {award.name}
                      </h4>

                      <p className="mt-2 text-sm text-[#66758A]">
                        {award.organization}
                      </p>

                      <p className="mt-3 text-xs font-bold uppercase tracking-[0.14em] text-[#0845D4]">
                        {award.year}
                      </p>
                    </div>

                    <p className="font-display text-xl font-black text-[#F0A800]">
                      {award.amount}
                    </p>
                  </article>
                ))}
              </div>
            </div>

            {/* Programas */}
            <div>
              <div className="flex items-center justify-between border-b-2 border-[#071B52] pb-4">
                <h3 className="font-display text-2xl font-bold text-[#071B52]">
                  {L.recognition.programsTitle}
                </h3>

                <Rocket className="h-6 w-6 text-[#0845D4]" />
              </div>

              <div>
                {L.recognition.programs.map((program) => (
                  <article
                    key={program.name}
                    className="grid gap-4 border-b border-[#DCE5EE] py-6 md:grid-cols-[1fr_auto]"
                  >
                    <div>
                      <h4 className="font-bold leading-6 text-[#16213D]">
                        {program.name}
                      </h4>

                      <p className="mt-2 text-sm text-[#66758A]">
                        {program.organization}
                      </p>
                    </div>

                    <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#0845D4]">
                      {program.year}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRENSA Y ECOSISTEMA */}
      <section className="relative overflow-hidden bg-[#F5F4F2] py-20 md:py-28">
        <div className="pointer-events-none absolute bottom-40 left-0 h-14 w-[54%] bg-[#7F5542]/65 [clip-path:polygon(0_15%,100%_75%,100%_100%,0_55%)]" />

        <div className="pointer-events-none absolute bottom-52 right-0 h-24 w-[46%] bg-[#F7A600] [clip-path:polygon(0_100%,100%_0,100%_35%,20%_100%)]" />

        <div className="container-page relative z-10">
          <div className="max-w-4xl">
            <h2 className="font-display text-3xl font-black leading-tight text-[#111827] md:text-4xl">
              {L.pressTitle}
            </h2>

            <p className="mt-2 text-base text-[#3F4C5E]">
              {L.pressIntro}
            </p>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {mediaLinks.map((item) => (
              <a key={item.title} href={item.href} target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-between gap-3 rounded-xl border border-[#DCE5EE] bg-white px-4 py-3 text-sm font-semibold text-[#071B52] shadow-sm transition hover:border-[#0845D4] hover:text-[#0845D4]">
                <span>{item.title}</span><ExternalLink className="h-4 w-4 shrink-0" />
              </a>
            ))}
          </div>

          <div className="mt-12 grid items-stretch gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {pressItems.map((item) => {
              const cardClass =
                "group flex h-full min-h-[260px] flex-col rounded-[1.75rem] border border-[#DCE5EE] bg-white p-6 shadow-[0_15px_35px_rgba(7,27,82,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_50px_rgba(7,27,82,0.14)]";

              const cardContent = (
                <>
                  {/* Zona superior, reservada para el logotipo */}
                  <div className="flex h-16 shrink-0 items-center justify-start">
                    {item.logo ? (
                      <img
                        src={item.logo}
                        alt={item.source}
                        className="max-h-12 max-w-[180px] object-contain"
                        loading="lazy"
                        onError={(event) => {
                          event.currentTarget.style.display = "none";
                        }}
                      />
                    ) : (
                      <span className="inline-flex rounded-full border border-[#DCE5EE] bg-[#F7FBFF] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-[#0845D4]">
                        {item.source}
                      </span>
                    )}
                  </div>

                  <div className="mt-5 flex-1">
                    <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#0845D4]">
                      {item.source}
                    </p>
                    <h3 className="mt-3 font-display text-xl font-bold leading-snug text-[#16213D]">
                      {item.title}
                    </h3>
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-[#E6EDF3] pt-4">
                    <span className="text-sm font-semibold text-[#536174]">
                      {item.href
                        ? lang === "es" ? "Ver aparición" : "View coverage"
                        : lang === "es" ? "Reconocimiento" : "Recognition"}
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
                <div key={item.source} className={cardClass}>
                  {cardContent}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* OPORTUNIDAD DE INVERSIÓN */}
      <section className="relative overflow-hidden bg-white py-20 md:py-28">
        {/* Detalles decorativos */}
        <div className="pointer-events-none absolute left-0 top-0 h-1.5 w-1/3 bg-[#F7BA2B]" />

        <div className="pointer-events-none absolute right-0 top-0 h-1.5 w-1/4 bg-[#0845D4]" />

        <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#0845D4]/[0.06] blur-[110px]" />

        <div className="pointer-events-none absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-[#F7BA2B]/[0.08] blur-[110px]" />

        <div className="container-page relative z-10">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
            {/* Encabezado */}
            <div className="lg:col-span-5">
              <div className="relative">
                <div className="mb-6 flex items-center gap-3">
                </div>

                <h2 className="font-display text-4xl font-black leading-tight tracking-[-0.035em] text-[#071B52] md:text-5xl">
                  {L.opportunity.title}
                </h2>

                <p className="mt-6 max-w-xl text-base leading-8 text-[#66758A]">
                  {L.opportunity.intro}
                </p>

                <div className="mt-10 hidden lg:block">
                  <div className="h-px w-full max-w-sm bg-gradient-to-r from-[#0845D4] via-[#27B8FF] to-transparent" />

                  <p className="mt-4 max-w-sm text-sm font-semibold leading-6 text-[#0845D4]">
                    {L.opportunity.phrase}
                  </p>
                </div>
              </div>
            </div>

            {/* Oportunidades */}
            <div className="lg:col-span-7">
              {L.opportunity.items.map((item, index) => (
                <article
                  key={item.title}
                  className="group relative grid gap-4 border-b border-[#CAD6E2] py-7 transition duration-300 md:grid-cols-[90px_1fr_1.35fr] md:items-center md:gap-7 md:py-8"
                >
                  {/* Número */}
                  <div className="flex items-center gap-3">
                    <span
                      className={`font-display text-3xl font-black ${index % 2 === 0
                        ? "text-[#0845D4]"
                        : "text-[#F7BA2B]"
                        }`}
                    >
                      0{index + 1}
                    </span>

                    <span
                      className={`h-px flex-1 transition-all duration-300 group-hover:w-10 md:hidden ${index % 2 === 0
                        ? "bg-[#0845D4]"
                        : "bg-[#F7BA2B]"
                        }`}
                    />
                  </div>

                  {/* Título */}
                  <h3 className="font-display text-xl font-bold leading-tight text-[#16213D] transition-colors duration-300 group-hover:text-[#0845D4]">
                    {item.title}
                  </h3>

                  {/* Descripción */}
                  <p className="text-sm leading-7 text-[#66758A]">
                    {item.description}
                  </p>

                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL CON DISEÑO DEL BLOQUE AZUL */}
      <section className="bg-[#071B52] py-20 text-white md:py-24">
        <div className="container-page">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <h2 className="font-display text-4xl font-black leading-tight md:text-5xl">
                {L.finalCta.title}
              </h2>

              <p className="mt-5 max-w-3xl text-base leading-8 text-white/65">
                {L.finalCta.description}
              </p>
            </div>

            <div className="flex flex-col gap-3 lg:col-span-5">

              <a
                href="https://calendar.app.google/gxTKawMH6Vqkky1s5"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between border border-white/25 px-6 py-4 font-bold text-white transition hover:bg-white/10"
              >
                <span className="flex items-center gap-3">
                  <Calendar className="h-5 w-5" />
                  {L.finalCta.secondary}
                </span>

                <ExternalLink className="h-5 w-5 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
