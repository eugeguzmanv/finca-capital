"use client";

import MagicBento from "@/components/MagicBento";
import { TopicFlipCard } from "@/components/ui/topic-flip-card";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { investorProfile } from "@/lib/placeholder-data";

const purposeSlots = [
  {
    label: "Oportunidades",
    title: "Qué tipo de oportunidades existen",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placeholder de las oportunidades que se pueden estructurar.",
  },
  {
    label: "Estructura",
    title: "Cómo se estructuran",
    description: "Lorem ipsum dolor sit amet. Cada operación define condiciones, garantías y el tipo de participación.",
  },
  {
    label: "Análisis",
    title: "Qué se analiza",
    description:
      "Lorem ipsum dolor sit amet. Se revisan el proyecto, las necesidades financieras y la capacidad de la operación.",
  },
  {
    label: "Seguimiento",
    title: "Cómo se da seguimiento",
    description:
      "Lorem ipsum dolor sit amet. El acompañamiento continúa durante la ejecución y las obligaciones acordadas.",
  },
  {
    label: "Información",
    title: "Qué información recibe quien participa",
    description: "Lorem ipsum dolor sit amet. La información se entrega por un canal privado, no como resultado público.",
  },
  {
    label: "Relación",
    title: "Cómo se gestiona la relación",
    description: "Lorem ipsum dolor sit amet. La relación se mantiene con claridad de condiciones y seguimiento.",
  },
];

export function CapitalPurposeBento() {
  const reduced = usePrefersReducedMotion();

  return (
    <MagicBento
      cards={purposeSlots.map((slot) => ({
        color: "#25272A",
        label: slot.label,
        title: slot.title,
        description: slot.description,
      }))}
      glowColor="138, 237, 250"
      enableStars={!reduced}
      enableTilt={!reduced}
      enableMagnetism={!reduced}
      clickEffect={!reduced}
      disableAnimations={reduced}
      textAutoHide={false}
    />
  );
}

export function CapitalProfileCards() {
  return (
    <div className="mt-10 grid gap-5 sm:grid-cols-2">
      {investorProfile.map((item) => (
        <TopicFlipCard key={item.title} title={item.title} body={item.body} />
      ))}
    </div>
  );
}
