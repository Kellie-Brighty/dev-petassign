import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BottomNavigation from "../../components/dashboard/BottomNavigation";
import ThemeToggle from "../../components/ThemeToggle";

export default function AccountPage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("account");
  const [showLogoutModal, setShowLogoutModal] = useState(false);
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

  // Handle logout function
  const handleLogout = () => {
    // Here you would typically clear user authentication tokens and state
    // For this example, we just navigate to the login page
    navigate("/signin");
  };

  // This would normally come from your authentication system
  const userProfile = {
    id: "heritage123",
    name: "Atiba Heritage",
    username: "@heritage",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  };

  // Menu items for account settings
  const menuItems = [
    {
      id: "profile",
      title: "Profile",
      description: "View and Edit your profile",
      icon: (
        <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
          <svg
            className="w-5 h-5 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
        </div>
      ),
      onClick: () => navigate("/my-profile"),
    },
    {
      id: "wallet",
      title: "Wallet",
      description: "Check & withdraw your funds",
      icon: (
        <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
          <svg
            className="w-5 h-5 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
            />
          </svg>
        </div>
      ),
      onClick: () => navigate("/wallet"),
    },
    {
      id: "purchase-history",
      title: "Purchase History",
      description: "View Purchase History",
      icon: (
        <div className="w-10 h-10 bg-indigo-500 rounded-full flex items-center justify-center">
          <svg
            className="w-5 h-5 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
            />
          </svg>
        </div>
      ),
      onClick: () => navigate("/purchases"),
    },
    {
      id: "sales-history",
      title: "Sales History",
      description: "View Sales History",
      icon: (
        <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
          <svg
            className="w-5 h-5 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
            />
          </svg>
        </div>
      ),
      onClick: () => navigate("/sales"),
    },
    {
      id: "appearance",
      title: "Appearance",
      description: "Light and Dark Mode",
      icon: (
        <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center">
          <svg
            className="w-5 h-5 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
        </div>
      ),
      renderContent: () => (
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600 dark:text-gray-300">
            Dark Mode
          </span>
          <ThemeToggle />
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-[#0A1121] flex flex-col w-screen">
      {/* Debug Component */}
      {/* <ThemeTestComponent /> */}

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
        <div className="hidden lg:flex items-center space-x-4">
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
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </button>
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
        <div className="p-4 flex flex-col items-center lg:flex-row lg:items-start lg:justify-center lg:py-8">
          <div className="flex flex-col items-center lg:flex-row lg:items-center lg:bg-white lg:dark:bg-[#101935] lg:rounded-xl lg:shadow-md lg:p-6 lg:max-w-3xl lg:w-full border border-gray-200 dark:border-[#1A2542]">
            {/* User Avatar */}
            <div className="mb-2 lg:mb-0 lg:mr-6">
              <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-primary shadow-md">
                <img
                  src={userProfile.avatar}
                  alt={userProfile.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* User Info */}
            <div className="text-center lg:text-left lg:flex-1">
              <h2 className="text-lg font-medium text-gray-900 dark:text-white">
                {userProfile.name}
              </h2>
              <p className="text-gray-500 dark:text-gray-400">
                {userProfile.username}
              </p>
            </div>

            {/* Edit Profile Button - Only on desktop */}
            <div className="hidden lg:block">
              <button
                onClick={() => navigate("/edit-profile")}
                className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-lg font-medium transition-colors"
              >
                Edit Profile
              </button>
            </div>
          </div>
        </div>

        {/* Menu Section */}
        <div className="px-4 mt-2 mb-4 lg:flex lg:justify-center">
          <div className="lg:max-w-3xl lg:w-full">
            <div className="bg-white dark:bg-[#101935] rounded-xl shadow p-4 space-y-4 border border-gray-200 dark:border-[#1A2542]">
              {menuItems.map((item) => (
                <div
                  key={item.id}
                  className="border-b last:border-b-0 dark:border-[#1A2542] pb-4 last:pb-0"
                >
                  <div
                    className="flex items-center py-2 cursor-pointer"
                    onClick={item.onClick}
                  >
                    {item.icon}
                    <div className="ml-4 flex-1">
                      <h3 className="font-medium text-gray-900 dark:text-white">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {item.description}
                      </p>
                    </div>
                    {!item.renderContent && (
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
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    )}
                  </div>
                  {item.renderContent && (
                    <div className="mt-2 ml-14">{item.renderContent()}</div>
                  )}
                </div>
              ))}
            </div>

            {/* Edit Profile Button - Only on mobile */}
            <div className="mt-4 lg:hidden">
              <button
                onClick={() => navigate("/edit-profile")}
                className="w-full bg-primary hover:bg-primary-dark text-white py-3 rounded-lg font-medium transition-colors shadow-sm"
              >
                Edit Profile
              </button>
            </div>

            {/* Logout Button */}
            <div className="mt-4">
              <button
                onClick={() => setShowLogoutModal(true)}
                className="w-full py-3 text-red-500 dark:text-red-400 font-medium border border-red-500 dark:border-red-400 rounded-lg shadow-sm hover:bg-red-50 dark:hover:bg-[#1A1A35] transition-colors"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0">
        <BottomNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>

      {/* Logout Confirmation Modal */}
      {showLogoutModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white dark:bg-[#101935] rounded-xl shadow-xl max-w-md w-full p-5 transform transition-all animate-fade-in">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Confirm Logout
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-5">
              Are you sure you want to log out? You will need to log in again to
              access your account.
            </p>
            <div className="flex space-x-3">
              <button
                onClick={() => setShowLogoutModal(false)}
                className="flex-1 py-2.5 border border-gray-300 dark:border-[#1A2542] text-gray-700 dark:text-white rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-[#1A2542] transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleLogout}
                className="flex-1 py-2.5 bg-red-500 hover:bg-red-600 text-white rounded-lg font-medium transition-colors"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
