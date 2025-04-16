import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import ThemeToggle from "../../components/ThemeToggle";

export default function ReviewMating() {
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
    matingConditions: "",
    country: "Nigeria",
    city: "Lagos",
    phoneNumber: "",
    email: "",
    petPhotos: [],
  };

  const [_isDarkMode, setIsDarkMode] = useState<boolean>(
    document.documentElement.classList.contains("dark")
  );

  // Credit system state
  const [_showCreditModal, setShowCreditModal] = useState(false);
  const [userCredits] = useState(0); // Set to 0 for demonstration purposes

  // Debug info
  useEffect(() => {
    console.log("FormData received in ReviewMating:", formData);
  }, [formData]);

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
    // Check if user has credits
    if (userCredits <= 0) {
      setShowCreditModal(true);
      return;
    }

    console.log("Form data to submit:", formData);

    // Navigate to marketplace with success message
    navigate("/marketplace", {
      state: {
        petName: formData.petName,
        success: true,
        message: "Your mating listing has been posted successfully!",
      },
    });
  };

  // const handleBuyCredits = () => {
  //   // Close the modal and navigate to marketplace or credits page
  //   setShowCreditModal(false);
  //   navigate("/marketplace", { state: { activeTab: "credits" } });
  // };

  const handleEdit = (step: string) => {
    switch (step) {
      case "basic":
        navigate("/create-mating", { state: { formData } });
        break;
      case "photos":
        navigate("/create-mating/photos", { state: { formData } });
        break;
      case "description":
        navigate("/create-mating/description", { state: { formData } });
        break;
      case "location":
        navigate("/create-mating/location", { state: { formData } });
        break;
      case "contact":
        navigate("/create-mating/contact", { state: { formData } });
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
            Review Mating Information
          </h1>
        </div>
        <ThemeToggle />
      </header>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto px-4 py-6 lg:px-0">
        {/* Desktop Timeline - Hidden on mobile */}
        <div className="hidden lg:block max-w-6xl mx-auto mb-8">
          <div className="flex justify-between items-center relative">
            <div className="absolute left-0 right-0 top-1/2 h-1 bg-gray-200 dark:bg-[#1A2542] -translate-y-1/2 z-0"></div>
            {/* Step 1 */}
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center">
                <span className="text-sm font-medium">1</span>
              </div>
              <span className="text-xs mt-2 font-medium">Details</span>
            </div>
            {/* Step 2 */}
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center">
                <span className="text-sm font-medium">2</span>
              </div>
              <span className="text-xs mt-2 font-medium">Photos</span>
            </div>
            {/* Step 3 */}
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center">
                <span className="text-sm font-medium">3</span>
              </div>
              <span className="text-xs mt-2 font-medium">Description</span>
            </div>
            {/* Step 4 */}
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center">
                <span className="text-sm font-medium">4</span>
              </div>
              <span className="text-xs mt-2 font-medium">Location</span>
            </div>
            {/* Step 5 */}
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center">
                <span className="text-sm font-medium">5</span>
              </div>
              <span className="text-xs mt-2 font-medium">Contact</span>
            </div>
            {/* Step 6 */}
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-primary-dark text-white flex items-center justify-center ring-4 ring-primary/20">
                <span className="text-sm font-medium">6</span>
              </div>
              <span className="text-xs mt-2 font-medium text-primary-dark">
                Review
              </span>
            </div>
          </div>
        </div>

        <div className="lg:max-w-6xl lg:mx-auto lg:pb-20">
          <p className="text-gray-600 dark:text-gray-300 mb-6 lg:text-center">
            Review your pet mating information before posting. You can edit any
            section if needed.
          </p>

          {/* Desktop Layout */}
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            {/* Left Column - Pet Preview (Desktop Only) */}
            <div className="hidden lg:block lg:col-span-5">
              <div className="bg-white dark:bg-[#101935] rounded-xl shadow-sm p-6 border border-gray-200 dark:border-[#1A2542] sticky top-24">
                <h2 className="text-xl font-semibold dark:text-white mb-4">
                  Listing Preview
                </h2>

                {/* Pet Photo Preview */}
                {formData.petPhotos && formData.petPhotos.length > 0 ? (
                  <div className="mb-6">
                    <div className="w-full h-64 rounded-lg overflow-hidden">
                      <img
                        src={formData.petPhotos[0]}
                        alt="Pet"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="mb-6">
                    <div className="w-full h-64 rounded-lg overflow-hidden bg-gray-200 dark:bg-[#1A2542] flex items-center justify-center">
                      <svg
                        className="w-16 h-16 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1}
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14"
                        />
                        <circle cx="8" cy="9" r="2" />
                        <rect
                          x="3"
                          y="3"
                          width="18"
                          height="18"
                          rx="2"
                          ry="2"
                        />
                      </svg>
                    </div>
                  </div>
                )}

                {/* Pet Title */}
                <div className="mb-4">
                  <h3 className="text-xl font-semibold dark:text-white">
                    {formData.petName || "Your Pet"}
                    <span className="ml-1 text-gray-500 dark:text-gray-400 font-normal">
                      {formData.petType ? `(${formData.petType})` : ""}
                    </span>
                  </h3>
                  <p className="text-sm font-medium text-primary mt-1">
                    Available for Mating
                  </p>
                </div>

                {/* Quick Details */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-50 dark:bg-[#1A2542] rounded-lg p-3">
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      Gender
                    </span>
                    <p className="text-sm font-medium dark:text-white">
                      {formData.gender || "Not specified"}
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-[#1A2542] rounded-lg p-3">
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      Age
                    </span>
                    <p className="text-sm font-medium dark:text-white">
                      {formData.age || "Not specified"}
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-[#1A2542] rounded-lg p-3">
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      Breed
                    </span>
                    <p className="text-sm font-medium dark:text-white">
                      {formData.breed || "Not specified"}
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-[#1A2542] rounded-lg p-3">
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      Location
                    </span>
                    <p className="text-sm font-medium dark:text-white">
                      {formData.city || "Not specified"}
                    </p>
                  </div>
                </div>

                {/* Description */}
                {formData.description && (
                  <div className="mb-4">
                    <h4 className="text-sm font-medium dark:text-white mb-2">
                      Description
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300 whitespace-pre-line bg-gray-50 dark:bg-[#1A2542] p-3 rounded-lg">
                      {formData.description}
                    </p>
                  </div>
                )}

                {/* Mating Conditions */}
                {formData.matingConditions && (
                  <div className="mb-4">
                    <h4 className="text-sm font-medium dark:text-white mb-2">
                      Mating Conditions
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300 whitespace-pre-line bg-gray-50 dark:bg-[#1A2542] p-3 rounded-lg">
                      {formData.matingConditions}
                    </p>
                  </div>
                )}

                {/* Mock User Profile */}
                <div className="flex items-center pt-4 border-t border-gray-200 dark:border-[#1A2542]">
                  <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-[#1A2542] flex-shrink-0 overflow-hidden">
                    <img
                      src="https://randomuser.me/api/portraits/men/32.jpg"
                      alt="User"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium dark:text-white">You</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      Posted just now
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Edit Form */}
            <div className="lg:col-span-7">
              {/* Mobile Pet Photo Preview */}
              <div className="lg:hidden mb-8">
                {formData.petPhotos && formData.petPhotos.length > 0 && (
                  <div className="w-full h-56 rounded-lg overflow-hidden">
                    <img
                      src={formData.petPhotos[0]}
                      alt="Pet"
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
              </div>

              {/* Review Sections */}
              <div className="space-y-6">
                {/* Basic Information */}
                <div className="bg-white dark:bg-[#101935] rounded-lg shadow-sm p-4 border border-gray-200 dark:border-[#1A2542]">
                  <div className="flex justify-between items-center mb-3">
                    <h2 className="text-lg font-medium dark:text-white">
                      Basic Information
                    </h2>
                    <button
                      onClick={() => handleEdit("basic")}
                      className="text-primary text-sm font-medium flex items-center"
                    >
                      <svg
                        className="w-4 h-4 mr-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                        />
                      </svg>
                      Edit
                    </button>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Pet Name
                      </p>
                      <p className="font-medium dark:text-white">
                        {formData.petName || "Not specified"}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Pet Type
                      </p>
                      <p className="font-medium dark:text-white">
                        {formData.petType || "Not specified"}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Age
                      </p>
                      <p className="font-medium dark:text-white">
                        {formData.age || "Not specified"}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Gender
                      </p>
                      <p className="font-medium dark:text-white">
                        {formData.gender || "Not specified"}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Breed
                      </p>
                      <p className="font-medium dark:text-white">
                        {formData.breed || "Not specified"}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Photos */}
                <div className="bg-white dark:bg-[#101935] rounded-lg shadow-sm p-4 border border-gray-200 dark:border-[#1A2542]">
                  <div className="flex justify-between items-center mb-3">
                    <h2 className="text-lg font-medium dark:text-white">
                      Photos
                    </h2>
                    <button
                      onClick={() => handleEdit("photos")}
                      className="text-primary text-sm font-medium flex items-center"
                    >
                      <svg
                        className="w-4 h-4 mr-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                        />
                      </svg>
                      Edit
                    </button>
                  </div>
                  <div className="grid grid-cols-4 gap-2">
                    {formData.petPhotos && formData.petPhotos.length > 0 ? (
                      formData.petPhotos.map((photo: string, index: number) => (
                        <div
                          key={index}
                          className="h-20 rounded-lg overflow-hidden"
                        >
                          <img
                            src={photo}
                            alt={`Pet ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))
                    ) : (
                      <div className="col-span-4 py-4 text-center text-gray-500 dark:text-gray-400">
                        No photos uploaded
                      </div>
                    )}
                  </div>
                </div>

                {/* Description */}
                <div className="bg-white dark:bg-[#101935] rounded-lg shadow-sm p-4 border border-gray-200 dark:border-[#1A2542]">
                  <div className="flex justify-between items-center mb-3">
                    <h2 className="text-lg font-medium dark:text-white">
                      Description & Conditions
                    </h2>
                    <button
                      onClick={() => handleEdit("description")}
                      className="text-primary text-sm font-medium flex items-center"
                    >
                      <svg
                        className="w-4 h-4 mr-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                        />
                      </svg>
                      Edit
                    </button>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Description
                    </p>
                    <p className="font-medium dark:text-white whitespace-pre-line">
                      {formData.description || "Not specified"}
                    </p>
                  </div>
                  {formData.matingConditions && (
                    <div className="mt-4">
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Mating Conditions
                      </p>
                      <p className="font-medium dark:text-white whitespace-pre-line">
                        {formData.matingConditions}
                      </p>
                    </div>
                  )}
                </div>

                {/* Location */}
                <div className="bg-white dark:bg-[#101935] rounded-lg shadow-sm p-4 border border-gray-200 dark:border-[#1A2542]">
                  <div className="flex justify-between items-center mb-3">
                    <h2 className="text-lg font-medium dark:text-white">
                      Location
                    </h2>
                    <button
                      onClick={() => handleEdit("location")}
                      className="text-primary text-sm font-medium flex items-center"
                    >
                      <svg
                        className="w-4 h-4 mr-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                        />
                      </svg>
                      Edit
                    </button>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Country
                      </p>
                      <p className="font-medium dark:text-white">
                        {formData.country || "Not specified"}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        City
                      </p>
                      <p className="font-medium dark:text-white">
                        {formData.city || "Not specified"}
                      </p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Address
                    </p>
                    <p className="font-medium dark:text-white">
                      {formData.addressLine1 || "Not specified"}
                      {formData.addressLine2 && `, ${formData.addressLine2}`}
                    </p>
                  </div>
                </div>

                {/* Contact */}
                <div className="bg-white dark:bg-[#101935] rounded-lg shadow-sm p-4 border border-gray-200 dark:border-[#1A2542]">
                  <div className="flex justify-between items-center mb-3">
                    <h2 className="text-lg font-medium dark:text-white">
                      Contact Information
                    </h2>
                    <button
                      onClick={() => handleEdit("contact")}
                      className="text-primary text-sm font-medium flex items-center"
                    >
                      <svg
                        className="w-4 h-4 mr-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                        />
                      </svg>
                      Edit
                    </button>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {formData.showPhoneNumber && (
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Phone Number
                        </p>
                        <p className="font-medium dark:text-white">
                          {formData.phoneNumber || "Not specified"}
                        </p>
                      </div>
                    )}
                    {formData.showEmail && (
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Email
                        </p>
                        <p className="font-medium dark:text-white">
                          {formData.email || "Not specified"}
                        </p>
                      </div>
                    )}
                  </div>
                  {(formData.whatsapp || formData.telegram) && (
                    <div className="mt-4">
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Additional Contact Methods
                      </p>
                      {formData.whatsapp && (
                        <p className="font-medium dark:text-white">WhatsApp</p>
                      )}
                      {formData.telegram && (
                        <p className="font-medium dark:text-white">Telegram</p>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <div className="p-4 bg-white dark:bg-[#101935] border-t dark:border-[#1A2542] shadow-md lg:fixed lg:bottom-0 lg:left-0 lg:right-0">
        <div className="lg:max-w-6xl lg:mx-auto lg:flex lg:justify-end">
          <button
            onClick={handleSubmit}
            className="w-full py-3.5 rounded-lg font-medium bg-primary text-white hover:bg-primary-dark transition-colors lg:w-72"
          >
            Post Mating Listing
          </button>
        </div>
      </div>
    </div>
  );
}
