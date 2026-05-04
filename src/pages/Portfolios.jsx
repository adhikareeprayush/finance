import CompanyLogo from "../components/reusable/CompanyLogo";
import { MOCK_PORTFOLIOS, findCompanyBySymbol } from "../mock/fixtures";

const Portfolios = () => (
  <div className="flex flex-col gap-6">
    <div>
      <h1 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100">
        Portfolios
      </h1>
      <p className="text-neutral-500 dark:text-neutral-400 mt-1">
        Illustrative allocations — values are static mock numbers.
      </p>
    </div>

    <div className="grid lg:grid-cols-2 gap-6">
      {MOCK_PORTFOLIOS.map((pf) => (
        <article
          key={pf.id}
          className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 overflow-hidden shadow-sm flex flex-col"
        >
          <div className="relative h-36">
            <img
              src={pf.coverImage}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent" />
            <div className="absolute bottom-3 left-4 right-4 flex justify-between items-end gap-3">
              <div>
                <h2 className="text-xl font-bold text-white">{pf.name}</h2>
                <p className="text-white/80 text-sm mt-0.5">{pf.objective}</p>
              </div>
              <div className="text-right">
                <p className="text-white text-lg font-semibold">{pf.totalValue}</p>
                <p
                  className={`text-sm font-medium ${
                    pf.positive
                      ? "text-emerald-300"
                      : "text-red-300"
                  }`}
                >
                  {pf.dayChange} today
                </p>
              </div>
            </div>
          </div>

          <div className="p-4 flex flex-col gap-4">
            <div className="flex h-3 rounded-full overflow-hidden bg-neutral-200 dark:bg-neutral-800">
              {pf.holdings.map((h, idx) => (
                <div
                  key={h.symbol}
                  title={`${h.symbol} ${h.weightPct}%`}
                  className="h-full first:rounded-l-full last:rounded-r-full"
                  style={{
                    width: `${h.weightPct}%`,
                    backgroundColor: [
                      "#6366f1",
                      "#8b5cf6",
                      "#a855f7",
                      "#d946ef",
                    ][idx % 4],
                  }}
                />
              ))}
            </div>

            <ul className="flex flex-col gap-2">
              {pf.holdings.map((h) => {
                const c = findCompanyBySymbol(h.symbol);
                return (
                  <li
                    key={h.symbol}
                    className="flex items-center gap-3 py-2 border-b border-neutral-100 dark:border-neutral-800 last:border-0"
                  >
                    {c && (
                      <CompanyLogo
                        src={c.logo}
                        alt={c.name}
                        className="size-10 rounded-lg"
                      />
                    )}
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-neutral-800 dark:text-neutral-100">
                        {h.symbol}
                      </p>
                      <p className="text-xs text-neutral-500">
                        {h.weightPct}% of portfolio
                      </p>
                    </div>
                    <span className="text-sm font-medium text-neutral-600 dark:text-neutral-300">
                      {h.valueDisplay}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </article>
      ))}
    </div>
  </div>
);

export default Portfolios;
