import { useState, useEffect, useRef } from "react";
// import { useNavigate } from "react-router-dom";

interface Message {
  id: string;
  text: string;
  sender: "user" | "other";
  timestamp: string;
}

interface ChatOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  recipient: {
    id: string;
    name: string;
    avatar: string;
    status?: string;
  };
  petPrice?: number;
}

export default function ChatOverlay({
  isOpen,
  onClose,
  recipient,
  petPrice,
}: ChatOverlayProps) {
  const [message, setMessage] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  // const navigate = useNavigate();
  const overlayRef = useRef<HTMLDivElement>(null);

  // Mock chat data
  const [messages, setMessages] = useState<Message[]>([
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
      text: "Hi, I'm interested in your Siberian Husky for mating. Is it still available?",
      sender: "user",
      timestamp: "6:12 PM",
    },
  ]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      scrollToBottom();
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen, messages]);

  // Handle clicks outside the chat overlay
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        overlayRef.current &&
        !overlayRef.current.contains(event.target as Node) &&
        event.target instanceof Element &&
        !event.target.closest(".chat-overlay-container")
      ) {
        onClose();
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSendMessage = () => {
    if (message.trim()) {
      const newMessage: Message = {
        id: `m${messages.length + 1}`,
        text: message,
        sender: "user",
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };

      setMessages([...messages, newMessage]);
      setMessage("");

      // Simulate a reply after a short delay
      setTimeout(() => {
        const replyMessage: Message = {
          id: `m${messages.length + 2}`,
          text: "Thanks for your message! I'll get back to you soon.",
          sender: "other",
          timestamp: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        };
        setMessages((prev) => [...prev, replyMessage]);
      }, 1500);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div
        ref={overlayRef}
        className="chat-overlay-container bg-white rounded-lg shadow-xl overflow-hidden w-full max-w-full h-full md:max-w-3xl md:h-[600px] flex flex-col"
      >
        {/* Header */}
        <div className="bg-white px-4 py-3 flex items-center shadow-sm border-b">
          <button onClick={onClose} className="p-1 mr-3 md:mr-4">
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <div className="flex items-center flex-1">
            <img
              src={recipient.avatar}
              alt={recipient.name}
              className="w-10 h-10 rounded-full mr-3 object-cover"
            />
            <div className="flex-1">
              <h1 className="text-base font-medium">{recipient.name}</h1>
              <p className="text-xs text-gray-500">
                {recipient.status || "Online"}
              </p>
            </div>

            {/* Desktop actions */}
            <div className="hidden md:flex items-center space-x-2">
              <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-full">
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
              <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-full">
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
                    d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
              </button>
              <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-full">
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
          </div>
        </div>

        {/* Pet Price Banner - Only shown if petPrice is provided */}
        {petPrice && (
          <div className="bg-gray-100 p-3 flex justify-between items-center">
            <div className="text-sm font-medium">Pet Price: ₦{petPrice}</div>
            <button className="bg-primary text-white py-1 px-4 rounded-full text-sm font-medium">
              Change
            </button>
          </div>
        )}

        {/* Desktop layout */}
        <div className="hidden md:flex flex-1 overflow-hidden">
          {/* Left sidebar for desktop */}
          <div className="w-80 border-r bg-gray-50 overflow-y-auto">
            <div className="p-3">
              <input
                type="text"
                placeholder="Search messages..."
                className="w-full px-3 py-2 rounded-full border border-gray-200 focus:outline-none focus:ring-1 focus:ring-primary text-sm"
              />
            </div>

            {/* Recent chats list */}
            <div className="space-y-1">
              <div className="px-3 py-2 bg-primary/10 border-l-4 border-primary flex items-center">
                <img
                  src={recipient.avatar}
                  alt={recipient.name}
                  className="w-10 h-10 rounded-full mr-3 object-cover"
                />
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-medium truncate">
                    {recipient.name}
                  </h3>
                  <p className="text-xs text-gray-500 truncate">
                    Please help me find a good monitor...
                  </p>
                </div>
                <span className="text-xs text-gray-500">5:12 PM</span>
              </div>

              {/* Other dummy chats */}
              <div className="px-3 py-2 hover:bg-gray-100 flex items-center">
                <img
                  src="https://randomuser.me/api/portraits/men/42.jpg"
                  alt="John Doe"
                  className="w-10 h-10 rounded-full mr-3 object-cover"
                />
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-medium truncate">John Doe</h3>
                  <p className="text-xs text-gray-500 truncate">
                    Is your German Shepherd still available?
                  </p>
                </div>
                <span className="text-xs text-gray-500">yesterday</span>
              </div>

              <div className="px-3 py-2 hover:bg-gray-100 flex items-center">
                <img
                  src="https://randomuser.me/api/portraits/women/24.jpg"
                  alt="Sarah Miller"
                  className="w-10 h-10 rounded-full mr-3 object-cover"
                />
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-medium truncate">Sarah Miller</h3>
                  <p className="text-xs text-gray-500 truncate">
                    Thank you for the information
                  </p>
                </div>
                <span className="text-xs text-gray-500">2d ago</span>
              </div>
            </div>
          </div>

          {/* Main chat area for desktop */}
          <div className="flex-1 flex flex-col">
            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
              <div className="space-y-4">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${
                      msg.sender === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    {msg.sender === "other" && (
                      <img
                        src={recipient.avatar}
                        alt={recipient.name}
                        className="w-8 h-8 rounded-full mr-2 self-end"
                      />
                    )}
                    <div
                      className={`max-w-[70%] rounded-lg p-3 ${
                        msg.sender === "user"
                          ? "bg-primary text-white rounded-br-none"
                          : "bg-white border border-gray-200 text-gray-800 rounded-bl-none"
                      }`}
                    >
                      <p className="text-sm whitespace-pre-line">{msg.text}</p>
                      <div
                        className={`text-[10px] mt-1 text-right ${
                          msg.sender === "user"
                            ? "text-blue-100"
                            : "text-gray-500"
                        }`}
                      >
                        {msg.timestamp}
                      </div>
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>
            </div>

            {/* Input area */}
            <div className="bg-white p-3 flex items-center border-t">
              <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-full">
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
                    d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                  />
                </svg>
              </button>
              <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-full mx-1">
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
                    d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </button>
              <input
                type="text"
                placeholder="Type a message..."
                className="flex-1 py-2 px-3 bg-gray-100 rounded-full mx-2 focus:outline-none focus:ring-1 focus:ring-primary"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    handleSendMessage();
                  }
                }}
              />
              <button
                className="p-2 text-primary hover:bg-blue-50 rounded-full"
                onClick={handleSendMessage}
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile chat view */}
        <div className="md:hidden flex flex-col flex-1">
          {/* Chat Messages */}
          <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
            <div className="space-y-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${
                    msg.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg p-3 ${
                      msg.sender === "user"
                        ? "bg-primary text-white rounded-br-none"
                        : "bg-white border border-gray-200 text-gray-800 rounded-bl-none"
                    }`}
                  >
                    <p className="text-sm whitespace-pre-line">{msg.text}</p>
                    <div
                      className={`text-[10px] mt-1 ${
                        msg.sender === "user"
                          ? "text-blue-100"
                          : "text-gray-500"
                      }`}
                    >
                      {msg.timestamp}
                    </div>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
          </div>

          {/* Message Input */}
          <div className="bg-white p-2 flex items-center border-t">
            <button className="p-2 text-gray-500">
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
              className="flex-1 py-2 px-3 bg-gray-100 rounded-full mx-2 focus:outline-none"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  handleSendMessage();
                }
              }}
            />
            <button className="p-2 text-primary" onClick={handleSendMessage}>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
