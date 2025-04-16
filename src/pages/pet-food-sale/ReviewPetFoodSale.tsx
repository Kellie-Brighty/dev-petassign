import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import ThemeToggle from "../../components/ThemeToggle";
import NoCreditsImage from "../../assets/no-credits.svg";

export default function ReviewPetFoodSale() {
  const navigate = useNavigate();
  const location = useLocation();

  // Get form data from previous steps
  const formData = location.state?.formData || {
    productName: "Sample Pet Food",
    petType: "Dog",
    quantity: "3",
    price: "5000",
    description: "",
    ingredients: "",
    country: "Nigeria",
    city: "Lagos",
    addressLine1: "",
    addressLine2: "",
    phoneNumber: "",
    email: "",
    whatsapp: "",
    productPhoto: null,
  };

  const [_isDarkMode, setIsDarkMode] = useState<boolean>(
    document.documentElement.classList.contains("dark")
  );
  // Credit system state
  const [showCreditModal, setShowCreditModal] = useState(false);
  const [userCredits, setUserCredits] = useState(0);

  // Debug info
  useEffect(() => {
    console.log("FormData received in ReviewPetFoodSale:", formData);
    console.log("Location state:", location.state);
  }, []);

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
        petName: formData.productName,
        petType: formData.petType,
        redirectTo: "/marketplace",
      },
    });
  };

  const handleEdit = (step: string) => {
    switch (step) {
      case "basic":
        navigate("/create-pet-food-sale", { state: { formData } });
        break;
      case "photos":
        navigate("/create-pet-food-sale/photos", { state: { formData } });
        break;
      case "description":
        navigate("/create-pet-food-sale/description", { state: { formData } });
        break;
      case "price":
        navigate("/create-pet-food-sale/price", { state: { formData } });
        break;
      case "location":
        navigate("/create-pet-food-sale/location", { state: { formData } });
        break;
      case "contact":
        navigate("/create-pet-food-sale/contact", { state: { formData } });
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
            Review Product Information
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

        {/* Desktop Layout */}
        <div className="max-w-6xl mx-auto">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8">
            {/* Left Column - Preview (Desktop only) */}
            <div className="hidden lg:block">
              <div className="bg-white dark:bg-[#101935] rounded-lg shadow-md overflow-hidden">
                <div className="p-4">
                  <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Your Listing Preview
                  </h2>
                  <div className="rounded-lg overflow-hidden h-64 mb-4 bg-gray-200 dark:bg-[#1A2542]">
                    {formData.productPhoto ? (
                      <img
                        src={formData.productPhoto}
                        alt={formData.productName}
                        className="w-full h-full object-contain"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-gray-400">
                        <span>No product image</span>
                      </div>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {formData.productName || "Product Name"}
                  </h3>
                  <p className="text-primary text-lg font-semibold">
                    ₦{formData.price || "0"}
                  </p>

                  <div className="mt-3 grid grid-cols-2 gap-3">
                    <div>
                      <span className="text-gray-500 dark:text-gray-400 text-xs">
                        Pet Type
                      </span>
                      <p className="text-gray-900 dark:text-white text-sm">
                        {formData.petType || "Not specified"}
                      </p>
                    </div>
                    <div>
                      <span className="text-gray-500 dark:text-gray-400 text-xs">
                        Quantity
                      </span>
                      <p className="text-gray-900 dark:text-white text-sm">
                        {formData.quantity || "Not specified"}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4">
                    <span className="text-gray-500 dark:text-gray-400 text-xs">
                      Location
                    </span>
                    <p className="text-gray-900 dark:text-white text-sm">
                      {formData.city && formData.country
                        ? `${formData.city}, ${formData.country}`
                        : "Not specified"}
                    </p>
                  </div>

                  <div className="mt-4 pt-4 border-t border-gray-100 dark:border-[#1A2542]">
                    <span className="text-gray-500 dark:text-gray-400 text-xs">
                      Seller
                    </span>
                    <div className="flex items-center mt-1">
                      <div className="w-8 h-8 rounded-full bg-gray-300 dark:bg-[#1A2542]"></div>
                      <span className="ml-2 text-sm text-gray-900 dark:text-white">
                        You
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Review Sections */}
            <div className="space-y-6">
              {/* Basic Info */}
              <div className="bg-white dark:bg-[#101935] rounded-lg shadow-sm p-4">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-medium text-gray-900 dark:text-white">
                    Basic Information
                  </h3>
                  <button
                    onClick={() => handleEdit("basic")}
                    className="text-primary text-sm font-medium"
                  >
                    Edit
                  </button>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <span className="text-gray-500 dark:text-gray-400 text-xs">
                      Product Name
                    </span>
                    <p className="text-gray-900 dark:text-white">
                      {formData.productName || "Not specified"}
                    </p>
                  </div>
                  <div>
                    <span className="text-gray-500 dark:text-gray-400 text-xs">
                      Pet Type
                    </span>
                    <p className="text-gray-900 dark:text-white">
                      {formData.petType || "Not specified"}
                    </p>
                  </div>
                  <div>
                    <span className="text-gray-500 dark:text-gray-400 text-xs">
                      Quantity
                    </span>
                    <p className="text-gray-900 dark:text-white">
                      {formData.quantity || "Not specified"}
                    </p>
                  </div>
                </div>
              </div>

              {/* Photos */}
              <div className="bg-white dark:bg-[#101935] rounded-lg shadow-sm p-4">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-medium text-gray-900 dark:text-white">
                    Product Photos
                  </h3>
                  <button
                    onClick={() => handleEdit("photos")}
                    className="text-primary text-sm font-medium"
                  >
                    Edit
                  </button>
                </div>
                <div className="h-32 bg-gray-100 dark:bg-[#1A2542] rounded-lg overflow-hidden">
                  {formData.productPhoto ? (
                    <img
                      src={formData.productPhoto}
                      alt="Product"
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                      <span>No product image</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Description */}
              <div className="bg-white dark:bg-[#101935] rounded-lg shadow-sm p-4">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-medium text-gray-900 dark:text-white">
                    Product Description
                  </h3>
                  <button
                    onClick={() => handleEdit("description")}
                    className="text-primary text-sm font-medium"
                  >
                    Edit
                  </button>
                </div>
                <div>
                  <span className="text-gray-500 dark:text-gray-400 text-xs">
                    Description
                  </span>
                  <p className="text-gray-900 dark:text-white whitespace-pre-line">
                    {formData.description || "Not specified"}
                  </p>
                </div>
                {formData.ingredients && (
                  <div className="mt-3">
                    <span className="text-gray-500 dark:text-gray-400 text-xs">
                      Ingredients
                    </span>
                    <p className="text-gray-900 dark:text-white whitespace-pre-line">
                      {formData.ingredients}
                    </p>
                  </div>
                )}
              </div>

              {/* Price */}
              <div className="bg-white dark:bg-[#101935] rounded-lg shadow-sm p-4">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-medium text-gray-900 dark:text-white">
                    Price
                  </h3>
                  <button
                    onClick={() => handleEdit("price")}
                    className="text-primary text-sm font-medium"
                  >
                    Edit
                  </button>
                </div>
                <div>
                  <span className="text-gray-500 dark:text-gray-400 text-xs">
                    Price in Naira
                  </span>
                  <p className="text-gray-900 dark:text-white text-xl font-semibold">
                    ₦{formData.price || "0"}
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="bg-white dark:bg-[#101935] rounded-lg shadow-sm p-4">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-medium text-gray-900 dark:text-white">
                    Location
                  </h3>
                  <button
                    onClick={() => handleEdit("location")}
                    className="text-primary text-sm font-medium"
                  >
                    Edit
                  </button>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <span className="text-gray-500 dark:text-gray-400 text-xs">
                      Country
                    </span>
                    <p className="text-gray-900 dark:text-white">
                      {formData.country || "Not specified"}
                    </p>
                  </div>
                  <div>
                    <span className="text-gray-500 dark:text-gray-400 text-xs">
                      City
                    </span>
                    <p className="text-gray-900 dark:text-white">
                      {formData.city || "Not specified"}
                    </p>
                  </div>
                  <div className="col-span-2">
                    <span className="text-gray-500 dark:text-gray-400 text-xs">
                      Address
                    </span>
                    <p className="text-gray-900 dark:text-white">
                      {formData.addressLine1
                        ? `${formData.addressLine1}${
                            formData.addressLine2
                              ? `, ${formData.addressLine2}`
                              : ""
                          }`
                        : "Not specified"}
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact */}
              <div className="bg-white dark:bg-[#101935] rounded-lg shadow-sm p-4">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-medium text-gray-900 dark:text-white">
                    Contact Information
                  </h3>
                  <button
                    onClick={() => handleEdit("contact")}
                    className="text-primary text-sm font-medium"
                  >
                    Edit
                  </button>
                </div>
                <div className="grid grid-cols-1 gap-2">
                  <div>
                    <span className="text-gray-500 dark:text-gray-400 text-xs">
                      Phone Number
                    </span>
                    <p className="text-gray-900 dark:text-white">
                      {formData.phoneNumber || "Not specified"}
                    </p>
                  </div>
                  <div>
                    <span className="text-gray-500 dark:text-gray-400 text-xs">
                      Email Address
                    </span>
                    <p className="text-gray-900 dark:text-white">
                      {formData.email || "Not specified"}
                    </p>
                  </div>
                  {formData.whatsapp && (
                    <div>
                      <span className="text-gray-500 dark:text-gray-400 text-xs">
                        WhatsApp
                      </span>
                      <p className="text-gray-900 dark:text-white">
                        {formData.whatsapp}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <div className="p-4 bg-white dark:bg-[#101935] border-t dark:border-[#1A2542] shadow-md">
        <button
          onClick={handleSubmit}
          className="w-full py-3.5 bg-primary text-white rounded-lg font-medium hover:bg-primary-dark transition-colors"
        >
          Publish Listing
        </button>
      </div>
    </div>
  );
}
