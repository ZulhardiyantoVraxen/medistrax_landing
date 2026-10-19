import { comparisonTable } from "@/data/pricing";

export default function ComparisonTable() {
  return (
    <section className="bg-slate-50 py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            Perbandingan Fitur Lengkap
          </h2>
          <p className="mt-3 text-slate-500">Bandingkan semua fitur di setiap paket Medistrax</p>
        </div>

        <div className="mt-10 space-y-4 md:hidden">
          {comparisonTable.columns.slice(1).map((packageName, packageIndex) => (
            <article
              key={packageName}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
            >
              <h3 className="bg-slate-50 px-5 py-4 font-bold text-slate-800">
                {packageName}
              </h3>
              <dl className="divide-y divide-slate-100 px-5">
                {comparisonTable.rows.map((row) => (
                  <div
                    key={row[0]}
                    className="flex items-start justify-between gap-4 py-3"
                  >
                    <dt className="min-w-0 flex-1 text-sm font-medium text-slate-600">
                      {row[0]}
                    </dt>
                    <dd className="min-w-0 flex-1 break-words text-right text-sm font-semibold text-slate-800">
                      {row[packageIndex + 1]}
                    </dd>
                  </div>
                ))}
              </dl>
            </article>
          ))}
        </div>

        <div className="mt-10 hidden overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm md:block">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                {comparisonTable.columns.map((c, i) => (
                  <th
                    key={c}
                    className={
                      "px-5 py-4 text-left font-bold text-slate-800 whitespace-nowrap " +
                      (i === 0 ? "sticky left-0 bg-slate-50" : "")
                    }
                  >
                    {c}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparisonTable.rows.map((row, idx) => (
                <tr key={idx} className="border-b border-slate-100 last:border-0">
                  {row.map((cell, i) => (
                    <td
                      key={i}
                      className={
                        "px-5 py-4 whitespace-nowrap " +
                        (i === 0
                          ? "sticky left-0 bg-white font-semibold text-slate-700"
                          : "text-slate-600")
                      }
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
