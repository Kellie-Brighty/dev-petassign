import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// Create a custom event for theme changes
const themeChangeEvent = new Event("themeChange");

// Function to update theme across the app
function updateTheme(isDark: boolean) {
  if (isDark) {
    document.documentElement.classList.add("dark");
    document.body.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
    document.body.classList.remove("dark");
  }

  // Dispatch the theme change event
  document.dispatchEvent(themeChangeEvent);

  console.log("Theme updated to:", isDark ? "dark" : "light");
}

// Initial theme setup
const isDarkMode = localStorage.getItem("theme") === "dark";
console.log("Initial theme setting:", isDarkMode ? "dark" : "light");
updateTheme(isDarkMode);

// Create global theme toggle function
window.toggleDarkMode = () => {
  const currentIsDark = document.documentElement.classList.contains("dark");
  const newIsDark = !currentIsDark;

  // Update localStorage
  localStorage.setItem("theme", newIsDark ? "dark" : "light");

  // Update theme
  updateTheme(newIsDark);

  return newIsDark;
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
