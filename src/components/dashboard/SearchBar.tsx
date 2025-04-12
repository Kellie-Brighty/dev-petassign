
export default function SearchBar() {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search feed, animals, breeds, etc."
        className="w-full py-2 pl-8 pr-3 rounded-lg bg-gray-100 border-0 focus:outline-none focus:ring-2 focus:ring-primary/20 text-sm"
      />
      <div className="absolute left-2.5 top-1/2 transform -translate-y-1/2">
        <svg
          className="w-4 h-4 text-gray-500"
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
