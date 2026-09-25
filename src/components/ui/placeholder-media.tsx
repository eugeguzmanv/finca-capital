import { BrandMark } from "@/components/brand/brand-mark";
import { cn } from "@/lib/utils";

type PlaceholderMediaProps = {
  label?: string;
  className?: string;
  ratio?: "video" | "square" | "portrait" | "wide";
};

const ratios = {
  video: "aspect-video",
  square: "aspect-square",
  portrait: "aspect-[3/4]",
  wide: "aspect-[16/7]",
};

export function PlaceholderMedia({
  label = "Imagen placeholder",
  className,
  ratio = "video",
}: PlaceholderMediaProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl bg-[#2a2d31]",
        ratios[ratio],
        className,
      )}
    >
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#25272a_0%,#3a3f46_52%,#25272a_100%)]" />
      <div className="absolute inset-6 rounded-xl border border-white/10" />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-6 text-center">
        <BrandMark kind="icon" tone="on-dark" alt="" className="h-8 opacity-80" />
        <p className="font-heading text-sm tracking-wide text-paper/75 md:text-base">
          {label}
        </p>
      </div>
    </div>
  );
}
