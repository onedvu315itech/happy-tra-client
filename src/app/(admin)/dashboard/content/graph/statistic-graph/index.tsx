"use client";

import { LineGraph } from "@components/LineGraph";
import useStatisticGraph from "./useStatisticGraph";

export const StatisticGraph = () => {
  const {
    mode,
    handleSelecteMode,
  } = useStatisticGraph();

  const GRAPH_BUTTON_LIST = [
    { key: "monthly", label: "Monthly" },
    { key: "quarterly", label: "Quarterly" },
    { key: "annually", label: "Annually" },
  ];

  return (
    <div className="
      rounded-2xl border border-(--border-primary) bg-(--bg-primary) p-5 md:p-6
      flex flex-col justify-center items-start w-3/5
      "
    >
      {/* Header */}
      <div className="w-full flex items-center justify-between">
        <div>
          <h4 className="text-(--text-secondary) text-lg font-semibold">Statistics</h4>
          <p>Target you've set for each month</p>
        </div>

        <div className="bg-(--bg-secondary) flex items-center justify-between gap-4 py-2 px-4 rounded-xl">
          {GRAPH_BUTTON_LIST.map((button) => (
            <button key={button.key}
              type="button"
              onClick={() => handleSelecteMode(button.key)}
              className="cursor-pointer"
            >
              <span>{button.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Figure */}
      <div>

      </div>

      {/* Graph */}
      <div>
        <LineGraph />
      </div>
    </div>
  );
};