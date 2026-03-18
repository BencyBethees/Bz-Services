"use client";

import { useState, useEffect } from "react";

export default function ThemeWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [lightMode, setLightMode] = useState(false);

  // Load saved theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  // Update theme when toggled
  useEffect(() => {
    if (lightMode) {
      document.body.classList.add("light");
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.body.classList.add("dark");
      document.documentElement.classList.toggle("dark");
      document.body.classList.remove("light");
      localStorage.setItem("theme", "dark");
    }
  }, [lightMode]);

  return (
    <>
 <button
  onClick={() => setLightMode(!lightMode)}
  className="theme-toggle-btn"
>
  Light / Dark
</button>

      {children}
    </>
  );
}