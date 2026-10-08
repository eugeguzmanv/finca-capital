"use client";

import Link from "next/link";
import { BrandMark } from "@/components/brand/brand-mark";
import Magnet from "@/components/Magnet";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

export function ClosingCta() {
  const reduced = usePrefersReducedMotion();

  return (
    <section id="cierre" className="relative overflow-hidden surface-dark py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <BrandMark kind="icon" tone="on-dark" className="mb-6 h-10" />
        <p className="text-xs tracking-[0.24em] uppercase text-paper/45">Cómo contactarla</p>
        <h2 className="font-heading mt-4 max-w-3xl text-4xl text-paper md:text-6xl">Dos rutas, según la necesidad</h2>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          <article className="rounded-3xl border border-white/10 bg-white/4 p-8">
            <p className="text-xs tracking-[0.16em] uppercase text-paper/45">Financiamiento</p>
            <h3 className="font-heading mt-3 text-3xl text-paper">Solicitar financiamiento</h3>
            <p className="mt-4 text-sm leading-7 text-paper/65">
              Para proyectos que necesitan una solución financiera. Empresa, proyecto, ubicación, tipo de necesidad y
              monto aproximado.
            </p>
            {reduced ? (
              <Link
                href="/evaluacion"
                className="mt-8 inline-flex rounded-full bg-paper px-6 py-3 text-sm font-medium text-ink"
              >
                Solicitar financiamiento
              </Link>
            ) : (
              <Magnet padding={36} magnetStrength={2.2} className="mt-8 inline-flex">
                <Link
                  href="/evaluacion"
                  className="inline-flex rounded-full bg-paper px-6 py-3 text-sm font-medium text-ink"
                >
                  Solicitar financiamiento
                </Link>
              </Magnet>
            )}
          </article>
          <article className="rounded-3xl border border-white/10 bg-white/4 p-8">
            <p className="text-xs tracking-[0.16em] uppercase text-paper/45">Capital</p>
            <h3 className="font-heading mt-3 text-3xl text-paper">Conocer nuestras oportunidades</h3>
            <p className="mt-4 text-sm leading-7 text-paper/65">
              Ruta independiente para quienes quieren conocer oportunidades de participación. Sin cifras públicas.
            </p>
            <Link
              href="/capital/contacto"
              className="mt-8 inline-flex rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-paper"
            >
              Contacto para capital
            </Link>
          </article>
        </div>
      </div>
    </section>
  );
}
