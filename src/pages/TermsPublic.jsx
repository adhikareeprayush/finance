import { Link } from "react-router-dom";
import { ICONS } from "../assets/Assets";
import Terms from "./Terms";

const TermsPublic = () => (
  <div className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100">
    <header className="border-b border-neutral-200 dark:border-neutral-800 px-4 py-4 flex items-center justify-between max-w-6xl mx-auto">
      <Link to="/" className="flex items-center gap-2 font-semibold">
        <img src={ICONS.logo} alt="" className="size-9 object-contain" />
        LedgerLens
      </Link>
      <Link
        to="/login"
        className="text-sm font-semibold text-primary hover:underline"
      >
        Sign in
      </Link>
    </header>
    <div className="max-w-6xl mx-auto px-4 pt-6">
      <Terms />
    </div>
  </div>
);

export default TermsPublic;
