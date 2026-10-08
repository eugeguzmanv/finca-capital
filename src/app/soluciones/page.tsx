import type { Metadata } from "next";
import Link from "next/link";
import { BrandMark } from "@/components/brand/brand-mark";
import { SolucionesTopics } from "@/components/soluciones/soluciones-topics";

export const metadata: Metadata = {
  title: "Soluciones",
  description: "Soluciones diseñadas para distintas necesidades de capital.",
};

export default function SolucionesPage() {
  return (
    <main className="bg-paper pt-28 pb-20">
      <section className="mx-auto max-w-6xl px-5 md:px-8">
        <BrandMark kind="icon" tone="accent" className="mb-5 h-10" />
        <p className="text-xs tracking-[0.22em] uppercase text-ink/45">Soluciones financieras</p>
        <h1 className="font-heading mt-3 max-w-4xl text-4xl text-ink md:text-6xl">
          Soluciones diseñadas para distintas necesidades de capital.
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-ink/65">
          Finca Capital ofrece herramientas financieras para distintas necesidades de capital. Gire cada tarjeta para
          leer la ficha. Cada explicación breve espera validación institucional.
        </p>

        <SolucionesTopics />

        <div className="mt-16 rounded-3xl bg-ink px-8 py-10 text-paper">
          <h2 className="font-heading text-3xl">¿Necesita una solución financiera?</h2>
          <p className="mt-3 max-w-xl text-sm leading-7 text-paper/65">
            Solicite financiamiento con los datos del proyecto. El escenario se entrega de forma privada.
          </p>
          <Link
            href="/evaluacion"
            className="mt-6 inline-flex rounded-full bg-paper px-6 py-3 text-sm font-medium text-ink"
          >
            Solicitar financiamiento
          </Link>
        </div>
      </section>
    </main>
  );
}
