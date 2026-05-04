import { Link } from "react-router-dom";
import CompanyLogo from "./CompanyLogo";
import { MOCK_NEWS, searchCompanies } from "../../mock/fixtures";

const SearchModal = ({ searchQuery, setSearchQuery, onClose }) => {
  const companies = searchCompanies(searchQuery);
  const newsHits = MOCK_NEWS.filter(
    (n) =>
      !searchQuery.trim() ||
      n.headline.toLowerCase().includes(searchQuery.trim().toLowerCase()) ||
      n.source.toLowerCase().includes(searchQuery.trim().toLowerCase())
  ).slice(0, 4);

  return (
    <div
      className="fixed inset-0 flex items-start justify-center pt-[12vh] px-4 bg-black/50 backdrop-blur-sm z-[200] overflow-y-auto"
      style={{
        WebkitBackdropFilter: "blur(4px)",
        backdropFilter: "blur(4px)",
      }}
      onClick={onClose}
    >
      <div
        className="relative bg-white dark:bg-neutral-900 rounded-xl shadow-xl w-full max-w-[720px] mb-12 border border-neutral-200 dark:border-neutral-800"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-3 right-3 text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-200 text-lg z-10"
          aria-label="Close search"
        >
          ✕
        </button>

        <div className="p-4 border-b border-neutral-200 dark:border-neutral-800">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search companies & news..."
            autoFocus
            className="w-full bg-neutral-100 dark:bg-neutral-950 shadow-xs border border-neutral-200 dark:border-neutral-800 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary text-neutral-700 dark:text-neutral-300 placeholder:text-neutral-500 text-base"
          />
        </div>

        <div className="max-h-[65vh] overflow-y-auto p-4 flex flex-col gap-6">
          <section>
            <h3 className="text-xs font-semibold uppercase tracking-wide text-neutral-500 mb-3">
              Companies
            </h3>
            <ul className="flex flex-col gap-2">
              {companies.map((c) => (
                <li key={c.symbol}>
                  <Link
                    to={`/dashboard/insight/${c.symbol}`}
                    onClick={onClose}
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                  >
                    <CompanyLogo src={c.logo} alt={c.name} />
                    <div className="flex flex-col min-w-0">
                      <span className="font-semibold text-neutral-800 dark:text-neutral-100 truncate">
                        {c.symbol}
                      </span>
                      <span className="text-sm text-neutral-500 truncate">
                        {c.name}
                      </span>
                    </div>
                    <span className="ml-auto text-sm font-medium text-neutral-600 dark:text-neutral-300">
                      {c.price}
                    </span>
                  </Link>
                </li>
              ))}
              {companies.length === 0 && (
                <li className="text-sm text-neutral-500 py-2">
                  No companies match “{searchQuery}”.
                </li>
              )}
            </ul>
          </section>

          <section>
            <h3 className="text-xs font-semibold uppercase tracking-wide text-neutral-500 mb-3">
              News
            </h3>
            <ul className="flex flex-col gap-3">
              {newsHits.map((article, i) => (
                <li key={i}>
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex gap-3 p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                  >
                    <img
                      src={article.image}
                      alt={article.headline}
                      className="w-20 h-14 rounded-md object-cover shrink-0"
                    />
                    <div className="min-w-0">
                      <p className="font-medium text-neutral-800 dark:text-neutral-100 text-sm line-clamp-2">
                        {article.headline}
                      </p>
                      <p className="text-xs text-neutral-500 mt-1">
                        {article.source}
                      </p>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
