import { useState, useEffect } from "react";

export default function ThemeTestComponent() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(
    document.documentElement.classList.contains("dark")
  );

  // Listen for theme changes across the app
  useEffect(() => {
    const handleThemeChange = () => {
      const isDark = document.documentElement.classList.contains("dark");
      setIsDarkMode(isDark);
      console.log("Theme changed event received, dark mode:", isDark);
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

  // Force an immediate check of the theme status
  const checkThemeStatus = () => {
    const isDark = document.documentElement.classList.contains("dark");
    console.log("Current dark mode status:", isDark);
    console.log("HTML classList:", document.documentElement.classList);
    console.log("localStorage theme:", localStorage.getItem("theme"));
    setIsDarkMode(isDark);
  };

  // Toggle theme directly with the global function
  const forceToggleTheme = () => {
    if (window.toggleDarkMode) {
      const isDark = window.toggleDarkMode();
      setIsDarkMode(isDark);
      console.log(
        "Toggled theme using global function, now:",
        isDark ? "dark" : "light"
      );
    } else {
      // Fallback
      const isDark = !document.documentElement.classList.contains("dark");
      if (isDark) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
      setIsDarkMode(isDark);
      console.log(
        "Toggled theme using fallback method, now:",
        isDark ? "dark" : "light"
      );
    }
  };

  // Clear localStorage theme setting
  const resetTheme = () => {
    localStorage.removeItem("theme");
    document.documentElement.classList.remove("dark");
    setIsDarkMode(false);

    // Force refresh body styles
    document.body.style.backgroundColor = "white";
    document.body.style.color = "#1f2937";

    // Dispatch theme change event
    document.dispatchEvent(new Event("themeChange"));

    console.log("Theme reset. localStorage cleared.");
  };

  return (
    <div className="fixed top-4 right-4 z-50 bg-white dark:bg-[#101935] p-3 rounded-lg shadow-lg">
      <div className="flex flex-col gap-2">
        <p className="text-sm text-black dark:text-white">
          <span className="font-bold">Current theme:</span>{" "}
          {isDarkMode ? "Dark" : "Light"}
        </p>
        <button
          onClick={checkThemeStatus}
          className="px-3 py-1 bg-blue-500 text-white rounded text-sm"
        >
          Check Status
        </button>
        <button
          onClick={forceToggleTheme}
          className="px-3 py-1 bg-green-500 text-white rounded text-sm"
        >
          Force Toggle Theme
        </button>
        <button
          onClick={resetTheme}
          className="px-3 py-1 bg-red-500 text-white rounded text-sm"
        >
          Reset Theme
        </button>
      </div>
    </div>
  );
}
