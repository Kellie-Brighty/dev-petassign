import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SearchBar from "../components/dashboard/SearchBar";
import PetCategories from "../components/dashboard/PetCategories";
import FeaturedPet from "../components/dashboard/FeaturedPet";
import ProductSection from "../components/dashboard/ProductSection";
import BottomNavigation from "../components/dashboard/BottomNavigation";

// Sample data for news/blog posts
const newsItems = [
  {
    id: "1",
    title: "Choosing the Right Food for Your Pet",
    image:
      "https://images.unsplash.com/photo-1623387641168-d9803ddd3f35?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGV0JTIwZm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    views: 243,
    comments: 18,
    date: "May 10, 2024",
  },
  {
    id: "2",
    title: "Tips for First-Time Pet Owners",
    image:
      "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGV0JTIwb3duZXJzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    views: 198,
    comments: 22,
    date: "May 7, 2024",
  },
];

export default function HomePage() {
  const [activeTab, setActiveTab] = useState("explore");
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
    <div className="min-h-screen bg-gray-100 dark:bg-[#0A1121]">
      {/* Mobile Header */}
      <header className="lg:hidden bg-white dark:bg-[#101935] px-4 py-3 flex items-center justify-between sticky top-0 z-50 shadow-sm border-b border-gray-200 dark:border-[#1A2542]">
        <div>
          <h1 className="text-base font-semibold dark:text-white">
            Hi Heritage,
          </h1>
          <div className="text-xs text-primary font-medium">
            20 credits left
          </div>
        </div>
        <div className="relative">
          <button className="w-8 h-8 rounded-full bg-gray-100 dark:bg-[#1A2542] flex items-center justify-center">
            <svg
              className="w-4 h-4 text-gray-600 dark:text-gray-300"
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
        </div>
      </header>

      {/* Desktop Header */}
      <header className="hidden lg:block bg-white dark:bg-[#101935] shadow-sm sticky top-0 z-50 border-b border-gray-200 dark:border-[#1A2542]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <div className="text-primary font-bold text-2xl">PetAssign</div>
            <nav className="ml-10 hidden md:block">
              <ul className="flex space-x-8">
                <li className="text-primary font-medium">Home</li>
                <li className="text-gray-500 dark:text-gray-300 hover:text-primary">
                  <Link to="/marketplace">Marketplace</Link>
                </li>
                <li className="text-gray-500 dark:text-gray-300 hover:text-primary">
                  <Link to="/adoptions">Adoptions</Link>
                </li>
                <li className="text-gray-500 dark:text-gray-300 hover:text-primary">
                  <Link to="/chats">Messages</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="flex items-center space-x-6">
            <div className="relative w-64 hidden md:block">
              <input
                type="text"
                placeholder="Search pets, products..."
                className="w-full py-2 pl-10 pr-4 rounded-full border border-gray-200 dark:border-[#1A2542] dark:bg-[#101935] dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                <svg
                  className="w-5 h-5 text-gray-400 dark:text-gray-300"
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
      <main className="pb-24 lg:pb-28">
        {/* Mobile Search */}
        <div className="lg:hidden px-4 py-3 bg-white dark:bg-[#101935] shadow-sm">
          <SearchBar />
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden">
          {/* Pet Categories */}
          <div className="mt-3 bg-white dark:bg-[#101935] shadow-sm py-4">
            <PetCategories />
          </div>

          {/* Pets for Sale Section with Title */}
          <div className="mt-5">
            <div className="flex items-center justify-between mb-3 px-4">
              <h2 className="text-base font-medium text-gray-800 dark:text-white">
                Pets for Sale
              </h2>
              <Link to="/marketplace" className="text-sm text-primary">
                &gt;
              </Link>
            </div>
            <FeaturedPet />
          </div>

          {/* Animal Food Section */}
          <div className="mt-5 bg-white dark:bg-[#101935] shadow-sm py-4">
            <ProductSection />
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:block max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-8">
              {/* Welcome Banner */}
              <div className="bg-gradient-to-r from-primary to-primary-dark rounded-2xl p-8 text-white mb-8 shadow-md">
                <h2 className="text-xl md:text-2xl font-bold">
                  Welcome to PetAssign!
                </h2>
                <p className="my-2 opacity-90 text-sm md:text-base">
                  Discover amazing pets, connect with owners, and find
                  everything your pet needs.
                </p>
                <Link to="/marketplace">
                  <button className="mt-3 bg-white text-primary font-medium px-5 py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md transition-shadow">
                    Explore Marketplace
                  </button>
                </Link>
              </div>

              {/* Pet Categories */}
              <div className="mb-8 bg-white dark:bg-[#101935] rounded-xl p-6 shadow-sm border border-gray-200 dark:border-[#1A2542]">
                <h2 className="text-lg md:text-xl font-bold mb-4 text-gray-800 dark:text-white">
                  Browse by Category
                </h2>
                <PetCategories />
              </div>

              {/* Featured Pets */}
              <div className="mb-8 bg-white dark:bg-[#101935] rounded-xl p-6 shadow-sm border border-gray-200 dark:border-[#1A2542]">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg md:text-xl font-bold text-gray-800 dark:text-white">
                    Pets for Sale
                  </h2>
                  <Link
                    to="/marketplace"
                    className="text-primary text-sm font-medium hover:underline"
                  >
                    View All
                  </Link>
                </div>
                <FeaturedPet />
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4 space-y-8">
              {/* News Section */}
              <div className="bg-white dark:bg-[#101935] rounded-xl p-6 shadow-sm border border-gray-200 dark:border-[#1A2542]">
                <h2 className="text-lg font-bold mb-4 text-gray-800 dark:text-white">
                  Latest News
                </h2>
                <div className="space-y-4">
                  {newsItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex border-b last:border-0 pb-4 dark:border-[#1A2542]"
                    >
                      <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="ml-4 flex-1">
                        <h3 className="font-medium text-sm text-gray-800 dark:text-white">
                          {item.title}
                        </h3>
                        <div className="flex items-center mt-2 text-xs text-gray-500 dark:text-gray-400">
                          <span>{item.date}</span>
                          <span className="mx-1 text-gray-300 dark:text-gray-600">
                            •
                          </span>
                          <span>{item.views} views</span>
                          <span className="mx-1 text-gray-300 dark:text-gray-600">
                            •
                          </span>
                          <span>{item.comments} comments</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <button className="w-full mt-4 text-center text-primary text-sm font-medium hover:underline">
                  View All News
                </button>
              </div>

              {/* Find a Buddy */}
              <div className="bg-white dark:bg-[#101935] rounded-xl p-6 shadow-sm border border-gray-200 dark:border-[#1A2542]">
                <h2 className="text-lg font-bold mb-4 text-gray-800 dark:text-white">
                  Find a Pet Buddy
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  Connect with other pet owners near you for playdates, walks,
                  and more.
                </p>
                <button className="w-full py-2.5 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary-dark transition-colors">
                  Find Buddies
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Bottom Navigation - Show on both mobile and desktop */}
      <div className="fixed bottom-0 left-0 right-0 z-50">
        <BottomNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
    </div>
  );
}
