import Link from "next/link";
import GlareHover from "@/components/GlareHover";
import SpotlightCard from "@/components/SpotlightCard";
import { PlaceholderMedia } from "@/components/ui/placeholder-media";
import type { Project } from "@/lib/placeholder-data";

const fields = (project: Project) =>
  [
    ["Sector", project.sector],
    ["Ubicación", project.location],
    ["Monto", project.amount],
    ["Estatus", project.status],
    ["Participación", project.participation],
  ] as const;

export function ProjectEvidenceCard({ project }: { project: Project }) {
  return (
    <SpotlightCard
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
          <p className="mt-5 text-xs tracking-[0.16em] uppercase text-ink/45">{project.status}</p>
          <h3 className="font-heading mt-2 text-2xl text-ink">{project.name}</h3>
          <dl className="mt-5 grid gap-3 sm:grid-cols-2">
            {fields(project).map(([label, value]) => (
              <div key={label}>
                <dt className="text-[11px] tracking-[0.14em] uppercase text-ink/40">{label}</dt>
                <dd className="mt-1 text-sm text-ink/75">{value}</dd>
              </div>
            ))}
          </dl>
        </Link>
      </GlareHover>
    </SpotlightCard>
  );
}
