import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import BottomNavigation from "../../components/dashboard/BottomNavigation";
import ThemeToggle from "../../components/ThemeToggle";

// Adoption listings
const adoptionListings = [
  {
    id: "golden-adopt",
    title: "Buddy - Golden Retriever",
    image:
      "https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description:
      "Friendly 3-year-old Golden Retriever looking for a forever home",
    age: "3 years",
    gender: "Male",
    location: "Queens, NY",
    date: "2 days ago",
  },
  {
    id: "tabby-adopt",
    title: "Mittens - Tabby Cat",
    image:
      "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Sweet tabby cat needs a loving home",
    age: "2 years",
    gender: "Female",
    location: "Brooklyn, NY",
    date: "4 days ago",
  },
  {
    id: "shepherd-adopt",
    title: "Max - German Shepherd",
    image:
      "https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Trained German Shepherd seeking active family",
    age: "4 years",
    gender: "Male",
    location: "Manhattan, NY",
    date: "6 days ago",
  },
  {
    id: "siamese-adopt",
    title: "Luna - Siamese Cat",
    image:
      "https://images.unsplash.com/photo-1583795128727-6ec3642408f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Playful Siamese cat looking for a caring family",
    age: "1 year",
    gender: "Female",
    location: "Staten Island, NY",
    date: "1 day ago",
  },
  {
    id: "beagle-adopt",
    title: "Charlie - Beagle",
    image:
      "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Energetic beagle puppy needs a loving home",
    age: "8 months",
    gender: "Male",
    location: "Bronx, NY",
    date: "3 days ago",
  },
  {
    id: "parrot-adopt",
    title: "Rio - African Grey Parrot",
    image:
      "https://images.unsplash.com/photo-1552728089-57bdde30beb3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Talkative parrot looking for an experienced bird owner",
    age: "5 years",
    gender: "Female",
    location: "Queens, NY",
    date: "1 week ago",
  },
];

