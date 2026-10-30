
import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import type { Lang } from "@/i18n/types";
import { routeMap } from "@/i18n/types";
import { t } from "@/i18n/dict";
import { company, social } from "@/content/site";
import { Linkedin, Instagram } from "lucide-react";
import { NewsletterForm } from "./NewsletterForm";

export function SiteFooter({ lang }: { lang: Lang }) {
  const F = t(lang).footer;
  const N = t(lang).nav;
  const r = routeMap[lang];

  return (
    <footer className="relative mt-24 overflow-hidden border-t border-border bg-bg-light">
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px"
        style={{ background: "var(--gradient-brand)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[60rem] -translate-x-1/2 rounded-[50%] opacity-30 blur-3xl"
        style={{ background: "radial-gradient(ellipse, var(--brand-sky), transparent 70%)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 right-0 h-64 w-64 rounded-full opacity-25 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--brand-cyan), transparent 70%)" }}
      />

      <div className="container-page grid gap-12 py-16 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Link to={r.home} className="flex items-center">
            <img
              src="/images/Logo-Kumpels-azul.png"
              alt="Kumpels"
              className="h-12 w-auto transition-transform duration-300 hover:scale-105"
            />
          </Link>

          <p className="mt-4 max-w-xs text-sm text-text-secondary">
            {F.tagline}
          </p>

          <div className="mt-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-text-muted">
              {F.followUs}
            </p>

            <p className="mt-2 max-w-xs text-xs text-text-muted">
              {F.followCopy}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              <SocialPill
                href="https://www.linkedin.com/company/kumpelssas"
                icon={<Linkedin className="h-4 w-4" />}
                label="LinkedIn"
              />
              <SocialPill
                href="https://www.instagram.com/kumpels.sas/"
                icon={<Instagram className="h-4 w-4" />}
                label="Instagram"
              />
              <SocialPill
                href="https://www.tiktok.com/@kumpelssas"
                icon={<TikTokIcon />}
                label="TikTok Kumpels"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 lg:col-span-4 lg:grid-cols-2">
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-text-muted">
              {F.product}
            </h4>

            <ul className="mt-4 space-y-2 text-sm text-text-secondary">
              <li>
                <Link to={r.solutions} className="hover:text-primary">
                  {N.solutions}
                </Link>
              </li>
              <li>
                <Link to={r.validation} className="hover:text-primary">
                  {N.validation}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-text-muted">
              {F.company}
            </h4>

            <ul className="mt-4 space-y-2 text-sm text-text-secondary">
              <li>
                <Link to={r.about} className="hover:text-primary">
                  {F.aboutUs}
                </Link>
              </li>
              <li>
                <Link to={r.blog} className="hover:text-primary">
                  {N.blog}
                </Link>
              </li>
              <li>
                <Link to={r.contact} className="hover:text-primary">
                  {N.contact}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="lg:col-span-4">
          <NewsletterForm lang={lang} compact />

          <div className="mt-6 space-y-1 text-xs text-text-muted">
            <p className="font-semibold text-text-secondary">
              {company.legalName}
            </p>
            <p>
              <a
                href={`mailto:${company.email}`}
                className="hover:text-primary"
              >
                {company.email}
              </a>
            </p>
            <p>{company.city}</p>
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-page flex flex-col items-start justify-between gap-3 py-6 text-xs text-text-muted md:flex-row md:items-center">
          <p>
            © 2026 {company.legalName}{" "}
            {F.rights}
          </p>

          <div className="flex items-center gap-4">
            <Link to={r.privacy} className="hover:text-primary">
              {F.privacy}
            </Link>
            <Link to={r.terms} className="hover:text-primary">
              {F.terms}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialPill({
  href,
  icon,
  label,
}: {
  href: string;
  icon: ReactNode;
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-white text-text-secondary transition hover:border-primary/30 hover:text-primary"
    >
      {icon}
    </a>
  );
}

function TikTokIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="currentColor"
      aria-hidden
    >
      <path d="M16.5 3a5.5 5.5 0 0 0 5 5v3a8.5 8.5 0 0 1-5-1.6V15a6 6 0 1 1-6-6v3a3 3 0 1 0 3 3V3h3z" />
    </svg>
  );
}
