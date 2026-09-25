export type ProjectStatus = "En desarrollo" | "En preventa" | "En obra" | "Entrega";

export type Project = {
  slug: string;
  name: string;
  location: string;
  status: ProjectStatus;
  progress: number;
  units: string;
  cost: string;
  projected: string;
};

export type PostCategory =
  | "Historia"
  | "Avances"
  | "Eventos"
  | "Educación"
  | "Transparencia";

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: PostCategory;
  date: string;
  featured?: boolean;
};

export type Testimonial = {
  name: string;
  relation: string;
  date: string;
  quote: string;
};

export const projects: Project[] = [
  {
    slug: "amaia-peninsular",
    name: "Proyecto 01 — Amaia",
    location: "Ubicación placeholder, Mérida",
    status: "En obra",
    progress: 62,
    units: "00 unidades",
    cost: "$ — MDP",
    projected: "$ — MDP",
  },
  {
    slug: "distrito-lahun",
    name: "Proyecto 02 — Distrito",
    location: "Ubicación placeholder, Mérida",
    status: "En desarrollo",
    progress: 38,
    units: "00 unidades",
    cost: "$ — MDP",
    projected: "$ — MDP",
  },
  {
    slug: "punta-nare",
    name: "Proyecto 03 — Punta",
    location: "Ubicación placeholder, Yucatán",
    status: "En preventa",
    progress: 24,
    units: "00 unidades",
    cost: "$ — MDP",
    projected: "$ — MDP",
  },
  {
    slug: "st-charmont",
    name: "Proyecto 04 — Charmont",
    location: "Ubicación placeholder, Mérida",
    status: "Entrega",
    progress: 81,
    units: "00 unidades",
    cost: "$ — MDP",
    projected: "$ — MDP",
  },
];

export const posts: Post[] = [
  {
    slug: "fundacion-y-proposito",
    title: "Título placeholder: origen y propósito",
    excerpt: "Resumen editorial placeholder sobre la fundación y el sentido de largo plazo.",
    category: "Historia",
    date: "00 / 00 / 0000",
    featured: true,
  },
  {
    slug: "avance-de-obra",
    title: "Título placeholder: avance de obra",
    excerpt: "Nota breve placeholder sobre el seguimiento de un desarrollo.",
    category: "Avances",
    date: "00 / 00 / 0000",
  },
  {
    slug: "encuentro-inversionistas",
    title: "Título placeholder: encuentro con inversionistas",
    excerpt: "Crónica placeholder de un evento institucional.",
    category: "Eventos",
    date: "00 / 00 / 0000",
  },
  {
    slug: "lectura-de-horizonte",
    title: "Título placeholder: lectura de horizonte",
    excerpt: "Pieza educativa placeholder sobre evaluación de plazos.",
    category: "Educación",
    date: "00 / 00 / 0000",
  },
  {
    slug: "documentos-publicables",
    title: "Título placeholder: documentos publicables",
    excerpt: "Nota placeholder sobre el centro de transparencia.",
    category: "Transparencia",
    date: "00 / 00 / 0000",
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Nombre autorizado 01",
    relation: "Relación placeholder",
    date: "00 / 0000",
    quote: "Testimonio verificable placeholder. El inversionista describe cómo evaluó y continuó la relación.",
  },
  {
    name: "Nombre autorizado 02",
    relation: "Relación placeholder",
    date: "00 / 0000",
    quote: "Testimonio verificable placeholder. Enfocado en acompañamiento y claridad de términos.",
  },
  {
    name: "Nombre autorizado 03",
    relation: "Relación placeholder",
    date: "00 / 0000",
    quote: "Testimonio verificable placeholder. Menciona continuidad y seguimiento de obra.",
  },
];

export const faqItems = [
  "Pregunta frecuente 01 — ¿Cómo se documenta una participación?",
  "Pregunta frecuente 02 — ¿Qué información se entrega de forma privada?",
  "Pregunta frecuente 03 — ¿Cómo se consultan permisos y registros?",
  "Pregunta frecuente 04 — ¿Quién acompaña el seguimiento de obra?",
];

export const trustMarks = [
  "Razón social placeholder",
  "Ficha SIPRES",
  "Grupo Salomón",
  "Centro de transparencia",
  "Contrato publicable",
  "Registro institucional",
];

export const transparencyCards = [
  {
    color: "#25272A",
    label: "01",
    title: "Permisos",
    description: "Documento placeholder de autorización institucional.",
  },
  {
    color: "#25272A",
    label: "02",
    title: "Fideicomisos",
    description: "Estructura placeholder de resguardo patrimonial.",
  },
  {
    color: "#25272A",
    label: "03",
    title: "Contratos",
    description: "Versión publicable placeholder de términos generales.",
  },
  {
    color: "#25272A",
    label: "04",
    title: "Registro",
    description: "Ficha placeholder de registro y razón social.",
  },
  {
    color: "#25272A",
    label: "05",
    title: "Visitas",
    description: "Acceso placeholder a recorridos guiados.",
  },
  {
    color: "#25272A",
    label: "06",
    title: "FAQ",
    description: "Preguntas frecuentes sobre el proceso de evaluación.",
  },
];

export const galleryItems = [
  { image: "/placeholders/frame-1.svg", label: "Vista 01", alt: "Imagen placeholder 01" },
  { image: "/placeholders/frame-2.svg", label: "Vista 02", alt: "Imagen placeholder 02" },
  { image: "/placeholders/frame-3.svg", label: "Vista 03", alt: "Imagen placeholder 03" },
  { image: "/placeholders/frame-4.svg", label: "Vista 04", alt: "Imagen placeholder 04" },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getPost(slug: string) {
  return posts.find((post) => post.slug === slug);
}
