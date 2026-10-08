"use client";

import Link from "next/link";
import FadeContent from "@/components/FadeContent";
import { posts } from "@/lib/placeholder-data";
import { PlaceholderMedia } from "@/components/ui/placeholder-media";
import { SectionHeading } from "@/components/ui/section-heading";

export function BlogPreview() {
  const preview = posts.slice(0, 3);

  return (
    <section id="noticias" className="scroll-mt-28 bg-paper py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading kicker="Noticias" title="Avances, operaciones, cierres y logros" />
          <Link href="/blog" className="text-sm font-medium text-ink underline-offset-4 hover:underline">
            Ver archivo completo
          </Link>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {preview.map((post, index) => (
            <FadeContent key={post.slug} delay={index * 80}>
              <Link href={`/blog/${post.slug}`} className="block">
                <PlaceholderMedia label="Portada editorial placeholder" />
                <p className="mt-4 text-xs tracking-[0.16em] uppercase text-ink/45">
                  {post.category} · {post.date}
                </p>
                <h3 className="font-heading mt-2 text-2xl text-ink">{post.title}</h3>
                <p className="mt-2 text-sm leading-6 text-ink/65">{post.excerpt}</p>
              </Link>
            </FadeContent>
          ))}
        </div>
      </div>
    </section>
  );
}
