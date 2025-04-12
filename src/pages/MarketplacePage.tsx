import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import BottomNavigation from "../components/dashboard/BottomNavigation";

// Add interface for category filter
interface CategoryFilter {
  id: string;
  name: string;
  active?: boolean;
}

// Category filters
const categoryFilters: CategoryFilter[] = [
  { id: "pet-food", name: "Pet food" },
  { id: "pets", name: "Pets" },
  { id: "adoptions", name: "Adoptions" },
  { id: "mates", name: "Mates" },
];

// Featured listing
const featuredListing = {
  id: "husky-pack",
  title: "3 Siberian Huskies for Sale",
  description: "I have these 3 Huskies that were gifted me buy my ex..",
  price: 300,
  gender: "Male",
  age: "2 years",
  images: [
    "https://images.unsplash.com/photo-1605568427860-9623d4a56b0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    "https://images.unsplash.com/photo-1590419690008-905895e8fe0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
  ],
  seller: {
    name: "James",
    location: "Kips Bay",
    avatar: "https://randomuser.me/api/portraits/men/36.jpg",
    timeAgo: "2 hrs ago",
  },
};

// More pet listings
const morePetListings = [
  {
    id: "golden-retriever",
    title: "Golden Retriever Puppies",
    price: 750,
    image:
      "https://images.unsplash.com/photo-1633722715888-151df1b70ca6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    location: "Brooklyn, NY",
    date: "1 day ago",
  },
  {
    id: "maine-coon",
    title: "Maine Coon Kittens",
    price: 650,
    image:
      "https://images.unsplash.com/photo-1608848461950-0fe51dfc41cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    location: "Manhattan, NY",
    date: "3 days ago",
  },
  {
    id: "parrot",
    title: "African Grey Parrot",
    price: 1200,
    image:
      "https://images.unsplash.com/photo-1552728089-57bdde30beb3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    location: "Queens, NY",
    date: "5 days ago",
  },
];

// Pet food products
const petFoodProducts = [
  {
    id: "cat-food-1",
    name: "Cat food",
    rating: 4.4,
    reviews: 20210,
    image:
      "https://images.unsplash.com/photo-1589924729425-77e56bf53519?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
  },
  {
    id: "cat-food-2",
    name: "Cat food",
    rating: 4.8,
    reviews: 20210,
    image:
      "https://images.unsplash.com/photo-1600623471616-8c1966c91ff6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
  },
];

// More pet food products for desktop
const morePetFoodProducts = [
  {
    id: "dog-food-1",
    name: "Premium Dog Food",
    rating: 4.7,
    reviews: 18520,
    image:
      "https://images.unsplash.com/photo-1575220204358-6a51a5064b50?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
  },
  {
    id: "bird-food-1",
    name: "Bird Seed Mix",
    rating: 4.6,
    reviews: 12450,
    image:
      "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
  },
];

// Add adoption listings
const adoptionListings = [
  {
    id: "golden-adopt",
    title: "Buddy - Golden Retriever",
    image:
      "https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description:
      "Friendly 3-year-old Golden Retriever looking for a forever home",
    age: "3 years",
    gender: "Male",
    location: "Queens, NY",
    date: "2 days ago",
  },
  {
    id: "tabby-adopt",
    title: "Mittens - Tabby Cat",
    image:
      "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Sweet tabby cat needs a loving home",
    age: "2 years",
    gender: "Female",
    location: "Brooklyn, NY",
    date: "4 days ago",
  },
  {
    id: "shepherd-adopt",
    title: "Max - German Shepherd",
    image:
      "https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Trained German Shepherd seeking active family",
    age: "4 years",
    gender: "Male",
    location: "Manhattan, NY",
    date: "6 days ago",
  },
];

// Add mate listings
const mateListings = [
  {
    id: "husky-mate",
    title: "Thor - Siberian Husky",
    image:
      "https://images.unsplash.com/photo-1605568427860-9623d4a56b0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Purebred Siberian Husky available for breeding",
    age: "3 years",
    gender: "Male",
    location: "Bronx, NY",
    date: "3 days ago",
  },
  {
    id: "persian-mate",
    title: "Luna - Persian Cat",
    image:
      "https://images.unsplash.com/photo-1583795128727-6ec3642408f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Champion bloodline Persian cat for mating",
    age: "2 years",
    gender: "Female",
    location: "Staten Island, NY",
    date: "5 days ago",
  },
  {
    id: "poodle-mate",
    title: "Bella - Toy Poodle",
    image:
      "https://images.unsplash.com/photo-1608096299230-81c7b43d5dfc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "AKC registered Toy Poodle for breeding",
    age: "2.5 years",
    gender: "Female",
    location: "Manhattan, NY",
    date: "1 week ago",
  },
];

