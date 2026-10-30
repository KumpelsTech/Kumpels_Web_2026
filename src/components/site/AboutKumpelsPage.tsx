import { Link } from "@tanstack/react-router";
import type { Lang } from "@/i18n/types";
import { routeMap } from "@/i18n/types";
import { PageHero } from "./PageHero";
import { ArrowRight, ArrowUpRight, HeartPulse, Users, ShieldCheck, BrainCircuit, Linkedin } from "lucide-react";

const DEMO = "https://calendar.app.google/gxTKawMH6Vqkky1s5";

const copy = {
  es: {
    hero: "El medicamento correcto, el paciente correcto, el momento correcto",
    intro: "Nos dedicamos a reducir los errores de medicación y garantizar que los pacientes reciban el tratamiento adecuado, de forma segura y en el momento oportuno.",
    aboutTitle: "Construimos tecnología para una atención más segura",
    aboutText: "Kumpels desarrolla soluciones tecnológicas para reducir los errores de medicación y fortalecer la seguridad del paciente dentro de las instituciones de salud. Conectamos conocimiento clínico, inteligencia artificial, trazabilidad y comprensión operativa.",
    aboutPhrase: "Seguridad del medicamento, inteligencia clínica y procesos conectados.",
    missionLabel: "Misión", visionLabel: "Visión",
    mission: "Transformamos la atención sanitaria mejorando la seguridad del paciente, optimizando los flujos de trabajo y facilitando el acceso a una mejor atención mediante tecnología de vanguardia y colaboración estratégica.",
    vision: "Convertirse en un líder mundial en la eliminación de errores de medicación y en el impulso de la innovación sanitaria, garantizando una atención más segura, rápida y fiable para cada paciente.",
    valuesTitle: "Los principios que guían nuestro trabajo",
    valuesIntro: "Nuestra cultura combina propósito, excelencia, transparencia e innovación para construir soluciones que generen un impacto real en la atención en salud.",
    values: [
      {title:"Pacientes primero, siempre", description:"Ponemos a los pacientes en el centro de cada solución, priorizando su seguridad, bienestar y acceso a mejores resultados de atención en salud de manera más rápida y oportuna."},
      {title:"Equipos excepcionales", description:"Construimos equipos alineados con nuestra misión y comprometidos con la excelencia, la responsabilidad y la comunicación honesta. Fomentamos una cultura donde la retroalimentación es abierta y cada integrante contribuye al éxito colectivo."},
      {title:"Acciones claras, propósito verdadero", description:"Nos comunicamos con honestidad y actuamos con integridad. Nuestras decisiones, procesos y compromisos son transparentes, fortaleciendo la confianza con cada aliado, cliente y miembro del equipo."},
      {title:"Soluciones inteligentes, pensamiento audaz", description:"Nos enfocamos en lo que realmente funciona, resolviendo problemas con sencillez, eficiencia y creatividad. Adoptamos la innovación continua para adaptarnos y liderar en un entorno de salud en constante evolución."},
    ],
    teamTitle: "Salud, tecnología y negocio unidos por un mismo propósito",
    teamIntro: "Somos un equipo apasionado y multidisciplinario que combina experiencia en salud, tecnología y negocios, comprometido con transformar la seguridad del medicamento y la eficiencia hospitalaria.",
    members: [
      {name:"Kevin Castañeda Villamil", role:"CEO & FOUNDER", description:"Farmacéutico y project manager. Experto en farmacia clínica, seguridad del paciente y propiedad intelectual.", image:"/images/kevin.png", linkedin:"https://www.linkedin.com/in/kevin-leonardo-castaneda-villamil/"},
      {name:"Melisa Pérez Osorio", role:"COO & CO-FOUNDER", description:"Ingeniera y diseñadora biomédica. Experta en desarrollo de productos de tecnología en salud con énfasis en seguridad del paciente.", image:"/images/melisa.jpeg", linkedin:"https://www.linkedin.com/in/mperezo/"},
      {name:"Juan José García Espinal", role:"TECH LEAD", description:"Ingeniero biomédico con experiencia desarrollando software en farmacia y como emprendedor. Lidera el desarrollo tecnológico de Kumpels.", image:"/images/juan-jose.png", linkedin:"https://www.linkedin.com/in/juan-jose-garcia-espinal-856bab28b/"},
    ],
    timelineTitle: "De una idea a una plataforma que transforma la salud",
    timeline: [
      {year:"2022",title:"Nace Kumpels",description:"Comenzamos a construir una solución para reducir los errores de medicación y mejorar los procesos hospitalarios."},
      {year:"2023",title:"Primeros productos",description:"Desarrollamos las primeras versiones de nuestras soluciones clínicas y operativas."},
      {year:"2024",title:"Validación internacional",description:"Ampliamos nuestra visión y validamos el problema junto a instituciones, profesionales y aliados internacionales."},
      {year:"2025",title:"Pilotos hospitalarios",description:"Implementamos y validamos nuestra tecnología en entornos clínicos reales."},
      {year:"2026",title:"Kumpels Core y nuevas especialidades",description:"Evolucionamos a Kumpels Core, un motor único con soluciones para fertilidad, oncología y seguimiento extrahospitalario, y nuevas oportunidades en Latinoamérica."},
    ],
    closingTitle: "Construyamos juntos una atención más segura",
    closingText: "Conversemos sobre los retos de tu institución y cómo Kumpels puede ayudarte a reducir riesgos, optimizar procesos y fortalecer la seguridad del paciente.",
    demo: "Solicitar demo", solutions: "Conocer nuestras soluciones",
  },
  en: {
    hero: "The right medication, the right patient, at the right time",
    intro: "We are dedicated to reducing medication errors and ensuring that patients receive the appropriate treatment safely and at the right time.",
    aboutTitle: "We build technology for safer care",
    aboutText: "Kumpels develops technology solutions to reduce medication errors and strengthen patient safety within healthcare institutions. We bring together clinical expertise, artificial intelligence, traceability, and operational insight.",
    aboutPhrase: "Medication safety, clinical intelligence, and connected workflows.",
    missionLabel: "Mission", visionLabel: "Vision",
    mission: "We transform healthcare by improving patient safety, optimizing workflows, and facilitating access to better care through cutting-edge technology and strategic collaboration.",
    vision: "To become a global leader in eliminating medication errors and driving healthcare innovation, ensuring safer, faster, and more reliable care for every patient.",
    valuesTitle: "The principles that guide our work",
    valuesIntro: "Our culture combines purpose, excellence, transparency, and innovation to build solutions that make a real difference in healthcare.",
    values: [
      {title:"Patients first, always",description:"We place patients at the center of every solution, prioritizing their safety, well-being, and access to better healthcare outcomes, faster and at the right time."},
      {title:"Exceptional teams",description:"We build teams aligned with our mission and committed to excellence, accountability, and honest communication. We foster a culture of open feedback, where every team member contributes to our collective success."},
      {title:"Clear actions, genuine purpose",description:"We communicate honestly and act with integrity. Our decisions, processes, and commitments are transparent, strengthening trust with every partner, client, and team member."},
      {title:"Smart solutions, bold thinking",description:"We focus on what truly works, solving problems with simplicity, efficiency, and creativity. We embrace continuous innovation to adapt and lead in an ever-evolving healthcare environment."},
    ],
    teamTitle: "Healthcare, technology, and business united by one purpose",
    teamIntro: "We are a passionate, multidisciplinary team combining expertise in healthcare, technology, and business, committed to transforming medication safety and hospital efficiency.",
    members: [
      {name:"Kevin Castañeda Villamil",role:"CEO & FOUNDER",description:"Pharmacist and project manager. Expert in clinical pharmacy, patient safety, and intellectual property.",image:"/images/kevin.png",linkedin:"https://www.linkedin.com/in/kevin-leonardo-castaneda-villamil/"},
      {name:"Melisa Pérez Osorio",role:"COO & CO-FOUNDER",description:"Biomedical engineer and designer. Expert in health technology product development with a focus on patient safety.",image:"/images/melisa.jpeg",linkedin:"https://www.linkedin.com/in/mperezo/"},
      {name:"Juan José García Espinal",role:"TECH LEAD",description:"Biomedical engineer with experience developing pharmacy software and as an entrepreneur. Leads Kumpels' technology development.",image:"/images/juan-jose.png",linkedin:"https://www.linkedin.com/in/juan-jose-garcia-espinal-856bab28b/"},
    ],
    timelineTitle: "From an idea to a platform transforming healthcare",
    timeline: [
      {year:"2022",title:"Kumpels is born",description:"We began building a solution to reduce medication errors and improve hospital processes."},
      {year:"2023",title:"First products",description:"We developed the first versions of our clinical and operational solutions."},
      {year:"2024",title:"International validation",description:"We broadened our vision and validated the problem with institutions, professionals, and international partners."},
      {year:"2025",title:"Hospital pilots",description:"We implemented and validated our technology in real clinical environments."},
      {year:"2026",title:"Kumpels Core and new specialties",description:"We evolved into Kumpels Core, a single engine with solutions for fertility, oncology, and out-of-hospital follow-up, alongside new opportunities across Latin America."},
    ],
    closingTitle: "Let's build safer care together",
    closingText: "Let's discuss your institution's challenges and how Kumpels can help reduce risks, optimize processes, and strengthen patient safety.",
    demo: "Request a demo", solutions: "Explore our solutions",
  },
} as const;

