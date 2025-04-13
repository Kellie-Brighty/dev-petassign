import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import onboardingImage from "../assets/onboarding-two.svg";
import ThemeToggle from "./ThemeToggle";

const languages = [
  "English",
  "Spanish",
  "French",
  "German",
  "Chinese",
  "Arabic",
];

export default function Languages() {
  const navigate = useNavigate();
  const [primaryLanguage, setPrimaryLanguage] = useState("English");
  const [secondaryLanguage, setSecondaryLanguage] = useState("Spanish");
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (primaryLanguage) {
      navigate("/upload-photo");
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#0A1121] w-screen overflow-x-hidden">
      {/* Mobile Header - Only visible on mobile */}
      <div className="lg:hidden">
        <div className="px-4 py-4 flex items-center justify-between">
          <Link to="/location" className="text-gray-900 dark:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
          </Link>
          <ThemeToggle />
        </div>
      </div>

      <div className="flex min-h-[calc(100vh-64px)]">
        {/* Left Section - Image (Hidden on mobile) */}
        <div className="hidden lg:flex lg:w-1/2 bg-primary/5 dark:bg-[#101935]/50 items-center justify-center p-8 relative">
          {/* Theme toggle for desktop */}
          <div className="absolute top-4 right-4">
            <ThemeToggle />
          </div>

          <div className="max-w-md">
            <img
              src={onboardingImage}
              alt="Languages illustration"
              className="w-full h-auto"
            />
            <div className="mt-8 text-center">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                Select Your Languages
              </h2>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                Tell us which languages you speak to communicate with others
              </p>
            </div>
          </div>
        </div>

        {/* Right Section - Form */}
        <div className="w-full lg:w-1/2 flex flex-col px-4 lg:px-12 h-[calc(100vh-64px)] lg:h-auto">
          <div className="flex-1 flex flex-col lg:justify-center">
            <div className="w-full max-w-md mx-auto flex flex-col h-full lg:h-auto">
              <div className="mb-8">
                <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  Languages
                </h1>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Select the language you speak to communicate easily with
                  others.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="flex-1 flex flex-col">
                <div className="space-y-6 flex-1">
                  <div>
                    <label
                      htmlFor="primaryLanguage"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                      Language
                    </label>
                    <div className="relative">
                      <select
                        id="primaryLanguage"
                        name="primaryLanguage"
                        value={primaryLanguage}
                        onChange={(e) => setPrimaryLanguage(e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-[#1A2542] focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors duration-200 bg-gray-50 dark:bg-[#1A2542] dark:text-white appearance-none pr-10"
                      >
                        {languages.map((lang) => (
                          <option key={lang} value={lang}>
                            {lang}
                          </option>
                        ))}
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 dark:text-gray-300">
                        <svg
                          className="h-4 w-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="secondaryLanguage"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                      Language 2 (Optional)
                    </label>
                    <div className="relative">
                      <select
                        id="secondaryLanguage"
                        name="secondaryLanguage"
                        value={secondaryLanguage}
                        onChange={(e) => setSecondaryLanguage(e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-[#1A2542] focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors duration-200 bg-gray-50 dark:bg-[#1A2542] dark:text-white appearance-none pr-10"
                      >
                        {languages.map((lang) => (
                          <option key={lang} value={lang}>
                            {lang}
                          </option>
                        ))}
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 dark:text-gray-300">
                        <svg
                          className="h-4 w-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-auto pb-[calc(1rem+env(safe-area-inset-bottom))] pt-4 w-full lg:pb-4">
                  <button
                    type="submit"
                    className="w-full py-3 px-4 rounded-lg transition-colors duration-200 bg-primary text-white hover:bg-primary-dark"
                  >
                    Continue
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
