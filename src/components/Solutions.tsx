const solutions = [
  {
    icon: "🏥",
    title: "Medistrax Klinik",
    desc: "Manajemen klinik lengkap dengan rekam medis elektronik, antrian, dan integrasi nasional",
    price: "Mulai Rp 700.000/bulan",
    href: "#klinik",
  },
  {
    icon: "💊",
    title: "Medistrax Apotek",
    desc: "Manajemen stok obat, POS, dan peringatan kadaluarsa dengan laporan real-time",
    price: "Mulai Rp 500.000/bulan",
    href: "#apotek",
  },
  {
    icon: "🧑‍⚕️",
    title: "Medistrax Praktik Dokter",
    desc: "Solusi digital untuk dokter mandiri: rekam medis, resep elektronik, jadwal praktik",
    price: "Mulai Rp 400.000/bulan",
    href: "#praktik",
  },
];

export default function Solutions() {
  return (
    <section id="produk" className="bg-slate-50 py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            Pilih Solusi Sesuai Kebutuhan Anda
          </h2>
          <p className="mt-3 text-slate-500">
            Medistrax menyediakan solusi untuk klinik, apotek, dan praktik dokter
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-3 gap-6">
          {solutions.map((s) => (
            <div key={s.title} className="rounded-2xl bg-white border border-slate-200 p-6 text-center flex flex-col">
              <div className="mx-auto text-4xl">{s.icon}</div>
              <h3 className="mt-4 font-bold text-slate-900">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-500 leading-relaxed flex-1">{s.desc}</p>
              <div className="mt-4 text-sm text-slate-700">{s.price}</div>
              <a
                href={s.href}
                className="mt-4 inline-flex items-center justify-center rounded-full bg-slate-100 px-4 py-2.5 text-sm font-semibold text-indigo-600 hover:bg-slate-200 transition-colors"
              >
                Lihat Harga
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
