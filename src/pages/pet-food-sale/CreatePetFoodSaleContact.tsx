import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import ThemeToggle from "../../components/ThemeToggle";

export default function CreatePetFoodSaleContact() {
  const navigate = useNavigate();
  const location = useLocation();

  // Get form data from previous steps
  const formData = location.state?.formData || {};

  const [phoneNumber, setPhoneNumber] = useState(formData.phoneNumber || "");
  const [email, setEmail] = useState(formData.email || "");
  const [whatsapp, setWhatsapp] = useState(formData.whatsapp || "");
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
    // Compile contact data
    const contactData = {
      phoneNumber,
      email,
      whatsapp,
    };

    // Navigate to next form step with all form data
    const updatedFormData = {
      ...formData,
      ...contactData,
    };
    navigate("/pet-food-sale/review", {
      state: { formData: updatedFormData },
    });
  };

  const isFormValid = () => {
    return phoneNumber !== "" || email !== "";
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
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Provide contact details for interested buyers to reach you about your
          pet food product
        </p>

        <form className="space-y-5">
          {/* Phone Number */}
          <div>
            <label
              htmlFor="phoneNumber"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="w-full p-3 bg-gray-100 dark:bg-[#1A2542] rounded-lg border-0 focus:ring-2 focus:ring-primary dark:text-white"
              placeholder="Enter your phone number"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 bg-gray-100 dark:bg-[#1A2542] rounded-lg border-0 focus:ring-2 focus:ring-primary dark:text-white"
              placeholder="Enter your email address"
            />
          </div>

          {/* WhatsApp */}
          <div>
            <label
              htmlFor="whatsapp"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              WhatsApp (Optional)
            </label>
            <input
              type="tel"
              id="whatsapp"
              value={whatsapp}
              onChange={(e) => setWhatsapp(e.target.value)}
              className="w-full p-3 bg-gray-100 dark:bg-[#1A2542] rounded-lg border-0 focus:ring-2 focus:ring-primary dark:text-white"
              placeholder="Enter your WhatsApp number"
            />
          </div>

          {/* Contact Privacy Note */}
          <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg">
            <h3 className="text-sm font-medium text-amber-800 dark:text-amber-300 mb-2">
              Privacy Note
            </h3>
            <p className="text-xs text-amber-700 dark:text-amber-400">
              Your contact information will only be shared with interested
              buyers who specifically request to contact you about your product.
            </p>
          </div>
        </form>
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
