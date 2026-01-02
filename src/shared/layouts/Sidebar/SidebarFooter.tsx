import { ThemeToggle } from "@components/ThemeToggle";
import React from "react";

interface SidebarProps {
  adminName?: string;
  adminRole?: string;
};

export const SidebarFooter: React.FC<SidebarProps> = ({
  adminName = "Admin User",
  adminRole = "Administrator",
}) => (
  <div className="py-4 flex flex-col items-center justify-center gap-4">
    <div className="w-7/10 mb-3 flex items-center justify-center gap-2">
      <div className="relative w-10 h-10 rounded-full bg-(--color-primary) flex items-center justify-center text-(--text-primary) font-bold shadow-md">
        A
        <span className="absolute right-0 bottom-0 w-3 h-3 bg-green-600 rounded-full border border-white" />
      </div>
      <div className="flex flex-col justify-center items-start">
        <p className="text-sm font-semibold text-(--text-primary)">{adminName}</p>
        <p className="text-xs text-(--text-secondary)">{adminRole}</p>
      </div>
    </div>
    <div className="w-7/10 justify-items-center">
      <ThemeToggle />
    </div>
  </div>
);