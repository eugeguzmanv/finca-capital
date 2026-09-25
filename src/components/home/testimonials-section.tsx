"use client";

import Stack from "@/components/Stack";
import { testimonials } from "@/lib/placeholder-data";
import { SectionHeading } from "@/components/ui/section-heading";

export function TestimonialsSection() {
  return (
    <section id="historias" className="scroll-mt-28 bg-[#efece6] py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-12 md:px-8">
        <div className="md:col-span-6">
          <SectionHeading kicker="Prueba social" title="Referencias escritas placeholder" />
          <p className="mt-6 max-w-md text-base leading-7 text-ink/70">
            Cada tarjeta usa nombre autorizado, relación y fecha placeholder. Arrastra o toca para recorrer.
          </p>
        </div>
        <div className="flex min-h-[380px] items-center justify-center md:col-span-6">
          <div className="h-[340px] w-[280px] md:h-[380px] md:w-[320px]">
          <Stack
            randomRotation
            sendToBackOnClick
            autoplay
            autoplayDelay={4200}
            cards={testimonials.map((item) => (
              <article
                key={item.name}
                className="flex h-full flex-col justify-between rounded-2xl bg-ink p-6 text-paper"
              >
                <p className="text-sm leading-6 text-paper/80">{item.quote}</p>
                <div>
                  <p className="font-heading text-lg">{item.name}</p>
                  <p className="mt-1 text-xs tracking-wide text-paper/50">
                    {item.relation} · {item.date}
                  </p>
                </div>
              </article>
            ))}
          />
          </div>
        </div>
      </div>
    </section>
  );
}
