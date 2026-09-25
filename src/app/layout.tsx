import type { Metadata } from "next";
import localFont from "next/font/local";
import { HashScroll } from "@/components/layout/hash-scroll";
import { MobileCta } from "@/components/layout/mobile-cta";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import "./globals.css";

const eiko = localFont({
  src: "../fonts/PPEiko-Medium.otf",
  variable: "--font-eiko",
  display: "swap",
  weight: "500",
});

const montserrat = localFont({
  src: [
    { path: "../fonts/Montserrat-Regular.ttf", weight: "400", style: "normal" },
    { path: "../fonts/Montserrat-Medium.ttf", weight: "500", style: "normal" },
    { path: "../fonts/Montserrat-SemiBold.ttf", weight: "600", style: "normal" },
  ],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Finca Capital",
    template: "%s · Finca Capital",
  },
  description: "Propuesta de sitio institucional. Textos e imágenes en placeholder.",
  icons: {
    icon: "/brand/icon-gradient.png",
    apple: "/brand/icon-black.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${eiko.variable} ${montserrat.variable}`}>
      <body className="flex min-h-screen flex-col pb-16 lg:pb-0">
        <HashScroll />
        <SiteHeader />
        <div className="flex-1">{children}</div>
        <SiteFooter />
        <MobileCta />
      </body>
    </html>
  );
}
