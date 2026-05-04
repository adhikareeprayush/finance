import { Link } from "react-router-dom";
import CompanyLogo from "../components/reusable/CompanyLogo";
import { MOCK_TRANSCRIPTS, findCompanyBySymbol } from "../mock/fixtures";

const Transcripts = () => (
  <div className="flex flex-col gap-6">
    <div>
      <h1 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100">
        Earnings transcripts
      </h1>
      <p className="text-neutral-500 dark:text-neutral-400 mt-1">
        Sample call summaries — full PDF mock links below each card.
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-6">
      {MOCK_TRANSCRIPTS.map((t) => {
        const c = findCompanyBySymbol(t.symbol);
        return (
          <article
            key={t.id}
            className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 overflow-hidden shadow-sm flex flex-col"
          >
            <div className="relative h-44">
              <img
                src={t.image}
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 flex items-center gap-2">
                {c && (
                  <CompanyLogo
                    src={c.logo}
                    alt={c.name}
                    className="size-10 rounded-lg ring-2 ring-white/80"
                  />
                )}
                <div>
                  <p className="text-white font-semibold text-sm">{t.symbol}</p>
                  <p className="text-white/80 text-xs">{t.date}</p>
                </div>
              </div>
            </div>
            <div className="p-4 flex flex-col gap-3 flex-1">
              <h2 className="text-lg font-semibold text-neutral-800 dark:text-neutral-100">
                {t.title}
              </h2>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                {t.excerpt}
              </p>
              <div className="flex items-center justify-between gap-2 mt-auto pt-2">
                <span className="text-xs text-neutral-500">{t.duration}</span>
                <div className="flex gap-2">
                  <a
                    href="https://example.com/mock-transcript.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-neutral-200 dark:bg-neutral-700 text-neutral-800 dark:text-neutral-100 hover:opacity-90"
                  >
                    Open PDF (mock)
                  </a>
                  {c && (
                    <Link
                      to={`/dashboard/insight/${t.symbol}`}
                      className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-primary text-white hover:opacity-90"
                    >
                      Insight
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  </div>
);

export default Transcripts;
