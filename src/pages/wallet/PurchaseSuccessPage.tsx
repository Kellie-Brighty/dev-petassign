import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import PurchaseSuccessImage from "../../assets/purchase-successful.svg";

interface LocationState {
  purchasedCredits?: number;
  totalCredits?: number;
  redirectTo?: string;
  fromPostFlow?: boolean;
}

export default function PurchaseSuccessPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [_countdown, setCountdown] = useState(5);

  // Get data passed from BuyCreditsPage
  const state = location.state as LocationState;
  const purchasedCredits = state?.purchasedCredits || 0;
  const totalCredits = state?.totalCredits || 0;
  const redirectTo = state?.redirectTo || "/home";
  const fromPostFlow = state?.fromPostFlow || false;

  // Auto-redirect after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      handleProceed();
    }, 5000);

    const countdownInterval = setInterval(() => {
      setCountdown((prev) => Math.max(0, prev - 1));
    }, 1000);

    return () => {
      clearTimeout(timer);
      clearInterval(countdownInterval);
    };
  }, []);

  const handleProceed = () => {
    navigate(redirectTo);
  };

  const handleGoHome = () => {
    navigate("/home");
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#0A1121] flex flex-col items-center justify-center px-4">
      <div className="max-w-md w-full flex flex-col items-center">
        {/* Success Image */}
        <div className="w-48 h-48 mb-6">
          <img
            src={PurchaseSuccessImage}
            alt="Purchase Successful"
            className="w-full h-full"
          />
        </div>

        {/* Success Message */}
        <h1 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          Purchase Successful!
        </h1>

        <p className="text-gray-600 dark:text-gray-300 text-center mb-10">
          Your credits have been added to your account. You can now post and
          engage with the community!
        </p>

        {/* Credits Summary - optional */}
        {purchasedCredits > 0 && (
          <div className="bg-gray-50 dark:bg-[#152042] rounded-lg p-4 mb-6 w-full text-center">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              <span className="font-medium text-primary">
                +{purchasedCredits}
              </span>{" "}
              credits added
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Total balance: <span className="font-medium">{totalCredits}</span>{" "}
              credits
            </p>
          </div>
        )}

        {/* Action Buttons */}
        {fromPostFlow ? (
          <button
            onClick={handleProceed}
            className="w-full py-3.5 bg-primary text-white rounded-lg font-medium hover:bg-primary-dark transition-colors"
          >
            Proceed to Post
          </button>
        ) : (
          <div className="w-full space-y-3">
            <button
              onClick={handleGoHome}
              className="w-full py-3.5 bg-primary text-white rounded-lg font-medium hover:bg-primary-dark transition-colors"
            >
              Go to Home
            </button>
          </div>
        )}
      </div>

      {/* Bottom Navigation Indicator */}
      <div className="h-1 w-32 bg-gray-300 dark:bg-gray-700 mx-auto mt-auto mb-6 rounded-full"></div>
    </div>
  );
}
