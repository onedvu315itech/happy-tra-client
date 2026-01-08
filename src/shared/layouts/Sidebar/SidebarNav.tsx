import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { ChevronDownIcon, EllipsisIcon, FileBoxIcon } from "lucide-react";

import { MenuIcon } from "@public/icons/MenuIcon";
import { DashboardIcon } from "@public/icons/Dashboard";

// ===========================================================
// App module list
// ===========================================================
interface SubItems {
  name: string;
  path: string;
  pro?: boolean;
  new?: boolean
};

interface NavItem {
  name: string;
  icon: React.ReactNode;
  path?: string;
  subItems?: SubItems[];
};

const MAIN_APP_MODULE_LIST: NavItem[] = [
  {
    icon: <DashboardIcon />,
    name: "Dashboard",
    subItems: [{ name: "Ecommerce", path: "/", pro: false }],
  },
  {
    icon: <MenuIcon />,
    name: "Menu",
    path: "/menu",
  },
  {
    icon: <FileBoxIcon />,
    name: "Order",
    path: "/order",
  },
];

const OTHER_APP_MODULE_LIST: NavItem[] = [
  {
    icon: <DashboardIcon />,
    name: "Dashboard",
    subItems: [{ name: "Ecommerce", path: "/", pro: false }],
  },
  {
    icon: <MenuIcon />,
    name: "Menu",
    path: "/menu",
  },
  {
    icon: <FileBoxIcon />,
    name: "Order",
    path: "/order",
  },
];

// ===========================================================
// Sidebar Item Render
// ===========================================================
interface SidebarItemProps extends SidebarNavProps {
  navItems: NavItem[];
  menuType: "main" | "others";
};

