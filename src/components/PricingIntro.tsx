const points = [
  {
    icon: "⚖️",
    title: "Adil",
    desc: "Klinik kecil bayar lebih rendah, klinik besar bayar sesuai pemakaian",
  },
  {
    icon: "👁️",
    title: "Transparan",
    desc: "Tidak ada biaya tersembunyi, semua diumumkan di muka",
  },
  {
    icon: "🔄",
    title: "Fleksibel",
    desc: "Upgrade/downgrade tier kapan saja sesuai kebutuhan bisnis",
  },
  {
    icon: "🔒",
    title: "Isolasi Resource",
    desc: "Setiap pelanggan punya database sendiri, tidak saling ganggu",
  },
];

export default function PricingIntro() {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            Model Harga: Pay as You Grow
          </h2>
          <p className="mt-3 text-slate-500">
            Bayar sesuai kapasitas database yang dialokasikan, tanpa biaya tersembunyi
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {points.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl bg-slate-50 border border-slate-100 p-6 text-center"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-white text-2xl shadow-sm">
                {p.icon}
              </div>
              <h3 className="mt-4 font-bold text-slate-900">{p.title}</h3>
              <p className="mt-2 text-sm text-slate-500 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
