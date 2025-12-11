import { useState } from "react";
import logo from "../assets/logo.svg";
import AndroidIcon from "./AndroidIcon";
import AppleIcon from "./AppleIcon";
import AppModal from "./AppModal";

export default function Footer() {
  const [androidModalOpen, setAndroidModalOpen] = useState(false);
  const [iosModalOpen, setIosModalOpen] = useState(false);

  return (
    <footer className="w-full bg-white dark:bg-[#101935] border-t border-gray-100 dark:border-gray-800">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="flex flex-col space-y-8 sm:space-y-12 lg:space-y-16">
          {/* Top Section */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 lg:gap-0">
            {/* Logo and Description */}
            <div className="flex flex-col space-y-3 sm:space-y-4 w-full lg:max-w-sm">
              <div className="flex items-center space-x-2">
                <img src={logo} alt="Pet Assign Logo" className="h-8 sm:h-10 w-auto" />
              </div>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                Join the fastest-growing pet community and sell, purchase or
                adopt pets, sell or purchase pet related products
              </p>
            </div>

            {/* Download Section */}
            <div className="flex flex-col items-start sm:items-center lg:items-start space-y-3 sm:space-y-4 w-full lg:w-auto">
              <span className="text-sm font-medium text-gray-900 dark:text-white">
                Download the app
              </span>
              <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                <button
                  onClick={() => setAndroidModalOpen(true)}
                  className="inline-flex items-center justify-center px-4 py-2.5 bg-white dark:bg-[#1A2542] border border-gray-200 dark:border-[#2A3353] rounded-lg hover:bg-gray-50 dark:hover:bg-[#223060] transition-colors w-full sm:w-auto"
                >
                  <AndroidIcon className="w-5 h-5 mr-2 text-gray-900 dark:text-white" />
                  <span className="text-sm font-medium text-gray-900 dark:text-white">
                    Get on Android
                  </span>
                </button>
                <button
                  onClick={() => setIosModalOpen(true)}
                  className="inline-flex items-center justify-center px-4 py-2.5 bg-white dark:bg-[#1A2542] border border-gray-200 dark:border-[#2A3353] rounded-lg hover:bg-gray-50 dark:hover:bg-[#223060] transition-colors w-full sm:w-auto"
                >
                  <AppleIcon className="w-5 h-5 mr-2 text-gray-900 dark:text-white" />
                  <span className="text-sm font-medium text-gray-900 dark:text-white">
                    Get on iPhone
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0 pt-4 sm:pt-0 border-t border-gray-200 dark:border-gray-700 sm:border-t-0">
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 text-center sm:text-left">
              © 2024 Pet assign
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
              <a
                href="/contact"
                className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                Contact Us
              </a>
              <a
                href="/privacy"
                className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="/terms-of-service"
                className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                Terms of Service
              </a>
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
    </footer>
  );
}
