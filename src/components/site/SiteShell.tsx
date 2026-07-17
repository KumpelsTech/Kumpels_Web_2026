import { Outlet, useRouterState } from "@tanstack/react-router";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";
import type { Lang } from "@/i18n/types";

export function SiteShell({ lang }: { lang: Lang }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <SiteHeader lang={lang} pathname={pathname} />
      <main id="main" className="flex-1">
        <Outlet />
      </main>
      <SiteFooter lang={lang} />
    </div>
  );
}
