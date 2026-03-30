"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const nav = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/#journal", label: "Journal" },
  { href: "/about#philosophy", label: "Philosophy" },
] as const;

function NavLink({
  href,
  label,
  active,
}: {
  href: string;
  label: string;
  active: boolean;
}) {
  return (
    <Link
      href={href}
      className={
        active
          ? "border-b-2 border-primary-container pb-1 font-medium text-primary transition-colors duration-300"
          : "font-medium text-outline transition-colors duration-300 hover:text-secondary"
      }
    >
      {label}
    </Link>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full bg-background/80 shadow-[0_8px_32px_rgba(27,28,23,0.04)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-8 md:py-6">
        <Link
          href="/"
          className="font-headline text-2xl italic text-primary"
        >
          Nurture Editorial
        </Link>

        <div className="hidden items-center gap-8 md:flex md:gap-10">
          {nav.map((item) => {
            const active =
              (item.href === "/services" && pathname === "/services") ||
              (item.href === "/about" && pathname === "/about");
            return (
              <NavLink
                key={item.href}
                href={item.href}
                label={item.label}
                active={active}
              />
            );
          })}
        </div>

        <div className="hidden md:block">
          <Link
            href="/contact"
            className="silk-touch-gradient inline-flex scale-95 rounded-full px-8 py-3 font-medium text-on-primary transition-transform duration-200 ease-in-out hover:scale-100"
          >
            Book Consultation
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex rounded-full p-2 text-on-surface md:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((o) => !o)}
        >
          <span className="material-symbols-outlined">
            {open ? "close" : "menu"}
          </span>
        </button>
      </div>

      {open ? (
        <div className="border-t border-outline-variant/20 bg-background px-6 py-6 md:hidden">
          <div className="flex flex-col gap-4">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-lg font-medium text-on-surface"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="silk-touch-gradient mt-2 inline-flex justify-center rounded-full px-8 py-3 font-medium text-on-primary"
              onClick={() => setOpen(false)}
            >
              Book Consultation
            </Link>
          </div>
        </div>
      ) : null}
    </nav>
  );
}
