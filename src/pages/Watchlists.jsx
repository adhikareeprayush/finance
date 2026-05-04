import { Link } from "react-router-dom";
import CompanyLogo from "../components/reusable/CompanyLogo";
import { MOCK_WATCHLISTS, findCompanyBySymbol } from "../mock/fixtures";

const Watchlists = () => (
  <div className="flex flex-col gap-6">
    <div>
      <h1 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100">
        Watchlists
      </h1>
      <p className="text-neutral-500 dark:text-neutral-400 mt-1">
        Curated mock lists — tap a ticker to open company insight.
      </p>
    </div>

    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
      {MOCK_WATCHLISTS.map((list) => (
        <article
          key={list.id}
          className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 overflow-hidden shadow-sm flex flex-col"
        >
          <div className="relative h-40">
            <img
              src={list.coverImage}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-3 left-3 right-3">
              <h2 className="text-lg font-semibold text-white drop-shadow">
                {list.name}
              </h2>
            </div>
          </div>
          <div className="p-4 flex flex-col gap-3 flex-1">
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              {list.description}
            </p>
            <ul className="flex flex-col gap-2">
              {list.symbols.map((sym) => {
                const c = findCompanyBySymbol(sym);
                if (!c) return null;
                return (
                  <li key={sym}>
                    <Link
                      to={`/dashboard/insight/${sym}`}
                      className="flex items-center gap-3 p-2 rounded-xl hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                    >
                      <CompanyLogo src={c.logo} alt={c.name} />
                      <div className="flex flex-col min-w-0">
                        <span className="font-semibold text-neutral-800 dark:text-neutral-100">
                          {sym}
                        </span>
                        <span className="text-xs text-neutral-500 truncate">
                          {c.name}
                        </span>
                      </div>
                      <span className="ml-auto text-sm text-neutral-600 dark:text-neutral-300">
                        {c.price}
                      </span>
                    </Link>
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

export default Watchlists;
