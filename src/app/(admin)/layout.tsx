"use client";

import React from "react";

import { AppHeader } from "@layouts/Header";
import { AppSidebar } from "@layouts/Sidebar";
import { useSidebar } from "@contexts/SidebarContext";
import Backdrop from "@layouts/Backdrop";

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
      <Backdrop />

      <div className={`relative flex flex-1 flex-col overflow-x-hidden overflow-y-auto transition-all duration-300 ease-in-out ${mainContentMargin}`}>
        <AppHeader />
        <main className="bg-(--bg-secondary)">
          <div className="mx-auto max-w-390 p-4 md:p-6 pb-20 md:pb-6">{children}</div>
        </main>
      </div>
    </div>
  );
};