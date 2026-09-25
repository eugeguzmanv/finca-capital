"use client";

import AnimatedList from "@/components/AnimatedList";
import MagicBento from "@/components/MagicBento";
import { faqItems, transparencyCards } from "@/lib/placeholder-data";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { SectionHeading } from "@/components/ui/section-heading";

export function TransparencySection() {
  const reduced = usePrefersReducedMotion();

  return (
    <section id="transparencia" className="scroll-mt-28 bg-ink py-20 text-paper md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          kicker="Documentación"
          title="Centro de transparencia placeholder"
          tone="dark"
        />
        <p className="mt-6 max-w-2xl text-sm leading-6 text-paper/65">
          Permisos, fideicomisos, contratos publicables, registro y preguntas frecuentes. Sin documentos reales en esta fase.
        </p>
        <div className="mt-12">
          <MagicBento
            cards={transparencyCards}
            glowColor="138, 237, 250"
            enableStars={!reduced}
            enableTilt={false}
            disableAnimations={reduced}
            textAutoHide={false}
          />
        </div>
        <div className="mt-12 max-w-xl">
          <p className="mb-4 text-xs tracking-[0.18em] uppercase text-paper/40">Preguntas frecuentes</p>
          <AnimatedList
            items={faqItems}
            showGradients
            displayScrollbar={false}
            enableArrowNavigation={false}
            className="!w-full max-w-full"
          />
        </div>
      </div>
    </section>
  );
}
