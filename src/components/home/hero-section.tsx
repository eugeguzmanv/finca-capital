"use client";

import Link from "next/link";
import { BrandMark } from "@/components/brand/brand-mark";
import Iridescence from "@/components/Iridescence";
import Magnet from "@/components/Magnet";
import Noise from "@/components/Noise";
import SplitText from "@/components/SplitText";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

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
        <p className="mb-5 text-xs tracking-[0.28em] uppercase text-paper/55">
          Mensaje principal placeholder
        </p>
        {reduced ? (
          <h1 className="font-heading max-w-4xl text-4xl leading-tight text-paper md:text-7xl">
            Titular placeholder sobre capital y legado
          </h1>
        ) : (
          <SplitText
            text="Titular placeholder sobre capital y legado"
            tag="h1"
            className="font-heading max-w-4xl text-left text-4xl leading-tight text-paper md:text-7xl"
            textAlign="left"
            splitType="words"
            delay={40}
          />
        )}
        <p className="mt-6 max-w-xl text-base leading-7 text-paper/70 md:text-lg">
          Párrafo placeholder. El video de presentación y las cifras reales se incorporan en una fase posterior.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
          <Magnet padding={40} magnetStrength={3} disabled={reduced}>
            <Link
              href="/evaluacion"
              className="inline-flex items-center justify-center rounded-full bg-paper px-6 py-3 text-sm font-medium text-ink"
            >
              CTA primario placeholder
            </Link>
          </Magnet>
          <Link
            href="#proyectos"
            className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-paper"
          >
            CTA secundario placeholder
          </Link>
        </div>

        <div className="mt-14 max-w-xl overflow-hidden rounded-3xl border border-white/10 bg-black/25">
          <div className="aspect-video">
            <div className="flex h-full flex-col items-center justify-center gap-3 bg-[linear-gradient(135deg,#1b1d20,#33383e)]">
              <BrandMark kind="icon" tone="on-dark" alt="" className="h-8 opacity-80" />
              <p className="text-sm tracking-wide text-paper/60">Video con portada placeholder</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
