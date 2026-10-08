"use client";

import Link from "next/link";
import { BrandMark } from "@/components/brand/brand-mark";
import Iridescence from "@/components/Iridescence";
import Magnet from "@/components/Magnet";
import Noise from "@/components/Noise";
import SplitText from "@/components/SplitText";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

const headline =
  "Conectamos proyectos y capital mediante estructuras financieras claras y estratégicas.";

export function HeroSection() {
  const reduced = usePrefersReducedMotion();

  return (
    <section id="inicio" className="relative isolate min-h-screen overflow-hidden surface-dark">
      {!reduced ? (
        <div className="absolute inset-0 opacity-55">
          <Iridescence color={[0.46, 0.93, 0.83]} speed={0.45} amplitude={0.08} mouseReact />
        </div>
      ) : null}
      <div className="absolute inset-0 bg-[#25272A]/78" />
      {!reduced ? <Noise patternAlpha={12} /> : null}

      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col justify-end px-5 pt-28 pb-16 md:justify-center md:px-8 md:pt-32">
        <BrandMark kind="icon" tone="on-dark" className="mb-6 h-10" />
        <p className="mb-5 text-xs tracking-[0.28em] uppercase text-paper/55">Finca Capital</p>
        {reduced ? (
          <h1 className="font-heading max-w-5xl text-3xl leading-tight text-paper md:text-6xl">{headline}</h1>
        ) : (
          <SplitText
            text={headline}
            tag="h1"
            className="font-heading max-w-5xl text-left text-3xl leading-tight text-paper md:text-6xl"
            textAlign="left"
            splitType="words"
            delay={40}
          />
        )}
        <p className="mt-6 max-w-xl text-base leading-7 text-paper/70 md:text-lg">
          Estructuramos financiamiento y soluciones de capital de acuerdo con las necesidades y características de cada
          proyecto.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
          <Magnet padding={40} magnetStrength={3} disabled={reduced}>
            <Link
              href="/evaluacion"
              className="inline-flex items-center justify-center rounded-full bg-paper px-6 py-3 text-sm font-medium text-ink"
            >
              Solicitar financiamiento
            </Link>
          </Magnet>
          <Link
            href="/capital"
            className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-paper"
          >
            Conocer nuestras oportunidades
          </Link>
        </div>
      </div>
    </section>
  );
}
