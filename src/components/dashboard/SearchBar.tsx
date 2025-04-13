export default function SearchBar() {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search feed, animals, breeds, etc."
        className="w-full py-2 pl-8 pr-3 rounded-lg bg-gray-100 dark:bg-[#1A2542] border-0 focus:outline-none focus:ring-2 focus:ring-primary/20 text-sm text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
      />
      <div className="absolute left-2.5 top-1/2 transform -translate-y-1/2">
        <svg
          className="w-4 h-4 text-gray-500 dark:text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
    </div>
  );
}
