import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import success from "../../assets/success.svg";

interface LocationState {
  petName?: string;
  petType?: string;
  redirectTo?: string;
}

export default function AdoptionPostSuccessPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [_countdown, setCountdown] = useState(5);

  // Get data passed from ReviewPetAdoption
  const state = location.state as LocationState;
  const petName = state?.petName || "Your pet";
  // const petType = state?.petType || "pet";
  const redirectTo = state?.redirectTo || "/adoptions";

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
          <img src={success} alt="Adoption Posted" className="w-full h-full" />
        </div>

        {/* Success Message */}
        <h1 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          Adoption Listing is Live!
        </h1>

        <p className="text-gray-600 dark:text-gray-300 text-center mb-4">
          Thank you for helping {petName} find a forever home! Your adoption
          listing has been successfully published.
        </p>

        <p className="text-gray-600 dark:text-gray-300 text-center mb-10">
          Your compassion makes a difference in an animal's life. Be ready to
          respond to inquiries from potential adopters who might be the perfect
          match for {petName}.
        </p>

        {/* Action Button */}
        <button
          onClick={handleContinue}
          className="w-full py-3.5 bg-primary text-white rounded-lg font-medium hover:bg-primary-dark transition-colors"
        >
          View Adoption Listings
        </button>
      </div>

      {/* Bottom Navigation Indicator */}
      <div className="h-1 w-32 bg-gray-300 dark:bg-gray-700 mx-auto mt-auto mb-6 rounded-full"></div>
    </div>
  );
}
