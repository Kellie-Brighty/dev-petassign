import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import ThemeToggle from "../../components/ThemeToggle";

export default function CreateMatingDescription() {
  const navigate = useNavigate();
  const location = useLocation();

  // Get form data from previous steps
  const formData = location.state?.formData || {};

  const [description, setDescription] = useState<string>(
    formData.description || ""
  );
  const [matingConditions, setMatingConditions] = useState<string>(
    formData.matingConditions || ""
  );
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

  const handleContinue = () => {
    // Navigate to next form step with all form data
    const updatedFormData = {
      ...formData,
      description,
      matingConditions,
    };
    navigate("/create-mating/location", {
      state: { formData: updatedFormData },
    });
  };

  const isFormValid = () => {
    return description.trim().length > 0;
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
            Description & Conditions
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
        <div className="bg-white dark:bg-[#101935] rounded-lg p-4 mb-6">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
          >
            Pet Description *
          </label>
          <textarea
            id="description"
            rows={5}
            placeholder="Describe your pet's notable features, temperament, and any special traits that would be valuable for mating purposes."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-3 border border-gray-300 dark:border-[#1A2542] rounded-lg focus:ring-primary focus:border-primary bg-transparent text-gray-900 dark:text-gray-100 resize-none"
          />
          <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
            {description.length}/500 characters (Minimum 10)
          </p>
        </div>

        <div className="bg-white dark:bg-[#101935] rounded-lg p-4 mb-6">
          <label
            htmlFor="matingConditions"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
          >
            Mating Conditions
          </label>
          <textarea
            id="matingConditions"
            rows={4}
            placeholder="Specify any requirements or conditions for mating (e.g., health records, specific breed qualities, location preferences)."
            value={matingConditions}
            onChange={(e) => setMatingConditions(e.target.value)}
            className="w-full p-3 border border-gray-300 dark:border-[#1A2542] rounded-lg focus:ring-primary focus:border-primary bg-transparent text-gray-900 dark:text-gray-100 resize-none"
          />
          <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
            {matingConditions.length}/300 characters (Optional)
          </p>
        </div>

        {/* Description Tips */}
        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
          <h3 className="text-sm font-medium text-blue-800 dark:text-blue-300 mb-2">
            Writing Tips
          </h3>
          <ul className="text-xs text-blue-700 dark:text-blue-400 space-y-2 list-disc pl-4">
            <li>
              Be specific about your pet's breed purity and any certifications
              or awards
            </li>
            <li>
              Mention previous successful matings and offspring quality if
              applicable
            </li>
            <li>
              Include health information, such as genetic testing or veterinary
              records
            </li>
            <li>Clearly state if you're seeking specific traits in a mate</li>
            <li>
              Specify if you're open to negotiations regarding mating fees or
              arrangements
            </li>
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
