import { useState } from "react";
import logo from "../assets/logo.svg";
import { useNavigate } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import AndroidIcon from "./AndroidIcon";
import AppleIcon from "./AppleIcon";
import AppModal from "./AppModal";

export default function Header() {
  const navigate = useNavigate();
  const [androidModalOpen, setAndroidModalOpen] = useState(false);
  const [iosModalOpen, setIosModalOpen] = useState(false);

  return (
    <>
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="absolute inset-0 bg-white/60 dark:bg-[#101935]/80 backdrop-blur-md border-b border-white/20 dark:border-gray-800/30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a
              onClick={() => navigate("/")}
              className="flex items-center cursor-pointer"
            >
              <img src={logo} alt="PetAssign" className="h-6 w-auto" />
            </a>

            {/* CTA Buttons and Theme Toggle */}
            <div className="flex items-center gap-3">
              {/* Download Buttons - Hidden on mobile, shown on desktop */}
              <div className="hidden md:flex items-center gap-2">
                <button
                  onClick={() => setAndroidModalOpen(true)}
                  className="inline-flex items-center px-3 py-1.5 text-xs font-medium bg-white dark:bg-[#1A2542] border border-gray-200 dark:border-[#2A3353] rounded-md hover:bg-gray-50 dark:hover:bg-[#223060] transition-colors duration-200"
                >
                  <AndroidIcon className="w-4 h-4 mr-1.5 text-black dark:text-white" />
                  <span className="dark:text-white">Android</span>
                </button>
                <button
                  onClick={() => setIosModalOpen(true)}
                  className="inline-flex items-center px-3 py-1.5 text-xs font-medium bg-white dark:bg-[#1A2542] border border-gray-200 dark:border-[#2A3353] rounded-md hover:bg-gray-50 dark:hover:bg-[#223060] transition-colors duration-200"
                >
                  <AppleIcon className="w-4 h-4 mr-1.5 text-black dark:text-white" />
                  <span className="dark:text-white">iOS</span>
                </button>
              </div>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>

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
    </>
  );
}
