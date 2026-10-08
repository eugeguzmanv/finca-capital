"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import CardSwap, { Card } from "@/components/CardSwap";
import { SectionHeading } from "@/components/ui/section-heading";
import { TopicFlipCard } from "@/components/ui/topic-flip-card";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { products } from "@/lib/placeholder-data";
import { cn } from "@/lib/utils";

export function SolutionsPreview() {
  const reduced = usePrefersReducedMotion();
  const [compact, setCompact] = useState(false);
  const [front, setFront] = useState(0);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 768px)");
    const update = () => setCompact(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  return (
    <section id="soluciones" className="scroll-mt-28 bg-[#efece6] py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading kicker="Qué ofrece" title="Soluciones diseñadas para distintas necesidades de capital." />
          <Link href="/soluciones" className="text-sm font-medium text-ink underline-offset-4 hover:underline">
            Ver todas las soluciones
          </Link>
        </div>

        {reduced ? (
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {products.map((product) => (
              <div key={product.id} className="space-y-3">
                <TopicFlipCard title={product.name} body={product.blurb} />
                <Link
                  href={`/soluciones#${product.id}`}
                  className="inline-flex rounded-full bg-ink px-4 py-2 text-sm font-medium text-paper"
                >
                  Conocer más
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <div className="mt-12 grid items-center gap-10 lg:grid-cols-12">
            <div className="flex min-h-[340px] items-center justify-center overflow-visible lg:col-span-7 lg:min-h-[420px]">
              <CardSwap
                width={compact ? 300 : 420}
                height={compact ? 280 : 360}
                cardDistance={compact ? 28 : 52}
                verticalDistance={compact ? 36 : 56}
                delay={4200}
                pauseOnHover
                easing="elastic"
                frontIndex={front}
                onFrontChange={setFront}
              >
                {products.map((product) => (
                  <Card
                    key={product.id}
                    customClass="flex flex-col overflow-hidden !border-white/20 !bg-ink p-7 text-paper shadow-[0_20px_50px_rgba(37,39,42,0.28)]"
                  >
                    <p className="text-xs tracking-[0.16em] uppercase text-paper/45">Solución</p>
                    <h3 className="font-heading mt-4 text-3xl leading-tight">{product.name}</h3>
                    <p className="mt-4 flex-1 text-sm leading-7 text-paper/70">{product.blurb}</p>
                    <Link
                      href={`/soluciones#${product.id}`}
                      onClick={(event) => event.stopPropagation()}
                      className="relative z-10 mt-6 inline-flex w-fit rounded-full bg-paper px-4 py-2 text-sm font-medium text-ink"
                    >
                      Conocer más
                    </Link>
                  </Card>
                ))}
              </CardSwap>
            </div>
            <ul className="space-y-3 lg:col-span-5">
              {products.map((product, index) => (
                <li key={product.id}>
                  <button
                    type="button"
                    onClick={() => setFront(index)}
                    className={cn(
                      "w-full rounded-2xl px-5 py-4 text-left transition-colors",
                      front === index ? "bg-ink text-paper" : "bg-white text-ink hover:bg-ink/90 hover:text-paper",
                    )}
                  >
                    <p className="font-heading text-xl">{product.name}</p>
                    <p className="mt-1 line-clamp-2 text-sm text-current/65">{product.blurb}</p>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
