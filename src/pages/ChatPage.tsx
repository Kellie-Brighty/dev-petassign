import { useState, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";

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

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
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
    <div className="min-h-screen bg-gray-100 flex flex-col w-screen">
      {/* Header */}
      <header className="px-4 py-3 flex items-center justify-between sticky top-0 z-50 bg-white border-b w-screen shadow-sm">
        <div className="flex items-center">
          <button onClick={() => navigate(-1)} className="p-1 mr-3">
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

          <div className="flex items-center">
            <img
              src={chatData.otherUser.avatar}
              alt={chatData.otherUser.name}
              className="w-8 h-8 rounded-full mr-3 object-cover border border-gray-200"
            />
            <div>
              <h1 className="text-base font-medium text-gray-900">
                {chatData.otherUser.name}
              </h1>
              <p className="text-xs text-green-500">
                {chatData.otherUser.status}
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center">
          <button className="p-2 text-gray-600 hidden lg:block">
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
          <button className="p-2 text-gray-600">
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

      {/* Transaction Summary - visible at the top of the chat */}
      <div className="sticky top-[57px] z-40 bg-white border-b border-gray-200 px-4 py-3 shadow-sm">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-sm font-medium text-gray-900">
            Pet Transaction Details
          </h2>
          <button
            className="text-primary text-xs font-medium"
            onClick={() => setShowPriceModal(true)}
          >
            Change Price
          </button>
        </div>

        <div className="flex items-center">
          <img
            src="https://images.unsplash.com/photo-1592194996308-7b43878e84a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            alt="Pet"
            className="w-12 h-12 rounded-lg object-cover mr-3"
          />
          <div className="flex-1">
            <h3 className="text-sm font-medium text-gray-900">
              Siamese Kitten - 4 months
            </h3>
            <div className="flex justify-between items-center">
              <p className="text-xs text-gray-500">Price negotiable</p>
              <p className="text-sm font-semibold text-primary">
                ${petPrice.toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Messages Container - Give space for header, transaction details, and message input */}
      <div
        ref={messageContainerRef}
        className="flex-1 overflow-y-auto px-4 py-4 bg-gray-100 pb-20"
      >
        <div className="max-w-3xl mx-auto">
          {chatData.messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex mb-3 ${
                msg.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              {msg.sender === "other" && (
                <img
                  src={chatData.otherUser.avatar}
                  alt={chatData.otherUser.name}
                  className="w-8 h-8 rounded-full mr-2 object-cover self-end border border-gray-200"
                />
              )}

              <div
                className={`max-w-[75%] rounded-lg p-3 shadow-sm ${
                  msg.sender === "user"
                    ? "bg-primary text-white"
                    : "bg-white text-gray-800 border border-gray-200"
                }`}
              >
                <p className="whitespace-pre-wrap text-sm">{msg.text}</p>
                <span
                  className={`text-xs block mt-1 text-right ${
                    msg.sender === "user" ? "text-white/70" : "text-gray-500"
                  }`}
                >
                  {msg.timestamp}
                </span>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef}></div>
        </div>
      </div>

      {/* Message Input - Fixed at the bottom */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-3 shadow-md z-40">
        <div className="flex items-center max-w-3xl mx-auto">
          <button className="p-2 text-gray-500 hover:text-gray-700 transition-colors">
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
                d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
              />
            </svg>
          </button>
          <input
            type="text"
            placeholder="Type a message..."
            className="flex-1 py-3 px-4 bg-gray-50 border border-gray-200 rounded-full mx-2 focus:outline-none focus:ring-1 focus:ring-primary text-sm"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            className="p-2 text-white bg-primary rounded-full hover:bg-primary-dark transition-colors disabled:opacity-50 disabled:hover:bg-primary"
            disabled={!message.trim()}
            onClick={handleSendMessage}
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
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex flex-col justify-end">
          <div
            ref={modalRef}
            className="bg-white rounded-t-2xl shadow-xl max-h-[60%] overflow-hidden"
            style={getModalStyle()}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Drag handle */}
            <div className="flex justify-center py-2 cursor-grab">
              <div className="w-10 h-1 bg-gray-300 rounded-full"></div>
            </div>

            <div className="p-4 pb-28">
              <h2 className="text-xl font-semibold mb-4 text-gray-900">
                Update Pet Price
              </h2>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  New Price ($)
                </label>
                <input
                  type="text"
                  value={newPrice}
                  onChange={(e) => setNewPrice(e.target.value)}
                  className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary text-xl font-medium"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <button
                  className="py-3 px-4 border border-gray-200 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors"
                  onClick={() => setShowPriceModal(false)}
                >
                  Cancel
                </button>
                <button
                  className="py-3 px-4 bg-primary text-white rounded-lg font-medium hover:bg-primary-dark transition-colors shadow-md"
                  onClick={handleUpdatePrice}
                >
                  Update Price
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
