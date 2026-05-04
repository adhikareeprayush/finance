import { Link } from "react-router-dom";
import { ICONS } from "../assets/Assets";
import { useAuth } from "../providers/AuthProvider";
import { useTheme } from "../providers/ThemeProvider";
import { IoMoon, IoSunny } from "react-icons/io5";
import {
  ArrowRight,
  BarChart3,
  Calculator,
  Layers,
  LayoutDashboard,
  LineChart,
  Newspaper,
  PieChart,
  Shield,
  Sparkles,
  TrendingUp,
  Wallet,
  Zap,
} from "lucide-react";

const highlights = [
  {
    Icon: LayoutDashboard,
    label: "Unified workspace",
    desc: "Insights, DCF, news, watchlists — one authenticated shell.",
    span: "lg:col-span-2 lg:row-span-2",
    accent: "from-sky-500/20 to-blue-600/10",
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1200&q=80",
  },
  {
    Icon: LineChart,
    label: "Quarterly fundamentals",
    desc: "NVDA-style JSON series — revenue, margins, segments, valuation.",
    span: "lg:col-span-1",
    accent: "from-emerald-500/15 to-teal-600/10",
  },
  {
    Icon: Calculator,
    label: "DCF engine",
    desc: "Enterprise value math runs entirely client-side.",
    span: "lg:col-span-1",
    accent: "from-violet-500/15 to-purple-600/10",
  },
  {
    Icon: Newspaper,
    label: "News desk",
    desc: "Curated fixtures with imagery — external publisher links.",
    span: "lg:col-span-1",
    accent: "from-amber-500/15 to-orange-600/10",
  },
  {
    Icon: Wallet,
    label: "Portfolios & lists",
    desc: "Allocation strips, earnings cards, transcripts — demo-ready.",
    span: "lg:col-span-1",
    accent: "from-rose-500/15 to-pink-600/10",
  },
];

