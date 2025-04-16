import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import ThemeToggle from "../../components/ThemeToggle";

const MAX_PHOTOS = 5;

export default function CreatePetAdoptionPhotos() {
  const navigate = useNavigate();
  const location = useLocation();

  // Get form data from previous step
  const formData = location.state?.formData || {
    petName: "",
    petType: "",
    age: "",
    gender: "",
    breed: "",
  };

  // Photos state
  const [photos, setPhotos] = useState<string[]>(formData.petPhotos || []);
  const [dragging, setDragging] = useState(false);
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

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = () => {
    setDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragging(false);

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFiles(e.dataTransfer.files);
    }
  };

  const handleFiles = (files: FileList) => {
    if (photos.length >= MAX_PHOTOS) {
      alert(`You can only upload up to ${MAX_PHOTOS} photos.`);
      return;
    }

    // Convert FileList to Array
    const fileArray = Array.from(files);
    const remainingSlots = MAX_PHOTOS - photos.length;
    const filesToProcess = fileArray.slice(0, remainingSlots);

    // Process files
    filesToProcess.forEach((file) => {
      if (!file.type.match("image.*")) {
        return;
      }

      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target?.result) {
          setPhotos((prevPhotos) => [
            ...prevPhotos,
            e.target?.result as string,
          ]);
        }
      };
      reader.readAsDataURL(file);
    });
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      handleFiles(e.target.files);
    }
  };

  const removePhoto = (index: number) => {
    setPhotos((prevPhotos) => prevPhotos.filter((_, i) => i !== index));
  };

  const handleContinue = () => {
    // Update form data with photos
    const updatedFormData = {
      ...formData,
      petPhotos: photos,
    };

    // Navigate to next step
    navigate("/create-pet-adoption/description", {
      state: { formData: updatedFormData },
    });
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-[#0A1121] flex flex-col w-screen">
      {/* Header */}
      <header className="px-4 py-3 flex items-center justify-between sticky top-0 z-50 bg-white dark:bg-[#101935] border-b dark:border-[#1A2542] shadow-sm">
        <div className="flex items-center">
          <button onClick={handleBack} className="p-1 mr-2">
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
            Add Photos
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

      {/* Main content */}
      <div className="flex-1 overflow-y-auto px-4 py-6">
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Add clear, high-quality photos of your pet from different angles. Good
          photos significantly increase adoption chances.
        </p>

        {/* Photo upload area */}
        <div
          className={`border-2 border-dashed rounded-lg p-8 text-center mb-6 transition-colors ${
            dragging
              ? "border-primary bg-primary/5"
              : "border-gray-300 dark:border-gray-600"
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <svg
            className="w-12 h-12 mx-auto text-gray-400 dark:text-gray-500 mb-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
          <p className="text-gray-600 dark:text-gray-300 mb-2">
            Drag and drop photos here, or{" "}
            <label className="text-primary cursor-pointer">
              browse
              <input
                type="file"
                accept="image/*"
                className="hidden"
                multiple
                onChange={handleFileInputChange}
              />
            </label>
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Add up to {MAX_PHOTOS} photos • Max 5MB each
          </p>
        </div>

        {/* Uploaded photos */}
        {photos.length > 0 && (
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Uploaded Photos ({photos.length}/{MAX_PHOTOS})
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {photos.map((photo, index) => (
                <div
                  key={index}
                  className="relative bg-white dark:bg-[#101935] rounded-lg overflow-hidden shadow border border-gray-100 dark:border-[#1A2542] group"
                >
                  <img
                    src={photo}
                    alt={`Pet photo ${index + 1}`}
                    className="w-full aspect-square object-cover"
                  />
                  <button
                    className="absolute top-2 right-2 bg-white dark:bg-[#1A2542] rounded-full p-1 shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
                    onClick={() => removePhoto(index)}
                  >
                    <svg
                      className="w-4 h-4 text-red-500"
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
                  {index === 0 && (
                    <span className="absolute bottom-2 left-2 bg-primary/80 text-white text-xs px-2 py-0.5 rounded">
                      Main Photo
                    </span>
                  )}
                </div>
              ))}

              {/* Add more photo button */}
              {photos.length < MAX_PHOTOS && (
                <label className="flex items-center justify-center bg-gray-100 dark:bg-[#1A2542] rounded-lg border border-gray-200 dark:border-[#1A2542] aspect-square cursor-pointer hover:bg-gray-200 dark:hover:bg-[#101935] transition-colors">
                  <div className="text-center">
                    <svg
                      className="w-6 h-6 mx-auto text-gray-400 dark:text-gray-500 mb-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      Add More
                    </span>
                  </div>
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    multiple
                    onChange={handleFileInputChange}
                  />
                </label>
              )}
            </div>
          </div>
        )}

        {/* Photo tips */}
        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-6">
          <h3 className="text-sm font-medium text-blue-800 dark:text-blue-300 mb-2">
            Photo Tips
          </h3>
          <ul className="text-xs text-blue-700 dark:text-blue-400 space-y-1 list-disc pl-4">
            <li>Use natural lighting for clearer photos</li>
            <li>Include full body shots and close-ups</li>
            <li>Show your pet's personality and unique features</li>
            <li>Avoid blurry or dark images</li>
            <li>Clean backgrounds help focus on your pet</li>
          </ul>
        </div>
      </div>

      {/* Continue Button */}
      <div className="p-4 bg-white dark:bg-[#101935] border-t dark:border-[#1A2542] shadow-md">
        <button
          onClick={handleContinue}
          className="w-full py-3.5 rounded-lg font-medium bg-primary text-white hover:bg-primary-dark transition-colors"
        >
          Continue
        </button>
      </div>
    </div>
  );
}
