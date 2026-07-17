import { useState } from "react";
import emailjs from "@emailjs/browser";
import { z } from "zod";
import type { Lang } from "@/i18n/types";
import { t } from "@/i18n/dict";

const schema = z.object({
  name: z.string().trim().min(1).max(120),
  email: z.string().trim().email().max(255),
  organization: z.string().trim().max(150).optional().or(z.literal("")),
  role: z.string().trim().max(100).optional().or(z.literal("")),
  phone: z.string().trim().max(50).optional().or(z.literal("")),
  institutionType: z.string().trim().max(100).optional().or(z.literal("")),
  interest: z.string().trim().max(100),
  message: z.string().trim().min(1).max(2000),
});

const SERVICE_ID = "service_00itei3";
const TEMPLATE_ID = "template_djfuw64";
const PUBLIC_KEY = "-BgMUTH4Ls3YC8NcI";

export function ContactForm({ lang }: { lang: Lang }) {
  const C = t(lang).contact;

  const [state, setState] = useState<"idle" | "ok" | "err">("idle");
  const [busy, setBusy] = useState(false);

  async function handle(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setBusy(true);

    const form = e.currentTarget;

    const fd = new FormData(form);

    const data = Object.fromEntries(fd.entries());

    const parsed = schema.safeParse(data);

    if (!parsed.success) {
      setState("err");
      setBusy(false);
      return;
    }

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: parsed.data.name,
          email: parsed.data.email,
          organization: parsed.data.organization,
          role: parsed.data.role,
          phone: parsed.data.phone,
          institutionType: parsed.data.institutionType,
          interest: parsed.data.interest,
          message: parsed.data.message,
        },
        PUBLIC_KEY
      );

      setState("ok");
      form.reset();
    } catch (err) {
      console.error(err);
      setState("err");
    }

    setBusy(false);
  }

  if (state === "ok") {
    return (
      <div className="rounded-2xl border border-[#CFE6FF] bg-[#F5FAFF] p-10 text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-[#27B8FF] to-[#0845D4] text-3xl text-white">
          ✓
        </div>

        <h3 className="mt-6 text-2xl font-bold text-[#071B52]">
          {lang === "es"
            ? "¡Mensaje enviado!"
            : "Message sent!"}
        </h3>

        <p className="mt-3 text-[#66758A]">
          {C.success}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handle} className="space-y-5">

      <div className="grid gap-5 md:grid-cols-2">

        <Field
          name="name"
          label={C.labels.name}
          required
        />

        <Field
          name="organization"
          label={C.labels.organization}
        />

        <Field
          name="role"
          label={C.labels.role}
        />

        <Field
          name="email"
          type="email"
          label={C.labels.email}
          required
        />

        <Field
          name="phone"
          label={C.labels.phone}
        />

        <Field
          name="institutionType"
          label={C.labels.institutionType}
        />

      </div>

      <div className="grid gap-2">

        <label className="text-sm font-medium text-[#16213D]">
          {C.labels.interest}
        </label>

        <select
          name="interest"
          required
          defaultValue=""
          className="rounded-xl border border-[#D7E2EC] px-4 py-3"
        >
          <option value="" disabled>
            —
          </option>

          {C.interests.map((interest) => (
            <option key={interest}>
              {interest}
            </option>
          ))}
        </select>

      </div>

      <div className="grid gap-2">

        <label className="text-sm font-medium text-[#16213D]">
          {C.labels.message}
        </label>

        <textarea
          name="message"
          rows={6}
          required
          className="rounded-xl border border-[#D7E2EC] px-4 py-3"
        />

      </div>

      <button
        disabled={busy}
        className="rounded-full bg-gradient-to-r from-[#27B8FF] to-[#0845D4] px-8 py-4 font-bold text-white transition hover:scale-[1.02] disabled:opacity-50"
      >
        {busy
          ? lang === "es"
            ? "Enviando..."
            : "Sending..."
          : C.labels.send}
      </button>

      {state === "err" && (
        <p className="text-sm text-red-600">
          {lang === "es"
            ? "Ocurrió un error. Intenta nuevamente."
            : "Something went wrong. Please try again."}
        </p>
      )}

    </form>
  );
}

function Field({
  name,
  label,
  type = "text",
  required = false,
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div className="grid gap-2">

      <label
        htmlFor={name}
        className="text-sm font-medium text-[#16213D]"
      >
        {label}
        {required && " *"}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="rounded-xl border border-[#D7E2EC] px-4 py-3"
      />

    </div>
  );
}