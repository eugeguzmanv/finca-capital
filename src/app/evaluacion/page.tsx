"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { BrandMark } from "@/components/brand/brand-mark";
import ElasticSlider from "@/components/ElasticSlider";
import Stepper, { Step } from "@/components/Stepper";

export default function EvaluationPage() {
  const router = useRouter();
  const [term, setTerm] = useState<12 | 24 | 36>(24);
  const [step, setStep] = useState(1);

  useEffect(() => {
    if (step !== 5) return;
    const timer = window.setTimeout(() => {
      router.push("/evaluacion/gracias");
    }, 1800);
    return () => window.clearTimeout(timer);
  }, [step, router]);

  return (
    <main className="bg-paper pt-28 pb-20">
      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <BrandMark kind="icon" tone="accent" className="mb-5 h-10" />
        <p className="text-xs tracking-[0.22em] uppercase text-ink/45">Módulo de evaluación</p>
        <h1 className="font-heading mt-3 text-4xl text-ink md:text-5xl">Flujo privado placeholder</h1>
        <p className="mt-4 text-sm leading-6 text-ink/60">
          Sin resultado público. Cualquier cálculo o propuesta se entrega por un canal privado y requiere validación jurídica.
        </p>

        <div className="mt-10 rounded-3xl bg-white">
          <Stepper
            initialStep={1}
            onStepChange={setStep}
            onFinalStepCompleted={() => router.push("/evaluacion/gracias")}
            backButtonText="Atrás"
            nextButtonText={step === 5 ? "Procesando..." : "Continuar"}
            stepCircleContainerClassName="bg-white"
            contentClassName="min-h-[240px]"
            nextButtonProps={{ disabled: step === 5 }}
          >
            <Step>
              <h2 className="font-heading text-2xl">01 · Entrada</h2>
              <p className="mt-3 text-sm leading-6 text-ink/65">
                CTA desde Hero, Proyectos o cierre. Este paso solo presenta el flujo. No se muestran tasas ni rendimientos.
              </p>
            </Step>
            <Step>
              <h2 className="font-heading text-2xl">02 · Datos</h2>
              <div className="mt-5 grid gap-3">
                <input className="h-11 rounded-xl border border-ink/10 px-3" placeholder="Nombre placeholder" />
                <input className="h-11 rounded-xl border border-ink/10 px-3" placeholder="Correo placeholder" />
                <input className="h-11 rounded-xl border border-ink/10 px-3" placeholder="WhatsApp placeholder" />
                <input className="h-11 rounded-xl border border-ink/10 px-3" placeholder="Residencia placeholder" />
              </div>
            </Step>
            <Step>
              <h2 className="font-heading text-2xl">03 · Preferencias</h2>
              <p className="mt-3 text-sm text-ink/60">Capital a evaluar y plazo. El control no calcula un resultado visible.</p>
              <div className="mt-6">
                <ElasticSlider
                  startingValue={250000}
                  defaultValue={1000000}
                  maxValue={5000000}
                  isStepped
                  stepSize={50000}
                  className="w-full max-w-none"
                />
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {([12, 24, 36] as const).map((value) => (
                  <button
                    key={value}
                    type="button"
                    onClick={() => setTerm(value)}
                    className={`rounded-full px-4 py-2 text-sm ${
                      term === value ? "bg-ink text-paper" : "bg-mist text-ink"
                    }`}
                  >
                    {value} meses
                  </button>
                ))}
              </div>
            </Step>
            <Step>
              <h2 className="font-heading text-2xl">04 · Consentimiento</h2>
              <label className="mt-5 flex items-start gap-3 text-sm leading-6 text-ink/70">
                <input type="checkbox" className="mt-1" />
                Acepto el aviso de privacidad y el contacto por email o WhatsApp. Aviso informativo placeholder.
              </label>
            </Step>
            <Step>
              <h2 className="font-heading text-2xl">05 · Procesamiento</h2>
              <p className="mt-3 text-sm leading-6 text-ink/65">
                Registro placeholder, reglas internas y generación del escenario. Redirige a la página de gracias sin cifras.
              </p>
              <div className="mt-8 h-1 overflow-hidden rounded-full bg-mist">
                <div className="h-full w-2/3 animate-pulse bg-gradient-brand" />
              </div>
            </Step>
          </Stepper>
        </div>
      </div>
    </main>
  );
}
