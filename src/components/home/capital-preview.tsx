"use client";

import Link from "next/link";
import { SectionHeading } from "@/components/ui/section-heading";
import { TopicFlipCard } from "@/components/ui/topic-flip-card";
import { investorProfile, participationSteps } from "@/lib/placeholder-data";

export function CapitalPreview() {
  return (
    <section id="capital" className="scroll-mt-28 bg-[#efece6] py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading kicker="Cómo funciona el capital" title="Capital con propósito estratégico" />
          <Link href="/capital" className="text-sm font-medium text-ink underline-offset-4 hover:underline">
            Ver oportunidades
          </Link>
        </div>
        <p className="mt-6 max-w-2xl text-sm leading-7 text-ink/65">
          La participación se estructura operación por operación. Esta vista no publica rendimientos ni invita a una
          captación general.
        </p>
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {investorProfile.map((item) => (
            <TopicFlipCard key={item.title} title={item.title} body={item.body} />
          ))}
        </div>
        <div className="mt-10 flex flex-wrap gap-2">
          {participationSteps.map((step, index) => (
            <span key={step} className="rounded-full bg-white px-4 py-2 text-sm text-ink/75">
              {index + 1}. {step}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
