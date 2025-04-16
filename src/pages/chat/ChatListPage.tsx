import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BottomNavigation from "../../components/dashboard/BottomNavigation";
import ThemeToggle from "../../components/ThemeToggle";

interface ChatPreview {
  id: string;
  name: string;
  avatar: string;
  lastMessage: string;
  time: string;
  read: boolean;
  isOnline?: boolean;
}

export default function ChatListPage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("chat");
  const [searchQuery, setSearchQuery] = useState("");
  const [_isDarkMode, setIsDarkMode] = useState<boolean>(
    document.documentElement.classList.contains("dark")
  );

  // Mock chat data
  const chatPreviews: ChatPreview[] = [
    {
      id: "jessica123",
      name: "Jessica Albright",
      avatar: "https://randomuser.me/api/portraits/women/12.jpg",
      lastMessage: "Alright",
      time: "02:21",
      read: true,
    },
    {
      id: "heritage456",
      name: "Heritage",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      lastMessage: "How much for the dog?",
      time: "12:50",
      read: false,
      isOnline: true,
    },
    {
      id: "steph789",
      name: "Steph",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      lastMessage: "send your details",
      time: "22:21",
      read: true,
    },
    {
      id: "henry101",
      name: "Henry King",
      avatar: "https://randomuser.me/api/portraits/men/45.jpg",
      lastMessage: "It costs 400 dollars",
      time: "22:25",
      read: true,
    },
    {
      id: "johnding",
      name: "John Ding",
      avatar: "https://randomuser.me/api/portraits/men/22.jpg",
      lastMessage: "Hello man",
      time: "Yesterday",
      read: false,
      isOnline: true,
    },
    {
      id: "everavery",
      name: "Ever Avery",
      avatar: "https://randomuser.me/api/portraits/women/67.jpg",
      lastMessage: "Take it",
      time: "Yesterday",
      read: true,
    },
    {
      id: "sarahm",
      name: "Sarah Miller",
      avatar: "https://randomuser.me/api/portraits/women/24.jpg",
      lastMessage: "I'll take a look at it",
      time: "Tuesday",
      read: true,
    },
    {
      id: "michaelj",
      name: "Michael Johnson",
      avatar: "https://randomuser.me/api/portraits/men/52.jpg",
      lastMessage: "When can I come see the dog?",
      time: "Monday",
      read: true,
    },
  ];

  // Filter chats based on search query
  const filteredChats = chatPreviews.filter(
    (chat) =>
      chat.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      chat.lastMessage.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

  // Handle user clicking on a chat
  const handleChatClick = (chatId: string) => {
    navigate(`/chat/${chatId}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-[#0A1121] flex flex-col w-screen">
      {/* Header - For all screens */}
      <header className="px-4 py-3 flex items-center justify-between sticky top-0 z-50 bg-white dark:bg-[#101935] border-b dark:border-[#1A2542] w-screen shadow-sm">
        <div className="flex items-center">
          <button onClick={() => navigate(-1)} className="p-1">
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

          <h1 className="text-lg font-medium ml-3 dark:text-white">Messages</h1>
        </div>

        <div className="flex items-center">
          <ThemeToggle />
          <button className="p-1 lg:hidden ml-2">
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
                d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
              />
            </svg>
          </button>
        </div>

        <button className="hidden lg:block bg-primary text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-primary-dark transition-colors shadow-sm">
          New Message
        </button>
      </header>

      {/* Search Bar */}
      <div className="px-4 py-2 sticky top-[57px] z-40 bg-white dark:bg-[#101935] border-b dark:border-[#1A2542] w-screen shadow-sm">
        <div className="relative lg:max-w-lg mx-auto">
          <input
            type="text"
            placeholder="Search messages..."
            className="w-full py-2 pl-10 pr-4 rounded-full bg-gray-50 dark:bg-[#1A2542] border border-gray-200 dark:border-[#1A2542] focus:outline-none focus:ring-1 focus:ring-primary text-sm dark:text-white"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
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
      </div>

      {/* Chat List */}
      <div className="flex-1 overflow-y-auto w-screen pb-28">
        {filteredChats.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-48 text-gray-500 dark:text-gray-400">
            <svg
              className="w-12 h-12 mb-3 text-gray-400 dark:text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
            <p className="text-sm">No chats found</p>
          </div>
        ) : (
          <div className="lg:max-w-3xl lg:mx-auto">
            {filteredChats.map((chat) => (
              <div
                key={chat.id}
                className="px-4 py-3 flex items-center border-b border-gray-200 dark:border-[#1A2542] hover:bg-gray-50 dark:hover:bg-[#1A2542] cursor-pointer bg-white dark:bg-[#101935] mb-0.5 shadow-sm"
                onClick={() => handleChatClick(chat.id)}
              >
                <div className="relative">
                  <img
                    src={chat.avatar}
                    alt={chat.name}
                    className="w-12 h-12 rounded-full object-cover border border-gray-200 dark:border-[#1A2542]"
                  />
                  {chat.isOnline && (
                    <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white dark:border-[#101935]"></span>
                  )}
                </div>

                <div className="ml-3 flex-1 min-w-0">
                  <div className="flex justify-between items-center">
                    <h3 className="font-medium text-base truncate text-gray-900 dark:text-white">
                      {chat.name}
                    </h3>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {chat.time}
                    </span>
                  </div>
                  <div className="flex justify-between items-center mt-1">
                    <p className="text-sm text-gray-600 dark:text-gray-300 truncate">
                      {chat.lastMessage}
                    </p>
                    {!chat.read ? (
                      <span className="w-2.5 h-2.5 bg-primary rounded-full"></span>
                    ) : (
                      <svg
                        className="w-4 h-4 text-primary"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M18 7l-1.41-1.41-6.34 6.34 1.41 1.41L18 7zm-7.75 7.75L6 10.5l-1.41 1.41L9.83 17 21 5.83l-1.41-1.41-9.34 9.33z" />
                      </svg>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Floating Action Button */}
      <div className="fixed bottom-20 right-4 z-50 lg:bottom-28">
        <button
          onClick={() => navigate("/create-post")}
          className="w-14 h-14 rounded-full bg-primary text-white shadow-lg flex items-center justify-center hover:bg-primary-dark transition-colors"
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
              strokeWidth={2}
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
        </button>
      </div>

      {/* Bottom Navigation - Show on both mobile and desktop */}
      <div className="fixed bottom-0 left-0 right-0 z-50">
        <BottomNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
    </div>
  );
}