const SidebarItem = ({
  navItems,
  menuType,
  isExpanded,
  isHovered,
  isMobileOpen,
}: SidebarItemProps) => {
  const pathname = usePathname();

  const subMenuRefs = React.useRef<Record<string, HTMLDivElement | null>>({});
  const [subMenuHeight, setSubMenuHeight] = React.useState<Record<string, number>>({});
  const [openSubmenu, setOpenSubmenu] = React.useState<{
    type: "main" | "others";
    index: number;
  } | null>(null);

  const isActive = React.useCallback((path: string) => path === pathname, [pathname]);

  React.useEffect(() => {
    // Check if the current path matches any submenu item
    let submenuMatched = false;
    ["main", "others"].forEach((menuType) => {
      const items = menuType === "main" ? MAIN_APP_MODULE_LIST : OTHER_APP_MODULE_LIST;
      items.forEach((nav, index) => {
        if (nav.subItems) {
          nav.subItems.forEach((subItem) => {
            if (isActive(subItem.path)) {
              setOpenSubmenu({
                type: menuType as "main" | "others",
                index,
              });
              submenuMatched = true;
            }
          });
        }
      });
    });

    // If no submenu item matches, close the open submenu
    if (!submenuMatched) {
      setOpenSubmenu(null);
    }
  }, [pathname, isActive]);

  React.useEffect(() => {
    // Set the height of the submenu items when the submenu is opened
    if (openSubmenu !== null) {
      const key = `${openSubmenu.type}-${openSubmenu.index}`;
      if (subMenuRefs.current[key]) {
        setSubMenuHeight((prevHeights) => ({
          ...prevHeights,
          [key]: subMenuRefs.current[key]?.scrollHeight || 0,
        }));
      }
    }
  }, [openSubmenu]);

  const handleSubmenuToggle = (index: number, menuType: "main" | "others") => {
    setOpenSubmenu((prevOpenSubmenu) => {
      if (
        prevOpenSubmenu &&
        prevOpenSubmenu.type === menuType &&
        prevOpenSubmenu.index === index
      ) {
        return null;
      }
      return { type: menuType, index };
    });
  };

  return (
    <ul className="flex flex-col gap-4">
      {navItems.map((nav, index) => (
        <li key={nav.name}>
          {nav.subItems ? (
            <button
              onClick={() => handleSubmenuToggle(index, menuType)}
              className={`
                relative flex items-center w-full gap-3 px-3 py-2 font-medium rounded-lg text-sm cursor-pointer
                ${openSubmenu?.type === menuType && openSubmenu?.index === index
                  ? "bg-(--color-secondary) text-(--color-primary)"
                  : "menu-item-inactive"
                } 
                ${!isExpanded && !isHovered
                  ? "lg:justify-center"
                  : "lg:justify-start"
                }
              `}
            >
              <span
                className={` ${openSubmenu?.type === menuType && openSubmenu?.index === index
                  ? "menu-item-icon-active"
                  : "menu-item-icon-inactive"
                  }`}
              >
                {nav.icon}
              </span>
              {(isExpanded || isHovered || isMobileOpen) && (
                <span className={`menu-item-text`}>{nav.name}</span>
              )}
              {(isExpanded || isHovered || isMobileOpen) && (
                <ChevronDownIcon
                  className={`ml-auto w-5 h-5 transition-transform duration-200  ${openSubmenu?.type === menuType &&
                    openSubmenu?.index === index
                    ? "rotate-180 text-brand-500"
                    : ""
                    }`}
                />
              )}
            </button>
          ) : (
            nav.path && (
              <Link
                href={nav.path}
                className={`menu-item group ${isActive(nav.path) ? "menu-item-active" : "menu-item-inactive"
                  }`}
              >
                <span
                  className={`${isActive(nav.path)
                    ? "menu-item-icon-active"
                    : "menu-item-icon-inactive"
                    }`}
                >
                  {nav.icon}
                </span>
                {(isExpanded || isHovered || isMobileOpen) && (
                  <span className={`menu-item-text`}>{nav.name}</span>
                )}
              </Link>
            )
          )}
          {nav.subItems && (isExpanded || isHovered || isMobileOpen) && (
            <div
              ref={(el) => {
                subMenuRefs.current[`${menuType}-${index}`] = el;
              }}
              className="overflow-hidden transition-all duration-300"
              style={{
                height:
                  openSubmenu?.type === menuType && openSubmenu?.index === index
                    ? `${subMenuHeight[`${menuType}-${index}`]}px`
                    : "0px",
              }}
            >
              <ul className="mt-2 space-y-1 ml-9">
                {nav.subItems.map((subItem) => (
                  <li key={subItem.name}>
                    <Link
                      href={subItem.path}
                      className={`menu-dropdown-item ${isActive(subItem.path)
                        ? "menu-dropdown-item-active"
                        : "menu-dropdown-item-inactive"
                        }`}
                    >
                      {subItem.name}
                      <span className="flex items-center gap-1 ml-auto">
                        {subItem.new && (
                          <span
                            className={`ml-auto ${isActive(subItem.path)
                              ? "menu-dropdown-badge-active"
                              : "menu-dropdown-badge-inactive"
                              } menu-dropdown-badge `}
                          >
                            new
                          </span>
                        )}
                        {subItem.pro && (
                          <span
                            className={`ml-auto ${isActive(subItem.path)
                              ? "menu-dropdown-badge-active"
                              : "menu-dropdown-badge-inactive"
                              } menu-dropdown-badge `}
                          >
                            pro
                          </span>
                        )}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </li>
      ))}
    </ul>
  )
};

// ===========================================================
// Sidebar navigation
// ===========================================================
interface SidebarNavProps {
  isExpanded: boolean;
  isHovered: boolean;
  isMobileOpen: boolean;
};

export const SidebarNav = ({ isMobileOpen, isHovered, isExpanded }: SidebarNavProps) => (
  <div>
    <h2
      className={`mb-4 text-xs uppercase flex leading-5 text-gray-400 ${!isExpanded && !isHovered
        ? "lg:justify-center"
        : "justify-start"
        }`}
    >
      {isExpanded || isHovered || isMobileOpen ? (
        "Menu"
      ) : (
        <EllipsisIcon />
      )}
    </h2>

    <SidebarItem
      menuType="main"
      navItems={MAIN_APP_MODULE_LIST}
      isExpanded={isExpanded}
      isHovered={isHovered}
      isMobileOpen={isMobileOpen}
    />
    <SidebarItem
      menuType="others"
      navItems={OTHER_APP_MODULE_LIST}
      isExpanded={isExpanded}
      isHovered={isHovered}
      isMobileOpen={isMobileOpen}
    />
  </div>
);