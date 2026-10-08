"use client";

import { useRouter } from "next/navigation";
import { FormEvent } from "react";
import { BrandMark } from "@/components/brand/brand-mark";

export default function CapitalContactPage() {
  const router = useRouter();

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push("/capital/contacto/gracias");
  };

  return (
    <main className="bg-paper pt-28 pb-20">
      <div className="mx-auto max-w-xl px-5 md:px-8">
        <BrandMark kind="icon" tone="accent" className="mb-5 h-10" />
        <p className="text-xs tracking-[0.22em] uppercase text-ink/45">Contacto para capital</p>
        <h1 className="font-heading mt-3 text-4xl text-ink md:text-5xl">Conocer oportunidades de participación</h1>
        <p className="mt-4 text-sm leading-6 text-ink/60">
          Ruta independiente. Los campos son placeholder hasta validación jurídica. No se publican rendimientos.
        </p>

        <form onSubmit={onSubmit} className="mt-10 space-y-4 rounded-3xl bg-white p-6 md:p-8">
          <label className="block text-sm text-ink/70">
            Nombre
            <input required className="mt-2 h-11 w-full rounded-xl border border-ink/10 px-3" placeholder="Nombre" />
          </label>
          <label className="block text-sm text-ink/70">
            Contacto
            <input
              required
              className="mt-2 h-11 w-full rounded-xl border border-ink/10 px-3"
              placeholder="Correo o teléfono"
            />
          </label>
          <label className="block text-sm text-ink/70">
            Perfil
            <textarea
              required
              rows={4}
              className="mt-2 w-full rounded-xl border border-ink/10 px-3 py-3"
              placeholder="Lorem: perfil de participación placeholder"
            />
          </label>
          <label className="block text-sm text-ink/70">
            Ticket aproximado
            <input
              className="mt-2 h-11 w-full rounded-xl border border-ink/10 px-3"
              placeholder="Ticket aproximado placeholder"
            />
          </label>
          <label className="flex items-start gap-3 text-sm leading-6 text-ink/70">
            <input type="checkbox" required className="mt-1" />
            Acepto el aviso de privacidad. Esta solicitud no constituye una oferta pública.
          </label>
          <button type="submit" className="h-12 w-full rounded-full bg-ink text-sm font-medium text-paper">
            Enviar interés
          </button>
        </form>
      </div>
    </main>
  );
}
