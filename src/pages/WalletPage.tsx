import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BottomNavigation from "../components/dashboard/BottomNavigation";

export default function WalletPage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("account");

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Wallet data - this would come from an API in a real app
  const walletData = {
    balance: 200,
    itemsSold: 22,
    monthlyEarnings: 176,
  };

  const handleWithdraw = () => {
    // Navigate to withdrawal form page
    navigate("/withdraw-funds");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col w-screen">
      {/* Header */}
      <header className="px-4 py-3 flex items-center justify-between sticky top-0 z-50 bg-white border-b shadow-sm">
        <div className="flex items-center">
          <button onClick={() => navigate("/account")} className="p-1 mr-2">
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
          <h1 className="text-lg font-medium">My Wallet</h1>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto pb-28 lg:pb-8">
        <div className="p-4 lg:max-w-lg lg:mx-auto">
          {/* Subtitle */}
          <p className="text-sm text-gray-500 mb-6">
            Check your balance and withdraw funds securely.
          </p>

          {/* Wallet Balance */}
          <div className="bg-white rounded-xl shadow-md p-5 mb-4 border border-gray-200">
            <h2 className="text-sm text-gray-500 mb-1">Wallet Balance</h2>
            <div className="text-3xl font-bold text-gray-900">
              ${walletData.balance}
            </div>
          </div>

          {/* Items Sold */}
          <div className="bg-white rounded-xl shadow-md p-5 mb-4 border border-gray-200">
            <h2 className="text-sm text-gray-500 mb-1">Items Sold</h2>
            <div className="text-3xl font-bold text-gray-900">
              {walletData.itemsSold}
            </div>
          </div>

          {/* Monthly Earnings */}
          <div className="bg-white rounded-xl shadow-md p-5 mb-8 border border-gray-200">
            <h2 className="text-sm text-gray-500 mb-1">12-month earnings</h2>
            <div className="text-3xl font-bold text-gray-900">
              ${walletData.monthlyEarnings}
            </div>
          </div>

          {/* Withdraw Button */}
          <button
            onClick={handleWithdraw}
            className="w-full py-3.5 bg-primary text-white rounded-full font-medium hover:bg-primary-dark transition-colors shadow-md hover:shadow-lg"
          >
            Withdraw Funds
          </button>

          {/* Desktop view additional information */}
          <div className="hidden lg:block mt-8 bg-white rounded-xl shadow-md p-5 border border-gray-200">
            <h2 className="text-lg font-medium text-gray-800 mb-4">
              Transaction History
            </h2>
            <div className="space-y-3">
              <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                <div>
                  <p className="font-medium text-gray-800">Pet Food Sale</p>
                  <p className="text-xs text-gray-500">May 15, 2023</p>
                </div>
                <div className="text-primary font-medium">+$45.00</div>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                <div>
                  <p className="font-medium text-gray-800">
                    Golden Retriever Sale
                  </p>
                  <p className="text-xs text-gray-500">April 28, 2023</p>
                </div>
                <div className="text-primary font-medium">+$120.00</div>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                <div>
                  <p className="font-medium text-gray-800">
                    Withdrawal to Bank
                  </p>
                  <p className="text-xs text-gray-500">April 15, 2023</p>
                </div>
                <div className="text-red-500 font-medium">-$85.00</div>
              </div>
            </div>
            <div className="mt-4 text-center">
              <button className="text-primary text-sm font-medium hover:underline">
                View All Transactions
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="lg:hidden">
        <BottomNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
    </div>
  );
}
