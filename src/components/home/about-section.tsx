"use client";

import { PlaceholderMedia } from "@/components/ui/placeholder-media";
import { SectionHeading } from "@/components/ui/section-heading";
import { TopicFlipCard } from "@/components/ui/topic-flip-card";
import { aboutSlots } from "@/lib/placeholder-data";

export function AboutSection() {
  return (
    <section id="identidad" className="scroll-mt-28 bg-[#efece6] py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-12 md:px-8">
        <div className="md:col-span-5">
          <SectionHeading kicker="Qué es Finca Capital" title="Historia, oficio, clientes y equipo" />
          <div className="mt-10">
            <PlaceholderMedia label="Fotografía institucional placeholder" ratio="square" />
          </div>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 md:col-span-7">
          {aboutSlots.map((slot) => (
            <TopicFlipCard key={slot.title} title={slot.title} body={slot.body} />
          ))}
        </div>
      </div>
    </section>
  );
}
