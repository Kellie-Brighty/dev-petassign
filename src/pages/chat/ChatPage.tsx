import { useState, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ThemeToggle from "../../components/ThemeToggle";

interface Message {
  id: string;
  text: string;
  sender: "user" | "other";
  timestamp: string;
}

export default function ChatPage() {
  const navigate = useNavigate();
  const { chatId } = useParams();
  const [message, setMessage] = useState("");
  const [showPriceModal, setShowPriceModal] = useState(false);
  const [newPrice, setNewPrice] = useState("200,000");
  const [petPrice, setPetPrice] = useState(300);
  const [_isDarkMode, setIsDarkMode] = useState<boolean>(
    document.documentElement.classList.contains("dark")
  );
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messageContainerRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  // Initial Y position for touch events
  const [startY, setStartY] = useState(0);
  const [currentY, setCurrentY] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  // Mock chat data that would normally be fetched from an API
  const chatData = {
    id: chatId,
    otherUser: {
      id: "zaine123",
      name: "Zaine Dorwart",
      avatar: "https://randomuser.me/api/portraits/women/32.jpg",
      status: "Online",
    },
    messages: [
      {
        id: "m1",
        text: "Hi, Asad",
        sender: "other",
        timestamp: "5:12 PM",
      },
      {
        id: "m2",
        text: 'How do you buy "nice" stuff?',
        sender: "other",
        timestamp: "5:12 PM",
      },
      {
        id: "m3",
        text: "Please help me find a good monitor for the design",
        sender: "other",
        timestamp: "5:12 PM",
      },
      {
        id: "m4",
        text: "Zaine\nWhat should I call u?",
        sender: "user",
        timestamp: "6:12 PM",
      },
      {
        id: "m5",
        text: "Zaine\nWhat should I call u?\nHi, Ashil",
        sender: "user",
        timestamp: "6:12 PM",
      },
      {
        id: "m6",
        text: 'How do you buy "nice" stuff?',
        sender: "user",
        timestamp: "6:12 PM",
      },
      {
        id: "m7",
        text: "Hi, Asad",
        sender: "other",
        timestamp: "6:12 PM",
      },
      {
        id: "m8",
        text: 'How do you buy "nice" stuff?',
        sender: "other",
        timestamp: "6:12 PM",
      },
      // Adding more messages to enable scrolling for testing
      {
        id: "m9",
        text: "We should discuss the details",
        sender: "other",
        timestamp: "6:15 PM",
      },
      {
        id: "m10",
        text: "I agree, what else should we consider?",
        sender: "user",
        timestamp: "6:18 PM",
      },
      {
        id: "m11",
        text: "Do you have pictures of other pets?",
        sender: "user",
        timestamp: "6:20 PM",
      },
      {
        id: "m12",
        text: "Yes, I can send some more",
        sender: "other",
        timestamp: "6:22 PM",
      },
    ] as Message[],
  };

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

  // Handle modal gestures
  const handleTouchStart = (e: React.TouchEvent) => {
    setStartY(e.touches[0].clientY);
    setCurrentY(e.touches[0].clientY);
    setIsDragging(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isDragging) {
      setCurrentY(e.touches[0].clientY);
    }
  };

  const handleTouchEnd = () => {
    if (isDragging) {
      const dragDistance = currentY - startY;
      if (dragDistance > 100) {
        // If dragged down more than 100px, close the modal
        setShowPriceModal(false);
      }
      setIsDragging(false);
    }
  };

  // Add/remove body scroll lock when modal opens/closes
  useEffect(() => {
    if (showPriceModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [showPriceModal]);

  // Scroll to bottom of messages when they change
  useEffect(() => {
    scrollToBottom();
  }, [chatData.messages]);

  // Add auto-scroll when opening the page
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);

    // Then scroll to the bottom of messages
    setTimeout(() => {
      scrollToBottom();
    }, 100);
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSendMessage = () => {
    if (message.trim()) {
      // In a real app, this would call an API to send the message
      // and then update the local state with the new message
      console.log("Sending message:", message);

      // Clear the input field
      setMessage("");
    }
  };

  const handleUpdatePrice = () => {
    // Update the price
    const numericPrice = Number(newPrice.replace(/,/g, ""));
    if (!isNaN(numericPrice)) {
      setPetPrice(numericPrice);
    }

    // Close the modal
    setShowPriceModal(false);
  };

  // Calculate modal transform based on drag
  const getModalStyle = () => {
    if (!isDragging) return {};

    const dragDistance = currentY - startY;
    if (dragDistance <= 0) return {}; // Don't allow dragging up

    return {
      transform: `translateY(${dragDistance}px)`,
      transition: "none",
    };
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-[#0A1121] flex flex-col w-screen">
      {/* Header */}
      <header className="px-4 py-3 flex items-center justify-between sticky top-0 z-50 bg-white dark:bg-[#101935] border-b dark:border-[#1A2542] w-screen shadow-sm">
        <div className="flex items-center">
          <button onClick={() => navigate(-1)} className="p-1 mr-3">
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

          <div className="flex items-center">
            <img
              src={chatData.otherUser.avatar}
              alt={chatData.otherUser.name}
              className="w-8 h-8 rounded-full mr-3 object-cover border border-gray-200 dark:border-[#1A2542]"
            />
            <div>
              <h1 className="text-base font-medium text-gray-900 dark:text-white">
                {chatData.otherUser.name}
              </h1>
              <p className="text-xs text-green-500">
                {chatData.otherUser.status}
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center">
          <ThemeToggle className="mr-2" />
          <button className="p-2 text-gray-600 dark:text-gray-300 hidden lg:block">
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
          </button>
          <button className="p-2 text-gray-600 dark:text-gray-300">
            <svg
              className="w-5 h-5"
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
      </header>

      {/* Transaction information - Make it sticky */}
      <div className="sticky top-[57px] z-40 p-4 bg-gray-50 dark:bg-[#101935] border-b dark:border-[#1A2542] flex justify-between items-center">
        <div>
          <h2 className="text-sm font-medium text-gray-900 dark:text-white">
            Golden Retriever Puppy
          </h2>
          <div className="flex items-center mt-1">
            <span className="text-xs text-green-500 font-medium">For Sale</span>
            <span className="mx-1 text-gray-400 dark:text-gray-500">•</span>
            <span className="text-xs text-gray-600 dark:text-gray-300">
              ₦{petPrice}
            </span>
          </div>
        </div>
        <button
          onClick={() => setShowPriceModal(true)}
          className="text-sm text-primary font-medium bg-primary/10 px-3 py-1.5 rounded-md"
        >
          Edit price
        </button>
      </div>

      {/* Chat Messages - Adjust for better spacing */}
      <div
        ref={messageContainerRef}
        className="flex-1 p-4 overflow-y-auto bg-gray-50 dark:bg-[#0A1121]"
      >
        <div className="max-w-3xl mx-auto space-y-6 pb-4">
          {chatData.messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${
                msg.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              {msg.sender === "other" && (
                <img
                  src={chatData.otherUser.avatar}
                  alt={chatData.otherUser.name}
                  className="w-8 h-8 rounded-full mr-2 self-end object-cover border border-gray-200 dark:border-[#1A2542] mb-1"
                />
              )}
              <div
                className={`max-w-[75%] rounded-2xl px-4 py-3 whitespace-pre-wrap ${
                  msg.sender === "user"
                    ? "bg-primary text-white rounded-tr-none"
                    : "bg-white dark:bg-[#101935] text-gray-800 dark:text-white rounded-tl-none shadow-sm border border-gray-100 dark:border-[#1A2542]"
                }`}
              >
                <div className="text-sm">{msg.text}</div>
                <div
                  className={`text-right text-xs mt-1.5 ${
                    msg.sender === "user"
                      ? "text-white/70"
                      : "text-gray-500 dark:text-gray-400"
                  }`}
                >
                  {msg.timestamp}
                </div>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} className="h-28" />
        </div>
      </div>

      {/* Message Input - Fixed at bottom */}
      <div className="p-3 bg-white dark:bg-[#101935] border-t dark:border-[#1A2542] sticky bottom-0 z-10">
        <div className="flex items-center">
          <button className="p-2 text-gray-500 dark:text-gray-400">
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
                d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 py-2 px-4 bg-gray-100 dark:bg-[#1A2542] dark:text-white rounded-full focus:outline-none mx-2"
          />
          <button
            onClick={handleSendMessage}
            className="p-2 text-primary rounded-full hover:bg-primary/10 transition-colors"
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
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Price Update Modal */}
      {showPriceModal && (
        <div className="fixed inset-0 bg-black/50 flex items-end justify-center z-50 px-4">
          <div
            ref={modalRef}
            className="w-full max-w-md bg-white dark:bg-[#101935] rounded-t-2xl p-5 animate-slide-up"
            style={getModalStyle()}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Drag indicator */}
            <div className="w-10 h-1 bg-gray-300 dark:bg-gray-600 rounded-full mx-auto mb-4"></div>

            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Update Price
            </h2>

            <div className="mb-4">
              <label
                htmlFor="price"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                New Price
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400">
                  ₦
                </span>
                <input
                  type="text"
                  id="price"
                  value={newPrice}
                  onChange={(e) => setNewPrice(e.target.value)}
                  className="w-full px-7 py-2 border border-gray-300 dark:border-[#1A2542] dark:bg-[#1A2542] dark:text-white rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
            </div>

            <div className="flex space-x-3">
              <button
                onClick={() => setShowPriceModal(false)}
                className="flex-1 py-2 text-center border border-gray-300 dark:border-[#1A2542] text-gray-700 dark:text-white rounded-md hover:bg-gray-50 dark:hover:bg-[#1A2542] transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleUpdatePrice}
                className="flex-1 py-2 text-center bg-primary text-white rounded-md hover:bg-primary-dark transition-colors"
              >
                Update
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
