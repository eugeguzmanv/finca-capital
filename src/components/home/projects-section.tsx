"use client";

import { ProjectEvidenceCard } from "@/components/projects/project-evidence-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { projects } from "@/lib/placeholder-data";

export function ProjectsSection() {
  return (
    <section id="proyectos" className="scroll-mt-28 bg-paper py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading kicker="Qué experiencia tiene" title="Proyectos como evidencia de capacidad" />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectEvidenceCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
