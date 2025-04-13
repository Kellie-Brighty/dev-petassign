import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BottomNavigation from "../components/dashboard/BottomNavigation";
import ChatOverlay from "../components/ChatOverlay";
import ThemeToggle from "../components/ThemeToggle";

export default function MateDetailsPage() {
  const navigate = useNavigate();
  // const { id } = useParams();
  const [activeTab, setActiveTab] = useState("market");
  const [isChatOpen, setIsChatOpen] = useState(false);
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

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // This would normally be fetched from an API based on the id
  const mateDetails = {
    id: "1",
    name: "Bella",
    title: "I want to mate my Siberian Huskie",
    breed: "Siberian Huskie",
    description:
      "Meet Bella, a loving and energetic 2-year-old Siberian Husky looking for her perfect mate. Bella is a bundle of joy who loves to play fetch, go on walks, and snuggle up for belly rubs. She has a friendly and gentle temperament, making her a perfect companion for families with children or other pets.",
    image:
      "https://images.unsplash.com/photo-1605568427860-9623d4a56b0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    gender: "Male",
    age: "2 years",
    healthStatus: "Excellent",
    owner: {
      name: "James",
      location: {
        city: "Ibadan",
        region: "Nigeria",
        fullAddress: "Ojoo, Oyo State, Ibadan, Nigeria",
      },
      contact: "+234 81 7489 6017",
      avatar: "https://randomuser.me/api/portraits/men/36.jpg",
    },
    posted: "2 days ago",
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0A1121] relative">
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
        <div className="absolute left-16 top-1/2 transform -translate-y-1/2">
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
            src={mateDetails.image}
            alt={mateDetails.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Owner Info */}
        <div className="p-4 bg-white dark:bg-[#101935]">
          <h1 className="text-lg font-semibold dark:text-white">
            {mateDetails.title}
          </h1>
          <div className="mt-3 flex items-center">
            <div
              className="flex items-center cursor-pointer"
              onClick={() =>
                navigate(
                  `/user/${mateDetails.owner.name
                    .toLowerCase()
                    .replace(" ", "-")}`
                )
              }
            >
              <img
                src={mateDetails.owner.avatar}
                alt={mateDetails.owner.name}
                className="w-6 h-6 rounded-full mr-2"
              />
              <span className="text-sm font-medium dark:text-white">
                {mateDetails.owner.name}
              </span>
            </div>
            <span className="mx-2 text-gray-400">•</span>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {mateDetails.posted}
            </span>
          </div>
        </div>

        {/* Description Section */}
        <div className="mt-2 p-4 bg-white dark:bg-[#101935]">
          <h2 className="text-base font-medium mb-2 dark:text-white">
            Description
          </h2>
          <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
            {mateDetails.description}
          </p>
        </div>

        {/* Pet Details */}
        <div className="mt-2 p-4 bg-white dark:bg-[#101935]">
          <h2 className="text-base font-medium mb-3 dark:text-white">
            Pet Details
          </h2>

          <div className="grid grid-cols-2 gap-y-4">
            <div>
              <p className="text-xs text-gray-500 dark:text-gray-400">Gender</p>
              <p className="text-sm font-medium dark:text-white">
                {mateDetails.gender}
              </p>
            </div>
            <div>
              <p className="text-xs text-gray-500 dark:text-gray-400">Age</p>
              <p className="text-sm font-medium dark:text-white">
                {mateDetails.age}
              </p>
            </div>
            <div>
              <p className="text-xs text-gray-500 dark:text-gray-400">Breed</p>
              <p className="text-sm font-medium dark:text-white">
                {mateDetails.breed}
              </p>
            </div>
            <div>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Health Status
              </p>
              <p className="text-sm font-medium dark:text-white">
                {mateDetails.healthStatus}
              </p>
            </div>
          </div>
        </div>

        {/* Location Section */}
        <div className="mt-2 p-4 bg-white dark:bg-[#101935]">
          <h2 className="text-base font-medium mb-2 dark:text-white">
            Location
          </h2>
          <div className="flex items-start">
            <svg
              className="w-4 h-4 text-gray-600 dark:text-gray-400 mt-0.5 mr-2 flex-shrink-0"
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
            <div>
              <p className="text-sm font-medium dark:text-white">
                {mateDetails.owner.location.city},{" "}
                {mateDetails.owner.location.region}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                {mateDetails.owner.location.fullAddress}
              </p>
            </div>
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
              {mateDetails.owner.contact}
            </span>
          </div>
        </div>
      </main>

      {/* Bottom Fixed Button */}
      <div className="fixed bottom-16 left-0 right-0 p-4 bg-white dark:bg-[#101935] border-t dark:border-[#1A2542] flex justify-center">
        <button
          className="w-full bg-primary text-white py-3 rounded-lg font-medium"
          onClick={() => setIsChatOpen(true)}
        >
          Send a Message
        </button>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 z-50">
        <BottomNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>

      {/* Chat Overlay */}
      <ChatOverlay
        isOpen={isChatOpen}
        onClose={() => setIsChatOpen(false)}
        recipient={{
          id: mateDetails.owner.name.toLowerCase().replace(" ", "-"),
          name: mateDetails.owner.name,
          avatar: mateDetails.owner.avatar,
        }}
        petPrice={300}
      />
    </div>
  );
}
