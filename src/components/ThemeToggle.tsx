import { useState, useEffect } from "react";

// Add type definition for the global function
declare global {
  interface Window {
    toggleDarkMode: () => boolean;
  }
}

interface ThemeToggleProps {
  className?: string;
}

export default function ThemeToggle({ className = "" }: ThemeToggleProps) {
  const [darkMode, setDarkMode] = useState<boolean>(
    document.documentElement.classList.contains("dark")
  );

  // Listen for theme changes across the app
  useEffect(() => {
    const handleThemeChange = () => {
      const isDark = document.documentElement.classList.contains("dark");
      setDarkMode(isDark);
    };

    // Initial check
    handleThemeChange();

    // Listen for theme change events
    document.addEventListener("themeChange", handleThemeChange);

    // Cleanup
    return () => {
      document.removeEventListener("themeChange", handleThemeChange);
    };
  }, []);

  const toggleTheme = () => {
    // Use the global toggle function
    if (window.toggleDarkMode) {
      const isDark = window.toggleDarkMode();
      setDarkMode(isDark);
    } else {
      // Fallback to direct DOM manipulation
      const currentIsDark = document.documentElement.classList.contains("dark");
      if (currentIsDark) {
        document.documentElement.classList.remove("dark");
        document.body.classList.remove("dark");
        localStorage.setItem("theme", "light");
        setDarkMode(false);
      } else {
        document.documentElement.classList.add("dark");
        document.body.classList.add("dark");
        localStorage.setItem("theme", "dark");
        setDarkMode(true);
      }
      console.log("Toggled theme using fallback method");
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className={`relative inline-flex h-9 w-16 items-center rounded-full backdrop-blur-sm ${className} ${
        darkMode
          ? "bg-gradient-to-r from-primary to-blue-600 border border-blue-500/20"
          : "bg-gradient-to-r from-amber-300 to-yellow-400 border border-yellow-300/20"
      } shadow-lg transition-all duration-300`}
      aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      {/* Track glow effect */}
      <span
        className={`absolute inset-0 rounded-full ${
          darkMode ? "bg-blue-400/10" : "bg-yellow-300/10"
        } blur-sm transition-opacity duration-300`}
      />

      {/* Sun icon (light mode) */}
      <span
        className={`absolute left-1.5 ${
          darkMode ? "opacity-0 -translate-x-2" : "opacity-100 translate-x-0"
        } transition-all duration-300 z-10`}
      >
        <svg
          className="w-4 h-4 text-yellow-600"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
            clipRule="evenodd"
          ></path>
        </svg>
      </span>

      {/* Moon icon (dark mode) */}
      <span
        className={`absolute right-1.5 ${
          darkMode ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2"
        } transition-all duration-300 z-10`}
      >
        <svg
          className="w-4 h-4 text-blue-100"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
        </svg>
      </span>

      {/* Toggle circle */}
      <span
        className={`relative inline-flex h-7 w-7 transform rounded-full transition-all duration-300 ${
          darkMode
            ? "translate-x-8 bg-blue-900 text-blue-100 shadow-[0_0_8px_rgba(59,130,246,0.5)]"
            : "translate-x-1 bg-amber-50 text-amber-600 shadow-[0_0_8px_rgba(251,191,36,0.5)]"
        } items-center justify-center shadow-lg z-20`}
      >
        {darkMode ? (
          <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12z"></path>
          </svg>
        ) : (
          <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12z"></path>
          </svg>
        )}
      </span>

      <span className="sr-only">{darkMode ? "Dark mode" : "Light mode"}</span>
    </button>
  );
}
