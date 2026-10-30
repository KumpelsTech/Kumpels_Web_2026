import { Link } from "@tanstack/react-router";
import type { Lang } from "@/i18n/types";
import { routeMap } from "@/i18n/types";
import { PageHero } from "./PageHero";
import { ArrowRight, CheckCircle2, ShieldCheck, Workflow, BrainCircuit, ScanLine, ClipboardCheck, HeartPulse, Activity, PlugZap, MessageCircle, BarChart3 } from "lucide-react";

const DEMO = "https://calendar.app.google/gxTKawMH6Vqkky1s5";

const copy = {
  es: {
    hero: "Tecnología diseñada para transformar cada flujo clínico y operativo",
    intro: "Kumpels Core reúne inteligencia clínica, automatización y trazabilidad en un solo motor, con soluciones por especialidad para responder a los retos reales de hospitales, farmacias y clínicas especializadas.",
    coreTitle: "Un solo Core. Diferentes jornadas clínicas.",
    coreText: "Kumpels Core reúne lo que todo proceso con medicamentos necesita: pacientes, medicamentos, reglas, tareas, comunicaciones y trazabilidad. Cada solución agrega los flujos propios de su especialidad y se configura a cada institución.",
    coreClose: "La solución cambia. El motor de abajo no.",
    layers: ["Kumpels Core", "Capacidades", "Soluciones por especialidad", "Configuración de su institución"],
    capabilitiesTitle: "Capacidades del Core",
    mainCapabilities: [
      { title: "Trazabilidad del medicamento", text: "Seguimiento del medicamento por paciente desde la preparación hasta la entrega, las devoluciones y la administración, con visibilidad en tiempo real." },
      { title: "Prevención de errores de medicación", text: "Reglas clínicas y alertas priorizadas para detectar riesgos antes de que lleguen al paciente: interacciones, revisión de dosis y seguimiento de intervenciones farmacéuticas." },
    ],
    moreCapabilities: ["Orquestación de flujos", "Atención farmacéutica", "Seguimiento del paciente", "Protocolos y reglas", "Integraciones", "Tareas y comunicaciones", "Auditoría y trazabilidad", "Analítica operacional"],
    specialtyTitle: "Soluciones por especialidad",
    specialties: [
      { overline: "KUMPELS FERTILITY SUITE", title: "Gestión integral para clínicas de fertilidad", text: "Fertility Suite coordina el tratamiento de fertilidad, desde la planeación, la medicación y los procedimientos de laboratorio hasta el seguimiento clínico. Toda la información permanece conectada y disponible en tiempo real para el equipo médico y la paciente.", text2: "Incluye una gestión especializada del inventario con lotes, vencimientos, cadena de frío y reglas FIFO y FEFO, para que cada medicamento e insumo esté disponible y trazable.", captions: ["Trazabilidad completa del tratamiento", "Inventario inteligente y cadena de frío"], subtitle: "Control total sobre el tratamiento y los recursos", features: ["Trazabilidad completa del tratamiento", "Seguimiento de laboratorio y procedimientos", "Gestión de medicamentos e insumos", "Control de lotes, FIFO y FEFO", "Monitoreo de cadena de frío", "Información en tiempo real para el equipo clínico"], screenshot: "/images/fertility-02.png", photo: "/images/fondo3.png" },
      { overline: "KUMPELS ONCOLOGÍA", title: "El tratamiento continúa entre ciclos", text: "Oncología acompaña al paciente más allá de la dispensación y la administración: conecta el inicio de cada ciclo, el tratamiento, el seguimiento en casa y el siguiente ciclo, para que el equipo priorice a quienes más lo necesitan.", text2: "Permite detectar a tiempo la no adherencia, la toxicidad o las interrupciones, y escalar cada caso al equipo con contexto.", captions: ["Seguimiento entre ciclos", "Priorización de pacientes por riesgo"], subtitle: "Seguimiento farmacoterapéutico remoto orientado por riesgos", features: ["Revisión clínica de cada ciclo", "Seguimiento de terapias orales e infusión", "Acompañamiento del paciente en casa", "Detección de no adherencia y toxicidad", "Priorización de casos por riesgo", "Escalamiento al equipo con contexto"], screenshot: "/images/community-01.png", photo: "/images/fondo4.png" },
      { overline: "KUMPELS SEGUIMIENTO EXTRAHOSPITALARIO", title: "Seguimiento inteligente para pacientes fuera del hospital", text: "Conecta a los pacientes con sus equipos de salud mediante una plataforma de seguimiento extrahospitalario centrada en el paciente: de la prescripción a la continuidad del tratamiento crónico, con comunicación clínica y acompañamiento durante todo el proceso.", text2: "Los profesionales mantienen contacto permanente con sus pacientes, resuelven dudas, gestionan eventos adversos y fortalecen la adherencia desde una interfaz unificada.", captions: ["Acompañamiento continuo al paciente", "Conexión directa con el equipo de salud"], subtitle: "Pacientes conectados durante todo su tratamiento", features: ["Seguimiento extrahospitalario", "Comunicación paciente-profesional", "Reporte de eventos adversos", "Resolución de dudas clínicas", "Seguimiento a la medicación", "Monitoreo de la adherencia"], screenshot: "/images/community-02.png", photo: "/images/fondo2.png" },
    ],
    techTitle: "Tecnología construida para integrarse al sector salud",
    techIntro: "Cada solución comparte una arquitectura pensada para integrarse, proteger la información y crecer junto a las instituciones.",
    principles: [
      { title: "Interoperabilidad", text: "Diseñamos soluciones capaces de integrarse con los sistemas existentes de cada institución, usando estándares de la industria como HL7 y FHIR." },
      { title: "Seguridad y privacidad", text: "Protegemos la información clínica mediante controles, roles y prácticas orientadas a la confidencialidad." },
      { title: "Escalabilidad", text: "Nuestra arquitectura permite crecer desde pilotos controlados hasta implementaciones institucionales." },
      { title: "Tecnología modular", text: "Una arquitectura modular: cada institución activa solo los componentes que necesita." },
    ],
    closingTitle: "Conoce cómo Kumpels puede integrarse a tu institución",
    closingText: "Agenda una demostración y revisemos juntos los retos clínicos y operativos de tu organización.",
    book: "Agendar demo", request: "Solicitar demo", contact: "Contáctanos",
    imageNote: "Imagen referencial de la plataforma Kumpels Core",
  },
  en: {
    hero: "Technology designed to transform every clinical and operational workflow",
    intro: "Kumpels Core brings clinical intelligence, automation, and traceability together in one engine, with specialty-specific solutions that address the real challenges of hospitals, pharmacies, and specialized clinics.",
    coreTitle: "One Core. Different clinical journeys.",
    coreText: "Kumpels Core brings together everything a medication-intensive process needs: patients, medications, rules, tasks, communications, and traceability. Each solution adds specialty-specific workflows and is configured for each institution.",
    coreClose: "The solution changes. The underlying engine does not.",
    layers: ["Kumpels Core", "Capabilities", "Specialty solutions", "Your institution’s configuration"],
    capabilitiesTitle: "Core capabilities",
    mainCapabilities: [
      { title: "Medication traceability", text: "Patient-level medication tracking from preparation through delivery, returns, and administration, with real-time visibility." },
      { title: "Medication error prevention", text: "Clinical rules and prioritized alerts to identify risks before they reach patients: interactions, dose review, and follow-up on pharmacists’ interventions." },
    ],
    moreCapabilities: ["Workflow orchestration", "Pharmaceutical care", "Patient follow-up", "Protocols and rules", "Integrations", "Tasks and communications", "Audit and traceability", "Operational analytics"],
    specialtyTitle: "Specialty solutions",
    specialties: [
      { overline: "KUMPELS FERTILITY SUITE", title: "End-to-end management for fertility clinics", text: "Fertility Suite coordinates fertility treatment, from planning, medication, and laboratory procedures through clinical follow-up. Information stays connected and available in real time to the medical team and the patient.", text2: "It includes specialized inventory management covering batches, expiration dates, cold-chain monitoring, and FIFO and FEFO rules, so every medication and supply can be available and traceable.", captions: ["Complete treatment traceability", "Smart inventory and cold-chain management"], subtitle: "Full control over treatments and resources", features: ["Complete treatment traceability", "Laboratory and procedure tracking", "Medication and supply management", "Batch tracking, FIFO and FEFO", "Cold-chain monitoring", "Real-time information for clinical teams"], screenshot: "/images/fertility-02.png", photo: "/images/fondo3.png" },
      { overline: "KUMPELS ONCOLOGY", title: "Treatment continues between cycles", text: "Oncology supports patients beyond dispensing and administration: it connects the start of each cycle, treatment, at-home follow-up, and the next cycle, helping care teams prioritize those who need them most.", text2: "It helps detect nonadherence, toxicity, or treatment interruptions early and escalate each case to the team with the right context.", captions: ["Follow-up between cycles", "Risk-based patient prioritization"], subtitle: "Risk-based remote pharmacotherapy follow-up", features: ["Clinical review of every cycle", "Oral therapy and infusion follow-up", "At-home patient support", "Detection of nonadherence and toxicity", "Risk-based case prioritization", "Context-rich escalation to care teams"], screenshot: "/images/community-01.png", photo: "/images/fondo4.png" },
      { overline: "KUMPELS OUT-OF-HOSPITAL FOLLOW-UP", title: "Smart follow-up for patients beyond the hospital", text: "Connects patients with their care teams through a patient-centered out-of-hospital follow-up platform: from prescription through continuity of chronic treatment, with clinical communication and support throughout the journey.", text2: "Healthcare professionals stay in touch with patients, answer questions, manage adverse events, and strengthen adherence through one unified interface.", captions: ["Continuous patient support", "Direct connection with the care team"], subtitle: "Patients connected throughout their treatment", features: ["Out-of-hospital follow-up", "Patient–professional communication", "Adverse event reporting", "Answers to clinical questions", "Medication follow-up", "Adherence monitoring"], screenshot: "/images/community-02.png", photo: "/images/fondo2.png" },
    ],
    techTitle: "Technology built to integrate with healthcare",
    techIntro: "Every solution shares an architecture designed to integrate, protect information, and scale with healthcare institutions.",
    principles: [
      { title: "Interoperability", text: "We design solutions capable of integrating with each institution’s existing systems, using industry standards such as HL7 and FHIR." },
      { title: "Security and privacy", text: "We protect clinical information through controls, roles, and practices focused on confidentiality." },
      { title: "Scalability", text: "Our architecture supports growth from controlled pilots to institution-wide implementations." },
      { title: "Modular technology", text: "A modular architecture: each institution activates only the components it needs." },
    ],
    closingTitle: "Discover how Kumpels can integrate with your institution",
    closingText: "Schedule a demo and let’s explore your organization’s clinical and operational challenges together.",
    book: "Schedule a demo", request: "Request a demo", contact: "Contact us",
    imageNote: "Illustrative image of the Kumpels Core platform",
  },
} as const;

