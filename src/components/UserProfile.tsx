import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import onboardingImage from "../assets/onboarding-one.svg";
import ThemeToggle from "./ThemeToggle";

export default function UserProfile() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
  });
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
    // Handle profile creation logic here
    navigate("/select-goal");
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#0A1121] w-screen overflow-x-hidden">
      {/* Mobile Header - Only visible on mobile */}
      <div className="lg:hidden">
        <div className="px-4 py-4 flex items-center justify-between">
          <Link to="/verify" className="text-gray-900 dark:text-white">
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
              alt="Profile setup illustration"
              className="w-full h-auto"
            />
            <div className="mt-8 text-center">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                Let's Get to Know You
              </h2>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                Help us create a personalized experience for you in our
                pet-loving community.
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
                  Tell Us About You
                </h1>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Please provide your information so we can create and
                  personalize your profile just for you
                </p>
              </div>

              <form onSubmit={handleSubmit} className="flex-1 flex flex-col">
                <div className="space-y-6 flex-1">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={(e) =>
                        setFormData({ ...formData, firstName: e.target.value })
                      }
                      className="mt-1 block w-full px-4 py-3 bg-gray-50 dark:bg-[#1A2542] border border-gray-200 dark:border-[#1A2542] rounded-lg focus:ring-primary focus:border-primary dark:text-white"
                      placeholder="Heritage"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={(e) =>
                        setFormData({ ...formData, lastName: e.target.value })
                      }
                      className="mt-1 block w-full px-4 py-3 bg-gray-50 dark:bg-[#1A2542] border border-gray-200 dark:border-[#1A2542] rounded-lg focus:ring-primary focus:border-primary dark:text-white"
                      placeholder="Atiba"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="username"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Username
                    </label>
                    <input
                      type="text"
                      id="username"
                      name="username"
                      value={formData.username}
                      onChange={(e) =>
                        setFormData({ ...formData, username: e.target.value })
                      }
                      className="mt-1 block w-full px-4 py-3 bg-gray-50 dark:bg-[#1A2542] border border-gray-200 dark:border-[#1A2542] rounded-lg focus:ring-primary focus:border-primary dark:text-white"
                      placeholder="Dog_father17"
                    />
                  </div>
                </div>

                <div className="mt-auto pb-[calc(1rem+env(safe-area-inset-bottom))] pt-4 w-full lg:pb-4">
                  <button
                    type="submit"
                    className="w-full bg-primary text-white py-3 px-4 rounded-lg hover:bg-primary-dark transition-colors duration-200"
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
