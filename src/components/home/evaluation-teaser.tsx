"use client";

import Link from "next/link";
import Magnet from "@/components/Magnet";
import { SectionHeading } from "@/components/ui/section-heading";

export function EvaluationTeaser() {
  return (
    <section id="evaluacion" className="scroll-mt-28 bg-paper py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading kicker="Conversión" title="Módulo de evaluación, sin cifras públicas" />
        <p className="mt-6 max-w-2xl text-base leading-7 text-ink/70">
          Formulario y calculadora unidos en un flujo de varios pasos. El resultado no se muestra en el sitio: se entrega de forma privada.
        </p>
        <Magnet padding={32} magnetStrength={2.4} className="mt-8">
          <Link
            href="/evaluacion"
            className="inline-flex rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper"
          >
            Iniciar evaluación placeholder
          </Link>
        </Magnet>
      </div>
    </section>
  );
}
