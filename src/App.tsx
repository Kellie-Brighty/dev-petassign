import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import OTPVerification from "./components/OTPVerification";
import UserProfile from "./components/UserProfile";
import SelectGoal from "./components/SelectGoal";
import PetOwnership from "./components/PetOwnership";
import PetPreferences from "./components/PetPreferences";
import CreateBio from "./components/CreateBio";
import Location from "./components/Location";
import Languages from "./components/Languages";
import UploadPhoto from "./components/UploadPhoto";
import WelcomeScreen from "./components/WelcomeScreen";
import HomePage from "./pages/HomePage";
import LandingPage from "./pages/LandingPage";
import PetDetailsPage from "./pages/PetDetailsPage";
import MarketplacePage from "./pages/MarketplacePage";
import AdoptionsPage from "./pages/AdoptionsPage";
import MateDetailsPage from "./pages/MateDetailsPage";
import UserProfilePage from "./pages/UserProfilePage";
import MyProfilePage from "./pages/MyProfilePage";
import ChatPage from "./pages/ChatPage";
import ChatListPage from "./pages/ChatListPage";
import AccountPage from "./pages/AccountPage";
import ScrollToTop from "./components/ScrollToTop";
import EditProfilePage from "./pages/EditProfilePage";
import WalletPage from "./pages/WalletPage";
import WithdrawFundsPage from "./pages/WithdrawFundsPage";
import WithdrawalSuccessPage from "./pages/WithdrawalSuccessPage";
import PurchaseHistoryPage from "./pages/PurchaseHistoryPage";
import SalesHistoryPage from "./pages/SalesHistoryPage";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/verify" element={<OTPVerification />} />
        <Route path="/complete-profile" element={<UserProfile />} />
        <Route path="/select-goal" element={<SelectGoal />} />
        <Route path="/pet-ownership" element={<PetOwnership />} />
        <Route path="/pet-preferences" element={<PetPreferences />} />
        <Route path="/create-bio" element={<CreateBio />} />
        <Route path="/location" element={<Location />} />
        <Route path="/languages" element={<Languages />} />
        <Route path="/upload-photo" element={<UploadPhoto />} />
        <Route path="/welcome" element={<WelcomeScreen />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/pet/:id" element={<PetDetailsPage />} />
        <Route path="/marketplace" element={<MarketplacePage />} />
        <Route path="/marketplace/:category" element={<MarketplacePage />} />
        <Route path="/adoptions" element={<AdoptionsPage />} />
        <Route path="/adoption/:id" element={<PetDetailsPage />} />
        <Route path="/mate/:id" element={<MateDetailsPage />} />
        <Route path="/user/:userId" element={<UserProfilePage />} />
        <Route path="/my-profile" element={<MyProfilePage />} />
        <Route path="/chats" element={<ChatListPage />} />
        <Route path="/chat/:chatId" element={<ChatPage />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/edit-profile" element={<EditProfilePage />} />
        <Route path="/wallet" element={<WalletPage />} />
        <Route path="/withdraw-funds" element={<WithdrawFundsPage />} />
        <Route path="/withdrawal-success" element={<WithdrawalSuccessPage />} />
        <Route path="/purchases" element={<PurchaseHistoryPage />} />
        <Route path="/sales" element={<SalesHistoryPage />} />
      </Routes>
    </Router>
  );
}

export default App;
