import { useState } from "react";
import heroImage from "../assets/hero.svg";
import { Link } from "react-router-dom";
import AppModal from "./AppModal";
import AndroidIcon from "./AndroidIcon";
import AppleIcon from "./AppleIcon";

export default function Hero() {
  const [androidModalOpen, setAndroidModalOpen] = useState(false);
  const [iosModalOpen, setIosModalOpen] = useState(false);

  return (
    <section className="relative w-full overflow-hidden bg-white dark:bg-[#101935] pt-20">
      {/* Subtle gradient background */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 via-transparent to-transparent dark:from-primary/10"
        aria-hidden="true"
      />

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-[85vh] items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 w-full">
            {/* Left Column - Content */}
            <div className="flex flex-col justify-center">
              <div className="inline-flex items-center px-4 py-2 text-sm font-medium text-primary bg-primary/10 rounded-full w-fit">
                🔥 Connecting Pet Lovers, One Paw at a Time.
              </div>

              <h1 className="mt-6 text-[42px] leading-[1.2] sm:text-5xl lg:text-[56px] font-bold text-gray-900 dark:text-white">
                Your Pet <span className="text-primary">Community</span>,
                <br />
                All in One Place
              </h1>

              <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-[540px]">
                Buy, adopt, sell, or find the perfect match for your pets. Join
                a vibrant network of pet lovers and discover everything from
                pets to pet supplies, all in one platform.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Link
                  to="/signup"
                  className="inline-flex justify-center items-center px-6 py-3 rounded-lg bg-primary text-white font-medium hover:bg-primary-dark transition-colors duration-200"
                >
                  Get Started
                </Link>
                <button
                  onClick={() => setAndroidModalOpen(true)}
                  className="inline-flex items-center px-5 py-2.5 bg-white dark:bg-[#1A2542] border border-gray-200 dark:border-[#2A3353] rounded-lg hover:bg-gray-50 dark:hover:bg-[#223060] transition-colors duration-200"
                >
                  <AndroidIcon className="w-5 h-5 mr-2 text-black dark:text-white" />
                  <span className="text-sm font-medium dark:text-white">
                    Get on Android
                  </span>
                </button>
                <button
                  onClick={() => setIosModalOpen(true)}
                  className="inline-flex items-center px-5 py-2.5 bg-white dark:bg-[#1A2542] border border-gray-200 dark:border-[#2A3353] rounded-lg hover:bg-gray-50 dark:hover:bg-[#223060] transition-colors duration-200"
                >
                  <AppleIcon className="w-5 h-5 mr-2 text-black dark:text-white" />
                  <span className="text-sm font-medium dark:text-white">
                    Get on iOS
                  </span>
                </button>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative flex items-center">
              <div className="relative w-full">
                {/* Main image with decorative elements */}
                <div className="relative z-10 bg-[#E8F2F8] dark:bg-[#1A2542] rounded-2xl overflow-hidden">
                  <img
                    src={heroImage}
                    alt="Pet owner with their dog"
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent dark:from-black/20"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Android App Modal */}
      <AppModal
        isOpen={androidModalOpen}
        onClose={() => setAndroidModalOpen(false)}
        title="Android App Coming Soon!"
      >
        <div className="text-gray-600 dark:text-gray-300">
          <div className="flex items-center justify-center mb-4">
            <AndroidIcon className="w-16 h-16 text-primary" />
          </div>
          <p className="mb-3">
            Our Android app is currently in development and will be available
            soon! We're working hard to bring you the best mobile experience for
            managing your pet community.
          </p>
          <p className="mb-3">
            Would you like to sign up for a demo session of our Android app? Get
            a sneak peek of the features and functionality before it's
            officially released.
          </p>
          <div className="mt-5">
            <a
              href="mailto:demo@petassign.com?subject=Android App Demo Request"
              className="block w-full py-3 px-4 rounded-lg bg-gradient-to-r from-primary to-primary-dark text-white text-center font-medium"
            >
              Request a Demo Session
            </a>
          </div>
        </div>
      </AppModal>

      {/* iOS App Modal */}
      <AppModal
        isOpen={iosModalOpen}
        onClose={() => setIosModalOpen(false)}
        title="iOS App Coming Soon!"
      >
        <div className="text-gray-600 dark:text-gray-300">
          <div className="flex items-center justify-center mb-4">
            <AppleIcon className="w-16 h-16 text-primary" />
          </div>
          <p className="mb-3">
            Our iOS app is currently in the final stages of development and will
            be available on the App Store soon! We're polishing the interface to
            ensure a seamless experience for iPhone and iPad users.
          </p>
          <p className="mb-3">
            While we're finishing up the iOS app, you can still request to join
            the Android demo session to get a feel for the mobile experience.
          </p>
          <div className="mt-5">
            <a
              href="mailto:demo@petassign.com?subject=iOS App Demo Request"
              className="block w-full py-3 px-4 rounded-lg bg-gradient-to-r from-primary to-primary-dark text-white text-center font-medium"
            >
              Stay Updated
            </a>
          </div>
        </div>
      </AppModal>
    </section>
  );
}
