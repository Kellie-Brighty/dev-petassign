// import React from "react";
import { Link, useNavigate } from "react-router-dom";

// Featured pet data for the main card
const featuredPet = {
  id: "1",
  name: "Norris the Emerald",
  type: "Chameleon up for sale",
  price: 320,
  gender: "Male",
  age: "2 years",
  image:
    "https://images.unsplash.com/photo-1597245621429-761a33b49545?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80",
  owner: {
    name: "Heritage",
    location: "Palm Bay",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    timeAgo: "29 min ago",
  },
};

// Desktop featured pets
const desktopFeaturedPets = [
  {
    id: "1",
    name: "Norris the Emerald",
    type: "Chameleon up for sale",
    image:
      "https://images.unsplash.com/photo-1597245621429-761a33b49545?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80",
  },
  {
    id: "2",
    name: "Bella",
    type: "Siamese Cat",
    distance: "0.8 miles away",
    image:
      "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Y2F0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
  },
  {
    id: "3",
    name: "Charlie",
    type: "Labrador",
    distance: "2.1 miles away",
    image:
      "https://images.unsplash.com/photo-1605897472359-5629401b3caf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YmxhY2slMjBsYWJyYWRvcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
  },
  {
    id: "4",
    name: "Luna",
    type: "Persian Cat",
    distance: "3.0 miles away",
    image:
      "https://images.unsplash.com/photo-1615789591457-74a63395c990?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmxhdCUyMGZhY2UlMjBjYXR8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
  },
];

export default function FeaturedPet() {
  const navigate = useNavigate();

  return (
    <>
      {/* Mobile view - Single featured pet card */}
      <div className="lg:hidden px-4">
        <div className="w-full">
          <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100">
            <div className="relative h-48">
              <img
                src={featuredPet.image}
                alt={featuredPet.name}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute bottom-3 right-3">
                <button
                  className="bg-primary rounded-lg px-3 py-1.5 text-xs font-medium shadow-md text-white hover:bg-primary-dark transition-colors"
                  onClick={() => navigate(`/pet/${featuredPet.id}`)}
                >
                  Check out
                </button>
              </div>
            </div>
            <div className="p-3">
              <h3 className="font-medium text-sm text-gray-900">
                {featuredPet.name}
              </h3>
              <p className="text-xs text-gray-500">{featuredPet.type}</p>

              <div className="mt-2 flex items-center justify-between">
                <div className="flex space-x-5">
                  <div className="text-xs">
                    <span className="text-gray-500 text-[10px]">Price</span>
                    <p className="font-semibold text-primary">
                      ${featuredPet.price}
                    </p>
                  </div>
                  <div className="text-xs">
                    <span className="text-gray-500 text-[10px]">Gender</span>
                    <p className="font-medium text-gray-800">
                      {featuredPet.gender}
                    </p>
                  </div>
                  <div className="text-xs">
                    <span className="text-gray-500 text-[10px]">Age</span>
                    <p className="font-medium text-gray-800">
                      {featuredPet.age}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-2 pt-2 border-t border-gray-100 flex items-center">
                <img
                  src={featuredPet.owner.avatar}
                  alt={featuredPet.owner.name}
                  className="w-5 h-5 rounded-full mr-2 border border-gray-200"
                />
                <span className="text-xs font-medium text-gray-700">
                  {featuredPet.owner.name}
                </span>
                <span className="text-xs text-gray-500 ml-1 mr-1">•</span>
                <span className="text-xs text-gray-500">
                  {featuredPet.owner.timeAgo}
                </span>
                <span className="text-xs text-gray-500 ml-1 mr-1">•</span>
                <span className="text-xs text-gray-500">Kips Bay</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop view - Row layout */}
      <div className="hidden lg:flex space-x-5">
        {desktopFeaturedPets.map((pet, index) => (
          <div key={pet.id} className="w-52 flex-shrink-0">
            <Link to={`/pet/${pet.id}`} className="block group">
              <div className="bg-white rounded-lg overflow-hidden h-36 mb-2 shadow-md border border-gray-100 group-hover:shadow-lg transition-shadow">
                <img
                  src={pet.image}
                  alt={pet.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <h3 className="text-sm font-medium truncate text-gray-900 group-hover:text-primary transition-colors">
                {pet.name}
              </h3>
              <p className="text-xs text-gray-500 truncate">{pet.type}</p>
              {index > 0 && (
                <p className="text-xs text-gray-500 mt-1">
                  {index === 1
                    ? "0.8 miles away"
                    : index === 2
                    ? "2.1 miles away"
                    : "3.0 miles away"}
                </p>
              )}
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
