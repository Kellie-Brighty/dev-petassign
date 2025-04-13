import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BottomNavigation from "../components/dashboard/BottomNavigation";
import ThemeToggle from "../components/ThemeToggle";

// Import SVG assets
import cerealImage from "../assets/cereal.svg";
import sleepCatImage from "../assets/sleep-cat.svg";

// Define types for the sales items
interface SaleItem {
  id: string;
  name: string;
  category: string;
  subcategory: string;
  image: string;
  price: number;
  date: string;
}

// Group sales by month
interface MonthlySales {
  month: string;
  year: number;
  items: SaleItem[];
  total: number;
}

export default function SalesHistoryPage() {
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

  // Mock sales history data
  const mockSalesHistory: MonthlySales[] = [
    {
      month: "May",
      year: 2024,
      total: 60,
      items: [
        {
          id: "1",
          name: "Wholesome Whiskers Organic Cat Food",
          category: "Pet food",
          subcategory: "Cat food",
          image: cerealImage,
          price: 6.03,
          date: "24 - 05",
        },
        {
          id: "2",
          name: "Adopt James the Furry Cat",
          category: "Pet adoption",
          subcategory: "Cat",
          image: sleepCatImage,
          price: 6.03,
          date: "24 - 05",
        },
      ],
    },
    {
      month: "April",
      year: 2024,
      total: 60,
      items: [
        {
          id: "3",
          name: "Wholesome Whiskers Organic Cat Food",
          category: "Pet food",
          subcategory: "Cat food",
          image: cerealImage,
          price: 6.03,
          date: "24 - 04",
        },
        {
          id: "4",
          name: "Wholesome Whiskers Organic Cat Food",
          category: "Pet food",
          subcategory: "Cat food",
          image: cerealImage,
          price: 8.03, // Different price for one item in April
          date: "24 - 04",
        },
      ],
    },
    {
      month: "March",
      year: 2024,
      total: 60,
      items: [
        {
          id: "5",
          name: "Wholesome Whiskers Organic Cat Food",
          category: "Pet food",
          subcategory: "Cat food",
          image: cerealImage,
          price: 6.03,
          date: "24 - 03",
        },
        {
          id: "6",
          name: "Wholesome Whiskers Organic Cat Food",
          category: "Pet food",
          subcategory: "Cat food",
          image: cerealImage,
          price: 6.03,
          date: "24 - 03",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-[#0A1121] flex flex-col w-screen">
      {/* Header */}
      <header className="px-4 py-3 flex items-center justify-between sticky top-0 z-50 bg-white dark:bg-[#101935] border-b dark:border-[#1A2542] shadow-sm">
        <div className="flex items-center">
          <button onClick={() => navigate("/account")} className="p-1 mr-2">
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
            Sales History
          </h1>
        </div>
        <div className="flex items-center space-x-2">
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
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto pb-20 lg:pb-8">
        {/* Sales History */}
        <div className="divide-y divide-gray-200 dark:divide-[#1A2542]">
          {mockSalesHistory.map((monthData, index) => (
            <div key={index} className="bg-white dark:bg-[#101935]">
              {/* Month Header */}
              <div className="flex items-center justify-between px-4 py-2 bg-gray-50 dark:bg-[#1A2542]">
                <span className="text-sm font-medium text-gray-700 dark:text-white">
                  {monthData.month} {monthData.year}
                </span>
                <span className="text-sm font-medium text-gray-700 dark:text-white">
                  Total - ₦{monthData.total}
                </span>
              </div>

              {/* Month Items */}
              <div className="divide-y divide-gray-100 dark:divide-[#1A2542]">
                {monthData.items.map((item) => (
                  <div key={item.id} className="flex p-4">
                    <div className="h-14 w-14 rounded-md overflow-hidden bg-gray-100 dark:bg-[#1A2542] flex items-center justify-center">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-10 w-10 object-contain"
                      />
                    </div>
                    <div className="ml-3 flex-1">
                      <div className="text-sm font-medium text-gray-900 dark:text-white">
                        {item.name}
                      </div>
                      <div className="flex items-center mt-1">
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          {item.category}
                        </span>
                        <span className="mx-2 text-xs text-gray-300 dark:text-gray-600">
                          |
                        </span>
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          {item.date}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <span className="text-sm font-medium text-gray-900 dark:text-white">
                        ₦{item.price.toFixed(2)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 z-50">
        <BottomNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
    </div>
  );
}
