"use client";

import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useLayoutEffect, useRef, useState } from "react";
import { BrandMark } from "@/components/brand/brand-mark";
import { primaryNav, siteMap } from "@/lib/navigation";
import { cn } from "@/lib/utils";

const islandSpring = {
  type: "spring" as const,
  stiffness: 380,
  damping: 36,
  mass: 0.8,
};

const ISLAND_RADIUS = 32;
const OPEN_WIDTH = "min(784px, calc(100vw - 1.5rem))";

const islandLinks = primaryNav;

function goToHash(href: string) {
  if (!href.startsWith("/#")) return false;
  const target = document.getElementById(href.slice(2));
  target?.scrollIntoView({ behavior: "smooth", block: "start" });
  return Boolean(target);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [wide, setWide] = useState(false);
  const [compactWidth, setCompactWidth] = useState(640);
  const chromeRef = useRef<HTMLDivElement>(null);
  const menuId = useId();

  const expand = () => {
    setWide(true);
    setOpen(true);
  };

  const collapse = () => {
    setOpen(false);
  };

  useLayoutEffect(() => {
    if (wide) return;
    const node = chromeRef.current;
    if (!node) return;
    const width = Math.ceil(node.scrollWidth);
    if (width > 0) setCompactWidth(width);
  }, [wide]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (open) {
      setWide(true);
      return;
    }

    const timeout = window.setTimeout(() => setWide(false), 240);
    return () => window.clearTimeout(timeout);
  }, [open]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") collapse();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const closeAndGo = (href: string) => {
    collapse();
    if (pathname === "/" && href.startsWith("/#")) {
      window.requestAnimationFrame(() => goToHash(href));
    }
  };

  return (
    <header className="pointer-events-none fixed top-4 right-0 left-0 z-50 md:top-5">
      <AnimatePresence>
        {open ? (
          <motion.button
            key="island-dim"
            type="button"
            aria-label="Cerrar menú"
            className="pointer-events-auto fixed inset-0 bg-ink/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={collapse}
          />
        ) : null}
      </AnimatePresence>

      <div className="flex justify-center px-3">
        <motion.div
          initial={false}
          animate={{ width: wide ? OPEN_WIDTH : compactWidth }}
          transition={islandSpring}
          style={{ borderRadius: ISLAND_RADIUS }}
          className="pointer-events-auto origin-top overflow-hidden border border-white/70 shadow-[0_10px_40px_rgba(37,39,42,0.12)] backdrop-blur-2xl bg-[color-mix(in_srgb,#f7f6f3_78%,transparent)]"
        >
          <div
            ref={chromeRef}
            className={cn(
              "flex h-12 items-center md:h-14",
              wide ? "w-full justify-between px-3 md:px-4" : "w-max gap-3 px-2 pr-1.5 md:gap-4 md:px-3 md:pr-2",
            )}
          >
            <Link href="/" aria-label="Finca Capital" onClick={collapse} className="shrink-0 pl-1">
              <BrandMark kind="logo" tone="accent" className="h-8 md:h-9" />
            </Link>

            <nav className="hidden items-center gap-4 md:flex lg:gap-5" aria-label="Secciones principales">
              {islandLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => closeAndGo(item.href)}
                  className="text-[13px] font-medium text-ink/70 transition-colors hover:text-ink"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <span className="hidden h-4 w-px bg-ink/15 md:block" aria-hidden="true" />

              <button
                type="button"
                className="flex size-9 shrink-0 items-center justify-center rounded-full text-ink transition-colors hover:bg-ink/6"
                aria-label={open ? "Cerrar menú" : "Abrir menú"}
                aria-expanded={open}
                aria-controls={menuId}
                onClick={() => (open ? collapse() : expand())}
              >
                <span className="relative block h-3.5 w-5" aria-hidden="true">
                  <span
                    className={cn(
                      "absolute top-0 left-0 h-0.5 w-full rounded-full bg-ink transition-transform duration-300",
                      open && "top-1.5 rotate-45",
                    )}
                  />
                  <span
                    className={cn(
                      "absolute top-1.5 left-0 h-0.5 w-full rounded-full bg-ink transition-opacity duration-200",
                      open && "opacity-0",
                    )}
                  />
                  <span
                    className={cn(
                      "absolute bottom-0 left-0 h-0.5 w-full rounded-full bg-ink transition-transform duration-300",
                      open && "bottom-1.5 -rotate-45",
                    )}
                  />
                </span>
              </button>

              <Link
                href="/evaluacion"
                onClick={() => closeAndGo("/evaluacion")}
                className="inline-flex h-9 items-center rounded-full bg-ink px-3.5 text-[13px] font-medium text-paper transition-colors hover:bg-ink/90"
              >
                Solicitar
                <span aria-hidden="true" className="ml-1.5">
                  →
                </span>
              </Link>
            </div>
          </div>

          <motion.div
            initial={false}
            animate={open ? "open" : "closed"}
            variants={{
              closed: {
                height: 0,
                opacity: 0,
                filter: "blur(8px)",
                transition: { duration: 0.22, ease: [0.32, 0.72, 0, 1] },
              },
              open: {
                height: "auto",
                opacity: 1,
                filter: "blur(0px)",
                transition: { ...islandSpring, delay: 0.05 },
              },
            }}
            className="overflow-hidden"
          >
            <nav
              id={menuId}
              aria-label="Mapa del sitio"
              className="max-h-[min(72vh,680px)] overflow-y-auto px-5 pt-3 pb-6 md:px-7 md:pb-7"
            >
              <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                {siteMap.map((group) => (
                  <div key={group.title}>
                    <Link
                      href={group.href}
                      onClick={() => closeAndGo(group.href)}
                      className="font-heading text-xl text-ink transition-colors hover:text-ink/70"
                    >
                      {group.title}
                    </Link>
                    <ul className="mt-3 space-y-2.5">
                      {group.links.map((link) => (
                        <li key={link.href + link.label}>
                          <Link
                            href={link.href}
                            onClick={() => closeAndGo(link.href)}
                            className="text-sm text-ink/65 transition-colors hover:text-ink"
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </nav>
          </motion.div>
        </motion.div>
      </div>
    </header>
  );
}
