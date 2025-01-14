"use client";

import React, { useState, useEffect } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="text-3xl focus:outline-none p-4 rounded-md absolute right-6 -top-2 transition-transform transform hover:scale-110"
      aria-label="Toggle Dark Mode"
    >
      {darkMode ? (
        <FiSun className="text-yellow-500" /> // Sun icon for dark mode
      ) : (
        <FiMoon className="text-blue-500" /> // Moon icon for light mode
      )}
    </button>
  );
}