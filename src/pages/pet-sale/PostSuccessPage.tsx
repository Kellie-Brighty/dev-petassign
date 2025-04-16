import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import success from "../../assets/success.svg"; // Using success SVG since there's no dedicated post-live SVG

interface LocationState {
  petName?: string;
  petType?: string;
  redirectTo?: string;
}

export default function PostSuccessPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [_countdown, setCountdown] = useState(5);

  // Get data passed from ReviewPetSale
  const state = location.state as LocationState;
  // const petName = state?.petName || "Your pet";
  // const petType = state?.petType || "pet";
  const redirectTo = state?.redirectTo || "/marketplace";

  // Auto-redirect after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      handleContinue();
    }, 5000);

    const countdownInterval = setInterval(() => {
      setCountdown((prev) => Math.max(0, prev - 1));
    }, 1000);

    return () => {
      clearTimeout(timer);
      clearInterval(countdownInterval);
    };
  }, []);

  const handleContinue = () => {
    navigate(redirectTo);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#0A1121] flex flex-col items-center justify-center px-4">
      <div className="max-w-md w-full flex flex-col items-center">
        {/* Success Image */}
        <div className="w-48 h-48 mb-6">
          <img src={success} alt="Post Published" className="w-full h-full" />
        </div>

        {/* Success Message */}
        <h1 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          Your Post is Live!
        </h1>

        <p className="text-gray-600 dark:text-gray-300 text-center mb-10">
          Congratulations! Your post has been successfully published. Interested
          users can now see your listing. Be ready to respond to inquiries and
          find the perfect match for your pet or product.
        </p>

        {/* Action Button */}
        <button
          onClick={handleContinue}
          className="w-full py-3.5 bg-primary text-white rounded-lg font-medium hover:bg-primary-dark transition-colors"
        >
          Continue
        </button>
      </div>

      {/* Bottom Navigation Indicator */}
      <div className="h-1 w-32 bg-gray-300 dark:bg-gray-700 mx-auto mt-auto mb-6 rounded-full"></div>
    </div>
  );
}
