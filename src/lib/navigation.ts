export type NavLink = {
  label: string;
  href: string;
};

export type NavGroup = {
  title: string;
  href: string;
  links: NavLink[];
};

export const primaryNav = [
  { label: "Nosotros", href: "/#nosotros" },
  { label: "Grupo Salomón", href: "/#grupo" },
  { label: "Proyectos", href: "/#proyectos" },
  { label: "Transparencia", href: "/#transparencia" },
  { label: "Historias", href: "/#historias" },
  { label: "Blog", href: "/blog" },
] as const;

export const siteMap: NavGroup[] = [
  {
    title: "Inicio",
    href: "/",
    links: [
      { label: "Presentación", href: "/#inicio" },
      { label: "Nosotros", href: "/#nosotros" },
      { label: "Grupo Salomón", href: "/#grupo" },
      { label: "Proyectos", href: "/#proyectos" },
      { label: "Historias", href: "/#historias" },
      { label: "Transparencia", href: "/#transparencia" },
      { label: "Evaluación", href: "/#evaluacion" },
      { label: "Blog", href: "/#actualidad" },
      { label: "Cierre", href: "/#cierre" },
    ],
  },
  {
    title: "Proyectos",
    href: "/#proyectos",
    links: [
      { label: "Todos los proyectos", href: "/#proyectos" },
      { label: "Amaia", href: "/proyectos/amaia-peninsular" },
      { label: "Distrito", href: "/proyectos/distrito-lahun" },
      { label: "Punta", href: "/proyectos/punta-nare" },
      { label: "Charmont", href: "/proyectos/st-charmont" },
    ],
  },
  {
    title: "Blog",
    href: "/blog",
    links: [
      { label: "Archivo", href: "/blog" },
      { label: "Origen y propósito", href: "/blog/fundacion-y-proposito" },
      { label: "Avance de obra", href: "/blog/avance-de-obra" },
      { label: "Encuentro con inversionistas", href: "/blog/encuentro-inversionistas" },
      { label: "Lectura de horizonte", href: "/blog/lectura-de-horizonte" },
      { label: "Documentos publicables", href: "/blog/documentos-publicables" },
    ],
  },
  {
    title: "Evaluación",
    href: "/evaluacion",
    links: [
      { label: "Iniciar flujo", href: "/evaluacion" },
      { label: "Confirmación", href: "/evaluacion/gracias" },
    ],
  },
  {
    title: "Legal",
    href: "/aviso-de-privacidad",
    links: [
      { label: "Aviso de privacidad", href: "/aviso-de-privacidad" },
      { label: "Términos", href: "/terminos" },
      { label: "SIPRES", href: "/#transparencia" },
    ],
  },
];

export const footerGroups = [
  {
    title: "Empresa",
    links: [
      { label: "Nosotros", href: "/#nosotros" },
      { label: "Grupo Salomón", href: "/#grupo" },
      { label: "Historias", href: "/#historias" },
    ],
  },
  {
    title: "Inversión",
    links: [
      { label: "Proyectos", href: "/#proyectos" },
      { label: "Transparencia", href: "/#transparencia" },
      { label: "Evaluación", href: "/evaluacion" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Aviso de privacidad", href: "/aviso-de-privacidad" },
      { label: "Términos", href: "/terminos" },
      { label: "SIPRES", href: "/#transparencia" },
    ],
  },
] as const;
