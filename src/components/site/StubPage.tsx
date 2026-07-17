import { Link } from "@tanstack/react-router";
import type { Lang } from "@/i18n/types";
import { routeMap } from "@/i18n/types";
import { t } from "@/i18n/dict";
import { ArrowRight } from "lucide-react";

export function StubPage({
  lang,
  title,
  eyebrow,
  description,
}: {
  lang: Lang;
  title: string;
  eyebrow?: string;
  description?: string;
}) {
  const L = t(lang);
  return (
    <section className="hero-bg">
      <div className="container-page section-y">
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-primary">
          <span aria-hidden className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--gradient-brand)" }} />
          {eyebrow ?? L.stub.eyebrow}
        </span>
        <h1 className="mt-5 max-w-3xl font-display text-4xl font-bold md:text-[52px]">{title}</h1>
        <p className="mt-5 max-w-2xl text-base text-text-secondary md:text-lg">
          {description ?? L.stub.body}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            to={routeMap[lang].contact}
            className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft"
            style={{ background: "var(--gradient-brand)" }}
          >
            {L.stub.cta} <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            to={routeMap[lang].home}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-6 py-3 text-sm font-semibold text-text-secondary hover:text-primary"
          >
            {lang === "es" ? "Volver al inicio" : "Back to home"}
          </Link>
        </div>
      </div>
    </section>
  );
}
