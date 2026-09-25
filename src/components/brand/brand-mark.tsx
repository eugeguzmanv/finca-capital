import { brandSrc, type BrandKind, type BrandTone } from "@/lib/brand";
import { cn } from "@/lib/utils";

type BrandMarkProps = {
  kind?: BrandKind;
  tone?: BrandTone;
  alt?: string;
  className?: string;
  priority?: boolean;
};

export function BrandMark({
  kind = "logo",
  tone = "on-light",
  alt = "Finca Capital",
  className,
}: BrandMarkProps) {
  return (
    <img
      src={brandSrc(kind, tone)}
      alt={alt}
      className={cn("w-auto object-contain", kind === "logo" ? "h-12" : "h-8", className)}
    />
  );
}
