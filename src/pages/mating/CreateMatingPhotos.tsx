import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import ThemeToggle from "../../components/ThemeToggle";

export default function CreateMatingPhotos() {
  const navigate = useNavigate();
  const location = useLocation();

  // Get form data from previous steps
  const formData = location.state?.formData || {};

  const [petPhotos, setPetPhotos] = useState<string[]>(
    formData.petPhotos || []
  );
  const [tempPhotoUrl, setTempPhotoUrl] = useState<string | null>(null);
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

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      const reader = new FileReader();
      reader.onload = () => {
        setTempPhotoUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddPhoto = () => {
    if (tempPhotoUrl) {
      setPetPhotos([...petPhotos, tempPhotoUrl]);
      setTempPhotoUrl(null);
    }
  };

  const handleRemovePhoto = (index: number) => {
    const updatedPhotos = [...petPhotos];
    updatedPhotos.splice(index, 1);
    setPetPhotos(updatedPhotos);
  };

  const handleContinue = () => {
    // Navigate to next form step with all form data
    const updatedFormData = {
      ...formData,
      petPhotos,
    };
    navigate("/create-mating/description", {
      state: { formData: updatedFormData },
    });
  };

  const isFormValid = () => {
    return petPhotos.length > 0;
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
            Pet Photos
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
          Upload clear, high-quality photos of your pet. Including multiple
          angles helps potential mates see your pet clearly.
        </p>

        {/* Photo Upload */}
        <div className="bg-white dark:bg-[#101935] rounded-lg p-4 mb-6">
          <label
            htmlFor="photo-upload"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
          >
            Upload Photo
          </label>
          <input
            type="file"
            id="photo-upload"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
          />

          {/* Preview of selected photo */}
          {tempPhotoUrl ? (
            <div className="mb-4">
              <div className="relative h-48 rounded-lg overflow-hidden bg-gray-100 dark:bg-[#1A2542]">
                <img
                  src={tempPhotoUrl}
                  alt="Pet preview"
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setTempPhotoUrl(null)}
                  className="absolute top-2 right-2 bg-white dark:bg-[#101935] rounded-full p-1 shadow-md"
                >
                  <svg
                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <button
                onClick={handleAddPhoto}
                className="w-full py-2 bg-primary text-white rounded-lg mt-2"
              >
                Add Photo
              </button>
            </div>
          ) : (
            <label
              htmlFor="photo-upload"
              className="block h-48 border-2 border-dashed border-gray-300 dark:border-[#1A2542] rounded-lg flex flex-col items-center justify-center cursor-pointer hover:border-primary dark:hover:border-primary transition-colors"
            >
              <svg
                className="w-12 h-12 text-gray-400 dark:text-gray-500 mb-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                />
              </svg>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Click to upload photo
              </span>
              <span className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                JPG, PNG, WEBP up to 5MB
              </span>
            </label>
          )}
        </div>

        {/* Uploaded Photos */}
        <div>
          <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
            Uploaded Photos ({petPhotos.length})
          </h3>
          {petPhotos.length > 0 ? (
            <div className="grid grid-cols-2 gap-3">
              {petPhotos.map((photo, index) => (
                <div
                  key={index}
                  className="relative h-40 rounded-lg overflow-hidden bg-gray-100 dark:bg-[#1A2542]"
                >
                  <img
                    src={photo}
                    alt={`Pet photo ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <button
                    onClick={() => handleRemovePhoto(index)}
                    className="absolute top-2 right-2 bg-white dark:bg-[#101935] rounded-full p-1 shadow-md"
                  >
                    <svg
                      className="w-5 h-5 text-gray-500 dark:text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 text-gray-500 dark:text-gray-400 text-sm">
              No photos uploaded yet
            </div>
          )}
        </div>

        {/* Photo Tips */}
        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-6">
          <h3 className="text-sm font-medium text-blue-800 dark:text-blue-300 mb-2">
            Photo Tips
          </h3>
          <ul className="text-xs text-blue-700 dark:text-blue-400 space-y-1 list-disc pl-4">
            <li>Use natural lighting for the best results</li>
            <li>
              Include full-body shots that clearly show your pet's features
            </li>
            <li>
              Add photos that highlight unique markings or characteristics
            </li>
            <li>Make sure your pet is the main focus of each image</li>
          </ul>
        </div>
      </div>

      {/* Continue Button */}
      <div className="p-4 bg-white dark:bg-[#101935] border-t dark:border-[#1A2542] shadow-md">
        <button
          onClick={handleContinue}
          disabled={!isFormValid()}
          className={`w-full py-3.5 rounded-lg font-medium transition-colors ${
            isFormValid()
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
