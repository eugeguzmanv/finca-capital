"use client";

import FadeContent from "@/components/FadeContent";
import { PlaceholderMedia } from "@/components/ui/placeholder-media";
import { SectionHeading } from "@/components/ui/section-heading";

export function VideoStorySection() {
  return (
    <section className="bg-paper py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading kicker="Confianza" title="Historia en video placeholder" />
        <FadeContent className="mt-10">
          <PlaceholderMedia label="Un inversionista explica el recorrido — video placeholder" ratio="wide" />
        </FadeContent>
        <p className="mt-5 max-w-2xl text-sm leading-6 text-ink/55">
          Pie de video placeholder: cómo conoció, evaluó, eligió y continuó la relación.
        </p>
      </div>
    </section>
  );
}
