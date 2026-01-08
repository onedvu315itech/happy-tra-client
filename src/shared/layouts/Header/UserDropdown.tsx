"use client";

import Link from "next/link";
import { JSX, useState } from "react";

import { ChevronDownIcon, CircleAlertIcon, LogOutIcon, SettingsIcon, UserCircle2Icon, UserStarIcon } from "lucide-react";

import { Dropdown } from "@components/Dropdown/Dropdown";
import { DropdownItem } from "@components/Dropdown/DropdownItem";

interface UserDropdownItemProps {
  label: string;
  icon?: JSX.Element;
  onItemClick?: () => void;
};

const UserDropdownItem = ({
  label,
  icon: Icon,
  onItemClick
}: UserDropdownItemProps) => (
  <DropdownItem
    onItemClick={onItemClick}
    tag="a"
    href="/profile"
    className="
      flex items-center gap-3 px-3 py-2 font-medium rounded-lg text-sm text-(--text-primary)
      cursor-pointer transition-colors duration-300 hover:text-(--text-third) hover:bg-(--bg-third)
    "
  >
    {Icon}
    <span>{label}</span>
  </DropdownItem>
);

export default function UserDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleDropdown(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.stopPropagation();
    setIsOpen((prev) => !prev);
  };

  function closeDropdown() {
    setIsOpen(false);
  };

  const USER_DROPDOWN_ITEM_LIST: UserDropdownItemProps[] = [
    {
      label: "Edit profile",
      icon: <UserCircle2Icon />,
      onItemClick: closeDropdown,
    },
    {
      label: "Account settings",
      icon: <SettingsIcon />,
      onItemClick: closeDropdown,
    },
    {
      label: "Support",
      icon: <CircleAlertIcon />,
      onItemClick: closeDropdown,
    },
  ];

  return (
    <div className="relative">
      <button type="button"
        onClick={toggleDropdown}
        className="flex items-center cursor-pointer"
      >
        <span className="mr-3 overflow-hidden rounded-full h-11 w-11 justify-items-center content-center bg-(--bg-third) border border-(--border-secondary)">
          <UserStarIcon />
        </span>
        <span className="block mr-1 font-medium text-theme-sm">Admin</span>
        <ChevronDownIcon className={`transition-transform duration-300 ${isOpen ? "-rotate-180" : ""}`} />
      </button>

      <Dropdown isOpen={isOpen} onClose={closeDropdown}
        className="absolute right-0 mt-4.25 flex w-65 flex-col rounded-2xl border border-(--border-secondary) bg-(--bg-primary) p-3 shadow-lg"
      >
        <div>
          <span className="block font-medium text-(--text-primary) text-sm">
            Musharof Chowdhury
          </span>
          <span className="mt-0.5 block text-xs text-(--text-secondary)">
            randomuser@pimjo.com
          </span>
        </div>

        <ul className="flex flex-col gap-1 pt-4 pb-3 border-b border-gray-200 dark:border-gray-800">
          {USER_DROPDOWN_ITEM_LIST.map((item, idx) => (
            <li key={idx}>
              <UserDropdownItem
                label={item.label}
                icon={item.icon}
                onItemClick={item.onItemClick}
              />
            </li>
          ))}
        </ul>

        <Link href="/signin"
          className="
            flex items-center gap-3 px-5 py-2 mt-3 font-medium text-(--text-primary) rounded-lg text-sm
            cursor-pointer transition-colors duration-300 hover:bg-(--bg-third) hover:text-(--text-third)
          "
        >
          <LogOutIcon />
          Sign out
        </Link>
      </Dropdown>
    </div>
  );
};