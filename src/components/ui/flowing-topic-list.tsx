"use client";

import { useState } from "react";
import FlowingMenu from "@/components/FlowingMenu";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { cn } from "@/lib/utils";

const frames = [
  "/placeholders/frame-1.svg",
  "/placeholders/frame-2.svg",
  "/placeholders/frame-3.svg",
  "/placeholders/frame-4.svg",
  "/brand/icon-gradient.png",
  "/brand/logo-gradient.png",
];

export type FlowingTopic = {
  title: string;
  body: string;
  href?: string;
};

type FlowingTopicListProps = {
  items: readonly FlowingTopic[];
  className?: string;
  navigate?: boolean;
};

export function FlowingTopicList({ items, className, navigate = false }: FlowingTopicListProps) {
  const reduced = usePrefersReducedMotion();
  const [active, setActive] = useState(0);
  const current = items[active] ?? items[0];

  if (reduced) {
    return (
      <div className={cn("grid gap-4", className)}>
        {items.map((item) => (
          <article key={item.title} className="rounded-3xl bg-white p-6">
            <h3 className="font-heading text-2xl text-ink">{item.title}</h3>
            <p className="mt-3 text-sm leading-7 text-ink/65">{item.body}</p>
          </article>
        ))}
      </div>
    );
  }

  return (
    <div className={className}>
      <div
        className="overflow-hidden rounded-3xl"
        style={{ height: `min(70vh, ${Math.max(items.length * 104, 360)}px)` }}
      >
        <FlowingMenu
          items={items.map((item, index) => ({
            text: item.title,
            link: item.href ?? "#",
            image: frames[index % frames.length],
          }))}
          bgColor="#25272A"
          textColor="#F7F6F3"
          marqueeBgColor="#8AEDFA"
          marqueeTextColor="#25272A"
          borderColor="rgba(247,246,243,0.16)"
          onItemEnter={setActive}
          preventNavigation={!navigate}
        />
      </div>
      {current ? (
        <p className="mt-6 max-w-3xl text-sm leading-7 text-ink/70 md:text-base">{current.body}</p>
      ) : null}
    </div>
  );
}
