import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ThemeToggle from "../components/ThemeToggle";

// Icons
const PetAdoptionIcon = () => (
  <svg
    className="w-8 h-8 text-primary"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 14a4 4 0 100-8 4 4 0 000 8z"
    />
  </svg>
);

const AnimalSalesIcon = () => (
  <svg
    className="w-8 h-8 text-primary"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10"
    />
  </svg>
);

const FoodSalesIcon = () => (
  <svg
    className="w-8 h-8 text-primary"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11 19C6.5 19 3 15.5 3 11S6.5 3 11 3s8 3.5 8 8-3.5 8-8 8z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.5 19.5L21 22"
    />
  </svg>
);

const MatingIcon = () => (
  <svg
    className="w-8 h-8 text-primary"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.5 12h15m-6.5-6.5v13"
    />
  </svg>
);

// Post types
const postTypes = [
  {
    id: "pet-adoption",
    name: "Pet Adoption",
    icon: <PetAdoptionIcon />,
    description: "Create a post to help find a forever home for a pet",
    badge: "Free",
  },
  {
    id: "pet-sales",
    name: "Pet Sales",
    icon: <AnimalSalesIcon />,
    description: "List pets for sale with details and pricing",
  },
  {
    id: "food-sales",
    name: "Sales of Pet Food",
    icon: <FoodSalesIcon />,
    description: "Sell pet food, treats, and other nutritional products",
  },
  {
    id: "mating",
    name: "Mating",
    icon: <MatingIcon />,
    description: "Connect pet owners for breeding opportunities",
  },
];

export default function CreatePostPage() {
  const navigate = useNavigate();
  const [selectedType, setSelectedType] = useState<string | null>(null);
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

  const handleTypeSelect = (typeId: string) => {
    setSelectedType(typeId);
  };

  const handleContinue = () => {
    if (selectedType) {
      if (selectedType === "pet-sales") {
        navigate("/create-pet-sale");
      } else if (selectedType === "food-sales") {
        navigate("/create-pet-food-sale");
      } else if (selectedType === "mating") {
        navigate("/create-mating");
      } else if (selectedType === "pet-adoption") {
        navigate("/create-pet-adoption");
      } else {
        navigate(`/create/${selectedType}`);
      }
    }
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
            What Would You Like to Post?
          </h1>
        </div>
        <div className="flex items-center">
          <ThemeToggle />
        </div>
      </header>

      {/* Mobile View - Main Content */}
      <div className="flex-1 overflow-y-auto lg:hidden">
        <div className="p-4 pt-6">
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">
            Choose if you are posting an adoption or a sale of pets or pet
            products.
          </p>

          <div className="space-y-4">
            {postTypes.map((type) => (
              <button
                key={type.id}
                className={`relative p-4 w-full rounded-lg border ${
                  selectedType === type.id
                    ? "bg-blue-50 border-blue-500 dark:bg-blue-900/20 dark:border-blue-400"
                    : "border-gray-200 dark:border-gray-700"
                } flex items-start mb-4 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors`}
                onClick={() => handleTypeSelect(type.id)}
              >
                <div className="flex-shrink-0 mr-3 text-blue-500 dark:text-blue-400">
                  {type.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center">
                    <h3 className="font-medium text-gray-900 dark:text-white">
                      {type.name}
                    </h3>
                    {type.badge && (
                      <span className="ml-2 px-2 py-0.5 bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 text-xs font-medium rounded-full">
                        {type.badge}
                      </span>
                    )}
                  </div>
                  <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                    {type.description}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Desktop View - Main Content */}
      <div className="hidden lg:flex flex-1 items-center justify-center p-8">
        <div className="w-full max-w-4xl bg-white dark:bg-[#101935] rounded-2xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-2">
            {/* Left Side - Illustration */}
            <div className="bg-primary/10 dark:bg-primary/5 p-12 flex flex-col justify-center items-center">
              <div className="max-w-md">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  Create a New Post
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-8">
                  Share your pets, products, or services with the community.
                  Select the type of post you'd like to create to get started.
                </p>
                <div className="relative h-64 w-full rounded-xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="flex justify-center mb-4">
                        {selectedType &&
                          postTypes.find((t) => t.id === selectedType)?.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                        {selectedType
                          ? postTypes.find((t) => t.id === selectedType)?.name
                          : "Select a post type"}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mt-2 max-w-xs mx-auto">
                        {selectedType
                          ? postTypes.find((t) => t.id === selectedType)
                              ?.description
                          : "Choose from the options on the right"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Options */}
            <div className="p-12">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                What Would You Like to Post?
              </h3>
              <div className="space-y-4">
                {postTypes.map((type) => (
                  <button
                    key={type.id}
                    className={`relative p-4 w-full rounded-lg border ${
                      selectedType === type.id
                        ? "bg-blue-50 border-blue-500 dark:bg-blue-900/20 dark:border-blue-400"
                        : "border-gray-200 dark:border-gray-700"
                    } flex items-start mb-4 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors`}
                    onClick={() => handleTypeSelect(type.id)}
                  >
                    <div className="flex-shrink-0 mr-3 text-blue-500 dark:text-blue-400">
                      {type.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center">
                        <h3 className="font-medium text-gray-900 dark:text-white">
                          {type.name}
                        </h3>
                        {type.badge && (
                          <span className="ml-2 px-2 py-0.5 bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 text-xs font-medium rounded-full">
                            {type.badge}
                          </span>
                        )}
                      </div>
                      <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                        {type.description}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Continue Button - Fixed at bottom */}
      <div className="p-4 bg-white dark:bg-[#101935] border-t dark:border-[#1A2542] sticky bottom-0">
        <button
          onClick={handleContinue}
          disabled={!selectedType}
          className={`w-full py-3.5 rounded-full font-medium transition-colors ${
            selectedType
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
