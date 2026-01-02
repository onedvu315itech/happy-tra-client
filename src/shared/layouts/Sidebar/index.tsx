"use client";

import React from "react";

import { usePathname } from "next/navigation";

import { SidebarNav } from "./SidebarNav";
import { SidebarHeader } from "./SidebarHeader";
import { SidebarFooter } from "./SidebarFooter";

const DEFAULT_MODULE_KEY = "dashboard";

export const Sidebar = () => {
  const pathname = usePathname() ?? `/${DEFAULT_MODULE_KEY}`;

  const getActiveKey = (pathname: string) =>
    pathname.split("/")[1] || DEFAULT_MODULE_KEY;

  const activeKey = React.useMemo(
    () => getActiveKey(pathname),
    [pathname]
  );

  return (
    <aside className="fixed top-0 left-0 h-screen w-64 flex flex-col">
      {/* Header */}
      <SidebarHeader />

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-4">
        <SidebarNav activeKey={activeKey} />
      </nav>

      {/* Footer */}
      <SidebarFooter />
    </aside>
  );
};