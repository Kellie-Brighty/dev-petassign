import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import adoptImage from "../../assets/adopt.svg";

export default function AdoptionMembershipPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [_isDarkMode, setIsDarkMode] = useState<boolean>(
    document.documentElement.classList.contains("dark")
  );

  // Get pet details from previous screen if available
  const { petId, petName, petType } = location.state || {};

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

  const handleJoinNow = () => {
    // In a real app, this would first make a payment request to Paystack
    // For now, just navigate to the adoption details page
    navigate(`/adoption-details/${petId || "new"}`, {
      state: {
        petId,
        petName,
        petType,
      },
    });
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#0A1121] flex flex-col">
      {/* Header */}
      <header className="bg-white dark:bg-[#101935] px-4 py-3 flex items-center shadow-sm border-b dark:border-[#1A2542]">
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
        <h1 className="text-lg font-medium text-gray-900 dark:text-white">
          Become a member
        </h1>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center px-4 py-6">
        {/* Illustration */}
        <div className="w-full max-w-md bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-8 mb-6">
          <img
            src={adoptImage}
            alt="Adopt Don't Shop"
            className="w-full h-auto"
          />
        </div>

        {/* Membership info */}
        <div className="w-full max-w-md">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            Become a Member to Adopt a Pet
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            To adopt a pet, you need to be a member. Membership provides access
            to exclusive features and helps us maintain a quality community.
            Join now for just ₦7,000.
          </p>

          {/* Join now button */}
          <button
            onClick={handleJoinNow}
            className="w-full mt-6 py-3.5 bg-primary text-white rounded-lg font-medium hover:bg-primary-dark transition-colors"
          >
            Join now
          </button>
        </div>
      </main>

      {/* Bottom Navigation Indicator */}
      <div className="h-1 w-32 bg-gray-300 dark:bg-gray-700 mx-auto mt-auto mb-6 rounded-full"></div>
    </div>
  );
}
