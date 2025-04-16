import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function AdoptionRequestSubmittedPage() {
  const navigate = useNavigate();
  const location = useLocation();

  // Get pet details from previous screen if available
  const { petId, petName } = location.state || {};

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

  const handleSendMessage = () => {
    // Navigate to chat page with PetAssign admin
    navigate("/chat", {
      state: {
        recipientId: "petassign-admin", // ID for PetAssign admin
        recipientName: "PetAssign Support", // Name for the admin
        petId,
        petName,
        isNewConversation: true,
        isAdminChat: true,
      },
    });
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#0A1121] flex flex-col items-center justify-center px-4">
      {/* Success Illustration */}
      <div className="max-w-md mx-auto w-full">
        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-full w-64 h-64 mx-auto mb-6 flex items-center justify-center">
          <div className="relative w-48 h-48">
            {/* Custom form with checkmark illustration */}
            <svg
              className="w-full h-full"
              viewBox="0 0 200 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Form background */}
              <rect
                x="40"
                y="30"
                width="120"
                height="140"
                rx="5"
                fill="#F8FAFC"
                stroke="#CBD5E1"
                strokeWidth="2"
              />

              {/* Form lines */}
              <line
                x1="60"
                y1="60"
                x2="140"
                y2="60"
                stroke="#CBD5E1"
                strokeWidth="2"
              />
              <line
                x1="60"
                y1="80"
                x2="140"
                y2="80"
                stroke="#CBD5E1"
                strokeWidth="2"
              />
              <line
                x1="60"
                y1="100"
                x2="140"
                y2="100"
                stroke="#CBD5E1"
                strokeWidth="2"
              />

              {/* Complete checkmark */}
              <g transform="translate(140, 55) scale(0.7)">
                <circle cx="0" cy="0" r="15" fill="#0077B6" />
                <path
                  d="M-7 0 L-2 5 L7 -5"
                  stroke="white"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>

              {/* Stamp text */}
              <g transform="translate(100, 70) rotate(-15)">
                <rect
                  x="-30"
                  y="-10"
                  width="60"
                  height="20"
                  rx="3"
                  fill="#0077B6"
                  fillOpacity="0.8"
                />
                <text
                  x="0"
                  y="5"
                  fontFamily="Arial"
                  fontSize="12"
                  fontWeight="bold"
                  fill="white"
                  textAnchor="middle"
                >
                  COMPLETE
                </text>
              </g>

              {/* Hand holding pen */}
              <path
                d="M160 120 C170 115, 175 125, 165 135 L145 155 C140 160, 130 165, 120 160 C110 155, 105 145, 110 135 L120 125"
                fill="#E0F2FE"
                stroke="#0077B6"
                strokeWidth="1.5"
              />
              <path
                d="M120 125 L140 105 L150 115 L130 135 Z"
                fill="#94A3B8"
                stroke="#64748B"
                strokeWidth="1.5"
              />
            </svg>
          </div>
        </div>

        {/* Success Message */}
        <h1 className="text-xl font-bold text-gray-900 dark:text-white text-center mb-2">
          Adoption Request Submitted!
        </h1>
        <p className="text-gray-600 dark:text-gray-300 text-center mb-10">
          Thank you for your interest! Your request has been successfully
          submitted. A PetAssign admin will review your request and assist with
          the adoption process. Click below to chat with our support team for
          any questions.
        </p>

        {/* Send Message Button */}
        <button
          onClick={handleSendMessage}
          className="w-full py-3.5 bg-primary text-white rounded-lg font-medium hover:bg-primary-dark transition-colors"
        >
          Chat with PetAssign Support
        </button>
      </div>

      {/* Bottom Navigation Indicator */}
      <div className="h-1 w-32 bg-gray-300 dark:bg-gray-700 mx-auto mt-auto mb-6 rounded-full"></div>
    </div>
  );
}
