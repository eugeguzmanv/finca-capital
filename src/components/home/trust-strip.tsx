"use client";

import { BrandMark } from "@/components/brand/brand-mark";
import CountUp from "@/components/CountUp";
import LogoLoop from "@/components/LogoLoop";
import { trustMarks } from "@/lib/placeholder-data";

export function TrustStrip() {
  return (
    <section className="border-y border-ink/8 bg-mist py-10">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 md:grid-cols-4 md:px-8">
        {[
          { label: "Años placeholder", value: 10 },
          { label: "Proyectos placeholder", value: 4 },
          { label: "Plazo máx. placeholder", value: 36 },
          { label: "Documentos placeholder", value: 12 },
        ].map((item) => (
          <div key={item.label}>
            <p className="font-heading text-4xl text-ink">
              <CountUp to={item.value} duration={1.6} />
            </p>
            <p className="mt-2 text-xs tracking-[0.16em] uppercase text-ink/50">{item.label}</p>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <LogoLoop
          logos={[
            {
              node: <BrandMark kind="logo" tone="accent" className="h-8" />,
              title: "Finca Capital",
            },
            {
              node: <BrandMark kind="icon" tone="accent" className="h-7" />,
              title: "Símbolo Finca Capital",
            },
            ...trustMarks.map((mark) => ({
              node: (
                <span className="inline-flex items-center gap-2 text-sm font-medium tracking-[0.14em] uppercase text-ink/45">
                  <BrandMark kind="icon" tone="on-light" alt="" className="h-4" />
                  {mark}
                </span>
              ),
              title: mark,
            })),
          ]}
          speed={60}
          logoHeight={28}
          gap={56}
          fadeOut
          fadeOutColor="#e6e6e6"
          ariaLabel="Marcas y validaciones institucionales placeholder"
        />
      </div>
    </section>
  );
}
