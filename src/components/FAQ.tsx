import { useState } from "react";

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
            <button className="inline-flex items-center px-5 py-2.5 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors duration-200">
              <span className="text-sm font-medium">Join PetWorld</span>
            </button>
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
    </section>
  );
}
