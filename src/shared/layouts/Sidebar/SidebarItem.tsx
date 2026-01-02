import React from "react";

import Link from "next/link";

interface SidebarItemProps {
  href: string;
  label: string;
  icon: React.ReactElement;
  active: boolean;
};

export const SidebarItem = React.memo(({ href, label, icon, active }: SidebarItemProps) => (
  <Link
    href={href}
    className={`
      mx-2 flex items-center gap-3 rounded-full px-4 py-2 text-lg transition-colors
      ${active ? "bg-(--color-primary) text-(--text-primary)" : "hover:bg-(--bg-hover)"}
    `}
  >
    <span>{icon}</span>
    <span>{label}</span>
  </Link>
));

SidebarItem.displayName = "SidebarItem";