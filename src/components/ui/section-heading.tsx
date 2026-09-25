"use client";

import { BrandMark } from "@/components/brand/brand-mark";
import ScrollReveal from "@/components/ScrollReveal";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  kicker?: string;
  title: string;
  className?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
};

export function SectionHeading({
  kicker,
  title,
  className,
  align = "left",
  tone = "light",
}: SectionHeadingProps) {
  return (
    <div className={cn(align === "center" && "text-center", className)}>
      {kicker ? (
        <p
          className={cn(
            "mb-3 inline-flex items-center gap-2 text-xs font-medium tracking-[0.22em] uppercase",
            tone === "dark" ? "text-paper/50" : "text-ink/50",
          )}
        >
          <BrandMark
            kind="icon"
            tone={tone === "dark" ? "on-dark" : "accent"}
            alt=""
            className="h-4"
          />
          {kicker}
        </p>
      ) : null}
      <ScrollReveal
        baseOpacity={0.18}
        enableBlur
        baseRotation={1.5}
        blurStrength={3}
        containerClassName="my-0"
        textClassName={cn(
          "font-heading text-3xl leading-tight md:text-5xl",
          tone === "dark" ? "text-paper" : "text-ink",
          align === "center" && "mx-auto",
        )}
      >
        {title}
      </ScrollReveal>
    </div>
  );
}
