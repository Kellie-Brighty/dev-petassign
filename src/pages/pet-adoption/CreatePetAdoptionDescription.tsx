import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import ThemeToggle from "../../components/ThemeToggle";

export default function CreatePetAdoptionDescription() {
  const navigate = useNavigate();
  const location = useLocation();

  // Get form data from previous step
  const formData = location.state?.formData || {
    petName: "",
    petType: "",
    age: "",
    gender: "",
    breed: "",
    petPhotos: [],
  };

  // Description state
  const [description, setDescription] = useState(formData.description || "");
  const [reasonForAdoption, setReasonForAdoption] = useState(
    formData.reasonForAdoption || ""
  );
  const [specialRequirements, setSpecialRequirements] = useState(
    formData.specialRequirements || ""
  );
  const [health, setHealth] = useState(formData.health || "");
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
    // Update form data with description
    const updatedFormData = {
      ...formData,
      description,
      reasonForAdoption,
      specialRequirements,
      health,
    };

    // Navigate to next step
    navigate("/create-pet-adoption/location", {
      state: { formData: updatedFormData },
    });
  };

  const isFormValid = () => {
    return description.trim() !== "" && reasonForAdoption.trim() !== "";
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
            About Your Pet
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
          Help potential adopters understand your pet's personality, needs, and
          why they're looking for a new home.
        </p>

        <form className="space-y-5">
          {/* Pet Description */}
          <div>
            <label
              htmlFor="petDescription"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Pet Description*
            </label>
            <textarea
              id="petDescription"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full p-3 bg-gray-100 dark:bg-[#1A2542] rounded-lg border-0 focus:ring-2 focus:ring-primary dark:text-white min-h-[120px]"
              placeholder="Describe your pet's personality, behavior, and what makes them special"
            />
            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
              {description.length}/1000 characters
            </p>
          </div>

          {/* Reason for Adoption */}
          <div>
            <label
              htmlFor="reasonForAdoption"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Reason for Adoption*
            </label>
            <textarea
              id="reasonForAdoption"
              value={reasonForAdoption}
              onChange={(e) => setReasonForAdoption(e.target.value)}
              className="w-full p-3 bg-gray-100 dark:bg-[#1A2542] rounded-lg border-0 focus:ring-2 focus:ring-primary dark:text-white min-h-[100px]"
              placeholder="Explain why your pet needs a new home"
            />
            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
              {reasonForAdoption.length}/500 characters
            </p>
          </div>

          {/* Special Requirements */}
          <div>
            <label
              htmlFor="specialRequirements"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Special Requirements (Optional)
            </label>
            <textarea
              id="specialRequirements"
              value={specialRequirements}
              onChange={(e) => setSpecialRequirements(e.target.value)}
              className="w-full p-3 bg-gray-100 dark:bg-[#1A2542] rounded-lg border-0 focus:ring-2 focus:ring-primary dark:text-white min-h-[100px]"
              placeholder="Any specific requirements for the adoptive home (e.g., no small children, needs a yard, etc.)"
            />
            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
              {specialRequirements.length}/500 characters
            </p>
          </div>

          {/* Health Information */}
          <div>
            <label
              htmlFor="health"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Health Information (Optional)
            </label>
            <textarea
              id="health"
              value={health}
              onChange={(e) => setHealth(e.target.value)}
              className="w-full p-3 bg-gray-100 dark:bg-[#1A2542] rounded-lg border-0 focus:ring-2 focus:ring-primary dark:text-white min-h-[100px]"
              placeholder="Vaccinations, medical conditions, special diets, etc."
            />
            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
              {health.length}/500 characters
            </p>
          </div>

          {/* Description Tips */}
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-6">
            <h3 className="text-sm font-medium text-blue-800 dark:text-blue-300 mb-2">
              Description Tips
            </h3>
            <ul className="text-xs text-blue-700 dark:text-blue-400 space-y-1 list-disc pl-4">
              <li>Be honest about your pet's personality and behavior</li>
              <li>Mention if they're good with children, other pets, etc.</li>
              <li>Include training level and any commands they know</li>
              <li>Note any special needs or medical conditions</li>
              <li>Explain why you need to find them a new home</li>
            </ul>
          </div>
        </form>
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
