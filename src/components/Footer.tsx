import { useState } from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import logo from "../assets/logo.svg";
import AndroidIcon from "./AndroidIcon";
import AppleIcon from "./AppleIcon";
import AppModal from "./AppModal";

export default function Footer() {
  const [androidModalOpen, setAndroidModalOpen] = useState(false);
  const [iosModalOpen, setIosModalOpen] = useState(false);

  return (
    <footer className="w-full bg-white dark:bg-[#101935] border-t border-gray-100 dark:border-gray-800">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col space-y-16">
          {/* Top Section */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
            {/* Logo and Description */}
            <div className="flex flex-col space-y-4 max-w-sm">
              <div className="flex items-center space-x-2">
                <img src={logo} alt="Pet Assign Logo" className="w-50 h-50" />
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
                Join the fastest-growing pet community and sell, purchase or
                adopt pets, sell or purchase pet related products
              </p>
            </div>

            {/* Download Section */}
            <div className="flex flex-col items-start space-y-4 mt-8 lg:mt-0">
              <span className="text-sm font-medium text-gray-900 dark:text-white">
                Download the app
              </span>
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => setAndroidModalOpen(true)}
                  className="inline-flex items-center px-4 py-2.5 bg-white dark:bg-[#1A2542] border border-gray-200 dark:border-[#2A3353] rounded-lg hover:bg-gray-50 dark:hover:bg-[#223060] transition-colors"
                >
                  <AndroidIcon className="w-5 h-5 mr-2 text-gray-900 dark:text-white" />
                  <span className="text-sm font-medium text-gray-900 dark:text-white">
                    Get on Android
                  </span>
                </button>
                <button
                  onClick={() => setIosModalOpen(true)}
                  className="inline-flex items-center px-4 py-2.5 bg-white dark:bg-[#1A2542] border border-gray-200 dark:border-[#2A3353] rounded-lg hover:bg-gray-50 dark:hover:bg-[#223060] transition-colors"
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
          <div className="flex flex-col-reverse sm:flex-row justify-between items-center space-y-4 space-y-reverse sm:space-y-0">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © 2024 Pet assign
            </p>
            <div className="flex items-center space-x-6">
              <a
                href="#"
                className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
              >
                Privacy Policy
              </a>
              <div className="flex items-center space-x-4">
                <a
                  href="#"
                  className="text-[#1877F2] hover:opacity-80 transition-opacity"
                >
                  <FaFacebook size={20} />
                </a>
                <a
                  href="#"
                  className="text-[#1877F2] hover:opacity-80 transition-opacity"
                >
                  <FaInstagram size={20} />
                </a>
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
    </footer>
  );
}
