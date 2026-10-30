import { Link } from "@tanstack/react-router";
import { ArrowRight, Info } from "lucide-react";
import type { Lang } from "@/i18n/types";
import { routeMap } from "@/i18n/types";
import { PageHero } from "./PageHero";

type Metric = { value: string; label: string; note: string };
type CaseStudy = {
    id: "cardio" | "fertility";
    logo: string;
    institution: string;
    shortName: string;
    status: string;
    statusType: "completed" | "diagnosis";
    headline: string;
    description: string;
    context: string;
    metrics: Metric[];
    workstreams: string[];
    resultTitle: string;
    resultDescription: string;
};
type ValidationContent = {
    title: string;
    intro: string;
    validationTitle: string;
    validationIntro: string;
    cases: CaseStudy[];
    disclaimer: string;
    methodology: { title: string; intro: string; steps: { title: string; description: string }[] };
    cta: { title: string; description: string; primary: string; secondary: string };
};

const validationCopy: Record<Lang, ValidationContent> = {
    es: {
        title: "Validación en entornos reales de atención con instituciones líderes",
        intro: "Kumpels desarrolla y valida su tecnología junto a instituciones de salud. Nuestros proyectos combinan diagnóstico, implementación, medición de resultados y aprendizaje directo de los equipos clínicos y operativos.",
        validationTitle: "Dos instituciones, dos casos de uso, un mismo propósito",
        validationIntro: "La experiencia con La Cardio y VITA Fertilidad demuestra la capacidad de Kumpels para adaptarse a operaciones hospitalarias y clínicas especializadas.",
        cases: [
            {
                id: "cardio", logo: "/images/icono-la-cardio.png", institution: "Fundación Cardioinfantil", shortName: "LA CARDIO",
                status: "PILOTO COMPLETADO", statusType: "completed",
                headline: "Validación de la trazabilidad del medicamento en un entorno hospitalario real",
                description: "Piloto de 3 meses (septiembre a diciembre de 2025) en 14 servicios de hospitalización y UCI de la Fundación Cardioinfantil, para fortalecer la trazabilidad y la visibilidad del flujo operativo del medicamento.",
                context: "",
                metrics: [
                    { value: "+1.900", label: "Pacientes trazados", note: "Pacientes con seguimiento del medicamento durante el piloto." },
                    { value: "173", label: "Usuarios activos", note: "Enfermería, regencia de farmacia, químicos farmacéuticos y administrativos." },
                    { value: "89%", label: "Reducción de tiempo", note: "Menos tiempo dedicado a reprocesos administrativos." },
                    { value: "+100 h", label: "Horas-hombre ahorradas al día", note: "Tiempo diario liberado para el hospital." },
                    { value: "COP 167 M", label: "Ahorro operativo anual", note: "Ahorro directo en papelería, tiempo de personal, archivo físico y reprocesos." },
                    { value: "COP 192 M", label: "Impacto clínico asociado", note: "Estimación anual por días de estancia evitados a causa de reprocesos." },
                    { value: "+COP 350 M", label: "Impacto económico anual", note: "Suma del ahorro directo y el impacto clínico asociado." },
                ],
                workstreams: [
                    "Mapeo del flujo operativo del medicamento",
                    "Integración y pruebas con sistemas institucionales",
                    "Validación de usuarios y perfiles operativos",
                    "Capacitación de los equipos involucrados",
                    "Seguimiento de dispensación, entrega y trazabilidad",
                    "Medición de tiempos, reprocesos y oportunidades de mejora",
                ],
                resultTitle: "¿Qué validamos?",
                resultDescription: "La tecnología puede integrarse al flujo hospitalario, capturar información operativa y generar visibilidad para reducir reprocesos, fortalecer la trazabilidad y apoyar la toma de decisiones.",
            },
            {
                id: "fertility", logo: "/images/icono-vita-fertilidad.png", institution: "VITA Fertilidad", shortName: "VITA FERTILIDAD",
                status: "DIAGNÓSTICO", statusType: "diagnosis",
                headline: "Un caso de negocio medible para digitalizar la operación de una clínica de fertilidad",
                description: "Kumpels realizó un diagnóstico clínico-operacional y financiero para identificar oportunidades de eficiencia dentro de VITA Fertilidad.",
                context: "El análisis permitió estimar el impacto económico de digitalizar procesos relacionados con farmacia, calidad, enfermería, atención al paciente y gestión administrativa.",
                metrics: [
                    { value: "COP 133.936.172", label: "Ahorro anual potencial", note: "Estimación total derivada del diagnóstico de oportunidades operativas." },
                    { value: "44%", label: "Atención al cliente", note: "COP 59.089.488 del ahorro anual potencial identificado." },
                    { value: "24%", label: "Farmacia y calidad", note: "COP 31.514.393 del ahorro anual potencial identificado." },
                    { value: "32%", label: "Enfermería y administración", note: "COP 43.332.291 del ahorro anual potencial identificado." },
                ],
                workstreams: [
                    "Diagnóstico de procesos clínicos y operativos",
                    "Análisis de inventarios, medicamentos e insumos",
                    "Identificación de reprocesos y tareas manuales",
                    "Evaluación de atención al paciente",
                    "Estimación del impacto financiero",
                    "Preparación del alcance y los indicadores del piloto",
                ],
                resultTitle: "¿Qué identificamos?",
                resultDescription: "Existe una oportunidad significativa para integrar la trazabilidad del tratamiento, los procesos de laboratorio, la gestión del inventario y la experiencia del paciente en una sola plataforma.",
            },
        ],
        disclaimer: "Los resultados de La Cardio corresponden a la validación realizada en ese entorno institucional entre septiembre y diciembre de 2025. Las cifras de VITA Fertilidad corresponden a estimaciones del diagnóstico y deberán confirmarse durante la ejecución del piloto.",
        methodology: {
            title: "Cómo validamos nuestra tecnología",
            intro: "Cada implementación se estructura para comprender la operación real, reducir riesgos y medir resultados antes de escalar.",
            steps: [
                { title: "Diagnóstico", description: "Mapeamos procesos, actores, sistemas, tiempos y puntos críticos." },
                { title: "Diseño", description: "Configuramos la solución según los flujos y necesidades de la institución." },
                { title: "Piloto", description: "Implementamos en un alcance controlado con acompañamiento a los equipos." },
                { title: "Medición", description: "Evaluamos resultados clínicos, operativos, financieros y de adopción." },
                { title: "Escalamiento", description: "Definimos la expansión progresiva de la solución dentro de la institución." },
            ],
        },
        cta: {
            title: "Valida el impacto de Kumpels en tu institución",
            description: "Diseñemos un piloto con alcance, indicadores y objetivos adaptados a tus procesos clínicos y operativos.",
            primary: "Solicitar una demo", secondary: "Conocer las soluciones",
        },
    },
    en: {
        title: "Validation in real-world care settings with leading institutions",
        intro: "Kumpels develops and validates its technology alongside healthcare institutions. Our projects combine assessment, implementation, outcome measurement, and direct learning from clinical and operational teams.",
        validationTitle: "Two institutions, two use cases, one shared purpose",
        validationIntro: "Our experience with La Cardio and VITA Fertilidad demonstrates Kumpels’ ability to adapt to hospital operations and specialized clinics.",
        cases: [
            {
                id: "cardio", logo: "/images/icono-la-cardio.png", institution: "Fundación Cardioinfantil", shortName: "LA CARDIO",
                status: "COMPLETED PILOT", statusType: "completed",
                headline: "Validating medication traceability in a real hospital setting",
                description: "A three-month pilot (September to December 2025) across 14 inpatient and intensive care units at Fundación Cardioinfantil, designed to strengthen traceability and visibility across operational medication workflows.",
                context: "",
                metrics: [
                    { value: "1,900+", label: "Patients tracked", note: "Patients whose medication journeys were tracked during the pilot." },
                    { value: "173", label: "Active users", note: "Nurses, pharmacy technicians, pharmacists, and administrative staff." },
                    { value: "89%", label: "Time reduction", note: "Less time spent on administrative rework." },
                    { value: "100+ h", label: "Staff-hours saved per day", note: "Daily time freed up for the hospital." },
                    { value: "COP 167 M", label: "Annual operational savings", note: "Direct savings from paperwork, staff time, physical archiving, and rework." },
                    { value: "COP 192 M", label: "Associated clinical impact", note: "Annual estimate based on inpatient days potentially avoided due to reduced rework." },
                    { value: "COP 350 M+", label: "Annual economic impact", note: "Combined direct savings and associated clinical impact." },
                ],
                workstreams: [
                    "Mapping the operational medication workflow",
                    "Integration and testing with institutional systems",
                    "Validation of users and operational roles",
                    "Training the teams involved",
                    "Monitoring dispensing, delivery, and traceability",
                    "Measuring time, rework, and improvement opportunities",
                ],
                resultTitle: "What did we validate?",
                resultDescription: "The technology can integrate with hospital workflows, capture operational information, and improve visibility to reduce rework, strengthen traceability, and support decision-making.",
            },
            {
                id: "fertility", logo: "/images/icono-vita-fertilidad.png", institution: "VITA Fertilidad", shortName: "VITA FERTILIDAD",
                status: "ASSESSMENT", statusType: "diagnosis",
                headline: "A measurable business case for digitizing fertility clinic operations",
                description: "Kumpels conducted a clinical, operational, and financial assessment to identify efficiency opportunities at VITA Fertilidad.",
                context: "The analysis estimated the economic impact of digitizing workflows across pharmacy, quality, nursing, patient services, and administration.",
                metrics: [
                    { value: "COP 133,936,172", label: "Potential annual savings", note: "Total estimate from the operational opportunity assessment." },
                    { value: "44%", label: "Patient services", note: "COP 59,089,488 of the identified potential annual savings." },
                    { value: "24%", label: "Pharmacy and quality", note: "COP 31,514,393 of the identified potential annual savings." },
                    { value: "32%", label: "Nursing and administration", note: "COP 43,332,291 of the identified potential annual savings." },
                ],
                workstreams: [
                    "Assessment of clinical and operational processes",
                    "Inventory, medication, and medical supply analysis",
                    "Identification of rework and manual tasks",
                    "Evaluation of patient services",
                    "Financial impact estimation",
                    "Preparation of pilot scope and performance indicators",
                ],
                resultTitle: "What did we identify?",
                resultDescription: "There is a significant opportunity to bring treatment traceability, laboratory processes, inventory management, and the patient experience into a single platform.",
            },
        ],
        disclaimer: "La Cardio's results come from validation conducted at that institution between September and December 2025. VITA Fertilidad's figures are estimates from the assessment and must be confirmed during pilot execution.",
        methodology: {
            title: "How we validate our technology",
            intro: "Each implementation is structured to understand real operations, reduce risks, and measure results before scaling.",
            steps: [
                { title: "Assessment", description: "We map processes, stakeholders, systems, timelines, and critical points." },
                { title: "Design", description: "We configure the solution around the institution's workflows and needs." },
                { title: "Pilot", description: "We implement a controlled scope while supporting the teams involved." },
                { title: "Measurement", description: "We assess clinical, operational, financial, and adoption outcomes." },
                { title: "Scaling", description: "We define a phased expansion of the solution within the institution." },
            ],
        },
        cta: {
            title: "Validate Kumpels' impact at your institution",
            description: "Let's design a pilot with a scope, metrics, and goals tailored to your clinical and operational workflows.",
            primary: "Request a demo", secondary: "Explore solutions",
        },
    },
};

