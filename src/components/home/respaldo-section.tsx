"use client";

import { BrandMark } from "@/components/brand/brand-mark";
import FadeContent from "@/components/FadeContent";
import GradientText from "@/components/GradientText";
import MagicBento from "@/components/MagicBento";
import { SectionHeading } from "@/components/ui/section-heading";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { evolutionSteps, transparencyCards } from "@/lib/placeholder-data";

export function RespaldoSection() {
  const reduced = usePrefersReducedMotion();

  return (
    <section id="respaldo" className="scroll-mt-28 bg-ink py-20 text-paper md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading kicker="Qué la respalda" title="Evolución, grupo y permisos" tone="dark" />

        <div className="mt-12 grid gap-4 md:grid-cols-4">
          {evolutionSteps.map((step, index) => (
            <FadeContent key={step.title} delay={index * 70}>
              <article className="h-full rounded-3xl border border-white/10 bg-white/4 p-6">
                <p className="text-xs tracking-[0.16em] uppercase text-paper/40">0{index + 1}</p>
                <h3 className="font-heading mt-3 text-2xl text-paper">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-paper/65">{step.body}</p>
              </article>
            </FadeContent>
          ))}
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="text-xs tracking-[0.18em] uppercase text-paper/40">Grupo Salomón</p>
            <p className="mt-4 max-w-2xl text-base leading-7 text-paper/75">
              Finca Capital forma parte de Grupo Salomón, integrando su experiencia empresarial con una visión
              especializada en soluciones financieras y estructuración de capital.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <BrandMark kind="logo" tone="on-dark" className="h-12" />
              <a
                href="https://www.gruposalomon.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-full border border-white/20 px-5 py-3 text-sm font-medium text-paper"
              >
                Grupo Salomón → Conoce nuestra historia
              </a>
            </div>
            <div className="mt-8 font-heading text-2xl md:text-3xl">
              <GradientText colors={["#74FCD4", "#8AEDFA", "#9089FA"]} animationSpeed={7}>
                Experiencia empresarial, modelo financiero especializado.
              </GradientText>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <p className="mb-6 text-xs tracking-[0.18em] uppercase text-paper/40">Permisos y registros</p>
          <MagicBento
            cards={transparencyCards}
            glowColor="138, 237, 250"
            enableStars={!reduced}
            enableTilt={false}
            disableAnimations={reduced}
            textAutoHide={false}
          />
        </div>
      </div>
    </section>
  );
}
