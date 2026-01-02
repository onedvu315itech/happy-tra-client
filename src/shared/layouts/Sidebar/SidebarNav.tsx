import React from "react";
import { FileBoxIcon } from "lucide-react";

import { MenuIcon } from "@public/icons/MenuIcon";
import { DashboardIcon } from "@public/icons/Dashboard";

import { SidebarItem } from "./SidebarItem";

// ===========================================================
// App module list
// ===========================================================
interface SidebarModule {
  key: string;
  label: string;
  icon: React.ReactElement;
  href: string;
};

const APP_MODULE_LIST: SidebarModule[] = [
  { key: "dashboard", label: "Dashboard", icon: <DashboardIcon />, href: "/dashboard" },
  { key: "menu", label: "Menu", icon: <MenuIcon />, href: "/menu" },
  { key: "order", label: "Order", icon: <FileBoxIcon />, href: "/order" },
];

// ===========================================================
// Sidebar navigation
// ===========================================================
interface SidebarNavProps {
  activeKey: string;
}

export const SidebarNav = React.memo(({ activeKey }: SidebarNavProps) => {
  return (
    <ul className="space-y-1">
      {APP_MODULE_LIST.map((module) => (
        <li key={module.key}>
          <SidebarItem
            href={module.href}
            label={module.label}
            icon={module.icon}
            active={module.key === activeKey}
          />
        </li>
      ))}
    </ul>
  );
});

SidebarNav.displayName = "SidebarNav";