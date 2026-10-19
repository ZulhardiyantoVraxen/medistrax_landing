import Image from "next/image";

const stats = [
  { value: "500+", label: "Klinik & Apotek" },
  { value: "2.000+", label: "Tenaga Medis" },
  { value: "100K+", label: "Pasien per Bulan" },
  { value: "300+", label: "Dokter Mitra" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-slate-100 to-indigo-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
              Solusi Digital Terintegrasi Untuk{" "}
              <span className="gradient-text-brand">
                Klinik, Apotek &amp; Praktik Dokter
              </span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed">
              Solusi unggulan kami: Sistem Manajemen Klinik, Apotek, dan Praktik
              Dokter Mandiri yang sepenuhnya terpisah. Anda hanya perlu membayar
              fitur yang benar-benar digunakan, tanpa bundling yang tidak perlu.
              Data medis dan demografi pasien terintegrasi untuk klinik jaringan
              dapat digunakan di seluruh cabang. Wujudkan operasional yang lebih
              rapi, akurat, dan efisien bersama Medistrax!{" "}
              <strong className="font-semibold text-slate-900">
                Mulai dari Rp 400.000/bulan
              </strong>{" "}
              untuk praktik dokter mandiri.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#harga"
                className="inline-flex items-center justify-center rounded-full gradient-brand px-7 py-3.5 text-sm font-semibold text-white shadow-md hover:opacity-90 transition-opacity"
              >
                Lihat Harga Lengkap
              </a>
              <a
                href="#kontak"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-7 py-3.5 text-sm font-semibold text-indigo-600 hover:border-indigo-300 transition-colors"
              >
                Konsultasi Gratis
              </a>
            </div>

            <dl className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6">
              {stats.map((s) => (
                <div key={s.label}>
                  <dt className="sr-only">{s.label}</dt>
                  <dd className="text-2xl sm:text-3xl font-extrabold text-indigo-600">
                    {s.value}
                  </dd>
                  <div className="mt-1 text-sm text-slate-500">{s.label}</div>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative">
            <Image
              src="/img/pc_doctor_inc.png"
              alt="Tenaga medis menggunakan Medistrax"
              width={900}
              height={900}
              className="hero-doctor-image"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
