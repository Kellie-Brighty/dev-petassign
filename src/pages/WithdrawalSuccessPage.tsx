import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ThemeToggle from "../components/ThemeToggle";
import BottomNavigation from "../components/dashboard/BottomNavigation";

export default function WithdrawalSuccessPage() {
  const navigate = useNavigate();
  const [_isDarkMode, setIsDarkMode] = useState<boolean>(
    document.documentElement.classList.contains("dark")
  );
  const [activeTab, setActiveTab] = useState("account");

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

  // Mock withdrawal details
  const withdrawalAmount = 2500.75;
  const withdrawalDate = "May 12, 2023";
  const bankName = "Koota Bank";
  const accountNumber = "2048******43";
  const transactionId = "TRX-2346781";

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-[#0A1121] flex flex-col w-screen">
      {/* Header */}
      <header className="px-4 py-3 flex items-center justify-between sticky top-0 z-50 bg-white dark:bg-[#101935] border-b dark:border-[#1A2542] shadow-sm">
        <div className="flex items-center">
          <button onClick={() => navigate("/wallet")} className="p-1 mr-2">
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
            Withdrawal Success
          </h1>
        </div>
        <div className="flex items-center">
          <ThemeToggle />
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto pb-32 lg:pb-8">
        <div className="p-4 flex flex-col items-center justify-center">
          {/* Success Icon */}
          <div className="w-20 h-20 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mb-6 mt-12">
            <svg
              className="w-10 h-10 text-green-600 dark:text-green-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>

          {/* Success Message */}
          <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
            Withdrawal Successful
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8 text-center">
            Your funds are on their way to your account
          </p>

          {/* Amount */}
          <div className="mb-8 text-center">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
              Amount
            </p>
            <p className="text-3xl font-bold text-gray-900 dark:text-white">
              ${withdrawalAmount.toFixed(2)}
            </p>
          </div>

          {/* Details Card */}
          <div className="w-full bg-white dark:bg-[#101935] rounded-xl shadow-sm p-5 mb-8">
            <h3 className="text-sm font-medium text-gray-800 dark:text-gray-200 mb-4">
              Transaction Details
            </h3>

            <div className="space-y-4">
              {/* Date */}
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Date
                </span>
                <span className="text-sm text-gray-800 dark:text-white">
                  {withdrawalDate}
                </span>
              </div>

              {/* Bank */}
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Bank
                </span>
                <span className="text-sm text-gray-800 dark:text-white">
                  {bankName}
                </span>
              </div>

              {/* Account Number */}
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Account
                </span>
                <span className="text-sm text-gray-800 dark:text-white">
                  {accountNumber}
                </span>
              </div>

              {/* Transaction ID */}
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Transaction ID
                </span>
                <span className="text-sm text-gray-800 dark:text-white">
                  {transactionId}
                </span>
              </div>
            </div>
          </div>

          {/* Return to Wallet Button */}
          <button
            onClick={() => navigate("/wallet")}
            className="w-full py-3.5 bg-primary text-white rounded-full font-medium hover:bg-primary-dark transition-colors lg:max-w-md"
          >
            Return to Wallet
          </button>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 w-full lg:hidden">
        <BottomNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
    </div>
  );
}
