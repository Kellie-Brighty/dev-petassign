// import React from "react";
import { Link } from "react-router-dom";

const categories = [
  {
    id: "cat",
    name: "Cat",
    color: "bg-blue-100",
    textColor: "text-blue-700",
    image:
      "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "dog",
    name: "Dog",
    color: "bg-indigo-100",
    textColor: "text-indigo-700",
    image:
      "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
  },
  {
    id: "bird",
    name: "Bird",
    color: "bg-green-800",
    textColor: "text-green-700",
    image:
      "https://images.unsplash.com/photo-1601524909162-ae665f496866?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
  },
  {
    id: "reptile",
    name: "Reptile",
    color: "bg-orange-600",
    textColor: "text-orange-700",
    image:
      "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
  },
];

export default function PetCategories() {
  return (
    <>
      {/* Mobile design - horizontal scrolling */}
      <div className="lg:hidden w-full overflow-x-auto hide-scrollbar">
        <div className="flex space-x-4 w-max pb-2 px-4">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/category/${category.id}`}
              className="flex flex-col items-center flex-shrink-0"
            >
              <div
                className={`w-20 h-20 ${category.color} rounded-md overflow-hidden flex items-center justify-center shadow-sm`}
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <p className="mt-1 text-center text-xs font-medium">
                {category.name}
              </p>
            </Link>
          ))}
        </div>
      </div>

      {/* Desktop design - grid layout */}
      <div className="hidden lg:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
        {categories.map((category) => (
          <Link
            key={category.id}
            to={`/category/${category.id}`}
            className="group"
          >
            <div className="relative overflow-hidden rounded-xl transition-all duration-300 group-hover:shadow-md">
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-40 object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                <h3 className="text-white font-semibold text-lg">
                  {category.name}
                </h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
