const items = [
  {
    icon: "🏛️",
    title: "Integrasi Kemenkes",
    desc: "Sinkronisasi data otomatis dengan platform Kementerian Kesehatan RI",
  },
  {
    icon: "💳",
    title: "Integrasi BPJS",
    desc: "Verifikasi dan klaim BPJS Kesehatan secara real-time",
  },
  {
    icon: "📊",
    title: "Integrasi Satu Sehat",
    desc: "Terhubung dengan platform Satu Sehat (SATUSEHAT)",
  },
];

export default function Integration() {
  return (
    <section className="gradient-brand py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Integrasi Lengkap</h2>
          <p className="mt-3 text-indigo-100">
            Terhubung dengan sistem nasional dan layanan kesehatan
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-3 gap-5">
          {items.map((it) => (
            <div
              key={it.title}
              className="rounded-2xl bg-white/10 border border-white/20 p-6 text-center"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center text-3xl">
                {it.icon}
              </div>
              <h3 className="mt-3 font-bold text-white">{it.title}</h3>
              <p className="mt-2 text-sm text-indigo-100 leading-relaxed">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
