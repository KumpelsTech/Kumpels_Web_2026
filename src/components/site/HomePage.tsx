import { Link } from "@tanstack/react-router";
import type { Lang } from "@/i18n/types";
import { routeMap } from "@/i18n/types";
import { t } from "@/i18n/dict";
import {
  ArrowRight,
  ShieldCheck,
  Network,
  Activity,
  BarChart3,
  HeartPulse,
  CheckCircle2,
  Sparkles,
  Brain,
  Pill,
  ClipboardCheck,
  Hospital,
} from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { SocialStrip } from "./SocialStrip";
import { partners } from "@/content/site";
import { HeroCarousel } from "./HeroCarousel";

import {
  ArrowUpRight,
  BrainCircuit,
} from "lucide-react";

const allyLogos = [
  { name: "La Cardio", logo: "/images/icono-la-cardio.png" },
  { name: "Siemens", logo: "/images/logo-siemens.webp" },
  { name: "Social Skin", logo: "/images/icono-SK.jpg" },
  { name: "Georgia Tech", logo: "/images/icono-GT.png" },
  { name: "Hospital Nacional", logo: "/images/icono-hospitalnacional.png" },
  { name: "VITA Fertility", logo: "/images/icono-vita-fertilidad.png" },
  { name: "Fertility Dreams", logo: "/images/icono-fertility-dreams.jpg" },
  { name: "Fondo Emprender", logo: "/images/icono-FES.png" },
];

export function HomePage({ lang }: { lang: Lang }) {
  const L = t(lang).home;
  const r = routeMap[lang];

  return (
    <>
      <HeroCarousel lang={lang} />

      <PurposeAndMedicationFlow lang={lang} />

      <AlliesCarousel lang={lang} />

      <VolunteerBand lang={lang} />

      <TeaserSection visual={<SolutionsVisual lang={lang} />} />

      <ImpactSection lang={lang} />


      <SocialStrip lang={lang} />

      <FinalCTA lang={lang} />
    </>
  );
}

