export type BrandKind = "logo" | "icon";
export type BrandTone = "on-dark" | "on-light" | "accent";

export const brandAssets = {
  logo: {
    "on-dark": "/brand/logo-white.png",
    "on-light": "/brand/logo-black.png",
    accent: "/brand/logo-gradient.png",
  },
  icon: {
    "on-dark": "/brand/icon-white.png",
    "on-light": "/brand/icon-black.png",
    accent: "/brand/icon-gradient.png",
  },
} as const;

export function brandSrc(kind: BrandKind, tone: BrandTone) {
  return brandAssets[kind][tone];
}
