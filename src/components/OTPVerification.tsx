import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import welcomeImage from "../assets/welcome.svg";

export default function OTPVerification() {
  const [otp, setOtp] = useState("");
  const phoneNumber = "+234 81 37496017"; // This would come from the previous step
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle OTP verification logic here
    navigate("/complete-profile");
  };

  const handleResendOTP = () => {
    // Handle resend OTP logic here
  };

  const handleEditNumber = () => {
    // Handle edit number logic here
  };

  // const handleVerify = () => {
  //   // Add your OTP verification logic here
  //   // If verification is successful:
  // };

  return (
    <div className="min-h-screen bg-white w-screen overflow-x-hidden">
      {/* Mobile Header - Only visible on mobile */}
      <div className="lg:hidden">
        <div className="px-4 py-4 flex items-center">
          <Link to="/" className="text-gray-900">
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
        </div>
      </div>

      <div className="flex min-h-[calc(100vh-64px)]">
        {/* Left Section - Image (Hidden on mobile) */}
        <div className="hidden lg:flex lg:w-1/2 bg-primary/5 items-center justify-center p-8">
          <div className="max-w-md">
            <img
              src={welcomeImage}
              alt="Welcome illustration"
              className="w-full h-auto"
            />
            <div className="mt-8 text-center">
              <h2 className="text-3xl font-bold text-gray-900">
                Verify Your Account
              </h2>
              <p className="mt-4 text-gray-600">
                We're excited to have you join our pet-loving community. Please
                verify your account to continue.
              </p>
            </div>
          </div>
        </div>

        {/* Right Section - Form */}
        <div className="w-full lg:w-1/2 flex flex-col px-4 lg:px-12 h-[calc(100vh-64px)] lg:h-auto">
          <div className="flex-1 flex flex-col lg:justify-center">
            <div className="w-full max-w-md mx-auto flex flex-col h-full lg:h-auto">
              <div className="mb-8">
                <div className="flex items-center justify-between">
                  <h1 className="text-2xl font-semibold text-gray-900">
                    Enter OTP
                  </h1>
                  <button
                    onClick={handleEditNumber}
                    className="text-primary hover:text-primary-dark text-sm font-medium bg-transparent"
                  >
                    Edit number
                  </button>
                </div>
                <p className="mt-2 text-gray-600">
                  Enter the 6-digit pin we sent to your number
                </p>
                <p className="mt-1 text-gray-900 font-medium">{phoneNumber}</p>
              </div>

              <form onSubmit={handleSubmit} className="flex-1 flex flex-col">
                <div className="space-y-6 flex-1">
                  <div>
                    <label
                      htmlFor="otp"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Enter OTP
                    </label>
                    <input
                      type="text"
                      id="otp"
                      name="otp"
                      maxLength={6}
                      value={otp}
                      onChange={(e) => {
                        const value = e.target.value.replace(/[^0-9]/g, "");
                        if (value.length <= 6) setOtp(value);
                      }}
                      className="mt-1 block w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-primary focus:border-primary text-lg tracking-wider font-medium"
                      placeholder="643523"
                    />
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <p className="text-gray-600">Didn't receive the code?</p>
                    <button
                      type="button"
                      onClick={handleResendOTP}
                      className="text-primary hover:text-primary-dark font-medium bg-transparent"
                    >
                      Resend OTP
                    </button>
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
