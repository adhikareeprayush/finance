import { Link } from "react-router-dom";
import { ICONS } from "../assets/Assets";
import { useAuth } from "../providers/AuthProvider";
import { useTheme } from "../providers/ThemeProvider";
import { IoMoon, IoSunny } from "react-icons/io5";

const features = [
  {
    title: "Sector insights",
    desc: "Filter mock equities by Technology, Finance, and Healthcare with rich quote cards.",
    image:
      "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Fundamental charts",
    desc: "Quarterly series from bundled JSON — revenue, margins, valuation, and more.",
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "DCF modeling",
    desc: "Run discounted cash flow math entirely in the browser — no server calls.",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "News & portfolios",
    desc: "Curated mock headlines, watchlists, earnings, transcripts, and allocation views.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
  },
];

const Landing = () => {
  const { isAuthenticated } = useAuth();
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100">
      <header className="sticky top-0 z-40 border-b border-neutral-200 dark:border-neutral-800 bg-white/90 dark:bg-neutral-950/90 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <img src={ICONS.logo} alt="LedgerLens" className="size-10 object-contain" />
            <span className="text-lg font-semibold tracking-tight">LedgerLens</span>
          </Link>
          <nav className="hidden sm:flex items-center gap-6 text-sm font-medium text-neutral-600 dark:text-neutral-400">
            <a href="#features" className="hover:text-primary transition-colors">
              Features
            </a>
            <a href="#about" className="hover:text-primary transition-colors">
              About
            </a>
          </nav>
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              type="button"
              onClick={toggleTheme}
              className="p-2 rounded-lg text-xl text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800"
              aria-label="Toggle theme"
            >
              {theme === "light" ? <IoMoon /> : <IoSunny />}
            </button>
            {isAuthenticated ? (
              <Link
                to="/dashboard"
                className="rounded-lg bg-primary text-white text-sm font-semibold px-4 py-2 hover:opacity-95 transition-opacity"
              >
                Open dashboard
              </Link>
            ) : (
              <>
                <Link
                  to="/login"
                  className="text-sm font-semibold text-neutral-700 dark:text-neutral-300 px-3 py-2 hover:underline"
                >
                  Sign in
                </Link>
                <Link
                  to="/signup"
                  className="rounded-lg bg-primary text-white text-sm font-semibold px-4 py-2 hover:opacity-95 transition-opacity hidden sm:inline-flex"
                >
                  Get started
                </Link>
              </>
            )}
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80"
            alt=""
            className="w-full h-full object-cover opacity-40 dark:opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-white/95 to-white dark:from-neutral-950 dark:via-neutral-950/95 dark:to-neutral-950" />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-16 pb-24 md:pt-24 md:pb-32">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-3">
            Demo finance workspace
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight max-w-3xl leading-[1.1]">
            Market clarity — mock data, real UI patterns.
          </h1>
          <p className="mt-6 text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl leading-relaxed">
            LedgerLens is a frontend-only dashboard for exploring insights, valuation tools,
            and editorial-style news. Everything runs locally with bundled fixtures — perfect for
            portfolios and product demos.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            {isAuthenticated ? (
              <Link
                to="/dashboard"
                className="inline-flex items-center justify-center rounded-xl bg-primary text-white font-semibold px-8 py-3.5 shadow-lg shadow-primary/25 hover:opacity-95 transition-opacity"
              >
                Continue to dashboard
              </Link>
            ) : (
              <>
                <Link
                  to="/signup"
                  className="inline-flex items-center justify-center rounded-xl bg-primary text-white font-semibold px-8 py-3.5 shadow-lg shadow-primary/25 hover:opacity-95 transition-opacity"
                >
                  Create free account
                </Link>
                <Link
                  to="/login"
                  className="inline-flex items-center justify-center rounded-xl border-2 border-neutral-300 dark:border-neutral-600 font-semibold px-8 py-3.5 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors"
                >
                  Sign in
                </Link>
              </>
            )}
          </div>
        </div>
      </section>

      <section id="features" className="max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-28">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Everything in one shell
        </h2>
        <p className="text-center text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto mb-14">
          Routes mirror a production app: authenticated dashboard, sidebar navigation, and
          polished empty-state patterns — without wiring a backend.
        </p>
        <div className="grid sm:grid-cols-2 gap-8 md:gap-10">
          {features.map((f) => (
            <article
              key={f.title}
              className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/80 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="aspect-[16/10] relative">
                <img src={f.image} alt="" className="absolute inset-0 w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
                  {f.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        id="about"
        className="border-y border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/50"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Built for demonstration</h2>
            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">
              Auth persists in <code className="text-sm bg-neutral-200 dark:bg-neutral-800 px-1.5 py-0.5 rounded">localStorage</code>.
              Charts read from <code className="text-sm bg-neutral-200 dark:bg-neutral-800 px-1.5 py-0.5 rounded">src/data.json</code>.
              Swap fixtures for your API when you are ready.
            </p>
            <p className="text-sm text-neutral-500">
              Author:{" "}
              <a
                href="https://github.com/adhikareeprayush"
                className="text-primary font-medium hover:underline"
              >
                Prayush Adhikari (@adhikareeprayush)
              </a>
            </p>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-video">
            <img
              src="https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&w=1200&q=80"
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <footer className="max-w-6xl mx-auto px-4 sm:px-6 py-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-neutral-500">
        <span>© {new Date().getFullYear()} LedgerLens</span>
        <div className="flex gap-6">
          <Link to="/login" className="hover:text-primary">
            Sign in
          </Link>
          <Link to="/signup" className="hover:text-primary">
            Sign up
          </Link>
          <Link to="/terms" className="hover:text-primary">
            Terms
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
