"use client";

import Link from "next/link";
import FadeContent from "@/components/FadeContent";
import SpotlightCard from "@/components/SpotlightCard";
import { SectionHeading } from "@/components/ui/section-heading";
import { modelStages } from "@/lib/placeholder-data";

export function ModelPreview() {
  return (
    <section id="modelo" className="scroll-mt-28 bg-paper py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading kicker="Cómo trabaja" title="Así es como trabajamos." />
          <Link href="/modelo" className="text-sm font-medium text-ink underline-offset-4 hover:underline">
            Recorrer el modelo
          </Link>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-5">
          {modelStages.map((stage, index) => (
            <FadeContent key={stage.id} delay={index * 70}>
              <SpotlightCard
                className="h-full rounded-3xl border border-ink/8 bg-white p-0"
                spotlightColor="rgba(116, 252, 212, 0.16)"
              >
                <Link href={`/modelo#${stage.id}`} className="block h-full p-5">
                  <p className="text-xs tracking-[0.16em] uppercase text-ink/40">{stage.number}</p>
                  <h3 className="font-heading mt-3 text-xl text-ink">{stage.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-ink/65">{stage.lead}</p>
                </Link>
              </SpotlightCard>
            </FadeContent>
          ))}
        </div>
      </div>
    </section>
  );
}
