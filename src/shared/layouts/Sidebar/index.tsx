"use client";

import React from "react";

import { usePathname } from "next/navigation";

import { SidebarNav } from "./SidebarNav";
import { SidebarHeader } from "./SidebarHeader";
import { SidebarFooter } from "./SidebarFooter";
import { useSidebar } from "@contexts/SidebarContext";
import { EllipsisIcon } from "lucide-react";

const DEFAULT_MODULE_KEY = "dashboard";

export const AppSidebar = () => {
  const pathname = usePathname() ?? `/${DEFAULT_MODULE_KEY}`;
  const {
    isExpanded,
    isMobileOpen,
    isHovered,
    setIsHovered,
  } = useSidebar();

  const getActiveKey = (pathname: string) =>
    pathname.split("/")[1] || DEFAULT_MODULE_KEY;

  const activeKey = React.useMemo(
    () => getActiveKey(pathname),
    [pathname]
  );

  return (
    <aside className={`
        fixed top-0 left-0 h-screen z-50 flex flex-col mt-16 lg:mt-0 px-5 bg-(--bg-secondary)
        border-r border-(--border-primary) transition-all duration-300
        ${isExpanded || isMobileOpen ? "w-75" : isHovered ? "w-75" : "w-25"}
        ${isMobileOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0
      `}
      onMouseEnter={() => !isExpanded && setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Header */}
      <SidebarHeader
        isExpanded={isExpanded}
        isHovered={isHovered}
        isMobileOpen={isMobileOpen}
      />

      {/* Navigation */}
      <div className="flex flex-col overflow-y-auto duration-300 ease-linear no-scrollbar">
        <nav className="mb-6">
          <div className="flex flex-col gap-4">
            <div>
              <h2 className={`
                  mb-4 text-xs uppercase flex leading-5 text-(--text-secondary)
                  ${!isExpanded && !isHovered ? "lg:justify-center" : "justify-start"}
                `}
              >
                {isExpanded || isHovered || isMobileOpen ? "Menu" : <EllipsisIcon />}
              </h2>
              <SidebarNav activeKey={activeKey} />
            </div>

            <div>

            </div>
          </div>
        </nav>
      </div>

      {/* Footer */}
      <SidebarFooter />
    </aside>
  );
};