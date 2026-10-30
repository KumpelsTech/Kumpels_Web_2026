export type Lang = "es" | "en";

export type RouteKey =
  | "home"
  | "solutions"
  | "technology"
  | "vita"
  | "validation"
  | "investors"
  | "team"
  | "about"
  | "blog"
  | "news"
  | "contact"
  | "privacy"
  | "terms"
  | "benefits";

export const routeMap: Record<Lang, Record<RouteKey, string>> = {
  es: {
    home: "/es",
    solutions: "/es/soluciones",
    technology: "/es/tecnologia",
    vita: "/es/vita-fertility",
    validation: "/es/validacion",
    investors: "/es/inversionistas",
    team: "/es/equipo",
    about: "/es/nosotros",
    blog: "/es/blog",
    news: "/es/noticias",
    contact: "/es/contacto",
    privacy: "/es/privacidad",
    terms: "/es/terminos",
    benefits: "/es/beneficios",
  },
  en: {
    home: "/en",
    solutions: "/en/solutions",
    technology: "/en/technology",
    vita: "/en/vita-fertility",
    validation: "/en/validation",
    investors: "/en/investors",
    team: "/en/team",
    about: "/en/about",
    blog: "/en/blog",
    news: "/en/news",
    contact: "/en/contact",
    privacy: "/en/privacy",
    terms: "/en/terms",
    benefits: "/en/benefits",
  },
};


export function alternatePath(pathname: string, target: Lang): string {
  const source: Lang = pathname.startsWith("/en") ? "en" : "es";

  if (source === target) return pathname;

  const keys = (Object.keys(routeMap[source]) as RouteKey[])
    .filter((key) => key !== "home")
    .sort(
      (a, b) =>
        routeMap[source][b].length - routeMap[source][a].length
    );

  for (const key of keys) {
    const sourcePath = routeMap[source][key];

    if (
      pathname === sourcePath ||
      pathname.startsWith(sourcePath + "/")
    ) {
      const rest = pathname.slice(sourcePath.length);
      return routeMap[target][key] + rest;
    }
  }

  return routeMap[target].home;
}
