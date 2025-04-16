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
import PetDetailsPage from "./pages/marketplace/PetDetailsPage";
import MarketplacePage from "./pages/marketplace/MarketplacePage";
import AdoptionsPage from "./pages/adoptions/AdoptionsPage";
import MateDetailsPage from "./pages/marketplace/MateDetailsPage";
import PetFoodDetailsPage from "./pages/marketplace/PetFoodDetailsPage";
import UserProfilePage from "./pages/profile/UserProfilePage";
import MyProfilePage from "./pages/profile/MyProfilePage";
import ChatPage from "./pages/chat/ChatPage";
import ChatListPage from "./pages/chat/ChatListPage";
import AccountPage from "./pages/profile/AccountPage";
import ScrollToTop from "./components/ScrollToTop";
import EditProfilePage from "./pages/profile/EditProfilePage";
import WalletPage from "./pages/wallet/WalletPage";
import WithdrawFundsPage from "./pages/wallet/WithdrawFundsPage";
import WithdrawalSuccessPage from "./pages/wallet/WithdrawalSuccessPage";
import PurchaseHistoryPage from "./pages/profile/PurchaseHistoryPage";
import SalesHistoryPage from "./pages/profile/SalesHistoryPage";
import CreatePostPage from "./pages/CreatePostPage";
import CreatePetSaleForm from "./pages/pet-sale/CreatePetSaleForm";
import CreatePetSalePhotos from "./pages/pet-sale/CreatePetSalePhotos";
import CreatePetSaleDescription from "./pages/pet-sale/CreatePetSaleDescription";
import CreatePetSalePrice from "./pages/pet-sale/CreatePetSalePrice";
import CreatePetSaleLocation from "./pages/pet-sale/CreatePetSaleLocation";
import CreatePetSaleContact from "./pages/pet-sale/CreatePetSaleContact";
import ReviewPetSale from "./pages/pet-sale/ReviewPetSale";
import BuyCreditsPage from "./pages/wallet/BuyCreditsPage";
import PurchaseSuccessPage from "./pages/wallet/PurchaseSuccessPage";
import PostSuccessPage from "./pages/pet-sale/PostSuccessPage";
import CreatePetFoodSaleForm from "./pages/pet-food-sale/CreatePetFoodSaleForm";
import CreatePetFoodSalePhotos from "./pages/pet-food-sale/CreatePetFoodSalePhotos";
import CreatePetFoodSaleDescription from "./pages/pet-food-sale/CreatePetFoodSaleDescription";
import CreatePetFoodSalePrice from "./pages/pet-food-sale/CreatePetFoodSalePrice";
import CreatePetFoodSaleLocation from "./pages/pet-food-sale/CreatePetFoodSaleLocation";
import CreatePetFoodSaleContact from "./pages/pet-food-sale/CreatePetFoodSaleContact";
import ReviewPetFoodSale from "./pages/pet-food-sale/ReviewPetFoodSale";
import CreateMatingForm from "./pages/mating/CreateMatingForm";
import CreateMatingPhotos from "./pages/mating/CreateMatingPhotos";
import CreateMatingDescription from "./pages/mating/CreateMatingDescription";
import CreateMatingLocation from "./pages/mating/CreateMatingLocation";
import CreateMatingContact from "./pages/mating/CreateMatingContact";
import ReviewMating from "./pages/mating/ReviewMating";
import CreatePetAdoptionForm from "./pages/pet-adoption/CreatePetAdoptionForm";
import CreatePetAdoptionPhotos from "./pages/pet-adoption/CreatePetAdoptionPhotos";
import CreatePetAdoptionDescription from "./pages/pet-adoption/CreatePetAdoptionDescription";
import CreatePetAdoptionLocation from "./pages/pet-adoption/CreatePetAdoptionLocation";
import CreatePetAdoptionContact from "./pages/pet-adoption/CreatePetAdoptionContact";
import ReviewPetAdoption from "./pages/pet-adoption/ReviewPetAdoption";
import AdoptionPostSuccessPage from "./pages/pet-adoption/AdoptionPostSuccessPage";
import AdoptionMembershipPage from "./pages/adoptions/AdoptionMembershipPage";
import AdoptionDetailsPage from "./pages/adoptions/AdoptionDetailsPage";
import AdoptionRequestSubmittedPage from "./pages/adoptions/AdoptionRequestSubmittedPage";

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
        <Route path="/pet-food/:id" element={<PetFoodDetailsPage />} />
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
        <Route path="/wallet/buy-credits" element={<BuyCreditsPage />} />
        <Route
          path="/adoption-membership"
          element={<AdoptionMembershipPage />}
        />
        <Route
          path="/adoption-details/:adoptionId"
          element={<AdoptionDetailsPage />}
        />
        <Route path="/adoption-details" element={<AdoptionDetailsPage />} />
        <Route
          path="/wallet/purchase-success"
          element={<PurchaseSuccessPage />}
        />
        <Route path="/pet-sale/post-success" element={<PostSuccessPage />} />
        <Route path="/withdraw-funds" element={<WithdrawFundsPage />} />
        <Route path="/withdrawal-success" element={<WithdrawalSuccessPage />} />
        <Route path="/purchases" element={<PurchaseHistoryPage />} />
        <Route path="/sales" element={<SalesHistoryPage />} />
        <Route path="/create-post" element={<CreatePostPage />} />
        <Route path="/create/:postType" element={<CreatePostPage />} />
        <Route path="/create-pet-sale" element={<CreatePetSaleForm />} />
        <Route
          path="/create-pet-sale/details"
          element={<CreatePetSaleForm />}
        />
        <Route
          path="/create-pet-sale/photos"
          element={<CreatePetSalePhotos />}
        />
        <Route
          path="/create-pet-sale/description"
          element={<CreatePetSaleDescription />}
        />
        <Route path="/create-pet-sale/price" element={<CreatePetSalePrice />} />
        <Route
          path="/create-pet-sale/location"
          element={<CreatePetSaleLocation />}
        />
        <Route
          path="/create-pet-sale/contact"
          element={<CreatePetSaleContact />}
        />
        <Route path="/pet-sale/review" element={<ReviewPetSale />} />

        {/* Pet Food Sale Routes */}
        <Route
          path="/create-pet-food-sale"
          element={<CreatePetFoodSaleForm />}
        />
        <Route
          path="/create-pet-food-sale/photos"
          element={<CreatePetFoodSalePhotos />}
        />
        <Route
          path="/create-pet-food-sale/description"
          element={<CreatePetFoodSaleDescription />}
        />
        <Route
          path="/create-pet-food-sale/price"
          element={<CreatePetFoodSalePrice />}
        />
        <Route
          path="/create-pet-food-sale/location"
          element={<CreatePetFoodSaleLocation />}
        />
        <Route
          path="/create-pet-food-sale/contact"
          element={<CreatePetFoodSaleContact />}
        />
        <Route path="/pet-food-sale/review" element={<ReviewPetFoodSale />} />

        {/* Mating Routes */}
        <Route path="/create-mating" element={<CreateMatingForm />} />
        <Route path="/create-mating/details" element={<CreateMatingForm />} />
        <Route path="/create-mating/photos" element={<CreateMatingPhotos />} />
        <Route
          path="/create-mating/description"
          element={<CreateMatingDescription />}
        />
        <Route
          path="/create-mating/location"
          element={<CreateMatingLocation />}
        />
        <Route
          path="/create-mating/contact"
          element={<CreateMatingContact />}
        />
        <Route path="/create-mating/review" element={<ReviewMating />} />

        {/* Pet Adoption Routes */}
        <Route
          path="/create-pet-adoption"
          element={<CreatePetAdoptionForm />}
        />
        <Route
          path="/create-pet-adoption/details"
          element={<CreatePetAdoptionForm />}
        />
        <Route
          path="/create-pet-adoption/photos"
          element={<CreatePetAdoptionPhotos />}
        />
        <Route
          path="/create-pet-adoption/description"
          element={<CreatePetAdoptionDescription />}
        />
        <Route
          path="/create-pet-adoption/location"
          element={<CreatePetAdoptionLocation />}
        />
        <Route
          path="/create-pet-adoption/contact"
          element={<CreatePetAdoptionContact />}
        />
        <Route
          path="/create-pet-adoption/review"
          element={<ReviewPetAdoption />}
        />
        <Route
          path="/pet-adoption/post-success"
          element={<AdoptionPostSuccessPage />}
        />
        <Route
          path="/adoption-request-submitted"
          element={<AdoptionRequestSubmittedPage />}
        />
      </Routes>
    </Router>
  );
}

export default App;
