import Link from "next/link";
import { notFound } from "next/navigation";
import { BrandMark } from "@/components/brand/brand-mark";
import { getPost, posts } from "@/lib/placeholder-data";
import { PlaceholderMedia } from "@/components/ui/placeholder-media";
import { PlaceholderText } from "@/components/ui/placeholder-text";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <main className="bg-paper pt-28 pb-20">
      <article className="mx-auto max-w-3xl px-5 md:px-8">
        <BrandMark kind="icon" tone="accent" className="mb-5 h-8" />
        <p className="text-xs tracking-[0.16em] uppercase text-ink/45">
          {post.category} · {post.date}
        </p>
        <h1 className="font-heading mt-4 text-4xl leading-tight text-ink md:text-5xl">{post.title}</h1>
        <div className="mt-8">
          <PlaceholderMedia label="Hero editorial placeholder" ratio="wide" />
        </div>
        <div className="mt-10 space-y-5">
          <PlaceholderText>{post.excerpt}</PlaceholderText>
          <PlaceholderText>
            Cuerpo de artículo placeholder. Bloque 01: contexto, motivo de la nota y marco institucional.
          </PlaceholderText>
          <PlaceholderText>
            Cuerpo de artículo placeholder. Bloque 02: desarrollo, avances o aprendizaje, sin cifras reales.
          </PlaceholderText>
          <PlaceholderText>
            Cuerpo de artículo placeholder. Bloque 03: cierre y siguiente paso hacia evaluación o archivo.
          </PlaceholderText>
        </div>
        <Link href="/blog" className="mt-10 inline-flex text-sm font-medium underline-offset-4 hover:underline">
          Volver al archivo
        </Link>
      </article>
    </main>
  );
}
