import Link from "next/link";
import { BrandMark } from "@/components/brand/brand-mark";

export function MobileCta() {
  return (
    <div className="fixed right-0 bottom-0 left-0 z-30 border-t border-ink/10 bg-paper/95 p-3 backdrop-blur lg:hidden">
      <Link
        href="/evaluacion"
        className="flex h-12 items-center justify-center gap-2 rounded-full bg-ink text-sm font-medium text-paper"
      >
        <BrandMark kind="icon" tone="on-dark" alt="" className="h-4" />
        Solicitar financiamiento
      </Link>
    </div>
  );
}
