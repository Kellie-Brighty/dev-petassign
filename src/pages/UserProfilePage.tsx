import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BottomNavigation from "../components/dashboard/BottomNavigation";
import ThemeToggle from "../components/ThemeToggle";

export default function UserProfilePage() {
  const navigate = useNavigate();
  // const { userId } = useParams();
  const [activeTab, setActiveTab] = useState("explore");
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

  // This would normally be fetched from an API based on the userId
  const userProfile = {
    id: "dominik123",
    name: "Dominik Martin",
    bio: "I'm John Smith, a devoted pet lover and animal advocate. Volunteer at a local shelter, care for rescued pets at home, and share my passion on my social channels.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    bannerImage:
      "https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    languages: ["German", "English"],
    location: "Albuquerque",
    posts: [
      {
        id: "p1",
        image:
          "https://images.unsplash.com/photo-1583511655826-05700442b31b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      },
      {
        id: "p2",
        image:
          "https://images.unsplash.com/photo-1587300003388-59208cc962cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      },
      {
        id: "p3",
        image:
          "https://images.unsplash.com/photo-1589441161642-e7f458e34da4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      },
      {
        id: "p4",
        image:
          "https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      },
      {
        id: "p5",
        image:
          "https://images.unsplash.com/photo-1534361960057-19889db9621e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      },
      {
        id: "p6",
        image:
          "https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      },
      {
        id: "p7",
        image:
          "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      },
      {
        id: "p8",
        image:
          "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      },
      {
        id: "p9",
        image:
          "https://images.unsplash.com/photo-1623387641168-d9803ddd3f35?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      },
    ],
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
        <h1 className="text-lg font-medium dark:text-white flex-1">Profile</h1>
        <ThemeToggle />
      </header>

      {/* Main Content */}
      <main className="pb-20">
        {/* Banner Image */}
        <div className="relative">
          <div className="h-32 bg-gray-200 dark:bg-[#1A2542] w-full">
            <img
              src={userProfile.bannerImage}
              alt="Banner"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Profile Avatar - Positioned over banner */}
          <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-12">
            <div className="w-24 h-24 rounded-full border-4 border-white dark:border-[#101935] bg-white dark:bg-[#101935]">
              <img
                src={userProfile.avatar}
                alt={userProfile.name}
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Profile Info */}
        <div className="mt-14 text-center px-4">
          <h1 className="text-xl font-bold dark:text-white">
            {userProfile.name}
          </h1>
          <p className="text-sm text-gray-600 dark:text-gray-300 mt-1 leading-relaxed">
            {userProfile.bio}
          </p>

          {/* Skills Badges */}
          <div className="flex justify-center gap-2 mt-3">
            <div className="inline-flex items-center bg-gray-100 dark:bg-[#1A2542] px-3 py-1 rounded-full">
              <svg
                className="w-4 h-4 mr-1 text-gray-500 dark:text-gray-400"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2 12H22"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-xs dark:text-white">
                {userProfile.location}
              </span>
            </div>
            {userProfile.languages.map((language, index) => (
              <div
                key={index}
                className="inline-flex items-center bg-gray-100 dark:bg-[#1A2542] px-3 py-1 rounded-full"
              >
                <svg
                  className="w-4 h-4 mr-1 text-gray-500 dark:text-gray-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.87 15.07L10.33 12.56C10.1453 12.3954 10.0159 12.1804 9.95557 11.9427C9.89523 11.705 9.90671 11.4552 9.98845 11.2245C10.0702 10.9938 10.2189 10.7909 10.4156 10.6428C10.6123 10.4948 10.8481 10.4088 11.09 10.3966L18.09 10.0066C18.368 9.99353 18.6453 10.064 18.8818 10.2071C19.1184 10.3502 19.3034 10.5582 19.4118 10.8066C19.52 11.0549 19.5466 11.3312 19.4879 11.5954C19.4291 11.8596 19.2883 12.0983 19.09 12.2766L15.09 16.0766C14.9035 16.2539 14.6649 16.3739 14.4094 16.421C14.1538 16.4681 13.8911 16.4405 13.65 16.3416C13.4207 16.2307 13.2265 16.0542 13.09 15.8366L12.87 15.0766"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5 3V7M3 5H7M6 17V21M4 19H8M11 3L13 7L11 11L9 7L11 3Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-xs dark:text-white">{language}</span>
              </div>
            ))}
          </div>

          {/* Message Button */}
          <div className="mt-4">
            <button className="bg-primary text-white w-full py-2.5 rounded-lg font-medium">
              Message
            </button>
          </div>
        </div>

        {/* Posts Label */}
        <div className="mt-6 px-4">
          <h2 className="text-base font-medium dark:text-white">Posts</h2>
        </div>

        {/* Posts Grid */}
        <div className="mt-2 px-1">
          <div className="grid grid-cols-3 gap-1">
            {userProfile.posts.map((post) => (
              <div
                key={post.id}
                className="aspect-square bg-gray-200 dark:bg-[#1A2542]"
              >
                <img
                  src={post.image}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 z-50">
        <BottomNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
    </div>
  );
}
