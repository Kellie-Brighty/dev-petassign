import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import welcomeImage from "../assets/welcome.svg";
import ThemeToggle from "./ThemeToggle";

export default function SignUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    emailOrPhone: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
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
    setIsLoading(true);

    // Handle signup logic here
    setTimeout(() => {
      navigate("/verify"); // Navigate to OTP verification after signup
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#0A1121] w-screen overflow-x-hidden">
      {/* Mobile Header - Only visible on mobile */}
      <div className="lg:hidden">
        <div className="px-4 py-4 flex items-center justify-between">
          <Link to="/" className="text-gray-900 dark:text-white">
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
              src={welcomeImage}
              alt="Welcome illustration"
              className="w-full h-auto"
            />
            <div className="mt-8 text-center">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                Welcome to Pet Assign
              </h2>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                Join our community of pet lovers and find your perfect
                companion.
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
                  Sign up
                </h1>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Fill in your details below to become a member in just a few
                  easy steps.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="flex-1 flex flex-col">
                <div className="space-y-6 flex-1">
                  <div>
                    <label
                      htmlFor="emailOrPhone"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Email or Phone number
                    </label>
                    <input
                      type="text"
                      id="emailOrPhone"
                      name="emailOrPhone"
                      value={formData.emailOrPhone}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          emailOrPhone: e.target.value,
                        })
                      }
                      className="mt-1 block w-full px-4 py-3 bg-gray-50 dark:bg-[#1A2542] border border-gray-200 dark:border-[#1A2542] rounded-lg focus:ring-primary focus:border-primary dark:text-white"
                      placeholder="jennywilson@gmail.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Create Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={(e) =>
                        setFormData({ ...formData, password: e.target.value })
                      }
                      className="mt-1 block w-full px-4 py-3 bg-gray-50 dark:bg-[#1A2542] border border-gray-200 dark:border-[#1A2542] rounded-lg focus:ring-primary focus:border-primary dark:text-white"
                      placeholder="••••••••"
                    />
                  </div>
                </div>

                <div className="mt-auto pb-[calc(1rem+env(safe-area-inset-bottom))] pt-4 space-y-4 w-full lg:pb-4">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className={`w-full bg-primary text-white py-3 px-4 rounded-lg transition-colors duration-200 ${
                      isLoading
                        ? "opacity-70 cursor-not-allowed"
                        : "hover:bg-primary-dark"
                    }`}
                  >
                    {isLoading ? (
                      <span className="flex items-center justify-center">
                        <svg
                          className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Signing up...
                      </span>
                    ) : (
                      "Sign up"
                    )}
                  </button>

                  <p className="text-center text-gray-600 dark:text-gray-300">
                    Already have an account?{" "}
                    <Link
                      to="/signin"
                      className="text-primary hover:text-primary-dark font-medium"
                    >
                      Sign in
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
