const SearchModal = ({ searchQuery, setSearchQuery, onClose }) => {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50"
      style={{ WebkitBackdropFilter: "blur(4px)", backdropFilter: "blur(4px)" }}
      onClick={onClose}
    >
      <div
        className="relative bg-white dark:bg-neutral-900 p-8 rounded-lg shadow-lg w-full max-w-[800px]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500"
        >
          ✕
        </button>

        <div className="mt-3">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search..."
            autoFocus
            className="w-full bg-neutral-100 dark:bg-neutral-950 shadow-xs border border-neutral-200 dark:border-neutral-800 rounded-md px-4 py-2 focus:outline-none text-neutral-700 dark:text-neutral-300 placeholder:text-neutral-500 text-base"
          />
        </div>

        <div className="mt-4 text-neutral-500">
          Searching for: <span className="font-semibold">{searchQuery}</span>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
