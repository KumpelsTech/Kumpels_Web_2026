import type { Lang } from "@/i18n/types";
import { social, company } from "@/content/site";
import {
  Linkedin,
  Instagram,
  Youtube,
  MessageCircle,
  Mail,
  ArrowUpRight,
  Users,
} from "lucide-react";

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M16.5 3a5.5 5.5 0 0 0 5 5v3a8.5 8.5 0 0 1-5-1.6V15a6 6 0 1 1-6-6v3a3 3 0 1 0 3 3V3h3z" />
    </svg>
  );
}

type SocialItem = {
  label: string;
  handle: string;
  description: string;
  buttonLabel: string;
  href: string;
  icon: React.ElementType;
  accent: "blue" | "cyan" | "yellow";
};

export function SocialStrip({
  lang,
  compact = false,
}: {
  lang: Lang;
  compact?: boolean;
}) {
  const content =
    lang === "es"
      ? {
          title: "Conecta con Kumpels",
          subtitle:
            "Síguenos y conoce cómo estamos transformando la seguridad del medicamento y la tecnología en salud.",
          imageAlt:
            "Profesional de la salud conectando con la comunidad de Kumpels",
          floatingLabel: "Conversemos",
          whatsappLabel: "Hablar por WhatsApp",
          socialItems: [
            {
              label: "LinkedIn",
              handle: "Kumpels",
              description:
                "Conoce nuestras alianzas, avances, pilotos y noticias corporativas.",
              buttonLabel: "Ver LinkedIn",
            },
            {
              label: "Instagram",
              handle: "@kumpels",
              description:
                "Contenido educativo, eventos y el día a día de nuestro equipo.",
              buttonLabel: "Ver Instagram",
            },
            {
              label: "TikTok",
              handle: "@kumpels",
              description:
                "Aprende sobre seguridad del medicamento e innovación en salud.",
              buttonLabel: "Ver TikTok",
            },
          ],
        }
      : {
          title: "Connect with Kumpels",
          subtitle:
            "Follow us and discover how we are transforming medication safety and healthcare technology.",
          imageAlt:
            "Healthcare professional connecting with the Kumpels community",
          floatingLabel: "Let’s talk",
          channelsTitle: "You can also contact us directly",
          whatsappLabel: "Chat on WhatsApp",
          emailLabel: "Send an email",
          socialItems: [
            {
              label: "LinkedIn",
              handle: "Kumpels",
              description:
                "Explore our partnerships, pilots, progress and company news.",
              buttonLabel: "View LinkedIn",
            },
            {
              label: "Instagram",
              handle: "@kumpels",
              description:
                "Educational content, events and a look inside our team.",
              buttonLabel: "View Instagram",
            },
            {
              label: "Kumpels TikTok",
              handle: "@kumpels",
              description:
                "Learn about medication safety and healthcare innovation.",
              buttonLabel: "View TikTok",
            },
          ],
        };

  const socials: SocialItem[] = [
    {
      ...content.socialItems[0],
      href: social.linkedin,
      icon: Linkedin,
      accent: "blue",
    },
    {
      ...content.socialItems[1],
      href: social.instagram,
      icon: Instagram,
      accent: "cyan",
    },
    {
      ...content.socialItems[2],
      href: social.tiktok,
      icon: TikTokIcon,
      accent: "yellow",
    },
  ];

  const accentStyles = {
    blue: {
      icon: "bg-[#0845D4] text-white",
      title: "text-[#0845D4]",
      border: "group-hover:border-[#0845D4]/40",
      glow: "bg-[#0845D4]/10",
    },
    cyan: {
      icon: "bg-[#27B8FF] text-[#071B52]",
      title: "text-[#079FDB]",
      border: "group-hover:border-[#27B8FF]/50",
      glow: "bg-[#27B8FF]/12",
    },
    yellow: {
      icon: "bg-[#F7BA2B] text-[#071B52]",
      title: "text-[#D99B00]",
      border: "group-hover:border-[#F7BA2B]/60",
      glow: "bg-[#F7BA2B]/14",
    },
  };

  return (
    <section
      className={`relative overflow-hidden bg-[#F4F8FC] ${
        compact ? "py-14" : "py-20 md:py-28"
      }`}
    >
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-8 h-96 w-96 rounded-full bg-[#27B8FF]/10 blur-[110px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-0 h-[420px] w-[420px] rounded-full bg-[#0845D4]/8 blur-[120px]"
      />

      <div className="container-page relative z-10">
        <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          {/* Left visual */}
          <div className="relative mx-auto w-full max-w-[560px]">
            <div className="relative aspect-square">
              {/* Large soft background shape */}
              <div className="absolute inset-[5%] rounded-[42%_58%_48%_52%/52%_42%_58%_48%] bg-gradient-to-br from-[#DCEFFC] via-[#EEF7FC] to-[#D7E7F8]" />

              {/* Decorative rings */}
              <div className="absolute inset-[3%] rounded-full border border-[#27B8FF]/30" />
              <div className="absolute inset-[8%] rounded-full border-2 border-[#27B8FF]/50" />
              <div className="absolute inset-[14%] rounded-full border border-white/80" />

              {/* Partial accent circles */}
              <div className="absolute left-[7%] top-[13%] h-[72%] w-[72%] rounded-full border-t-2 border-r-2 border-[#27B8FF]" />
              <div className="absolute bottom-[7%] right-[7%] h-[68%] w-[68%] rounded-full border-b-2 border-l-2 border-[#0845D4]/70" />

              {/* Main image */}
              <div className="absolute inset-[10%] overflow-hidden rounded-full bg-[#DCEAF4] shadow-[0_30px_80px_rgba(7,27,82,0.16)]">
                <img
                  src="/images/robot.png"
                  alt={content.imageAlt}
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#071B52]/18 via-transparent to-transparent" />
              </div>

              {/* Floating social bubble */}
              <div className="absolute left-[-2%] top-[25%] grid h-32 w-32 place-items-center rounded-full border-2 border-white bg-white/45 shadow-[0_20px_50px_rgba(7,27,82,0.14)] backdrop-blur-md sm:h-36 sm:w-36">
                <div className="grid h-20 w-20 place-items-center rounded-3xl bg-gradient-to-br from-[#27B8FF] via-[#0845D4] to-[#6F38C5] text-white shadow-xl sm:h-24 sm:w-24">
                  <MessageCircle className="h-9 w-9 sm:h-11 sm:w-11" />
                </div>
              </div>

              {/* Small community bubble */}
              <div className="absolute bottom-[2%] right-[4%] flex items-center gap-3 rounded-2xl border border-white/80 bg-white/90 px-4 py-3 shadow-[0_16px_40px_rgba(7,27,82,0.14)] backdrop-blur">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#F7BA2B] text-[#071B52]">
                  <Users className="h-5 w-5" />
                </span>

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#071B52]/45">
                    Kumpels
                  </p>
                  <p className="text-sm font-bold text-[#071B52]">
                    {content.floatingLabel}
                  </p>
                </div>
              </div>

              {/* Small crosses */}
              <span className="absolute bottom-[6%] left-[4%] text-2xl font-light text-[#27B8FF]/30">
                +
              </span>
              <span className="absolute bottom-[15%] left-[-2%] text-lg font-light text-[#0845D4]/25">
                +
              </span>
              <span className="absolute left-[9%] top-[8%] text-xl font-light text-[#27B8FF]/25">
                +
              </span>
            </div>
          </div>

          {/* Right content */}
          <div>
            <div className="max-w-3xl">
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-[#F7BA2B]" />
              </div>

              <h2 className="mt-5 font-display text-4xl font-medium leading-[1.08] tracking-[-0.035em] text-[#16213D] sm:text-5xl lg:text-[56px]">
                {content.title}
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-7 text-[#536174] md:text-lg">
                {content.subtitle}
              </p>
            </div>

            {/* Social list */}
            <div className="mt-10 space-y-4">
              {socials.map((item) => {
                const accent = accentStyles[item.accent];

                return (
                  <a
                    key={`${item.label}-${item.handle}`}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`
                      group relative block overflow-hidden rounded-3xl
                      border border-[#DCE5EE] bg-white/70
                      px-5 py-5 backdrop-blur-sm
                      transition duration-300
                      hover:-translate-y-0.5 hover:bg-white
                      hover:shadow-[0_18px_45px_rgba(7,27,82,0.09)]
                      ${accent.border}
                    `}
                  >
                    <div
                      aria-hidden="true"
                      className={`
                        pointer-events-none absolute -right-14 -top-14
                        h-32 w-32 rounded-full blur-3xl
                        opacity-0 transition duration-300
                        group-hover:opacity-100
                        ${accent.glow}
                      `}
                    />

                    <div className="relative flex gap-4 sm:gap-5">
                      <div
                        className={`
                          grid h-14 w-14 shrink-0 place-items-center
                          rounded-2xl shadow-sm transition duration-300
                          group-hover:scale-105
                          ${accent.icon}
                        `}
                      >
                        <item.icon className="h-6 w-6" />
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                          <div>
                            <p
                              className={`text-lg font-bold leading-tight ${accent.title}`}
                            >
                              {item.label}
                            </p>

                            <p className="mt-0.5 text-sm font-semibold text-[#16213D]">
                              {item.handle}
                            </p>
                          </div>

                          <span className="mt-3 inline-flex w-fit items-center gap-2 rounded-xl border border-[#C9D5E1] bg-white px-4 py-2 text-sm font-semibold text-[#344054] transition group-hover:border-[#0845D4]/40 group-hover:text-[#0845D4] sm:mt-0">
                            {item.buttonLabel}
                            <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                          </span>
                        </div>

                        <p className="mt-3 max-w-2xl text-sm leading-6 text-[#66758A] sm:text-base">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}