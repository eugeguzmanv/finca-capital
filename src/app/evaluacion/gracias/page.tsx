import Link from "next/link";
import { BrandMark } from "@/components/brand/brand-mark";

export default function ThanksPage() {
  return (
    <main className="bg-paper pt-32 pb-24">
      <section className="mx-auto max-w-2xl px-5 text-center md:px-8">
        <BrandMark kind="logo" tone="accent" className="mx-auto mb-8 h-16" />
        <p className="text-xs tracking-[0.22em] uppercase text-ink/45">Confirmación</p>
        <h1 className="font-heading mt-4 text-4xl text-ink md:text-5xl">Gracias. Sin cifras en esta pantalla.</h1>
        <p className="mt-5 text-base leading-7 text-ink/65">
          El escenario se entrega de forma privada. Aquí solo confirmamos la recepción y ofrecemos agendar una conversación.
        </p>
        <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Link href="/" className="rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper">
            Volver al inicio
          </Link>
          <button
            type="button"
            className="rounded-full border border-ink/15 px-6 py-3 text-sm font-medium"
          >
            Agendar conversación placeholder
          </button>
        </div>
      </section>
    </main>
  );
}
