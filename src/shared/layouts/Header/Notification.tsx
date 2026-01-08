"use client";

import Link from "next/link";
import React, { useState } from "react";

import { BellIcon, UserCircleIcon, XIcon } from "lucide-react";

import { Dropdown } from "@components/Dropdown/Dropdown";
import { DropdownItem } from "@components/Dropdown/DropdownItem";

interface NotificationItemProps {
  onItemClick: () => void;
};

const NotificationItem = ({
  onItemClick
}: NotificationItemProps) => (
  <DropdownItem
    onItemClick={onItemClick}
    className="
      flex gap-3 rounded-lg border-b border-(--border-secondary) px-4.5 py-3 text-(--text-primary)
      cursor-pointer transition-colors duration-300 hover:bg-(--bg-third) hover:text-(--text-third)
    "
  >
    <span className="relative block w-full h-10 rounded-full z-1 max-w-10">
      <UserCircleIcon className="w-10 h-10 text-(--text-primary)" />
      <span className="absolute bottom-0 right-0 z-10 h-2.5 w-full max-w-2.5 rounded-full border-2 border-(--border-secondary) bg-green-600"></span>
    </span>

    <span className="block">
      <span className="mb-1.5 space-x-1 block text-sm text-(--text-secondary)">
        <span className="font-medium text-(--text-primary)">
          Terry Franci
        </span>
        <span>requests permission to change</span>
        <span className="font-medium text-(--text-primary)">
          Project - Nganter App
        </span>
      </span>

      <span className="flex items-center gap-2 text-xs text-(--text-secondary)">
        <span>Project</span>
        <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
        <span>5 min ago</span>
      </span>
    </span>
  </DropdownItem>
);

export default function Notification() {
  const [isOpen, setIsOpen] = useState(false);
  const [notifying, setNotifying] = useState(true);

  function toggleDropdown() {
    setIsOpen(!isOpen);
  }

  function closeDropdown() {
    setIsOpen(false);
  }

  const handleClick = () => {
    toggleDropdown();
    setNotifying(false);
  };

  const NOTIFICATION_ITEM_LIST_SAMPLE: NotificationItemProps[] = [
    {
      onItemClick: closeDropdown,
    },
    {
      onItemClick: closeDropdown,
    },
    {
      onItemClick: closeDropdown,
    },
    {
      onItemClick: closeDropdown,
    },
  ];

  return (
    <div className="relative">
      <button type="button"
        onClick={handleClick}
        className="
          relative flex items-center justify-center text-(--text-primary) rounded-full h-11 w-11 border border-(--border-primary)
          cursor-pointer transition-colors duration-300 hover:bg-(--bg-third) hover:text-(--text-third)
        "
      >
        <span
          className={`absolute right-0 top-0.5 z-10 h-2 w-2 rounded-full bg-orange-400 ${!notifying ? "hidden" : "flex"
            }`}
        >
          <span className="absolute inline-flex w-full h-full bg-orange-400 rounded-full opacity-75 animate-ping"></span>
        </span>
        <BellIcon className="w-5 h-5" />
      </button>

      <Dropdown isOpen={isOpen} onClose={closeDropdown}
        className="absolute -right-60 lg:right-0 mt-4.25 flex h-120 w-87.5 sm:w-90.25 flex-col rounded-2xl border border-(--border-primary) bg-(--bg-primary) p-3 shadow-lg"
      >
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-(--border-secondary)">
          <h5 className="text-lg font-semibold text-(--text-primary)">
            Notification
          </h5>
          <button type="button"
            onClick={toggleDropdown}
            className="text-(--text-primary) cursor-pointer transition-colors duration-300 hover:opacity-50"
          >
            <XIcon />
          </button>
        </div>

        <ul className="flex flex-col h-auto overflow-y-auto custom-scrollbar">
          {/* Example notification items */}
          {NOTIFICATION_ITEM_LIST_SAMPLE.map((noti, idx) => (
            <li key={idx}>
              <NotificationItem
                onItemClick={noti.onItemClick}
              />
            </li>
          ))}
        </ul>

        <Link href="#"
          className="
            block px-4 py-2 mt-3 text-sm font-medium text-center text-(--text-primary) bg-(--bg-primary) 
            border border-(--border-secondary) rounded-lg cursor-pointer transition-colors duration-300
            hover:bg-(--bg-third) hover:text-(--text-third)
          "
        >
          View All Notifications
        </Link>
      </Dropdown>
    </div>
  );
};