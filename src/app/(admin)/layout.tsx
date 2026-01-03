"use client";

import React from "react";

import { AppHeader } from "@layouts/Header";
import { AppSidebar } from "@layouts/Sidebar";
import { useSidebar } from "@contexts/SidebarContext";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const {
    isExpanded,
    isHovered,
    isMobileOpen,
  } = useSidebar();

  const mainContentMargin = isMobileOpen
    ? "ml-0"
    : isExpanded || isHovered
      ? "lg:ml-75"
      : "lg:ml-25";

  return (
    <div className="min-h-screen xl:flex">
      <AppSidebar />

      <div className={`flex-1 transition-all duration-300 ease-in-out ${mainContentMargin}`}>
        <AppHeader />
        <div className="p-4 mx-auto max-w-400 md:p-6">{children}</div>
      </div>
    </div>
  );
};