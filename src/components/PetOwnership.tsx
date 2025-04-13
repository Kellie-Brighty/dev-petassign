import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import onboardingImage from "../assets/onboarding-one.svg";
import ThemeToggle from "./ThemeToggle";

const options = ["Yes, I am a pet owner", "No, I do not have pets"];

export default function PetOwnership() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState<string | null>(null);
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
    if (selected) {
      navigate("/pet-preferences");
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#0A1121] w-screen overflow-x-hidden">
      {/* Mobile Header - Only visible on mobile */}
      <div className="lg:hidden">
        <div className="px-4 py-4 flex items-center justify-between">
          <Link to="/select-goal" className="text-gray-900 dark:text-white">
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
              alt="Pet ownership illustration"
              className="w-full h-auto"
            />
            <div className="mt-8 text-center">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                Tell Us About Your Pets
              </h2>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                Help us personalize your experience on Pet World
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
                  Do You Own Pets?
                </h1>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Tell us if you currently have any pets to personalize your
                  journey
                </p>
              </div>

              <form onSubmit={handleSubmit} className="flex-1 flex flex-col">
                <div className="space-y-3 flex-1">
                  {options.map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => setSelected(option)}
                      className={`w-full text-left px-4 py-3 rounded-lg border ${
                        selected === option
                          ? "border-primary bg-primary/5 dark:bg-primary/10 dark:border-primary/40"
                          : "border-gray-200 dark:border-[#1A2542] bg-white dark:bg-[#101935] hover:bg-gray-50 dark:hover:bg-[#1A2542]/50"
                      } transition-colors duration-200 dark:text-white`}
                    >
                      {option}
                    </button>
                  ))}
                </div>

                <div className="mt-auto pb-[calc(1rem+env(safe-area-inset-bottom))] pt-4 w-full lg:pb-4">
                  <button
                    type="submit"
                    disabled={!selected}
                    className={`w-full py-3 px-4 rounded-lg transition-colors duration-200 ${
                      selected
                        ? "bg-primary text-white hover:bg-primary-dark"
                        : "bg-gray-100 dark:bg-[#1A2542] text-gray-400 dark:text-gray-500 cursor-not-allowed"
                    }`}
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
