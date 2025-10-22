import { useState } from "react";
import communityImage from "../assets/community.svg";
import AndroidIcon from "./AndroidIcon";
import AppleIcon from "./AppleIcon";
import AppModal from "./AppModal";

export default function Community() {
  const [androidModalOpen, setAndroidModalOpen] = useState(false);
  const [iosModalOpen, setIosModalOpen] = useState(false);

  return (
    <section className="relative w-full overflow-hidden bg-white dark:bg-[#101935] py-24 lg:py-15">
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-[#F8F9FB] dark:bg-[#1A2542]">
              <img
                src={communityImage}
                alt="Pet community collage"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Right Column - Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-gray-900 dark:text-white leading-tight">
              Join The Fastest-Growing Pet Community
            </h2>
            <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">
              Whether you're a pet owner, breeder, or someone looking to adopt,
              there's a place for you here. Connect, share, and enjoy everything
              this community has to offer.
            </p>

            <div className="flex flex-wrap gap-3 mt-8">
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
        </div>
      </div>

      {/* Android App Modal */}
      <AppModal
        isOpen={androidModalOpen}
        onClose={() => setAndroidModalOpen(false)}
        title="Download PetAssign for Android!"
      >
        <div className="text-gray-600 dark:text-gray-300">
          <div className="flex items-center justify-center mb-4">
            <AndroidIcon className="w-16 h-16 text-primary" />
          </div>
          <p className="mb-3">
            Great news! PetAssign is now available on the Google Play Store. 
            Download our Android app and join thousands of pet lovers in our 
            vibrant community.
          </p>
          <p className="mb-3">
            Get instant access to buy, sell, adopt pets, and connect with other 
            pet enthusiasts. All the features you need, right in your pocket!
          </p>
          <div className="mt-5">
            <a
              href="https://play.google.com/store/apps/details?id=com.petassign.app"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-3 px-4 rounded-lg bg-gradient-to-r from-primary to-primary-dark text-white text-center font-medium hover:from-primary-dark hover:to-primary transition-all duration-200"
            >
              Download on Google Play
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
            <strong>Good news!</strong> Our Android app is now live and available for download. 
            If you have an Android device, you can download it right now from the Google Play Store.
          </p>
          <div className="mt-5 space-y-3">
            <a
              href="https://play.google.com/store/apps/details?id=com.petassign.app"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-3 px-4 rounded-lg bg-gradient-to-r from-primary to-primary-dark text-white text-center font-medium hover:from-primary-dark hover:to-primary transition-all duration-200"
            >
              Download Android App
            </a>
            <a
              href="mailto:demo@petassign.com?subject=iOS App Demo Request"
              className="block w-full py-3 px-4 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 text-center font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200"
            >
              Stay Updated on iOS
            </a>
          </div>
        </div>
      </AppModal>
    </section>
  );
}
