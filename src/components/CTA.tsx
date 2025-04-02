import readyToJoinImage from "../assets/ready-to-join.svg";

export default function CTA() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-24 lg:py-15">
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden">
              <img
                src={readyToJoinImage}
                alt="Happy family with their pet"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Column - Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-gray-900 leading-tight">
              Ready to Join Our Pet Community?
            </h2>
            <p className="mt-6 text-lg text-gray-600">
              Connect with pet lovers, buy or sell pets and supplies, and enjoy
              a seamless, secure experience. Whether you're adopting, selling,
              or finding a match, we've got you covered.
            </p>

            <div className="flex flex-wrap gap-3 mt-8">
              <button className="inline-flex items-center px-5 py-2.5 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                <svg
                  className="w-5 h-5 mr-2 text-black"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17.523 15.34c-.89.887-1.485 2.018-1.485 3.274v.326h-7.37v-.326c0-1.256-.595-2.387-1.485-3.274-2.973-2.973-2.973-7.81 0-10.783s7.81-2.973 10.783 0 2.973 7.81 0 10.783z" />
                </svg>
                <span className="text-sm font-medium">Get on Android</span>
              </button>
              <button className="inline-flex items-center px-5 py-2.5 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                <svg
                  className="w-5 h-5 mr-2 text-black"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <span className="text-sm font-medium">Get on iOS</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
