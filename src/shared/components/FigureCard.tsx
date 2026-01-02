import React from "react";
import { ArrowUpIcon } from "lucide-react";

import Badge from "@uis/Badge";
import { formatNormal } from "@utils/formatCurrency";

interface Figure {
  total: number;
  percentage: number;
  icon?: React.ReactElement;
};

export interface FigureCardProps {
  label: string;
  figure: Figure;
  icon?: React.ReactElement;
  topLevelClassName?: string;
};

export const FigureCard: React.FC<FigureCardProps> = ({
  label,
  figure,
  icon,
  topLevelClassName,
}) => {
  return (
    <div className={`rounded-2xl border border-(--border-primary) bg-(--bg-primary) p-5 md:p-6 ${topLevelClassName}`}>
      <div className="w-full flex items-start justify-between h-24 rounded-xl">
        <div className="flex flex-col items-start justify-center gap-1">
          <span className="text-lg text-(--text-secondary) font-semibold">
            {label}
          </span>
          <h4 className="mt-2 text-2xl font-bold flex items-center justify-center">
            <span>{figure.icon}</span>{formatNormal(figure.total)}
          </h4>
          <Badge color="success">
            <ArrowUpIcon />
            {figure.percentage}% <span className="text-(--text-secondary)">From last month</span>
          </Badge>
        </div>

        <div className="flex items-center justify-center w-12 h-12 bg-(--bg-secondary) rounded-xl">
          {icon}
        </div>
      </div>
    </div>
  );
};