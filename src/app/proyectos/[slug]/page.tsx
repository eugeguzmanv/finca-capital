import Link from "next/link";
import { notFound } from "next/navigation";
import AccordionGallery from "@/components/AccordionGallery";
import { BrandMark } from "@/components/brand/brand-mark";
import { galleryItems, getProject, projects } from "@/lib/placeholder-data";
import { PlaceholderText } from "@/components/ui/placeholder-text";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <main className="bg-paper pt-28 pb-20">
      <article className="mx-auto max-w-6xl px-5 md:px-8">
        <BrandMark kind="icon" tone="accent" className="mb-5 h-8" />
        <p className="text-xs tracking-[0.18em] uppercase text-ink/45">{project.status}</p>
        <h1 className="font-heading mt-3 text-4xl text-ink md:text-6xl">{project.name}</h1>
        <p className="mt-4 text-sm text-ink/55">{project.location}</p>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {[
            ["Unidades", project.units],
            ["Costo", project.cost],
            ["Venta proyectada", project.projected],
          ].map(([label, value]) => (
            <div key={label} className="rounded-2xl bg-white p-5">
              <p className="text-xs tracking-[0.16em] uppercase text-ink/40">{label}</p>
              <p className="font-heading mt-2 text-2xl">{value}</p>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <div className="h-1 overflow-hidden rounded-full bg-mist">
            <div className="h-full bg-gradient-brand" style={{ width: `${project.progress}%` }} />
          </div>
          <p className="mt-2 text-xs text-ink/45">Avance placeholder · {project.progress}%</p>
        </div>

        <div className="mt-12">
          <AccordionGallery
            items={galleryItems}
            accentColor="#8AEDFA"
            overlayColor="#25272A"
            height={480}
            grayscale={false}
          />
        </div>

        <div className="mt-12 max-w-2xl space-y-4">
          <PlaceholderText>
            Descripción placeholder del proyecto. Aquí se detalla ubicación, unidades y el estado de obra.
          </PlaceholderText>
          <PlaceholderText>
            Segundo bloque placeholder. Sin cifras reales ni documentos descargables en esta propuesta.
          </PlaceholderText>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/evaluacion" className="rounded-full bg-ink px-5 py-3 text-sm font-medium text-paper">
            Solicitar información
          </Link>
          <Link href="/#proyectos" className="rounded-full border border-ink/15 px-5 py-3 text-sm font-medium">
            Volver a proyectos
          </Link>
        </div>
      </article>
    </main>
  );
}
