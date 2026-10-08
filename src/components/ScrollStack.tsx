"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { ReactNode } from "react";
import { useRef } from "react";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger, useGSAP);

type ScrollStackItemProps = {
  children: ReactNode;
  className?: string;
  itemClassName?: string;
};

export function ScrollStackItem({ children, className, itemClassName }: ScrollStackItemProps) {
  return (
    <div
      className={cn(
        "scroll-stack-card origin-top will-change-transform rounded-[32px] bg-white p-8 shadow-[0_16px_48px_rgba(37,39,42,0.08)] md:p-12",
        itemClassName,
        className,
      )}
    >
      {children}
    </div>
  );
}

type ScrollStackProps = {
  children: ReactNode;
  className?: string;
  itemDistance?: number;
  itemScale?: number;
  itemStackDistance?: number;
  baseScale?: number;
};

export default function ScrollStack({
  children,
  className,
  itemDistance = 32,
  itemScale = 0.04,
  itemStackDistance = 28,
  baseScale = 0.92,
}: ScrollStackProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();

  useGSAP(
    () => {
      const root = ref.current;
      if (!root) return;
      const cards = gsap.utils.toArray<HTMLElement>(".scroll-stack-card", root);
      cards.forEach((card, index) => {
        card.style.marginBottom = `${itemDistance}px`;
        card.style.top = `${112 + index * (itemStackDistance * 0.35)}px`;
        card.style.zIndex = String(index + 1);
        card.classList.add("sticky");
      });

      if (reduced) return;

      cards.forEach((card, index) => {
        const scale = Math.max(baseScale, 1 - (cards.length - 1 - index) * itemScale);
        gsap.fromTo(
          card,
          { scale: 1 },
          {
            scale,
            ease: "none",
            scrollTrigger: {
              trigger: card,
              start: "top 22%",
              end: "bottom top",
              scrub: true,
            },
          },
        );
      });
    },
    { scope: ref, dependencies: [reduced, itemDistance, itemScale, itemStackDistance, baseScale] },
  );

  return (
    <div ref={ref} className={cn("relative", className)}>
      {children}
    </div>
  );
}
