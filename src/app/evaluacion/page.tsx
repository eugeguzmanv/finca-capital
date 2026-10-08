"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { BrandMark } from "@/components/brand/brand-mark";
import Stepper, { Step } from "@/components/Stepper";
import { financeNeedTypes } from "@/lib/placeholder-data";

export default function EvaluationPage() {
  const router = useRouter();
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
        <p className="text-xs tracking-[0.22em] uppercase text-ink/45">Solicitar financiamiento</p>
        <h1 className="font-heading mt-3 text-4xl text-ink md:text-5xl">Para proyectos que necesitan una solución financiera</h1>
        <p className="mt-4 text-sm leading-6 text-ink/60">
          El formulario reúne empresa, proyecto, ubicación, tipo de necesidad, monto aproximado y contacto. Cualquier
          propuesta se entrega por un canal privado.
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
              <h2 className="font-heading text-2xl">01 · Necesidad</h2>
              <p className="mt-3 text-sm leading-6 text-ink/65">
                Esta ruta es para estructurar financiamiento. No calcula un resultado público ni muestra rendimientos.
              </p>
            </Step>
            <Step>
              <h2 className="font-heading text-2xl">02 · Empresa y proyecto</h2>
              <div className="mt-5 grid gap-3">
                <input className="h-11 rounded-xl border border-ink/10 px-3" placeholder="Empresa" />
                <input className="h-11 rounded-xl border border-ink/10 px-3" placeholder="Proyecto" />
                <input className="h-11 rounded-xl border border-ink/10 px-3" placeholder="Ubicación" />
              </div>
            </Step>
            <Step>
              <h2 className="font-heading text-2xl">03 · Tipo de necesidad</h2>
              <p className="mt-3 text-sm text-ink/60">Seleccione la herramienta más cercana y un monto aproximado.</p>
              <div className="mt-5 grid gap-3">
                <select defaultValue="" className="h-11 rounded-xl border border-ink/10 bg-white px-3">
                  <option value="" disabled>
                    Tipo de necesidad
                  </option>
                  {financeNeedTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
                <input className="h-11 rounded-xl border border-ink/10 px-3" placeholder="Monto aproximado" />
              </div>
            </Step>
            <Step>
              <h2 className="font-heading text-2xl">04 · Contacto</h2>
              <div className="mt-5 grid gap-3">
                <input className="h-11 rounded-xl border border-ink/10 px-3" placeholder="Nombre" />
                <input className="h-11 rounded-xl border border-ink/10 px-3" placeholder="Correo" />
                <input className="h-11 rounded-xl border border-ink/10 px-3" placeholder="Teléfono o WhatsApp" />
              </div>
              <label className="mt-5 flex items-start gap-3 text-sm leading-6 text-ink/70">
                <input type="checkbox" className="mt-1" />
                Acepto el aviso de privacidad y el contacto por email o WhatsApp. Aviso informativo placeholder.
              </label>
            </Step>
            <Step>
              <h2 className="font-heading text-2xl">05 · Recepción</h2>
              <p className="mt-3 text-sm leading-6 text-ink/65">
                Registro placeholder. La conversación y cualquier escenario se entregan de forma privada.
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
