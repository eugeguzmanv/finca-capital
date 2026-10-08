import type { Metadata } from "next";
import Link from "next/link";
import { BrandMark } from "@/components/brand/brand-mark";
import { CapitalProfileCards, CapitalPurposeBento } from "@/components/capital/capital-topics";
import { ProjectEvidenceCard } from "@/components/projects/project-evidence-card";
import { participationSteps, projects } from "@/lib/placeholder-data";

export const metadata: Metadata = {
  title: "Capital",
  description: "Capital con propósito estratégico. Participación estructurada por operación, sin cifras públicas.",
};

export default function CapitalPage() {
  return (
    <main className="bg-paper pt-28 pb-20">
      <section className="mx-auto max-w-6xl px-5 md:px-8">
        <BrandMark kind="icon" tone="accent" className="mb-5 h-10" />
        <p className="text-xs tracking-[0.22em] uppercase text-ink/45">Capital</p>
        <h1 className="font-heading mt-3 max-w-4xl text-4xl text-ink md:text-6xl">
          Capital con propósito estratégico
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-ink/65">
          Esta página explica el modelo de participación. No publica rendimientos ni invita a una captación general.
        </p>
      </section>

      <section className="mx-auto mt-14 max-w-6xl px-5 md:px-8">
        <CapitalPurposeBento />
      </section>

      <section id="perfil" className="mx-auto mt-20 max-w-6xl scroll-mt-28 px-5 md:px-8">
        <p className="text-xs tracking-[0.18em] uppercase text-ink/45">Perfil</p>
        <h2 className="font-heading mt-3 text-3xl text-ink md:text-5xl">Perfil de participación</h2>
        <p className="mt-3 text-sm text-ink/55">Gire cada tarjeta para leer el detalle.</p>
        <CapitalProfileCards />
      </section>

      <section id="participacion" className="mx-auto mt-20 max-w-6xl scroll-mt-28 px-5 md:px-8">
        <p className="text-xs tracking-[0.18em] uppercase text-ink/45">Modelo de participación</p>
        <h2 className="font-heading mt-3 text-3xl text-ink md:text-5xl">Seis etapas de la relación</h2>
        <ol className="mt-10 grid gap-4 md:grid-cols-3">
          {participationSteps.map((step, index) => (
            <li key={step} className="rounded-3xl bg-[#efece6] p-6">
              <p className="text-xs tracking-[0.16em] uppercase text-ink/40">0{index + 1}</p>
              <p className="font-heading mt-3 text-2xl text-ink">{step}</p>
            </li>
          ))}
        </ol>
        <p className="mt-6 text-sm text-ink/55">Beneficios mencionados: alineación de intereses y transparencia.</p>
      </section>

      <section className="mx-auto mt-20 max-w-6xl px-5 md:px-8">
        <p className="text-xs tracking-[0.18em] uppercase text-ink/45">Proyectos y oportunidades</p>
        <h2 className="font-heading mt-3 text-3xl text-ink md:text-5xl">Evidencia de operaciones</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectEvidenceCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-6xl px-5 md:px-8">
        <div className="rounded-3xl bg-ink px-8 py-10 text-paper">
          <h2 className="font-heading text-3xl">Contacto para capital</h2>
          <p className="mt-3 max-w-xl text-sm leading-7 text-paper/65">
            Ruta independiente para quienes quieren conocer oportunidades de participación.
          </p>
          <Link
            href="/capital/contacto"
            className="mt-6 inline-flex rounded-full bg-paper px-6 py-3 text-sm font-medium text-ink"
          >
            Contacto para capital
          </Link>
        </div>
      </section>
    </main>
  );
}
