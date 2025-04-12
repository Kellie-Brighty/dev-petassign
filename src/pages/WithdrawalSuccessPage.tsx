import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SuccessImage from "../assets/success.svg";

export default function WithdrawalSuccessPage() {
  const navigate = useNavigate();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleComplete = () => {
    // Navigate back to wallet page
    navigate("/wallet");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col w-screen">
      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center p-4">
        <div className="max-w-lg w-full flex flex-col items-center">
          {/* Success Illustration */}
          <div className="w-64 h-64 mb-4">
            <img
              src={SuccessImage}
              alt="Success"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Success Message */}
          <h1 className="text-xl font-semibold text-gray-900 mb-2">
            Withdrawal Approved!
          </h1>
          <p className="text-center text-gray-600 mb-12 max-w-xs">
            Your request has been successfully processed. Your funds are on the
            way and should arrive in your account shortly.
          </p>

          {/* Complete Button */}
          <div className="w-full px-4 max-w-xs">
            <button
              onClick={handleComplete}
              className="w-full py-3.5 bg-primary text-white rounded-full font-medium hover:bg-primary-dark transition-colors shadow-md hover:shadow-lg"
            >
              Complete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
