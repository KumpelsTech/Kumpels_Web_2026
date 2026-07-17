// Centralized editable content for the Kumpels website.
// Update emails, social URLs, deck links, team names and articles here —
// no JSX hunting required.

export const company = {
  legalName: "Kumpels S.A.S.",
  brand: "Kumpels",
  email: "info@kumpels.com.co",
  city: "Bogotá D.C., Colombia",
  phone: "", // editable
};

export const social = {
  linkedin: "https://www.linkedin.com/company/kumpelssas",
  instagram: "https://www.instagram.com/kumpels.sas/",
  tiktok: "https://www.tiktok.com/@kumpelssas",
  calendly: "https://calendar.app.google/gxTKawMH6Vqkky1s5",
};

export const investorAssets = {
  deckUrl: "#", // editable: investor deck (PDF / Pitch)
  incubalabPitch: "#", // editable: IncubaLAB pitch link
};

// Partners shown on the validation strip and validation page.
// Logos rendered as text marks until image assets are provided.
export const partners = [
  { name: "Fundación Cardioinfantil / La Cardio", short: "La Cardio" },
  { name: "Hospital Universitario Nacional", short: "HUN" },
  { name: "Universidad Nacional de Colombia", short: "UNAL" },
  { name: "innovaTE UNAL", short: "innovaTE" },
  { name: "SENA / Fondo Emprender", short: "SENA" },
  { name: "VITA Fertility", short: "VITA" },
  { name: "Fertility Dreams", short: "Fertility Dreams" },
];

// Editable team — add names, roles, photos, LinkedIn links.
export const team = [
  { name: "[Founder Name]", role: "Co-fundador & CEO", linkedin: "#", area: "Founders" },
  { name: "[Co-founder Name]", role: "Co-fundador & CTO", linkedin: "#", area: "Founders" },
  { name: "[Clinical lead]", role: "Líder clínica / farmacia", linkedin: "#", area: "Clinical" },
  { name: "[Product lead]", role: "Producto y tecnología", linkedin: "#", area: "Product" },
  { name: "[Business lead]", role: "Negocio y operaciones", linkedin: "#", area: "Business" },
  { name: "[Advisor]", role: "Asesor estratégico", linkedin: "#", area: "Advisors" },
];

export type BlogArticle = {
  slug: string;
  date: string;
  author: string;
  readTime: number;
  featured: boolean;
  image: string;
  category_es: string;
  category_en: string;
  title_es: string;
  title_en: string;
  excerpt_es: string;
  excerpt_en: string;
  content_es: string[];
  content_en: string[];
};

