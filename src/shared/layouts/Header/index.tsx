import React from "react";
import Link from "next/link";
import { CommandIcon, EllipsisIcon, SearchIcon, XIcon } from "lucide-react";

import { ExpandIcon } from "@public/icons/ExpandIcon";

import { useSidebar } from "@contexts/SidebarContext";
import ThemeToggle from "./ThemeToggle";
import UserDropdown from "./UserDropdown";
import Notification from "./Notification";

export const AppHeader: React.FC = () => {
  // ===========================================================
  // Hooks
  // ===========================================================
  const inputRef = React.useRef<HTMLInputElement>(null);

  const [isApplicationMenuOpen, setApplicationMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key === "k") {
        event.preventDefault();
        inputRef.current?.focus();
      };
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  const {
    isMobileOpen,
    toggleSidebar,
    toggleMobileSidebar,
  } = useSidebar();

  // ===========================================================
  // Handlers
  // ===========================================================
  const handleToggle = () => {
    if (window.innerWidth >= 1024) toggleSidebar();
    else toggleMobileSidebar();
  };

  const toggleApplicationMenu = () => setApplicationMenuOpen((prev) => !prev);

  // ===========================================================
  // Render
  // ===========================================================
  return (
    <header className="sticky top-0 flex w-full bg-(--bg-secondary) lg:border-b border-(--border-primary) z-99999">
      <div className="flex flex-col items-center justify-between grow lg:flex-row lg:px-6">
        <div className="
            flex items-center justify-between lg:justify-normal w-full gap-2 sm:gap-4
            border-b lg:border-b-0 border-(--border-secondary) p-3 lg:px-0 lg:py-4
          "
        >
          <button type="button"
            aria-label="Toggle Sidebar"
            onClick={handleToggle}
            className="
              lg:flex items-center justify-center w-10 lg:w-11 h-10 lg:h-11 lg:border
              rounded-lg border-(--border-primary) text-(--text-primary) z-99999
            "
          >
            {isMobileOpen ? (
              <XIcon />
            ) : (
              <ExpandIcon />
            )}
          </button>

          <Link href="/" className="lg:hidden">
            <span className="text-(--text-primary)">Admin Panel</span>
          </Link>

          <button type="button"
            onClick={toggleApplicationMenu}
            className="lg:hidden flex items-center justify-center w-10 h-10 text-(--text-secondary) rounded-lg z-99999"
          >
            <EllipsisIcon />
          </button>

          <div className="hidden lg:block">
            <form>
              <div className="relative">
                <span className="absolute -translate-y-1/2 left-4 top-1/2 pointer-events-none">
                  <SearchIcon />
                </span>
                <input type="text" ref={inputRef}
                  placeholder="Search or type command"
                  className="
                    bg-(--bg-primary) text-(--text-primary) rounded-lg border border-(--border-primary) h-11
                    py-2 px-12 w-full text-sm placeholder:text-gray-400 focus:outline-hidden focus:ring-2 xl:w-110
                  "
                />
                <button type="button"
                  className="
                    absolute right-2.5 top-1/2 inline-flex -translate-y-1/2 items-center gap-0.5 rounded-lg border border-(--border-secondary)
                    bg-(--bg-secondary) px-2 py-1 text-xs -tracking-[0.2px] text-(--text-primary)
                  "
                >
                  <CommandIcon className="w-4 h-4" />
                  <span>K</span>
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className={`
            ${isApplicationMenuOpen ? "flex" : "hidden"} lg:flex items-center justify-between lg:justify-end
            gap-4 px-5 lg:px-0 py-4 shadow-md lg:shadow-none
          `}
        >
          <div className="flex items-center gap-2 sm:gap-3">
            <ThemeToggle />
            <Notification />
          </div>

          <UserDropdown />
        </div>
      </div>
    </header>
  );
};