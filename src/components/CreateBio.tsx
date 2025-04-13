import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import onboardingImage from "../assets/onboarding-two.svg";
import ThemeToggle from "./ThemeToggle";

export default function CreateBio() {
  const navigate = useNavigate();
  const [bio, setBio] = useState("");
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
    if (bio.trim()) {
      navigate("/location");
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#0A1121] w-screen overflow-x-hidden">
      {/* Mobile Header - Only visible on mobile */}
      <div className="lg:hidden">
        <div className="px-4 py-4 flex items-center justify-between">
          <Link to="/pet-preferences" className="text-gray-900 dark:text-white">
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
              alt="Create bio illustration"
              className="w-full h-auto"
            />
            <div className="mt-8 text-center">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                Create Your Bio
              </h2>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                Tell the community about yourself and your pets
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
                  Create your Bio
                </h1>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Tell the community about yourself and your pets.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="flex-1 flex flex-col">
                <div className="flex-1">
                  <label
                    htmlFor="bio"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Bio
                  </label>
                  <textarea
                    id="bio"
                    name="bio"
                    rows={6}
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                    placeholder="Enter text..."
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-[#1A2542] focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors duration-200 resize-none bg-gray-50 dark:bg-[#1A2542] dark:text-white"
                  />
                </div>

                <div className="mt-auto pb-[calc(1rem+env(safe-area-inset-bottom))] pt-4 w-full lg:pb-4">
                  <button
                    type="submit"
                    disabled={!bio.trim()}
                    className={`w-full py-3 px-4 rounded-lg transition-colors duration-200 ${
                      bio.trim()
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
