const reasons = [
  {
    title: "Efisiensi Waktu & Biaya",
    desc: "Otomatisasi proses administratif mengurangi beban kerja hingga 70%",
  },
  {
    title: "Bayar Sesuai Pemakaian",
    desc: "Tier berdasarkan kapasitas database yang dialokasikan, tanpa subsidi silang antar tenant",
  },
  {
    title: "Keamanan Data Terjamin",
    desc: "Sistem dengan enkripsi tingkat tinggi dan backup data otomatis",
  },
  {
    title: "Support 24/7",
    desc: "Tim teknis siap membantu kapan saja dengan respons cepat",
  },
  {
    title: "Update Reguler",
    desc: "Selalu update dengan regulasi terbaru dari Kemenkes dan BPJS",
  },
];

export default function WhyChoose() {
  return (
    <section id="keunggulan" className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Mengapa Memilih Medistrax?
            </h2>
            <ul className="mt-8 space-y-6">
              {reasons.map((r) => (
                <li key={r.title} className="flex gap-4">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-indigo-600 text-xs text-white">
                    ✓
                  </span>
                  <div>
                    <div className="font-bold text-slate-900">{r.title}</div>
                    <p className="mt-1 text-sm text-slate-500 leading-relaxed">{r.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="gradient-brand rounded-3xl p-10 text-white">
            <div className="text-sm text-indigo-100">Efisiensi Operasional</div>
            <div className="mt-2 text-6xl font-extrabold">70%</div>
            <div className="mt-2 text-indigo-100">Lebih Efisien</div>

            <hr className="my-8 border-white/20" />

            <div className="text-sm text-indigo-100">Mulai dari</div>
            <div className="mt-2 text-4xl font-extrabold">Rp 400rb</div>
            <div className="mt-2 text-sm text-indigo-100">/bulan untuk dokter mandiri</div>
          </div>
        </div>
      </div>
    </section>
  );
}
