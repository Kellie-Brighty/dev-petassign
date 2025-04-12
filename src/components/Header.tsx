import logo from "../assets/logo.svg";
import { useNavigate } from "react-router-dom";
export default function Header() {
  const navigate = useNavigate();
  return (
    <>
      {/* Spacer div to prevent content jump */}
      <div className="h-20" />

      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="absolute inset-0 bg-white/60 backdrop-blur-md border-b border-white/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a
              onClick={() => navigate("/")}
              className="flex items-center cursor-pointer"
            >
              <img src={logo} alt="PetAssign" className="h-6 w-auto" />
            </a>

            {/* Auth Buttons */}
            <div className="flex items-center gap-4">
              <p
                onClick={() => navigate("/signin")}
                className="text-gray-600 hover:text-primary font-medium text-sm cursor-pointer"
              >
                Log in
              </p>
              <p
                onClick={() => navigate("/signup")}
                className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-lg text-white bg-primary hover:bg-primary/90 transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer"
              >
                Get Started
              </p>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
