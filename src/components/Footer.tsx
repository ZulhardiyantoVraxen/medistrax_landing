"use client";

import Image from "next/image";
import { useState } from "react";

const footerLinks = [
  { label: "Beranda", href: "#beranda" },
  { label: "Fitur", href: "#fitur" },
  { label: "Harga", href: "#harga" },
  { label: "Produk", href: "#produk" },
  { label: "Keunggulan", href: "#keunggulan" },
  { label: "Kontak", href: "#kontak" },
];

export default function Footer() {
  const [sent, setSent] = useState(false);

  return (
    <footer id="kontak">
      <div className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-bold text-slate-900">Hubungi Kami</h3>
            <p className="mt-2 text-sm text-slate-500">Tim kami siap membantu Anda 24/7</p>

            <div className="mt-8 space-y-6 text-sm">
              <div>
                <div className="font-semibold text-slate-800">📞 Telepon«</div>
                <div className="mt-1 text-slate-500">+62 877 3030 6433</div>
              </div>
              <div>
                <div className="font-semibold text-slate-800">✉️ Email</div>
                <div className="mt-1 text-slate-500">zulhardiyanto@vraxen-group.com</div>
              </div>
              <div>
                <div className="font-semibold text-slate-800">📍 Equity Tower</div>
                <div className="mt-1 text-slate-500 leading-relaxed">
                  Lantai 23 Suite 2301
                  <br />
                  SCBD Lot 9
                  <br />
                  Jl. Jenderal Sudirman Kav. 52–53
                  <br />
                  Jakarta Selatan 12190, Indonesia
                </div>
              </div>
            </div>
          </div>

          <form
            className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
          >
            <input
              required
              type="text"
              placeholder="Nama Lengkap"
              className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            <input
              required
              type="email"
              placeholder="Email"
              className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            <input
              type="tel"
              placeholder="No. Telepon"
              className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            <select
              defaultValue=""
              className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            >
              <option value="" disabled>
                Pilih Produk
              </option>
              <option value="klinik">Medistrax Klinik</option>
              <option value="apotek">Medistrax Apotek</option>
              <option value="praktik">Medistrax Praktik Dokter</option>
            </select>
            <textarea
              placeholder="Pesan"
              rows={4}
              className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            <button
              type="submit"
              className="w-full rounded-lg gradient-brand py-3.5 text-sm font-semibold text-white hover:opacity-90 transition-opacity"
            >
              {sent ? "Terkirim! Tim kami akan segera menghubungi Anda." : "Kirim Pesan"}
            </button>
          </form>
        </div>
      </div>

      <div className="bg-slate-900 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <a href="#beranda" className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white p-1">
              <Image
                src="/img/logo_mdx.png"
                alt="Medistrax"
                width={28}
                height={28}
                className="h-full w-full object-contain"
              />
            </span>
            <span className="font-extrabold text-white tracking-tight">MEDISTRAX</span>
          </a>

          <nav className="flex flex-wrap items-center justify-center gap-6">
            {footerLinks.map((l) => (
              <a key={l.href} href={l.href} className="text-sm text-slate-400 hover:text-white transition-colors">
                {l.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-8 pt-8 border-t border-white/10 text-center text-xs text-slate-500">
          © 2026 Medistrax – Solusi SIM Klinik &amp; Apotek Terintegrasi. Bayar sesuai kapasitas
          database, tanpa subsidi silang. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
