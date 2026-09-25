import { BrandMark } from "@/components/brand/brand-mark";
import { PlaceholderText } from "@/components/ui/placeholder-text";

export default function TermsPage() {
  return (
    <main className="bg-paper pt-28 pb-20">
      <article className="mx-auto max-w-3xl px-5 md:px-8">
        <BrandMark kind="icon" tone="on-light" className="mb-6 h-9" />
        <h1 className="font-heading text-4xl text-ink md:text-5xl">Términos y condiciones</h1>
        <div className="mt-8 space-y-5">
          <PlaceholderText>
            Bloque legal placeholder. Uso del sitio, carácter informativo y ausencia de oferta pública en esta fase.
          </PlaceholderText>
          <PlaceholderText>
            Bloque legal placeholder. Limitación de responsabilidad y referencia a documentos privados.
          </PlaceholderText>
        </div>
      </article>
    </main>
  );
}
