import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BottomNavigation from "../components/dashboard/BottomNavigation";
import ThemeToggle from "../components/ThemeToggle";

export default function MyProfilePage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("account");
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

  // This would normally come from your authentication system
  const userProfile = {
    id: "heritage123",
    name: "Atiba Heritage",
    username: "@heritage",
    email: "heritage@example.com",
    phone: "+1 234 567 8900",
    location: "New York, USA",
    bio: "Pet lover and enthusiast. I have 2 dogs and 1 cat.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    coverPhoto:
      "https://images.unsplash.com/photo-1450778869180-41d0601e046e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    pets: [
      {
        id: 1,
        name: "Max",
        species: "Dog",
        breed: "Golden Retriever",
        age: 3,
        photo:
          "https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      },
      {
        id: 2,
        name: "Bella",
        species: "Cat",
        breed: "Persian",
        age: 2,
        photo:
          "https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      },
    ],
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
            My Profile
          </h1>
        </div>

        <div className="flex items-center space-x-3">
          <ThemeToggle />
          <button className="p-2">
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
                d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
              />
            </svg>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto pb-28 lg:pb-8 w-full">
        {/* Cover Photo */}
        <div className="relative h-40 lg:h-64 bg-gray-300 dark:bg-gray-700">
          <img
            src={userProfile.coverPhoto}
            alt="Cover"
            className="w-full h-full object-cover"
          />
          <button className="absolute bottom-2 right-2 bg-white dark:bg-[#101935] p-2 rounded-full shadow-md hover:shadow-lg transition-shadow">
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
                d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </button>
        </div>

        {/* Profile Section */}
        <div className="relative px-4 pt-0 pb-4 lg:max-w-4xl lg:mx-auto">
          <div className="flex flex-col items-center">
            {/* Avatar */}
            <div className="relative -mt-16 mb-3">
              <div className="w-28 h-28 rounded-full border-4 border-white dark:border-[#101935] overflow-hidden bg-white dark:bg-[#101935] shadow-md">
                <img
                  src={userProfile.avatar}
                  alt={userProfile.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <button className="absolute bottom-0 right-0 bg-primary p-2 rounded-full text-white shadow-md hover:shadow-lg transition-shadow">
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
                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                  />
                </svg>
              </button>
            </div>

            {/* User Info */}
            <h2 className="text-xl font-semibold text-center text-gray-900 dark:text-white">
              {userProfile.name}
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
              {userProfile.username}
            </p>
            <div className="text-sm text-gray-600 dark:text-gray-300 mb-4 flex items-center">
              <svg
                className="w-4 h-4 mr-1 text-primary"
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
              {userProfile.location}
            </div>

            {/* Bio */}
            <p className="text-sm text-gray-700 dark:text-gray-300 text-center max-w-xs mb-6">
              {userProfile.bio}
            </p>

            {/* Edit Profile Button */}
            <button
              onClick={() => navigate("/edit-profile")}
              className="bg-primary text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-primary-dark transition-colors mb-6 shadow-md hover:shadow-lg"
            >
              Edit Profile
            </button>
          </div>

          {/* Profile Stats */}
          <div className="grid grid-cols-3 gap-2 bg-white dark:bg-[#101935] rounded-xl shadow-md p-4 mb-6 border border-gray-200 dark:border-[#1A2542]">
            <div className="text-center">
              <p className="text-2xl font-bold text-gray-800 dark:text-white">
                12
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">Posts</p>
            </div>
            <div className="text-center border-x border-gray-200 dark:border-[#1A2542]">
              <p className="text-2xl font-bold text-gray-800 dark:text-white">
                248
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Followers
              </p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-gray-800 dark:text-white">
                142
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Following
              </p>
            </div>
          </div>

          {/* Desktop Layout Container */}
          <div className="lg:grid lg:grid-cols-3 lg:gap-6">
            {/* My Pets Section */}
            <div className="bg-white dark:bg-[#101935] rounded-xl shadow-md p-4 mb-6 border border-gray-200 dark:border-[#1A2542] lg:col-span-2">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-md font-semibold text-gray-900 dark:text-white">
                  My Pets
                </h3>
                <button
                  onClick={() => navigate("/add-pet")}
                  className="text-primary text-sm font-medium flex items-center hover:text-primary-dark transition-colors"
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
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                  Add Pet
                </button>
              </div>

              <div className="grid grid-cols-2 gap-3 lg:grid-cols-3">
                {userProfile.pets.map((pet) => (
                  <div
                    key={pet.id}
                    className="bg-white dark:bg-[#1A2542] rounded-lg p-3 cursor-pointer shadow-sm hover:shadow-md transition-shadow border border-gray-200 dark:border-[#1A2542]"
                    onClick={() => navigate(`/pets/${pet.id}`)}
                  >
                    <div className="w-full h-24 rounded-lg overflow-hidden mb-2">
                      <img
                        src={pet.photo}
                        alt={pet.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h4 className="font-medium text-sm text-gray-900 dark:text-white">
                      {pet.name}
                    </h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {pet.breed} • {pet.age} years old
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Info Section */}
            <div className="bg-white dark:bg-[#101935] rounded-xl shadow-md p-4 mb-6 border border-gray-200 dark:border-[#1A2542] h-fit">
              <h3 className="text-md font-semibold text-gray-900 dark:text-white mb-4">
                Contact Info
              </h3>

              <div className="space-y-3">
                <div className="flex items-start">
                  <svg
                    className="w-5 h-5 text-gray-500 dark:text-gray-400 mr-3 mt-0.5"
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
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      Email
                    </p>
                    <p className="text-sm text-gray-800 dark:text-white">
                      {userProfile.email}
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <svg
                    className="w-5 h-5 text-gray-500 dark:text-gray-400 mr-3 mt-0.5"
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
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      Phone
                    </p>
                    <p className="text-sm text-gray-800 dark:text-white">
                      {userProfile.phone}
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <svg
                    className="w-5 h-5 text-gray-500 dark:text-gray-400 mr-3 mt-0.5"
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
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      Location
                    </p>
                    <p className="text-sm text-gray-800 dark:text-white">
                      {userProfile.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 z-50">
        <BottomNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
    </div>
  );
}
