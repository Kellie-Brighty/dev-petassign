import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import onboardingImage from "../assets/onboarding-two.svg";
import ThemeToggle from "./ThemeToggle";

export default function UploadPhoto() {
  const navigate = useNavigate();
  const [_photo, setPhoto] = useState<File | null>(null);
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [_isDarkMode, setIsDarkMode] = useState<boolean>(
    document.documentElement.classList.contains("dark")
  );

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

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setPhoto(file);

      // Create a preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleClickUpload = () => {
    fileInputRef.current?.click();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Even if no photo is selected, we can continue
    navigate("/welcome");
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#0A1121] w-screen overflow-x-hidden">
      {/* Mobile Header - Only visible on mobile */}
      <div className="lg:hidden">
        <div className="px-4 py-4 flex items-center justify-between">
          <Link to="/languages" className="text-gray-900 dark:text-white">
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
          <ThemeToggle />
        </div>
      </div>

      <div className="flex min-h-[calc(100vh-64px)]">
        {/* Left Section - Image (Hidden on mobile) */}
        <div className="hidden lg:flex lg:w-1/2 bg-primary/5 dark:bg-[#101935]/50 items-center justify-center p-8 relative">
          {/* Theme toggle for desktop */}
          <div className="absolute top-4 right-4">
            <ThemeToggle />
          </div>

          <div className="max-w-md">
            <img
              src={onboardingImage}
              alt="Upload photo illustration"
              className="w-full h-auto"
            />
            <div className="mt-8 text-center">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                Upload your Photo
              </h2>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                Add a personal touch to your profile
              </p>
            </div>
          </div>
        </div>

        {/* Right Section - Form */}
        <div className="w-full lg:w-1/2 flex flex-col px-4 lg:px-12 h-[calc(100vh-64px)] lg:h-auto">
          <div className="flex-1 flex flex-col lg:justify-center">
            <div className="w-full max-w-md mx-auto flex flex-col h-full lg:h-auto">
              <div className="mb-8">
                <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  Upload your Photo
                </h1>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Add a personal touch to your profile by uploading or taking a
                  photo.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="flex-1 flex flex-col">
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Photo
                  </label>
                  <div
                    onClick={handleClickUpload}
                    className="border-2 border-dashed border-gray-300 dark:border-[#1A2542] rounded-lg bg-gray-50 dark:bg-[#101935] p-6 h-48 flex flex-col items-center justify-center cursor-pointer"
                  >
                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={handlePhotoChange}
                      accept="image/*"
                      className="hidden"
                    />

                    {photoPreview ? (
                      <img
                        src={photoPreview}
                        alt="Preview"
                        className="h-full object-contain"
                      />
                    ) : (
                      <>
                        <div className="w-12 h-12 border border-gray-300 dark:border-[#1A2542] rounded-lg flex items-center justify-center text-gray-400 dark:text-gray-500 mb-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1.5}
                              d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                            />
                          </svg>
                        </div>
                        <p className="text-sm text-gray-400 dark:text-gray-500">
                          Click to upload a photo
                        </p>
                      </>
                    )}
                  </div>
                </div>

                <div className="mt-auto pb-[calc(1rem+env(safe-area-inset-bottom))] pt-4 w-full lg:pb-4">
                  <button
                    type="submit"
                    className="w-full py-3 px-4 rounded-lg transition-colors duration-200 bg-primary text-white hover:bg-primary-dark"
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
