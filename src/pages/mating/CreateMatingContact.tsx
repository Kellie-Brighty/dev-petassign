import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import ThemeToggle from "../../components/ThemeToggle";

export default function CreateMatingContact() {
  const navigate = useNavigate();
  const location = useLocation();

  // Get form data from previous steps
  const formData = location.state?.formData || {};

  const [_isDarkMode, setIsDarkMode] = useState<boolean>(
    document.documentElement.classList.contains("dark")
  );
  const [phoneNumber, setPhoneNumber] = useState<string>(
    formData.phoneNumber || ""
  );
  const [email, setEmail] = useState<string>(formData.email || "");
  const [whatsapp, setWhatsapp] = useState<boolean>(formData.whatsapp || false);
  const [telegram, setTelegram] = useState<boolean>(formData.telegram || false);
  const [showPhoneNumber, setShowPhoneNumber] = useState<boolean>(
    formData.showPhoneNumber !== undefined ? formData.showPhoneNumber : true
  );
  const [showEmail, setShowEmail] = useState<boolean>(
    formData.showEmail !== undefined ? formData.showEmail : true
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

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Allow only numbers, plus sign at beginning, spaces, and parentheses
    const phoneRegex = /^[0-9+\s()]*$/;
    if (value === "" || phoneRegex.test(value)) {
      setPhoneNumber(value);
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleContinue = () => {
    // Update form data with contact information
    const updatedFormData = {
      ...formData,
      phoneNumber,
      email,
      whatsapp,
      telegram,
      showPhoneNumber,
      showEmail,
      contactData: {
        phoneNumber,
        email,
        whatsapp,
        telegram,
        showPhoneNumber,
        showEmail,
      },
    };

    // Navigate to the review page
    navigate("/create-mating/review", {
      state: { formData: updatedFormData },
    });
  };

  // Basic email validation
  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return email === "" || emailRegex.test(email);
  };

  const isFormValid = () => {
    // At least one contact method should be provided and valid
    return (
      (phoneNumber && showPhoneNumber) ||
      (email && showEmail && isValidEmail(email))
    );
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
            Contact Information
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
            Provide your contact information so interested pet owners can reach
            you about mating opportunities.
          </p>
        </div>

        <div className="bg-white dark:bg-[#101935] rounded-lg p-4 mb-6 space-y-4">
          {/* Phone Number */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label
                htmlFor="phoneNumber"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Phone Number
              </label>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="showPhone"
                  checked={showPhoneNumber}
                  onChange={() => setShowPhoneNumber(!showPhoneNumber)}
                  className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                />
                <label
                  htmlFor="showPhone"
                  className="ml-2 block text-xs text-gray-500 dark:text-gray-400"
                >
                  Show on listing
                </label>
              </div>
            </div>
            <input
              type="tel"
              id="phoneNumber"
              placeholder="Enter your phone number"
              value={phoneNumber}
              onChange={handlePhoneChange}
              className={`w-full p-3 border rounded-lg focus:ring-primary focus:border-primary bg-transparent ${
                !showPhoneNumber
                  ? "border-gray-200 dark:border-[#1A2542]/50 text-gray-400 dark:text-gray-500"
                  : "border-gray-300 dark:border-[#1A2542] text-gray-900 dark:text-gray-100"
              }`}
              disabled={!showPhoneNumber}
            />
          </div>

          {/* Email */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Email Address
              </label>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="showEmail"
                  checked={showEmail}
                  onChange={() => setShowEmail(!showEmail)}
                  className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                />
                <label
                  htmlFor="showEmail"
                  className="ml-2 block text-xs text-gray-500 dark:text-gray-400"
                >
                  Show on listing
                </label>
              </div>
            </div>
            <input
              type="email"
              id="email"
              placeholder="Enter your email address"
              value={email}
              onChange={handleEmailChange}
              className={`w-full p-3 border rounded-lg focus:ring-primary focus:border-primary bg-transparent ${
                !showEmail
                  ? "border-gray-200 dark:border-[#1A2542]/50 text-gray-400 dark:text-gray-500"
                  : "border-gray-300 dark:border-[#1A2542] text-gray-900 dark:text-gray-100"
              }`}
              disabled={!showEmail}
            />
            {email && !isValidEmail(email) && (
              <p className="mt-1 text-xs text-red-500">
                Please enter a valid email address
              </p>
            )}
          </div>

          {/* Additional Contact Methods */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Additional Contact Methods
            </label>
            <div className="space-y-3">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="whatsapp"
                  checked={whatsapp}
                  onChange={() => setWhatsapp(!whatsapp)}
                  className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                />
                <label
                  htmlFor="whatsapp"
                  className="ml-3 block text-sm text-gray-700 dark:text-gray-300"
                >
                  I'm available on WhatsApp using my phone number
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="telegram"
                  checked={telegram}
                  onChange={() => setTelegram(!telegram)}
                  className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                />
                <label
                  htmlFor="telegram"
                  className="ml-3 block text-sm text-gray-700 dark:text-gray-300"
                >
                  I'm available on Telegram using my phone number
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Privacy */}
        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mb-6">
          <h3 className="text-sm font-medium text-blue-800 dark:text-blue-300 mb-2">
            Contact Information Privacy
          </h3>
          <p className="text-xs text-blue-700 dark:text-blue-400">
            Your contact details will only be visible to logged-in users. You
            can choose which specific contact methods to display on your
            listing. We recommend providing at least two ways for potential
            matches to reach you.
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
          Continue to Review
        </button>
      </div>
    </div>
  );
}
