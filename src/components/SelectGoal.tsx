import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import onboardingImage from "../assets/onboarding-one.svg";
import ThemeToggle from "./ThemeToggle";

const goals = [
  "I want to buy pets",
  "I want to buy pet feeds",
  "I am looking for Mating Partners",
  "Connecting with Other Pet Owners",
];

export default function SelectGoal() {
  const navigate = useNavigate();
  const [selectedGoals, setSelectedGoals] = useState<string[]>([]);
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

  const toggleGoal = (goal: string) => {
    setSelectedGoals((prev) =>
      prev.includes(goal) ? prev.filter((g) => g !== goal) : [...prev, goal]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedGoals.length > 0) {
      navigate("/pet-ownership");
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#0A1121] w-screen overflow-x-hidden">
      {/* Mobile Header - Only visible on mobile */}
      <div className="lg:hidden">
        <div className="px-4 py-4 flex items-center justify-between">
          <Link
            to="/complete-profile"
            className="text-gray-900 dark:text-white"
          >
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
              alt="Goal selection illustration"
              className="w-full h-auto"
            />
            <div className="mt-8 text-center">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                Choose Your Goals
              </h2>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                Tell us what brings you to Pet World so we can tailor your
                experience
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
                  What's your goal?
                </h1>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Select your main reasons for using Pet World to tailor your
                  experience
                </p>
              </div>

              <form onSubmit={handleSubmit} className="flex-1 flex flex-col">
                <div className="space-y-3 flex-1">
                  {goals.map((goal) => (
                    <button
                      key={goal}
                      type="button"
                      onClick={() => toggleGoal(goal)}
                      className={`w-full text-left px-4 py-3 rounded-lg border flex items-center ${
                        selectedGoals.includes(goal)
                          ? "border-primary bg-primary/5 dark:bg-primary/10 dark:border-primary/40"
                          : "border-gray-200 dark:border-[#1A2542] bg-white dark:bg-[#101935] hover:bg-gray-50 dark:hover:bg-[#1A2542]/50"
                      } transition-colors duration-200 dark:text-white`}
                    >
                      <div
                        className={`w-5 h-5 rounded border mr-3 flex items-center justify-center ${
                          selectedGoals.includes(goal)
                            ? "border-primary bg-primary"
                            : "border-gray-300 dark:border-gray-600"
                        }`}
                      >
                        {selectedGoals.includes(goal) && (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-3 w-3 text-white"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        )}
                      </div>
                      {goal}
                    </button>
                  ))}
                </div>

                <div className="mt-auto pb-[calc(1rem+env(safe-area-inset-bottom))] pt-4 w-full lg:pb-4">
                  <button
                    type="submit"
                    disabled={selectedGoals.length === 0}
                    className={`w-full py-3 px-4 rounded-lg transition-colors duration-200 ${
                      selectedGoals.length > 0
                        ? "bg-primary text-white hover:bg-primary-dark"
                        : "bg-gray-100 dark:bg-[#1A2542] text-gray-400 dark:text-gray-500 cursor-not-allowed"
                    }`}
                  >
                    Continue{" "}
                    {selectedGoals.length > 0 &&
                      `(${selectedGoals.length} selected)`}
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