function PurposeAndMedicationFlow({ lang }: { lang: Lang }) {
  const cards =
    lang === "es"
      ? [
        { title: "Mision", desc: "Transformamos la atención sanitaria mejorando la seguridad del paciente, optimizando los flujos de trabajo y facilitando el acceso a una mejor atención mediante tecnología de vanguardia y colaboración estratégica.", icon: Brain },
        { title: "Vision", desc: "Convertirse en un líder mundial en la eliminación de errores de medicación y en el impulso de la innovación sanitaria, garantizando una atención más segura, rápida y fiable para cada paciente.", icon: HeartPulse },
        { title: "Nuestro Equipo", desc: "Un equipo apasionado y multidisciplinario que combina experiencia en salud, tecnología y negocios, comprometido a revolucionar la seguridad en la medicación y la eficiencia hospitalaria a nivel mundial.", icon: Network },
      ]
      : [
        { title: "Innovation", desc: "We transform healthcare by enhancing patient safety, optimizing workflows, and improving access to better care through cutting-edge technology and strategic collaboration.", icon: Brain },
        { title: "Care", desc: "To become a global leader in eliminating medication errors and driving healthcare innovation, ensuring safer, faster, and more reliable care for every patient.", icon: HeartPulse },
        { title: "Traceability", desc: "A passionate and multidisciplinary team combining expertise in healthcare, technology, and business, committed to revolutionizing medication safety and hospital efficiency worldwide.", icon: Network },
      ];

  const steps =
    lang === "es"
      ? [
        { title: "Prescripción", icon: ClipboardCheck },
        { title: "Validación", icon: ShieldCheck },
        { title: "Dispensación", icon: Pill },
        { title: "Administración", icon: HeartPulse },
      ]
      : [
        { title: "Prescription", icon: ClipboardCheck },
        { title: "Validation", icon: ShieldCheck },
        { title: "Dispensing", icon: Pill },
        { title: "Administration", icon: HeartPulse },
      ];

  return (
    <section className="relative overflow-hidden bg-white">
      <div className="container-page py-20 md:py-28">
        <div className="grid gap-14 lg:grid-cols-12 lg:items-center">
          <div className="grid grid-cols-2 gap-5 md:gap-8 lg:col-span-5">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <Reveal
                  key={step.title}
                  delay={index * 0.07}
                  className={`group rounded-3xl bg-[#eef3ff] p-6 text-center shadow-[0_18px_45px_rgba(8,69,212,0.10)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_26px_60px_rgba(8,69,212,0.16)] md:p-8 ${index === 1 || index === 3 ? "translate-y-8" : ""
                    }`}
                >
                  <Icon
                    className="mx-auto h-14 w-14 text-[#0845D4] transition duration-300 group-hover:scale-110 md:h-20 md:w-20"
                    strokeWidth={1.7}
                  />

                  <h3 className="mt-5 text-xl font-extrabold text-[#0845D4] md:text-1.5xl">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-5 text-[#4b5563] md:text-base">
                  </p>
                </Reveal>
              );
            })}
          </div>

          <div className="lg:col-span-7 lg:pl-10">

            <Reveal
              as="h2"
              delay={0.08}
              className="mt-6 max-w-4xl font-display text-4xl font-extrabold leading-tight text-[#111827] md:text-6xl"
            >
              {lang === "es" ? (
                <>
                  Una capa inteligente
                  <br />
                  sobre el ciclo del{" "}
                  <span className="text-[#F7BA2B]">medicamento.</span>
                </>
              ) : (
                <>
                  An intelligent layer
                  <br />
                  over the{" "}
                  <span className="text-[#0845D4]">medication cycle.</span>
                </>
              )}
            </Reveal>

            <Reveal
              as="p"
              delay={0.14}
              className="mt-7 max-w-2xl text-base leading-7 text-[#30303a] md:text-lg"
            >
              {lang === "es"
                ? "Kumpels conecta prescripción, validación, dispensación y administración para que cada medicamento llegue al paciente con mayor seguridad, trazabilidad y control clínico-operacional."
                : "Kumpels connects prescription, validation, dispensing and administration so every medication reaches the patient with greater safety, traceability and clinical-operational control."}
            </Reveal>

            <Reveal
              as="p"
              delay={0.18}
              className="mt-6 max-w-2xl text-base leading-7 text-[#30303a] md:text-lg"
            >
              {lang === "es" ? (
                <>
                  Nuestro objetivo es claro:{" "}
                  <strong>
                    detectar riesgos antes del error, priorizar alertas relevantes y
                    acompañar decisiones críticas en tiempo real.
                  </strong>
                </>
              ) : (
                <>
                  Our goal is clear:{" "}
                  <strong>
                    detect risks before errors happen, prioritize relevant alerts and
                    support critical decisions in real time.
                  </strong>
                </>
              )}
            </Reveal>
          </div>
        </div>
      </div>

      {/* Purpose azul */}
      <div className="relative overflow-hidden pb-28 pt-20 md:pb-36 md:pt-24">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <svg
            viewBox="0 0 1440 900"
            preserveAspectRatio="none"
            className="absolute inset-x-0 top-0 h-full w-full"
          >
            <path
              fill="#0845D4"
              d="
                M0,90
                C170,-20 390,-35 610,30
                C820,92 960,185 1160,210
                C1285,226 1375,198 1440,160
                L1440,625
                C1280,575 1120,605 980,680
                C805,775 610,800 420,735
                C235,672 115,680 0,755
                Z
              "
            />
          </svg>

          <svg
            viewBox="0 0 1440 900"
            preserveAspectRatio="none"
            className="absolute inset-x-0 top-0 h-full w-full opacity-20"
          >
            <path
              fill="#ffffff"
              d="
                M0,520
                C210,445 380,505 570,565
                C765,628 930,610 1100,530
                C1245,462 1350,468 1440,515
                L1440,650
                C1265,610 1120,640 960,710
                C785,785 615,800 420,735
                C225,670 105,700 0,765
                Z
              "
            />
          </svg>

          <div className="absolute -right-20 top-20 h-96 w-96 rounded-full bg-white/20 blur-3xl" />
          <div className="absolute left-8 top-72 h-80 w-80 rounded-full bg-cyan-300/20 blur-3xl" />
        </div>

        <div className="container-page relative z-10">
          <div className="mx-auto flex max-w-5xl flex-col items-center text-center text-white">
            <Reveal className="mt-8 flex justify-center">
              <img
                src="/images/Logo-Kumpels-blanco.svg"
                alt="Kumpels IUS"
                className="h-auto w-[240px] drop-shadow-[0_16px_45px_rgba(255,255,255,0.22)] md:w-[340px] lg:w-[410px]"
                draggable={false}
              />
            </Reveal>

            <Reveal
              as="h2"
              delay={0.08}
              className="mx-auto mt-9 max-w-4xl font-display text-3xl font-extrabold leading-tight md:text-5xl lg:text-5xl"
            >
              {lang === "es" ? (
                <>
                  Medicamentos más seguros.
                  <br />
                  Operaciones más inteligentes.
                  <br />
                  Salud más humana.
                </>
              ) : (
                <>
                  Safer medication.
                  <br />
                  Smarter operations.
                  <br />
                  More human healthcare.
                </>
              )}
            </Reveal>

            <Reveal
              as="p"
              delay={0.14}
              className="mx-auto mt-7 max-w-2xl text-base leading-7 text-white/88 md:text-lg md:leading-8"
            >
              {lang === "es"
                ? "En Kumpels creemos que la seguridad del paciente empieza antes de que ocurra un error. Diseñamos tecnología que conecta equipos clínicos, farmacia y operación para reducir riesgos y acompañar decisiones críticas en tiempo real."
                : "At Kumpels we believe patient safety starts before an error happens. We build technology that connects clinical teams, pharmacy and operations to reduce risk and support critical decisions in real time."}
            </Reveal>
          </div>

          <div className="relative z-20 mx-auto mt-16 grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {cards.map((card, index) => {
              const Icon = card.icon;

              return (
                <Reveal
                  key={card.title}
                  delay={index * 0.06}
                  className="group flex min-h-[230px] flex-col rounded-[30px] border border-white/70 bg-white/95 p-7 shadow-[0_28px_70px_rgba(8,69,212,0.18)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:bg-white hover:shadow-[0_40px_90px_rgba(8,69,212,0.26)]"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0845D4]/10">
                    <Icon
                      className="h-8 w-8 text-[#0845D4] transition duration-300 group-hover:scale-110"
                      strokeWidth={1.8}
                    />
                  </div>

                  <h3 className="mt-6 text-xl font-extrabold text-[#111827]">
                    {card.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#4b5563]">
                    {card.desc}
                  </p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function AlliesCarousel({ lang }: { lang: Lang }) {
  const repeated = [...allyLogos, ...allyLogos];

  return (
    <section className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden bg-[#f7fbff] py-10">
      <style>{`
        @keyframes kumpels-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        .kumpels-marquee-track {
          animation: kumpels-marquee 32s linear infinite;
        }

        .kumpels-marquee:hover .kumpels-marquee-track {
          animation-play-state: paused;
        }
      `}</style>

      <div className="kumpels-marquee relative w-screen overflow-hidden py-6">
        <div className="kumpels-marquee-track flex w-max items-center gap-5">
          {repeated.map((ally, index) => (
            <div
              key={`${ally.name}-${index}`}
              className="flex h-28 w-44 shrink-0 items-center justify-center rounded-3xl border border-border bg-white px-6 shadow-soft transition hover:-translate-y-1 hover:shadow-elevated"
            >
              <img
                src={ally.logo}
                alt={ally.name}
                className="max-h-16 max-w-32 object-contain transition duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function VolunteerBand({ lang }: { lang: Lang }) {
  return (
    <section className="relative overflow-visible bg-[#071B52] py-14">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_40%,rgba(39,184,255,0.26),transparent_34%)]"
      />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(8,69,212,0.28),transparent_55%)]"
      />

      <div className="container-page relative">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-9">
            <h2 className="font-display text-2xl font-extrabold text-[#27B8FF] md:text-3xl">
              {lang === "es"
                ? "¿Quieres ser parte del cambio?"
                : "Do you want to be part of the change?"}
            </h2>

            <p className="mt-3 max-w-5xl text-2xl font-medium leading-tight text-white md:text-4xl">
              {lang === "es"
                ? "Súmate como aliado y ayúdanos a llevar tecnología segura a más instituciones de salud."
                : "Join us as a partner and help us bring safer technology to more healthcare institutions."}
            </p>

            <a
              href="https://calendar.app.google/gxTKawMH6Vqkky1s5"
              className="mt-8 inline-flex rounded-full bg-gradient-to-r from-[#0845D4] to-[#27B8FF] px-8 py-3 text-sm font-bold text-white shadow-[0_18px_45px_rgba(39,184,255,0.28)] transition hover:-translate-y-0.5 hover:shadow-[0_24px_60px_rgba(39,184,255,0.38)]"
            >
              {lang === "es" ? "Quiero ser aliado" : "Book a demo"}
            </a>
          </div>

          <div className="relative hidden min-h-[180px] lg:col-span-3 lg:block">
            <div className="absolute -top-24 right-4 h-56 w-56 rounded-full bg-gradient-to-br from-[#27B8FF] via-[#0845D4] to-[#071B52] p-3 shadow-[0_25px_70px_rgba(8,69,212,0.42)]">
              <img
                src="/images/LogoKLC.png"
                alt="Kumpels ally"
                className="h-full w-full rounded-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
function ImpactSection({ lang }: { lang: Lang }) {
  const content =
    lang === "es"
      ? {
        title: "Impacto clínico y operativo",
        subtitle:
          "Resultados medibles que reflejan cómo Kumpels transforma la seguridad del medicamento en hospitales.",
        note:
          "*Proyección basada en un hospital de 350 camas a partir de pilotos iniciales.",
        stats: [
          {
            value: "USD 930K",
            title: "Ahorro anual",
            description: "Estimado por hospital gracias a una operación más eficiente.",
            accent: "yellow",
          },
          {
            value: "100%",
            title: "Prescripciones validadas",
            description:
              "Revisión sistemática para fortalecer la seguridad del paciente.",
            accent: "blue",
          },
          {
            value: "92 h",
            title: "Horas ahorradas diariamente",
            description:
              "Tiempo liberado para que el personal de farmacia se enfoque en tareas de mayor valor.",
            accent: "yellow",
          },
          {
            value: "8%",
            title: "Errores de medicación detectados",
            description:
              "Intervenciones mensuales que permiten prevenir riesgos antes de que lleguen al paciente.",
            accent: "blue",
          },
          {
            value: "10+",
            title: "Hospitales",
            description:
              "Instituciones que utilizan o han validado tecnología desarrollada por Kumpels.",
            accent: "yellow",
          },
        ],
      }
      : {
        eyebrow: "Results",
        title: "Clinical and operational impact",
        subtitle:
          "Measurable outcomes showing how Kumpels transforms medication safety across hospitals.",
        note:
          "*Projection based on a 350-bed hospital using data from initial pilot programs.",
        stats: [
          {
            value: "USD 930K",
            title: "Annual savings",
            description:
              "Estimated per hospital through more efficient clinical operations.",
            accent: "yellow",
          },
          {
            value: "100%",
            title: "Prescriptions validated",
            description:
              "Systematic review designed to strengthen patient safety.",
            accent: "blue",
          },
          {
            value: "92 h",
            title: "Hours saved daily",
            description:
              "Time returned to pharmacy teams for higher-value clinical work.",
            accent: "yellow",
          },
          {
            value: "8%",
            title: "Medication errors detected",
            description:
              "Monthly interventions that help prevent risks before they reach patients.",
            accent: "blue",
          },
          {
            value: "10+",
            title: "Hospitals",
            description:
              "Institutions using or validating technology developed by Kumpels.",
            accent: "yellow",
          },
        ],
      };

  const [savings, validation, hours, errors, hospitals] = content.stats;

  const Stat = ({
    stat,
    className = "",
  }: {
    stat: (typeof content.stats)[number];
    className?: string;
  }) => {
    const accentColor =
      stat.accent === "yellow" ? "text-[#F7BA2B]" : "text-[#27B8FF]";

    return (
      <Reveal
        className={`relative flex min-h-[240px] flex-col items-center justify-center px-5 py-8 text-center md:px-8 ${className}`}
      >
        <p
          className={`font-display text-5xl font-black leading-none tracking-[-0.04em] sm:text-6xl lg:text-7xl ${accentColor}`}
        >
          {stat.value}
        </p>

        <h3 className="mt-5 text-xl font-bold leading-tight text-white sm:text-2xl">
          {stat.title}
        </h3>

        <p className="mt-2 max-w-[390px] text-sm leading-6 text-white/70 sm:text-base">
          {stat.description}
        </p>
      </Reveal>
    );
  };

  return (
    <section className="relative overflow-hidden bg-[#071B52] py-20 text-white sm:py-24 lg:py-28">
      {/* Fondos decorativos */}
      <div className="pointer-events-none absolute -left-40 -top-40 h-[420px] w-[420px] rounded-full bg-[#F7BA2B]/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 top-20 h-[460px] w-[460px] rounded-full bg-[#27B8FF]/10 blur-[130px]" />
      <div className="pointer-events-none absolute bottom-[-220px] left-1/2 h-[420px] w-[700px] -translate-x-1/2 rounded-full bg-[#0845D4]/20 blur-[150px]" />

      <div className="container-page relative z-10">
        {/* Encabezado */}
        <Reveal className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#F7BA2B] sm:text-sm">
            {content.eyebrow}
          </p>

          <h2 className="mt-4 font-display text-4xl font-black leading-[1.05] tracking-[-0.035em] text-white sm:text-5xl lg:text-6xl">
            {content.title}
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-white/75 sm:text-lg">
            {content.subtitle}
          </p>
        </Reveal>

        {/* Primera fila */}
        <div className="relative mt-14 lg:mt-20">
          <div className="grid md:grid-cols-3">
            <Stat stat={savings} />

            <Stat
              stat={validation}
              className="
                border-t border-white/10
                md:border-l md:border-t-0
              "
            />

            <Stat
              stat={hours}
              className="
                border-t border-white/10
                md:border-l md:border-t-0
              "
            />
          </div>

          {/* Línea central divisoria */}
          <div className="relative my-2 flex items-center sm:my-5">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#27B8FF]/70 to-[#27B8FF]/30" />

            <div className="mx-5 h-2.5 w-2.5 rotate-45 border border-[#F7BA2B]/80 bg-[#071B52]" />

            <div className="h-px flex-1 bg-gradient-to-r from-[#F7BA2B]/30 via-[#F7BA2B]/70 to-transparent" />
          </div>

          {/* Segunda fila */}
          <div className="relative grid md:grid-cols-2">
            <Stat stat={errors} />

            <Stat
              stat={hospitals}
              className="
                border-t border-white/10
                md:border-l md:border-t-0
              "
            />

            {/* Líneas laterales similares a la referencia */}
            <div className="pointer-events-none absolute left-[-45vw] top-1/2 hidden h-px w-[45vw] bg-gradient-to-r from-transparent to-[#27B8FF]/70 lg:block" />

            <div className="pointer-events-none absolute right-[-45vw] top-1/2 hidden h-px w-[45vw] bg-gradient-to-l from-transparent to-[#F7BA2B]/70 lg:block" />
          </div>
        </div>

        {/* Nota metodológica */}
        <Reveal className="mt-12 text-center">
          <p className="inline-flex max-w-3xl items-center justify-center rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-xs leading-5 text-white/50 backdrop-blur-sm sm:text-sm">
            {content.note}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function InvestorsBand({ lang }: { lang: Lang }) {
  const L = t(lang).home;
  const r = routeMap[lang];

  return (
    <section className="container-page pb-16">
      <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#655db3] to-[#282653] p-8 shadow-elevated md:p-12">
        <div
          aria-hidden
          className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-cyan-300/30 blur-3xl"
        />

        <div className="relative grid gap-6 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-white">
            </span>

            <h2 className="mt-4 font-display text-3xl font-bold text-white md:text-5xl">
              {L.investorsTeaser.title}
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-6 text-white/85">
              {L.investorsTeaser.desc}
            </p>
          </div>

          <div className="lg:col-span-4 lg:text-right">
            <Link
              to={r.investors}
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary shadow-elevated hover:bg-white/95"
            >
              {L.investorsTeaser.cta} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function FinalCTA({ lang }: { lang: Lang }) {
  const L = t(lang).home;
  const r = routeMap[lang];

  return (
    <section className="container-page section-y">
      <div
        className="relative overflow-hidden rounded-[2.5rem] px-8 py-14 shadow-[0_35px_90px_rgba(8,69,212,0.18)] md:px-16 md:py-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(7,27,82,.78), rgba(7,27,82,.78)), url('/images/fondo4.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Glow */}
        <div className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-[#27B8FF]/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-[#0845D4]/30 blur-3xl" />

        <div className="relative mx-auto max-w-4xl text-center">

          <h2 className="mt-6 font-display text-4xl font-bold leading-tight text-white md:text-6xl">
            {L.finalCta.title}
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/80">
            {L.finalCta.desc}
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-5">
            {/* Botón principal */}
            <a
              href="https://calendar.app.google/gxTKawMH6Vqkky1s5"
              target="_blank"
              rel="noopener noreferrer"
              className="
    group
    inline-flex items-center gap-2
    rounded-full
    bg-gradient-to-r
    from-[#27B8FF]
    to-[#0845D4]
    px-8 py-4
    text-base
    font-bold
    text-white
    shadow-[0_18px_45px_rgba(8,69,212,.35)]
    transition-all
    duration-300
    hover:-translate-y-1
    hover:scale-[1.02]
    hover:shadow-[0_24px_60px_rgba(39,184,255,.35)]
  "
            >
              {L.finalCta.primary}

              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            {/* Botón secundario */}
            <Link
              to={r.contact}
              className="
              inline-flex items-center gap-2
              rounded-full
              border
              border-white/30
              bg-white/10
              px-8 py-4
              text-base
              font-semibold
              text-white
              backdrop-blur-md
              transition-all
              duration-300
              hover:-translate-y-1
              hover:bg-white/20
            "
            >
              {L.finalCta.secondary}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function TeaserSection({
  visual,
  dark = false,
}: {
  visual: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <section
      className={`w-full py-20 md:py-24 ${dark ? "bg-[#f5f8ff]" : "bg-white"
        }`}
    >
      <div className="container-page">
        <div className="mx-auto flex w-full justify-center">
          <div className="w-full max-w-6xl">{visual}</div>
        </div>
      </div>
    </section>
  );
}
function SolutionsVisual({ lang }: { lang: Lang }) {
  const content =
    lang === "es"
      ? {
        title: "Tecnología que protege cada etapa del proceso clínico",
        description:
          "Kumpels combina inteligencia clínica, automatización y trazabilidad para ayudar a los equipos de salud a tomar mejores decisiones.",
        items: [
          {
            icon: ShieldCheck,
            title: "La seguridad del paciente, primero",
            description:
              "Redefinimos la seguridad hospitalaria previniendo errores de medicación y asegurando que cada medicamento sea entregado de forma segura y oportuna.",
          },
          {
            icon: BrainCircuit,
            title: "Decisiones clínicas potenciadas por IA",
            description:
              "Nuestras soluciones impulsadas por inteligencia artificial permiten que los equipos de salud identifiquen riesgos y actúen de manera más rápida e inteligente.",
          },
          {
            icon: Network,
            title: "Impacto de principio a fin",
            description:
              "El soporte clínico en tiempo real y la trazabilidad integral mejoran la seguridad, optimizan los flujos de trabajo, reducen sobrecostos y ayudan a salvar vidas.",
          },
        ],
      }
      : {
        title: "Technology that protects every stage of clinical care",
        description:
          "Kumpels combines clinical intelligence, automation and traceability to help healthcare teams make better decisions.",
        items: [
          {
            icon: ShieldCheck,
            title: "Patient safety first",
            description:
              "We redefine hospital safety by preventing medication errors and ensuring that every medication is delivered safely and on time.",
          },
          {
            icon: BrainCircuit,
            title: "AI-driven clinical empowerment",
            description:
              "Our AI-powered solutions help healthcare teams identify risks and act faster and smarter.",
          },
          {
            icon: Network,
            title: "End-to-end impact",
            description:
              "Real-time clinical support and comprehensive traceability improve safety, optimize workflows, reduce overcosts and help save lives.",
          },
        ],
      };

  return (
    <div className="relative w-full overflow-hidden rounded-[2rem] border border-[#0845D4]/25 bg-[#071B52] p-5 shadow-[0_30px_90px_rgba(8,69,212,0.20)] md:p-8 lg:p-10">
      {/* Fondos decorativos */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#27B8FF]/15 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-28 -left-20 h-72 w-72 rounded-full bg-[#0845D4]/25 blur-3xl" />

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F7BA2B]/5 blur-3xl" />

      <div className="relative">
        {/* Encabezado */}
        <div className="mx-auto mb-8 max-w-3xl text-center md:mb-10">

          <h3 className="font-display text-2xl font-bold leading-tight text-white md:text-3xl lg:text-4xl">
            {content.title}
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/70 md:text-base">
            {content.description}
          </p>
        </div>

        {/* Propuestas de valor */}
        <div className="grid gap-4 md:grid-cols-3">
          {content.items.map((item, index) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="group relative flex min-h-[300px] flex-col items-center justify-start overflow-hidden rounded-3xl border border-[#27B8FF]/15 bg-white/[0.045] p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#27B8FF]/45 hover:bg-white/[0.07] hover:shadow-[0_20px_45px_rgba(39,184,255,0.14)]"
              >
                {/* Número */}
                <span className="absolute right-5 top-5 text-sm font-bold text-[#27B8FF]/45">
                  0{index + 1}
                </span>

                {/* Línea superior */}
                <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[#27B8FF]/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                {/* Ícono */}
                <div className="relative mb-5 mt-2">
                  <div className="absolute inset-0 scale-125 rounded-2xl bg-[#0845D4]/25 blur-xl transition-all duration-300 group-hover:bg-[#27B8FF]/25" />

                  <span className="relative grid h-14 w-14 place-items-center rounded-2xl border border-[#27B8FF]/25 bg-[#0A2A63] text-[#F7BA2B] shadow-[0_10px_30px_rgba(8,69,212,0.24)] transition-all duration-300 group-hover:scale-105 group-hover:border-[#27B8FF]/55 group-hover:bg-[#0845D4] group-hover:text-white">
                    <Icon className="h-7 w-7" strokeWidth={1.8} />
                  </span>
                </div>

                <h4 className="font-display text-lg font-bold leading-snug text-white md:text-xl">
                  {item.title}
                </h4>

                <p className="mt-3 text-sm leading-6 text-white/68">
                  {item.description}
                </p>

              </article>
            );
          })}
        </div>

        {/* Cierre */}
        <div className="mx-auto mt-5 flex max-w-3xl flex-col items-center justify-center gap-3 rounded-2xl border border-[#27B8FF]/20 bg-[#0A2A63]/80 px-5 py-4 text-center sm:flex-row">

          <p className="text-sm font-semibold text-white md:text-base">
            {lang === "es"
              ? "Más seguridad, mejores decisiones y procesos clínicos más eficientes."
              : "Safer care, better decisions and more efficient clinical workflows."}
          </p>
        </div>
      </div>
    </div>
  );
}