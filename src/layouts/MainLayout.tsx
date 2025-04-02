import { ReactNode } from "react";

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen mx-auto w-screen overflow-x-hidden">
      {/* <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200">
          <div className="container py-4 flex items-center justify-between">
            <a href="/" className="text-2xl font-bold text-primary">
              PetAssign
            </a>
            <nav className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-gray-600 hover:text-primary">
                Features
              </a>
              <a href="#community" className="text-gray-600 hover:text-primary">
                Community
              </a>
              <a href="#faq" className="text-gray-600 hover:text-primary">
                FAQ
              </a>
              <a href="/login" className="btn btn-secondary">
                Log in
              </a>
              <a href="/signup" className="btn btn-primary">
                Sign up
              </a>
            </nav>
            <button className="md:hidden p-2 text-gray-600 hover:text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </header> */}
      <main className="pt-16 overflow-x-hidden">{children}</main>
    </div>
  );
}
