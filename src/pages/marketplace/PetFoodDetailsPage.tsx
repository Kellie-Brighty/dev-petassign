import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ThemeToggle from "../../components/ThemeToggle";

export default function PetFoodDetailsPage() {
  const navigate = useNavigate();
  const { id } = useParams();
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

  // This would normally be fetched from an API based on the id
  const petFoodDetails = (() => {
    // Sample pet food data based on ID
    const products = {
      "cat-food-1": {
        id: "cat-food-1",
        name: "Premium Cat Food - Adult Formula",
        price: 8500,
        description:
          "Premium cat food formulated for adult cats of all breeds. Made with real fish as the first ingredient, this balanced nutrition helps maintain healthy muscles and provides energy for an active lifestyle. Contains essential vitamins and minerals with no artificial colors, flavors, or preservatives.",
        image:
          "https://images.unsplash.com/photo-1589924729425-77e56bf53519?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        features: {
          suitableFor: "Adult Cats (1-7 years)",
          weight: "5 kg",
          expiryDate: "12 months from purchase",
          ingredients:
            "Fish, Brown Rice, Vegetables, Fish Oil, Vitamins & Minerals",
          specialFeatures: "Hairball Control, Dental Care Formula",
        },
        location: {
          city: "Lagos",
          region: "Nigeria",
          fullAddress: "Lekki Phase 1, Lagos, Nigeria",
        },
        seller: {
          name: "Premium Pet Supplies",
          phone: "+234 80 5234 7865",
          email: "premiumsupplies@example.com",
        },
      },
      "cat-food-2": {
        id: "cat-food-2",
        name: "Gourmet Cat Food - Seafood Mix",
        price: 9200,
        description:
          "Gourmet seafood mix specially formulated for cats with the finest ingredients. This recipe includes real seafood chunks in a savory gravy that cats love. Rich in omega-3 fatty acids to support skin and coat health.",
        image:
          "https://images.unsplash.com/photo-1600623471616-8c1966c91ff6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        features: {
          suitableFor: "All cats (6 months and older)",
          weight: "3 kg",
          expiryDate: "18 months from purchase",
          ingredients: "Tuna, Salmon, Shrimp, Fish Broth, Vitamins & Minerals",
          specialFeatures: "Grain-free, No artificial preservatives",
        },
        location: {
          city: "Abuja",
          region: "Nigeria",
          fullAddress: "Wuse 2, Abuja, Nigeria",
        },
        seller: {
          name: "PetGourmet Nigeria",
          phone: "+234 81 2356 4432",
          email: "sales@petgourmet.ng",
        },
      },
      "dog-food-1": {
        id: "dog-food-1",
        name: "Premium Dry Dog Food - Adult Formula",
        price: 12500,
        description:
          "High-quality dry dog food formulated for adult dogs of all breeds. Made with real chicken as the first ingredient, this balanced nutrition helps maintain healthy muscles and provides energy for an active lifestyle. Contains essential vitamins and minerals with no artificial colors, flavors, or preservatives.",
        image:
          "https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        features: {
          suitableFor: "Adult Dogs (1-7 years)",
          weight: "10 kg",
          expiryDate: "12 months from purchase",
          ingredients:
            "Chicken, Brown Rice, Vegetables, Fish Oil, Vitamins & Minerals",
          specialFeatures: "Grain-free, High Protein, Supports Joint Health",
        },
        location: {
          city: "Lagos",
          region: "Nigeria",
          fullAddress: "Lekki Phase 1, Lagos, Nigeria",
        },
        seller: {
          name: "Premium Pet Supplies",
          phone: "+234 80 5234 7865",
          email: "premiumsupplies@example.com",
        },
      },
      "bird-food-1": {
        id: "bird-food-1",
        name: "Bird Seed Mix - Premium Blend",
        price: 4500,
        description:
          "Premium blend of seeds and grains formulated for pet birds of all sizes. Contains a mix of nutritious seeds, dried fruits, and supplements to provide complete nutrition for your feathered friends.",
        image:
          "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        features: {
          suitableFor: "All pet birds (parakeets, canaries, finches)",
          weight: "2 kg",
          expiryDate: "6 months from purchase",
          ingredients:
            "Sunflower Seeds, Millet, Dried Fruits, Flax Seeds, Vitamins",
          specialFeatures: "No artificial colors, Promotes healthy plumage",
        },
        location: {
          city: "Port Harcourt",
          region: "Nigeria",
          fullAddress: "GRA Phase 2, Port Harcourt, Nigeria",
        },
        seller: {
          name: "Bird World Nigeria",
          phone: "+234 80 3421 5678",
          email: "info@birdworld.ng",
        },
      },
    };

    // Return the product that matches the ID, or default to the first product
    return products[id as keyof typeof products] || products["dog-food-1"];
  })();

  const handleMessageSeller = () => {
    // Navigate to chat with seller
    navigate("/chat", {
      state: {
        recipientId: "seller-" + petFoodDetails.id,
        recipientName: petFoodDetails.seller.name,
        productId: petFoodDetails.id,
        productName: petFoodDetails.name,
        productImage: petFoodDetails.image,
        isNewConversation: true,
      },
    });
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
          placeholder="Search pet foods, treats, supplements..."
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
        {/* Product Image */}
        <div className="w-full aspect-square bg-white dark:bg-[#101935]">
          <img
            src={petFoodDetails.image}
            alt={petFoodDetails.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Product Details */}
        <div className="p-4 bg-white dark:bg-[#101935]">
          <h1 className="text-lg font-medium dark:text-white">
            {petFoodDetails.name}
          </h1>
          <p className="text-primary text-xl font-semibold mt-1">
            ₦{petFoodDetails.price.toLocaleString()}
          </p>
          <div className="mt-2 flex items-center">
            <div className="flex items-center mr-3">
              <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full dark:bg-green-900/30 dark:text-green-400">
                In Stock
              </span>
            </div>
            <div className="flex items-center">
              <svg
                className="w-4 h-4 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg
                className="w-4 h-4 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg
                className="w-4 h-4 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg
                className="w-4 h-4 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg
                className="w-4 h-4 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <span className="ml-1 text-xs text-gray-500 dark:text-gray-400">
                (24 reviews)
              </span>
            </div>
          </div>
        </div>

        {/* Description Section */}
        <div className="mt-2 p-4 bg-white dark:bg-[#101935]">
          <h2 className="text-base font-medium mb-2 dark:text-white">
            Description
          </h2>
          <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
            {petFoodDetails.description}
          </p>
        </div>

        {/* Product Features */}
        <div className="mt-2 p-4 bg-white dark:bg-[#101935]">
          <h2 className="text-base font-medium mb-3 dark:text-white">
            Product Details
          </h2>

          <div className="space-y-3">
            <div className="flex justify-between border-b pb-2 border-gray-100 dark:border-[#1A2542]">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Suitable For
              </p>
              <p className="text-sm font-medium dark:text-white">
                {petFoodDetails.features.suitableFor}
              </p>
            </div>

            <div className="flex justify-between border-b pb-2 border-gray-100 dark:border-[#1A2542]">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Package Weight
              </p>
              <p className="text-sm font-medium dark:text-white">
                {petFoodDetails.features.weight}
              </p>
            </div>

            <div className="flex justify-between border-b pb-2 border-gray-100 dark:border-[#1A2542]">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Shelf Life
              </p>
              <p className="text-sm font-medium dark:text-white">
                {petFoodDetails.features.expiryDate}
              </p>
            </div>

            <div className="flex justify-between border-b pb-2 border-gray-100 dark:border-[#1A2542]">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Key Ingredients
              </p>
              <p className="text-sm font-medium dark:text-white text-right">
                {petFoodDetails.features.ingredients}
              </p>
            </div>

            <div className="flex justify-between">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Special Features
              </p>
              <p className="text-sm font-medium dark:text-white text-right">
                {petFoodDetails.features.specialFeatures}
              </p>
            </div>
          </div>
        </div>

        {/* Seller & Location */}
        <div className="mt-2 p-4 bg-white dark:bg-[#101935]">
          <h2 className="text-base font-medium mb-3 dark:text-white">
            Seller Information
          </h2>

          <div className="flex items-center mb-4">
            <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center text-primary mr-3">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <div>
              <p className="text-sm font-medium dark:text-white">
                {petFoodDetails.seller.name}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Verified Seller
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center space-x-3">
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
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span className="text-sm dark:text-white">
                {petFoodDetails.location.fullAddress}
              </span>
            </div>

            <div className="flex items-center space-x-3">
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
                {petFoodDetails.seller.phone}
              </span>
            </div>

            <div className="flex items-center space-x-3">
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
                {petFoodDetails.seller.email}
              </span>
            </div>
          </div>
        </div>

        {/* Delivery Information */}
        <div className="mt-2 p-4 bg-white dark:bg-[#101935]">
          <h2 className="text-base font-medium mb-2 dark:text-white">
            Delivery Information
          </h2>
          <div className="flex items-center space-x-2 mb-2">
            <svg
              className="w-5 h-5 text-primary"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
              <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H11a1 1 0 001-1v-1h5a1 1 0 001-1v-4a1 1 0 00-.293-.707L14.414 5H13V4a1 1 0 00-1-1H3zM13 7l2.293 2.293A1 1 0 0116 10v3h-5V7h2z" />
            </svg>
            <span className="text-sm font-medium dark:text-white">
              Free delivery within city limits
            </span>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Estimated delivery: 1-3 business days
          </p>
        </div>
      </main>

      {/* Bottom Fixed Buttons */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white dark:bg-[#101935] border-t dark:border-[#1A2542] flex space-x-3">
        <button className="flex-1 bg-blue-50 dark:bg-blue-900/20 text-primary py-3 rounded-lg font-medium">
          Add to Cart
        </button>
        <button
          onClick={handleMessageSeller}
          className="flex-1 bg-primary text-white py-3 rounded-lg font-medium hover:bg-primary-dark transition-colors"
        >
          Message Seller
        </button>
      </div>
    </div>
  );
}
