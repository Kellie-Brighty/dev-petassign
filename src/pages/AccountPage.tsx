import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BottomNavigation from "../components/dashboard/BottomNavigation";

export default function AccountPage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("account");

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col w-screen">
      {/* Header */}
      <header className="px-4 py-3 flex items-center justify-between sticky top-0 z-50 bg-white border-b w-screen shadow-sm">
        <div className="flex items-center">
          <button onClick={() => navigate(-1)} className="p-1 mr-2 lg:hidden">
            <svg
              className="w-5 h-5 text-gray-700"
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
          <h1 className="text-lg font-medium">Account</h1>
        </div>

        {/* Desktop header elements */}
        <div className="hidden lg:flex items-center space-x-4">
          <button className="bg-gray-100 rounded-full p-2">
            <svg
              className="w-5 h-5 text-gray-600"
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
          <button className="bg-gray-100 rounded-full p-2">
            <svg
              className="w-5 h-5 text-gray-600"
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
          <div className="flex flex-col items-center lg:flex-row lg:items-center lg:bg-white lg:rounded-xl lg:shadow-md lg:p-6 lg:max-w-3xl lg:w-full border border-gray-200">
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
              <h2 className="text-lg font-medium text-gray-900">
                {userProfile.name}
              </h2>
              <p className="text-sm text-gray-500">{userProfile.username}</p>

              {/* Desktop Edit Profile Button */}
              <div className="hidden lg:block mt-2">
                <button
                  onClick={() => navigate("/my-profile")}
                  className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary-dark transition-colors shadow-md hover:shadow-lg"
                >
                  Edit Profile
                </button>
              </div>
            </div>

            {/* Desktop Actions */}
            <div className="hidden lg:flex space-x-4 ml-auto">
              <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors border border-gray-200">
                Settings
              </button>
              <button className="bg-red-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-red-600 transition-colors shadow-md">
                Logout
              </button>
            </div>
          </div>
        </div>

        {/* Menu Items */}
        <div className="px-4 pb-4 lg:flex lg:justify-center">
          <div className="space-y-3 lg:max-w-3xl lg:w-full">
            {menuItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg p-4 flex items-center shadow-md hover:shadow-lg transition-shadow cursor-pointer border border-gray-200"
                onClick={item.onClick}
              >
                {item.icon}
                <div className="ml-4 flex-1">
                  <h3 className="text-sm font-medium text-gray-800">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-500">{item.description}</p>
                </div>
                <svg
                  className="w-5 h-5 text-gray-400"
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
              </div>
            ))}

            {/* Desktop Additional Menu Items */}
            <div className="hidden lg:block space-y-3 mt-6">
              <div className="bg-white rounded-lg p-4 shadow-md border border-gray-200">
                <h3 className="font-medium text-gray-800">App Settings</h3>
                <div className="mt-3 space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-sm text-gray-600">Notifications</span>
                    <div className="relative inline-block w-10 mr-2 align-middle select-none">
                      <input
                        type="checkbox"
                        id="notification"
                        name="notification"
                        className="sr-only peer"
                        defaultChecked
                      />
                      <div className="w-10 h-5 bg-gray-200 rounded-full peer peer-checked:bg-primary peer-checked:after:translate-x-full after:absolute after:top-0.5 after:left-0.5 after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all"></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-sm text-gray-600">Dark Mode</span>
                    <div className="relative inline-block w-10 mr-2 align-middle select-none">
                      <input
                        type="checkbox"
                        id="darkmode"
                        name="darkmode"
                        className="sr-only peer"
                      />
                      <div className="w-10 h-5 bg-gray-200 rounded-full peer peer-checked:bg-primary peer-checked:after:translate-x-full after:absolute after:top-0.5 after:left-0.5 after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 shadow-md border border-gray-200">
                <h3 className="font-medium text-gray-800">Help & Support</h3>
                <div className="mt-3 space-y-2">
                  <button className="w-full text-left text-sm text-gray-600 py-2 hover:text-primary">
                    Contact Support
                  </button>
                  <button className="w-full text-left text-sm text-gray-600 py-2 hover:text-primary">
                    FAQs
                  </button>
                  <button className="w-full text-left text-sm text-gray-600 py-2 hover:text-primary">
                    Privacy Policy
                  </button>
                  <button className="w-full text-left text-sm text-gray-600 py-2 hover:text-primary">
                    Terms of Service
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Bottom Navigation */}
      <div>
        <BottomNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
    </div>
  );
}
