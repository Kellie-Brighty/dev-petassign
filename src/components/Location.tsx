import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import onboardingImage from "../assets/onboarding-two.svg";

export default function Location() {
  const navigate = useNavigate();
  const [location, setLocation] = useState({
    country: "Nigeria",
    cityRegion: "Oyo State",
    street: "Road 3",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLocation((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (location.country && location.cityRegion && location.street) {
      navigate("/languages");
    }
  };

  return (
    <div className="min-h-screen bg-white w-screen overflow-x-hidden">
      {/* Mobile Header - Only visible on mobile */}
      <div className="lg:hidden">
        <div className="px-4 py-4 flex items-center">
          <Link to="/create-bio" className="text-gray-900">
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
              src={onboardingImage}
              alt="Location illustration"
              className="w-full h-auto"
            />
            <div className="mt-8 text-center">
              <h2 className="text-3xl font-bold text-gray-900">
                Enter your Location
              </h2>
              <p className="mt-4 text-gray-600">
                Help us connect you with nearby pet owners and services
              </p>
            </div>
          </div>
        </div>

        {/* Right Section - Form */}
        <div className="w-full lg:w-1/2 flex flex-col px-4 lg:px-12 h-[calc(100vh-64px)] lg:h-auto">
          <div className="flex-1 flex flex-col lg:justify-center">
            <div className="w-full max-w-md mx-auto flex flex-col h-full lg:h-auto">
              <div className="mb-8">
                <h1 className="text-2xl font-semibold text-gray-900">
                  Enter your Location
                </h1>
                <p className="mt-2 text-gray-600">
                  Provide your location to find nearby pet owners, products and
                  services
                </p>
              </div>

              <form onSubmit={handleSubmit} className="flex-1 flex flex-col">
                <div className="space-y-4 flex-1">
                  <div>
                    <label
                      htmlFor="country"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Country
                    </label>
                    <input
                      type="text"
                      id="country"
                      name="country"
                      value={location.country}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors duration-200 bg-gray-50"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="cityRegion"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      City/Region
                    </label>
                    <input
                      type="text"
                      id="cityRegion"
                      name="cityRegion"
                      value={location.cityRegion}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors duration-200 bg-gray-50"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="street"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Street
                    </label>
                    <input
                      type="text"
                      id="street"
                      name="street"
                      value={location.street}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors duration-200 bg-gray-50"
                    />
                  </div>
                </div>

                <div className="mt-auto pb-[calc(1rem+env(safe-area-inset-bottom))] pt-4 w-full lg:pb-4">
                  <button
                    type="submit"
                    disabled={
                      !location.country ||
                      !location.cityRegion ||
                      !location.street
                    }
                    className={`w-full py-3 px-4 rounded-lg transition-colors duration-200 ${
                      location.country && location.cityRegion && location.street
                        ? "bg-primary text-white hover:bg-primary-dark"
                        : "bg-gray-100 text-gray-400 cursor-not-allowed"
                    }`}
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
