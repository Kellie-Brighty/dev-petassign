// import React from "react";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Cat food",
    rating: 4.9,
    reviews: 20205,
    image:
      "https://images.unsplash.com/photo-1589924729425-77e56bf53519?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 2,
    name: "Cat food",
    rating: 4.8,
    reviews: 20213,
    image:
      "https://images.unsplash.com/photo-1600623471616-8c1966c91ff6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
  },
];

export default function ProductSection() {
  return (
    <div className="mt-5">
      <div className="flex items-center justify-between mb-3 px-4">
        <h2 className="text-base font-medium text-gray-800 dark:text-white">
          Animal Food
        </h2>
        <Link
          to="/products"
          className="text-sm text-gray-500 dark:text-gray-400"
        >
          &gt;
        </Link>
      </div>

      <div className="overflow-x-auto hide-scrollbar">
        <div className="flex space-x-3 w-max pb-2 px-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white dark:bg-[#101935] rounded-lg overflow-hidden shadow-sm w-40 flex-shrink-0 border border-gray-200 dark:border-[#1A2542]"
            >
              <div className="w-full h-32 bg-gray-100 dark:bg-[#1A2542]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-2">
                <h3 className="text-xs font-medium truncate text-gray-900 dark:text-white">
                  {product.name}
                </h3>
                <div className="flex items-center mt-1">
                  <svg
                    className="w-3 h-3 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-[10px] ml-1 text-gray-900 dark:text-white">
                    {product.rating}
                  </span>
                  <span className="text-[10px] text-gray-500 dark:text-gray-400 ml-1">
                    ({product.reviews})
                  </span>
                </div>
              </div>
              <div className="px-2 pb-2">
                <Link to="/product-details" className="block">
                  <button className="w-full py-1.5 text-center text-xs font-medium bg-primary text-white rounded-md hover:bg-primary-dark transition-colors">
                    View
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
