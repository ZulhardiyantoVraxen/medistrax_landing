import { pricingData } from "@/data/pricing";

export default function Pricing() {
  return (
    <section id="harga" className="bg-slate-50 py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            Harga Transparan per Tier
          </h2>
          <p className="mt-3 text-slate-500">
            Berdasarkan kapasitas database yang dialokasikan per tenant
          </p>
        </div>

        <div className="mt-14 space-y-16">
          {pricingData.map((product) => (
            <div key={product.key} id={product.key}>
              <h3 className="flex items-center gap-2 text-2xl font-bold text-slate-900">
                <span>{product.icon}</span>
                {product.title}
              </h3>

              <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {product.tiers.map((tier) => (
                  <div
                    key={tier.name}
                    className={
                      "flex flex-col rounded-2xl border p-6 bg-white " +
                      (tier.highlighted
                        ? "border-indigo-400 ring-2 ring-indigo-200 shadow-md"
                        : "border-slate-200")
                    }
                  >
                    {tier.badge && (
                      <span className="mb-2 inline-block w-fit rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-semibold text-amber-700">
                        {tier.badge}
                      </span>
                    )}
                    <div className="text-sm font-semibold text-slate-500">{tier.name}</div>
                    <div className="mt-1">
                      {tier.price === "Custom" ? (
                        <span className="text-2xl font-extrabold gradient-text-brand">Custom</span>
                      ) : (
                        <>
                          <span className="text-2xl font-extrabold text-slate-900">{tier.price}</span>
                          <span className="text-sm text-slate-400">{tier.priceNote}</span>
                        </>
                      )}
                    </div>
                    <div className="mt-1 text-xs font-medium text-slate-400">{tier.database}</div>

                    <hr className="my-4 border-slate-100" />

                    <ul className="flex-1 space-y-2.5">
                      {tier.features.map((f) => (
                        <li key={f} className="flex gap-2 text-sm text-slate-600">
                          <span className="text-indigo-500">✓</span>
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>

                    <a
                      href="#kontak"
                      className={
                        "mt-6 inline-flex items-center justify-center rounded-full px-4 py-2.5 text-sm font-semibold transition-colors " +
                        (tier.cta === "Hubungi Kami"
                          ? "gradient-brand text-white hover:opacity-90"
                          : "border border-indigo-200 text-indigo-600 hover:bg-indigo-50")
                      }
                    >
                      {tier.cta}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
