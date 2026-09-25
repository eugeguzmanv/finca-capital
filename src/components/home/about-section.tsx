"use client";

import FadeContent from "@/components/FadeContent";
import { PlaceholderMedia } from "@/components/ui/placeholder-media";
import { PlaceholderText } from "@/components/ui/placeholder-text";
import { SectionHeading } from "@/components/ui/section-heading";

export function AboutSection() {
  return (
    <section id="nosotros" className="scroll-mt-28 bg-paper py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-12 md:px-8">
        <div className="md:col-span-6">
          <SectionHeading kicker="Identidad" title="Quiénes somos, en versión placeholder" />
          <FadeContent duration={900} className="mt-8 space-y-5">
            <PlaceholderText>
              Introducción breve placeholder. Propósito, forma de trabajo y acompañamiento institucional.
            </PlaceholderText>
            <PlaceholderText>
              Segundo párrafo placeholder. Aquí irá la misión y la manera en que se construye un legado.
            </PlaceholderText>
          </FadeContent>
        </div>
        <div className="relative md:col-span-6">
          <PlaceholderMedia label="Fotografía institucional placeholder" ratio="square" />
        </div>
      </div>
    </section>
  );
}