export function CoreValidationPage({ lang }: { lang: Lang }) {
    const L = validationCopy[lang];
    const r = routeMap[lang];

    return (
        <>

            {/* HERO */}
            <PageHero
                title={L.title}
                intro={L.intro}
                backgroundImage="/images/fondo4.png"
                backgroundPosition="center"
            />


            {/* INTRODUCCIÓN */}
            <section className="bg-[#F3F8FC] py-20 md:py-24">
                <div className="container-page">
                    <div className="mx-auto max-w-4xl text-center">
                        <h2 className="font-display text-4xl font-black leading-tight tracking-[-0.035em] text-[#071B52] md:text-5xl">
                            {L.validationTitle}
                        </h2>

                        <div className="mx-auto mt-6 flex w-fit gap-2">
                            <span className="h-1 w-16 bg-[#F7BA2B]" />
                            <span className="h-1 w-9 bg-[#0845D4]" />
                        </div>

                        <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-[#66758A] md:text-lg">
                            {L.validationIntro}
                        </p>
                    </div>
                </div>
            </section>

            {/* CASOS DE VALIDACIÓN */}
            <section className="overflow-hidden bg-white">
                {L.cases.map((caseStudy, caseIndex) => {
                    const isCardio = caseStudy.id === "cardio";
                    const reversed = caseIndex % 2 !== 0;

                    return (
                        <article
                            key={caseStudy.id}
                            id={isCardio ? "la-cardio" : "fertilidad"}
                            className={`relative overflow-hidden scroll-mt-24 py-20 md:py-28 ${isCardio
                                ? "bg-white"
                                : "bg-gradient-to-br from-[#EAF6FD] via-[#F7FBFE] to-white"
                                }`}
                        >
                            {/* Fondos suaves */}
                            <div
                                className={`pointer-events-none absolute top-1/2 h-[520px] w-[520px] -translate-y-1/2 rounded-full blur-[145px] ${reversed
                                    ? "-left-52 bg-[#0845D4]/[0.08]"
                                    : "-right-52 bg-[#27B8FF]/[0.11]"
                                    }`}
                            />

                            <div className="container-page relative z-10">
                                {/* CABECERA DE INSTITUCIÓN */}
                                <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
                                    {/* Logo destacado */}
                                    <div
                                        className={`lg:col-span-5 ${reversed ? "lg:order-2 lg:col-start-8" : ""
                                            }`}
                                    >
                                        <div className="relative flex min-h-[330px] items-center justify-center overflow-hidden border border-[#D6E3EC] bg-white p-10 shadow-[0_24px_70px_rgba(7,27,82,0.10)] md:min-h-[400px] md:p-14">
                                            <div className="pointer-events-none absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-[#0845D4] via-[#27B8FF] to-[#F7BA2B]" />

                                            <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#27B8FF]/10 blur-3xl" />

                                            <img
                                                src={caseStudy.logo}
                                                alt={caseStudy.institution}
                                                className="relative max-h-44 w-full max-w-[360px] object-contain"
                                                loading="lazy"
                                            />

                                            <span
                                                className={`absolute bottom-5 left-5 px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] ${caseStudy.statusType === "completed"
                                                    ? "bg-[#0845D4] text-white"
                                                    : "bg-[#F7BA2B] text-[#071B52]"
                                                    }`}
                                            >
                                                {caseStudy.status}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Contenido */}
                                    <div
                                        className={`lg:col-span-7 ${reversed ? "lg:order-1" : ""
                                            }`}
                                    >
                                        <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#0845D4]">
                                            {caseStudy.shortName}
                                        </p>

                                        <h2 className="mt-4 max-w-4xl font-display text-4xl font-black leading-[1.05] tracking-[-0.04em] text-[#071B52] md:text-5xl">
                                            {caseStudy.headline}
                                        </h2>

                                        <div className="mt-6 flex gap-2">
                                            <span className="h-1 w-16 bg-[#F7BA2B]" />
                                            <span className="h-1 w-10 bg-[#0845D4]" />
                                        </div>

                                        <p className="mt-7 max-w-3xl text-base leading-8 text-[#536174]">
                                            {caseStudy.description}
                                        </p>

                                        {caseStudy.context && (
                                            <p className="mt-4 max-w-3xl text-base leading-8 text-[#66758A]">
                                                {caseStudy.context}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                {/* MÉTRICAS */}
                                <div className="mt-16 grid gap-px overflow-hidden border border-[#CDDCE7] bg-[#CDDCE7] sm:grid-cols-2 lg:grid-cols-4">
                                    {caseStudy.metrics.map((metric, metricIndex) => (
                                        <article
                                            key={`${caseStudy.id}-${metric.label}`}
                                            className="relative min-h-[245px] bg-white p-6 md:p-7"
                                        >
                                            <span
                                                className={`absolute left-0 top-0 h-1 w-full ${metricIndex % 2 === 0
                                                    ? "bg-[#0845D4]"
                                                    : "bg-[#F7BA2B]"
                                                    }`}
                                            />

                                            <p
                                                className={`font-display text-3xl font-black leading-tight ${metricIndex % 2 === 0
                                                    ? "text-[#0845D4]"
                                                    : "text-[#E5A000]"
                                                    }`}
                                            >
                                                {metric.value}
                                            </p>

                                            <h3 className="mt-4 text-base font-bold leading-6 text-[#16213D]">
                                                {metric.label}
                                            </h3>

                                            <p className="mt-3 text-sm leading-6 text-[#66758A]">
                                                {metric.note}
                                            </p>
                                        </article>
                                    ))}
                                </div>

                                {/* TRABAJO + RESULTADO */}
                                <div className="mt-16 grid gap-10 lg:grid-cols-12">
                                    <div className="lg:col-span-7">
                                        <div className="border-t-2 border-[#071B52]">
                                            {caseStudy.workstreams.map((item, itemIndex) => (
                                                <div
                                                    key={item}
                                                    className="grid grid-cols-[48px_1fr] items-center border-b border-[#D5E1EA] py-5"
                                                >
                                                    <span
                                                        className={`font-display text-sm font-black ${itemIndex % 2 === 0
                                                            ? "text-[#0845D4]"
                                                            : "text-[#E5A000]"
                                                            }`}
                                                    >
                                                        {String(itemIndex + 1).padStart(2, "0")}
                                                    </span>

                                                    <p className="text-sm font-semibold leading-6 text-[#536174]">
                                                        {item}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="lg:col-span-5">
                                        <div className="relative h-full overflow-hidden bg-[#071B52] p-8 text-white md:p-10">
                                            <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#27B8FF]/20 blur-3xl" />

                                            <div className="relative">
                                                <h3 className="font-display text-3xl font-black leading-tight">
                                                    {caseStudy.resultTitle}
                                                </h3>

                                                <div className="mt-5 h-1 w-20 bg-[#F7BA2B]" />

                                                <p className="mt-6 text-base leading-8 text-white/70">
                                                    {caseStudy.resultDescription}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>
                    );
                })}
            </section>

            {/* AVISO METODOLÓGICO */}
            <section className="bg-[#FFF8E6] py-8">
                <div className="container-page">
                    <div className="flex items-start gap-4 border-l-4 border-[#F7BA2B] pl-5">
                        <Info className="mt-0.5 h-5 w-5 shrink-0 text-[#C98700]" />
                        <p className="text-sm leading-7 text-[#6B5A34]">{L.disclaimer}</p>
                    </div>
                </div>
            </section>

            {/* METODOLOGÍA */}
            <section className="relative overflow-hidden bg-[#071B52] py-20 text-white md:py-28">
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 opacity-[0.13]"
                    style={{
                        backgroundImage:
                            "radial-gradient(circle, rgba(255,255,255,0.45) 1px, transparent 1px)",
                        backgroundSize: "34px 34px",
                    }}
                />

                <div className="container-page relative z-10">
                    <div className="grid gap-12 lg:grid-cols-12">
                        <div className="lg:col-span-4">
                            <h2 className="font-display text-4xl font-black leading-tight tracking-[-0.035em] md:text-5xl">
                                {L.methodology.title}
                            </h2>

                            <div className="mt-6 flex gap-2">
                                <span className="h-1 w-16 bg-[#F7BA2B]" />
                                <span className="h-1 w-9 bg-[#27B8FF]" />
                            </div>

                            <p className="mt-6 text-base leading-8 text-white/65">
                                {L.methodology.intro}
                            </p>
                        </div>

                        <div className="border-t border-white/20 lg:col-span-8">
                            {L.methodology.steps.map((step, index) => (
                                <article
                                    key={step.title}
                                    className="grid gap-5 border-b border-white/20 py-7 md:grid-cols-[70px_0.7fr_1.3fr] md:items-center"
                                >
                                    <span className="font-display text-sm font-black text-[#27B8FF]">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>

                                    <h3 className="font-display text-xl font-bold text-white">
                                        {step.title}
                                    </h3>

                                    <p className="text-sm leading-7 text-white/62">
                                        {step.description}
                                    </p>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="relative overflow-hidden bg-gradient-to-b from-white to-[#EFF8FF] py-20">
                <div className="container-page">
                    <div
                        className="relative overflow-hidden rounded-[2.5rem] px-8 py-14 text-center text-white shadow-[0_35px_90px_rgba(8,69,212,0.18)] md:px-16 md:py-20"
                        style={{
                            backgroundImage:
                                "linear-gradient(rgba(7,27,82,.85), rgba(7,27,82,.85)), url('/images/fondo4.png')",
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                        }}
                    >
                        <div className="relative mx-auto max-w-4xl">
                            <h2 className="font-display text-4xl font-black leading-tight md:text-6xl">
                                {L.cta.title}
                            </h2>

                            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/72">
                                {L.cta.description}
                            </p>

                            <div className="mt-10 flex flex-wrap justify-center gap-4">
                                <a
                                    href="https://calendar.app.google/gxTKawMH6Vqkky1s5"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#27B8FF] to-[#0845D4] px-8 py-4 text-base font-bold text-white shadow-[0_18px_45px_rgba(8,69,212,.35)] transition hover:-translate-y-1"
                                >
                                    {L.cta.primary}

                                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                                </a>

                                <Link
                                    to={r.solutions}
                                    className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-8 py-4 text-base font-bold text-white backdrop-blur-md transition hover:-translate-y-1 hover:bg-white/20"
                                >
                                    {L.cta.secondary}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
