import { useState } from "react";
import { z } from "zod";
import type { Lang } from "@/i18n/types";
import { t } from "@/i18n/dict";

const schema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  org: z.string().trim().max(150).optional().or(z.literal("")),
  role: z.string().trim().max(100).optional().or(z.literal("")),
});

export function NewsletterForm({ lang, compact = false }: { lang: Lang; compact?: boolean }) {
  const L = t(lang).newsletter;
  const [state, setState] = useState<"idle" | "ok" | "err">("idle");
  const [busy, setBusy] = useState(false);

  async function handle(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setBusy(true);
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse({
      name: fd.get("name"),
      email: fd.get("email"),
      org: fd.get("org") ?? "",
      role: fd.get("role") ?? "",
    });
    if (!parsed.success) {
      setState("err");
      setBusy(false);
      return;
    }
    // Stub — wire to backend when Lovable Cloud is enabled.
    console.log("[newsletter]", parsed.data);
    await new Promise((r) => setTimeout(r, 500));
    setState("ok");
    setBusy(false);
    (e.target as HTMLFormElement).reset();
  }

  if (state === "ok") {
    return (
      <div className="rounded-2xl border border-border bg-white p-5 text-sm text-text-secondary">
        ✅ {L.success}
      </div>
    );
  }

  return (
    <form onSubmit={handle} className="rounded-2xl border border-border bg-white p-5 shadow-soft">
      <h4 className="font-display text-base font-semibold text-foreground">{L.title}</h4>
      {!compact && <p className="mt-1 text-sm text-text-secondary">{L.desc}</p>}
      <div className={`mt-4 grid gap-3 ${compact ? "" : "sm:grid-cols-2"}`}>
        <input name="name" required placeholder={L.name} className="rounded-lg border border-input bg-white px-3 py-2 text-sm" />
        <input name="email" type="email" required placeholder={L.email} className="rounded-lg border border-input bg-white px-3 py-2 text-sm" />
        {!compact && (
          <>
            <input name="org" placeholder={L.org} className="rounded-lg border border-input bg-white px-3 py-2 text-sm" />
            <input name="role" placeholder={L.role} className="rounded-lg border border-input bg-white px-3 py-2 text-sm" />
          </>
        )}
      </div>
      <button
        type="submit"
        disabled={busy}
        className="mt-4 inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft disabled:opacity-60"
        style={{ background: "var(--gradient-brand)" }}
      >
        {busy ? "…" : L.subscribe}
      </button>
      {state === "err" && (
        <p className="mt-3 text-xs text-danger">
          {lang === "es" ? "Revisa los datos ingresados." : "Please check the values."}
        </p>
      )}
    </form>
  );
}
