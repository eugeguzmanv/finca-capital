"use client";

import FlipCard from "@/components/FlipCard";

type TopicFlipCardProps = {
  title: string;
  body: string;
  hint?: string;
};

export function TopicFlipCard({ title, body, hint = "Clic o deslice para leer" }: TopicFlipCardProps) {
  return (
    <div className="h-[240px] w-full min-w-0 sm:h-[260px]">
      <FlipCard
        className="!h-full !w-full"
        width={560}
        height={260}
        background="#ffffff"
        color="#25272A"
        shadowColor="#25272A"
        shadowOpacity={0.12}
        glareOpacity={0.28}
        radius={24}
        hoverScale={1.02}
        ariaLabel={`${title}. ${hint}`}
        front={
          <div className="flex h-full flex-col justify-between p-6 md:p-7">
            <h3 className="font-heading text-2xl leading-tight text-ink md:text-3xl">{title}</h3>
            <p className="text-xs tracking-[0.14em] uppercase text-ink/40">{hint}</p>
          </div>
        }
        back={
          <div className="flex h-full flex-col justify-between p-6 md:p-7">
            <p className="text-sm leading-7 text-ink/70">{body}</p>
            <p className="text-xs tracking-[0.14em] uppercase text-ink/35">{title}</p>
          </div>
        }
      />
    </div>
  );
}
