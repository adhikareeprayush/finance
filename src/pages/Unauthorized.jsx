import { Link } from "react-router-dom";

const Unauthorized = () => (
  <div className="min-h-screen grid md:grid-cols-2 bg-neutral-950">
    <div className="hidden md:block relative min-h-[280px]">
      <img
        src="https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&w=1200&q=80"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
    </div>
    <div className="flex flex-col items-center justify-center p-8 bg-white dark:bg-neutral-900">
      <img
        src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=400&q=80"
        alt=""
        className="w-40 h-40 rounded-2xl object-cover mb-6 shadow-lg"
      />
      <h1 className="text-2xl font-bold text-red-600 mb-2">Unauthorized access</h1>
      <p className="text-neutral-600 dark:text-neutral-400 text-center max-w-sm mb-6">
        You don&apos;t have permission to view this resource in the demo app.
      </p>
      <Link
        to="/login"
        className="rounded-lg bg-primary text-white font-semibold px-6 py-2.5 hover:opacity-95"
      >
        Back to sign in
      </Link>
    </div>
  </div>
);

export default Unauthorized;
