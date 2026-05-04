import { useMemo } from "react";
import { useAuth } from "../providers/AuthProvider";
import CompanyLogo from "../components/reusable/CompanyLogo";

const Profile = () => {
  const { user } = useAuth();
  const avatarUrl = useMemo(
    () =>
      `https://picsum.photos/seed/${encodeURIComponent(user?.email || "profile")}/256/256`,
    [user?.email]
  );

  return (
    <div className="max-w-3xl mx-auto flex flex-col gap-8 pb-8">
      <div className="relative h-40 rounded-2xl overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&w=1400&q=80"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
      </div>

      <div className="-mt-16 relative flex flex-col sm:flex-row gap-6 items-start px-1">
        <CompanyLogo
          src={avatarUrl}
          alt={user?.name || "Profile"}
          className="size-28 rounded-2xl object-cover ring-4 ring-white dark:ring-neutral-900 shadow-xl"
        />
        <div className="sm:pt-14 flex-1 min-w-0">
          <h1 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
            {user?.name || "Guest"}
          </h1>
          <p className="text-neutral-500 dark:text-neutral-400 mt-1">{user?.email}</p>
          <p className="text-sm text-neutral-500 mt-4 leading-relaxed">
            Demo profile — details are stored locally only. Replace this view with your API-backed
            user settings when you connect a backend.
          </p>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 p-4 bg-white dark:bg-neutral-900">
          <p className="text-xs font-semibold uppercase text-neutral-500 mb-1">Account</p>
          <p className="font-medium dark:text-neutral-100">Standard (mock)</p>
          <p className="text-sm text-neutral-500 mt-2">No billing — frontend demo.</p>
        </div>
        <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 p-4 bg-white dark:bg-neutral-900">
          <p className="text-xs font-semibold uppercase text-neutral-500 mb-1">Preferences</p>
          <p className="font-medium dark:text-neutral-100">Theme follows header toggle</p>
          <p className="text-sm text-neutral-500 mt-2"> persisted separately per session.</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
