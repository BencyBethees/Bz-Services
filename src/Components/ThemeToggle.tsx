"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="
        fixed bottom-4 left-3 z-50
        w-24 h-10 
        flex items-center justify-center
        bg-black text-white font-bold 
        border border-white border-2 hover:bg-white hover:text-orange-400
        
       
      "
    >
      Light/Dark
    </button>
  );
}
