import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import onboardingImage from "../assets/onboarding-two.svg";

export default function WelcomeScreen() {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(8);

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/home");
    }, 8000);

    const countdownInterval = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(countdownInterval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      clearTimeout(timer);
      clearInterval(countdownInterval);
    };
  }, [navigate]);

  const handleContinue = () => {
    navigate("/home");
  };

  return (
    <div className="min-h-screen bg-white w-screen overflow-x-hidden">
      <div className="flex min-h-screen">
        {/* Left Section - Image (Hidden on mobile) */}
        <div className="hidden lg:flex lg:w-1/2 bg-primary/5 items-center justify-center p-8">
          <div className="max-w-md">
            <img
              src={onboardingImage}
              alt="Welcome illustration"
              className="w-full h-auto"
            />
            <div className="mt-8 text-center">
              <h2 className="text-3xl font-bold text-gray-900">
                Welcome to Pet World!
              </h2>
              <p className="mt-4 text-gray-600">
                You're all set to explore our vibrant community
              </p>
            </div>
          </div>
        </div>

        {/* Right Section - Welcome Content */}
        <div className="w-full lg:w-1/2 flex flex-col px-4 lg:px-12 h-screen lg:h-auto">
          <div className="flex-1 flex flex-col items-center justify-center">
            <div className="w-full max-w-md mx-auto flex flex-col items-center">
              {/* Paw Icon - Only visible on mobile */}
              <div className="w-24 h-24 mb-8 lg:hidden">
                <svg
                  viewBox="0 0 512 512"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full"
                >
                  <path
                    d="M430.633 294.067C424.528 268.044 407.954 255.025 390.349 255.025C372.744 255.025 354.877 268.044 348.773 294.067C342.409 320.604 349.292 347.652 366.124 355.299C369.898 357.142 373.756 357.94 377.617 357.94C391.91 357.94 405.974 347.134 413.282 328.266C420.848 308.829 436.997 320.604 430.633 294.067Z"
                    fill="#0077B6"
                  />
                  <path
                    d="M320.979 247.375C336.273 229.77 337.847 206.845 324.318 195.37C310.789 183.894 288.123 189.785 272.83 207.39C257.536 225.002 255.948 247.927 269.477 259.402C274.405 263.515 280.813 265.874 287.82 265.874C298.281 265.874 309.342 259.413 320.979 247.375Z"
                    fill="#0077B6"
                  />
                  <path
                    d="M248.663 185.979C259.365 185.979 270.166 180.085 280.181 169.352C294.231 154.305 297.998 133.586 288.211 122.1C278.425 110.606 256.957 113.719 242.901 128.766C228.846 143.813 225.084 164.532 234.866 176.018C238.512 180.344 243.42 185.979 248.663 185.979Z"
                    fill="#0077B6"
                  />
                  <path
                    d="M204.805 189.534C191.293 180.606 170.033 187.432 156.855 205.136C143.683 222.835 142.518 245.248 154.192 257.151C158.03 261.126 163.545 263.348 169.749 263.348C180.025 263.348 192.114 257.929 201.515 247.498C214.688 229.793 218.316 198.461 204.805 189.534Z"
                    fill="#0077B6"
                  />
                  <path
                    d="M185.467 300.437C180.4 277.767 164.684 261.896 147.982 261.896C131.28 261.896 114.533 277.767 109.465 300.437C104.397 323.107 115.28 344.252 133.85 347.883C136.693 348.543 139.562 348.871 142.395 348.871C158.334 348.871 172.862 336.043 178.184 315.672C183.503 295.3 190.534 323.107 185.467 300.437Z"
                    fill="#0077B6"
                  />
                  <path
                    d="M373.191 370.089C364.405 366.911 355.18 365.193 345.979 365.193C330.082 365.193 314.201 369.799 301.145 378.334C290.334 371.538 277.766 367.984 264.509 367.984C251.28 367.984 238.769 371.538 227.957 378.314C214.917 369.799 199.036 365.193 183.14 365.193C173.956 365.193 164.731 366.929 155.945 370.089C113.47 386.097 93.864 433.249 120.258 470.415C139.58 497.473 171.656 511.92 205.56 511.92C225.669 511.92 245.771 505.764 262.126 494.278C278.482 505.764 298.583 511.92 318.692 511.92C352.597 511.92 384.673 497.473 403.994 470.415C430.388 433.249 410.782 386.097 373.191 370.089Z"
                    fill="#0077B6"
                  />
                </svg>
              </div>

              {/* Welcome Text - Mobile version */}
              <div className="lg:hidden">
                <h1 className="text-2xl font-bold text-gray-900 mb-2 text-center">
                  Welcome to Pet World!
                </h1>
                <p className="text-gray-600 text-center mb-12">
                  All done! Explore pets, feeds, and connect with our vibrant
                  community!
                </p>
              </div>

              {/* Welcome Content - Desktop version */}
              <div className="hidden lg:block mb-8 text-center">
                <h1 className="text-2xl font-bold text-gray-900 mb-2">
                  Success! Your profile is ready.
                </h1>
                <p className="text-gray-600">
                  You're all set to explore pets, connect with others, and enjoy
                  everything Pet World has to offer.
                </p>
              </div>

              {/* Countdown display - Both versions */}
              <div className="text-sm text-gray-500 mb-8">
                Redirecting in {countdown} seconds...
              </div>

              {/* Continue Button */}
              <div className="w-full">
                <button
                  onClick={handleContinue}
                  className="w-full py-3 px-4 rounded-lg transition-colors duration-200 bg-primary text-white hover:bg-primary-dark"
                >
                  Continue
                </button>
              </div>

              {/* Home indicator - Mobile Only */}
              <div className="w-full flex justify-center mt-8 lg:hidden">
                <div className="w-1/3 h-1 rounded-full bg-gray-300"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
