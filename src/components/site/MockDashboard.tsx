/**
 * Light, modern platform mockup used in the hero.
 * Pure SVG/JSX — no images, no dependencies.
 */
export function MockDashboard({ lang }: { lang: "es" | "en" }) {
  const tr = (es: string, en: string) => (lang === "es" ? es : en);
  return (
    <div className="relative">
      <div
        aria-hidden
        className="absolute -inset-6 -z-10 rounded-[2rem] opacity-70 blur-2xl"
        style={{ background: "var(--gradient-soft)" }}
      />
      <div className="overflow-hidden rounded-3xl border border-border bg-white shadow-elevated">
        {/* window chrome */}
        <div className="flex items-center gap-2 border-b border-border bg-bg-light px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-danger/60" />
          <span className="h-2.5 w-2.5 rounded-full bg-warning/60" />
          <span className="h-2.5 w-2.5 rounded-full bg-success/60" />
          <span className="ml-3 rounded-md bg-white px-2 py-0.5 text-[10px] font-medium text-text-muted shadow-soft">
            kumpels.app / {tr("validación", "validation")}
          </span>
          <span className="ml-auto inline-flex items-center gap-1 text-[10px] text-text-muted">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-success" />
            {tr("en vivo", "live")}
          </span>
        </div>

        <div className="grid gap-4 p-5 md:grid-cols-5">
          {/* sidebar */}
          <aside className="md:col-span-1 space-y-1.5">
            {[
              tr("Validación", "Validation"),
              tr("Farmacia", "Pharmacy"),
              tr("Trazabilidad", "Traceability"),
              tr("Enfermería", "Nursing"),
              tr("Analítica", "Analytics"),
            ].map((label, i) => (
              <div
                key={label}
                className={`flex items-center gap-2 rounded-lg px-2.5 py-2 text-[11px] font-medium ${
                  i === 0
                    ? "bg-secondary text-primary"
                    : "text-text-secondary"
                }`}
              >
                <span
                  className={`h-1.5 w-1.5 rounded-full ${
                    i === 0 ? "" : "bg-border"
                  }`}
                  style={i === 0 ? { background: "var(--gradient-brand)" } : undefined}
                />
                {label}
              </div>
            ))}
          </aside>

          {/* main */}
          <div className="md:col-span-4 space-y-4">
            {/* KPI row */}
            <div className="grid grid-cols-3 gap-3">
              <Kpi label={tr("Rx validadas", "Rx validated")} value="1,284" tone="primary" />
              <Kpi label={tr("Alertas activas", "Active alerts")} value="12" tone="warning" />
              <Kpi label={tr("Tiempo medio", "Avg. time")} value="3m 12s" tone="success" />
            </div>

            {/* queue */}
            <div className="rounded-xl border border-border">
              <div className="flex items-center justify-between border-b border-border px-3 py-2 text-[11px] font-medium text-text-secondary">
                <span>{tr("Cola priorizada", "Prioritized queue")}</span>
                <span className="text-text-muted">{tr("últimos 60 min", "last 60 min")}</span>
              </div>
              <ul className="divide-y divide-border text-[11px]">
                {[
                  { p: "alta", pl: tr("alta", "high"), name: "Paciente 0421", t: "Vancomicina 1g IV" },
                  { p: "media", pl: tr("media", "medium"), name: "Paciente 0388", t: "Enoxaparina 40mg SC" },
                  { p: "baja", pl: tr("baja", "low"), name: "Paciente 0312", t: "Omeprazol 40mg VO" },
                ].map((r) => (
                  <li key={r.name} className="flex items-center gap-3 px-3 py-2.5">
                    <span
                      className={`inline-flex w-14 justify-center rounded-full px-1.5 py-0.5 text-[9px] font-semibold uppercase ${
                        r.p === "alta"
                          ? "bg-danger/10 text-danger"
                          : r.p === "media"
                          ? "bg-warning/10 text-warning"
                          : "bg-success/10 text-success"
                      }`}
                    >
                      {r.pl}
                    </span>
                    <span className="font-medium text-foreground">{r.name}</span>
                    <span className="text-text-muted">{r.t}</span>
                    <span className="ml-auto text-text-muted">•••</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* sparkline */}
            <div className="rounded-xl border border-border p-3">
              <div className="flex items-center justify-between text-[11px] text-text-secondary">
                <span>{tr("Validaciones por hora", "Validations per hour")}</span>
                <span className="font-semibold text-primary">+18%</span>
              </div>
              <svg viewBox="0 0 280 60" className="mt-2 h-14 w-full">
                <defs>
                  <linearGradient id="ln" x1="0" x2="1">
                    <stop offset="0%" stopColor="oklch(0.78 0.14 215)" />
                    <stop offset="100%" stopColor="oklch(0.39 0.20 263)" />
                  </linearGradient>
                </defs>
                <polyline
                  fill="none"
                  stroke="url(#ln)"
                  strokeWidth="2.5"
                  points="0,42 20,38 40,40 60,30 80,32 100,24 120,28 140,18 160,22 180,14 200,20 220,12 240,18 260,8 280,12"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* floating chip */}
      <div className="absolute -bottom-5 -left-3 hidden items-center gap-2 rounded-full border border-border bg-white px-3 py-2 text-[11px] font-medium text-text-secondary shadow-elevated md:inline-flex">
        <span className="h-2 w-2 animate-pulse rounded-full bg-success" />
        {tr("Validación registrada", "Validation recorded")}
      </div>
    </div>
  );
}

function Kpi({
  label,
  value,
  tone,
}: {
  label: string;
  value: string;
  tone: "primary" | "warning" | "success";
}) {
  const dot =
    tone === "primary"
      ? "var(--gradient-brand)"
      : tone === "warning"
      ? "var(--color-warning)"
      : "var(--color-success)";
  return (
    <div className="rounded-xl border border-border bg-bg-light p-3">
      <div className="flex items-center gap-1.5 text-[10px] font-medium uppercase tracking-wider text-text-muted">
        <span className="h-1.5 w-1.5 rounded-full" style={{ background: dot }} />
        {label}
      </div>
      <p className="mt-1 font-display text-xl font-bold text-foreground">{value}</p>
    </div>
  );
}
