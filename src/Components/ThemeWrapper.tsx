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

    if (savedTheme === "light") {
      setLightMode(true);
      document.body.classList.add("light");
      document.body.classList.remove("dark");
    } else {
      setLightMode(false);
      document.body.classList.add("dark");
      document.body.classList.remove("light");
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
        className="
fixed
bottom-6
left-2 md:left-4
px-3 md:px-4
py-2
text-xs md:text-sm
border-2 border-white
font-bold
bg-black text-white
hover:text-orange-400 hover:border-black hover:bg-white
flex items-center justify-center
shadow-lg
z-[999]
"
      >
        Light / Dark
      </button>

      {children}
    </>
  );
}
