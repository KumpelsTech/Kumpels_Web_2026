import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import type { Lang } from "@/i18n/types";
import { alternatePath, routeMap } from "@/i18n/types";
import { t } from "@/i18n/dict";

const navKeys = [
  "home",
  "solutions",
  "validation",
  "blog",
  "about",
  "contact",
] as const;

export function SiteHeader({ lang, pathname }: { lang: Lang; pathname: string }) {
  const L = t(lang).nav;
  const r = routeMap[lang];
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const otherLang: Lang = lang === "es" ? "en" : "es";
  const altHref = alternatePath(pathname, otherLang);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors ${scrolled
        ? "border-border bg-white/85 backdrop-blur-xl shadow-soft"
        : "border-transparent bg-white/60 backdrop-blur-md"
        }`}
    >
      <div className="container-page flex h-16 items-center justify-between gap-4 md:h-20">
        <Link
          to={r.home}
          className="flex shrink-0 items-center"
          aria-label="Kumpels"
        >
          <img
            src="/images/Logo-Kumpels-azul.png"
            alt="Kumpels"
            className="h-10 w-auto transition-all duration-300 md:h-12"
            draggable={false}
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navKeys.map((k) => (
            <Link
              key={k}
              to={r[k]}
              className="rounded-full px-3 py-2 text-sm font-medium text-text-secondary transition hover:bg-secondary hover:text-primary"
              activeOptions={{ exact: k === "home" }}
              activeProps={{ className: "text-primary bg-secondary" }}
            >
              {L[k]}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Link
            to={altHref}
            className="rounded-full border border-border bg-white px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-text-secondary hover:text-primary"
            aria-label={L.language}
          >
            {otherLang}
          </Link>
          <a
            href="https://calendar.app.google/gxTKawMH6Vqkky1s5"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold text-primary-foreground shadow-soft transition hover:shadow-elevated"
            style={{ background: "var(--gradient-brand)" }}
          >
            {L.bookDemo} <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? L.close : L.menu}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white text-foreground lg:hidden"
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-white lg:hidden">
          <nav className="container-page flex flex-col gap-1 py-4">
            {navKeys.map((k) => (
              <Link
                key={k}
                to={r[k]}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-text-secondary hover:bg-secondary hover:text-primary"
                activeOptions={{ exact: k === "home" }}
                activeProps={{ className: "text-primary bg-secondary" }}
              >
                {L[k]}
              </Link>
            ))}
            <div className="mt-2 flex flex-wrap items-center gap-2 border-t border-border pt-3">
              <Link
                to={altHref}
                className="rounded-full border border-border px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-text-secondary"
              >
                {otherLang}
              </Link>
              <a
                href="https://calendar.app.google/gxTKawMH6Vqkky1s5"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full px-4 py-2.5 text-sm font-semibold text-primary-foreground"
                style={{ background: "var(--gradient-brand)" }}
              >
                {L.bookDemo} <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

