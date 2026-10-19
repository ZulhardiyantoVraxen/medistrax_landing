import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Medistrax — Solusi Digital Terintegrasi Klinik, Apotek & Praktik Dokter",
  description:
    "Sistem Manajemen Klinik, Apotek, dan Praktik Dokter Mandiri. Bayar sesuai kapasitas database yang digunakan, tanpa bundling yang tidak perlu.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" className="h-full antialiased">
      <body className="min-h-full flex flex-col text-slate-800 font-sans">{children}</body>
    </html>
  );
}