const smallIcons = [Workflow, HeartPulse, Activity, ClipboardCheck, PlugZap, MessageCircle, ShieldCheck, BarChart3];

export function CoreSolutionsPage({ lang }: { lang: Lang }) {
  const c = copy[lang];
  const r = routeMap[lang];
  return (
    <>
      <PageHero title={c.hero} intro={c.intro} backgroundImage="/images/fondo4.png" />

      <section className="relative overflow-hidden bg-white py-20 md:py-28">
        <div className="container-page grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <h2 className="font-display text-4xl font-black tracking-[-0.04em] text-[#071B52] md:text-5xl">{c.coreTitle}</h2>
            <div className="mt-6 flex gap-2"><span className="h-1 w-16 rounded-full bg-[#F7BA2B]"/><span className="h-1 w-9 rounded-full bg-[#0845D4]"/><span className="h-1 w-4 rounded-full bg-[#27B8FF]"/></div>
            <p className="mt-7 text-base leading-8 text-[#536174]">{c.coreText}</p>
            <p className="mt-6 text-lg font-black text-[#0845D4]">{c.coreClose}</p>
          </div>
          <div className="lg:col-span-6">
            <div className="relative rounded-[2rem] border border-[#DCE8F1] bg-gradient-to-br from-[#F0F8FF] via-white to-[#EAF7FF] p-5 shadow-soft md:p-8">
              {c.layers.map((layer, i) => (
                <div key={layer} className={`relative mx-auto mb-3 flex min-h-16 items-center justify-center rounded-xl border px-4 py-4 text-center text-sm font-extrabold shadow-sm last:mb-0 md:text-base ${i === 0 ? "border-[#0845D4] bg-[#071B52] text-white" : i === 3 ? "border-[#27B8FF]/40 bg-[#E8F8FF] text-[#071B52]" : "border-[#D7E2EC] bg-white text-[#071B52]"}`}>
                  <span className="absolute left-4 text-xs font-black opacity-45">0{i+1}</span>{layer}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F0F8FF] py-20 md:py-28">
        <div className="container-page">
          <h2 className="font-display text-4xl font-black tracking-[-0.04em] text-[#071B52] md:text-5xl">{c.capabilitiesTitle}</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {c.mainCapabilities.map((cap, i) => {
              const Icon = i === 0 ? ScanLine : BrainCircuit;
              return <article key={cap.title} className="rounded-3xl border border-[#DCE8F1] bg-white p-8 shadow-soft">
                <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0845D4]/10 text-[#0845D4]"><Icon className="h-6 w-6"/></span>
                <h3 className="font-display text-2xl font-black text-[#071B52]">{cap.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#536174]">{cap.text}</p>
              </article>;
            })}
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {c.moreCapabilities.map((cap, i) => {
              const Icon = smallIcons[i];
              return <div key={cap} className="flex items-center gap-3 rounded-xl border border-[#DCE8F1] bg-white px-4 py-4 text-sm font-semibold text-[#071B52]"><Icon className="h-5 w-5 shrink-0 text-[#0845D4]"/>{cap}</div>;
            })}
          </div>
        </div>
      </section>

      <section className="bg-white pt-20 md:pt-28">
        <div className="container-page pb-14 md:pb-20">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="font-display text-4xl font-black leading-tight tracking-[-0.04em] text-[#071B52] md:text-5xl lg:text-6xl">
              {c.specialtyTitle}
            </h2>
            <div className="mt-6 flex items-center justify-center gap-2" aria-hidden="true">
              <span className="h-1 w-12 rounded-full bg-[#0845D4]" />
              <span className="h-1 w-16 rounded-full bg-[#27B8FF]" />
              <span className="h-1 w-6 rounded-full bg-[#F7BA2B]" />
            </div>
            <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-[#66758A] md:text-lg">
              {lang === "es"
                ? "Soluciones diseñadas para responder a los desafíos de cada especialidad, conectadas por una misma plataforma inteligente."
                : "Solutions designed to address the challenges of each specialty, connected by one intelligent platform."}
            </p>
          </div>
        </div>
        {c.specialties.map((p, i) => {
          const reversed = i % 2 !== 0;
          return <article key={p.overline} className={`relative overflow-hidden ${i === 0 ? "bg-[#F0F8FF]" : i === 1 ? "bg-white" : "bg-gradient-to-br from-[#EAF7FF] via-[#F7FBFF] to-white"}`}>
            {i > 0 && <div className="container-page"><div className="h-px bg-gradient-to-r from-transparent via-[#B8D4E8] to-transparent"/></div>}
            <div className="container-page py-16 md:py-24">
              <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
                <div className={`lg:col-span-5 ${reversed ? "lg:order-2" : ""}`}>
                  <div className="flex items-center gap-3"><span className="h-px w-9 bg-[#F7BA2B]"/><p className="text-sm font-black uppercase tracking-[0.15em] text-[#0845D4]">{p.overline}</p></div>
                  <h3 className="mt-5 font-display text-4xl font-black leading-[1.08] tracking-[-0.04em] text-[#071B52] md:text-5xl">{p.title}</h3>
                  <div className="mt-6 flex gap-2"><span className="h-1 w-16 rounded-full bg-[#F7BA2B]"/><span className="h-1 w-9 rounded-full bg-[#0845D4]"/><span className="h-1 w-4 rounded-full bg-[#27B8FF]"/></div>
                  <p className="mt-7 text-base leading-8 text-[#536174]">{p.text}</p>
                  <p className="mt-4 text-base leading-8 text-[#66758A]">{p.text2}</p>
                </div>
                <div className={`lg:col-span-7 ${reversed ? "lg:order-1" : ""}`}>
                  <figure className="relative overflow-hidden rounded-2xl border border-[#D7E2EC] bg-white shadow-[0_25px_70px_rgba(7,27,82,0.14)]">
                    <div className="flex h-9 items-center gap-1.5 border-b border-[#DCE5EE] bg-[#F8FAFC] px-4"><span className="h-2 w-2 rounded-full bg-[#FF6B6B]"/><span className="h-2 w-2 rounded-full bg-[#F7BA2B]"/><span className="h-2 w-2 rounded-full bg-[#27B8FF]"/><span className="ml-3 truncate text-[10px] font-bold uppercase tracking-[0.12em] text-[#66758A]">Kumpels Core · {c.imageNote}</span></div>
                    <img src={p.screenshot} alt={c.imageNote} loading="lazy" className="h-auto w-full object-contain"/>
                  </figure>
                  <figcaption className="mt-4 text-sm font-semibold text-[#536174]">{p.captions[0]}</figcaption>
                </div>
              </div>
              <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:items-center">
                <figure className={`lg:col-span-5 ${reversed ? "lg:order-2" : ""}`}>
                  <img src={p.photo} alt={p.captions[1]} loading="lazy" className="h-56 w-full rounded-2xl object-cover shadow-soft md:h-64"/>
                  <figcaption className="mt-3 text-sm font-semibold text-[#536174]">{p.captions[1]}</figcaption>
                </figure>
                <div className={`lg:col-span-7 ${reversed ? "lg:order-1" : ""}`}>
                  <h4 className="font-display text-2xl font-black text-[#071B52] md:text-3xl">{p.subtitle}</h4>
                  <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                    {p.features.map((f) => <li key={f} className="flex items-start gap-3 rounded-xl border border-[#DCE8F1] bg-white/80 px-4 py-3 text-sm leading-6 text-[#536174] shadow-sm"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#0845D4]"/>{f}</li>)}
                  </ul>
                </div>
              </div>
              <div className="mt-10 flex justify-end"><a href={DEMO} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2 rounded-md bg-[#071B52] px-6 py-3 text-sm font-bold text-white shadow-[0_14px_35px_rgba(7,27,82,0.16)] transition hover:-translate-y-0.5 hover:bg-[#0845D4]">{c.book}<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1"/></a></div>
            </div>
          </article>;
        })}
      </section>

      <section className="relative isolate overflow-hidden bg-[#071B52] py-20 text-white md:py-28">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,rgba(8,69,212,0.35),transparent_48%,rgba(39,184,255,0.10))]"/>
        <div className="container-page relative z-10 grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="font-display text-4xl font-black leading-tight tracking-[-0.035em] md:text-5xl">{c.techTitle}</h2>
            <div className="mt-6 flex gap-2"><span className="h-1 w-20 rounded-full bg-[#F7BA2B]"/><span className="h-1 w-10 rounded-full bg-[#27B8FF]"/></div>
            <p className="mt-6 text-base leading-8 text-white/70">{c.techIntro}</p>
          </div>
          <div className="border-t border-white/20 lg:col-span-7">
            {c.principles.map((p) => <article key={p.title} className="grid gap-3 border-b border-white/20 py-7 md:grid-cols-[0.7fr_1.3fr]"><h3 className="font-display text-xl font-bold text-white">{p.title}</h3><p className="text-sm leading-7 text-white/70">{p.text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-b from-white to-[#EFF8FF] py-20">
        <div className="container-page"><div className="relative isolate overflow-hidden rounded-[2.5rem] bg-[#071B52] px-8 py-14 text-center text-white shadow-[0_35px_90px_rgba(8,69,212,0.18)] md:px-16 md:py-20">
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(110deg,rgba(8,69,212,0.42),transparent_48%,rgba(39,184,255,0.18))]"/>
          <div className="relative mx-auto max-w-4xl">
            <h2 className="font-display text-4xl font-bold leading-tight md:text-6xl">{c.closingTitle}</h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/75">{c.closingText}</p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a href={DEMO} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#27B8FF] to-[#0845D4] px-8 py-4 text-base font-bold text-white shadow-[0_18px_45px_rgba(8,69,212,.35)] transition hover:-translate-y-1">{c.request}<ArrowRight className="h-5 w-5"/></a>
              <Link to={r.contact} className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-8 py-4 text-base font-bold text-white backdrop-blur-md transition hover:-translate-y-1 hover:bg-white/20">{c.contact}</Link>
            </div>
          </div>
        </div></div>
      </section>
    </>
  );
}
