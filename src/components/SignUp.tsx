import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import welcomeImage from "../assets/welcome.svg";

export default function SignUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    emailOrPhone: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle signup logic here
    navigate("/verify"); // Navigate to OTP verification after signup
  };

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
                Welcome to Pet Assign
              </h2>
              <p className="mt-4 text-gray-600">
                Join our community of pet lovers and find your perfect
                companion.
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
                  Sign up
                </h1>
                <p className="mt-2 text-gray-600">
                  Fill in your details below to become a member in just a few
                  easy steps.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="flex-1 flex flex-col">
                <div className="space-y-6 flex-1">
                  <div>
                    <label
                      htmlFor="emailOrPhone"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email or Phone number
                    </label>
                    <input
                      type="text"
                      id="emailOrPhone"
                      name="emailOrPhone"
                      value={formData.emailOrPhone}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          emailOrPhone: e.target.value,
                        })
                      }
                      className="mt-1 block w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-primary focus:border-primary"
                      placeholder="jennywilson@gmail.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Create Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={(e) =>
                        setFormData({ ...formData, password: e.target.value })
                      }
                      className="mt-1 block w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-primary focus:border-primary"
                      placeholder="••••••••"
                    />
                  </div>
                </div>

                <div className="mt-auto pb-[calc(1rem+env(safe-area-inset-bottom))] pt-4 space-y-4 w-full lg:pb-4">
                  <button
                    type="submit"
                    className="w-full bg-primary text-white py-3 px-4 rounded-lg hover:bg-primary-dark transition-colors duration-200"
                  >
                    Sign up
                  </button>

                  <p className="text-center text-gray-600">
                    Already have an account?{" "}
                    <Link
                      to="/signin"
                      className="text-primary hover:text-primary-dark font-medium"
                    >
                      Sign in
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
