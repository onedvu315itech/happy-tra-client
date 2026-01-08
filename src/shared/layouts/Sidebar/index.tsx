"use client";

import React from "react";

import { useSidebar } from "@contexts/SidebarContext";
import { SidebarNav } from "./SidebarNav";
import { SidebarHeader } from "./SidebarHeader";

export const AppSidebar: React.FC = () => {
  const { isExpanded, isMobileOpen, isHovered, setIsHovered } = useSidebar();

  return (
    <aside
      className={
        `fixed mt-16 flex flex-col lg:mt-0 top-0 px-5 left-0 text-(--text-primary) bg-(--bg-secondary) 
        h-screen transition-all duration-300 ease-in-out z-50 border-r border-(--border-primary)
        ${isExpanded || isMobileOpen ? "w-72.5" : isHovered ? "w-72.5" : "w-22.5"}
        ${isMobileOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0
      `}
      onMouseEnter={() => !isExpanded && setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <SidebarHeader
        isExpanded={isExpanded}
        isHovered={isHovered}
        isMobileOpen={isMobileOpen}
      />

      <div className="flex flex-col overflow-y-auto duration-300 ease-linear no-scrollbar">
        <nav className="mb-6">
          <SidebarNav
            isExpanded={isExpanded}
            isHovered={isHovered}
            isMobileOpen={isMobileOpen}
          />
        </nav>
      </div>
    </aside>
  );
};