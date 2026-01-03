import Link from "next/link";

interface SidebarHeaderProps {
  isExpanded: boolean;
  isMobileOpen: boolean;
  isHovered: boolean;
};

export const SidebarHeader = ({
  isExpanded,
  isHovered,
  isMobileOpen,
}: SidebarHeaderProps) => (
  <div className={`py-8 flex ${!isExpanded && !isHovered ? "lg:justify-center" : "justify-start"}`}>
    <Link href="/">
      <span>Admin Panel</span>
    </Link>
  </div>
);