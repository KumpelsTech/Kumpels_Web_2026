import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles } from "lucide-react";
import type { Lang } from "@/i18n/types";
import { routeMap } from "@/i18n/types";

type Slide = {
  titleA: string;
  titleB: string;
  desc: string;
  cta: string;
  href: string;
  image: string;
  align?: "left" | "center";
};

export function HeroCarousel({ lang }: { lang: Lang }) {
  const r = routeMap[lang];

  const [emblaRef, embla] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 6500, stopOnInteraction: false }),
  ]);

  const [selected, setSelected] = useState(0);

  useEffect(() => {
    if (!embla) return;

    const onSel = () => setSelected(embla.selectedScrollSnap());
    embla.on("select", onSel);
    onSel();

    return () => {
      embla.off("select", onSel);
    };
  }, [embla]);

  const slides: Slide[] = lang === "es" ? [
    { titleA: "Menos errores.", titleB: "Más vidas cuidadas.", desc: "Kumpels Core conecta pacientes, equipos y sistemas para que cada acción con medicamentos ocurra en el momento correcto.", cta: "Ver soluciones", href: r.solutions, image: "/images/fondo.png", align: "left" },
    { titleA: "Cada medicamento,", titleB: "de principio a fin.", desc: "Trazabilidad de la dispensación, la entrega y la administración en un solo flujo.", cta: "Ver soluciones", href: r.solutions, image: "/images/fondo2.png", align: "left" },
    { titleA: "Fertilidad,", titleB: "digitalizada con precisión.", desc: "El pack de Kumpels Core para clínicas de fertilidad: cada paso del tratamiento, coordinado y trazable.", cta: "Ver soluciones", href: r.solutions, image: "/images/fondo3.png", align: "left" },
    { titleA: "Oncología:", titleB: "el tratamiento continúa entre ciclos.", desc: "El pack de Kumpels Core que acompaña al paciente en casa y prioriza a quienes más necesitan al equipo.", cta: "Ver soluciones", href: r.solutions, image: "/images/fondo4.png", align: "left" },
  ] : [
    { titleA: "Fewer errors.", titleB: "More lives cared for.", desc: "Kumpels Core connects patients, teams and systems so every medication-related action happens at the right time.", cta: "View solutions", href: r.solutions, image: "/images/fondo.png", align: "left" },
    { titleA: "Every medication,", titleB: "from start to finish.", desc: "Traceability of dispensing, delivery and administration in a single workflow.", cta: "View solutions", href: r.solutions, image: "/images/fondo2.png", align: "left" },
    { titleA: "Fertility,", titleB: "digitized with precision.", desc: "The Kumpels Core pack for fertility clinics: every step of treatment, coordinated and traceable.", cta: "View solutions", href: r.solutions, image: "/images/fondo3.png", align: "left" },
    { titleA: "Oncology:", titleB: "care continues between cycles.", desc: "The Kumpels Core pack that supports patients at home and prioritizes those who most need the care team.", cta: "View solutions", href: r.solutions, image: "/images/fondo4.png", align: "left" },
  ];

  return (
    <section className="relative overflow-hidden bg-white">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {slides.map((s, i) => (
            <div key={i} className="min-w-0 flex-[0_0_100%]">
              <div className="relative min-h-[720px] overflow-hidden bg-[#071B52] md:min-h-[820px]">
                <img
                  src={s.image}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover"
                  draggable={false}
                />

                <div className="absolute inset-0 bg-gradient-to-r from-[#031533]/90 via-[#031533]/60 to-[#031533]/10" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#031533]/70 via-transparent to-[#031533]/30" />

                <div
                  aria-hidden
                  className="absolute -left-32 top-24 h-[420px] w-[420px] rounded-full bg-[#0845D4]/40 blur-3xl"
                />
                <div
                  aria-hidden
                  className="absolute bottom-20 right-10 h-[360px] w-[360px] rounded-full bg-cyan-300/20 blur-3xl"
                />

                <div className="container-page relative z-10 flex min-h-[720px] items-center py-20 md:min-h-[820px]">
                  <div
                    className={`max-w-4xl text-white ${s.align === "center" ? "mx-auto text-center" : ""
                      }`}
                  >
                    <h1 className="mt-7 font-display text-[46px] font-black leading-[0.96] tracking-tight md:text-[78px] lg:text-[92px]">
                      <span className="block">{s.titleA}</span>
                      <span className="block text-cyan-200">{s.titleB}</span>
                    </h1>

                    <p className="mt-7 max-w-2xl text-lg leading-8 text-white/86 md:text-xl">
                      {s.desc}
                    </p>

                    <div
                      className={`mt-9 flex flex-wrap items-center gap-3 ${s.align === "center" ? "justify-center" : ""
                        }`}
                    >
                      <Link
                        to={s.href}
                        className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-[#0845D4] shadow-[0_20px_50px_rgba(0,0,0,0.25)] transition hover:-translate-y-0.5 hover:bg-cyan-50"
                      >
                        {s.cta}
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                      </Link>

                      <a
                        href="https://calendar.app.google/gxTKawMH6Vqkky1s5"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-7 py-3.5 text-sm font-bold text-white backdrop-blur-md transition hover:bg-white/18"
                      >
                        {lang === "es" ? "Solicitar demo" : "Book a demo"}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-8 left-0 right-0 z-20">
        <div className="container-page flex items-center justify-between">
          <div className="pointer-events-auto flex items-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => embla?.scrollTo(i)}
                aria-label={`Slide ${i + 1}`}
                className={`h-1.5 rounded-full transition-all ${i === selected ? "w-12 bg-white" : "w-5 bg-white/35"
                  }`}
              />
            ))}
          </div>

          <div className="hidden items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-white/70 md:flex">
            <span className="tabular-nums text-white">
              {String(selected + 1).padStart(2, "0")}
            </span>
            <span>/</span>
            <span className="tabular-nums">
              {String(slides.length).padStart(2, "0")}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}