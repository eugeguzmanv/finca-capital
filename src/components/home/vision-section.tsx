"use client";

import { SectionHeading } from "@/components/ui/section-heading";
import { TopicFlipCard } from "@/components/ui/topic-flip-card";
import { visionSlots } from "@/lib/placeholder-data";

export function VisionSection() {
  return (
    <section id="vision" className="scroll-mt-28 bg-paper py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading kicker="Nuestra visión" title="Misión, visión, valores y filosofía" />
        <p className="mt-4 max-w-2xl text-sm text-ink/55">Gire cada tarjeta para leer el texto.</p>
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {visionSlots.map((slot) => (
            <TopicFlipCard key={slot.title} title={slot.title} body={slot.body} />
          ))}
        </div>
      </div>
    </section>
  );
}
