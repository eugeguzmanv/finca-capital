export type ProjectStatus = "En desarrollo" | "En preventa" | "En obra" | "Entrega";

export type Project = {
  slug: string;
  name: string;
  sector: string;
  location: string;
  amount: string;
  status: ProjectStatus;
  participation: string;
  progress: number;
};

export type PostCategory = "Avances" | "Operaciones" | "Cierres" | "Aperturas" | "Logros";

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: PostCategory;
  date: string;
  featured?: boolean;
};

export type FinancialProduct = {
  id: string;
  name: string;
  blurb: string;
};

export type ModelStage = {
  id: string;
  number: string;
  title: string;
  lead: string;
  points: string[];
};

export const whyPillars = [
  {
    title: "Estructura",
    body: "Analizamos cada operación antes de definir su solución financiera.",
  },
  {
    title: "Flexibilidad",
    body: "Diseñamos estructuras de acuerdo con las características de cada proyecto.",
  },
  {
    title: "Transparencia",
    body: "Mantenemos claridad sobre condiciones, procesos y seguimiento.",
  },
  {
    title: "Disciplina",
    body: "Supervisamos el cumplimiento de la estructura acordada.",
  },
  {
    title: "Acompañamiento",
    body: "Nuestra relación continúa durante la operación.",
  },
] as const;

export const aboutSlots = [
  {
    title: "Historia",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placeholder de historia de la empresa hasta contar con el relato institucional validado.",
  },
  {
    title: "Qué hacemos",
    body: "Estructuramos financiamiento y soluciones de capital de acuerdo con las necesidades y características de cada proyecto.",
  },
  {
    title: "A quién atendemos",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placeholder del tipo de clientes y proyectos que atiende Finca Capital.",
  },
  {
    title: "Equipo directivo",
    body: "Lorem ipsum dolor sit amet. Nombre, cargo y trayectoria placeholder del equipo directivo.",
  },
] as const;

export const visionSlots = [
  {
    title: "Misión",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Texto placeholder de misión institucional.",
  },
  {
    title: "Visión",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Texto placeholder de visión de largo plazo.",
  },
  {
    title: "Valores",
    body: "Lorem ipsum dolor sit amet. Claridad, disciplina, acompañamiento y responsabilidad placeholder.",
  },
  {
    title: "Filosofía de trabajo",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placeholder de la filosofía de trabajo.",
  },
] as const;

export const products: FinancialProduct[] = [
  {
    id: "puente",
    name: "Crédito puente",
    blurb:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Explicación breve placeholder de esta solución financiera.",
  },
  {
    id: "mezzanine",
    name: "Crédito mezzanine",
    blurb:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Explicación breve placeholder de esta solución financiera.",
  },
  {
    id: "hipotecario",
    name: "Crédito hipotecario",
    blurb:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Explicación breve placeholder de esta solución financiera.",
  },
  {
    id: "arrendamiento",
    name: "Arrendamiento financiero",
    blurb:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Explicación breve placeholder de esta solución financiera.",
  },
  {
    id: "factoraje",
    name: "Factoraje financiero",
    blurb:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Explicación breve placeholder de esta solución financiera.",
  },
  {
    id: "fideicomiso",
    name: "Fideicomisos en garantía",
    blurb:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Explicación breve placeholder de esta solución financiera.",
  },
];

export const modelStages: ModelStage[] = [
  {
    id: "proyectos",
    number: "01",
    title: "Proyectos",
    lead: "Conocemos la oportunidad.",
    points: [
      "Analizamos el proyecto, sus características y necesidades financieras.",
      "Evaluamos su estructura, viabilidad y requerimientos de capital.",
    ],
  },
  {
    id: "estructuracion",
    number: "02",
    title: "Estructuración",
    lead: "Diseñamos la solución.",
    points: [
      "Definimos la estructura financiera adecuada para cada proyecto.",
      "Establecemos condiciones, garantías y mecanismos de la operación.",
    ],
  },
  {
    id: "capital",
    number: "03",
    title: "Capital",
    lead: "Conectamos la estructura con el capital.",
    points: [
      "Identificamos las fuentes de capital adecuadas para cada operación.",
      "Estructuramos las condiciones bajo las que participa el capital.",
    ],
  },
  {
    id: "financiamiento",
    number: "04",
    title: "Financiamiento",
    lead: "Facilitamos el acceso a los recursos.",
    points: [
      "Formalizamos la operación y habilitamos la disposición de recursos.",
      "Acompañamos su aplicación conforme a la estructura acordada.",
    ],
  },
  {
    id: "seguimiento",
    number: "05",
    title: "Seguimiento",
    lead: "Acompañamos la operación.",
    points: [
      "Damos seguimiento al uso de los recursos y al avance del proyecto.",
      "Revisamos obligaciones, condiciones y posibles desviaciones.",
    ],
  },
];

export const evolutionSteps = [
  {
    title: "Experiencia",
    body: "Construcción de conocimiento en proyectos, capital y finanzas.",
  },
  {
    title: "Especialización",
    body: "Desarrollo de estructuras financieras adaptadas a diferentes necesidades.",
  },
  {
    title: "Finca Capital",
    body: "Integración de esta experiencia en un modelo financiero especializado.",
  },
  {
    title: "Hoy",
    body: "Estructuramos soluciones y acompañamos operaciones con una visión de largo plazo.",
  },
] as const;

export const participationSteps = [
  "Evaluación",
  "Participación",
  "Ejecución",
  "Seguimiento",
  "Salida",
  "Beneficios",
] as const;