export const articles: BlogArticle[] = [
  {
    slug: "inteligencia-artificial-seguridad-medicamentos",
    date: "2025-06-27",
    author: "Kevin Castañeda",
    readTime: 7,
    featured: true,
    image: "/images/blog/ia-seguridad-medicamentos.jpg",

    category_es: "Inteligencia artificial",
    category_en: "Artificial intelligence",

    title_es:
      "Cómo la inteligencia artificial está transformando la seguridad de los medicamentos",
    title_en:
      "How artificial intelligence is transforming medication safety",

    excerpt_es:
      "La inteligencia artificial permite analizar prescripciones, priorizar riesgos y apoyar decisiones clínicas antes de que un error llegue al paciente.",
    excerpt_en:
      "Artificial intelligence can analyze prescriptions, prioritize risk and support clinical decisions before an error reaches the patient.",

    content_es: [
      "Los errores de medicación siguen siendo uno de los desafíos más importantes para los sistemas de salud. Aunque muchos pueden prevenirse, los equipos clínicos suelen trabajar con procesos fragmentados, información distribuida y altos volúmenes de prescripciones.",
      "La inteligencia artificial puede ayudar a transformar este escenario. Un sistema de soporte a la decisión clínica puede analizar datos, identificar patrones de riesgo y priorizar los casos que requieren atención inmediata.",
      "El objetivo no es reemplazar al profesional de la salud. La tecnología debe ampliar su capacidad de análisis, reducir tareas repetitivas y permitir que concentre su experiencia en las decisiones de mayor impacto.",
      "En Kumpels trabajamos para que cada prescripción pueda ser revisada de forma oportuna, trazable y escalable. Una atención más segura comienza con mejores herramientas para quienes toman decisiones todos los días.",
    ],

    content_en: [
      "Medication errors remain one of the most important challenges facing healthcare systems. Although many can be prevented, clinical teams often work with fragmented processes, distributed information and high prescription volumes.",
      "Artificial intelligence can help transform this scenario. A clinical decision support system can analyze data, identify risk patterns and prioritize the cases requiring immediate attention.",
      "The objective is not to replace healthcare professionals. Technology should expand their analytical capacity, reduce repetitive tasks and allow them to focus their expertise on the highest-impact decisions.",
      "At Kumpels, we are working to ensure every prescription can be reviewed in a timely, traceable and scalable way. Safer care starts with better tools for those making decisions every day.",
    ],
  },

  {
    slug: "trazabilidad-medicamentos-hospitales",
    date: "2025-06-18",
    author: "Equipo Kumpels",
    readTime: 5,
    featured: true,
    image: "/images/blog/trazabilidad-hospitalaria.jpg",

    category_es: "Trazabilidad",
    category_en: "Traceability",

    title_es:
      "Por qué la trazabilidad es fundamental para una farmacia hospitalaria segura",
    title_en:
      "Why traceability is essential for a safe hospital pharmacy",

    excerpt_es:
      "Conectar la dispensación, la entrega y la administración permite reducir reprocesos, mejorar el control y proteger al paciente.",
    excerpt_en:
      "Connecting dispensing, delivery and administration helps reduce rework, improve control and protect patients.",

    content_es: [
      "El recorrido de un medicamento dentro de una institución de salud incluye múltiples puntos de transferencia. Cada cambio de responsable, ubicación o estado puede convertirse en una oportunidad de pérdida de información.",
      "La trazabilidad permite registrar qué ocurrió, cuándo ocurrió y quién participó en cada etapa. Esta visibilidad facilita la investigación de incidentes, la medición de tiempos y la identificación de oportunidades de mejora.",
      "Una solución efectiva debe integrarse con la operación real y evitar que el registro se convierta en una carga adicional para los equipos.",
      "Cuando los procesos están conectados, la institución puede mejorar la oportunidad de entrega, reducir reprocesos y tomar decisiones basadas en datos confiables.",
    ],

    content_en: [
      "The journey of a medication within a healthcare institution includes multiple handoff points. Every change in responsibility, location or status can become an opportunity for information loss.",
      "Traceability makes it possible to record what happened, when it happened and who participated at every stage. This visibility supports incident investigation, time measurement and the identification of improvement opportunities.",
      "An effective solution must integrate with real operations and prevent recordkeeping from becoming an additional burden for teams.",
      "When processes are connected, institutions can improve delivery times, reduce rework and make decisions based on reliable data.",
    ],
  },

  {
    slug: "tecnologia-equipos-clinicos",
    date: "2025-05-30",
    author: "Melisa",
    readTime: 6,
    featured: false,
    image: "/images/blog/equipos-clinicos.jpg",

    category_es: "Transformación digital",
    category_en: "Digital transformation",

    title_es:
      "La tecnología clínica funciona mejor cuando se construye junto a los profesionales",
    title_en:
      "Clinical technology works best when built alongside healthcare professionals",

    excerpt_es:
      "Comprender los flujos reales de médicos, farmacéuticos y enfermería es indispensable para diseñar soluciones útiles.",
    excerpt_en:
      "Understanding the real workflows of physicians, pharmacists and nurses is essential when designing useful solutions.",

    content_es: [
      "Una buena tecnología no comienza con una funcionalidad. Comienza con la comprensión profunda del problema y de las personas que lo enfrentan todos los días.",
      "En salud, una solución técnicamente avanzada puede fracasar si interrumpe los flujos clínicos, duplica tareas o no responde a las necesidades del equipo.",
      "Por eso, el diseño colaborativo es fundamental. Escuchar, observar, probar y ajustar permite construir herramientas que realmente aporten valor.",
      "La transformación digital no consiste únicamente en reemplazar procesos manuales. Consiste en crear formas más seguras, claras y eficientes de trabajar.",
    ],

    content_en: [
      "Good technology does not begin with a feature. It begins with a deep understanding of the problem and the people facing it every day.",
      "In healthcare, a technically advanced solution can fail if it disrupts clinical workflows, duplicates tasks or does not address team needs.",
      "Collaborative design is therefore essential. Listening, observing, testing and adjusting make it possible to build tools that provide real value.",
      "Digital transformation is not only about replacing manual processes. It is about creating safer, clearer and more efficient ways of working.",
    ],
  },
];
