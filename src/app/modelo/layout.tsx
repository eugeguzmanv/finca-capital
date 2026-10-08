import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Modelo",
  description: "Proyectos, estructuración, capital, financiamiento y seguimiento.",
};

export default function ModeloLayout({ children }: { children: React.ReactNode }) {
  return children;
}
