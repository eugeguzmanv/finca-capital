"use client";

import { BrandMark } from "@/components/brand/brand-mark";
import FadeContent from "@/components/FadeContent";
import GradientText from "@/components/GradientText";
import { PlaceholderText } from "@/components/ui/placeholder-text";
import { SectionHeading } from "@/components/ui/section-heading";

export function GroupSection() {
  return (
    <section id="grupo" className="scroll-mt-28 bg-[#efece6] py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading kicker="Respaldo corporativo" title="Relación con Grupo Salomón" />
        <FadeContent className="mt-8 max-w-2xl">
          <PlaceholderText>
            Texto placeholder sobre trayectoria, vínculo corporativo y el botón hacia el sitio oficial del grupo.
          </PlaceholderText>
        </FadeContent>
        <div className="mt-8 flex flex-wrap items-center gap-5">
          <BrandMark kind="logo" tone="accent" className="h-12" />
          <a
            href="https://www.gruposalomon.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-full border border-ink/15 px-5 py-3 text-sm font-medium text-ink"
          >
            Visitar sitio oficial placeholder
          </a>
        </div>
        <p className="mt-10 font-heading text-2xl md:text-3xl">
          <GradientText colors={["#74FCD4", "#8AEDFA", "#9089FA"]} animationSpeed={7}>
            Frase de respaldo placeholder
          </GradientText>
        </p>
      </div>
    </section>
  );
}
