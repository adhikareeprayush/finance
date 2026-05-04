import { Link } from "react-router-dom";

const NotFound = () => (
  <div className="min-h-screen grid md:grid-cols-2 bg-neutral-950">
    <div className="relative min-h-[40vh] md:min-h-screen">
      <img
        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
    </div>
    <div className="flex flex-col items-center justify-center p-8 bg-white dark:bg-neutral-900">
      <img
        src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=400&q=80"
        alt=""
        className="w-40 h-40 rounded-2xl object-cover mb-6 shadow-lg"
      />
      <h1 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-2">
        Page not found
      </h1>
      <p className="text-neutral-600 dark:text-neutral-400 text-center max-w-sm mb-6">
        That route isn&apos;t part of LedgerLens. Use the button below to return to your workspace.
      </p>
      <div className="flex flex-wrap gap-3 justify-center">
        <Link
          to="/dashboard"
          className="rounded-lg bg-primary text-white font-semibold px-6 py-2.5 hover:opacity-95"
        >
          Dashboard
        </Link>
        <Link
          to="/"
          className="rounded-lg border border-neutral-300 dark:border-neutral-600 font-semibold px-6 py-2.5 hover:bg-neutral-100 dark:hover:bg-neutral-800"
        >
          Landing page
        </Link>
      </div>
    </div>
  </div>
);

export default NotFound;
