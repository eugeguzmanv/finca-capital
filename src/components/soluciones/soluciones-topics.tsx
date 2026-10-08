"use client";

import { TopicFlipCard } from "@/components/ui/topic-flip-card";
import { products } from "@/lib/placeholder-data";

export function SolucionesTopics() {
  return (
    <div className="mt-14 grid gap-5 sm:grid-cols-2">
      {products.map((product) => (
        <article key={product.id} id={product.id} className="scroll-mt-28">
          <TopicFlipCard title={product.name} body={product.blurb} />
        </article>
      ))}
    </div>
  );
}
