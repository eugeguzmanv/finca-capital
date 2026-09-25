import Link from "next/link";
import { BrandMark } from "@/components/brand/brand-mark";
import { footerGroups } from "@/lib/navigation";

export function SiteFooter() {
  return (
    <footer className="surface-dark">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-12 md:px-8">
        <div className="md:col-span-4">
          <BrandMark kind="logo" tone="on-dark" className="h-16" />
          <p className="mt-6 max-w-xs text-sm leading-6 text-paper/65">
            Texto placeholder de cierre institucional. Correo, teléfono y horarios se confirman en una siguiente fase.
          </p>
        </div>

        {footerGroups.map((group) => (
          <div key={group.title} className="md:col-span-2">
            <p className="text-xs tracking-[0.18em] uppercase text-paper/45">
              {group.title}
            </p>
            <ul className="mt-4 space-y-3 text-sm text-paper/80">
              {group.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition-colors hover:text-sky">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="md:col-span-2">
          <p className="text-xs tracking-[0.18em] uppercase text-paper/45">Contacto</p>
          <ul className="mt-4 space-y-3 text-sm text-paper/80">
            <li>correo@placeholder.com</li>
            <li>+52 000 000 0000</li>
            <li>Horario placeholder</li>
            <li>Redes placeholder</li>
          </ul>
        </div>
      </div>
      <div className="flex items-center justify-center gap-3 border-t border-white/10 px-5 py-5 text-xs text-paper/40 md:px-8">
        <BrandMark kind="icon" tone="on-dark" alt="" className="h-5" />
        <span>Finca Capital · Grupo Salomón · SIPRES placeholder · {new Date().getFullYear()}</span>
      </div>
    </footer>
  );
}
