import React from "react";
import { XIcon } from "lucide-react";

import { ExpandIcon } from "@public/icons/ExpandIcon";

import { useSidebar } from "@contexts/SidebarContext";

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
    <header className="sticky top-0 flex w-full bg-(--bg-secondary) border border-(--border-primary) z-99999">
      <div className="flex flex-col items-center justify-between grow lg:flex-row lg:px-6">
        <button type="button"
          aria-label="Toggle Sidebar"
          onClick={handleToggle}
          className="items-center justify-center w-10 h-10 border-(--border-primary) text-(--text-primary)"
        >
          {isMobileOpen ? (
            <XIcon />
          ) : (
            <ExpandIcon />
          )}
        </button>
      </div>
    </header>
  );
};