export const investorProfile = [
  {
    title: "Perfil",
    body: "Lorem ipsum dolor sit amet. Placeholder del perfil de quien explora oportunidades de capital, sin implicar captación pública.",
  },
  {
    title: "Ticket mínimo",
    body: "Lorem ipsum dolor sit amet. Cifra y condiciones placeholder pendientes de validación jurídica.",
  },
  {
    title: "Tipo de participación",
    body: "Lorem ipsum dolor sit amet. Forma de participación placeholder, sujeta a la estructura de cada operación.",
  },
  {
    title: "Beneficios",
    body: "Alineación de intereses y transparencia. Lorem ipsum dolor sit amet para el resto de beneficios pendientes.",
  },
] as const;

export const projects: Project[] = [
  {
    slug: "amaia-peninsular",
    name: "Amaia",
    sector: "Sector placeholder",
    location: "Ubicación placeholder, Mérida",
    amount: "Monto placeholder",
    status: "En obra",
    participation: "Tipo de participación placeholder",
    progress: 62,
  },
  {
    slug: "distrito-lahun",
    name: "Distrito",
    sector: "Sector placeholder",
    location: "Ubicación placeholder, Mérida",
    amount: "Monto placeholder",
    status: "En desarrollo",
    participation: "Tipo de participación placeholder",
    progress: 38,
  },
  {
    slug: "punta-nare",
    name: "Punta",
    sector: "Sector placeholder",
    location: "Ubicación placeholder, Yucatán",
    amount: "Monto placeholder",
    status: "En preventa",
    participation: "Tipo de participación placeholder",
    progress: 24,
  },
  {
    slug: "st-charmont",
    name: "Charmont",
    sector: "Sector placeholder",
    location: "Ubicación placeholder, Mérida",
    amount: "Monto placeholder",
    status: "Entrega",
    participation: "Tipo de participación placeholder",
    progress: 81,
  },
];

export const posts: Post[] = [
  {
    slug: "avance-de-obra",
    title: "Título placeholder: avance de operación",
    excerpt: "Lorem ipsum dolor sit amet. Nota sobre un avance de proyecto o estructura.",
    category: "Avances",
    date: "00 / 00 / 0000",
    featured: true,
  },
  {
    slug: "nueva-operacion",
    title: "Título placeholder: nueva operación",
    excerpt: "Lorem ipsum dolor sit amet. Apertura o incorporación de una operación.",
    category: "Operaciones",
    date: "00 / 00 / 0000",
  },
  {
    slug: "cierre-financiero",
    title: "Título placeholder: cierre financiero",
    excerpt: "Lorem ipsum dolor sit amet. Cierre de una estructura o disposición de recursos.",
    category: "Cierres",
    date: "00 / 00 / 0000",
  },
  {
    slug: "apertura-de-proyecto",
    title: "Título placeholder: apertura de proyecto",
    excerpt: "Lorem ipsum dolor sit amet. Apertura de un proyecto acompañado.",
    category: "Aperturas",
    date: "00 / 00 / 0000",
  },
  {
    slug: "logro-corporativo",
    title: "Título placeholder: logro corporativo",
    excerpt: "Lorem ipsum dolor sit amet. Nota de un logro institucional.",
    category: "Logros",
    date: "00 / 00 / 0000",
  },
];

export const trustMarks = [
  "Razón social placeholder",
  "Registros aplicables",
  "Grupo Salomón",
  "Permisos y licencias",
  "Cumplimiento normativo",
  "Fideicomisos",
];

export const transparencyCards = [
  {
    color: "#25272A",
    label: "Entidad",
    title: "Razón social",
    description: "Lorem ipsum dolor sit amet. Denominación y entidad placeholder.",
  },
  {
    color: "#25272A",
    label: "Licencias",
    title: "Registros",
    description: "Lorem ipsum dolor sit amet. Registros y licencias aplicables.",
  },
  {
    color: "#25272A",
    label: "Garantía",
    title: "Fideicomisos",
    description: "Lorem ipsum. Qué es, cómo funciona y esquema de protección placeholder.",
  },
  {
    color: "#25272A",
    label: "Archivo",
    title: "Documentación",
    description: "Aviso de privacidad, términos, formatos y políticas internas.",
  },
  {
    color: "#25272A",
    label: "Grupo",
    title: "Entidades",
    description: "Lorem ipsum dolor sit amet. Entidades con las que opera.",
  },
  {
    color: "#25272A",
    label: "Norma",
    title: "Cumplimiento",
    description: "Lorem ipsum dolor sit amet. Marco normativo placeholder.",
  },
];

export const galleryItems = [
  { image: "/placeholders/frame-1.svg", label: "Vista 01", alt: "Imagen placeholder 01" },
  { image: "/placeholders/frame-2.svg", label: "Vista 02", alt: "Imagen placeholder 02" },
  { image: "/placeholders/frame-3.svg", label: "Vista 03", alt: "Imagen placeholder 03" },
  { image: "/placeholders/frame-4.svg", label: "Vista 04", alt: "Imagen placeholder 04" },
];

export const financeNeedTypes = [
  "Crédito puente",
  "Crédito mezzanine",
  "Crédito hipotecario",
  "Arrendamiento financiero",
  "Factoraje financiero",
  "Fideicomiso en garantía",
  "Por definir",
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getPost(slug: string) {
  return posts.find((post) => post.slug === slug);
}

export function getProduct(id: string) {
  return products.find((product) => product.id === id);
}
