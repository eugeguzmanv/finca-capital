import Link from "next/link";
import { BrandMark } from "@/components/brand/brand-mark";

export default function CapitalThanksPage() {
  return (
    <main className="bg-paper pt-32 pb-24">
      <section className="mx-auto max-w-2xl px-5 text-center md:px-8">
        <BrandMark kind="logo" tone="accent" className="mx-auto mb-8 h-16" />
        <p className="text-xs tracking-[0.22em] uppercase text-ink/45">Confirmación</p>
        <h1 className="font-heading mt-4 text-4xl text-ink md:text-5xl">Recibimos su interés en capital.</h1>
        <p className="mt-5 text-base leading-7 text-ink/65">
          La conversación continúa en privado. Esta pantalla no muestra cifras, tickets ni rendimientos.
        </p>
        <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Link href="/" className="rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper">
            Volver al inicio
          </Link>
          <Link href="/capital" className="rounded-full border border-ink/15 px-6 py-3 text-sm font-medium">
            Volver a capital
          </Link>
        </div>
      </section>
    </main>
  );
}
