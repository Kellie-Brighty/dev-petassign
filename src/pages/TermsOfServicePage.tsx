import { useNavigate } from "react-router-dom";
import ThemeToggle from "../components/ThemeToggle";

export default function TermsOfServicePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white dark:bg-[#0A1121] flex flex-col w-screen">
      {/* Header */}
      <header className="px-4 py-3 flex items-center justify-between sticky top-0 z-50 bg-white dark:bg-[#101935] border-b border-gray-200 dark:border-[#1A2542] w-screen shadow-sm">
        <div className="flex items-center">
          <button onClick={() => navigate(-1)} className="p-1 mr-2">
            <svg
              className="w-5 h-5 text-gray-700 dark:text-white"
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
          <h1 className="text-lg font-medium text-gray-900 dark:text-white">
            Terms of Service
          </h1>
        </div>
        <div className="flex items-center">
          <ThemeToggle />
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto pb-8">
        <div className="max-w-4xl mx-auto px-4 py-8">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Terms of Service
            </h1>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              Effective Date: December 2024
            </p>
            <div className="mt-6 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
              <p className="text-green-800 dark:text-green-200 text-sm">
                These Terms of Service ("Terms") govern your use of the PetAssign mobile application and related services ("Services"). By accessing or using our Services, you agree to these Terms.
              </p>
            </div>
          </div>

          {/* Content Sections */}
          <div className="space-y-8">
            {/* Section 1 */}
            <section className="bg-white dark:bg-[#101935] rounded-xl shadow-sm border border-gray-200 dark:border-[#1A2542] p-6">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">1</span>
                </div>
                Eligibility
              </h2>
              <div className="text-gray-700 dark:text-gray-300">
                <p>You must be at least 18 years old (or the age of majority in your jurisdiction) to use PetAssign. By creating an account, you confirm you meet this requirement.</p>
              </div>
            </section>

            {/* Section 2 */}
            <section className="bg-white dark:bg-[#101935] rounded-xl shadow-sm border border-gray-200 dark:border-[#1A2542] p-6">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">2</span>
                </div>
                User Accounts
              </h2>
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>You are responsible for maintaining the confidentiality of your login credentials.</div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>You agree to provide accurate and complete information.</div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>We may suspend or terminate accounts that violate our policies.</div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 3 */}
            <section className="bg-white dark:bg-[#101935] rounded-xl shadow-sm border border-gray-200 dark:border-[#1A2542] p-6">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">3</span>
                </div>
                Use of Services
              </h2>
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <p>You agree to use PetAssign responsibly:</p>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>Do not post false, misleading, or illegal listings.</div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>Do not use the platform for harmful, abusive, or fraudulent purposes.</div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>Do not trade or sell prohibited or endangered animals.</div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>Respect other users and communicate in good faith.</div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 4 */}
            <section className="bg-white dark:bg-[#101935] rounded-xl shadow-sm border border-gray-200 dark:border-[#1A2542] p-6">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">4</span>
                </div>
                Pet Listings & Transactions
              </h2>
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>PetAssign is a marketplace platform and does not own or directly sell pets.</div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>Users are solely responsible for the accuracy of listings and safe transfer of pets.</div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>We strongly encourage responsible pet adoption and compliance with local laws.</div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>Transactions are at your own risk; PetAssign is not liable for disputes between users.</div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 5 */}
            <section className="bg-white dark:bg-[#101935] rounded-xl shadow-sm border border-gray-200 dark:border-[#1A2542] p-6">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">5</span>
                </div>
                Payments
              </h2>
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>Purchases of pet feeds and supplies may be processed through third-party payment providers.</div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>By making a purchase, you agree to their terms and fees.</div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>PetAssign is not responsible for delays, errors, or issues caused by payment providers.</div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 6 */}
            <section className="bg-white dark:bg-[#101935] rounded-xl shadow-sm border border-gray-200 dark:border-[#1A2542] p-6">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">6</span>
                </div>
                Prohibited Activities
              </h2>
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <p>You may not:</p>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>Use the app for illegal trade.</div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>Upload harmful content (malware, offensive material).</div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>Harass, scam, or defraud other users.</div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 7 */}
            <section className="bg-white dark:bg-[#101935] rounded-xl shadow-sm border border-gray-200 dark:border-[#1A2542] p-6">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">7</span>
                </div>
                Intellectual Property
              </h2>
              <div className="text-gray-700 dark:text-gray-300">
                <p>All trademarks, logos, and content in PetAssign are owned by us or our licensors. You may not copy, reproduce, or distribute them without permission.</p>
              </div>
            </section>

            {/* Section 8 */}
            <section className="bg-white dark:bg-[#101935] rounded-xl shadow-sm border border-gray-200 dark:border-[#1A2542] p-6">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">8</span>
                </div>
                Termination
              </h2>
              <div className="text-gray-700 dark:text-gray-300">
                <p>We may suspend or terminate your access if you violate these Terms. You may also delete your account at any time.</p>
              </div>
            </section>

            {/* Section 9 */}
            <section className="bg-white dark:bg-[#101935] rounded-xl shadow-sm border border-gray-200 dark:border-[#1A2542] p-6">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">9</span>
                </div>
                Disclaimers & Liability
              </h2>
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>PetAssign is provided "as is," without warranties.</div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>We are not responsible for user-generated content, pet condition, or transaction outcomes.</div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>To the fullest extent permitted by law, our liability is limited.</div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 10 */}
            <section className="bg-white dark:bg-[#101935] rounded-xl shadow-sm border border-gray-200 dark:border-[#1A2542] p-6">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">10</span>
                </div>
                Changes to Terms
              </h2>
              <div className="text-gray-700 dark:text-gray-300">
                <p>We may update these Terms at any time. Continued use of the app means you accept the updated Terms.</p>
              </div>
            </section>

            {/* Section 11 */}
            <section className="bg-white dark:bg-[#101935] rounded-xl shadow-sm border border-gray-200 dark:border-[#1A2542] p-6">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">11</span>
                </div>
                Governing Law
              </h2>
              <div className="text-gray-700 dark:text-gray-300">
                <p>These Terms are governed by the laws of Nigeria.</p>
              </div>
            </section>

            {/* Section 12 - Contact */}
            <section className="bg-gradient-to-r from-primary to-blue-600 rounded-xl shadow-sm p-6 text-white">
              <h2 className="text-2xl font-semibold mb-4 flex items-center">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">12</span>
                </div>
                Contact Us
              </h2>
              <div className="space-y-4">
                <p>For questions or concerns:</p>
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:support@petassign.app" className="text-white hover:text-blue-100 underline">
                    support@petassign.app
                  </a>
                </div>
              </div>
            </section>
          </div>

          {/* Footer Note */}
          <div className="mt-12 text-center">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Last updated: December 2024
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
