import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BottomNavigation from "./dashboard/BottomNavigation";
import ThemeToggle from "./ThemeToggle";
import ThemeTestComponent from "./ThemeTestComponent";

export default function AccountPage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("account");

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // User profile data
  const userProfile = {
    id: "heritage123",
    name: "Atiba Heritage",
    username: "@heritage",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#0A1121] flex flex-col w-screen">
      {/* Debug Component */}
      <ThemeTestComponent />

      {/* Header */}
      <header className="px-4 py-3 flex items-center justify-between sticky top-0 z-50 bg-white dark:bg-[#101935] border-b border-gray-200 dark:border-[#1A2542] w-screen shadow-sm">
        <div className="flex items-center">
          <button onClick={() => navigate(-1)} className="p-1 mr-2 lg:hidden">
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
          </button>
          <h1 className="text-lg font-medium text-gray-900 dark:text-white">
            Account
          </h1>
        </div>

        {/* Desktop header elements */}
        <div className="flex items-center space-x-4">
          <ThemeToggle className="mr-2" />
          <button className="bg-gray-100 dark:bg-[#1A2542] rounded-full p-2">
            <svg
              className="w-5 h-5 text-gray-600 dark:text-gray-300"
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

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto pb-28">
        {/* User Profile Section */}
        <div className="p-4 flex flex-col items-center">
          <div className="flex flex-col items-center w-full bg-white dark:bg-[#101935] rounded-xl shadow-md p-6">
            {/* User Avatar */}
            <div className="mb-4">
              <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-primary shadow-md">
                <img
                  src={userProfile.avatar}
                  alt={userProfile.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* User Info */}
            <div className="text-center">
              <h2 className="text-lg font-medium text-gray-900 dark:text-white">
                {userProfile.name}
              </h2>
              <p className="text-gray-500 dark:text-gray-400">
                {userProfile.username}
              </p>
            </div>

            {/* Theme Toggle */}
            <div className="mt-6 pt-6 border-t border-gray-200 dark:border-[#1A2542] w-full">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600 dark:text-gray-300">
                  Dark Mode
                </span>
                <ThemeToggle />
              </div>
            </div>
          </div>
        </div>

        {/* Logout Button */}
        <div className="p-4">
          <button
            onClick={() => navigate("/signin")}
            className="w-full py-3 bg-red-50 dark:bg-red-900/10 text-red-600 dark:text-red-400 rounded-xl font-medium hover:bg-red-100 dark:hover:bg-red-900/20 transition-colors"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Mobile Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 z-50">
        <BottomNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
    </div>
  );
}
