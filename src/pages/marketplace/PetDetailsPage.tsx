// import React from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import ThemeToggle from "../../components/ThemeToggle";

export default function PetDetailsPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation();
  const [_isDarkMode, setIsDarkMode] = useState<boolean>(
    document.documentElement.classList.contains("dark")
  );

  // Mock user data - in a real app, this would come from authentication or context
  const [isMember, setIsMember] = useState(false); // Always false for demo

  // Check if this is an adoption listing
  const isAdoption = location.pathname.includes("/adoption/");

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

  // This would normally be fetched from an API based on the id
  const petDetails = {
    id: id || "1",
    name: isAdoption
      ? "Norris the Emerald Chameleon"
      : "Norris the Emerald Chameleon up for sale",
    price: 129.95,
    description: isAdoption
      ? "Meet Bella, a loving and energetic 2-year-old Labrador Retriever looking for her forever home. Bella is a bundle of joy who loves to play fetch, go on long walks, and snuggle up for belly rubs. She has a friendly and gentle temperament, making her a perfect companion for families with children or other pets."
      : "Meet Bella, a loving and energetic 2-year-old Labrador Retriever looking for her forever home. Bella is a bundle of joy who loves to play fetch, go on long walks, and snuggle up for belly rubs. She has a friendly and gentle temperament, making her a perfect companion for families with children or other pets.",
    image:
      "https://images.unsplash.com/photo-1597245621429-761a33b49545?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80",
    gender: "Male",
    age: "2 years",
    location: {
      city: "Ibadan",
      region: "Nigeria",
      fullAddress: "Ojoo, Oyo State, Ibadan, Nigeria",
    },
    seller: {
      phone: "+234 81 3749 6017",
      email: "alibaheritage8@gmail.com",
    },
    specialNeeds:
      "He needs 2 hours of walk time everyday or he will get sick. He must not be exposed to too much cold",
  };

  const handleContinue = () => {
    if (isAdoption) {
      // Check if user is a member before proceeding with adoption
      if (!isMember) {
        // Redirect to membership page
        navigate("/adoption-membership", {
          state: {
            petId: id,
            petName: petDetails.name,
            petType: "Chameleon",
          },
        });
      } else {
        // User is a member, proceed with adoption
        navigate("/pet-adoption/post-success", {
          state: {
            petName: petDetails.name,
            petType: "Chameleon",
            redirectTo: "/adoptions",
          },
        });
      }
    } else {
      // For regular pet sales - Contact seller flow
      navigate("/chat", {
        state: {
          sellerId: id,
          sellerName: "Pet Owner", // In a real app, this would come from the pet details
          petName: petDetails.name,
          petId: id,
          petImage: petDetails.image,
        },
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0A1121]">
      {/* Header */}
      <header className="bg-white dark:bg-[#101935] px-4 py-3 flex items-center sticky top-0 z-50 shadow-sm border-b dark:border-[#1A2542]">
        <button onClick={() => navigate(-1)} className="p-1 mr-3">
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
        <input
          type="text"
          placeholder="Search feed, animals, breeds, etc"
          className="w-full py-2 pl-8 pr-4 rounded-full border border-gray-200 dark:border-[#1A2542] dark:bg-[#1A2542] dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/20 text-sm"
        />
        <div className="absolute left-14 top-1/2 transform -translate-y-1/2">
          <svg
            className="w-4 h-4 text-gray-400 dark:text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <div className="ml-2">
          <ThemeToggle />
        </div>
      </header>

      {/* Main Content */}
      <main className="pb-20">
        {/* Pet Image */}
        <div className="w-full aspect-square bg-white dark:bg-[#101935]">
          <img
            src={petDetails.image}
            alt={petDetails.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Pet Details */}
        <div className="p-4 bg-white dark:bg-[#101935]">
          <h1 className="text-base font-medium dark:text-white">
            {petDetails.name}
          </h1>
          {!isAdoption && (
            <p className="text-primary text-xl font-semibold mt-1">
              ₦{petDetails.price.toFixed(2)}
            </p>
          )}
          {isAdoption && (
            <p className="text-green-600 text-sm font-medium mt-1">
              up for adoption
            </p>
          )}
        </div>

        {isAdoption ? (
          <>
            {/* Description Section for Adoption */}
            <div className="mt-2 p-4 bg-white dark:bg-[#101935]">
              <h2 className="text-base font-medium mb-2 dark:text-white">
                Description
              </h2>
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                {petDetails.description}
              </p>
            </div>

            {/* Gender & Age for Adoption */}
            <div className="mt-2 p-4 bg-white dark:bg-[#101935]">
              <div className="flex justify-between">
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Gender:
                  </p>
                  <p className="text-sm font-medium dark:text-white">
                    {petDetails.gender}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Age:
                  </p>
                  <p className="text-sm font-medium dark:text-white">
                    {petDetails.age}
                  </p>
                </div>
              </div>
            </div>

            {/* Special Needs */}
            <div className="mt-2 p-4 bg-white dark:bg-[#101935]">
              <h2 className="text-base font-medium mb-2 dark:text-white">
                Special Needs
              </h2>
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                {petDetails.specialNeeds}
              </p>
            </div>

            {/* Location Section */}
            <div className="mt-2 p-4 bg-white dark:bg-[#101935]">
              <h2 className="text-base font-medium mb-2 dark:text-white">
                Location
              </h2>
              <div className="flex items-center">
                <svg
                  className="w-4 h-4 text-gray-600 dark:text-gray-400 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <p className="text-sm font-medium dark:text-white">
                  {petDetails.location.city}, {petDetails.location.region}
                </p>
              </div>
            </div>

            {/* Contact Details */}
            <div className="mt-2 p-4 bg-white dark:bg-[#101935]">
              <h2 className="text-base font-medium mb-2 dark:text-white">
                Contact Details
              </h2>
              <div className="flex items-center space-x-3 mt-2">
                <svg
                  className="w-4 h-4 text-gray-600 dark:text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span className="text-sm dark:text-white">
                  {petDetails.seller.phone}
                </span>
              </div>
              <div className="flex items-center space-x-3 mt-2">
                <svg
                  className="w-4 h-4 text-gray-600 dark:text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-sm dark:text-white">
                  {petDetails.seller.email}
                </span>
              </div>
            </div>
          </>
        ) : (
          <>
            {/* Description Section for Regular Sale */}
            <div className="mt-2 p-4 bg-white dark:bg-[#101935]">
              <h2 className="text-base font-medium mb-2 dark:text-white">
                Description
              </h2>
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                {petDetails.description}
              </p>

              <div className="mt-4 flex space-x-8">
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Gender
                  </p>
                  <p className="text-sm font-medium dark:text-white">
                    {petDetails.gender}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Age
                  </p>
                  <p className="text-sm font-medium dark:text-white">
                    {petDetails.age}
                  </p>
                </div>
              </div>
            </div>

            {/* Location Section */}
            <div className="mt-2 p-4 bg-white dark:bg-[#101935]">
              <h2 className="text-base font-medium mb-2 dark:text-white">
                Location
              </h2>
              <p className="text-sm font-medium dark:text-white">
                {petDetails.location.city}, {petDetails.location.region}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                {petDetails.location.fullAddress}
              </p>
            </div>

            {/* Contact Details */}
            <div className="mt-2 p-4 bg-white dark:bg-[#101935]">
              <h2 className="text-base font-medium mb-2 dark:text-white">
                Contact Details
              </h2>
              <div className="flex items-center space-x-3 mt-2">
                <svg
                  className="w-4 h-4 text-gray-600 dark:text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span className="text-sm dark:text-white">
                  {petDetails.seller.phone}
                </span>
              </div>
              <div className="flex items-center space-x-3 mt-2">
                <svg
                  className="w-4 h-4 text-gray-600 dark:text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-sm dark:text-white">
                  {petDetails.seller.email}
                </span>
              </div>
            </div>
          </>
        )}
      </main>

      {/* Bottom Fixed Button */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white dark:bg-[#101935] border-t dark:border-[#1A2542] flex justify-center">
        <button
          onClick={handleContinue}
          className="w-full bg-primary text-white py-3 rounded-lg font-medium"
        >
          {isAdoption ? "Continue" : "Contact Seller"}
        </button>
      </div>

      {/* Testing toggle - Hidden in production */}
      {isAdoption && (
        <div className="fixed bottom-20 right-4 opacity-30 hover:opacity-100">
          <button
            onClick={() => setIsMember(!isMember)}
            className="bg-gray-200 dark:bg-gray-700 text-xs px-2 py-1 rounded"
          >
            {isMember ? "Test as Non-Member" : "Test as Member"}
          </button>
        </div>
      )}
    </div>
  );
}
