import { Link } from "@tanstack/react-router";
import type { Lang } from "@/i18n/types";
import { routeMap } from "@/i18n/types";
import { t } from "@/i18n/dict";
import { useState } from "react";
import { LinkedInNewsletterArchive } from "./LinkedInNewsletterArchive";

import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  BrainCircuit,
  Info,
  Calendar,
  ExternalLink,
  CheckCircle2,
  Clock3,
  Eye,
  HeartPulse,
  Linkedin,
  Mail,
  MapPin,
  ShieldCheck,
  Globe2,
  Code2,
  Lightbulb,
  LineChart,
  Quote,
  Rocket,
  Scale,
  ScanLine,
  Sparkles,
  Target,
  Users,
  Trophy,
  ArrowLeft,
  CalendarDays,
  UserRound,
  Workflow,
} from "lucide-react";

import { PageHero } from "./PageHero";
import { ContactForm } from "./ContactForm";
import { SocialStrip } from "./SocialStrip";

import {
  articles,
  company,
  investorAssets,
  partners,
  social,
  team,
} from "@/content/site";

/* ============ SOLUTIONS / ABOUT KUMPELS ============ */

export function SolutionsPage({ lang }: { lang: Lang }) {
  const L = t(lang).solutions;
  const r = routeMap[lang];

  const valueIcons = [
    HeartPulse,
    Users,
    ShieldCheck,
    BrainCircuit,
  ];

  return (
    <>
      {/* ===============================================================
          HERO
      =============================================================== */}
      <PageHero
        title={L.title}
        highlightedTitle={L.highlightedTitle}
        intro={L.intro}
        backgroundImage="/images/fondo4.png"
        backgroundPosition="center"
      />

      {/* ===============================================================
          SOBRE KUMPELS + VISIÓN
      =============================================================== */}
      <section className="relative overflow-hidden bg-white py-20 md:py-28">
        {/* Fondos decorativos */}
        <div className="pointer-events-none absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-[#27B8FF]/10 blur-[120px]" />

        <div className="pointer-events-none absolute -right-40 bottom-0 h-[420px] w-[420px] rounded-full bg-[#0845D4]/[0.06] blur-[130px]" />

        <div className="container-page relative z-10">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-stretch">
            {/* SOBRE KUMPELS */}
            <div className="lg:col-span-5">
              <article className="relative flex h-full min-h-[480px] flex-col overflow-hidden rounded-[2rem] bg-[#071B52] p-8 text-white shadow-[0_30px_80px_rgba(7,27,82,0.20)] md:p-10">
                <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#27B8FF]/20 blur-3xl" />

                <div className="pointer-events-none absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-[#0845D4]/30 blur-3xl" />

                <div className="relative flex h-full flex-col">
                  <div>

                    <h2 className="mt-5 font-display text-3xl font-black leading-tight md:text-4xl">
                      {L.about.title}
                    </h2>

                    <p className="mt-6 text-base leading-8 text-white/78">
                      {L.about.description}
                    </p>

                    <p className="mt-5 text-base leading-8 text-white/62">
                      {L.about.secondary}
                    </p>
                  </div>

                  <div className="mt-auto pt-10">
                    <div className="h-px w-full bg-gradient-to-r from-[#27B8FF]/70 via-[#0845D4]/40 to-transparent" />

                    <p className="mt-5 text-sm font-semibold leading-6 text-[#8EEBFF]">
                      {lang === "es"
                        ? "Seguridad del medicamento, inteligencia clínica y procesos conectados."
                        : "Medication safety, clinical intelligence and connected workflows."}
                    </p>
                  </div>
                </div>
              </article>
            </div>

            {/* VISIÓN */}
            <div className="lg:col-span-7">
              <article className="group relative flex h-full min-h-[480px] flex-col justify-center overflow-hidden rounded-[2rem] border border-[#DCE5EE] bg-[#F5F9FC] p-8 transition duration-300 hover:border-[#27B8FF]/40 hover:shadow-[0_24px_60px_rgba(7,27,82,0.10)] md:p-10 lg:p-12">
                <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#27B8FF]/10 blur-3xl" />

                <div className="pointer-events-none absolute bottom-0 right-0 h-28 w-48 bg-[#F7BA2B]/10 [clip-path:polygon(100%_0,100%_100%,0_100%)]" />

                <div className="relative">

                  <p className="mt-7 text-xs font-bold uppercase tracking-[0.18em] text-[#0845D4]">
                    {L.vision.label}
                  </p>

                  <h2 className="mt-4 max-w-3xl font-display text-3xl font-black leading-tight tracking-[-0.03em] text-[#071B52] md:text-4xl lg:text-5xl">
                    {L.vision.title}
                  </h2>

                  <p className="mt-6 max-w-3xl text-base leading-8 text-[#66758A]">
                    {L.vision.description}
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* ===============================================================
          VALORES
      =============================================================== */}
      <section className="relative overflow-hidden bg-[#F2F8FC] py-20 md:py-28">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(8,69,212,0.18) 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />

        <div className="container-page relative z-10">
          <div className="mx-auto max-w-4xl text-center">

            <h2 className="mt-4 font-display text-4xl font-black leading-tight tracking-[-0.035em] text-[#071B52] md:text-5xl">
              {L.values.title}
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-[#66758A] md:text-lg">
              {L.values.intro}
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {L.values.items.map((item, index) => {
              const Icon = valueIcons[index] ?? ShieldCheck;

              return (
                <article
                  key={item.title}
                  className="group relative flex min-h-[350px] flex-col overflow-hidden border border-[#D8E4ED] bg-white p-7 shadow-[0_16px_45px_rgba(7,27,82,0.055)] transition duration-300 hover:-translate-y-1 hover:border-[#27B8FF]/45 hover:shadow-[0_25px_60px_rgba(7,27,82,0.10)]"
                >
                  <span
                    className={`absolute right-0 top-0 h-1 w-20 ${index % 2 === 0
                      ? "bg-[#0845D4]"
                      : "bg-[#F7BA2B]"
                      }`}
                  />

                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-[#0845D4]/10 text-[#0845D4] transition duration-300 group-hover:bg-gradient-to-br group-hover:from-[#27B8FF] group-hover:to-[#0845D4] group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </span>

                  <h3 className="mt-7 font-display text-xl font-black leading-snug text-[#16213D]">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-[#66758A]">
                    {item.description}
                  </p>

                  <div className="mt-auto pt-7">
                    <div
                      className={`h-px w-12 transition-all duration-300 group-hover:w-full ${index % 2 === 0
                        ? "bg-[#0845D4]"
                        : "bg-[#F7BA2B]"
                        }`}
                    />
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===============================================================
          EQUIPO
      =============================================================== */}
      <section className="relative overflow-hidden bg-white py-20 md:py-28">
        <div className="pointer-events-none absolute -left-40 bottom-0 h-[380px] w-[380px] rounded-full bg-[#0845D4]/[0.055] blur-[125px]" />

        <div className="container-page relative z-10">
          <div className="mx-auto max-w-5xl text-center">

            <h2 className="mt-4 font-display text-4xl font-black leading-tight tracking-[-0.035em] text-[#071B52] md:text-5xl">
              {L.team.title}
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-[#66758A] md:text-lg">
              {L.team.intro}
            </p>
          </div>

          <div className="mx-auto mt-14 grid max-w-6xl gap-7 md:grid-cols-3">
            {L.team.members.map((member, index) => (
              <article
                key={member.name}
                className="group overflow-hidden border border-[#DCE5EE] bg-white shadow-[0_20px_55px_rgba(7,27,82,0.07)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(7,27,82,0.12)]"
              >
                {/* Fotografía */}
                <div className="relative aspect-[4/4.5] overflow-hidden bg-[#DCEAF4]">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.035]"
                    loading="lazy"
                  />

                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#071B52]/55 to-transparent" />

                  <span
                    className={`absolute bottom-0 left-0 h-1.5 ${index === 1
                      ? "w-2/3 bg-[#F7BA2B]"
                      : "w-2/3 bg-[#27B8FF]"
                      }`}
                  />
                </div>

                {/* Información */}
                <div className="flex min-h-[350px] flex-col p-7">
                  <h3 className="font-display text-2xl font-black leading-tight text-[#16213D]">
                    {member.name}
                  </h3>

                  <p className="mt-2 text-sm font-bold uppercase tracking-[0.1em] text-[#0845D4]">
                    {member.role}
                  </p>

                  <p className="mt-5 text-sm leading-7 text-[#66758A]">
                    {member.description}
                  </p>

                  <div className="mt-auto pt-7">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link inline-flex items-center gap-2 text-sm font-bold text-[#0845D4] transition hover:text-[#27B8FF]"
                    >
                      <Linkedin className="h-4 w-4" />
                      LinkedIn

                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===============================================================
          HISTORIA
      =============================================================== */}
      <section className="relative overflow-hidden bg-white py-20 md:py-28">
        <div className="container-page">
          <div className="mx-auto max-w-4xl text-center">

            <h2 className="mt-4 font-display text-4xl font-black leading-tight tracking-[-0.035em] text-[#071B52] md:text-5xl">
              {L.story.title}
            </h2>
          </div>

          <div className="relative mx-auto mt-16 max-w-5xl">
            {/* Línea vertical */}
            <div className="absolute bottom-0 left-[15px] top-0 w-px bg-[#CAD8E4] md:left-1/2" />

            <div className="space-y-12">
              {L.story.items.map((item, index) => {
                const isLeft = index % 2 === 0;

                return (
                  <article
                    key={`${item.year}-${item.title}`}
                    className="relative grid gap-6 pl-12 md:grid-cols-2 md:pl-0"
                  >
                    {/* Punto central */}
                    <span
                      className={`absolute left-0 top-1 grid h-8 w-8 place-items-center border-4 border-white shadow md:left-1/2 md:-translate-x-1/2 ${index === L.story.items.length - 1
                        ? "bg-[#F7BA2B]"
                        : "bg-[#0845D4]"
                        }`}
                    />

                    <div
                      className={
                        isLeft
                          ? "md:pr-14"
                          : "md:order-2 md:pl-14"
                      }
                    >
                      <p
                        className={`font-display text-3xl font-black ${index === L.story.items.length - 1
                          ? "text-[#F0A800]"
                          : "text-[#0845D4]"
                          }`}
                      >
                        {item.year}
                      </p>

                      <h3 className="mt-3 font-display text-xl font-black text-[#16213D]">
                        {item.title}
                      </h3>

                      <p className="mt-3 text-sm leading-7 text-[#66758A]">
                        {item.description}
                      </p>
                    </div>

                    <div />
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ===============================================================
          CTA FINAL
      =============================================================== */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white to-[#EFF8FF] py-20">
        <div className="pointer-events-none absolute -left-40 top-0 h-[400px] w-[400px] rounded-full bg-[#27B8FF]/10 blur-[120px]" />

        <div className="pointer-events-none absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full bg-[#0845D4]/10 blur-[120px]" />

        <div className="container-page relative z-10">
          <div
            className="relative isolate overflow-hidden rounded-[2.5rem] px-8 py-14 text-center text-white shadow-[0_35px_90px_rgba(8,69,212,0.18)] md:px-16 md:py-20"
            style={{
              backgroundImage:
                "linear-gradient(rgba(7,27,82,.85), rgba(7,27,82,.85)), url('/images/fondo4.png')",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <div className="pointer-events-none absolute -left-32 top-0 h-72 w-72 rounded-full bg-[#27B8FF]/15 blur-[100px]" />

            <div className="pointer-events-none absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-[#0845D4]/35 blur-[110px]" />

            <div className="relative mx-auto max-w-4xl">
              <Sparkles className="mx-auto h-8 w-8 text-[#27B8FF]" />

              <h2 className="mt-6 font-display text-4xl font-black leading-tight md:text-6xl">
                {L.cta.title}
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/72">
                {L.cta.description}
              </p>

              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <a
                  href="https://calendar.app.google/gxTKawMH6Vqkky1s5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#27B8FF] to-[#0845D4] px-8 py-4 text-base font-bold text-white shadow-[0_18px_45px_rgba(8,69,212,.35)] transition hover:-translate-y-1"
                >
                  {L.cta.primary}

                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>

                <Link
                  to={r.solutions}
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-8 py-4 text-base font-bold text-white backdrop-blur-md transition hover:-translate-y-1 hover:bg-white/20"
                >
                  {L.cta.secondary}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/* ============ TECHNOLOGY ============ */

export function TechnologyPage({ lang }: { lang: Lang }) {
  const L = t(lang).technology;
  const r = routeMap[lang];

  return (
    <>
      {/* HERO */}
      <PageHero
        title={L.title}
        highlightedTitle={L.highlightedTitle}
        intro={L.intro}
        backgroundImage="/images/fondo4.png"
        backgroundPosition="center"
      />

      {/* PRODUCTOS */}
      <section className="overflow-hidden bg-white">
        {L.products.map((product, index) => {
          const reversed = index % 2 !== 0;

          return (
            <article
              key={product.name}
              className={`relative isolate overflow-hidden py-20 md:py-28 lg:py-32 ${index === 0
                ? "bg-[#F0F8FF]"
                : index === 1
                  ? "bg-white"
                  : index === 2
                    ? "bg-gradient-to-br from-[#EAF7FF] via-[#F7FBFF] to-white"
                    : "bg-[#F6FAFD]"
                }`}
            >
              {/* =========================================================
                  FONDOS DECORATIVOS SEGÚN EL PRODUCTO
              ========================================================= */}

              {/* OnTime: cuadrícula clínica */}
              {index === 0 && (
                <>
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 opacity-[0.38]"
                    style={{
                      backgroundImage:
                        "linear-gradient(rgba(8,69,212,0.055) 1px, transparent 1px), linear-gradient(90deg, rgba(8,69,212,0.055) 1px, transparent 1px)",
                      backgroundSize: "42px 42px",
                    }}
                  />

                  <div className="pointer-events-none absolute -right-52 top-16 h-[520px] w-[520px] rounded-full bg-[#27B8FF]/15 blur-[130px]" />

                  <div className="pointer-events-none absolute -left-56 bottom-0 h-[460px] w-[460px] rounded-full bg-[#0845D4]/10 blur-[130px]" />

                  <div className="pointer-events-none absolute right-0 top-0 h-32 w-[38%] bg-[#27B8FF]/[0.06] [clip-path:polygon(16%_0,100%_0,100%_100%,0_40%)]" />
                </>
              )}

              {/* Pharma: curva azul lateral */}
              {index === 1 && (
                <>
                  <div className="pointer-events-none absolute -left-[18%] top-1/2 h-[820px] w-[820px] -translate-y-1/2 rounded-full border-[120px] border-[#E7F4FF]" />

                  <div className="pointer-events-none absolute -right-52 bottom-0 h-[480px] w-[480px] rounded-full bg-[#0845D4]/[0.07] blur-[130px]" />

                  <div className="pointer-events-none absolute right-0 top-0 h-full w-[28%] bg-gradient-to-l from-[#F0F8FF] to-transparent" />
                </>
              )}

              {/* Community: puntos y halo celeste */}
              {index === 2 && (
                <>
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 opacity-[0.2]"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle, rgba(8,69,212,0.22) 1.2px, transparent 1.2px)",
                      backgroundSize: "28px 28px",
                    }}
                  />

                  <div className="pointer-events-none absolute left-1/2 top-1/2 h-[620px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/55 blur-[110px]" />

                  <div className="pointer-events-none absolute -left-48 top-0 h-[460px] w-[460px] rounded-full bg-[#27B8FF]/14 blur-[130px]" />

                  <div className="pointer-events-none absolute -right-48 bottom-0 h-[460px] w-[460px] rounded-full bg-[#0845D4]/10 blur-[130px]" />
                </>
              )}

              {/* Fertility: ondas azules */}
              {index === 3 && (
                <>
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-[#E8F5FF] to-transparent" />

                  <div className="pointer-events-none absolute -left-[8%] top-16 h-56 w-[58%] rounded-[50%] border-[38px] border-[#27B8FF]/[0.055] rotate-[-8deg]" />

                  <div className="pointer-events-none absolute -right-[12%] bottom-8 h-64 w-[64%] rounded-[50%] border-[46px] border-[#0845D4]/[0.05] rotate-[7deg]" />

                  <div className="pointer-events-none absolute left-1/3 top-1/2 h-[380px] w-[380px] -translate-y-1/2 rounded-full bg-[#27B8FF]/[0.08] blur-[120px]" />
                </>
              )}

              <div className="container-page relative z-10">
                {/* =========================================================
                    PRIMERA FILA
                    TEXTO + PANTALLA PRINCIPAL
                ========================================================= */}
                <div className="grid gap-14 lg:grid-cols-12 lg:items-center">
                  {/* Texto principal */}
                  <div
                    className={`lg:col-span-5 ${reversed ? "lg:order-2 lg:col-start-8" : ""
                      }`}
                  >
                    <div className="inline-flex items-center gap-3">
                      <span className="h-px w-9 bg-[#F7BA2B]" />

                      <p className="text-sm font-black uppercase tracking-[0.18em] text-[#0845D4]">
                        {product.name}
                      </p>
                    </div>

                    <h2 className="mt-5 max-w-xl font-display text-4xl font-black leading-[1.05] tracking-[-0.04em] text-[#071B52] md:text-5xl">
                      {product.title}
                    </h2>

                    <div className="mt-6 flex items-center gap-2">
                      <span className="h-1 w-16 rounded-full bg-[#F7BA2B]" />
                      <span className="h-1 w-9 rounded-full bg-[#0845D4]" />
                      <span className="h-1 w-4 rounded-full bg-[#27B8FF]" />
                    </div>

                    <p className="mt-7 max-w-xl text-base leading-8 text-[#536174]">
                      {product.description}
                    </p>

                    <p className="mt-4 max-w-xl text-base leading-8 text-[#66758A]">
                      {product.secondaryDescription}
                    </p>

                    <Link
                      to={r.contact}
                      className="group mt-8 inline-flex items-center gap-2 rounded-md bg-[#071B52] px-6 py-3 text-sm font-bold text-white shadow-[0_14px_35px_rgba(7,27,82,0.16)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#0845D4] hover:shadow-[0_18px_42px_rgba(8,69,212,0.22)]"
                    >
                      {product.button}

                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>

                  {/* Pantalla principal */}
                  <div
                    className={`lg:col-span-7 ${reversed ? "lg:order-1" : ""
                      }`}
                  >
                    <ProductScreen
                      image={product.images[0]}
                      productName={product.name}
                      rotation={reversed ? "-rotate-[1deg]" : "rotate-[1deg]"}
                      accent={index % 2 === 0 ? "blue" : "cyan"}
                    />
                  </div>
                </div>

                {/* Separador creativo */}
                <div className="relative mt-20 lg:mt-24">
                  <div className="h-px w-full bg-gradient-to-r from-transparent via-[#B8D4E8] to-transparent" />

                  <span className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rotate-45 border border-[#84BCE4] bg-white" />
                </div>

                {/* =========================================================
                    SEGUNDA FILA
                    PANTALLA SECUNDARIA + CAPACIDADES
                ========================================================= */}
                <div className="mt-16 grid gap-14 lg:grid-cols-12 lg:items-center lg:pt-4">
                  <div
                    className={`lg:col-span-7 ${reversed ? "lg:order-2" : ""
                      }`}
                  >
                    <ProductScreen
                      image={product.images[1]}
                      productName={product.name}
                      rotation={reversed ? "rotate-[1deg]" : "-rotate-[1deg]"}
                      accent={index % 2 === 0 ? "cyan" : "blue"}
                      compact
                    />
                  </div>

                  <div
                    className={`lg:col-span-5 ${reversed ? "lg:order-1" : ""
                      }`}
                  >
                    <div className="relative">
                      <span className="absolute -left-5 top-1 hidden h-full w-1 rounded-full bg-gradient-to-b from-[#F7BA2B] via-[#27B8FF] to-[#0845D4] lg:block" />

                      <h3 className="font-display text-3xl font-black leading-tight text-[#071B52] md:text-4xl">
                        {product.impactTitle}
                      </h3>

                      <p className="mt-5 text-base leading-8 text-[#66758A]">
                        {product.impactDescription}
                      </p>
                    </div>

                    <ul className="mt-8 grid gap-x-5 gap-y-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                      {product.features.map((feature, featureIndex) => (
                        <li
                          key={feature}
                          className="group flex items-start gap-3 rounded-xl border border-[#DCE8F1] bg-white/75 px-4 py-3 text-sm leading-6 text-[#536174] shadow-[0_8px_24px_rgba(7,27,82,0.035)] backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:border-[#27B8FF]/45 hover:bg-white"
                        >
                          <span
                            className={`mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full ${featureIndex % 2 === 0
                              ? "bg-[#0845D4]/10 text-[#0845D4]"
                              : "bg-[#27B8FF]/15 text-[#087AB8]"
                              }`}
                          >
                            <CheckCircle2 className="h-3.5 w-3.5" />
                          </span>

                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </section>

      {/* ===============================================================
          PRINCIPIOS TECNOLÓGICOS
      =============================================================== */}
      <section className="relative isolate overflow-hidden bg-[#071B52] py-20 text-white md:py-28">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,rgba(8,69,212,0.35),transparent_48%,rgba(39,184,255,0.10))]" />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.16]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)",
            backgroundSize: "34px 34px",
          }}
        />

        <div className="pointer-events-none absolute -left-40 top-0 h-[420px] w-[420px] rounded-full bg-[#0845D4]/30 blur-[140px]" />

        <div className="pointer-events-none absolute -right-40 bottom-0 h-[420px] w-[420px] rounded-full bg-[#27B8FF]/15 blur-[140px]" />

        <div className="container-page relative z-10">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <h2 className="max-w-xl font-display text-4xl font-black leading-tight tracking-[-0.035em] md:text-5xl">
                {L.principlesTitle}
              </h2>

              <div className="mt-6 flex gap-2">
                <span className="h-1 w-20 rounded-full bg-[#F7BA2B]" />
                <span className="h-1 w-10 rounded-full bg-[#27B8FF]" />
              </div>

              <p className="mt-6 max-w-lg text-base leading-8 text-white/65">
                {lang === "es"
                  ? "Cada producto comparte una arquitectura pensada para integrarse, proteger la información y crecer junto a las instituciones."
                  : "Every product shares an architecture designed to integrate, protect information and grow alongside healthcare institutions."}
              </p>
            </div>

            <div className="border-t border-white/20 lg:col-span-7">
              {L.principles.map((principle, index) => (
                <article
                  key={principle.title}
                  className="group relative grid gap-4 border-b border-white/20 py-7 md:grid-cols-[0.7fr_1.3fr] md:items-start"
                >
                  <span
                    className={`absolute bottom-0 left-0 h-px w-0 transition-all duration-500 group-hover:w-full ${index === 1 ? "bg-[#F7BA2B]" : "bg-[#27B8FF]"
                      }`}
                  />

                  <h3 className="font-display text-xl font-bold text-white">
                    {principle.title}
                  </h3>

                  <p className="text-sm leading-7 text-white/65">
                    {principle.desc}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===============================================================
          CTA
      =============================================================== */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white to-[#EFF8FF] py-20">
        <div className="pointer-events-none absolute -left-40 top-0 h-[400px] w-[400px] rounded-full bg-[#27B8FF]/10 blur-[120px]" />

        <div className="pointer-events-none absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full bg-[#0845D4]/10 blur-[120px]" />

        <div className="container-page relative z-10">
          <div className="relative isolate overflow-hidden rounded-[2.5rem] bg-[#071B52] px-8 py-14 text-center text-white shadow-[0_35px_90px_rgba(8,69,212,0.18)] md:px-16 md:py-20">
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(110deg,rgba(8,69,212,0.42),transparent_48%,rgba(39,184,255,0.18))]" />

            <div className="pointer-events-none absolute -left-32 top-0 h-72 w-72 rounded-full bg-[#27B8FF]/15 blur-[100px]" />

            <div className="pointer-events-none absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-[#0845D4]/35 blur-[110px]" />

            <div className="relative mx-auto max-w-4xl">
              <h2 className="font-display text-4xl font-bold leading-tight md:text-6xl">
                {lang === "es"
                  ? "Conoce cómo Kumpels puede integrarse a tu institución"
                  : "Discover how Kumpels can integrate with your institution"}
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/75">
                {lang === "es"
                  ? "Agenda una demostración y revisemos juntos los retos clínicos y operativos de tu organización."
                  : "Schedule a demonstration and let’s review your organization’s clinical and operational challenges together."}
              </p>

              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <a
                  href="https://calendar.app.google/gxTKawMH6Vqkky1s5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#27B8FF] to-[#0845D4] px-8 py-4 text-base font-bold text-white shadow-[0_18px_45px_rgba(8,69,212,.35)] transition hover:-translate-y-1"
                >
                  {lang === "es" ? "Solicitar demo" : "Book a demo"}

                  <ArrowRight className="h-5 w-5" />
                </a>

                <Link
                  to={r.contact}
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-8 py-4 text-base font-bold text-white backdrop-blur-md transition hover:-translate-y-1 hover:bg-white/20"
                >
                  {lang === "es" ? "Contáctanos" : "Contact us"}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

type ProductImage = {
  src: string;
  alt: string;
  caption: string;
};

function ProductScreen({
  image,
  productName,
  rotation,
  compact = false,
  accent = "blue",
}: {
  image: ProductImage;
  productName: string;
  rotation: string;
  compact?: boolean;
  accent?: "blue" | "cyan";
}) {
  const accentClasses =
    accent === "cyan"
      ? {
        glow: "bg-[#27B8FF]/20",
        border: "border-[#27B8FF]/25",
        dot: "bg-[#27B8FF]",
      }
      : {
        glow: "bg-[#0845D4]/16",
        border: "border-[#0845D4]/20",
        dot: "bg-[#0845D4]",
      };

  return (
    <figure
      className={`relative mx-auto ${compact ? "max-w-3xl" : "max-w-4xl"
        }`}
    >
      {/* Resplandor inferior */}
      <div
        className={`pointer-events-none absolute inset-x-[8%] bottom-[-4%] h-24 rounded-[50%] blur-3xl ${accentClasses.glow}`}
      />

      {/* Borde trasero desplazado */}
      <div
        className={`pointer-events-none absolute inset-0 translate-x-3 translate-y-3 border ${accentClasses.border}`}
      />

      {/* Pantalla */}
      <div
        className={`relative overflow-hidden border border-[#D7E2EC] bg-white shadow-[0_35px_90px_rgba(7,27,82,0.16)] transition duration-500 hover:rotate-0 hover:shadow-[0_42px_110px_rgba(7,27,82,0.22)] ${rotation}`}
      >
        {/* Barra simulada del navegador */}
        <div className="flex h-11 items-center gap-2 border-b border-[#DCE5EE] bg-gradient-to-r from-[#F8FAFC] to-[#EDF6FC] px-4">
          <span className="h-2.5 w-2.5 rounded-full bg-[#FF6B6B]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#F7BA2B]" />
          <span
            className={`h-2.5 w-2.5 rounded-full ${accentClasses.dot}`}
          />

          <div className="ml-3 flex min-w-0 flex-1 items-center rounded-md border border-[#DCE5EE] bg-white/70 px-3 py-1">
            <span className="truncate text-[10px] font-semibold uppercase tracking-[0.16em] text-[#66758A]">
              Kumpels · {productName}
            </span>
          </div>
        </div>

        {/* Imagen ajustada a su proporción real */}
        <div className="w-full overflow-hidden bg-white">
          <img
            src={image.src}
            alt={image.alt}
            className="block h-auto w-full"
            loading="lazy"
          />
        </div>
      </div>

      {/* Caption */}
      <figcaption className="mt-6 flex items-center gap-3 text-sm font-semibold text-[#536174]">
        <span
          className={`h-2 w-2 rounded-full ${accent === "cyan" ? "bg-[#27B8FF]" : "bg-[#0845D4]"
            }`}
        />

        <span
          className={`h-px w-9 ${accent === "cyan" ? "bg-[#27B8FF]" : "bg-[#0845D4]"
            }`}
        />

        {image.caption}
      </figcaption>
    </figure>
  );
}

/* ============ VALIDATION ============ */

export function ValidationPage({ lang }: { lang: Lang }) {
  const L = t(lang).validation;
  const r = routeMap[lang];

  return (
    <>
      {/* HERO */}
      <PageHero
        title={L.title}
        highlightedTitle={L.highlightedTitle}
        intro={L.intro}
        backgroundImage="/images/fondo4.png"
        backgroundPosition="center"
      />

      {/* RESUMEN */}
      <section className="relative overflow-hidden bg-white py-16 md:py-20">
        <div className="pointer-events-none absolute -left-40 top-0 h-[360px] w-[360px] rounded-full bg-[#27B8FF]/10 blur-[120px]" />

        <div className="container-page relative z-10">
          <div className="grid border-y border-[#D5E2EC] md:grid-cols-3">
            {L.heroStats.map((stat, index) => (
              <article
                key={stat.label}
                className={`relative px-6 py-8 text-center md:px-8 md:py-10 ${index < L.heroStats.length - 1
                  ? "border-b border-[#D5E2EC] md:border-b-0 md:border-r"
                  : ""
                  }`}
              >
                <p
                  className={`font-display text-4xl font-black md:text-5xl ${index === 1 ? "text-[#F0A800]" : "text-[#0845D4]"
                    }`}
                >
                  {stat.value}
                </p>

                <p className="mx-auto mt-3 max-w-xs text-sm font-semibold leading-6 text-[#536174]">
                  {stat.label}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* INTRODUCCIÓN */}
      <section className="bg-[#F3F8FC] py-20 md:py-24">
        <div className="container-page">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="font-display text-4xl font-black leading-tight tracking-[-0.035em] text-[#071B52] md:text-5xl">
              {L.validationTitle}
            </h2>

            <div className="mx-auto mt-6 flex w-fit gap-2">
              <span className="h-1 w-16 bg-[#F7BA2B]" />
              <span className="h-1 w-9 bg-[#0845D4]" />
            </div>

            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-[#66758A] md:text-lg">
              {L.validationIntro}
            </p>
          </div>
        </div>
      </section>

      {/* CASOS DE VALIDACIÓN */}
      <section className="overflow-hidden bg-white">
        {L.cases.map((caseStudy, caseIndex) => {
          const isCardio = caseStudy.id === "cardio";
          const reversed = caseIndex % 2 !== 0;

          return (
            <article
              key={caseStudy.id}
              className={`relative overflow-hidden py-20 md:py-28 ${isCardio
                ? "bg-white"
                : "bg-gradient-to-br from-[#EAF6FD] via-[#F7FBFE] to-white"
                }`}
            >
              {/* Fondos suaves */}
              <div
                className={`pointer-events-none absolute top-1/2 h-[520px] w-[520px] -translate-y-1/2 rounded-full blur-[145px] ${reversed
                  ? "-left-52 bg-[#0845D4]/[0.08]"
                  : "-right-52 bg-[#27B8FF]/[0.11]"
                  }`}
              />

              <div className="container-page relative z-10">
                {/* CABECERA DE INSTITUCIÓN */}
                <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
                  {/* Logo destacado */}
                  <div
                    className={`lg:col-span-5 ${reversed ? "lg:order-2 lg:col-start-8" : ""
                      }`}
                  >
                    <div className="relative flex min-h-[330px] items-center justify-center overflow-hidden border border-[#D6E3EC] bg-white p-10 shadow-[0_24px_70px_rgba(7,27,82,0.10)] md:min-h-[400px] md:p-14">
                      <div className="pointer-events-none absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-[#0845D4] via-[#27B8FF] to-[#F7BA2B]" />

                      <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#27B8FF]/10 blur-3xl" />

                      <img
                        src={caseStudy.logo}
                        alt={caseStudy.institution}
                        className="relative max-h-44 w-full max-w-[360px] object-contain"
                        loading="lazy"
                      />

                      <span
                        className={`absolute bottom-5 left-5 px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] ${caseStudy.statusType === "completed"
                          ? "bg-[#0845D4] text-white"
                          : "bg-[#F7BA2B] text-[#071B52]"
                          }`}
                      >
                        {caseStudy.status}
                      </span>
                    </div>
                  </div>

                  {/* Contenido */}
                  <div
                    className={`lg:col-span-7 ${reversed ? "lg:order-1" : ""
                      }`}
                  >
                    <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#0845D4]">
                      {caseStudy.shortName}
                    </p>

                    <h2 className="mt-4 max-w-4xl font-display text-4xl font-black leading-[1.05] tracking-[-0.04em] text-[#071B52] md:text-5xl">
                      {caseStudy.headline}
                    </h2>

                    <div className="mt-6 flex gap-2">
                      <span className="h-1 w-16 bg-[#F7BA2B]" />
                      <span className="h-1 w-10 bg-[#0845D4]" />
                    </div>

                    <p className="mt-7 max-w-3xl text-base leading-8 text-[#536174]">
                      {caseStudy.description}
                    </p>

                    <p className="mt-4 max-w-3xl text-base leading-8 text-[#66758A]">
                      {caseStudy.context}
                    </p>
                  </div>
                </div>

                {/* MÉTRICAS */}
                <div className="mt-16 grid gap-px overflow-hidden border border-[#CDDCE7] bg-[#CDDCE7] sm:grid-cols-2 lg:grid-cols-4">
                  {caseStudy.metrics.map((metric, metricIndex) => (
                    <article
                      key={`${caseStudy.id}-${metric.label}`}
                      className="relative min-h-[245px] bg-white p-6 md:p-7"
                    >
                      <span
                        className={`absolute left-0 top-0 h-1 w-full ${metricIndex % 2 === 0
                          ? "bg-[#0845D4]"
                          : "bg-[#F7BA2B]"
                          }`}
                      />

                      <p
                        className={`font-display text-3xl font-black leading-tight ${metricIndex % 2 === 0
                          ? "text-[#0845D4]"
                          : "text-[#E5A000]"
                          }`}
                      >
                        {metric.value}
                      </p>

                      <h3 className="mt-4 text-base font-bold leading-6 text-[#16213D]">
                        {metric.label}
                      </h3>

                      <p className="mt-3 text-sm leading-6 text-[#66758A]">
                        {metric.note}
                      </p>
                    </article>
                  ))}
                </div>

                {/* TRABAJO + RESULTADO */}
                <div className="mt-16 grid gap-10 lg:grid-cols-12">
                  <div className="lg:col-span-7">
                    <div className="border-t-2 border-[#071B52]">
                      {caseStudy.workstreams.map((item, itemIndex) => (
                        <div
                          key={item}
                          className="grid grid-cols-[48px_1fr] items-center border-b border-[#D5E1EA] py-5"
                        >
                          <span
                            className={`font-display text-sm font-black ${itemIndex % 2 === 0
                              ? "text-[#0845D4]"
                              : "text-[#E5A000]"
                              }`}
                          >
                            {String(itemIndex + 1).padStart(2, "0")}
                          </span>

                          <p className="text-sm font-semibold leading-6 text-[#536174]">
                            {item}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="lg:col-span-5">
                    <div className="relative h-full overflow-hidden bg-[#071B52] p-8 text-white md:p-10">
                      <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#27B8FF]/20 blur-3xl" />

                      <div className="relative">
                        <h3 className="font-display text-3xl font-black leading-tight">
                          {caseStudy.resultTitle}
                        </h3>

                        <div className="mt-5 h-1 w-20 bg-[#F7BA2B]" />

                        <p className="mt-6 text-base leading-8 text-white/70">
                          {caseStudy.resultDescription}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </section>

      {/* METODOLOGÍA */}
      <section className="relative overflow-hidden bg-[#071B52] py-20 text-white md:py-28">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.13]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.45) 1px, transparent 1px)",
            backgroundSize: "34px 34px",
          }}
        />

        <div className="container-page relative z-10">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <h2 className="font-display text-4xl font-black leading-tight tracking-[-0.035em] md:text-5xl">
                {L.methodology.title}
              </h2>

              <div className="mt-6 flex gap-2">
                <span className="h-1 w-16 bg-[#F7BA2B]" />
                <span className="h-1 w-9 bg-[#27B8FF]" />
              </div>

              <p className="mt-6 text-base leading-8 text-white/65">
                {L.methodology.intro}
              </p>
            </div>

            <div className="border-t border-white/20 lg:col-span-8">
              {L.methodology.steps.map((step, index) => (
                <article
                  key={step.title}
                  className="grid gap-5 border-b border-white/20 py-7 md:grid-cols-[70px_0.7fr_1.3fr] md:items-center"
                >
                  <span className="font-display text-sm font-black text-[#27B8FF]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3 className="font-display text-xl font-bold text-white">
                    {step.title}
                  </h3>

                  <p className="text-sm leading-7 text-white/62">
                    {step.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* NOTA DE TRANSPARENCIA */}
      <section className="bg-[#FFF8E6] py-8">
        <div className="container-page">
          <div className="flex items-start gap-4 border-l-4 border-[#F7BA2B] pl-5">
            <Info className="mt-0.5 h-5 w-5 shrink-0 text-[#C98700]" />

            <p className="text-sm leading-7 text-[#6B5A34]">
              {L.disclaimer}
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white to-[#EFF8FF] py-20">
        <div className="container-page">
          <div
            className="relative overflow-hidden rounded-[2.5rem] px-8 py-14 text-center text-white shadow-[0_35px_90px_rgba(8,69,212,0.18)] md:px-16 md:py-20"
            style={{
              backgroundImage:
                "linear-gradient(rgba(7,27,82,.85), rgba(7,27,82,.85)), url('/images/fondo4.png')",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <div className="relative mx-auto max-w-4xl">
              <h2 className="font-display text-4xl font-black leading-tight md:text-6xl">
                {L.cta.title}
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/72">
                {L.cta.description}
              </p>

              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <a
                  href="https://calendar.app.google/gxTKawMH6Vqkky1s5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#27B8FF] to-[#0845D4] px-8 py-4 text-base font-bold text-white shadow-[0_18px_45px_rgba(8,69,212,.35)] transition hover:-translate-y-1"
                >
                  {L.cta.primary}

                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>

                <Link
                  to={r.solutions}
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-8 py-4 text-base font-bold text-white backdrop-blur-md transition hover:-translate-y-1 hover:bg-white/20"
                >
                  {L.cta.secondary}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
/* ============ INVESTORS ============ */

export function InvestorsPage({ lang }: { lang: Lang }) {
  const L = t(lang).investors;

  const problemIcons = [Globe2, ShieldCheck, BarChart3];

  const pressItems = [
    {
      title:
        lang === "es"
          ? "Innovación colombiana en salud"
          : "Colombian healthcare innovation",
      source: "Kumpels",
      image: "/images/investors/prensa-01.png",
      href: "#",
      size: "tall",
    },
    {
      title:
        lang === "es"
          ? "Reconocimiento internacional"
          : "International recognition",
      source: "Innovation ecosystem",
      image: "/images/investors/prensa-02.png",
      href: "#",
      size: "standard",
    },
    {
      title:
        lang === "es"
          ? "Tecnología para transformar la seguridad del medicamento"
          : "Technology transforming medication safety",
      source: "Healthtech",
      image: "/images/investors/prensa-03.png",
      href: "#",
      size: "wide",
    },
    {
      title:
        lang === "es"
          ? "Una solución construida desde Latinoamérica"
          : "A solution built in Latin America",
      source: "Startup ecosystem",
      image: "/images/investors/prensa-04.png",
      href: "#",
      size: "standard",
    },
    {
      title:
        lang === "es"
          ? "Innovación clínica con impacto"
          : "Clinical innovation with impact",
      source: "Kumpels",
      image: "/images/investors/prensa-05.png",
      href: "#",
      size: "wide",
    },
    {
      title:
        lang === "es"
          ? "Emprendimiento y transformación digital"
          : "Entrepreneurship and digital transformation",
      source: "Innovation program",
      image: "/images/investors/prensa-06.png",
      href: "#",
      size: "tall",
    },
  ];

  return (
    <>
      {/* HERO */}
      <PageHero
        title={L.title}
        highlightedTitle={L.highlightedTitle}
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
                    <span className="grid h-12 w-12 shrink-0 place-items-center bg-[#071B52] text-white transition duration-300 group-hover:bg-[#0845D4]">
                    </span>

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
              {lang === "es"
                ? "Porque cuando el propósito es claro, los resultados se ven."
                : "When purpose is clear, the results become visible."}
            </h2>

            <p className="mt-2 text-base text-[#3F4C5E]">
              {lang === "es"
                ? "Explora nuestras apariciones, reconocimientos y participación en el ecosistema de innovación."
                : "Explore our media appearances, recognition and participation in the innovation ecosystem."}
            </p>
          </div>

          <div className="mt-12 grid auto-rows-[80px] grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {pressItems.map((item, index) => {
              const spans =
                item.size === "tall"
                  ? "row-span-5"
                  : "row-span-4";

              return (
                <a
                  key={`${item.title}-${index}`}
                  href={item.href}
                  target={item.href === "#" ? undefined : "_blank"}
                  rel={
                    item.href === "#"
                      ? undefined
                      : "noopener noreferrer"
                  }
                  className={`${spans} group relative block overflow-hidden bg-white shadow-[0_15px_35px_rgba(7,27,82,0.13)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_55px_rgba(7,27,82,0.18)]`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.025]"
                    loading="lazy"
                  />

                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#071B52]/95 via-[#071B52]/70 to-transparent px-5 pb-5 pt-20 text-white">
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#8EEBFF]">
                      {item.source}
                    </p>

                    <h3 className="mt-2 font-display text-base font-bold leading-snug">
                      {item.title}
                    </h3>

                    {item.href !== "#" && (
                      <ExternalLink className="absolute bottom-5 right-5 h-4 w-4 text-white/70" />
                    )}
                  </div>
                </a>
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
                    {lang === "es"
                      ? "Una oportunidad para escalar impacto clínico, tecnológico y financiero."
                      : "An opportunity to scale clinical, technological and financial impact."}
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
/* ============ TEAM ============ */
export function TeamPage({ lang }: { lang: Lang }) {
  const L = t(lang).team;
  const grouped = team.reduce<Record<string, typeof team>>((acc, m) => {
    (acc[m.area] ||= []).push(m);
    return acc;
  }, {});
  const areaOrder = ["Founders", "Clinical", "Product", "Business", "Advisors"] as const;
  return (
    <>
      <PageHero eyebrow={t(lang).nav.team} title={L.title} intro={L.intro} />
      <section className="container-page section-y">
        {areaOrder.map((area) => {
          const members = grouped[area];
          if (!members?.length) return null;
          return (
            <div key={area} className="mb-12">
              <h2 className="font-display text-xl font-bold">
                {L.areas[area as keyof typeof L.areas]}
              </h2>
              <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {members.map((m) => (
                  <article key={m.name} className="rounded-2xl border border-border bg-white p-5 shadow-soft">
                    <div
                      aria-hidden
                      className="grid h-14 w-14 place-items-center rounded-2xl bg-bg-light text-lg font-bold text-primary"
                    >
                      {m.name.replace(/[\[\]]/g, "").slice(0, 2).toUpperCase()}
                    </div>
                    <h3 className="mt-3 font-display text-base font-semibold">{m.name}</h3>
                    <p className="text-xs text-text-muted">{m.role}</p>
                    {m.linkedin && (
                      <a
                        href={m.linkedin}
                        className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline"
                      >
                        <Linkedin className="h-3.5 w-3.5" /> LinkedIn
                      </a>
                    )}
                  </article>
                ))}
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
}

/* ============ CONTACT ============ */
export function ContactPage({ lang }: { lang: Lang }) {
  const content =
    lang === "es"
      ? {
        heroTitle: "Construyamos juntos",
        heroHighlightedTitle: "flujos de atención más seguros",
        heroIntro:
          "Conversemos sobre los retos de tu institución y cómo Kumpels puede ayudar a mejorar la seguridad, la trazabilidad y la eficiencia clínica.",

        cardTitle: "Conversemos sobre tus retos",
        cardDescription:
          "Cuéntanos cómo funciona actualmente tu operación y qué desafíos enfrenta tu equipo. Te ayudaremos a identificar oportunidades para mejorar la seguridad, la trazabilidad y la eficiencia.",

        responseTitle: "Respuesta personalizada",
        responseDescription:
          "Nuestro equipo revisará tu solicitud y te responderá en menos de 24 horas hábiles.",

        demoTitle: "Agenda una demostración",
        demoDescription:
          "Conoce cómo Kumpels puede integrarse a los flujos clínicos y operativos de tu institución.",

        securityTitle: "Conversación sin compromiso",
        securityDescription:
          "Esta primera conversación está orientada a comprender tus necesidades.",

        formTitle: "Cuéntanos cómo podemos ayudarte",
        formDescription:
          "Completa tus datos y uno de nuestros especialistas se pondrá en contacto contigo.",

        writeButton: "Escríbenos",
        demoButton: "Agendar demostración",
        emailLabel: "Correo electrónico",
        locationLabel: "Ubicación",
      }
      : {
        heroTitle: "Let’s build together",
        heroHighlightedTitle: "safer healthcare workflows",
        heroIntro:
          "Let’s discuss your institution’s challenges and how Kumpels can improve safety, traceability and clinical efficiency.",

        cardTitle: "Tell us about your challenges",
        cardDescription:
          "Share how your operation currently works and the challenges your team faces. We will help you identify opportunities to improve safety, traceability and efficiency.",

        responseTitle: "Personalized response",
        responseDescription:
          "Our team will review your request and respond within 24 business hours.",

        demoTitle: "Schedule a demonstration",
        demoDescription:
          "Discover how Kumpels can integrate with your institution’s clinical and operational workflows.",

        securityTitle: "No-obligation conversation",
        securityDescription:
          "This first conversation is focused on understanding your needs.",

        formTitle: "Tell us how we can help",
        formDescription:
          "Complete your information and one of our specialists will contact you.",

        writeButton: "Contact us",
        demoButton: "Schedule a demo",
        emailLabel: "Email",
        locationLabel: "Location",
      };

  const benefits = [
    {
      icon: Clock3,
      title: content.responseTitle,
      description: content.responseDescription,
    },
    {
      icon: Calendar,
      title: content.demoTitle,
      description: content.demoDescription,
    },
    {
      icon: ShieldCheck,
      title: content.securityTitle,
      description: content.securityDescription,
    },
  ];

  return (
    <>
      <PageHero
        title={content.heroTitle}
        highlightedTitle={content.heroHighlightedTitle}
        intro={content.heroIntro}
        backgroundImage="/images/fondo4.png"
        backgroundPosition="center"
      />

      <section className="relative overflow-hidden bg-[#F4F8FC] py-16 md:py-24">
        {/* Fondos decorativos */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-40 top-10 h-[420px] w-[420px] rounded-full bg-[#27B8FF]/10 blur-[120px]"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-44 bottom-0 h-[460px] w-[460px] rounded-full bg-[#0845D4]/10 blur-[130px]"
        />

        <div className="container-page relative z-10">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-stretch">
            {/* Información */}
            <div className="lg:col-span-5">
              <div className="relative h-full overflow-hidden rounded-[2rem] bg-[#071B52] p-7 text-white shadow-[0_30px_80px_rgba(7,27,82,0.20)] sm:p-9 lg:p-10">
                {/* Decoración */}
                <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#27B8FF]/20 blur-3xl" />

                <div className="pointer-events-none absolute -bottom-28 -left-20 h-72 w-72 rounded-full bg-[#0845D4]/30 blur-3xl" />

                <div className="relative flex h-full flex-col">
                  <div>
                    <h2 className="mt-6 font-display text-3xl font-bold leading-tight sm:text-4xl">
                      {content.cardTitle}
                    </h2>

                    <p className="mt-5 text-base leading-7 text-white/72">
                      {content.cardDescription}
                    </p>
                  </div>

                  {/* Beneficios */}
                  <div className="mt-8 space-y-4">
                    {benefits.map((benefit) => {
                      const Icon = benefit.icon;

                      return (
                        <div
                          key={benefit.title}
                          className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.055] p-4 backdrop-blur-sm"
                        >
                          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#0845D4] text-white shadow-[0_10px_25px_rgba(8,69,212,0.28)]">
                            <Icon className="h-5 w-5" />
                          </span>

                          <div>
                            <h3 className="text-sm font-bold text-white">
                              {benefit.title}
                            </h3>

                            <p className="mt-1 text-sm leading-6 text-white/62">
                              {benefit.description}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Botones */}
                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">

                    <a
                      href={social.calendly}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={
                        lang === "es"
                          ? "Agendar una demostración de Kumpels"
                          : "Schedule a Kumpels demonstration"
                      }
                      className="
    group inline-flex items-center justify-center gap-2
    rounded-full border border-white/25 bg-white/10
    px-6 py-3.5 text-sm font-bold text-white
    backdrop-blur-sm transition duration-300
    hover:-translate-y-0.5
    hover:border-[#27B8FF]/60
    hover:bg-white/15
    hover:shadow-[0_16px_36px_rgba(39,184,255,0.16)]
    focus:outline-none
    focus-visible:ring-2
    focus-visible:ring-[#27B8FF]
    focus-visible:ring-offset-2
    focus-visible:ring-offset-[#071B52]
  "
                    >
                      <Calendar className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />

                      {content.demoButton}

                      <ArrowUpRight className="h-4 w-4 opacity-65 transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />
                    </a>
                  </div>

                  {/* Datos directos */}
                  <div className="mt-auto border-t border-white/10 pt-8">
                    <p className="font-display text-base font-bold text-white">
                      {company.legalName}
                    </p>

                    <div className="mt-4 grid gap-3">
                      <a
                        href={`mailto:${company.email}`}
                        className="group flex items-center gap-3 text-sm text-white/65 transition hover:text-[#27B8FF]"
                      >
                        <span className="grid h-9 w-9 place-items-center rounded-lg bg-white/10 text-[#27B8FF]">
                          <Mail className="h-4 w-4" />
                        </span>

                        <div>
                          <span className="block text-xs text-white/40">
                            {content.emailLabel}
                          </span>

                          <span className="font-semibold">
                            {company.email}
                          </span>
                        </div>
                      </a>

                      <div className="flex items-center gap-3 text-sm text-white/65">
                        <span className="grid h-9 w-9 place-items-center rounded-lg bg-white/10 text-[#27B8FF]">
                          <MapPin className="h-4 w-4" />
                        </span>

                        <div>
                          <span className="block text-xs text-white/40">
                            {content.locationLabel}
                          </span>

                          <span className="font-semibold">{company.city}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Formulario */}
            <div id="contact-form" className="scroll-mt-28 lg:col-span-7">
              <div className="h-full rounded-[2rem] border border-[#DCE5EE] bg-white p-6 shadow-[0_24px_70px_rgba(7,27,82,0.09)] sm:p-8 lg:p-10">
                <div className="mb-8 border-b border-[#E6EDF4] pb-7">

                  <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-[#16213D] sm:text-4xl">
                    {content.formTitle}
                  </h2>

                  <p className="mt-3 max-w-2xl text-sm leading-6 text-[#66758A] sm:text-base">
                    {content.formDescription}
                  </p>
                </div>

                <ContactForm lang={lang} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <SocialStrip lang={lang} compact />
    </>
  );
}

/* ============ BLOG ============ */


export function BlogPage({ lang }: { lang: Lang }) {
  const B = t(lang).blog;

  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-[#071B52] py-20 text-white md:py-28">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.55) 1px, transparent 1px)",
            backgroundSize: "34px 34px",
          }}
        />

        <div className="pointer-events-none absolute -left-40 top-0 h-[420px] w-[420px] rounded-full bg-[#0845D4]/35 blur-[140px]" />

        <div className="pointer-events-none absolute -right-40 bottom-0 h-[420px] w-[420px] rounded-full bg-[#27B8FF]/15 blur-[140px]" />

        <div className="pointer-events-none absolute bottom-0 right-0 h-20 w-[36%] bg-[#F7BA2B] [clip-path:polygon(25%_100%,100%_5%,100%_100%)]" />

        <div className="container-page relative z-10">
          <div className="max-w-5xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#27B8FF]">
              {B.heroLabel}
            </p>

            <h1 className="mt-5 font-display text-5xl font-black leading-[0.95] tracking-[-0.05em] md:text-7xl lg:text-[88px]">
              {B.title}
            </h1>

            <div className="mt-7 flex items-center gap-2">
              <span className="h-1 w-20 bg-[#F7BA2B]" />
              <span className="h-1 w-10 bg-[#27B8FF]" />
            </div>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-white/72 md:text-xl">
              {B.intro}
            </p>
          </div>
        </div>
      </section>

      {/* CINCO NEWSLETTERS DE LINKEDIN */}
      <LinkedInNewsletterArchive lang={lang} />

      {/* SUSCRIPCIÓN AL NEWSLETTER */}
      <section
        id="newsletter"
        className="relative scroll-mt-24 overflow-hidden bg-[#EAF5FC] py-20 md:py-24"
      >
        <div className="pointer-events-none absolute -left-40 top-0 h-[380px] w-[380px] rounded-full bg-[#27B8FF]/12 blur-[120px]" />

        <div className="pointer-events-none absolute -right-40 bottom-0 h-[380px] w-[380px] rounded-full bg-[#0845D4]/10 blur-[120px]" />

        <div className="container-page relative z-10">
          <div className="grid overflow-hidden border border-[#C9DDEB] bg-white shadow-[0_25px_70px_rgba(7,27,82,0.10)] lg:grid-cols-12">

            <div className="p-8 md:p-12 lg:col-span-7 lg:p-14">
              <h2 className="max-w-3xl font-display text-4xl font-black leading-tight tracking-[-0.035em] text-[#071B52] md:text-5xl">
                {B.newsletter.title}
              </h2>

              <div className="mt-5 flex gap-2">
                <span className="h-1 w-16 bg-[#F7BA2B]" />
                <span className="h-1 w-9 bg-[#0845D4]" />
              </div>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[#66758A]">
                {B.newsletter.description}
              </p>
            </div>

            <div className="flex items-center bg-[#071B52] p-8 lg:col-span-5 lg:p-10">
              <NewsletterForm lang={lang} />
            </div>

          </div>
        </div>
      </section>
    </>
  );
}


/* ============ BLOG POST ============ */

export function BlogPostPage({
  lang,
  slug,
}: {
  lang: Lang;
  slug: string;
}) {
  const B = t(lang).blog;
  const r = routeMap[lang];

  const post = articles.find((article) => article.slug === slug);

  if (!post) {
    return (
      <>
        <PageHero
          title={
            lang === "es"
              ? "Artículo no encontrado"
              : "Article not found"
          }
          intro={B.empty}
        />

        <section className="container-page py-16 text-center">
          <Link
            to={r.blog}
            className="inline-flex items-center gap-2 font-bold text-[#0845D4] transition hover:text-[#27B8FF]"
          >
            <ArrowLeft className="h-4 w-4" />
            {B.backToBlog}
          </Link>
        </section>
      </>
    );
  }

  const title =
    lang === "es" ? post.title_es : post.title_en;

  const excerpt =
    lang === "es" ? post.excerpt_es : post.excerpt_en;

  const category =
    lang === "es" ? post.category_es : post.category_en;

  const paragraphs =
    lang === "es" ? post.content_es : post.content_en;

  const formattedDate = formatBlogDate(post.date, lang);

  return (
    <>
      {/* CABECERA DEL ARTÍCULO */}
      <header className="relative overflow-hidden bg-[#F2F8FC] pt-16 md:pt-24">
        <div className="pointer-events-none absolute -right-40 top-0 h-[400px] w-[400px] rounded-full bg-[#27B8FF]/10 blur-[130px]" />

        <div className="container-page relative z-10">
          <Link
            to={r.blog}
            className="inline-flex items-center gap-2 text-sm font-bold text-[#0845D4] transition hover:text-[#27B8FF]"
          >
            <ArrowLeft className="h-4 w-4" />
            {B.backToBlog}
          </Link>

          <div className="mt-10 max-w-5xl">
            {/* Categoría */}
            <div className="flex flex-wrap items-center gap-3 text-xs font-bold uppercase tracking-[0.16em]">
              <span className="text-[#0845D4]">{category}</span>

              {post.featured && (
                <span className="bg-[#F7BA2B] px-3 py-1 text-[#071B52]">
                  {B.featured}
                </span>
              )}
            </div>

            <h1 className="mt-6 max-w-5xl font-display text-4xl font-black leading-[1.03] tracking-[-0.045em] text-[#071B52] md:text-6xl lg:text-7xl">
              {title}
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-[#536174] md:text-xl">
              {excerpt}
            </p>

            {/* Metadatos */}
            <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-3 border-t border-[#C9D8E5] py-6 text-sm text-[#66758A]">
              <span className="inline-flex items-center gap-2">
                <UserRound className="h-4 w-4 text-[#0845D4]" />
                {post.author}
              </span>

              <span className="inline-flex items-center gap-2">
                <CalendarDays className="h-4 w-4 text-[#0845D4]" />
                {formattedDate}
              </span>

              <span className="inline-flex items-center gap-2">
                <Clock3 className="h-4 w-4 text-[#0845D4]" />
                {post.readTime} {B.minRead}
              </span>
            </div>
          </div>

          {/* Imagen principal */}
          <div className="relative mt-6 aspect-[16/8] overflow-hidden bg-[#DCEAF4] md:aspect-[16/7]">
            <img
              src={post.image}
              alt={title}
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#071B52]/20 to-transparent" />
          </div>
        </div>
      </header>

      {/* CONTENIDO */}
      <main className="relative overflow-hidden bg-white py-16 md:py-24">
        <div className="pointer-events-none absolute -left-40 top-32 h-[360px] w-[360px] rounded-full bg-[#0845D4]/[0.045] blur-[120px]" />

        <div className="container-page relative z-10">
          <article className="mx-auto max-w-3xl">
            {paragraphs.map((paragraph, index) => (
              <p
                key={`${post.slug}-${index}`}
                className={`text-[17px] leading-8 text-[#3F4C5E] md:text-lg md:leading-9 ${index === 0
                  ? "first-letter:float-left first-letter:mr-3 first-letter:mt-2 first-letter:font-display first-letter:text-6xl first-letter:font-black first-letter:leading-[0.75] first-letter:text-[#0845D4]"
                  : "mt-7"
                  }`}
              >
                {paragraph}
              </p>
            ))}

            {/* Autor */}
            <div className="mt-14 border-y border-[#DCE5EE] py-7">
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#0845D4]">
                {B.writtenBy}
              </p>

              <p className="mt-2 font-display text-xl font-bold text-[#16213D]">
                {post.author}
              </p>
            </div>
          </article>
        </div>
      </main>

      {/* CTA DEL ARTÍCULO */}
      <section className="relative overflow-hidden bg-[#071B52] py-20 text-white">
        <div className="pointer-events-none absolute -right-40 bottom-0 h-[380px] w-[380px] rounded-full bg-[#27B8FF]/15 blur-[130px]" />

        <div className="container-page relative z-10">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-8">
              <h2 className="font-display text-4xl font-black leading-tight md:text-5xl">
                {B.postCta.title}
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-8 text-white/65">
                {B.postCta.description}
              </p>
            </div>

            <div className="flex flex-col gap-3 lg:col-span-4">
              <a
                href="https://calendar.app.google/gxTKawMH6Vqkky1s5"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between bg-white px-6 py-4 font-bold text-[#071B52] transition hover:bg-[#EAF6FF]"
              >
                <span>{B.postCta.primary}</span>

                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>

              <Link
                to={r.contact}
                className="flex items-center justify-between border border-white/30 px-6 py-4 font-bold text-white transition hover:bg-white/10"
              >
                <span>{B.postCta.secondary}</span>
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/* ===============================================================
   COMPONENTES AUXILIARES DEL BLOG
================================================================ */

type BlogArticleType = (typeof articles)[number];

function BlogSectionHeader({ title }: { title: string }) {
  return (
    <div className="flex items-end justify-between gap-6 border-b-2 border-[#071B52] pb-5">
      <h2 className="font-display text-3xl font-black leading-tight text-[#071B52] md:text-4xl">
        {title}
      </h2>

      <div className="hidden items-center gap-2 sm:flex">
        <span className="h-1 w-12 bg-[#F7BA2B]" />
        <span className="h-1 w-7 bg-[#0845D4]" />
      </div>
    </div>
  );
}

function FeaturedArticleCard({
  article,
  lang,
  blogRoute,
  readMore,
  featuredLabel,
  minRead,
  large,
}: {
  article: BlogArticleType;
  lang: Lang;
  blogRoute: string;
  readMore: string;
  featuredLabel: string;
  minRead: string;
  large: boolean;
}) {
  const title =
    lang === "es" ? article.title_es : article.title_en;

  const excerpt =
    lang === "es" ? article.excerpt_es : article.excerpt_en;

  const category =
    lang === "es" ? article.category_es : article.category_en;

  const date = formatBlogDate(article.date, lang);

  return (
    <article
      className={`group overflow-hidden bg-white shadow-[0_20px_60px_rgba(7,27,82,0.10)] ${large ? "lg:row-span-2" : ""
        }`}
    >
      <Link
        to={`${blogRoute}/$slug` as "/es/blog/$slug"}
        params={{ slug: article.slug }}
        className="block"
      >
        <div
          className={`relative overflow-hidden bg-[#DCEAF4] ${large ? "aspect-[16/10]" : "aspect-[16/9]"
            }`}
        >
          <img
            src={article.image}
            alt={title}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.035]"
            loading="lazy"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#071B52]/45 via-transparent to-transparent" />

          <span className="absolute left-5 top-5 bg-[#F7BA2B] px-3 py-1.5 text-xs font-black uppercase tracking-[0.12em] text-[#071B52]">
            {featuredLabel}
          </span>
        </div>
      </Link>

      <div className="p-6 md:p-8">
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-semibold text-[#66758A]">
          <span className="font-bold uppercase tracking-[0.12em] text-[#0845D4]">
            {category}
          </span>

          <span>{date}</span>

          <span>
            {article.readTime} {minRead}
          </span>
        </div>

        <h3 className="mt-5 font-display text-2xl font-black leading-tight text-[#16213D] md:text-3xl">
          {title}
        </h3>

        <p className="mt-4 text-sm leading-7 text-[#66758A]">
          {excerpt}
        </p>

        <Link
          to={`${blogRoute}/$slug` as "/es/blog/$slug"}
          params={{ slug: article.slug }}
          className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#0845D4] transition hover:text-[#27B8FF]"
        >
          {readMore}

          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  );
}

function ArticleRow({
  article,
  lang,
  blogRoute,
  readMore,
  featuredLabel,
  minRead,
}: {
  article: BlogArticleType;
  lang: Lang;
  blogRoute: string;
  readMore: string;
  featuredLabel: string;
  minRead: string;
}) {
  const title =
    lang === "es" ? article.title_es : article.title_en;

  const excerpt =
    lang === "es" ? article.excerpt_es : article.excerpt_en;

  const category =
    lang === "es" ? article.category_es : article.category_en;

  const date = formatBlogDate(article.date, lang);

  return (
    <article className="group grid gap-6 border-b border-[#DCE5EE] py-8 md:grid-cols-[230px_1fr_auto] md:items-center">
      {/* Imagen */}
      <Link
        to={`${blogRoute}/$slug` as "/es/blog/$slug"}
        params={{ slug: article.slug }}
        className="relative block aspect-[16/10] overflow-hidden bg-[#DCEAF4]"
      >
        <img
          src={article.image}
          alt={title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
          loading="lazy"
        />

        {article.featured && (
          <span className="absolute left-3 top-3 bg-[#F7BA2B] px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.12em] text-[#071B52]">
            {featuredLabel}
          </span>
        )}
      </Link>

      {/* Contenido */}
      <div>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-[#66758A]">
          <span className="font-bold uppercase tracking-[0.12em] text-[#0845D4]">
            {category}
          </span>

          <span>{date}</span>

          <span>
            {article.readTime} {minRead}
          </span>
        </div>

        <h3 className="mt-3 max-w-3xl font-display text-2xl font-black leading-tight text-[#16213D]">
          {title}
        </h3>

        <p className="mt-3 max-w-3xl text-sm leading-7 text-[#66758A]">
          {excerpt}
        </p>

        <p className="mt-3 text-xs font-semibold text-[#536174]">
          {article.author}
        </p>
      </div>

      {/* Botón */}
      <Link
        to={`${blogRoute}/$slug` as "/es/blog/$slug"}
        params={{ slug: article.slug }}
        aria-label={`${readMore}: ${title}`}
        className="grid h-12 w-12 place-items-center border border-[#CAD6E2] text-[#0845D4] transition hover:border-[#0845D4] hover:bg-[#0845D4] hover:text-white"
      >
        <ArrowRight className="h-5 w-5" />
      </Link>
    </article>
  );
}

/* ===============================================================
   NEWSLETTER
================================================================ */

function NewsletterForm({ lang }: { lang: Lang }) {
  const B = t(lang).blog;

  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  async function handleNewsletterSubmit(
    event: React.FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();

    if (!email.trim()) {
      setStatus("error");
      return;
    }

    setStatus("sending");

    try {
      /*
       * El formulario todavía no se conecta a una lista de newsletter.
       *
       * Cuando tengas EmailJS, Brevo, HubSpot o Mailchimp configurado,
       * reemplaza este bloque por la llamada real.
       */

      const subject =
        lang === "es"
          ? "Suscripción al newsletter de Kumpels"
          : "Kumpels newsletter subscription";

      window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(
        subject,
      )}&body=${encodeURIComponent(`Email: ${email}`)}`;

      setStatus("success");
      setEmail("");
    } catch (error) {
      console.error("[newsletter]", error);
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="w-full border border-white/20 bg-white/10 p-6 text-center">
        <CheckCircle2 className="mx-auto h-8 w-8 text-[#27B8FF]" />

        <p className="mt-4 text-sm font-semibold leading-6 text-white">
          {B.newsletter.success}
        </p>

        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-5 text-xs font-bold uppercase tracking-[0.12em] text-[#27B8FF]"
        >
          {lang === "es"
            ? "Registrar otro correo"
            : "Add another email"}
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleNewsletterSubmit}
      className="w-full"
    >
      <label
        htmlFor="newsletter-email"
        className="text-sm font-bold text-white"
      >
        {B.newsletter.placeholder}
      </label>

      <div className="mt-3 flex flex-col gap-3 xl:flex-row">
        <input
          id="newsletter-email"
          name="newsletter-email"
          type="email"
          required
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);

            if (status === "error") {
              setStatus("idle");
            }
          }}
          placeholder={B.newsletter.placeholder}
          className="min-h-12 min-w-0 flex-1 border border-white/25 bg-white/10 px-4 text-sm text-white outline-none placeholder:text-white/45 focus:border-[#27B8FF] focus:bg-white/15"
        />

        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex min-h-12 items-center justify-center gap-2 bg-white px-6 text-sm font-bold text-[#071B52] transition hover:bg-[#EAF6FF] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "sending"
            ? lang === "es"
              ? "Enviando..."
              : "Sending..."
            : B.newsletter.button}

          {status !== "sending" && (
            <ArrowRight className="h-4 w-4" />
          )}
        </button>
      </div>

      {status === "error" && (
        <p className="mt-3 text-xs font-medium text-[#FFD4D4]">
          {B.newsletter.error}
        </p>
      )}

      <p className="mt-3 text-xs leading-5 text-white/50">
        {lang === "es"
          ? "Al suscribirte aceptas recibir comunicaciones de Kumpels."
          : "By subscribing, you agree to receive communications from Kumpels."}
      </p>
    </form>
  );
}

/* ===============================================================
   UTILIDAD DE FECHA
================================================================ */

function formatBlogDate(date: string, lang: Lang) {
  return new Date(`${date}T12:00:00`).toLocaleDateString(
    lang === "es" ? "es-CO" : "en-US",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    },
  );
}

/* ============ FINAL CTA helper ============ */
function FinalCta({ lang }: { lang: Lang }) {
  const L = t(lang).home.finalCta;
  const r = routeMap[lang];
  return (
    <div className="mt-16 rounded-3xl border border-border bg-gradient-to-br from-white to-bg-sky p-8 text-center shadow-soft md:p-12">
      <h3 className="font-display text-2xl font-bold md:text-3xl">{L.title}</h3>
      <p className="mt-3 text-text-secondary">{L.desc}</p>
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <Link
          to={r.contact}
          className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft"
          style={{ background: "var(--gradient-brand)" }}
        >
          {L.primary} <ArrowRight className="h-4 w-4" />
        </Link>
        <Link
          to={r.contact}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-5 py-2.5 text-sm font-semibold text-text-secondary"
        >
          {L.secondary}
        </Link>
      </div>
    </div>
  );
}
