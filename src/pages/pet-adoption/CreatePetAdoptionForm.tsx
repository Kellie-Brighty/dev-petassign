import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import ThemeToggle from "../../components/ThemeToggle";

// Mock pet type options
const petTypeOptions = [
  "Dog",
  "Cat",
  "Bird",
  "Fish",
  "Rabbit",
  "Reptile",
  "Hamster",
  "Other",
];

export default function CreatePetAdoptionForm() {
  const navigate = useNavigate();
  const location = useLocation();

  // Get form data if coming back from a later step
  const formData = location.state?.formData || {};

  // Form state variables
  const [petName, setPetName] = useState(formData.petName || "");
  const [petType, setPetType] = useState(formData.petType || "");
  const [age, setAge] = useState(formData.age || "");
  const [gender, setGender] = useState(formData.gender || "");
  const [breed, setBreed] = useState(formData.breed || "");
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
    // Compile basic data
    const basicData = {
      petName,
      petType,
      age,
      gender,
      breed,
    };

    // Navigate to next form step with form data
    navigate("/create-pet-adoption/photos", {
      state: { formData: basicData },
    });
  };

  const isFormValid = () => {
    return (
      petName.trim() !== "" &&
      petType !== "" &&
      age.trim() !== "" &&
      gender !== "" &&
      breed.trim() !== ""
    );
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
            Adoption Details
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
          Enter your pet's details to help potential adopters find them.
          Accurate information increases your pet's chances of finding a loving
          home.
        </p>

        <form className="space-y-5">
          {/* Pet Name */}
          <div>
            <label
              htmlFor="petName"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Pet Name
            </label>
            <input
              type="text"
              id="petName"
              value={petName}
              onChange={(e) => setPetName(e.target.value)}
              className="w-full p-3 bg-gray-100 dark:bg-[#1A2542] rounded-lg border-0 focus:ring-2 focus:ring-primary dark:text-white"
              placeholder="Enter your pet's name"
            />
          </div>

          {/* Pet Type */}
          <div>
            <label
              htmlFor="petType"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Pet Type
            </label>
            <div className="relative">
              <select
                id="petType"
                value={petType}
                onChange={(e) => setPetType(e.target.value)}
                className="w-full p-3 bg-gray-100 dark:bg-[#1A2542] rounded-lg border-0 focus:ring-2 focus:ring-primary appearance-none dark:text-white"
              >
                <option value="" disabled>
                  Select pet type
                </option>
                {petTypeOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Breed */}
          <div>
            <label
              htmlFor="breed"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Breed
            </label>
            <input
              type="text"
              id="breed"
              value={breed}
              onChange={(e) => setBreed(e.target.value)}
              className="w-full p-3 bg-gray-100 dark:bg-[#1A2542] rounded-lg border-0 focus:ring-2 focus:ring-primary dark:text-white"
              placeholder="Enter your pet's breed"
            />
          </div>

          {/* Age */}
          <div>
            <label
              htmlFor="age"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Age
            </label>
            <input
              type="text"
              id="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="w-full p-3 bg-gray-100 dark:bg-[#1A2542] rounded-lg border-0 focus:ring-2 focus:ring-primary dark:text-white"
              placeholder="E.g., 2 years"
            />
          </div>

          {/* Gender */}
          <div>
            <label
              htmlFor="gender"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Gender
            </label>
            <div className="flex space-x-3">
              <button
                type="button"
                onClick={() => setGender("Male")}
                className={`flex-1 py-3 rounded-lg font-medium transition-colors ${
                  gender === "Male"
                    ? "bg-primary text-white"
                    : "bg-gray-100 dark:bg-[#1A2542] text-gray-700 dark:text-gray-300"
                }`}
              >
                Male
              </button>
              <button
                type="button"
                onClick={() => setGender("Female")}
                className={`flex-1 py-3 rounded-lg font-medium transition-colors ${
                  gender === "Female"
                    ? "bg-primary text-white"
                    : "bg-gray-100 dark:bg-[#1A2542] text-gray-700 dark:text-gray-300"
                }`}
              >
                Female
              </button>
            </div>
          </div>

          {/* Adoption Tips */}
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-6">
            <h3 className="text-sm font-medium text-blue-800 dark:text-blue-300 mb-2">
              Adoption Tips
            </h3>
            <ul className="text-xs text-blue-700 dark:text-blue-400 space-y-1 list-disc pl-4">
              <li>Use a friendly, appealing name for your pet</li>
              <li>Be accurate about your pet's age and breed</li>
              <li>Add specific details that make your pet unique</li>
              <li>Include information about your pet's personality</li>
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
