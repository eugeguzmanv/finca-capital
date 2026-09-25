"use client";

import Link from "next/link";
import { BrandMark } from "@/components/brand/brand-mark";
import Magnet from "@/components/Magnet";
import SpecularButton from "@/components/SpecularButton";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

export function ClosingCta() {
  const reduced = usePrefersReducedMotion();

  return (
    <section id="cierre" className="relative overflow-hidden surface-dark py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-5 text-center md:px-8">
        <BrandMark kind="icon" tone="on-dark" className="mx-auto mb-6 h-10" />
        <p className="text-xs tracking-[0.24em] uppercase text-paper/45">Cierre</p>
        <h2 className="font-heading mt-4 text-4xl text-paper md:text-6xl">
          Última invitación placeholder
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-paper/65">
          Solicitar información o agendar una conversación. Sin resultados públicos ni cifras en esta pantalla.
        </p>
        <div className="mt-10 flex justify-center">
          {reduced ? (
            <Link
              href="/evaluacion"
              className="inline-flex rounded-full bg-paper px-8 py-3 text-sm font-medium text-ink"
            >
              Solicitar información
            </Link>
          ) : (
            <Magnet padding={48} magnetStrength={2.2}>
              <SpecularButton
                size="lg"
                tint="#8AEDFA"
                textColor="#F7F6F3"
                onClick={() => {
                  window.location.href = "/evaluacion";
                }}
              >
                Solicitar información
              </SpecularButton>
            </Magnet>
          )}
        </div>
      </div>
    </section>
  );
}
