import { useNavigate } from "react-router-dom";
import ThemeToggle from "../components/ThemeToggle";

export default function PrivacyPolicyPage() {
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
            Privacy Policy
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
              Privacy Policy
            </h1>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              Effective Date: December 2024
            </p>
            <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
              <p className="text-blue-800 dark:text-blue-200 text-sm">
                <strong>PetAssign</strong> ("we," "our," or "us") values your privacy. This Privacy Policy explains how we collect, use, and protect your information when you use our mobile application ("App") and related services.
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
                Information We Collect
              </h2>
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <p>We may collect the following types of information:</p>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <strong className="text-gray-900 dark:text-white">Personal Information:</strong> Name, email address, phone number, location (if provided).
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <strong className="text-gray-900 dark:text-white">Account Information:</strong> Login details, profile preferences, and communication history.
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <strong className="text-gray-900 dark:text-white">Transaction Information:</strong> Purchase history, orders for pets or pet supplies.
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <strong className="text-gray-900 dark:text-white">Device Information:</strong> IP address, device type, operating system, and usage statistics.
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <strong className="text-gray-900 dark:text-white">User Content:</strong> Messages, photos, and listings you post on the platform.
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 2 */}
            <section className="bg-white dark:bg-[#101935] rounded-xl shadow-sm border border-gray-200 dark:border-[#1A2542] p-6">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">2</span>
                </div>
                How We Use Your Information
              </h2>
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <p>We use the information we collect to:</p>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>Provide and improve our services.</div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>Facilitate pet adoption, trading, and supply purchases.</div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>Enable communication between pet owners and traders.</div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>Process payments and transactions.</div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>Send you updates, promotions, and security alerts.</div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>Ensure user safety and compliance with our policies.</div>
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
                Sharing of Information
              </h2>
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <p>We do not sell your personal information. We may share your data with:</p>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <strong className="text-gray-900 dark:text-white">Service Providers:</strong> Payment processors, hosting providers, analytics tools.
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <strong className="text-gray-900 dark:text-white">Legal Authorities:</strong> When required by law or to protect user safety.
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <strong className="text-gray-900 dark:text-white">Other Users:</strong> Information you choose to share (e.g., profile, listings, chats).
                    </div>
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
                Data Retention
              </h2>
              <div className="text-gray-700 dark:text-gray-300">
                <p>We retain personal data only as long as necessary for service delivery, legal obligations, or dispute resolution. You may request account deletion at any time.</p>
              </div>
            </section>

            {/* Section 5 */}
            <section className="bg-white dark:bg-[#101935] rounded-xl shadow-sm border border-gray-200 dark:border-[#1A2542] p-6">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">5</span>
                </div>
                Security
              </h2>
              <div className="text-gray-700 dark:text-gray-300">
                <p>We use industry-standard measures (encryption, authentication, secure storage) to protect your data. However, no system is 100% secure.</p>
              </div>
            </section>

            {/* Section 6 */}
            <section className="bg-white dark:bg-[#101935] rounded-xl shadow-sm border border-gray-200 dark:border-[#1A2542] p-6">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">6</span>
                </div>
                Children's Privacy
              </h2>
              <div className="text-gray-700 dark:text-gray-300">
                <p>PetAssign is not intended for children under 13. We do not knowingly collect information from minors.</p>
              </div>
            </section>

            {/* Section 7 */}
            <section className="bg-white dark:bg-[#101935] rounded-xl shadow-sm border border-gray-200 dark:border-[#1A2542] p-6">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">7</span>
                </div>
                Your Rights
              </h2>
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <p>You may:</p>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>Access, update, or delete your account information.</div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>Opt out of promotional emails.</div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>Request data export or erasure by contacting us.</div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 8 */}
            <section className="bg-white dark:bg-[#101935] rounded-xl shadow-sm border border-gray-200 dark:border-[#1A2542] p-6">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">8</span>
                </div>
                Third-Party Services
              </h2>
              <div className="text-gray-700 dark:text-gray-300">
                <p>Our app may contain links to third-party websites or services. We are not responsible for their privacy practices.</p>
              </div>
            </section>

            {/* Section 9 */}
            <section className="bg-white dark:bg-[#101935] rounded-xl shadow-sm border border-gray-200 dark:border-[#1A2542] p-6">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">9</span>
                </div>
                Updates to This Policy
              </h2>
              <div className="text-gray-700 dark:text-gray-300">
                <p>We may update this Privacy Policy periodically. Updates will be posted with a new "Effective Date."</p>
              </div>
            </section>

            {/* Section 10 - Contact */}
            <section className="bg-gradient-to-r from-primary to-blue-600 rounded-xl shadow-sm p-6 text-white">
              <h2 className="text-2xl font-semibold mb-4 flex items-center">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">10</span>
                </div>
                Contact Us
              </h2>
              <div className="space-y-4">
                <p>If you have questions about this Privacy Policy, contact us at:</p>
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
