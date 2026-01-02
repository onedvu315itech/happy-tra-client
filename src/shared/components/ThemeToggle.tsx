"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { SunIcon, MoonIcon } from "lucide-react";

export function ThemeToggle() {
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
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={handleToggle}
      className={`
        relative flex h-10 w-8/10 items-center rounded-full cursor-pointer select-none
        transition-colors duration-300
        ${isDark ? " bg-slate-50" : " bg-slate-900"}
      `}
    >
      {/* Track Content */}
      <div className="relative flex w-full items-center justify-evenly px-3 text-xs font-medium">
        {isDark ? (
          <>
            <span className="text-slate-900">Dark Mode</span>
            <div className="h-4 w-4" />
          </>
        ) : (
          <>
            <div className="h-4 w-4" />
            <span className="text-slate-50">Light Mode</span>
          </>
        )}
      </div>

      {/* Slider */}
      <span
        className={`
          absolute left-1 flex h-8 w-8 items-center justify-center rounded-full
          transform transition-transform duration-300 ease-in-out will-change-transform
          ${isDark ? "translate-x-26 bg-slate-900" : "translate-x-0 bg-slate-50"}
        `}
      >
        {isDark ? (
          <MoonIcon className="h-4 w-4 text-white" />
        ) : (
          <SunIcon className="h-4 w-4 text-yellow-500" />
        )}
      </span>
    </button>
  );
};