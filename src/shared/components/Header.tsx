import React from "react";

interface HeaderProps {
  title: string;
};

export const Header = React.memo(
  ({ title }: HeaderProps) => {
    return (
      <div className="h-30 flex flex-col items-start justify-start pt-4">
        <h1 className="text-(--text-primary) text-3xl font-semibold">{title}</h1>
        <div className="w-full h-0.5 bg-(--border-primary) mt-4" />
        <span className="mt-2">BreadScrumb</span>
      </div>
    );
  }
);

Header.displayName = "Header";