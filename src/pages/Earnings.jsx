import CompanyLogo from "../components/reusable/CompanyLogo";
import { MOCK_EARNINGS } from "../mock/fixtures";

const Earnings = () => (
  <div className="flex flex-col gap-6">
    <div>
      <h1 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100">
        Earnings calendar
      </h1>
      <p className="text-neutral-500 dark:text-neutral-400 mt-1">
        Mock EPS and revenue figures for demo layout — not live estimates.
      </p>
    </div>

    <div className="grid gap-4">
      {MOCK_EARNINGS.map((row) => (
        <article
          key={`${row.symbol}-${row.reportDate}`}
          className="flex flex-col sm:flex-row rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 overflow-hidden shadow-sm"
        >
          <div className="relative w-full sm:w-52 h-40 sm:h-auto shrink-0">
            <img
              src={row.image}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="p-5 flex flex-col gap-3 flex-1 min-w-0">
            <div className="flex items-start gap-3">
              <CompanyLogo src={row.logo} alt={row.companyName} />
              <div>
                <h2 className="text-lg font-semibold text-neutral-800 dark:text-neutral-100">
                  {row.companyName}{" "}
                  <span className="text-neutral-500 font-normal">
                    ({row.symbol})
                  </span>
                </h2>
                <p className="text-sm text-neutral-500">
                  {row.fiscalQuarter} · {row.reportDate} · {row.reportTime}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
              <div className="rounded-lg bg-neutral-100 dark:bg-neutral-800 p-3">
                <p className="text-neutral-500 text-xs mb-1">EPS est.</p>
                <p className="font-semibold dark:text-neutral-100">
                  ${row.epsEstimate.toFixed(2)}
                </p>
              </div>
              <div className="rounded-lg bg-neutral-100 dark:bg-neutral-800 p-3">
                <p className="text-neutral-500 text-xs mb-1">EPS actual</p>
                <p className="font-semibold dark:text-neutral-100">
                  ${row.epsActual.toFixed(2)}
                </p>
              </div>
              <div className="rounded-lg bg-neutral-100 dark:bg-neutral-800 p-3">
                <p className="text-neutral-500 text-xs mb-1">Surprise</p>
                <p
                  className={`font-semibold ${
                    row.beat ? "text-emerald-600 dark:text-emerald-400" : "text-red-600 dark:text-red-400"
                  }`}
                >
                  {row.surprisePct}
                </p>
              </div>
              <div className="rounded-lg bg-neutral-100 dark:bg-neutral-800 p-3">
                <p className="text-neutral-500 text-xs mb-1">Revenue</p>
                <p className="font-semibold dark:text-neutral-100">
                  {row.revenueDisplay}
                </p>
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  </div>
);

export default Earnings;
