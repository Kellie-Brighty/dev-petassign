import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import ThemeToggle from "../../components/ThemeToggle";

export default function CreatePetAdoptionContact() {
  const navigate = useNavigate();
  const location = useLocation();

  // Get form data from previous step
  const formData = location.state?.formData || {
    petName: "",
    petType: "",
    age: "",
    gender: "",
    breed: "",
    petPhotos: [],
    description: "",
    reasonForAdoption: "",
    specialRequirements: "",
    health: "",
    country: "",
    city: "",
    addressLine1: "",
    addressLine2: "",
  };

  // Contact state
  const [phoneNumber, setPhoneNumber] = useState(formData.phoneNumber || "");
  const [showPhoneNumber, setShowPhoneNumber] = useState(
    formData.showPhoneNumber !== undefined ? formData.showPhoneNumber : true
  );
  const [email, setEmail] = useState(formData.email || "");
  const [showEmail, setShowEmail] = useState(
    formData.showEmail !== undefined ? formData.showEmail : true
  );
  const [whatsAppAvailable, setWhatsAppAvailable] = useState(
    formData.whatsAppAvailable || false
  );
  const [telegramAvailable, setTelegramAvailable] = useState(
    formData.telegramAvailable || false
  );
  const [preferredContactMethod, setPreferredContactMethod] = useState(
    formData.preferredContactMethod || "Any"
  );
  const [_isDarkMode, setIsDarkMode] = useState<boolean>(
    document.documentElement.classList.contains("dark")
  );

  // Email validation
  const [emailError, setEmailError] = useState("");

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

  const validateEmail = (email: string) => {
    if (email.trim() === "") {
      return true; // Empty email is allowed, but will be caught by isFormValid
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value;
    setEmail(newEmail);

    if (newEmail !== "" && !validateEmail(newEmail)) {
      setEmailError("Please enter a valid email address");
    } else {
      setEmailError("");
    }
  };

  const handleContinue = () => {
    // Update form data with contact info
    const updatedFormData = {
      ...formData,
      phoneNumber,
      showPhoneNumber,
      email,
      showEmail,
      whatsAppAvailable,
      telegramAvailable,
      preferredContactMethod,
    };

    // Navigate to next step
    navigate("/create-pet-adoption/review", {
      state: { formData: updatedFormData },
    });
  };

  const isFormValid = () => {
    // At least one contact method must be provided and valid
    const hasValidPhoneNumber = phoneNumber.trim() !== "";
    const hasValidEmail = email.trim() !== "" && emailError === "";

    return (
      (hasValidPhoneNumber || hasValidEmail) && (showPhoneNumber || showEmail)
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

      {/* Main content */}
      <div className="flex-1 overflow-y-auto px-4 py-6">
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Enter your contact information so interested adopters can reach you.
          You must provide at least one contact method that will be shown on
          your listing.
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
            <div className="mt-2 flex items-center">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  checked={showPhoneNumber}
                  onChange={(e) => setShowPhoneNumber(e.target.checked)}
                  className="rounded text-primary focus:ring-primary"
                />
                <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                  Show my phone number on the listing
                </span>
              </label>
            </div>
          </div>

          {/* Additional Contact Options */}
          <div className="mt-2">
            <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Additional Contact Options
            </p>
            <div className="space-y-2">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  checked={whatsAppAvailable}
                  onChange={(e) => setWhatsAppAvailable(e.target.checked)}
                  className="rounded text-primary focus:ring-primary"
                />
                <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                  Available on WhatsApp
                </span>
              </label>
              <label className="items-center block">
                <input
                  type="checkbox"
                  checked={telegramAvailable}
                  onChange={(e) => setTelegramAvailable(e.target.checked)}
                  className="rounded text-primary focus:ring-primary"
                />
                <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                  Available on Telegram
                </span>
              </label>
            </div>
          </div>

          {/* Email */}
          <div className="mt-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              className={`w-full p-3 bg-gray-100 dark:bg-[#1A2542] rounded-lg border-0 focus:ring-2 focus:ring-primary dark:text-white ${
                emailError ? "border border-red-500" : ""
              }`}
              placeholder="Enter your email address"
            />
            {emailError && (
              <p className="mt-1 text-xs text-red-500">{emailError}</p>
            )}
            <div className="mt-2 flex items-center">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  checked={showEmail}
                  onChange={(e) => setShowEmail(e.target.checked)}
                  className="rounded text-primary focus:ring-primary"
                />
                <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                  Show my email on the listing
                </span>
              </label>
            </div>
          </div>

          {/* Preferred Contact Method */}
          <div>
            <label
              htmlFor="contactMethod"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Preferred Contact Method
            </label>
            <div className="relative">
              <select
                id="contactMethod"
                value={preferredContactMethod}
                onChange={(e) => setPreferredContactMethod(e.target.value)}
                className="w-full p-3 bg-gray-100 dark:bg-[#1A2542] rounded-lg border-0 focus:ring-2 focus:ring-primary appearance-none dark:text-white"
              >
                <option value="Any">Any method</option>
                <option value="Phone">Phone call</option>
                <option value="SMS">SMS</option>
                <option value="WhatsApp">WhatsApp</option>
                <option value="Telegram">Telegram</option>
                <option value="Email">Email</option>
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

          {/* Contact Information Notice */}
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-6">
            <h3 className="text-sm font-medium text-blue-800 dark:text-blue-300 mb-2">
              Privacy Notice
            </h3>
            <p className="text-xs text-blue-700 dark:text-blue-400">
              You must provide at least one contact method that will be visible
              on your listing. This allows potential adopters to reach out to
              you directly about your pet.
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
