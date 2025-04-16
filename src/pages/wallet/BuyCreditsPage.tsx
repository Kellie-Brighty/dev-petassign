import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ThemeToggle from "../../components/ThemeToggle";

type CreditPack = {
  id: number;
  credits: number;
  price: number;
};

const creditPackages: CreditPack[] = [
  { id: 1, credits: 10, price: 4000 },
  { id: 2, credits: 30, price: 10000 },
  { id: 3, credits: 60, price: 24000 },
  { id: 4, credits: 100, price: 40000 },
];

export default function BuyCreditsPage() {
  const navigate = useNavigate();
  const [_isDarkMode, setIsDarkMode] = useState<boolean>(
    document.documentElement.classList.contains("dark")
  );
  const [userCredits, setUserCredits] = useState<number>(0);
  const [_selectedPackage, _setSelectedPackage] = useState<number | null>(null);

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

  // Simulate getting user credits from a global state/context
  useEffect(() => {
    // This would typically come from context or a state management solution
    const storedCredits = localStorage.getItem("userCredits");
    if (storedCredits) {
      setUserCredits(parseInt(storedCredits));
    }
  }, []);

  //   const handlePackageSelection = (packageId: number) => {
  //     setSelectedPackage(packageId);
  //   };

  const handlePurchase = (credits: number) => {
    // This would typically be an API call to process payment
    console.log(`Processing purchase for ${credits} credits`);

    // Update user credits in local storage for demo purposes
    const newCreditBalance = userCredits + credits;
    setUserCredits(newCreditBalance);
    localStorage.setItem("userCredits", newCreditBalance.toString());

    // Get redirect information from location state or query params if available
    const urlParams = new URLSearchParams(window.location.search);
    const redirectParam = urlParams.get("redirect");
    const redirectTo = redirectParam || "/home";

    // Determine if this is part of a post flow based on the redirect path
    const fromPostFlow =
      redirectTo.includes("review") ||
      redirectTo.includes("create-") ||
      redirectTo.includes("-sale") ||
      redirectTo.includes("mating") ||
      redirectTo.includes("adoption");

    // Navigate to the success page with purchase information
    navigate("/wallet/purchase-success", {
      state: {
        purchasedCredits: credits,
        totalCredits: newCreditBalance,
        redirectTo,
        fromPostFlow,
      },
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-[#0A1121] flex flex-col">
      {/* Header */}
      <header className="px-4 py-3 flex items-center justify-between sticky top-0 z-10 bg-white dark:bg-[#101935] border-b dark:border-[#1A2542] shadow-sm">
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
            Purchase Credits to Post
          </h1>
        </div>
        <div className="flex items-center">
          <div className="mr-4 flex items-center text-sm">
            <span className="text-primary font-medium">{userCredits}</span>
            <span className="text-gray-500 dark:text-gray-400 ml-1">
              Credits
            </span>
          </div>
          <ThemeToggle />
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 px-4 py-5">
        <div className="max-w-md mx-auto">
          <p className="text-gray-600 dark:text-gray-300 mb-5">
            Pick a package and start posting! Each post takes one credit
          </p>

          <h2 className="text-gray-800 dark:text-white font-medium mb-3">
            Price list
          </h2>

          <div className="space-y-4">
            {creditPackages.map((pack) => (
              <div
                key={pack.id}
                className="bg-white dark:bg-[#101935] rounded-lg shadow-sm border border-gray-200 dark:border-[#1A2542] p-4 flex items-center justify-between"
              >
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-primary bg-opacity-20 flex items-center justify-center mr-3">
                    <svg
                      className="w-6 h-6 text-primary"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 100-16 8 8 0 000 16zm-3.5-4.13a.5.5 0 01-.4-.8l2.5-3.25a.5.5 0 01.8 0l2 2.6 1.9-2.48a.5.5 0 01.8 0l2.5 3.25a.5.5 0 01-.4.8h-9.7z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">
                      {pack.credits} Credits
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                      Price ₦{pack.price.toLocaleString()}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => handlePurchase(pack.credits)}
                  className="bg-primary rounded-md px-5 py-2 text-white font-medium hover:bg-primary-dark transition-colors"
                >
                  Buy
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Navigation Indicator */}
      <div className="h-1 w-32 bg-gray-300 dark:bg-gray-700 mx-auto mt-auto mb-6 rounded-full"></div>
    </div>
  );
}
