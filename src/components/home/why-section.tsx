"use client";

import { FlowingTopicList } from "@/components/ui/flowing-topic-list";
import { SectionHeading } from "@/components/ui/section-heading";
import { whyPillars } from "@/lib/placeholder-data";

export function WhySection() {
  return (
    <section id="nosotros" className="scroll-mt-28 bg-paper py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading kicker="Por qué Finca Capital" title="Cinco principios de trabajo" />
        <FlowingTopicList
          className="mt-12"
          items={whyPillars.map((pillar) => ({
            title: pillar.title,
            body: pillar.body,
          }))}
        />
      </div>
    </section>
  );
}
