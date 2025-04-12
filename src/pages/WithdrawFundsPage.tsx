import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function WithdrawFundsPage() {
  const navigate = useNavigate();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // State for form fields
  const [formData, setFormData] = useState({
    fullName: "Atiba Heritage",
    bankName: "Koota Bank",
    accountNumber: "2048614043",
  });

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the withdrawal request to the backend
    console.log("Withdrawal request submitted:", formData);
    // Navigate to withdrawal success page
    navigate("/withdrawal-success");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col w-screen">
      {/* Header */}
      <header className="px-4 py-3 flex items-center justify-between sticky top-0 z-50 bg-white border-b shadow-sm">
        <div className="flex items-center">
          <button onClick={() => navigate(-1)} className="p-1 mr-2">
            <svg
              className="w-5 h-5 text-gray-700"
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
          <h1 className="text-lg font-medium">Withdraw Funds</h1>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto pb-32 lg:pb-8">
        <div className="p-4 lg:max-w-lg lg:mx-auto">
          {/* Form Heading */}
          <h2 className="text-lg font-medium text-gray-800 mb-6">
            Fill in Your Account Details
          </h2>

          {/* Account Details Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Full Name */}
            <div>
              <label
                htmlFor="fullName"
                className="block text-sm text-gray-700 mb-1"
              >
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-100 rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                required
              />
            </div>

            {/* Bank Name */}
            <div>
              <label
                htmlFor="bankName"
                className="block text-sm text-gray-700 mb-1"
              >
                Bank Name
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="bankName"
                  name="bankName"
                  value={formData.bankName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-100 rounded-md focus:outline-none focus:ring-1 focus:ring-primary pr-10"
                  required
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500"
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
                </div>
              </div>
            </div>

            {/* Account Number */}
            <div>
              <label
                htmlFor="accountNumber"
                className="block text-sm text-gray-700 mb-1"
              >
                Account Number
              </label>
              <input
                type="text"
                id="accountNumber"
                name="accountNumber"
                value={formData.accountNumber}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-100 rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                required
              />
            </div>

            {/* Submit Button - Fixed at bottom for mobile, normal for desktop */}
            <div className="fixed bottom-8 left-4 right-4 lg:static lg:mt-8 lg:ml-0 lg:mr-0">
              <button
                type="submit"
                className="w-full py-3.5 bg-primary text-white rounded-full font-medium hover:bg-primary-dark transition-colors shadow-md hover:shadow-lg"
              >
                Withdraw
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