const valueIcons = [HeartPulse, Users, ShieldCheck, BrainCircuit];

export function AboutKumpelsPage({ lang }: { lang: Lang }) {
  const L = copy[lang];
  const r = routeMap[lang];
  return (
    <>
      <PageHero title={L.hero} intro={L.intro} backgroundImage="/images/fondo4.png" backgroundPosition="center" />

      {/* Qué hacemos */}
      <section className="relative overflow-hidden bg-white py-20 md:py-28">
        <div className="pointer-events-none absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-[#27B8FF]/10 blur-[120px]" />
        <div className="container-page relative z-10">
          <article className="relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] bg-[#071B52] p-8 text-white shadow-[0_30px_80px_rgba(7,27,82,0.20)] md:p-12">
            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#27B8FF]/20 blur-3xl" />
            <div className="relative">
              <h2 className="max-w-4xl font-display text-3xl font-black leading-tight md:text-5xl">{L.aboutTitle}</h2>
              <p className="mt-7 max-w-3xl text-base leading-8 text-white/80">{L.aboutText}</p>
              <div className="mt-9 h-px w-full bg-gradient-to-r from-[#27B8FF]/70 via-[#0845D4]/40 to-transparent" />
              <p className="mt-5 text-base font-bold text-[#8EEBFF]">{L.aboutPhrase}</p>
            </div>
          </article>
        </div>
      </section>

      {/* Misión y visión */}
      <section className="bg-[#F5F9FC] py-20 md:py-28">
        <div className="container-page grid gap-7 md:grid-cols-2">
          {[{label:L.missionLabel, text:L.mission}, {label:L.visionLabel, text:L.vision}].map((item, i) => (
            <article key={item.label} className="relative overflow-hidden rounded-[2rem] border border-[#DCE5EE] bg-white p-8 shadow-soft md:p-10">
              <span className={`absolute left-0 top-0 h-1.5 w-28 ${i === 0 ? "bg-[#0845D4]" : "bg-[#F7BA2B]"}`} />
              <h2 className="font-display text-3xl font-black text-[#071B52] md:text-4xl">{item.label}</h2>
              <p className="mt-6 text-base leading-8 text-[#66758A]">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Valores */}
      <section className="relative overflow-hidden bg-[#F2F8FC] py-20 md:py-28">
        <div className="container-page">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="font-display text-4xl font-black leading-tight tracking-[-0.035em] text-[#071B52] md:text-5xl">{L.valuesTitle}</h2>
            <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-[#66758A] md:text-lg">{L.valuesIntro}</p>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {L.values.map((value, index) => {
              const Icon = valueIcons[index];
              return (
                <article key={value.title} className="group relative flex min-h-[350px] flex-col overflow-hidden border border-[#D8E4ED] bg-white p-7 shadow-[0_16px_45px_rgba(7,27,82,0.055)] transition duration-300 hover:-translate-y-1 hover:border-[#27B8FF]/45 hover:shadow-[0_25px_60px_rgba(7,27,82,0.10)]">
                  <span className={`absolute right-0 top-0 h-1 w-20 ${index % 2 === 0 ? "bg-[#0845D4]" : "bg-[#F7BA2B]"}`} />
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-[#0845D4]/10 text-[#0845D4] transition group-hover:bg-[#0845D4] group-hover:text-white"><Icon className="h-6 w-6" /></span>
                  <h3 className="mt-7 font-display text-xl font-black leading-snug text-[#16213D]">{value.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-[#66758A]">{value.description}</p>
                  <div className="mt-auto pt-7"><div className="h-px w-12 bg-[#0845D4] transition-all duration-300 group-hover:w-full" /></div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Equipo */}
      <section className="relative overflow-hidden bg-white py-20 md:py-28">
        <div className="container-page">
          <div className="mx-auto max-w-5xl text-center">
            <h2 className="font-display text-4xl font-black leading-tight tracking-[-0.035em] text-[#071B52] md:text-5xl">{L.teamTitle}</h2>
            <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-[#66758A] md:text-lg">{L.teamIntro}</p>
          </div>
          <div className="mx-auto mt-14 grid max-w-6xl gap-7 md:grid-cols-3">
            {L.members.map((member, index) => (
              <article key={member.name} className="group overflow-hidden border border-[#DCE5EE] bg-white shadow-[0_20px_55px_rgba(7,27,82,0.07)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(7,27,82,0.12)]">
                <div className="relative aspect-[4/4.5] overflow-hidden bg-[#DCEAF4]">
                  <img src={member.image} alt={member.name} className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.035]" loading="lazy" />
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#071B52]/55 to-transparent" />
                  <span className={`absolute bottom-0 left-0 h-1.5 w-2/3 ${index === 1 ? "bg-[#F7BA2B]" : "bg-[#27B8FF]"}`} />
                </div>
                <div className="flex min-h-[310px] flex-col p-7">
                  <h3 className="font-display text-2xl font-black leading-tight text-[#16213D]">{member.name}</h3>
                  <p className="mt-2 text-sm font-bold uppercase tracking-[0.1em] text-[#0845D4]">{member.role}</p>
                  <p className="mt-5 text-sm leading-7 text-[#66758A]">{member.description}</p>
                  <div className="mt-auto pt-7">
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${member.name} — LinkedIn`} className="group/link inline-flex items-center gap-2 text-sm font-bold text-[#0845D4] transition hover:text-[#27B8FF]">
                      <Linkedin className="h-4 w-4" />LinkedIn<ArrowUpRight className="h-4 w-4 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Línea de tiempo */}
      <section className="relative overflow-hidden bg-[#F5F9FC] py-20 md:py-28">
        <div className="container-page">
          <h2 className="mx-auto max-w-4xl text-center font-display text-4xl font-black leading-tight tracking-[-0.035em] text-[#071B52] md:text-5xl">{L.timelineTitle}</h2>
          <div className="relative mx-auto mt-16 max-w-5xl">
            <div className="absolute bottom-0 left-[15px] top-0 w-px bg-[#CAD8E4] md:left-1/2" />
            <div className="space-y-12">
              {L.timeline.map((item, index) => (
                <article key={item.year} className="relative grid gap-6 pl-12 md:grid-cols-2 md:pl-0">
                  <span className={`absolute left-0 top-1 grid h-8 w-8 place-items-center border-4 border-white shadow md:left-1/2 md:-translate-x-1/2 ${index === L.timeline.length - 1 ? "bg-[#F7BA2B]" : "bg-[#0845D4]"}`} />
                  <div className={index % 2 === 0 ? "md:pr-14" : "md:order-2 md:pl-14"}>
                    <p className={`font-display text-3xl font-black ${index === L.timeline.length - 1 ? "text-[#F0A800]" : "text-[#0845D4]"}`}>{item.year}</p>
                    <h3 className="mt-3 font-display text-xl font-black text-[#16213D]">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-[#66758A]">{item.description}</p>
                  </div>
                  <div />
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white to-[#EFF8FF] py-20">
        <div className="container-page">
          <div className="relative isolate overflow-hidden rounded-[2.5rem] px-8 py-14 text-center text-white shadow-[0_35px_90px_rgba(8,69,212,0.18)] md:px-16 md:py-20" style={{backgroundImage:"linear-gradient(rgba(7,27,82,.85), rgba(7,27,82,.85)), url('/images/fondo4.png')",backgroundPosition:"center",backgroundSize:"cover"}}>
            <div className="relative mx-auto max-w-4xl">
              <h2 className="font-display text-4xl font-black leading-tight md:text-6xl">{L.closingTitle}</h2>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/75">{L.closingText}</p>
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <a href={DEMO} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#27B8FF] to-[#0845D4] px-8 py-4 text-base font-bold text-white shadow-[0_18px_45px_rgba(8,69,212,.35)] transition hover:-translate-y-1">{L.demo}<ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" /></a>
                <Link to={r.solutions} className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-8 py-4 text-base font-bold text-white backdrop-blur-md transition hover:-translate-y-1 hover:bg-white/20">{L.solutions}<ArrowRight className="h-5 w-5" /></Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
