import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import ThemeToggle from "../../components/ThemeToggle";

export default function CreateMatingLocation() {
  const navigate = useNavigate();
  const location = useLocation();

  // Get form data from previous steps
  const formData = location.state?.formData || {};

  const [_isDarkMode, setIsDarkMode] = useState<boolean>(
    document.documentElement.classList.contains("dark")
  );
  const [country, setCountry] = useState<string>(formData.country || "");
  const [city, setCity] = useState<string>(formData.city || "");
  const [addressLine1, setAddressLine1] = useState<string>(
    formData.addressLine1 || ""
  );
  const [addressLine2, setAddressLine2] = useState<string>(
    formData.addressLine2 || ""
  );
  const [zipCode, setZipCode] = useState<string>(formData.zipCode || "");

  // Countries available for selection
  const countries = ["Nigeria", "Ghana", "Kenya", "South Africa", "Egypt"];

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
    // Navigate to next form step with all form data
    const updatedFormData = {
      ...formData,
      country,
      city,
      addressLine1,
      addressLine2,
      zipCode,
      locationData: {
        country,
        city,
        addressLine1,
        addressLine2,
        zipCode,
      },
    };
    navigate("/create-mating/contact", {
      state: { formData: updatedFormData },
    });
  };

  const isFormValid = () => {
    return country && city && addressLine1;
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-[#0A1121] flex flex-col w-screen">
      {/* Header */}
      <header className="px-4 py-3 flex items-center justify-between sticky top-0 z-50 bg-white dark:bg-[#101935] border-b dark:border-[#1A2542] shadow-sm">
        <div className="flex items-center">
          <button onClick={() => navigate(-1)} className="p-1 mr-2">
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
            Location Details
          </h1>
        </div>
        <div className="flex items-center">
          <button
            className="text-primary font-medium text-sm mr-4"
            onClick={() => navigate("/create-post")}
          >
            Save
          </button>
          <ThemeToggle />
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto px-4 py-6">
        <div className="mb-4">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
            Provide your location to help interested parties determine proximity
            for mating arrangements.
          </p>
        </div>

        <div className="bg-white dark:bg-[#101935] rounded-lg p-4 mb-6 space-y-4">
          {/* Country Selection */}
          <div>
            <label
              htmlFor="country"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Country *
            </label>
            <select
              id="country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="w-full p-3 border border-gray-300 dark:border-[#1A2542] rounded-lg focus:ring-primary focus:border-primary bg-white dark:bg-[#101935] text-gray-900 dark:text-gray-100"
            >
              <option value="" disabled>
                Select a country
              </option>
              {countries.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>

          {/* City/State */}
          <div>
            <label
              htmlFor="city"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              City/State *
            </label>
            <input
              type="text"
              id="city"
              placeholder="Enter city or state"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="w-full p-3 border border-gray-300 dark:border-[#1A2542] rounded-lg focus:ring-primary focus:border-primary bg-transparent text-gray-900 dark:text-gray-100"
            />
          </div>

          {/* Address Line 1 */}
          <div>
            <label
              htmlFor="addressLine1"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Address Line 1 *
            </label>
            <input
              type="text"
              id="addressLine1"
              placeholder="Street address, district"
              value={addressLine1}
              onChange={(e) => setAddressLine1(e.target.value)}
              className="w-full p-3 border border-gray-300 dark:border-[#1A2542] rounded-lg focus:ring-primary focus:border-primary bg-transparent text-gray-900 dark:text-gray-100"
            />
          </div>

          {/* Address Line 2 */}
          <div>
            <label
              htmlFor="addressLine2"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Address Line 2 (Optional)
            </label>
            <input
              type="text"
              id="addressLine2"
              placeholder="Apartment, suite, unit, building, etc."
              value={addressLine2}
              onChange={(e) => setAddressLine2(e.target.value)}
              className="w-full p-3 border border-gray-300 dark:border-[#1A2542] rounded-lg focus:ring-primary focus:border-primary bg-transparent text-gray-900 dark:text-gray-100"
            />
          </div>

          {/* Zip/Postal Code */}
          <div>
            <label
              htmlFor="zipCode"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Zip/Postal Code (Optional)
            </label>
            <input
              type="text"
              id="zipCode"
              placeholder="Enter zip/postal code"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
              className="w-full p-3 border border-gray-300 dark:border-[#1A2542] rounded-lg focus:ring-primary focus:border-primary bg-transparent text-gray-900 dark:text-gray-100"
            />
          </div>
        </div>

        {/* Privacy Note */}
        <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mb-6">
          <h3 className="text-sm font-medium text-yellow-800 dark:text-yellow-300 mb-2">
            Privacy Note
          </h3>
          <p className="text-xs text-yellow-700 dark:text-yellow-400">
            Your full address is not publicly displayed. Only your city and
            country will be shown to users browsing mating listings. Your
            complete address will only be shared with matched parties after
            you've approved the connection.
          </p>
        </div>
      </div>

      {/* Continue Button */}
      <div className="p-4 bg-white dark:bg-[#101935] border-t dark:border-[#1A2542] shadow-md">
        <button
          onClick={handleContinue}
          disabled={!isFormValid()}
          className={`w-full py-3.5 rounded-lg font-medium transition-colors ${
            isFormValid()
              ? "bg-primary text-white hover:bg-primary-dark"
              : "bg-gray-200 dark:bg-[#1A2542] text-gray-400 dark:text-gray-500 cursor-not-allowed"
          }`}
        >
          Continue
        </button>
      </div>
    </div>
  );
}
