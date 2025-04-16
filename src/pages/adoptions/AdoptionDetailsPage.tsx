import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

// Mock country options
const countryOptions = ["Nigeria", "Ghana", "Kenya", "South Africa", "Egypt"];

export default function AdoptionDetailsPage() {
  const navigate = useNavigate();
  const location = useLocation();

  // Get pet details from previous screen if available
  const { petId, petName, petType } = location.state || {};

  // Form state
  const [fullName, setFullName] = useState("");
  const [country, setCountry] = useState("Nigeria");
  const [city, setCity] = useState("");
  const [addressLine1, setAddressLine1] = useState("");
  const [addressLine2, setAddressLine2] = useState("");
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

  const handleContinue = () => {
    // In a real app, this would navigate to a payment page
    // For now, let's just navigate to the adoption success page
    navigate("/adoption-request-submitted", {
      state: {
        petId,
        petName: petName || "Your pet",
        petType: petType || "pet",
      },
    });
  };

  const isFormValid = () => {
    return (
      fullName.trim() !== "" &&
      country !== "" &&
      city.trim() !== "" &&
      addressLine1.trim() !== ""
    );
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#0A1121] flex flex-col">
      {/* Header */}
      <header className="bg-white dark:bg-[#101935] px-4 py-3 flex items-center justify-between sticky top-0 z-50 shadow-sm border-b dark:border-[#1A2542]">
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
        <h1 className="flex-1 text-center text-lg font-medium text-gray-900 dark:text-white">
          Adoption Details
        </h1>
        <div className="w-7"></div> {/* Empty div for centering */}
      </header>

      {/* Main Content */}
      <main className="flex-1 p-4">
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-6">
          Provide your details to proceed with the adoption.
        </p>

        <form className="space-y-4">
          {/* Full Name */}
          <div>
            <label
              htmlFor="fullName"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full p-3 bg-gray-100 dark:bg-[#1A2542] rounded-lg border-0 focus:ring-2 focus:ring-primary dark:text-white"
              placeholder="Enter your full name"
            />
          </div>

          {/* Country */}
          <div>
            <label
              htmlFor="country"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Country
            </label>
            <div className="relative">
              <select
                id="country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="w-full p-3 bg-gray-100 dark:bg-[#1A2542] rounded-lg border-0 focus:ring-2 focus:ring-primary appearance-none dark:text-white"
              >
                <option value="" disabled>
                  Select country
                </option>
                {countryOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* City/Region */}
          <div>
            <label
              htmlFor="city"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              City/Region
            </label>
            <input
              type="text"
              id="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="w-full p-3 bg-gray-100 dark:bg-[#1A2542] rounded-lg border-0 focus:ring-2 focus:ring-primary dark:text-white"
              placeholder="Enter city or region"
            />
          </div>

          {/* Address Line 1 */}
          <div>
            <label
              htmlFor="addressLine1"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Address line 1
            </label>
            <input
              type="text"
              id="addressLine1"
              value={addressLine1}
              onChange={(e) => setAddressLine1(e.target.value)}
              className="w-full p-3 bg-gray-100 dark:bg-[#1A2542] rounded-lg border-0 focus:ring-2 focus:ring-primary dark:text-white"
              placeholder="Enter your address"
            />
          </div>

          {/* Address Line 2 */}
          <div>
            <label
              htmlFor="addressLine2"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Address line 2 (Optional)
            </label>
            <input
              type="text"
              id="addressLine2"
              value={addressLine2}
              onChange={(e) => setAddressLine2(e.target.value)}
              className="w-full p-3 bg-gray-100 dark:bg-[#1A2542] rounded-lg border-0 focus:ring-2 focus:ring-primary dark:text-white"
              placeholder="Apartment, floor, etc."
            />
          </div>
        </form>
      </main>

      {/* Continue Button */}
      <div className="fixed bottom-6 left-4 right-4">
        <button
          onClick={handleContinue}
          disabled={!isFormValid()}
          className="w-full py-3.5 rounded-lg font-medium bg-primary text-white hover:bg-primary-dark transition-colors"
        >
          Continue
        </button>
      </div>

      {/* Bottom Navigation Indicator */}
      <div className="h-1 w-32 bg-gray-300 dark:bg-gray-700 mx-auto mt-auto mb-6 rounded-full"></div>
    </div>
  );
}
