import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function EditProfilePage() {
  const navigate = useNavigate();

  // Initial state for the user profile
  const [profile, setProfile] = useState({
    firstName: "Atiba",
    lastName: "Heritage",
    username: "heritage",
    email: "heritage@example.com",
    bio: "Pet lover and enthusiast. I have 2 dogs and 1 cat.",
    phoneNumber: "+1 (234) 567-8900",
    location: "New York, USA",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    coverPhoto:
      "https://images.unsplash.com/photo-1450778869180-41d0601e046e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
  });

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setProfile((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically save the profile to your backend
    console.log("Updated profile:", profile);
    navigate("/my-profile");
  };

  // Handle image changes
  const handleImageChange = (type: "avatar" | "cover") => {
    // In a real app, this would open a file picker and upload the image
    console.log(`Changing ${type} image`);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col w-screen">
      {/* Header */}
      <header className="px-4 py-3 flex items-center justify-between sticky top-0 z-50 bg-white border-b w-full shadow-sm">
        <div className="flex items-center">
          <button onClick={() => navigate(-1)} className="p-1 mr-2">
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
          <h1 className="text-lg font-medium">Edit Profile</h1>
        </div>

        {/* Desktop Save Button */}
        <div className="hidden lg:block">
          <button
            onClick={handleSubmit}
            className="bg-primary text-white px-4 py-1.5 rounded-lg text-sm font-medium hover:bg-primary-dark transition-colors"
          >
            Save Changes
          </button>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 pb-8 lg:py-8 w-full">
        <div className="lg:max-w-5xl lg:mx-auto lg:grid lg:grid-cols-12 lg:gap-8">
          {/* Profile Image Preview Section - Desktop Only */}
          <div className="hidden lg:block lg:col-span-4">
            <div className="bg-white rounded-lg shadow p-6 space-y-6 sticky top-24">
              <h2 className="text-lg font-medium text-gray-800 mb-4">
                Profile Preview
              </h2>

              {/* Cover Photo Preview */}
              <div className="relative rounded-lg overflow-hidden h-36 bg-gray-200 mb-8">
                <img
                  src={profile.coverPhoto}
                  alt="Cover"
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => handleImageChange("cover")}
                  className="absolute bottom-2 right-2 bg-white p-2 rounded-full shadow hover:shadow-md"
                >
                  <svg
                    className="w-4 h-4 text-gray-700"
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

              {/* Avatar Preview */}
              <div className="flex flex-col items-center -mt-16 mb-4">
                <div className="relative">
                  <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow">
                    <img
                      src={profile.avatar}
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <button
                    onClick={() => handleImageChange("avatar")}
                    className="absolute bottom-0 right-0 bg-primary p-1.5 rounded-full text-white shadow"
                  >
                    <svg
                      className="w-3.5 h-3.5"
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

                <h3 className="text-lg font-medium mt-2">
                  {profile.firstName} {profile.lastName}
                </h3>
                <p className="text-sm text-gray-500">@{profile.username}</p>
                <p className="text-xs text-gray-500 mt-2">{profile.location}</p>
              </div>

              <div className="text-sm text-gray-600 border-t pt-4 mt-2">
                <p className="text-center italic">"{profile.bio}"</p>
              </div>

              <div className="flex justify-center pt-4">
                <p className="text-xs text-gray-500">
                  This is how your profile will appear to others
                </p>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="px-4 lg:px-0 lg:col-span-8">
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-lg shadow p-6 space-y-6 mt-4"
            >
              {/* Mobile Profile Images Section */}
              <div className="lg:hidden space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Profile Picture
                  </label>
                  <div className="flex items-center">
                    <div className="mr-4">
                      <div className="w-16 h-16 rounded-full overflow-hidden">
                        <img
                          src={profile.avatar}
                          alt="Profile"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <button
                      type="button"
                      className="bg-gray-100 text-gray-700 px-3 py-1.5 rounded text-sm"
                      onClick={() => handleImageChange("avatar")}
                    >
                      Change
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Cover Photo
                  </label>
                  <div className="relative h-32 rounded-md overflow-hidden bg-gray-200">
                    <img
                      src={profile.coverPhoto}
                      alt="Cover"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <button
                    type="button"
                    className="bg-gray-100 text-gray-700 px-3 py-1.5 rounded text-sm mt-2"
                    onClick={() => handleImageChange("cover")}
                  >
                    Change Cover Photo
                  </button>
                </div>
              </div>

              <h2 className="text-lg font-medium text-gray-800 pb-2 border-b">
                Personal Information
              </h2>

              {/* First and Last Name (side by side) */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={profile.firstName}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={profile.lastName}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  />
                </div>
              </div>

              {/* Username */}
              <div>
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Username
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">
                    @
                  </span>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    value={profile.username}
                    onChange={handleChange}
                    className="w-full pl-7 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  />
                </div>
              </div>

              <h2 className="text-lg font-medium text-gray-800 pb-2 border-b pt-4">
                Contact Information
              </h2>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={profile.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                />
              </div>

              {/* Phone Number */}
              <div>
                <label
                  htmlFor="phoneNumber"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={profile.phoneNumber}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                />
              </div>

              {/* Location */}
              <div>
                <label
                  htmlFor="location"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Location
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={profile.location}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                />
              </div>

              <h2 className="text-lg font-medium text-gray-800 pb-2 border-b pt-4">
                About You
              </h2>

              {/* Bio */}
              <div>
                <label
                  htmlFor="bio"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Bio
                </label>
                <textarea
                  id="bio"
                  name="bio"
                  value={profile.bio}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  placeholder="Tell us about yourself..."
                />
                <p className="mt-1 text-xs text-gray-500">
                  Let others know about your pets, interests, and activities.
                </p>
              </div>

              {/* Submit Button - Only show on mobile */}
              <div className="pt-4 lg:hidden">
                <button
                  type="submit"
                  className="w-full py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors"
                >
                  Save Changes
                </button>
              </div>

              {/* Cancel Button - Desktop Only */}
              <div className="hidden lg:block pt-4">
                <div className="flex justify-end space-x-4">
                  <button
                    type="button"
                    onClick={() => navigate(-1)}
                    className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors"
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
