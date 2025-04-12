import { useNavigate } from "react-router-dom";

interface BottomNavigationProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function BottomNavigation({
  activeTab,
  setActiveTab,
}: BottomNavigationProps) {
  const navigate = useNavigate();

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
        navigate("/marketplace/adoptions");
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
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-300 z-40 shadow-lg">
      <div className="flex justify-around">
        <button
          onClick={() => handleTabClick("explore")}
          className={`p-3 pb-4 flex flex-col items-center transition-colors ${
            activeTab === "explore"
              ? "text-primary font-medium"
              : "text-gray-600 hover:text-gray-800"
          } bg-transparent`}
        >
          <svg
            className={`w-6 h-6 ${
              activeTab === "explore" ? "drop-shadow-sm" : ""
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={activeTab === "explore" ? 2.5 : 1.5}
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
          <span
            className={`text-xs mt-1 ${
              activeTab === "explore" ? "font-semibold" : ""
            }`}
          >
            Explore
          </span>
        </button>
        <button
          onClick={() => handleTabClick("market")}
          className={`p-3 pb-4 flex flex-col items-center transition-colors ${
            activeTab === "market"
              ? "text-primary font-medium"
              : "text-gray-600 hover:text-gray-800"
          } bg-transparent`}
        >
          <svg
            className={`w-6 h-6 ${
              activeTab === "market" ? "drop-shadow-sm" : ""
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={activeTab === "market" ? 2.5 : 1.5}
              d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
            />
          </svg>
          <span
            className={`text-xs mt-1 ${
              activeTab === "market" ? "font-semibold" : ""
            }`}
          >
            Market
          </span>
        </button>
        <button
          onClick={() => handleTabClick("adoptions")}
          className={`p-3 pb-4 flex flex-col items-center transition-colors ${
            activeTab === "adoptions"
              ? "text-primary font-medium"
              : "text-gray-600 hover:text-gray-800"
          } bg-transparent`}
        >
          <svg
            className={`w-6 h-6 ${
              activeTab === "adoptions" ? "drop-shadow-sm" : ""
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={activeTab === "adoptions" ? 2.5 : 1.5}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
          <span
            className={`text-xs mt-1 ${
              activeTab === "adoptions" ? "font-semibold" : ""
            }`}
          >
            Adoptions
          </span>
        </button>
        <button
          onClick={() => handleTabClick("chat")}
          className={`p-3 pb-4 flex flex-col items-center transition-colors ${
            activeTab === "chat"
              ? "text-primary font-medium"
              : "text-gray-600 hover:text-gray-800"
          } bg-transparent`}
        >
          <svg
            className={`w-6 h-6 ${
              activeTab === "chat" ? "drop-shadow-sm" : ""
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={activeTab === "chat" ? 2.5 : 1.5}
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
          <span
            className={`text-xs mt-1 ${
              activeTab === "chat" ? "font-semibold" : ""
            }`}
          >
            Chat
          </span>
        </button>
        <button
          onClick={() => handleTabClick("account")}
          className={`p-3 pb-4 flex flex-col items-center transition-colors ${
            activeTab === "account"
              ? "text-primary font-medium"
              : "text-gray-600 hover:text-gray-800"
          } bg-transparent`}
        >
          <svg
            className={`w-6 h-6 ${
              activeTab === "account" ? "drop-shadow-sm" : ""
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={activeTab === "account" ? 2.5 : 1.5}
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
          <span
            className={`text-xs mt-1 ${
              activeTab === "account" ? "font-semibold" : ""
            }`}
          >
            Account
          </span>
        </button>
      </div>
      <div className="h-safe-bottom bg-white" />
    </div>
  );
}
