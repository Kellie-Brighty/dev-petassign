import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

interface BottomNavigationProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function BottomNavigation({
  activeTab,
  setActiveTab,
}: BottomNavigationProps) {
  const navigate = useNavigate();
  const [_isDarkMode, setIsDarkMode] = useState<boolean>(
    document.documentElement.classList.contains("dark")
  );

  // Listen for theme changes
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

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);

    switch (tab) {
      case "explore":
        navigate("/home");
        break;
      case "market":
        navigate("/marketplace");
        break;
      case "adoptions":
        navigate("/adoptions");
        break;
      case "chat":
        navigate("/chats");
        break;
      case "account":
        navigate("/account");
        break;
      default:
        navigate("/home");
    }
  };

  return (
    <div className="h-20 bg-white dark:bg-[#101935] border-t border-gray-200 dark:border-[#1A2542] flex items-center justify-around px-4 shadow-lg z-50 relative">
      <button
        onClick={() => handleTabClick("explore")}
        className={`flex flex-col items-center justify-center w-16 h-16 ${
          activeTab === "explore"
            ? "text-primary"
            : "text-gray-500 dark:text-gray-400"
        }`}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={activeTab === "explore" ? 2.3 : 1.8}
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
        <span className="text-[10px] font-medium mt-1">Home</span>
      </button>

      <button
        onClick={() => handleTabClick("market")}
        className={`flex flex-col items-center justify-center w-16 h-16 ${
          activeTab === "market"
            ? "text-primary"
            : "text-gray-500 dark:text-gray-400"
        }`}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={activeTab === "market" ? 2.3 : 1.8}
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
        <span className="text-[10px] font-medium mt-1">Market</span>
      </button>

      <button
        onClick={() => handleTabClick("adoptions")}
        className={`flex flex-col items-center justify-center w-16 h-16 ${
          activeTab === "adoptions"
            ? "text-primary"
            : "text-gray-500 dark:text-gray-400"
        }`}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={activeTab === "adoptions" ? 2.3 : 1.8}
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
        <span className="text-[10px] font-medium mt-1">Adoptions</span>
      </button>

      <button
        onClick={() => handleTabClick("chat")}
        className={`flex flex-col items-center justify-center w-16 h-16 ${
          activeTab === "chat"
            ? "text-primary"
            : "text-gray-500 dark:text-gray-400"
        }`}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={activeTab === "chat" ? 2.3 : 1.8}
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
        <span className="text-[10px] font-medium mt-1">Chat</span>
      </button>

      <button
        onClick={() => handleTabClick("account")}
        className={`flex flex-col items-center justify-center w-16 h-16 ${
          activeTab === "account"
            ? "text-primary"
            : "text-gray-500 dark:text-gray-400"
        }`}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={activeTab === "account" ? 2.3 : 1.8}
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
        <span className="text-[10px] font-medium mt-1">Account</span>
      </button>
    </div>
  );
}
