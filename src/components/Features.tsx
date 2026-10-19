import Image from "next/image";

const features = [
  {
    icon: "/img/ic_jadwal_dkr.png",
    title: "Manajemen Pasien",
    desc: "Kelola data pasien dengan rekam medis elektronik yang aman dan terintegrasi.",
  },
  {
    icon: "/img/ic_appointment.png",
    title: "Appointment Online",
    desc: "Sistem booking janji temu online untuk pasien, mengurangi waktu tunggu hingga 50%.",
  },
  {
    icon: "/img/ic_multi_cabang.png",
    title: "Integrasi Multi-Cabang",
    desc: "Sinkronisasi data antar cabang klinik/apotek dalam satu platform terpusat.",
  },
  {
    icon: "/img/ic_regulasi_nasional.png",
    title: "Regulasi Integrasi Nasional",
    desc: "Kepatuhan penuh dengan regulasi nasional, integrasi Kemenkes dan BPJS.",
  },
  {
    icon: "/img/ic_apotik_terintegrasi.png",
    title: "Manajemen Stok & Apotek",
    desc: "Sistem manajemen stok obat dengan peringatan kadaluarsa dan POS terintegrasi.",
  },
  {
    icon: "/img/ic_laporan_real_time.png",
    title: "Laporan Real-time",
    desc: "Laporan keuangan dan operasional real-time untuk pengambilan keputusan lebih cepat.",
  },
];

export default function Features() {
  return (
    <section id="fitur" className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            Fitur Unggulan Medistrax
          </h2>
          <p className="mt-3 text-slate-500">
            Solusi lengkap untuk manajemen klinik dan apotek modern
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl border border-slate-100 p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full gradient-brand p-3">
                <Image src={f.icon} alt="" width={32} height={32} className="h-full w-full object-contain" />
              </div>
              <h3 className="mt-4 font-bold text-slate-900">{f.title}</h3>
              <p className="mt-2 text-sm text-slate-500 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
