import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import ThemeToggle from "../../components/ThemeToggle";

export default function ReviewPetAdoption() {
  const navigate = useNavigate();
  const location = useLocation();

  // Get form data from previous steps
  const formData = location.state?.formData || {
    petName: "Sample Pet",
    petType: "Dog",
    gender: "Male",
    age: "1 year",
    breed: "Mixed",
    description: "",
    reasonForAdoption: "",
    specialRequirements: "",
    health: "",
    country: "Nigeria",
    city: "Lagos",
    phoneNumber: "",
    email: "",
    petPhotos: [],
  };

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

  const handleSubmit = () => {
    console.log("Form data to submit:", formData);

    // Navigate to success page
    navigate("/pet-adoption/post-success", {
      state: {
        petName: formData.petName,
        petType: formData.petType,
        redirectTo: "/adoptions",
      },
    });
  };

  const handleEdit = (step: string) => {
    switch (step) {
      case "basic":
        navigate("/create-pet-adoption", { state: { formData } });
        break;
      case "photos":
        navigate("/create-pet-adoption/photos", { state: { formData } });
        break;
      case "description":
        navigate("/create-pet-adoption/description", { state: { formData } });
        break;
      case "location":
        navigate("/create-pet-adoption/location", { state: { formData } });
        break;
      case "contact":
        navigate("/create-pet-adoption/contact", { state: { formData } });
        break;
      default:
        break;
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
            Review Adoption Information
          </h1>
        </div>
        <div className="flex items-center">
          <ThemeToggle />
        </div>
      </header>

      {/* Main Content - Mobile Layout */}
      <div className="flex-1 overflow-y-auto pb-36 lg:hidden">
        <div className="px-4 py-6">
          <div className="bg-white dark:bg-[#101935] rounded-lg overflow-hidden shadow border border-gray-200 dark:border-[#1A2542] mb-6">
            <div className="p-4 border-b border-gray-200 dark:border-[#1A2542] flex justify-between items-center">
              <h2 className="font-medium text-gray-900 dark:text-white">
                Basic Information
              </h2>
              <button
                onClick={() => handleEdit("basic")}
                className="text-primary text-sm font-medium"
              >
                Edit
              </button>
            </div>
            <div className="p-4 space-y-3">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  Pet Name
                </span>
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  {formData.petName}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  Pet Type
                </span>
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  {formData.petType}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  Breed
                </span>
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  {formData.breed}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  Age
                </span>
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  {formData.age}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  Gender
                </span>
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  {formData.gender}
                </span>
              </div>
            </div>
          </div>

          {/* Photos */}
          <div className="bg-white dark:bg-[#101935] rounded-lg overflow-hidden shadow border border-gray-200 dark:border-[#1A2542] mb-6">
            <div className="p-4 border-b border-gray-200 dark:border-[#1A2542] flex justify-between items-center">
              <h2 className="font-medium text-gray-900 dark:text-white">
                Photos
              </h2>
              <button
                onClick={() => handleEdit("photos")}
                className="text-primary text-sm font-medium"
              >
                Edit
              </button>
            </div>
            <div className="p-4">
              {formData.petPhotos && formData.petPhotos.length > 0 ? (
                <div className="grid grid-cols-3 gap-2">
                  {formData.petPhotos.map((photo: string, index: number) => (
                    <div
                      key={index}
                      className={`relative aspect-square rounded-md overflow-hidden ${
                        index === 0 ? "col-span-3 mb-2" : ""
                      }`}
                    >
                      <img
                        src={photo}
                        alt={`Pet ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                      {index === 0 && (
                        <span className="absolute bottom-2 left-2 bg-primary/80 text-white text-xs px-2 py-0.5 rounded">
                          Main Photo
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-gray-500 dark:text-gray-400 italic">
                  No photos added yet
                </p>
              )}
            </div>
          </div>

          {/* Description */}
          <div className="bg-white dark:bg-[#101935] rounded-lg overflow-hidden shadow border border-gray-200 dark:border-[#1A2542] mb-6">
            <div className="p-4 border-b border-gray-200 dark:border-[#1A2542] flex justify-between items-center">
              <h2 className="font-medium text-gray-900 dark:text-white">
                Description
              </h2>
              <button
                onClick={() => handleEdit("description")}
                className="text-primary text-sm font-medium"
              >
                Edit
              </button>
            </div>
            <div className="p-4 space-y-4">
              <div>
                <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-1">
                  Pet Description
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {formData.description || "No description provided"}
                </p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-1">
                  Reason for Adoption
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {formData.reasonForAdoption || "No reason provided"}
                </p>
              </div>
              {formData.specialRequirements && (
                <div>
                  <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-1">
                    Special Requirements
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {formData.specialRequirements}
                  </p>
                </div>
              )}
              {formData.health && (
                <div>
                  <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-1">
                    Health Information
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {formData.health}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Location */}
          <div className="bg-white dark:bg-[#101935] rounded-lg overflow-hidden shadow border border-gray-200 dark:border-[#1A2542] mb-6">
            <div className="p-4 border-b border-gray-200 dark:border-[#1A2542] flex justify-between items-center">
              <h2 className="font-medium text-gray-900 dark:text-white">
                Location
              </h2>
              <button
                onClick={() => handleEdit("location")}
                className="text-primary text-sm font-medium"
              >
                Edit
              </button>
            </div>
            <div className="p-4 space-y-3">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  Country
                </span>
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  {formData.country}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  City
                </span>
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  {formData.city}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  Address
                </span>
                <span className="text-sm font-medium text-gray-900 dark:text-white text-right">
                  {formData.addressLine1}
                  {formData.addressLine2 && (
                    <span>, {formData.addressLine2}</span>
                  )}
                </span>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-white dark:bg-[#101935] rounded-lg overflow-hidden shadow border border-gray-200 dark:border-[#1A2542] mb-6">
            <div className="p-4 border-b border-gray-200 dark:border-[#1A2542] flex justify-between items-center">
              <h2 className="font-medium text-gray-900 dark:text-white">
                Contact Information
              </h2>
              <button
                onClick={() => handleEdit("contact")}
                className="text-primary text-sm font-medium"
              >
                Edit
              </button>
            </div>
            <div className="p-4 space-y-3">
              {formData.phoneNumber && formData.showPhoneNumber && (
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    Phone Number
                  </span>
                  <span className="text-sm font-medium text-gray-900 dark:text-white">
                    {formData.phoneNumber}
                  </span>
                </div>
              )}
              {formData.email && formData.showEmail && (
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    Email
                  </span>
                  <span className="text-sm font-medium text-gray-900 dark:text-white">
                    {formData.email}
                  </span>
                </div>
              )}
              {(formData.whatsAppAvailable || formData.telegramAvailable) && (
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    Other Contact Methods
                  </span>
                  <span className="text-sm font-medium text-gray-900 dark:text-white">
                    {formData.whatsAppAvailable && "WhatsApp"}
                    {formData.whatsAppAvailable &&
                      formData.telegramAvailable &&
                      ", "}
                    {formData.telegramAvailable && "Telegram"}
                  </span>
                </div>
              )}
              <div className="flex justify-between">
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  Preferred Contact Method
                </span>
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  {formData.preferredContactMethod}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:block lg:flex-1 lg:overflow-hidden">
        {/* Two-column layout for desktop */}
        <div className="max-w-7xl mx-auto px-8 py-8 pb-36 grid grid-cols-3 gap-8">
          {/* Left column - Timeline and Preview */}
          <div className="col-span-1">
            {/* Timeline Indicator */}
            <div className="bg-white dark:bg-[#101935] rounded-lg overflow-hidden shadow border border-gray-200 dark:border-[#1A2542] mb-6 p-4">
              <h2 className="font-medium text-gray-900 dark:text-white mb-4">
                Adoption Process
              </h2>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center">
                    1
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900 dark:text-white">
                      Basic Information
                    </p>
                  </div>
                </div>
                <div className="pl-4 border-l-2 border-primary h-6"></div>
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center">
                    2
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900 dark:text-white">
                      Photos
                    </p>
                  </div>
                </div>
                <div className="pl-4 border-l-2 border-primary h-6"></div>
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center">
                    3
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900 dark:text-white">
                      Description
                    </p>
                  </div>
                </div>
                <div className="pl-4 border-l-2 border-primary h-6"></div>
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center">
                    4
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900 dark:text-white">
                      Location
                    </p>
                  </div>
                </div>
                <div className="pl-4 border-l-2 border-primary h-6"></div>
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center">
                    5
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900 dark:text-white">
                      Contact
                    </p>
                  </div>
                </div>
                <div className="pl-4 border-l-2 border-primary h-6"></div>
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-primary/20 text-primary border-2 border-primary font-semibold flex items-center justify-center">
                    6
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-primary">
                      Review & Post
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Pet Preview Card */}
            {formData.petPhotos && formData.petPhotos.length > 0 && (
              <div className="bg-white dark:bg-[#101935] rounded-lg overflow-hidden shadow border border-gray-200 dark:border-[#1A2542]">
                <div className="aspect-[4/3] w-full">
                  <img
                    src={formData.petPhotos[0]}
                    alt={formData.petName}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {formData.petName}
                  </h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {formData.petType} for adoption
                  </p>

                  <div className="mt-4 grid grid-cols-3 gap-2">
                    <div className="bg-gray-50 dark:bg-[#1A2542] p-2 rounded-md">
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        Gender
                      </p>
                      <p className="text-sm font-medium text-gray-900 dark:text-white">
                        {formData.gender}
                      </p>
                    </div>
                    <div className="bg-gray-50 dark:bg-[#1A2542] p-2 rounded-md">
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        Age
                      </p>
                      <p className="text-sm font-medium text-gray-900 dark:text-white">
                        {formData.age}
                      </p>
                    </div>
                    <div className="bg-gray-50 dark:bg-[#1A2542] p-2 rounded-md">
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        Location
                      </p>
                      <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                        {formData.city}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-gray-100 dark:border-[#1A2542]">
                    <p className="text-sm text-gray-700 dark:text-gray-300 line-clamp-3">
                      {formData.description || "No description provided"}
                    </p>
                  </div>

                  <div className="mt-4 pt-4 border-t border-gray-100 dark:border-[#1A2542] flex items-center">
                    <div className="w-8 h-8 bg-gray-200 dark:bg-[#1A2542] rounded-full flex items-center justify-center text-gray-600 dark:text-gray-300">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900 dark:text-white">
                        You
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {formData.city}, {formData.country}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right column - Review Sections */}
          <div className="col-span-2 space-y-6">
            {/* Basic Information */}
            <div className="bg-white dark:bg-[#101935] rounded-lg overflow-hidden shadow border border-gray-200 dark:border-[#1A2542]">
              <div className="p-4 border-b border-gray-200 dark:border-[#1A2542] flex justify-between items-center">
                <h2 className="font-medium text-gray-900 dark:text-white">
                  Basic Information
                </h2>
                <button
                  onClick={() => handleEdit("basic")}
                  className="text-primary text-sm font-medium"
                >
                  Edit
                </button>
              </div>
              <div className="p-6 grid grid-cols-2 gap-6">
                <div>
                  <span className="text-sm text-gray-600 dark:text-gray-400 block mb-1">
                    Pet Name
                  </span>
                  <span className="text-base font-medium text-gray-900 dark:text-white">
                    {formData.petName}
                  </span>
                </div>
                <div>
                  <span className="text-sm text-gray-600 dark:text-gray-400 block mb-1">
                    Pet Type
                  </span>
                  <span className="text-base font-medium text-gray-900 dark:text-white">
                    {formData.petType}
                  </span>
                </div>
                <div>
                  <span className="text-sm text-gray-600 dark:text-gray-400 block mb-1">
                    Breed
                  </span>
                  <span className="text-base font-medium text-gray-900 dark:text-white">
                    {formData.breed}
                  </span>
                </div>
                <div>
                  <span className="text-sm text-gray-600 dark:text-gray-400 block mb-1">
                    Age
                  </span>
                  <span className="text-base font-medium text-gray-900 dark:text-white">
                    {formData.age}
                  </span>
                </div>
                <div>
                  <span className="text-sm text-gray-600 dark:text-gray-400 block mb-1">
                    Gender
                  </span>
                  <span className="text-base font-medium text-gray-900 dark:text-white">
                    {formData.gender}
                  </span>
                </div>
              </div>
            </div>

            {/* Photos */}
            <div className="bg-white dark:bg-[#101935] rounded-lg overflow-hidden shadow border border-gray-200 dark:border-[#1A2542]">
              <div className="p-4 border-b border-gray-200 dark:border-[#1A2542] flex justify-between items-center">
                <h2 className="font-medium text-gray-900 dark:text-white">
                  Photos
                </h2>
                <button
                  onClick={() => handleEdit("photos")}
                  className="text-primary text-sm font-medium"
                >
                  Edit
                </button>
              </div>
              <div className="p-6">
                {formData.petPhotos && formData.petPhotos.length > 0 ? (
                  <div className="grid grid-cols-4 gap-4">
                    {formData.petPhotos.map((photo: string, index: number) => (
                      <div
                        key={index}
                        className="relative aspect-square rounded-md overflow-hidden"
                      >
                        <img
                          src={photo}
                          alt={`Pet ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                        {index === 0 && (
                          <span className="absolute bottom-2 left-2 bg-primary/80 text-white text-xs px-2 py-0.5 rounded">
                            Main Photo
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-gray-500 dark:text-gray-400 italic">
                    No photos added yet
                  </p>
                )}
              </div>
            </div>

            {/* Description */}
            <div className="bg-white dark:bg-[#101935] rounded-lg overflow-hidden shadow border border-gray-200 dark:border-[#1A2542]">
              <div className="p-4 border-b border-gray-200 dark:border-[#1A2542] flex justify-between items-center">
                <h2 className="font-medium text-gray-900 dark:text-white">
                  Description
                </h2>
                <button
                  onClick={() => handleEdit("description")}
                  className="text-primary text-sm font-medium"
                >
                  Edit
                </button>
              </div>
              <div className="p-6 space-y-5">
                <div>
                  <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-2">
                    Pet Description
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 whitespace-pre-line">
                    {formData.description || "No description provided"}
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-2">
                    Reason for Adoption
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 whitespace-pre-line">
                    {formData.reasonForAdoption || "No reason provided"}
                  </p>
                </div>
                {formData.specialRequirements && (
                  <div>
                    <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-2">
                      Special Requirements
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 whitespace-pre-line">
                      {formData.specialRequirements}
                    </p>
                  </div>
                )}
                {formData.health && (
                  <div>
                    <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-2">
                      Health Information
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 whitespace-pre-line">
                      {formData.health}
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Location */}
            <div className="bg-white dark:bg-[#101935] rounded-lg overflow-hidden shadow border border-gray-200 dark:border-[#1A2542]">
              <div className="p-4 border-b border-gray-200 dark:border-[#1A2542] flex justify-between items-center">
                <h2 className="font-medium text-gray-900 dark:text-white">
                  Location
                </h2>
                <button
                  onClick={() => handleEdit("location")}
                  className="text-primary text-sm font-medium"
                >
                  Edit
                </button>
              </div>
              <div className="p-6 grid grid-cols-2 gap-6">
                <div>
                  <span className="text-sm text-gray-600 dark:text-gray-400 block mb-1">
                    Country
                  </span>
                  <span className="text-base font-medium text-gray-900 dark:text-white">
                    {formData.country}
                  </span>
                </div>
                <div>
                  <span className="text-sm text-gray-600 dark:text-gray-400 block mb-1">
                    City
                  </span>
                  <span className="text-base font-medium text-gray-900 dark:text-white">
                    {formData.city}
                  </span>
                </div>
                <div className="col-span-2">
                  <span className="text-sm text-gray-600 dark:text-gray-400 block mb-1">
                    Address
                  </span>
                  <span className="text-base font-medium text-gray-900 dark:text-white">
                    {formData.addressLine1}
                    {formData.addressLine2 && (
                      <span>, {formData.addressLine2}</span>
                    )}
                  </span>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-white dark:bg-[#101935] rounded-lg overflow-hidden shadow border border-gray-200 dark:border-[#1A2542]">
              <div className="p-4 border-b border-gray-200 dark:border-[#1A2542] flex justify-between items-center">
                <h2 className="font-medium text-gray-900 dark:text-white">
                  Contact Information
                </h2>
                <button
                  onClick={() => handleEdit("contact")}
                  className="text-primary text-sm font-medium"
                >
                  Edit
                </button>
              </div>
              <div className="p-6 grid grid-cols-2 gap-6">
                {formData.phoneNumber && formData.showPhoneNumber && (
                  <div>
                    <span className="text-sm text-gray-600 dark:text-gray-400 block mb-1">
                      Phone Number
                    </span>
                    <span className="text-base font-medium text-gray-900 dark:text-white">
                      {formData.phoneNumber}
                    </span>
                  </div>
                )}
                {formData.email && formData.showEmail && (
                  <div>
                    <span className="text-sm text-gray-600 dark:text-gray-400 block mb-1">
                      Email
                    </span>
                    <span className="text-base font-medium text-gray-900 dark:text-white">
                      {formData.email}
                    </span>
                  </div>
                )}
                {(formData.whatsAppAvailable || formData.telegramAvailable) && (
                  <div>
                    <span className="text-sm text-gray-600 dark:text-gray-400 block mb-1">
                      Other Contact Methods
                    </span>
                    <span className="text-base font-medium text-gray-900 dark:text-white">
                      {formData.whatsAppAvailable && "WhatsApp"}
                      {formData.whatsAppAvailable &&
                        formData.telegramAvailable &&
                        ", "}
                      {formData.telegramAvailable && "Telegram"}
                    </span>
                  </div>
                )}
                <div>
                  <span className="text-sm text-gray-600 dark:text-gray-400 block mb-1">
                    Preferred Contact Method
                  </span>
                  <span className="text-base font-medium text-gray-900 dark:text-white">
                    {formData.preferredContactMethod}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Submit Button with Free Adoption Message */}
      <div className="sticky bottom-0 left-0 right-0 z-30">
        {/* Info message about free adoption listings */}
        <div className="p-4 bg-green-50 dark:bg-green-900/20 border-t border-green-100 dark:border-green-900/20">
          <div className="lg:max-w-7xl lg:mx-auto flex items-center text-center lg:text-left">
            <div className="flex-shrink-0 mr-3 hidden lg:block">
              <svg
                className="w-6 h-6 text-green-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <p className="text-sm text-green-700 dark:text-green-300">
              Adoption listings are completely{" "}
              <span className="font-semibold">free</span> to encourage pet
              adoptions and help more animals find loving homes.
            </p>
          </div>
        </div>

        {/* Submit Button */}
        <div className="p-4 bg-white dark:bg-[#101935] border-t dark:border-[#1A2542] shadow-md">
          <div className="lg:max-w-7xl lg:mx-auto lg:flex lg:justify-end">
            <button
              onClick={handleSubmit}
              className="w-full py-3.5 rounded-lg font-medium bg-primary text-white hover:bg-primary-dark transition-colors lg:w-72"
            >
              Post Free Adoption Listing
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
