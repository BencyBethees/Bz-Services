"use client";

interface Props {
  theme: string;
  setTheme: (theme: string) => void;
}

export default function ThemeToggle({ theme, setTheme }: Props) {
  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="
        relative
        w-20
        h-10
        flex
        items-center
        rounded-full
        p-1
        transition-all
        duration-300
        bg-gray-300
        dark:bg-gray-700
      "
    >
      <div
        className={`
          w-8
          h-8
          bg-white
          dark:bg-black
          rounded-full
          shadow-md
          transform
          transition-transform
          duration-300
          ${theme === "dark" ? "translate-x-10" : "translate-x-0"}
        `}
      />
    </button>
  );
}
