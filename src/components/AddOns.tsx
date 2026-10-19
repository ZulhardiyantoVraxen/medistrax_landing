import { addOns } from "@/data/pricing";

export default function AddOns() {
  return (
    <section className="bg-slate-50 pb-16 lg:pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {addOns.map((a) => (
            <div
              key={a.name}
              className={
                "rounded-xl border bg-white p-5 " +
                (a.featured ? "border-indigo-300 ring-1 ring-indigo-100" : "border-slate-200")
              }
            >
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-800">
                <span className="text-slate-400">+</span>
                {a.name}
              </div>
              <div className="mt-2 text-lg font-bold text-indigo-600">{a.price}</div>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-xl border-l-4 border-indigo-400 bg-indigo-50 p-5 text-sm text-slate-700 space-y-1">
          <p>💡 Diskon 5–10% untuk multi-cabang &amp; bundling 2–3 produk. Hubungi kami untuk simulasi.</p>
          <p>
            Over kapasitas database: otomatis ditagih{" "}
            <strong className="font-semibold">Rp 10.000/GB</strong>, bisa dipantau sendiri.
          </p>
        </div>
      </div>
    </section>
  );
}
