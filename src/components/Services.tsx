import effortlessOne from "../assets/effortless-one.svg";
import effortlessTwo from "../assets/effortless-two.svg";
import effortlessThree from "../assets/effortless-three.svg";

export default function Services() {
  return (
    <section className="relative w-full overflow-hidden bg-white dark:bg-[#101935] py-24 lg:py-15">
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/20 text-primary text-sm font-medium">
            SERVICES
          </div>
          <h2 className="mt-6 text-3xl sm:text-4xl lg:text-[40px] font-bold text-gray-900 dark:text-white">
            Effortless Pet Experience
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Buy, sell, adopt pets and connect with fellow pet lovers all in one
            convenient app
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="bg-[#F8F9FB] dark:bg-[#1A2542] rounded-2xl p-6 lg:p-8">
            <div className="aspect-[4/3] relative mb-8">
              <img
                src={effortlessOne}
                alt="Browse and connect interface"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Browse Pets and Connect with Owners
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Easily browse through pets for sale, adoption, or mating, and
                connect with verified users near you.
              </p>
            </div>
          </div>

          {/* Service 2 */}
          <div className="bg-[#F8F9FB] dark:bg-[#1A2542] rounded-2xl p-6 lg:p-8">
            <div className="aspect-[4/3] relative mb-8">
              <img
                src={effortlessTwo}
                alt="Listing management interface"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Create and Manage Listings with Ease
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Post your pets or supplies effortlessly, and manage all your
                listings from one convenient place.
              </p>
            </div>
          </div>

          {/* Service 3 */}
          <div className="bg-[#F8F9FB] dark:bg-[#1A2542] rounded-2xl p-6 lg:p-8">
            <div className="aspect-[4/3] relative mb-8">
              <img
                src={effortlessThree}
                alt="Secure payment interface"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Handle Secure Transactions and Payments
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Safely track your credits, process payments, and manage
                withdrawals through your in-app wallet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
