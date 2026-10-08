"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { BrandMark } from "@/components/brand/brand-mark";
import { posts, type PostCategory } from "@/lib/placeholder-data";
import { PlaceholderMedia } from "@/components/ui/placeholder-media";

const categories: Array<"Todas" | PostCategory> = [
  "Todas",
  "Avances",
  "Operaciones",
  "Cierres",
  "Aperturas",
  "Logros",
];

export default function BlogPage() {
  const [category, setCategory] = useState<(typeof categories)[number]>("Todas");
  const [page, setPage] = useState(1);
  const featured = posts.find((post) => post.featured) ?? posts[0];
  const filtered = useMemo(
    () => posts.filter((post) => category === "Todas" || post.category === category),
    [category],
  );

  return (
    <main className="bg-paper pt-28 pb-20">
      <section className="mx-auto max-w-6xl px-5 md:px-8">
        <BrandMark kind="logo" tone="accent" className="mb-6 h-14" />
        <p className="text-xs tracking-[0.22em] uppercase text-ink/45">Centro de noticias</p>
        <h1 className="font-heading mt-3 text-4xl text-ink md:text-6xl">Noticias</h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-ink/65">
          Avances, nuevas operaciones, cierres financieros, apertura de proyectos y logros corporativos.
        </p>

        <div className="mt-8 flex flex-wrap gap-2">
          {categories.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => {
                setCategory(item);
                setPage(1);
              }}
              className={`rounded-full px-4 py-2 text-sm ${
                category === item ? "bg-ink text-paper" : "bg-white text-ink/70"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <Link href={`/blog/${featured.slug}`} className="mt-12 grid gap-6 md:grid-cols-12">
          <div className="md:col-span-7">
            <PlaceholderMedia label="Artículo destacado placeholder" ratio="wide" />
          </div>
          <div className="flex flex-col justify-end md:col-span-5">
            <p className="text-xs tracking-[0.16em] uppercase text-ink/45">
              {featured.category} · {featured.date}
            </p>
            <h2 className="font-heading mt-3 text-3xl">{featured.title}</h2>
            <p className="mt-3 text-sm leading-6 text-ink/65">{featured.excerpt}</p>
          </div>
        </Link>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {filtered.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="block">
              <PlaceholderMedia label="Tarjeta editorial" />
              <p className="mt-4 text-xs tracking-[0.16em] uppercase text-ink/45">
                {post.category} · {post.date}
              </p>
              <h3 className="font-heading mt-2 text-2xl">{post.title}</h3>
              <p className="mt-2 text-sm leading-6 text-ink/65">{post.excerpt}</p>
            </Link>
          ))}
        </div>

        <div className="mt-10 flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => setPage(1)}
            className={`rounded-full px-4 py-2 text-sm ${page === 1 ? "bg-ink text-paper" : "bg-white"}`}
          >
            01
          </button>
          <button
            type="button"
            onClick={() => setPage(2)}
            className={`rounded-full px-4 py-2 text-sm ${page === 2 ? "bg-ink text-paper" : "bg-white"}`}
          >
            02
          </button>
        </div>

        <form
          className="mt-16 rounded-3xl bg-white p-6 md:p-8"
          onSubmit={(event) => event.preventDefault()}
        >
          <h2 className="font-heading text-2xl">Suscripción a novedades</h2>
          <p className="mt-2 text-sm text-ink/60">
            Correo, consentimiento y frecuencia claramente indicada. Placeholder, sin envío real.
          </p>
          <div className="mt-6 grid gap-3 md:grid-cols-[1fr_auto]">
            <input
              type="email"
              required
              placeholder="correo@placeholder.com"
              className="h-12 rounded-full border border-ink/10 px-4"
            />
            <button type="submit" className="h-12 rounded-full bg-ink px-6 text-sm text-paper">
              Suscribirme
            </button>
          </div>
          <label className="mt-4 flex items-start gap-2 text-xs text-ink/55">
            <input type="checkbox" required className="mt-0.5" />
            Acepto el aviso de privacidad y una frecuencia mensual placeholder.
          </label>
        </form>
      </section>
    </main>
  );
}
