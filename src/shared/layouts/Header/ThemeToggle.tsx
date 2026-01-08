"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { SunIcon, MoonIcon } from "lucide-react";

export default function ThemeToggle() {
  // ===========================================================
  // Hooks
  // ===========================================================
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  // ===========================================================
  // Handlers
  // ===========================================================
  const isDark = resolvedTheme === "dark"

  const handleToggle = () => setTheme(isDark ? "light" : "dark")

  // ===========================================================
  // Render
  // ===========================================================
  if (!mounted) return null;

  return (
    <button type="button" aria-label="Toggle theme"
      onClick={handleToggle}
      className={`
        relative flex h-11 w-11 items-center rounded-full cursor-pointer select-none text-(--text-primary)
        transition-colors duration-300 bg-(--bg-primary) border border-(--border-primary) 
        ${isDark ? "hover:text-yellow-300 hover:bg-(--bg-third)" : "hover:text-(--text-third) hover:bg-(--bg-third)"}
      `}
    >
      {/* Track Content */}
      <div className="relative flex w-full items-center justify-evenly px-3 text-xs font-medium">
        {isDark ? (
          <SunIcon className="h-5 w-5" />
        ) : (
          <MoonIcon className="h-5 w-5" />
        )}
      </div>
    </button>
  );
};