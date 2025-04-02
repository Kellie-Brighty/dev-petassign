import logo from "../assets/logo.svg";

export default function Header() {
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
            <a href="/" className="flex items-center">
              <img src={logo} alt="PetAssign" className="h-6 w-auto" />
            </a>

            {/* Auth Buttons */}
            <div className="flex items-center gap-4">
              <a
                href="/login"
                className="text-gray-600 hover:text-primary font-medium text-sm"
              >
                Log in
              </a>
              <a
                href="/signup"
                className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-lg text-white bg-primary hover:bg-primary/90 transition-all duration-200 shadow-sm hover:shadow-md"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
