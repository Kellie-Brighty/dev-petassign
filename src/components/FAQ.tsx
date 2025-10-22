import { useState } from "react";
import AndroidIcon from "./AndroidIcon";
import AppleIcon from "./AppleIcon";
import AppModal from "./AppModal";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

function FAQItem({ question, answer, isOpen, onClick }: FAQItemProps) {
  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded-lg">
      <button
        className="w-full px-6 py-4 text-left flex items-center justify-between focus:outline-none bg-transparent"
        onClick={onClick}
      >
        <span className="text-base font-medium text-gray-900 dark:text-white">
          {question}
        </span>
        <svg
          className={`w-5 h-5 text-gray-500 dark:text-gray-400 transition-transform duration-200 ${
            isOpen ? "transform rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="px-6 pb-4">
          <p className="text-gray-600 dark:text-gray-300">{answer}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number>(1); // Second question open by default
  const [androidModalOpen, setAndroidModalOpen] = useState(false);
  const [iosModalOpen, setIosModalOpen] = useState(false);

  const faqs = [
    {
      question: "How do I buy, sell, or adopt pets on the platform?",
      answer:
        "You can easily list your pets for sale or browse available pets for adoption. Simply create an account, verify your details, and start engaging with the community.",
    },
    {
      question: "How does the credit system work?",
      answer:
        "You need credits to post listings on the platform. Purchase credits through the app, and each listing costs one credit to publish.",
    },
    {
      question: "Is my payment information secure?",
      answer:
        "Yes, we use industry-standard encryption and security measures to protect all your payment information and personal data.",
    },
    {
      question: "Can I withdraw money from sales made on the platform?",
      answer:
        "Yes, you can withdraw your earnings from successful sales through our secure payment system to your linked bank account.",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-white dark:bg-[#101935] py-24 lg:py-15">
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-12">
          <div>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/20 text-primary text-sm font-medium">
              Frequently Asked Questions
            </div>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-[40px] font-bold text-gray-900 dark:text-white">
              Have Questions About How Our Platform Works?
              <br />
              We've Got You Covered!
            </h2>
          </div>
          <div className="lg:mt-8">
            <div className="flex flex-wrap gap-3">
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

        <div className="grid gap-4 bg-transparent">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={index === openIndex}
              onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
            />
          ))}
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
