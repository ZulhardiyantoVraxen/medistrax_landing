"use client";

import Image from "next/image";
import { useState } from "react";

const links = [
  { label: "Beranda", href: "#beranda" },
  { label: "Fitur", href: "#fitur" },
  { label: "Harga", href: "#harga" },
  { label: "Produk", href: "#produk" },
  { label: "Keunggulan", href: "#keunggulan" },
  { label: "Kontak", href: "#kontak" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header id="beranda" className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <a href="#beranda" className="flex items-center shrink-0">
            <Image
              src="/img/logo_mdx.png"
              alt="Medistrax"
              width={135}
              height={134}
              priority
              className="h-9 sm:h-10 lg:h-11 w-auto object-contain"
            />
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <a
            href="#kontak"
            className="hidden lg:inline-flex items-center rounded-full gradient-brand px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:opacity-90 transition-opacity"
          >
            Demo Gratis
          </a>

          <button
            aria-label="Buka menu"
            className="lg:hidden rounded-md p-2 text-slate-600 hover:bg-slate-100"
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>

        {open && (
          <nav className="lg:hidden flex flex-col gap-1 pb-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#kontak"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full gradient-brand px-5 py-2.5 text-sm font-semibold text-white"
            >
              Demo Gratis
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
