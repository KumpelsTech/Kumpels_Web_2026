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
    technology: "/es/soluciones",
    vita: "/es/soluciones",
    validation: "/es/validacion",
    investors: "/es/inversionistas",
    team: "/es/quienes-somos",
    about: "/es/quienes-somos",
    blog: "/es/blog",
    news: "/es/blog",
    contact: "/es/contacto",
    privacy: "/es/privacidad",
    terms: "/es/terminos",
    benefits: "/es/soluciones",
  },
  en: {
    home: "/en",
    solutions: "/en/solutions",
    technology: "/en/solutions",
    vita: "/en/solutions",
    validation: "/en/validation",
    investors: "/en/investors",
    team: "/en/about",
    about: "/en/about",
    blog: "/en/blog",
    news: "/en/blog",
    contact: "/en/contact",
    privacy: "/en/privacy",
    terms: "/en/terms",
    benefits: "/en/solutions",
  },
};


export function alternatePath(pathname: string, target: Lang): string {
  const source: Lang = pathname.startsWith("/en") ? "en" : "es";

  if (source === target) return pathname;

  const keys = (Object.keys(routeMap[source]) as RouteKey[])
    .filter((key) => key !== "home" && !["technology", "vita", "team", "news", "benefits"].includes(key))
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
