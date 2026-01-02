import { BanknoteIcon, FileBoxIcon, HandCoinsIcon } from "lucide-react";

import { VNDCurrencyIcon } from "@public/icons/VNDCurrencyIcon";

import { FigureCard, FigureCardProps } from "@components/FigureCard";

const SAMPLE_DATA: FigureCardProps[] = [
  {
    label: "Total Sales",
    figure: {
      total: 32113000,
      percentage: 20,
      icon: <VNDCurrencyIcon />,
    },
    icon: <BanknoteIcon />,
  },
  {
    label: "Total Revenues",
    figure: {
      total: 12345000,
      percentage: 9,
      icon: <VNDCurrencyIcon />,
    },
    icon: <HandCoinsIcon />,
  },
  {
    label: "Total Orders",
    figure: {
      total: 5359,
      percentage: 5,
    },
    icon: <FileBoxIcon />,
  },
];

export const FigureAnalysis = () => {
  return (
    <div className="w-full flex items-center justify-center gap-4">
      {SAMPLE_DATA.map((card, idx) =>
        <FigureCard key={idx}
          label={card.label}
          figure={card.figure}
          icon={card.icon}
          topLevelClassName="w-full"
        />
      )}
    </div>
  );
};