"use client";

import Link from "next/link";
import { BrandMark } from "@/components/brand/brand-mark";
import ScrollStack, { ScrollStackItem } from "@/components/ScrollStack";
import { modelStages } from "@/lib/placeholder-data";

export default function ModeloPage() {
  return (
    <main className="bg-[#efece6] pt-28 pb-24">
      <section className="mx-auto max-w-3xl px-5 md:px-8">
        <BrandMark kind="icon" tone="accent" className="mb-5 h-10" />
        <p className="text-xs tracking-[0.22em] uppercase text-ink/45">Nuestro modelo</p>
        <h1 className="font-heading mt-3 text-4xl text-ink md:text-6xl">
          Analiza, estructura, conecta capital, financia y da seguimiento.
        </h1>
        <p className="mt-5 text-base leading-7 text-ink/65">
          Así es como trabajamos.
        </p>
      </section>

      <section className="mx-auto mt-12 max-w-3xl px-5 pb-32 md:px-8">
        <ScrollStack>
          {modelStages.map((stage) => (
            <ScrollStackItem key={stage.id}>
              <article id={stage.id} className="scroll-mt-28">
                <p className="text-xs tracking-[0.18em] uppercase text-ink/40">{stage.number}</p>
                <h2 className="font-heading mt-3 text-4xl text-ink">{stage.title}</h2>
                <p className="mt-4 text-lg text-ink/80">{stage.lead}</p>
                <ul className="mt-6 space-y-3 text-sm leading-7 text-ink/65">
                  {stage.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            </ScrollStackItem>
          ))}
        </ScrollStack>
      </section>

      <section className="mx-auto max-w-3xl px-5 md:px-8">
        <div className="rounded-3xl bg-ink px-8 py-10 text-paper">
          <h2 className="font-heading text-3xl">Siguiente paso</h2>
          <p className="mt-3 text-sm leading-7 text-paper/65">
            Si el proyecto necesita estructura, solicite financiamiento. Si busca participación, use la ruta de capital.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/evaluacion" className="rounded-full bg-paper px-6 py-3 text-sm font-medium text-ink">
              Solicitar financiamiento
            </Link>
            <Link
              href="/capital/contacto"
              className="rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-paper"
            >
              Contacto para capital
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
