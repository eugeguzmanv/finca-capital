import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto para capital",
  description: "Ruta independiente para conocer oportunidades de participación.",
};

export default function CapitalContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
