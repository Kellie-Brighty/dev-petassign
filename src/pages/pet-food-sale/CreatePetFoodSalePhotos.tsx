import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import ThemeToggle from "../../components/ThemeToggle";

// Photo placeholder icon component
const PhotoPlaceholderIcon = () => (
  <svg
    className="w-8 h-8 text-gray-400"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14"
    />
    <circle cx="8" cy="9" r="2" />
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
  </svg>
);

export default function CreatePetFoodSalePhotos() {
  const navigate = useNavigate();
  const location = useLocation();
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Get form data from previous step
  const formData = location.state?.formData || {};

  const [productPhoto, setProductPhoto] = useState<string | null>(null);
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

  const handlePhotoClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProductPhoto(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleContinue = () => {
    // Navigate to next form step with all form data
    const updatedFormData = {
      ...formData,
      productPhoto,
    };
    navigate("/create-pet-food-sale/description", {
      state: { formData: updatedFormData },
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-[#0A1121] flex flex-col w-screen">
      {/* Header */}
      <header className="px-4 py-3 flex items-center justify-between sticky top-0 z-50 bg-white dark:bg-[#101935] border-b dark:border-[#1A2542] shadow-sm">
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
            Product Photos
          </h1>
        </div>
        <div className="flex items-center">
          <button
            className="text-primary font-medium text-sm mr-4"
            onClick={() => navigate("/create-post")}
          >
            Save
          </button>
          <ThemeToggle />
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto px-4 py-6">
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Upload clear photos of your product to attract potential buyers. Show
          packaging and contents if possible.
        </p>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Product Photo
          </label>
          <div
            onClick={handlePhotoClick}
            className="relative h-56 w-full border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg flex flex-col items-center justify-center cursor-pointer bg-gray-50 dark:bg-[#1A2542] hover:bg-gray-100 dark:hover:bg-[#223057] transition-colors"
          >
            {productPhoto ? (
              <img
                src={productPhoto}
                alt="Product preview"
                className="h-full w-full object-contain rounded-lg"
              />
            ) : (
              <>
                <PhotoPlaceholderIcon />
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  Click to upload a product photo
                </p>
              </>
            )}
            <input
              type="file"
              ref={fileInputRef}
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
            />
          </div>
        </div>
      </div>

      {/* Continue Button */}
      <div className="p-4 bg-white dark:bg-[#101935] border-t dark:border-[#1A2542] shadow-md">
        <button
          onClick={handleContinue}
          disabled={!productPhoto}
          className={`w-full py-3.5 rounded-lg font-medium transition-colors ${
            productPhoto
              ? "bg-primary text-white hover:bg-primary-dark"
              : "bg-gray-200 dark:bg-[#1A2542] text-gray-400 dark:text-gray-500 cursor-not-allowed"
          }`}
        >
          Continue
        </button>
      </div>
    </div>
  );
}
