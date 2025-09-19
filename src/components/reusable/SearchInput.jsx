import { useState } from "react";
import SearchModal from "./SearchModal";

const SearchInput = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleClose = () => {
    setIsOpen(false);
    setSearchQuery("");
  };

  return (
    <>
      {/* Main search input */}
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onFocus={() => setIsOpen(true)} // open modal when focused
        placeholder="Search..."
        className="bg-neutral-100 dark:bg-neutral-950 shadow-xs border-[1px] border-neutral-100 dark:border-neutral-800 rounded-md px-4 py-1.5 focus:border-0 focus:outline-none text-neutral-600 dark:text-neutral-300 placeholder:text-neutral-500 text-base"
      />

      {/* Search Modal */}
      {isOpen && (
        <SearchModal
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          onClose={handleClose}
        />
      )}
    </>
  );
};

export default SearchInput;
