import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import ThemeToggle from "../../components/ThemeToggle";
import NoCreditsImage from "../../assets/no-credits.svg";

export default function ReviewPetSale() {
  const navigate = useNavigate();
  const location = useLocation();

  // Get form data from previous steps
  const formData = location.state?.formData || {
    petName: "Sample Pet",
    petType: "Dog",
    gender: "Male",
    age: "1 year",
    price: "5000",
    description: "",
    country: "Nigeria",
    city: "Lagos",
    address: "",
    contact: "",
    photos: [],
  };

  const [_isDarkMode, setIsDarkMode] = useState<boolean>(
    document.documentElement.classList.contains("dark")
  );
  // Credit system state
  const [showCreditModal, setShowCreditModal] = useState(false);
  const [userCredits, setUserCredits] = useState(0);

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

    // Check for user credits from localStorage
    const storedCredits = localStorage.getItem("userCredits");
    if (storedCredits) {
      setUserCredits(parseInt(storedCredits));
    }

    // Cleanup
    return () => {
      document.removeEventListener("themeChange", handleThemeChange);
    };
  }, []);

  // Debug info
  useEffect(() => {
    console.log("FormData received in ReviewPetSale:", formData);
    console.log("Location state:", location.state);
  }, []);

  const handleSubmit = () => {
    // Check if user has enough credits
    if (userCredits <= 0) {
      setShowCreditModal(true);
      return;
    }

    // If they have credits, deduct one credit and proceed with submission
    const newCreditBalance = userCredits - 1;
    setUserCredits(newCreditBalance);
    localStorage.setItem("userCredits", newCreditBalance.toString());

    console.log("Form data to submit:", formData);
    console.log("Credit deducted. Remaining credits:", newCreditBalance);

    // Navigate to post success page
    navigate("/pet-sale/post-success", {
      state: {
        petName: formData.petName,
        petType: formData.petType,
        redirectTo: "/marketplace",
      },
    });
  };

  const handleEdit = (step: string) => {
    switch (step) {
      case "basic":
        navigate("/create-pet-sale", { state: { formData } });
        break;
      case "photos":
        navigate("/create-pet-sale/photos", { state: { formData } });
        break;
      case "description":
        navigate("/create-pet-sale/description", { state: { formData } });
        break;
      case "price":
        navigate("/create-pet-sale/price", { state: { formData } });
        break;
      case "location":
        navigate("/create-pet-sale/location", { state: { formData } });
        break;
      case "contact":
        navigate("/create-pet-sale/contact", { state: { formData } });
        break;
      default:
        break;
    }
  };

  const handleBuyCredits = () => {
    // Close the modal
    setShowCreditModal(false);

    // Navigate to credits purchase page
    navigate("/wallet/buy-credits");
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-[#0A1121] flex flex-col w-screen">
      {/* Credit Modal */}
      {showCreditModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white dark:bg-[#101935] w-11/12 max-w-md rounded-xl overflow-hidden relative">
            {/* Close button */}
            <button
              onClick={() => setShowCreditModal(false)}
              className="absolute right-3 top-3 text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300 z-10"
            >
              <svg
                className="w-6 h-6"
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

            {/* Pet illustration */}
            <div className="flex flex-col items-center justify-center pt-12 pb-6">
              <div className="w-32 h-32 mb-4">
                <img
                  src={NoCreditsImage}
                  alt="No Credits"
                  className="w-full h-full"
                />
              </div>

              <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                Out of Credits!
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mt-2 mb-6 text-center px-6">
                You need more credits to post again. Buy now to keep sharing
                with our community.
              </p>

              <div className="px-10 w-full mb-6">
                <button
                  onClick={handleBuyCredits}
                  className="w-full py-3.5 bg-primary text-white rounded-lg font-medium hover:bg-primary-dark transition-colors"
                >
                  Buy Credits
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

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
            Review Information
          </h1>
        </div>
        <div className="flex items-center">
          <div className="mr-4 flex items-center text-sm">
            <span className="text-primary font-medium">{userCredits}</span>
            <span className="text-gray-500 dark:text-gray-400 ml-1">
              Credits
            </span>
          </div>
          <ThemeToggle />
        </div>
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
              <span className="text-xs mt-2 font-medium">Price</span>
            </div>
            {/* Step 5 */}
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center">
                <span className="text-sm font-medium">5</span>
              </div>
              <span className="text-xs mt-2 font-medium">Location</span>
            </div>
            {/* Step 6 */}
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center">
                <span className="text-sm font-medium">6</span>
              </div>
              <span className="text-xs mt-2 font-medium">Contact</span>
            </div>
            {/* Step 7 */}
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-primary-dark text-white flex items-center justify-center ring-4 ring-primary/20">
                <span className="text-sm font-medium">7</span>
              </div>
              <span className="text-xs mt-2 font-medium text-primary-dark">
                Review
              </span>
            </div>
          </div>
        </div>

        <div className="lg:max-w-6xl lg:mx-auto lg:pb-20">
          <p className="text-gray-600 dark:text-gray-300 mb-6 lg:text-center">
            Review your pet information before posting. You can edit any section
            if needed.
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
                {formData.petPhoto ? (
                  <div className="mb-6">
                    <div className="w-full h-64 rounded-lg overflow-hidden">
                      <img
                        src={formData.petPhoto}
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

                {/* Pet Title and Price */}
                <div className="mb-4">
                  <h3 className="text-xl font-semibold dark:text-white">
                    {formData.petName || "Your Pet"}
                    <span className="ml-1 text-gray-500 dark:text-gray-400 font-normal">
                      {formData.petType ? `(${formData.petType})` : ""}
                    </span>
                  </h3>
                  <p className="text-2xl font-bold text-primary mt-1">
                    ₦{formData.price || "0"}
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
                      {formData.age || "0"} years
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-[#1A2542] rounded-lg p-3">
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      Location
                    </span>
                    <p className="text-sm font-medium dark:text-white">
                      {formData.location?.city || "Not specified"}
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-[#1A2542] rounded-lg p-3">
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      Contact
                    </span>
                    <p className="text-sm font-medium dark:text-white">
                      {formData.contact?.phoneNumber
                        ? "Available"
                        : "Not provided"}
                    </p>
                  </div>
                </div>

                {/* Description */}
                {formData.description && (
                  <div className="mb-6">
                    <h4 className="text-sm font-medium dark:text-white mb-2">
                      Description
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300 whitespace-pre-line bg-gray-50 dark:bg-[#1A2542] p-3 rounded-lg">
                      {formData.description}
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
                {formData.petPhoto && (
                  <div className="w-full h-56 rounded-lg overflow-hidden">
                    <img
                      src={formData.petPhoto}
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
                        {formData.age || "Not specified"} years
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
                  <div className="lg:flex lg:items-center lg:gap-4">
                    {formData.petPhoto ? (
                      <div className="hidden lg:block w-24 h-24 rounded-lg overflow-hidden">
                        <img
                          src={formData.petPhoto}
                          alt="Pet"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ) : (
                      <div className="bg-gray-100 dark:bg-[#1A2542] rounded-lg h-24 w-24 hidden lg:flex items-center justify-center">
                        <svg
                          className="w-10 h-10 text-gray-400"
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
                    )}
                    <div className="lg:ml-2">
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Pet Photo
                      </p>
                      <p className="font-medium dark:text-white">
                        {formData.petPhoto ? "Uploaded" : "No photo uploaded"}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="bg-white dark:bg-[#101935] rounded-lg shadow-sm p-4 border border-gray-200 dark:border-[#1A2542]">
                  <div className="flex justify-between items-center mb-3">
                    <h2 className="text-lg font-medium dark:text-white">
                      Description
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
                  {formData.specialNeeds && (
                    <div className="mt-4 rounded-lg bg-yellow-50 dark:bg-[#222555] p-3">
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Special Needs
                      </p>
                      <p className="font-medium text-yellow-700 dark:text-yellow-400">
                        {formData.specialNeeds}
                      </p>
                    </div>
                  )}
                </div>

                {/* Price */}
                <div className="bg-white dark:bg-[#101935] rounded-lg shadow-sm p-4 border border-gray-200 dark:border-[#1A2542]">
                  <div className="flex justify-between items-center mb-3">
                    <h2 className="text-lg font-medium dark:text-white">
                      Price
                    </h2>
                    <button
                      onClick={() => handleEdit("price")}
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
                      Price
                    </p>
                    <p className="font-medium text-primary text-lg">
                      ₦{formData.price || "0"}
                    </p>
                  </div>
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
                        {formData.location?.country || "Not specified"}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        City
                      </p>
                      <p className="font-medium dark:text-white">
                        {formData.location?.city || "Not specified"}
                      </p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Address
                    </p>
                    <p className="font-medium dark:text-white">
                      {formData.location?.addressLine1 || "Not specified"}
                      {formData.location?.addressLine2 &&
                        `, ${formData.location.addressLine2}`}
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
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Phone Number
                      </p>
                      <p className="font-medium dark:text-white">
                        {formData.contact?.phoneNumber || "Not specified"}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Email
                      </p>
                      <p className="font-medium dark:text-white">
                        {formData.contact?.email || "Not specified"}
                      </p>
                    </div>
                  </div>
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
            Post Pet for Sale
          </button>
        </div>
      </div>
    </div>
  );
}