export default function MarketplacePage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("market");
  const [activeCategory, setActiveCategory] = useState("pets");

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Function to handle category changes
  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
    // Also scroll to top when category changes
    window.scrollTo(0, 0);
  };

  // Render content based on active category
  const renderCategoryContent = () => {
    switch (activeCategory) {
      case "pet-food":
        return (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-800">Pet Food</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[...petFoodProducts, ...morePetFoodProducts].map((product) => (
                <Link
                  key={product.id}
                  to={`/product/${product.id}`}
                  className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-200 overflow-hidden"
                >
                  <div className="h-40">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-3">
                    <h3 className="font-medium text-sm mb-1">{product.name}</h3>
                    <div className="flex items-center mb-2">
                      <svg
                        className="w-4 h-4 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="text-xs ml-1">{product.rating}</span>
                      <span className="text-xs text-gray-500 ml-1">
                        ({product.reviews})
                      </span>
                    </div>
                    <button className="w-full py-1.5 text-center text-xs font-medium bg-primary text-white rounded-md hover:bg-primary-dark transition-colors">
                      View
                    </button>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        );
      case "pets":
        return (
          <div className="space-y-6">
            {/* Featured listing for pets category */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden mb-6 border border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-6 md:p-8">
                  <h2 className="text-xl font-semibold mb-2">
                    {featuredListing.title}
                  </h2>
                  <p className="text-gray-600 mb-4">
                    {featuredListing.description}
                  </p>

                  <div className="grid grid-cols-3 gap-6 mb-6">
                    <div>
                      <p className="text-gray-500 text-sm">Price</p>
                      <p className="text-lg font-semibold">
                        ${featuredListing.price}
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm">Gender</p>
                      <p className="text-lg font-semibold">
                        {featuredListing.gender}
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm">Age</p>
                      <p className="text-lg font-semibold">
                        {featuredListing.age}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center mb-6">
                    <img
                      src={featuredListing.seller.avatar}
                      alt={featuredListing.seller.name}
                      className="w-10 h-10 rounded-full mr-3"
                    />
                    <div>
                      <p className="font-medium">
                        {featuredListing.seller.name}
                      </p>
                      <p className="text-sm text-gray-500">
                        {featuredListing.seller.timeAgo} •{" "}
                        {featuredListing.seller.location}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => navigate(`/pet/${featuredListing.id}`)}
                    className="bg-primary text-white py-3 px-6 rounded-lg font-medium hover:bg-primary-dark transition-colors shadow-sm"
                  >
                    View Details
                  </button>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {featuredListing.images.map((img, index) => (
                    <div
                      key={index}
                      className={index === 0 ? "col-span-2" : ""}
                    >
                      <img
                        src={img}
                        alt={`${featuredListing.title} ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <h2 className="text-xl font-semibold text-gray-800">
              Pets for Sale
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {morePetListings.map((listing) => (
                <Link
                  to={`/pet/${listing.id}`}
                  key={listing.id}
                  className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-200 overflow-hidden"
                >
                  <div className="h-48">
                    <img
                      src={listing.image}
                      alt={listing.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium mb-1">{listing.title}</h3>
                    <p className="text-primary font-semibold mb-2">
                      ${listing.price}
                    </p>
                    <div className="flex justify-between items-center text-sm text-gray-500">
                      <span>{listing.location}</span>
                      <span>{listing.date}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        );
      case "adoptions":
        return (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-800">
              Pets for Adoption
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {adoptionListings.map((listing) => (
                <div
                  key={listing.id}
                  className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-200 overflow-hidden"
                >
                  <div className="h-48">
                    <img
                      src={listing.image}
                      alt={listing.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium mb-1">{listing.title}</h3>
                    <p className="text-gray-600 text-sm mb-3">
                      {listing.description}
                    </p>
                    <div className="grid grid-cols-2 gap-2 mb-3">
                      <div className="text-sm">
                        <span className="text-gray-500">Age:</span>
                        <span className="ml-1 font-medium">{listing.age}</span>
                      </div>
                      <div className="text-sm">
                        <span className="text-gray-500">Gender:</span>
                        <span className="ml-1 font-medium">
                          {listing.gender}
                        </span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center text-sm text-gray-500">
                      <span>{listing.location}</span>
                      <span>{listing.date}</span>
                    </div>
                    <button
                      className="w-full mt-3 py-2 bg-primary text-white rounded-lg font-medium hover:bg-primary-dark transition-colors shadow-sm"
                      onClick={() => navigate(`/adoption/${listing.id}`)}
                    >
                      Adopt Me
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case "mates":
        return (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-800">
              Pets for Mating
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mateListings.map((listing) => (
                <div
                  key={listing.id}
                  className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-200 overflow-hidden"
                >
                  <div className="h-48">
                    <img
                      src={listing.image}
                      alt={listing.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium mb-1">{listing.title}</h3>
                    <p className="text-gray-600 text-sm mb-3">
                      {listing.description}
                    </p>
                    <div className="grid grid-cols-2 gap-2 mb-3">
                      <div className="text-sm">
                        <span className="text-gray-500">Age:</span>
                        <span className="ml-1 font-medium">{listing.age}</span>
                      </div>
                      <div className="text-sm">
                        <span className="text-gray-500">Gender:</span>
                        <span className="ml-1 font-medium">
                          {listing.gender}
                        </span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center text-sm text-gray-500">
                      <span>{listing.location}</span>
                      <span>{listing.date}</span>
                    </div>
                    <button
                      className="w-full mt-3 py-2 bg-primary text-white rounded-lg font-medium hover:bg-primary-dark transition-colors shadow-sm"
                      onClick={() => navigate(`/mate/${listing.id}`)}
                    >
                      Contact Owner
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  // Fix the mobile category content renderer with more compact layouts
  const renderMobileCategoryContent = () => {
    switch (activeCategory) {
      case "pet-food":
        return (
          <div className="px-2 w-screen">
            <div className="grid grid-cols-2 gap-2">
              {[...petFoodProducts, ...morePetFoodProducts].map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-lg overflow-hidden shadow-sm"
                >
                  <div className="w-full h-24 bg-gray-100">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-1.5">
                    <h3 className="text-[10px] font-medium truncate">
                      {product.name}
                    </h3>
                    <div className="flex items-center mt-0.5">
                      <svg
                        className="w-2.5 h-2.5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="text-[8px] ml-1">{product.rating}</span>
                      <span className="text-[8px] text-gray-500 ml-1">
                        ({product.reviews})
                      </span>
                    </div>
                    <Link to={`/product/${product.id}`} className="block mt-1">
                      <button className="w-full py-1 text-center text-[10px] font-medium bg-primary text-white rounded-md">
                        View
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case "pets":
        return (
          <div className="px-2">
            <div className="bg-white rounded-lg overflow-hidden shadow-sm mb-2">
              <div className="flex relative">
                <div className="w-1/2">
                  <img
                    src={featuredListing.images[0]}
                    alt={featuredListing.title}
                    className="w-full h-24 object-cover"
                  />
                </div>
                <div className="w-1/2 pl-0.5">
                  <img
                    src={featuredListing.images[1]}
                    alt={featuredListing.title}
                    className="w-full h-24 object-cover"
                  />
                </div>
              </div>
              <div className="p-2">
                <div className="flex justify-between items-start">
                  <h3 className="font-medium text-xs truncate max-w-[70%]">
                    {featuredListing.title}
                  </h3>
                  <button
                    onClick={() => navigate(`/pet/${featuredListing.id}`)}
                    className="bg-primary text-white text-[10px] font-medium py-1 px-2 rounded-md"
                  >
                    View
                  </button>
                </div>
                <p className="text-[10px] text-gray-500 mt-0.5 line-clamp-1">
                  {featuredListing.description}
                </p>
                <div className="mt-1 flex space-x-3">
                  <div className="text-[10px]">
                    <span className="text-gray-500 text-[8px]">Price</span>
                    <p className="font-medium">${featuredListing.price}</p>
                  </div>
                  <div className="text-[10px]">
                    <span className="text-gray-500 text-[8px]">Gender</span>
                    <p className="font-medium">{featuredListing.gender}</p>
                  </div>
                  <div className="text-[10px]">
                    <span className="text-gray-500 text-[8px]">Age</span>
                    <p className="font-medium">{featuredListing.age}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              {morePetListings.map((listing) => (
                <div
                  key={listing.id}
                  className="bg-white rounded-lg overflow-hidden shadow-sm"
                >
                  <div className="h-24">
                    <img
                      src={listing.image}
                      alt={listing.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-1.5">
                    <h3 className="font-medium text-[10px] truncate">
                      {listing.title}
                    </h3>
                    <p className="text-primary font-medium text-[10px] mt-0.5">
                      ${listing.price}
                    </p>
                    <div className="flex justify-between items-center mt-0.5">
                      <span className="text-[8px] text-gray-500 truncate max-w-[70px]">
                        {listing.location}
                      </span>
                      <span className="text-[8px] text-gray-500">
                        {listing.date}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case "adoptions":
        return (
          <div className="px-2">
            <div className="grid grid-cols-2 gap-2">
              {adoptionListings.map((listing) => (
                <div
                  key={listing.id}
                  className="bg-white rounded-lg overflow-hidden shadow-sm"
                >
                  <div className="h-24">
                    <img
                      src={listing.image}
                      alt={listing.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-1.5">
                    <h3 className="font-medium text-[10px] truncate">
                      {listing.title}
                    </h3>
                    <p className="text-[8px] text-gray-500 mt-0.5 line-clamp-1">
                      {listing.description}
                    </p>
                    <div className="mt-0.5 flex justify-between">
                      <div className="text-[8px]">
                        <span className="text-gray-500">Age:</span>
                        <span className="font-medium ml-0.5">
                          {listing.age}
                        </span>
                      </div>
                      <div className="text-[8px]">
                        <span className="text-gray-500">Gender:</span>
                        <span className="font-medium ml-0.5">
                          {listing.gender}
                        </span>
                      </div>
                    </div>
                    <button
                      className="w-full mt-1 py-1 text-center text-[8px] font-medium bg-primary text-white rounded-md"
                      onClick={() => navigate(`/adoption/${listing.id}`)}
                    >
                      Adopt Me
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case "mates":
        return (
          <div className="px-2">
            <div className="grid grid-cols-2 gap-2">
              {mateListings.map((listing) => (
                <div
                  key={listing.id}
                  className="bg-white rounded-lg overflow-hidden shadow-sm"
                >
                  <div className="h-24">
                    <img
                      src={listing.image}
                      alt={listing.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-1.5">
                    <h3 className="font-medium text-[10px] truncate">
                      {listing.title}
                    </h3>
                    <p className="text-[8px] text-gray-500 mt-0.5 line-clamp-1">
                      {listing.description}
                    </p>
                    <div className="mt-0.5 flex justify-between">
                      <div className="text-[8px]">
                        <span className="text-gray-500">Age:</span>
                        <span className="font-medium ml-0.5">
                          {listing.age}
                        </span>
                      </div>
                      <div className="text-[8px]">
                        <span className="text-gray-500">Gender:</span>
                        <span className="font-medium ml-0.5">
                          {listing.gender}
                        </span>
                      </div>
                    </div>
                    <button
                      className="w-full mt-1 py-1 text-center text-[8px] font-medium bg-primary text-white rounded-md"
                      onClick={() => navigate(`/mate/${listing.id}`)}
                    >
                      Contact
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 relative max-w-screen overflow-hidden">
      {/* Mobile Header */}
      <header className="lg:hidden bg-white px-4 py-3 flex items-center sticky top-0 z-50 shadow-sm">
        <Link to="/home" className="p-1 mr-3">
          <svg
            className="w-5 h-5 text-gray-700"
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
        </Link>
        <input
          type="text"
          placeholder="Search feed, animals, breeds, etc"
          className="w-full py-2 pl-8 pr-4 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 text-sm bg-transparent"
        />
        <div className="absolute left-16 top-1/2 transform -translate-y-1/2">
          <svg
            className="w-4 h-4 text-gray-400"
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
      </header>

      {/* Desktop Header */}
      <header className="hidden lg:block bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/home" className="text-primary font-bold text-2xl mr-10">
              PetAssign
            </Link>
            <nav className="hidden lg:flex items-center space-x-8">
              <Link to="/home" className="text-gray-500 hover:text-primary">
                Home
              </Link>
              <Link to="/marketplace" className="text-primary font-medium">
                Marketplace
              </Link>
              <Link
                to="/community"
                className="text-gray-500 hover:text-primary"
              >
                Community
              </Link>
              <Link to="/chat" className="text-gray-500 hover:text-primary">
                Messages
              </Link>
            </nav>
          </div>
          <div className="flex items-center space-x-6">
            <div className="relative w-64">
              <input
                type="text"
                placeholder="Search marketplace..."
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
      <main className="pb-28 lg:pb-28">
        {/* Mobile Category Tabs */}
        <div className="lg:hidden bg-white pt-2 shadow-sm">
          <div className="px-4 mb-1">
            <div className="flex overflow-x-auto hide-scrollbar">
              {categoryFilters.map((category) => (
                <button
                  key={category.id}
                  className={`px-3 py-1.5 text-xs font-medium mr-3 transition-colors whitespace-nowrap ${
                    activeCategory === category.id
                      ? "text-primary border-b-2 border-primary"
                      : "text-gray-500"
                  }`}
                  onClick={() => handleCategoryChange(category.id)}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
          <div className="h-px bg-gray-200"></div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:block max-w-7xl mx-auto px-6 py-8">
          {/* Desktop Tabs and Headline */}
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-bold text-gray-800">Marketplace</h1>
            <div className="flex">
              {categoryFilters.map((category) => (
                <button
                  key={category.id}
                  className={`px-6 py-3 text-sm font-medium transition-colors border-b-2 ${
                    activeCategory === category.id
                      ? "text-primary border-primary"
                      : "text-gray-500 border-transparent hover:text-gray-700 hover:border-gray-300"
                  }`}
                  onClick={() => handleCategoryChange(category.id)}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Desktop Content */}
          <div className="grid grid-cols-4 gap-8">
            {/* Left Column - Dynamic Content */}
            <div className="col-span-3">{renderCategoryContent()}</div>

            {/* Right Column - Sidebar */}
            <div className="col-span-1">
              <div className="bg-white rounded-xl shadow-sm p-5 mb-6 border border-gray-200">
                <h3 className="font-semibold text-lg mb-4 text-gray-800">
                  Filter By
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Category
                    </label>
                    <select className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-1 focus:ring-primary focus:border-primary">
                      <option>All Categories</option>
                      <option>Dogs</option>
                      <option>Cats</option>
                      <option>Birds</option>
                      <option>Fish</option>
                      <option>Reptiles</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Price Range
                    </label>
                    <div className="flex items-center space-x-2">
                      <input
                        type="text"
                        placeholder="Min"
                        className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-1 focus:ring-primary focus:border-primary"
                      />
                      <span>-</span>
                      <input
                        type="text"
                        placeholder="Max"
                        className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-1 focus:ring-primary focus:border-primary"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Location
                    </label>
                    <input
                      type="text"
                      placeholder="Enter location"
                      className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-1 focus:ring-primary focus:border-primary"
                    />
                  </div>
                  <button className="w-full bg-primary text-white py-2 rounded-lg font-medium hover:bg-primary-dark transition-colors shadow-sm">
                    Apply Filters
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-5 border border-gray-200">
                <h3 className="font-semibold text-lg mb-4 text-gray-800">
                  Recently Viewed
                </h3>
                <div className="space-y-4">
                  {morePetListings.slice(0, 2).map((listing) => (
                    <Link
                      key={listing.id}
                      to={`/pet/${listing.id}`}
                      className="flex space-x-3 group hover:bg-gray-50 p-2 rounded-lg transition-colors"
                    >
                      <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0 shadow-sm">
                        <img
                          src={listing.image}
                          alt={listing.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-medium text-sm group-hover:text-primary transition-colors">
                          {listing.title}
                        </h4>
                        <p className="text-primary font-semibold text-sm">
                          ${listing.price}
                        </p>
                        <p className="text-gray-500 text-xs">{listing.date}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Sections - Dynamic Content */}
        <div className="lg:hidden mt-2 pb-16 overflow-x-hidden w-full">
          <div className="flex items-center justify-between px-3 mb-1">
            <h2 className="text-sm font-medium">
              {activeCategory === "pet-food"
                ? "Pet Food"
                : activeCategory === "pets"
                ? "Pets"
                : activeCategory === "adoptions"
                ? "Adoptions"
                : "Mates"}
            </h2>
            <Link
              to={`/marketplace/${activeCategory}`}
              className="text-gray-500 text-xs"
            >
              All &gt;
            </Link>
          </div>

          {renderMobileCategoryContent()}
        </div>
      </main>

      {/* Floating Action Button */}
      <div className="fixed bottom-20 right-4 z-50 lg:bottom-28">
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

      {/* Mobile Bottom Navigation - Fixed position */}
      <div className="fixed bottom-0 left-0 right-0 z-50">
        <BottomNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
    </div>
  );
}
