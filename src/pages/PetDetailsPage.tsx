// import React from "react";
import { useNavigate } from "react-router-dom";

export default function PetDetailsPage() {
  const navigate = useNavigate();
  // const { id } = useParams();

  // This would normally be fetched from an API based on the id
  const petDetails = {
    id: "1",
    name: "Norris the Emerald Chameleon up for sale",
    price: 129.95,
    description:
      "Meet Bella, a loving and energetic 2-year-old Labrador Retriever looking for her forever home. Bella is a bundle of joy who loves to play fetch, go on long walks, and snuggle up for belly rubs. She has a friendly and gentle temperament, making her a perfect companion for families with children or other pets.",
    image:
      "https://images.unsplash.com/photo-1597245621429-761a33b49545?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80",
    gender: "Male",
    age: "2 years",
    location: {
      city: "Ibadan",
      region: "Nigeria",
      fullAddress: "Ojoo, Oyo State, Ibadan, Nigeria",
    },
    seller: {
      phone: "+234 81 3749 6017",
      email: "alibaheritage8@gmail.com",
    },
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white px-4 py-3 flex items-center sticky top-0 z-50 shadow-sm">
        <button onClick={() => navigate(-1)} className="p-1 mr-3">
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
        </button>
        <input
          type="text"
          placeholder="Search feed, animals, breeds, etc"
          className="w-full py-2 pl-8 pr-4 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 text-sm"
        />
        <div className="absolute left-14 top-1/2 transform -translate-y-1/2">
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

      {/* Main Content */}
      <main className="pb-20">
        {/* Pet Image */}
        <div className="w-full aspect-square bg-white">
          <img
            src={petDetails.image}
            alt={petDetails.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Pet Details */}
        <div className="p-4 bg-white">
          <h1 className="text-base font-medium">{petDetails.name}</h1>
          <p className="text-primary text-xl font-semibold mt-1">
            ${petDetails.price.toFixed(2)}
          </p>
        </div>

        {/* Description Section */}
        <div className="mt-2 p-4 bg-white">
          <h2 className="text-base font-medium mb-2">Description</h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            {petDetails.description}
          </p>

          <div className="mt-4 flex space-x-8">
            <div>
              <p className="text-xs text-gray-500">Gender</p>
              <p className="text-sm font-medium">{petDetails.gender}</p>
            </div>
            <div>
              <p className="text-xs text-gray-500">Age</p>
              <p className="text-sm font-medium">{petDetails.age}</p>
            </div>
          </div>
        </div>

        {/* Location Section */}
        <div className="mt-2 p-4 bg-white">
          <h2 className="text-base font-medium mb-2">Location</h2>
          <p className="text-sm font-medium">
            {petDetails.location.city}, {petDetails.location.region}
          </p>
          <p className="text-xs text-gray-500 mt-1">
            {petDetails.location.fullAddress}
          </p>
        </div>

        {/* Contact Details */}
        <div className="mt-2 p-4 bg-white">
          <h2 className="text-base font-medium mb-2">Contact Details</h2>
          <div className="flex items-center space-x-3 mt-2">
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
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            <span className="text-sm">{petDetails.seller.phone}</span>
          </div>
          <div className="flex items-center space-x-3 mt-2">
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
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <span className="text-sm">{petDetails.seller.email}</span>
          </div>
        </div>
      </main>

      {/* Bottom Fixed Button */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t flex justify-center">
        <button className="w-full bg-primary text-white py-3 rounded-lg font-medium">
          Contact Seller
        </button>
      </div>
    </div>
  );
}
