import type { Lang } from "@/i18n/types";

export function PageHero({
  eyebrow,
  title,
  highlightedTitle,
  intro,
  backgroundImage = "images/fondo4.png",
  backgroundPosition = "center",
  children,
}: {
  lang?: Lang;
  eyebrow?: string;
  title: string;
  highlightedTitle?: string;
  intro?: string;
  backgroundImage?: string;
  backgroundPosition?: string;
  children?: React.ReactNode;
}) {
  return (
    <section
      className="relative flex min-h-[480px] w-full items-end overflow-hidden bg-[#071B52] md:min-h-[560px]"
      style={{
        backgroundImage: `url("${backgroundImage}")`,
        backgroundPosition,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {/* Overlay azul Kumpels */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(7,27,82,0.98)_0%,rgba(7,27,82,0.92)_42%,rgba(7,27,82,0.70)_72%,rgba(7,27,82,0.52)_100%)]"
      />

      {/* Profundidad inferior */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#071B52]/80 via-transparent to-[#071B52]/15"
      />

      {/* Luces decorativas */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-10 h-[420px] w-[420px] rounded-full bg-[#0845D4]/25 blur-[120px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-0 h-[420px] w-[420px] rounded-full bg-[#27B8FF]/14 blur-[130px]"
      />

      {/* Contenido */}
      <div className="container-page relative z-10 w-full pb-12 pt-28 md:pb-16 md:pt-36 lg:pb-20">
        <div className="max-w-5xl">
          {eyebrow && (
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-[#27B8FF]" />

              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#27B8FF] md:text-sm">
                {eyebrow}
              </span>
            </div>
          )}

          <h1 className="max-w-5xl font-display text-5xl font-black leading-[0.98] tracking-[-0.05em] text-white sm:text-6xl md:text-7xl lg:text-[88px]">
            <span className="block">{title}</span>

            {highlightedTitle && (
              <span className="mt-1 block text-[#8EEBFF]">
                {highlightedTitle}
              </span>
            )}
          </h1>

          {intro && (
            <p className="mt-8 max-w-3xl text-base font-medium leading-7 text-white/85 sm:text-lg md:text-xl md:leading-8">
              {intro}
            </p>
          )}

          {children && <div className="mt-9">{children}</div>}
        </div>
      </div>
    </section>
  );
}