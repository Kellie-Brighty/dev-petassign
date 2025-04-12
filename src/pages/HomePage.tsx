import { useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "../components/dashboard/SearchBar";
import PetCategories from "../components/dashboard/PetCategories";
import FeaturedPet from "../components/dashboard/FeaturedPet";
import ProductSection from "../components/dashboard/ProductSection";
import BottomNavigation from "../components/dashboard/BottomNavigation";

export default function HomePage() {
  const [activeTab, setActiveTab] = useState("explore");

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Mobile Header */}
      <header className="lg:hidden bg-white px-4 py-3 flex items-center justify-between sticky top-0 z-50 shadow-sm">
        <div>
          <h1 className="text-base font-semibold">Hi Heritage,</h1>
          <div className="text-xs text-primary font-medium">
            20 credits left
          </div>
        </div>
        <div className="relative">
          <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
            <svg
              className="w-4 h-4 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
          </button>
        </div>
      </header>

      {/* Desktop Header */}
      <header className="hidden lg:block bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <div className="text-primary font-bold text-2xl">PetAssign</div>
            <nav className="ml-10 hidden md:block">
              <ul className="flex space-x-8">
                <li className="text-primary font-medium">Home</li>
                <li className="text-gray-500 hover:text-primary">
                  Marketplace
                </li>
                <li className="text-gray-500 hover:text-primary">Community</li>
                <li className="text-gray-500 hover:text-primary">Messages</li>
              </ul>
            </nav>
          </div>
          <div className="flex items-center space-x-6">
            <div className="relative w-64 hidden md:block">
              <input
                type="text"
                placeholder="Search pets, products..."
                className="w-full py-2 pl-10 pr-4 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                <svg
                  className="w-5 h-5 text-gray-400"
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
            </div>
            <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500">
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
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
            </button>
            <button className="w-10 h-10 rounded-full overflow-hidden">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pb-24 lg:pb-8">
        {/* Mobile Search */}
        <div className="lg:hidden px-4 py-3 bg-white shadow-sm">
          <SearchBar />
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden">
          {/* Pet Categories */}
          <div className="mt-3 bg-white shadow-sm py-4">
            <PetCategories />
          </div>

          {/* Pets for Sale Section with Title */}
          <div className="mt-5">
            <div className="flex items-center justify-between mb-3 px-4">
              <h2 className="text-base font-medium text-gray-800">
                Pets for Sale
              </h2>
              <Link to="/marketplace" className="text-sm text-primary">
                &gt;
              </Link>
            </div>
            <FeaturedPet />
          </div>

          {/* Animal Food Section */}
          <div className="mt-5 bg-white shadow-sm py-4">
            <ProductSection />
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:block max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-8">
              {/* Welcome Banner */}
              <div className="bg-gradient-to-r from-primary to-primary-dark rounded-2xl p-8 text-white mb-8 shadow-md">
                <h2 className="text-xl md:text-2xl font-bold">
                  Welcome to PetAssign!
                </h2>
                <p className="my-2 opacity-90 text-sm md:text-base">
                  Discover amazing pets, connect with owners, and find
                  everything your pet needs.
                </p>
                <button className="mt-3 bg-white text-primary font-medium px-5 py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md transition-shadow">
                  Explore Marketplace
                </button>
              </div>

              {/* Pet Categories */}
              <div className="mb-8 bg-white rounded-xl p-6 shadow-sm">
                <h2 className="text-lg md:text-xl font-bold mb-4 text-gray-800">
                  Browse by Category
                </h2>
                <PetCategories />
              </div>

              {/* Featured Pets */}
              <div className="mb-8 bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg md:text-xl font-bold text-gray-800">
                    Pets for Sale
                  </h2>
                  <Link
                    to="/marketplace"
                    className="text-primary text-sm font-medium hover:underline"
                  >
                    View All
                  </Link>
                </div>
                <FeaturedPet />
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4">
              <div className="bg-white rounded-xl shadow-sm p-6 mb-6 border border-gray-100">
                <h3 className="font-semibold text-lg mb-4 text-gray-800">
                  Community Activity
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <img
                      src="https://randomuser.me/api/portraits/women/44.jpg"
                      alt="User"
                      className="w-10 h-10 rounded-full"
                      loading="lazy"
                    />
                    <div>
                      <p className="text-sm">
                        <span className="font-medium">Sarah</span> added a new
                        pet for adoption:
                        <span className="text-primary font-medium">
                          {" "}
                          "Max the Labrador"
                        </span>
                      </p>
                      <p className="text-xs text-gray-500 mt-1">2 hours ago</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <img
                      src="https://randomuser.me/api/portraits/men/47.jpg"
                      alt="User"
                      className="w-10 h-10 rounded-full"
                      loading="lazy"
                    />
                    <div>
                      <p className="text-sm">
                        <span className="font-medium">Michael</span> posted in
                        Pet Care Forum:
                        <span className="text-primary font-medium">
                          {" "}
                          "Best food for kittens?"
                        </span>
                      </p>
                      <p className="text-xs text-gray-500 mt-1">5 hours ago</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <img
                      src="https://randomuser.me/api/portraits/women/65.jpg"
                      alt="User"
                      className="w-10 h-10 rounded-full"
                      loading="lazy"
                    />
                    <div>
                      <p className="text-sm">
                        <span className="font-medium">Jessica</span> reviewed
                        <span className="text-primary font-medium">
                          {" "}
                          "Premium Pet Food"
                        </span>
                      </p>
                      <p className="text-xs text-gray-500 mt-1">1 day ago</p>
                    </div>
                  </div>
                </div>
                <button className="w-full mt-4 text-center text-sm text-primary font-medium hover:underline">
                  View All Activity
                </button>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <h3 className="font-semibold text-lg mb-4 text-gray-800">
                  Upcoming Events
                </h3>
                <div className="space-y-4">
                  <div className="border border-gray-200 rounded-lg p-3 bg-gray-50 hover:bg-white transition-colors">
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-primary font-semibold">
                        Pet Adoption Day
                      </div>
                      <div className="text-xs bg-primary/10 text-primary font-medium px-2 py-1 rounded">
                        Jun 24
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">
                      Find your perfect companion at our monthly adoption event.
                    </p>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-3 bg-gray-50 hover:bg-white transition-colors">
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-primary font-semibold">
                        Dog Training Workshop
                      </div>
                      <div className="text-xs bg-primary/10 text-primary font-medium px-2 py-1 rounded">
                        Jun 28
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">
                      Learn essential training techniques from professional
                      trainers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Floating Action Button */}
      <div className="fixed bottom-20 right-4 z-50 lg:bottom-10">
        <button className="w-14 h-14 rounded-full bg-primary text-white shadow-lg flex items-center justify-center hover:bg-primary-dark transition-colors">
          <svg
            className="w-7 h-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 z-50">
        <BottomNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
    </div>
  );
}
