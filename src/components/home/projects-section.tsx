"use client";

import Link from "next/link";
import GlareHover from "@/components/GlareHover";
import SpotlightCard from "@/components/SpotlightCard";
import { projects } from "@/lib/placeholder-data";
import { PlaceholderMedia } from "@/components/ui/placeholder-media";
import { SectionHeading } from "@/components/ui/section-heading";

export function ProjectsSection() {
  return (
    <section id="proyectos" className="scroll-mt-28 bg-paper py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading kicker="Evidencia" title="Proyectos en ficha placeholder" />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <SpotlightCard
              key={project.slug}
              className="overflow-hidden rounded-3xl border border-ink/8 bg-white p-0"
              spotlightColor="rgba(138, 237, 250, 0.18)"
            >
              <GlareHover
                width="100%"
                height="auto"
                background="transparent"
                borderColor="transparent"
                glareColor="#8AEDFA"
                glareOpacity={0.18}
                className="block"
              >
                <Link href={`/proyectos/${project.slug}`} className="block p-4 md:p-5">
                  <PlaceholderMedia label={`Portada ${project.name}`} ratio="wide" className="rounded-2xl" />
                  <div className="mt-5 flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs tracking-[0.16em] uppercase text-ink/45">{project.status}</p>
                      <h3 className="font-heading mt-2 text-2xl text-ink">{project.name}</h3>
                      <p className="mt-2 text-sm text-ink/60">{project.location}</p>
                    </div>
                    <span className="rounded-full bg-mist px-3 py-1 text-xs text-ink/60">
                      {project.progress}%
                    </span>
                  </div>
                  <div className="mt-5 h-1 overflow-hidden rounded-full bg-mist">
                    <div
                      className="h-full bg-gradient-brand"
                      style={{ width: `${project.progress}%` }}
                    />
                  </div>
                </Link>
              </GlareHover>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}
