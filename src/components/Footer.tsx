import { FaFacebook, FaInstagram } from "react-icons/fa";
import logo from "../assets/logo.svg";

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-gray-100">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col space-y-16">
          {/* Top Section */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
            {/* Logo and Description */}
            <div className="flex flex-col space-y-4 max-w-sm">
              <div className="flex items-center space-x-2">
                <img src={logo} alt="Pet Assign Logo" className="w-50 h-50" />
              </div>
              <p className="text-gray-600 text-base leading-relaxed">
                Join the fastest-growing pet community and sell, purchase or
                adopt pets, sell or purchase pet related products
              </p>
            </div>

            {/* Download Section */}
            <div className="flex flex-col items-start space-y-4 mt-8 lg:mt-0">
              <span className="text-sm font-medium text-gray-900">
                Download the app
              </span>
              <div className="flex flex-col sm:flex-row gap-3">
                <button className="inline-flex items-center px-4 py-2.5 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <svg
                    className="w-5 h-5 mr-2 text-gray-900"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M17.523 15.34c-.89.887-1.485 2.018-1.485 3.274v.326h-7.37v-.326c0-1.256-.595-2.387-1.485-3.274-2.973-2.973-2.973-7.81 0-10.783s7.81-2.973 10.783 0 2.973 7.81 0 10.783z" />
                  </svg>
                  <span className="text-sm font-medium text-gray-900">
                    Get on Android
                  </span>
                </button>
                <button className="inline-flex items-center px-4 py-2.5 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <svg
                    className="w-5 h-5 mr-2 text-gray-900"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                  <span className="text-sm font-medium text-gray-900">
                    Get on iPhone
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col-reverse sm:flex-row justify-between items-center space-y-4 space-y-reverse sm:space-y-0">
            <p className="text-sm text-gray-600">© 2024 Pet assign</p>
            <div className="flex items-center space-x-6">
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
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
    </footer>
  );
}