function DashboardPreview() {
  const bars = [40, 72, 56, 88, 64, 94, 76, 82, 58, 90, 68, 84];
  return (
    <div className="relative mx-auto w-full max-w-[540px]">
      <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-sky-500/30 via-blue-500/20 to-violet-600/30 blur-2xl opacity-70 dark:opacity-90" />
      <div className="relative overflow-hidden rounded-2xl border border-white/20 bg-neutral-950 shadow-2xl shadow-black/40 ring-1 ring-white/10 dark:shadow-black/60">
        <div className="flex h-9 items-center gap-2 border-b border-white/10 bg-neutral-900/90 px-4">
          <span className="size-2.5 rounded-full bg-red-400/90" />
          <span className="size-2.5 rounded-full bg-amber-400/90" />
          <span className="size-2.5 rounded-full bg-emerald-400/90" />
          <span className="ml-3 font-mono text-[10px] tracking-wide text-neutral-500">
            ledgerlens — dashboard
          </span>
        </div>
        <div className="flex min-h-[280px] md:min-h-[320px]">
          <aside className="flex w-14 shrink-0 flex-col gap-2 border-r border-white/10 bg-neutral-950 p-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className={`h-8 rounded-lg ${i === 1 ? "bg-sky-500/25 ring-1 ring-sky-400/40" : "bg-white/5"}`}
              />
            ))}
          </aside>
          <div className="flex flex-1 flex-col gap-3 bg-gradient-to-br from-neutral-900 to-neutral-950 p-4">
            <div className="grid grid-cols-3 gap-2">
              {[
                { l: "Portfolio", v: "$128.4k", c: "text-emerald-400" },
                { l: "Day Δ", v: "+1.24%", c: "text-emerald-400" },
                { l: "Positions", v: "14", c: "text-sky-400" },
              ].map((s) => (
                <div
                  key={s.l}
                  className="rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2 backdrop-blur-sm"
                >
                  <p className="text-[10px] font-medium uppercase tracking-wider text-neutral-500">
                    {s.l}
                  </p>
                  <p className={`mt-1 font-semibold tabular-nums ${s.c}`}>{s.v}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-1 flex-col rounded-xl border border-white/10 bg-neutral-900/80 p-3">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-xs font-medium text-neutral-400">
                  Revenue trajectory
                </span>
                <span className="rounded-md bg-emerald-500/15 px-2 py-0.5 text-[10px] font-semibold text-emerald-400">
                  Mock series
                </span>
              </div>
              <div className="flex flex-1 items-end gap-1 px-1 pb-1">
                {bars.map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-sm bg-gradient-to-t from-sky-600/80 to-cyan-400/90 opacity-90"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const Landing = () => {
  const { isAuthenticated } = useAuth();
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#f8fafc] text-neutral-900 dark:bg-[#030712] dark:text-neutral-100">
      {/* Ambient mesh */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -left-32 top-0 h-[520px] w-[520px] rounded-full bg-sky-400/25 blur-[100px] dark:bg-sky-500/20" />
        <div className="absolute -right-24 top-40 h-[420px] w-[420px] rounded-full bg-violet-500/20 blur-[100px] dark:bg-violet-600/25" />
        <div className="absolute bottom-0 left-1/3 h-[380px] w-[380px] rounded-full bg-cyan-400/20 blur-[90px] dark:bg-cyan-500/15" />
        <div
          className="absolute inset-0 opacity-[0.35] dark:opacity-[0.12]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2394a3b8' fill-opacity='0.14'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <header className="sticky top-0 z-50 border-b border-neutral-200/80 bg-white/75 backdrop-blur-xl dark:border-white/10 dark:bg-neutral-950/75">
        <div className="mx-auto flex h-[4.25rem] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <Link
            to="/"
            className="flex items-center gap-2.5 transition-opacity hover:opacity-90"
          >
            <img
              src={ICONS.logo}
              alt=""
              className="size-10 shrink-0 rounded-xl shadow-lg shadow-sky-900/20 ring-1 ring-black/10 dark:ring-white/15"
            />
            <div className="flex flex-col leading-tight">
              <span className="text-base font-bold tracking-tight">LedgerLens</span>
              <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400">
                Finance OS
              </span>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 text-sm font-medium text-neutral-600 md:flex dark:text-neutral-400">
            <a href="#platform" className="transition-colors hover:text-sky-600 dark:hover:text-sky-400">
              Platform
            </a>
            <a href="#capabilities" className="transition-colors hover:text-sky-600 dark:hover:text-sky-400">
              Capabilities
            </a>
            <a href="#author" className="transition-colors hover:text-sky-600 dark:hover:text-sky-400">
              Author
            </a>
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              type="button"
              onClick={toggleTheme}
              className="rounded-xl border border-neutral-200/80 bg-white/80 p-2.5 text-lg text-neutral-600 transition-colors hover:bg-neutral-50 dark:border-white/10 dark:bg-white/5 dark:text-neutral-300 dark:hover:bg-white/10"
              aria-label="Toggle theme"
            >
              {theme === "light" ? <IoMoon /> : <IoSunny />}
            </button>
            {isAuthenticated ? (
              <Link
                to="/dashboard"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-sky-600 to-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-sky-500/25 transition hover:brightness-110"
              >
                Dashboard
                <ArrowRight className="size-4" />
              </Link>
            ) : (
              <>
                <Link
                  to="/login"
                  className="hidden rounded-xl px-4 py-2.5 text-sm font-semibold text-neutral-700 transition hover:bg-neutral-100 sm:inline dark:text-neutral-300 dark:hover:bg-white/10"
                >
                  Sign in
                </Link>
                <Link
                  to="/signup"
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-sky-600 to-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-sky-500/25 transition hover:brightness-110"
                >
                  Get started
                  <ArrowRight className="size-4" />
                </Link>
              </>
            )}
          </div>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="relative mx-auto max-w-7xl px-4 pb-20 pt-14 sm:px-6 lg:px-8 lg:pb-28 lg:pt-20">
          <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-10">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-500/25 bg-sky-500/10 px-4 py-1.5 text-xs font-semibold text-sky-700 shadow-sm dark:border-sky-400/20 dark:bg-sky-500/10 dark:text-sky-300">
                <Sparkles className="size-3.5" />
                Frontend-only · Mock data · Production-grade UI
              </div>
              <h1 className="text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.25rem] xl:text-6xl">
                <span className="text-neutral-900 dark:text-white">
                  Your capital markets
                </span>
                <br />
                <span className="bg-gradient-to-r from-sky-600 via-blue-600 to-violet-600 bg-clip-text text-transparent dark:from-sky-400 dark:via-blue-400 dark:to-violet-400">
                  command center.
                </span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-neutral-600 dark:text-neutral-400">
                A premium React dashboard for demos and portfolios: sector insights, fundamental
                charts, DCF modeling, and editorial news — all powered by bundled fixtures, zero
                backend required.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                {isAuthenticated ? (
                  <Link
                    to="/dashboard"
                    className="inline-flex items-center gap-2 rounded-2xl bg-neutral-900 px-8 py-4 text-base font-semibold text-white shadow-xl transition hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-100"
                  >
                    Open workspace
                    <ArrowRight className="size-5" />
                  </Link>
                ) : (
                  <>
                    <Link
                      to="/signup"
                      className="inline-flex items-center gap-2 rounded-2xl bg-neutral-900 px-8 py-4 text-base font-semibold text-white shadow-xl transition hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-100"
                    >
                      Start free
                      <ArrowRight className="size-5" />
                    </Link>
                    <Link
                      to="/login"
                      className="inline-flex items-center gap-2 rounded-2xl border-2 border-neutral-300 bg-white/80 px-8 py-4 text-base font-semibold backdrop-blur-sm transition hover:border-neutral-400 hover:bg-white dark:border-white/15 dark:bg-white/5 dark:hover:bg-white/10"
                    >
                      Sign in
                    </Link>
                  </>
                )}
              </div>
              <div className="mt-12 flex flex-wrap gap-6 border-t border-neutral-200/80 pt-10 dark:border-white/10">
                {[
                  { icon: Zap, t: "<100ms", d: "Client-side routes" },
                  { icon: Shield, t: "No API keys", d: "Pure mock layer" },
                  { icon: Layers, t: "12+ screens", d: "Dashboard-ready" },
                ].map((item) => {
                  const HeroIcon = item.icon;
                  return (
                  <div key={item.t} className="flex items-start gap-3">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-neutral-200/80 dark:bg-white/10">
                      <HeroIcon className="size-5 text-sky-600 dark:text-sky-400" />
                    </div>
                    <div>
                      <p className="font-semibold tabular-nums text-neutral-900 dark:text-white">{item.t}</p>
                      <p className="text-sm text-neutral-500 dark:text-neutral-400">{item.d}</p>
                    </div>
                  </div>
                  );
                })}
              </div>
            </div>
            <DashboardPreview />
          </div>
        </section>

        {/* Metrics */}
        <section
          id="platform"
          className="relative border-y border-neutral-200/80 bg-white/60 py-14 backdrop-blur-sm dark:border-white/10 dark:bg-neutral-950/40"
        >
          <div className="mx-auto grid max-w-7xl gap-4 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
            {[
              {
                Icon: TrendingUp,
                stat: "6",
                label: "Live mock tickers",
                sub: "NVDA · AAPL · JPM · GS · PFE · JNJ",
              },
              {
                Icon: BarChart3,
                stat: "40+",
                label: "Chart series",
                sub: "Quarterly blocks from JSON",
              },
              {
                Icon: PieChart,
                stat: "100%",
                label: "Browser-native",
                sub: "No server round-trips",
              },
              {
                Icon: LayoutDashboard,
                stat: "12",
                label: "Surface areas",
                sub: "Insights to transcripts",
              },
            ].map((row) => {
              const MetricIcon = row.Icon;
              return (
              <div
                key={row.label}
                className="group rounded-2xl border border-neutral-200/80 bg-white p-6 shadow-sm transition hover:border-sky-500/30 hover:shadow-md dark:border-white/10 dark:bg-neutral-900/60 dark:hover:border-sky-500/25"
              >
                <MetricIcon className="size-8 text-sky-600 opacity-90 dark:text-sky-400" />
                <p className="mt-4 font-mono text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
                  {row.stat}
                </p>
                <p className="mt-1 font-semibold text-neutral-900 dark:text-white">{row.label}</p>
                <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">{row.sub}</p>
              </div>
              );
            })}
          </div>
        </section>

        {/* Bento */}
        <section id="capabilities" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-sky-600 dark:text-sky-400">
              Capabilities
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Built like a shipped product
            </h2>
            <p className="mt-4 text-neutral-600 dark:text-neutral-400">
              Module boundaries, auth guards, and sidebar IA — swap fixtures for APIs when you wire a backend.
            </p>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2">
            {highlights.map((h) => {
              const HighlightIcon = h.Icon;
              return (
              <article
                key={h.label}
                className={`group relative overflow-hidden rounded-3xl border border-neutral-200/80 bg-white shadow-sm transition hover:shadow-lg dark:border-white/10 dark:bg-neutral-900/50 dark:hover:border-white/15 ${h.span}`}
              >
                <div
                  className={`pointer-events-none absolute inset-0 bg-gradient-to-br opacity-60 transition group-hover:opacity-80 dark:opacity-40 ${h.accent}`}
                />
                {"image" in h && h.image ? (
                  <>
                    <div className="relative h-48 overflow-hidden sm:h-56 lg:h-full lg:min-h-[280px]">
                      <img
                        src={h.image}
                        alt=""
                        className="h-full w-full object-cover opacity-90 transition duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent lg:from-neutral-950/90" />
                    </div>
                    <div className="relative p-6 lg:absolute lg:inset-x-0 lg:bottom-0 lg:bg-gradient-to-t lg:from-neutral-950 lg:via-neutral-950/95 lg:to-transparent lg:pt-24">
                      <div className="mb-3 inline-flex size-10 items-center justify-center rounded-xl bg-white/15 backdrop-blur-md ring-1 ring-white/20">
                        <HighlightIcon className="size-5 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white">{h.label}</h3>
                      <p className="mt-2 max-w-md text-sm leading-relaxed text-neutral-300">
                        {h.desc}
                      </p>
                    </div>
                  </>
                ) : (
                  <div className="relative flex h-full flex-col p-6">
                    <div className="mb-4 inline-flex size-11 items-center justify-center rounded-xl bg-neutral-100 ring-1 ring-neutral-200/80 dark:bg-white/10 dark:ring-white/10">
                      <HighlightIcon className="size-5 text-sky-600 dark:text-sky-400" />
                    </div>
                    <h3 className="text-lg font-bold">{h.label}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                      {h.desc}
                    </p>
                    <div className="mt-4 flex items-center gap-1 text-sm font-semibold text-sky-600 dark:text-sky-400">
                      Explore in app
                      <ArrowRight className="size-4 transition group-hover:translate-x-0.5" />
                    </div>
                  </div>
                )}
              </article>
              );
            })}
          </div>
        </section>

        {/* Author + CTA */}
        <section
          id="author"
          className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8"
        >
          <div className="overflow-hidden rounded-3xl border border-neutral-200/80 bg-gradient-to-br from-neutral-900 via-neutral-900 to-sky-950 p-1 shadow-2xl dark:border-white/10">
            <div className="relative rounded-[1.35rem] bg-neutral-950 px-6 py-14 sm:px-10 lg:grid lg:grid-cols-2 lg:items-center lg:gap-10 lg:py-16">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_70%_-20%,rgba(56,189,248,0.22),transparent)]" />
              <div className="relative">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-400">
                  Maintainer
                </p>
                <h3 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
                  Prayush Adhikari
                </h3>
                <p className="mt-4 max-w-md text-neutral-400">
                  LedgerLens is an opinionated finance UI kit — mock auth, real layouts, and Apex charts — ideal for portfolios and pitch demos.
                </p>
                <a
                  href="https://github.com/adhikareeprayush"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-sky-400 hover:text-sky-300"
                >
                  @adhikareeprayush on GitHub
                  <ArrowRight className="size-4" />
                </a>
              </div>
              <div className="relative mt-10 lg:mt-0">
                <div className="aspect-[4/3] overflow-hidden rounded-2xl ring-1 ring-white/10">
                  <img
                    src="https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&w=1200&q=80"
                    alt=""
                    className="h-full w-full object-cover opacity-95"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-sky-600/30 to-transparent mix-blend-overlay" />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            {!isAuthenticated && (
              <>
                <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
                  Ready when you are.
                </p>
                <div className="mt-6 flex flex-wrap justify-center gap-4">
                  <Link
                    to="/signup"
                    className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-sky-600 to-blue-600 px-10 py-4 text-base font-semibold text-white shadow-xl shadow-sky-500/20 transition hover:brightness-110"
                  >
                    Create account
                    <ArrowRight className="size-5" />
                  </Link>
                  <Link
                    to="/terms"
                    className="rounded-2xl border border-neutral-300 px-8 py-4 text-base font-semibold text-neutral-700 transition hover:bg-neutral-100 dark:border-white/15 dark:text-neutral-300 dark:hover:bg-white/10"
                  >
                    Terms
                  </Link>
                </div>
              </>
            )}
          </div>
        </section>
      </main>

      <footer className="border-t border-neutral-200/80 bg-white/80 backdrop-blur-md dark:border-white/10 dark:bg-neutral-950/80">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 py-14 sm:px-6 lg:flex-row lg:justify-between lg:px-8">
          <div>
            <div className="flex items-center gap-2">
              <LayoutDashboard className="size-6 text-sky-600 dark:text-sky-400" />
              <span className="text-lg font-bold">LedgerLens</span>
            </div>
            <p className="mt-3 max-w-xs text-sm text-neutral-500 dark:text-neutral-400">
              Modern finance dashboard UI — Vite, React 19, Tailwind v4.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:gap-16">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-neutral-400">Product</p>
              <ul className="mt-4 space-y-3 text-sm font-medium">
                <li>
                  <Link to="/login" className="text-neutral-600 hover:text-sky-600 dark:text-neutral-400 dark:hover:text-sky-400">
                    Sign in
                  </Link>
                </li>
                <li>
                  <Link to="/signup" className="text-neutral-600 hover:text-sky-600 dark:text-neutral-400 dark:hover:text-sky-400">
                    Sign up
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="text-neutral-600 hover:text-sky-600 dark:text-neutral-400 dark:hover:text-sky-400">
                    Terms
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-neutral-400">Explore</p>
              <ul className="mt-4 space-y-3 text-sm font-medium">
                <li>
                  <a href="#capabilities" className="text-neutral-600 hover:text-sky-600 dark:text-neutral-400 dark:hover:text-sky-400">
                    Capabilities
                  </a>
                </li>
                <li>
                  <a href="#platform" className="text-neutral-600 hover:text-sky-600 dark:text-neutral-400 dark:hover:text-sky-400">
                    Platform
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <p className="text-xs font-bold uppercase tracking-wider text-neutral-400">© {new Date().getFullYear()}</p>
              <p className="mt-4 text-sm text-neutral-500 dark:text-neutral-400">
                Prayush Adhikari · LedgerLens
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
