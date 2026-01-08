import Link from "next/link";
import Image from "next/image";

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
  <div className={`py-8 flex  ${!isExpanded && !isHovered ? "lg:justify-center" : "justify-start"}`}>
    <Link href="/">
      {isExpanded || isHovered || isMobileOpen ? (
        <>
          <Image
            className="dark:hidden"
            src="/images/logo/logo.svg"
            alt="Logo"
            width={150}
            height={40}
          />
          <Image
            className="hidden dark:block"
            src="/images/logo/logo-dark.svg"
            alt="Logo"
            width={150}
            height={40}
          />
        </>
      ) : (
        <Image
          src="/images/logo/logo-icon.svg"
          alt="Logo"
          width={32}
          height={32}
        />
      )}
    </Link>
  </div>
);