export default function AdoptionsPage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("adoptions");
  const [_isDarkMode, setIsDarkMode] = useState<boolean>(
    document.documentElement.classList.contains("dark")
  );

  // Listen for theme changes across the app
  useEffect(() => {
    const handleThemeChange = () => {
      const isDark = document.documentElement.classList.contains("dark");
      setIsDarkMode(isDark);
    };

    // Initial check
    handleThemeChange();

    // Listen for theme change events
    document.addEventListener("themeChange", handleThemeChange);

    // Cleanup
    return () => {
      document.removeEventListener("themeChange", handleThemeChange);
    };
  }, []);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-[#0A1121] relative max-w-screen overflow-hidden">
      {/* Mobile Header */}
      <header className="lg:hidden bg-white dark:bg-[#101935] px-4 py-3 flex items-center sticky top-0 z-50 shadow-sm border-b dark:border-[#1A2542]">
        <Link to="/home" className="p-1 mr-3">
          <svg
            className="w-5 h-5 text-gray-700 dark:text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </Link>
        <h1 className="text-lg font-semibold text-gray-800 dark:text-white flex-1">
          Adoptions
        </h1>
        <ThemeToggle />
      </header>

      {/* Desktop Header */}
      <header className="hidden lg:block bg-white dark:bg-[#101935] shadow-md sticky top-0 z-50 border-b dark:border-[#1A2542]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/home" className="text-primary font-bold text-2xl mr-10">
              PetAssign
            </Link>
            <nav className="hidden lg:flex items-center space-x-8">
              <Link
                to="/home"
                className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary"
              >
                Home
              </Link>
              <Link
                to="/marketplace"
                className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary"
              >
                Marketplace
              </Link>
              <Link to="/adoptions" className="text-primary font-medium">
                Adoptions
              </Link>
              <Link
                to="/chats"
                className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary"
              >
                Messages
              </Link>
            </nav>
          </div>
          <div className="flex items-center space-x-6">
            <div className="relative w-64">
              <input
                type="text"
                placeholder="Search adoptions..."
                className="w-full py-2 pl-10 pr-4 rounded-full border border-gray-200 dark:border-[#1A2542] dark:bg-[#1A2542] dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                <svg
                  className="w-5 h-5 text-gray-400 dark:text-gray-500"
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
            <ThemeToggle />
            <button className="w-10 h-10 rounded-full bg-gray-100 dark:bg-[#1A2542] flex items-center justify-center text-gray-500 dark:text-gray-300">
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
            </button>
            <button className="w-10 h-10 rounded-full overflow-hidden">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pb-28 lg:pb-20 px-4 lg:px-6 pt-6 max-w-7xl mx-auto">
        {/* Page Title - Desktop */}
        <div className="hidden lg:flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
            Pets for Adoption
          </h1>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Filter:
              </span>
              <select className="bg-white dark:bg-[#101935] border border-gray-200 dark:border-[#1A2542] rounded-lg px-3 py-1.5 text-sm">
                <option>All pets</option>
                <option>Dogs</option>
                <option>Cats</option>
                <option>Birds</option>
                <option>Others</option>
              </select>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Sort by:
              </span>
              <select className="bg-white dark:bg-[#101935] border border-gray-200 dark:border-[#1A2542] rounded-lg px-3 py-1.5 text-sm">
                <option>Newest first</option>
                <option>Oldest first</option>
                <option>Closest first</option>
              </select>
            </div>
          </div>
        </div>

        {/* Mobile Filters */}
        <div className="lg:hidden flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
            Pets for Adoption
          </h2>
          <div className="flex space-x-2">
            <button className="bg-white dark:bg-[#101935] px-3 py-1.5 rounded-lg border border-gray-200 dark:border-[#1A2542] text-sm flex items-center">
              <svg
                className="w-4 h-4 mr-1.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                />
              </svg>
              Filter
            </button>
            <button className="bg-white dark:bg-[#101935] px-3 py-1.5 rounded-lg border border-gray-200 dark:border-[#1A2542] text-sm flex items-center">
              <svg
                className="w-4 h-4 mr-1.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
                />
              </svg>
              Sort
            </button>
          </div>
        </div>

        {/* Adoption Listings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {adoptionListings.map((listing) => (
            <div
              key={listing.id}
              className="bg-white dark:bg-[#101935] rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-200 dark:border-[#1A2542] overflow-hidden"
            >
              <div className="h-48 md:h-56">
                <img
                  src={listing.image}
                  alt={listing.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-medium mb-1 dark:text-white">
                  {listing.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                  {listing.description}
                </p>
                <div className="grid grid-cols-2 gap-2 mb-3">
                  <div className="text-sm">
                    <span className="text-gray-500 dark:text-gray-400">
                      Age:
                    </span>
                    <span className="ml-1 font-medium dark:text-white">
                      {listing.age}
                    </span>
                  </div>
                  <div className="text-sm">
                    <span className="text-gray-500 dark:text-gray-400">
                      Gender:
                    </span>
                    <span className="ml-1 font-medium dark:text-white">
                      {listing.gender}
                    </span>
                  </div>
                </div>
                <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                  <span>{listing.location}</span>
                  <span>{listing.date}</span>
                </div>
                <button
                  onClick={() => navigate(`/adoption/${listing.id}`)}
                  className="w-full mt-1 py-2 bg-primary text-white rounded-lg font-medium hover:bg-primary-dark transition-colors shadow-sm"
                >
                  Adopt Me
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* No Results (Hidden) */}
        <div className="hidden flex-col items-center justify-center py-12">
          <svg
            className="w-16 h-16 text-gray-300 dark:text-gray-600 mb-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-1">
            No pets found
          </h3>
          <p className="text-gray-500 dark:text-gray-400 text-center max-w-md">
            We couldn't find any pets matching your search criteria. Try
            adjusting your filters or check back later.
          </p>
        </div>
      </main>

      {/* Floating Action Button */}
      <div className="fixed bottom-20 right-4 z-50 lg:bottom-28">
        <button
          onClick={() => navigate("/create-post")}
          className="w-14 h-14 rounded-full bg-primary text-white shadow-lg flex items-center justify-center hover:bg-primary-dark transition-colors"
        >
          <svg
            className="w-7 h-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
        </button>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 z-50">
        <BottomNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
    </div>
  );
}
