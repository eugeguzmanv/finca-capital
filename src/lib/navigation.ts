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
  { label: "Soluciones", href: "/soluciones" },
  { label: "Modelo", href: "/modelo" },
  { label: "Capital", href: "/capital" },
  { label: "Evaluación", href: "/evaluacion" },
] as const;

export const siteMap: NavGroup[] = [
  {
    title: "Inicio",
    href: "/",
    links: [
      { label: "Presentación", href: "/#inicio" },
      { label: "Nosotros", href: "/#nosotros" },
      { label: "Visión", href: "/#vision" },
      { label: "Soluciones", href: "/#soluciones" },
      { label: "Modelo", href: "/#modelo" },
      { label: "Respaldo", href: "/#respaldo" },
      { label: "Proyectos", href: "/#proyectos" },
      { label: "Capital", href: "/#capital" },
      { label: "Noticias", href: "/#noticias" },
    ],
  },
  {
    title: "Soluciones",
    href: "/soluciones",
    links: [
      { label: "Todas las soluciones", href: "/soluciones" },
      { label: "Crédito puente", href: "/soluciones#puente" },
      { label: "Crédito mezzanine", href: "/soluciones#mezzanine" },
      { label: "Crédito hipotecario", href: "/soluciones#hipotecario" },
      { label: "Arrendamiento", href: "/soluciones#arrendamiento" },
      { label: "Factoraje", href: "/soluciones#factoraje" },
      { label: "Fideicomisos", href: "/soluciones#fideicomiso" },
    ],
  },
  {
    title: "Modelo",
    href: "/modelo",
    links: [
      { label: "El modelo", href: "/modelo" },
      { label: "Proyectos", href: "/modelo#proyectos" },
      { label: "Estructuración", href: "/modelo#estructuracion" },
      { label: "Capital", href: "/modelo#capital" },
      { label: "Financiamiento", href: "/modelo#financiamiento" },
      { label: "Seguimiento", href: "/modelo#seguimiento" },
    ],
  },
  {
    title: "Capital",
    href: "/capital",
    links: [
      { label: "Oportunidades", href: "/capital" },
      { label: "Perfil", href: "/capital#perfil" },
      { label: "Participación", href: "/capital#participacion" },
      { label: "Proyectos", href: "/#proyectos" },
      { label: "Contacto capital", href: "/capital/contacto" },
    ],
  },
  {
    title: "Contacto",
    href: "/evaluacion",
    links: [
      { label: "Solicitar financiamiento", href: "/evaluacion" },
      { label: "Contacto para capital", href: "/capital/contacto" },
      { label: "Noticias", href: "/blog" },
      { label: "Aviso de privacidad", href: "/aviso-de-privacidad" },
      { label: "Términos", href: "/terminos" },
    ],
  },
];

export const footerGroups = [
  {
    title: "Empresa",
    links: [
      { label: "Nosotros", href: "/#nosotros" },
      { label: "Visión", href: "/#vision" },
      { label: "Grupo Salomón", href: "/#respaldo" },
    ],
  },
  {
    title: "Oferta",
    links: [
      { label: "Soluciones", href: "/soluciones" },
      { label: "Modelo", href: "/modelo" },
      { label: "Financiamiento", href: "/evaluacion" },
    ],
  },
  {
    title: "Capital",
    links: [
      { label: "Oportunidades", href: "/capital" },
      { label: "Proyectos", href: "/#proyectos" },
      { label: "Contacto capital", href: "/capital/contacto" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Aviso de privacidad", href: "/aviso-de-privacidad" },
      { label: "Términos", href: "/terminos" },
      { label: "Permisos", href: "/#respaldo" },
    ],
  },
] as const;
